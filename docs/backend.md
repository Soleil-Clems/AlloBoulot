# Backend Documentation - AlloBoulot API

## Overview
The AlloBoulot API is built using Laravel, a powerful PHP framework. This documentation covers the setup, architecture, and key components of the backend system.

## Tech Stack
- **Framework**: Laravel
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: L5-Swagger

## Project Structure
```
api/AlloBoulot/
├── app/
│   ├── Http/Controllers/    # API Controllers
│   ├── Models/             # Database Models
│   └── Services/           # Business Logic Services
├── config/                 # Configuration files
├── database/
│   ├── migrations/         # Database migrations
│   ├── factories/          # Model factories for testing
│   └── seeders/           # Database seeders
├── routes/
│   └── api.php            # API routes
└── tests/                 # Unit and Feature tests
```

## Models
- **User**: Base user model with authentication
- **Employee**: Represents job seekers
- **Company**: Represents employers
- **JobOffer**: Job listings
- **JobApplication**: Applications submitted by employees
- **Category**: Job categories

## Controllers

### Authentication Controllers
1. **AuthController**
   - Handles user authentication
   - Login and registration
   - Token management
   - Password reset functionality

### User Management
1. **UserController**
   - User profile management
   - User information updates
   - Account settings
   - Role management

2. **EmployeeController**
   - Job seeker profile management
   - Employee information
   - Resume/CV management
   - Application history

### Company Management
1. **CompanyController**
   - Company profile management
   - Company information updates
   - Employee management within company
   - Company verification

2. **CompanyEmployeeController**
   - Manage company employees
   - Role assignment within company
   - Employee permissions
   - Team management

### Job Management
1. **JobOfferController**
   - Create and manage job listings
   - Update job details
   - Search and filtering
   - Job status management

2. **JobApplicationController**
   - Handle job applications
   - Application status updates
   - Candidate management
   - Application tracking

### Category Management
1. **CategoryController**
   - Manage job categories
   - Category CRUD operations
   - Category assignments
   - Category hierarchy

### File Management
1. **FileController**
   - Handle file uploads
   - Document management
   - File validation
   - Storage integration

### Admin Controllers
1. **AdminController**
   - System administration
   - User management
   - Content moderation
   - System settings

Each controller follows RESTful principles and includes:
- Standard CRUD operations where applicable
- Input validation
- Error handling
- Authentication checks
- Authorization policies

## Services
1. **CompanyService**
   - Company profile management
   - Company-specific operations

2. **JobOfferService**
   - Job posting management
   - Search and filtering

3. **JobApplicationService**
   - Application processing
   - Status management

4. **UploadFileToCloudflareService**
   - File upload handling
   - Cloud storage integration

## Authentication
- JWT-based authentication
- Token management
- Role-based access control

## Database
### Migrations
Key tables:
- users
- employees
- companies
- job_offers
- job_applications
- categories

### Seeders
Available seeders for development:
- CategorySeeder
- CompanySeeder
- UserSeeder

## API Routes
All API routes are prefixed with `/api` and defined in `routes/api.php`

## Error Handling
Custom exception handling through:
- `app/Exceptions/ApiException.php`
- `app/Exceptions/Handler.php`

## Development Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   composer install
   ```
3. Copy `.env.example` to `.env` and configure:
   - Database credentials
   - JWT secret
   - Cloudflare credentials
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Generate application key:
   ```bash
   php artisan key:generate
   ```
6. Generate JWT secret:
   ```bash
   php artisan jwt:secret
   ```

## Testing
- PHPUnit for testing
- Run tests with:
  ```bash
  php artisan test
  ```

## API Documentation
- Swagger documentation available at `/api/documentation`
- Generated using L5-Swagger
- Update documentation:
  ```bash
  php artisan l5-swagger:generate
  ```