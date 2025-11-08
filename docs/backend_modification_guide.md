# Backend Modification Guide - AlloBoulot

## Introduction
This guide provides detailed instructions for modifying and extending the AlloBoulot backend's controllers and services. Follow these patterns to maintain consistency across the codebase.

## Services

### CompanyService (`app/Services/CompanyService.php`)

#### Current Responsibilities
- Company profile management
- Company-employee relations
- Company data validation

#### How to Modify
1. **Adding New Methods**
   ```php
   public function newMethod(array $data)
   {
       // Validate input
       $validated = validator($data, [
           'required_field' => 'required|string',
           // Add validation rules
       ])->validate();

       // Process data
       $result = // Your logic here

       // Return response
       return $result;
   }
   ```

2. **Error Handling**
   ```php
   try {
       // Your logic here
   } catch (ModelNotFoundException $e) {
       throw new ApiException('Company not found', 404);
   } catch (ValidationException $e) {
       throw new ApiException($e->getMessage(), 422);
   }
   ```

### JobOfferService (`app/Services/JobOfferService.php`)

#### Current Responsibilities
- Job posting management
- Search and filtering
- Application status tracking

#### How to Modify
1. **Adding Search Filters**
   ```php
   public function addSearchFilter(string $filterName, callable $filterLogic)
   {
       $this->filters[$filterName] = $filterLogic;
   }
   ```

2. **Extending Job Offer Features**
   ```php
   public function extendJobOffer(JobOffer $jobOffer, array $additionalData)
   {
       // Validate additional data
       // Update job offer
       // Return updated offer
   }
   ```

### JobApplicationService (`app/Services/JobApplicationService.php`)

#### Current Responsibilities
- Application processing
- Status management
- Applicant communication

#### How to Modify
1. **Adding New Application Status**
   ```php
   public function addCustomStatus(string $status)
   {
       // Validate status name
       // Add to valid statuses
       // Update related processes
   }
   ```

2. **Extending Application Process**
   ```php
   public function extendApplicationProcess(array $steps)
   {
       // Validate process steps
       // Add new steps to workflow
       // Update related handlers
   }
   ```

### UploadFileToCloudflareService (`app/Services/UploadFileToCloudflareService.php`)

#### Current Responsibilities
- File upload handling
- Cloudflare integration
- File validation

#### How to Modify
1. **Adding New File Type Support**
   ```php
   public function addFileTypeSupport(string $extension, array $validation)
   {
       // Add file type validation
       // Configure upload parameters
       // Update response handling
   }
   ```

## Controllers

### Adding New Controllers

1. **Create Controller Class**
   ```bash
   php artisan make:controller NewController
   ```

2. **Basic Controller Structure**
   ```php
   namespace App\Http\Controllers;

   use App\Services\RelevantService;
   use App\Http\Requests\CustomRequest;
   use App\Models\YourModel;

   class NewController extends Controller
   {
       protected $service;

       public function __construct(RelevantService $service)
       {
           $this->service = $service;
       }

       // Add your methods
   }
   ```

### Controller Modification Guidelines

1. **Request Validation**
   ```php
   // Create Request Class
   php artisan make:request CustomRequest

   // In the Request Class
   public function rules()
   {
       return [
           'field' => 'required|string|max:255',
           // Add more validation rules
       ];
   }
   ```

2. **Response Structure**
   ```php
   public function show($id)
   {
       try {
           $data = $this->service->find($id);
           return response()->json([
               'status' => 'success',
               'data' => $data
           ], 200);
       } catch (Exception $e) {
           return response()->json([
               'status' => 'error',
               'message' => $e->getMessage()
           ], $e->getCode() ?: 500);
       }
   }
   ```

3. **Adding Middleware**
   ```php
   public function __construct()
   {
       $this->middleware('auth:api');
       $this->middleware('role:admin')->only(['destroy']);
   }
   ```

## Testing Your Modifications

### Service Tests
1. **Create Test File**
   ```bash
   php artisan make:test Services/YourServiceTest
   ```

2. **Test Structure**
   ```php
   namespace Tests\Unit\Services;

   use Tests\TestCase;
   use App\Services\YourService;

   class YourServiceTest extends TestCase
   {
       protected $service;

       protected function setUp(): void
       {
           parent::setUp();
           $this->service = app(YourService::class);
       }

       /** @test */
       public function it_performs_expected_action()
       {
           // Arrange
           $input = ['key' => 'value'];

           // Act
           $result = $this->service->yourMethod($input);

           // Assert
           $this->assertEquals(expected, $result);
       }
   }
   ```

### Controller Tests
1. **Create Test File**
   ```bash
   php artisan make:test Controllers/YourControllerTest
   ```

2. **Test Structure**
   ```php
   namespace Tests\Feature\Controllers;

   use Tests\TestCase;
   use App\Models\User;

   class YourControllerTest extends TestCase
   {
       /** @test */
       public function it_returns_expected_response()
       {
           // Arrange
           $user = User::factory()->create();
           $data = ['key' => 'value'];

           // Act
           $response = $this->actingAs($user)
               ->postJson('/api/your-endpoint', $data);

           // Assert
           $response->assertStatus(200)
               ->assertJson(['status' => 'success']);
       }
   }
   ```

## Best Practices

### 1. Service Layer
- Keep business logic in services
- Use dependency injection
- Implement interface contracts
- Handle exceptions appropriately

### 2. Controllers
- Keep controllers thin
- Use form requests for validation
- Return consistent response structures
- Use resource collections for responses

### 3. Testing
- Write unit tests for services
- Write feature tests for controllers
- Use factories for test data
- Mock external services

### 4. Documentation
- Update API documentation
- Add PHPDoc blocks to new methods
- Update README.md when needed
- Document breaking changes

## Common Pitfalls to Avoid
1. Putting business logic in controllers
2. Skipping validation
3. Not handling exceptions properly
4. Missing error messages
5. Inconsistent response formats

## Example Workflow

1. **Plan Your Changes**
   - Identify affected components
   - Plan database changes
   - Design new endpoints

2. **Implementation**
   - Create/modify service
   - Create/modify controller
   - Add routes
   - Write tests

3. **Testing**
   ```bash
   # Run specific test
   php artisan test --filter=YourTestName

   # Run all tests
   php artisan test
   ```

4. **Documentation**
   - Update API documentation
   - Add code comments
   - Update README if needed