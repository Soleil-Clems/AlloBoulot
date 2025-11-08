<?php

namespace App\Services;


use App\Exceptions\ApiException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class UploadFileToCloudflareService
{
    public function upload($file)
    {
        try {
        
            if (is_null($file)) {
                return NULL;
            }
    

            if(!empty(env('AWS_ACCESS_KEY_ID'))){
                $url = $this->uploadToCloudflare($file);
            }else{
                $url = $this->uploadToLaravelFile($file);
            }
        
            return  $url;
        } catch (\Exception $e) {
        
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de l\'upload: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function uploadToLaravelFile($file){

        $path = $file->store("uploads", "public");
        return asset("storage/" . $path);
    }

    public function uploadToCloudflare($file){
        try {
    
        
            Log::info('R2 Upload attempt', [
                'original_name' => $file->getClientOriginalName(),
                'size' => $file->getSize(),
            ]);


            $path = $file->store('uploads', 's3');

            if (empty($path)) {
                return response()->json([
                    'error' => true,
                    'message' => 'Le fichier n\'a pas été correctement enregistré sur R2.',
                ], 500);
            }

            $url = Storage::disk('s3')->url($path);

            Log::info('R2 Upload successful', ['path' => $path]);

            return  $url;
        } catch (\Exception $e) {
            Log::error('R2 Upload error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de l\'upload: ' . $e->getMessage(),
            ], 500);
        }
    }
}


