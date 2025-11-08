export interface UserRow {
  id: string | number;
  first_name: string;
  last_name: string;
  birth_date: string;
  address: string;
  phone: string;
  email: string;   
  email_verified_at: string | null;
}
export type ApplicationStatus = "pending" | "interview" | "accepted" | "rejected";

export type ApplicationRow = {
  id: number;
  job_offer_id: number;
  user_id: number;
  message: string;
  cv_ref?: string;
  resume_ref?: string;
  motivation_ref?: string;
  created_at: string;
  status?: ApplicationStatus;
  user: UserRow,
  offer: JobOfferRow
};

export interface JobOfferRow {
  id: string | number;
  company_id: string | number;
  employee_id: string | number;
  category_id: string | number;
  title: string;
  description: string;
  contract_type: string;
  study_level: string;
  end_at: string;
}
