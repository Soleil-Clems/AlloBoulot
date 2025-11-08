// types/db.d.ts

import type JobOffer from "@/components/main/SectionJob/JobOffer";

// A typed *virtual module* you can import from anywhere in your app.
declare module "@app/db" {
  /** Prefer number for FE convenience; switch to `string` if your API returns bigint ids as strings. */
  export type ID = number;

  /** From users.role ENUM */
  export type UserRole = "user" | "admin";

  /** job_applications.status is varchar in your schema; keep it open-ended. */
  export type ApplicationStatus = string; // e.g. "pending" | "accepted" | "rejected"

  /** Common timestamp fields coming from the DB (as ISO strings or null) */
  export interface Timestamps {
    created_at: string | null;
    updated_at: string | null;
  }

  // ---------- Row shapes (mirror your tables) ----------

  export interface CategoryRow extends Timestamps {
    id: ID;
    name: string;
    icon: string | null;
  }

  export interface CompanyRow extends Timestamps {
    id: ID;
    name: string;
    logo: string | null;
    address: string | null;
    description: string | null;
    employee_id: ID | null; // FK to employees.id (nullable)
    text: string | null;
  }

  export interface EmployeeRow extends Timestamps {
    id: ID;
    user_id: ID;        // FK to users.id
    post_name: string;  // job title / position
    role: string;
  }

  export interface JobOfferRow extends Timestamps {
    id: ID;
    company_id: ID;         // FK to companies.id
    employee_id: ID; // FK to employees.id
    category_id: ID; // FK to categories.id
    title: string;
    description: string;
    contract_type: string;
    study_level: string;
    end_at: string;  // DATETIME as string (ISO preferred)
  }

  export interface JobApplicationRow extends Timestamps {
    id: ID;
    job_offer_id: ID;        // FK to job_offers.id
    user_id: ID;             // FK to users.id
    message: string | null;
    resume_ref: string | null;
    motivation_ref: string | null;
    status: ApplicationStatus; // default 'pending' in DB
    title: string | null;
  }

  export interface UserRow extends Timestamps {
    id: ID;
    first_name: string;
    last_name: string;
    birth_date: string;         // DATE as "YYYY-MM-DD"
    address: string;
    phone: string;
    email: string;
    // password: string;           // hashed on backend
    role: UserRole;             // ENUM
    email_verified_at: string | null;
  }

  // ---------- Table map (handy for generics) ----------

  export interface Tables {
    categories: CategoryRow;
    companies: CompanyRow;
    employees: EmployeeRow;
    job_offers: JobOfferRow;
    job_applications: JobApplicationRow;
    users: UserRow;
  }
}



export type JobOfferApiResponse = JobOfferRow & CompanyRow & {
  category: CategoryRow | null,
}