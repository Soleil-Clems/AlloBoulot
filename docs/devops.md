# DevOps Documentation - AlloBoulot

## Overview
This document outlines the deployment, infrastructure, and operational aspects of the AlloBoulot application, covering both the Laravel backend and React frontend.

## Infrastructure

### Environment Components
1. **Backend Server**
   - PHP 8.x
   - MySQL Database

2. **Frontend Server**
   - Node.js environment

3. **Development Tools**
   - Git for version control
   - Composer for PHP dependencies
   - npm for JavaScript dependencies

## Deployment

### Backend Deployment
1. **Environment Setup**
   ```bash
   cd api/AlloBoulot
   composer install --no-dev
   cp .env.example .env
   php artisan key:generate
   php artisan jwt:secret
   ```

2. **Database Migration**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

### Frontend Deployment
1. **Build Process**
   ```bash
   cd client/AlloBoulot
   npm install
   npm run build
   ```

### Health Checks
- Database connections
- API endpoints
- Frontend accessibility
- Cache system
- Queue workers