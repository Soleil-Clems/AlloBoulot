# AlloBoulot Deployment Procedures

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Development Environment Setup](#development-environment-setup)
3. [Monitoring and Maintenance](#monitoring-and-maintenance)

## Prerequisites

### Required Software
- Git
- Docker
- Docker Compose

### Access Requirements
- Git repository access
- Docker Hub access (if using private images)
- Production/staging server SSH access (for production deployment)

## Development Environment Setup

### 1. Clone and Setup
```bash
# Clone the repository
git clone git@github.com:EpitechMscProPromo2028/T-WEB-501-MAR_13.git
cd T-WEB-501-MAR_13
cd .docker

# Build containers with no cache
docker compose build --no-cache

# Start the containers
docker compose up 
```

### 2. Verify Installation
- Frontend should be available at: `http://localhost:5173`
- Backend API should be available at: `http://localhost:8000`
- PHPMyAdmin should be available at: `http://localhost:8083`

### 3. Common Docker Commands
```bash
# Stop containers
docker compose down

# View logs
docker compose logs

# View logs for specific service
docker compose logs AlloBoulot_api    # For backend
docker compose logs AlloBoulot_client # For frontend

# Rebuild specific service
docker compose build AlloBoulot_api
docker compose build AlloBoulot_client

# Restart services
docker compose restart

# View running containers
docker compose ps
```

## Staging Deployment

### 1. Pre-deployment Checklist
- [ ] All changes committed and pushed
- [ ] Environment variables configured
- [ ] Database backups (if needed)
- [ ] Required ports available


## Monitoring and Maintenance

### Container Health Checks
```bash
# Check container status
docker compose ps

# Check container resources
docker stats

# View container logs
docker compose logs --tail=100 -f
```

### Database Management
```bash
# Access MySQL container
docker compose exec db mysql -u root -p
```

### Cache Management
```bash
# Clear Laravel cache
docker compose exec api php artisan cache:clear
docker compose exec api php artisan config:clear
docker compose exec api php artisan route:clear
```

## Troubleshooting

### Common Issues and Solutions

1. **Container Won't Start**
```bash
# Check logs
docker compose logs <service_name>

# Verify environment variables
docker compose config

# Remove and rebuild
docker compose down
docker compose build --no-cache
docker compose up -d
```

2. **Permission Issues**
```bash
# Fix storage permissions
docker compose exec api chown -R www-data:www-data storage
docker compose exec api chmod -R 775 storage
```

3. **Database Connection Issues**
```bash
# Verify database connection
docker compose exec api php artisan migrate:status

# Reset database
docker compose exec api php artisan migrate:fresh
```

### Container Management

1. **Clean Up**
```bash
# Remove unused containers
docker compose down --remove-orphans

# Clean up volumes
docker compose down -v

# Remove unused images
docker image prune -a
```

2. **Rebuild Specific Services**
```bash
# Rebuild and restart specific service
docker compose build api
docker compose up -d api
```

## Environment Configuration

### Development
- Use `.env` files for local development
- Configure database connections in docker-compose.yml
- Set appropriate ports in docker-compose.yml

### Production
- Use production-specific docker-compose.prod.yml
- Configure SSL certificates
- Set up proper networking rules
- Enable production optimizations

## Security Considerations

1. **Environment Variables**
- Never commit sensitive data
- Use secure secrets management
- Rotate credentials regularly

2. **Container Security**
- Keep base images updated
- Run containers as non-root
- Implement proper access controls

3. **Network Security**
- Configure proper firewall rules
- Use secure communication
- Implement rate limiting