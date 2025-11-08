import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import type { DropzoneOptions } from "react-dropzone";
import { UploadCloud, Trash2, FileText, Download } from "lucide-react";
import type { StoredFile } from "@/hooks/useLocalFiles";

interface FileUploadProps {
  label: string;
  accept?: string;
  onFileSelect: (file: File | null) => void;
  error?: string;
  storageKey?: string;
  existingFile?: StoredFile | null;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = ".pdf",
  onFileSelect,
  error: externalError,
  existingFile,
}) => {
  const [storedFile, setStoredFile] = useState<StoredFile | null>(existingFile || null);
  const [internalError, setInternalError] = useState<string | null>(null);

  useEffect(() => {
    setStoredFile(existingFile || null);
  }, [existingFile]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: any[]) => {
      if (fileRejections?.length > 0) {
        const rejection = fileRejections[0];
        if (rejection.errors[0]?.code === "file-too-large") {
          setInternalError("Le fichier dépasse la taille maximale autorisée (1 Mo).");
        } else if (rejection.errors[0]?.code === "file-invalid-type") {
          setInternalError(`Format non accepté. Seuls les fichiers ${accept} sont autorisés.`);
        } else {
          setInternalError("Erreur lors de l'importation du fichier.");
        }
        onFileSelect(null);
        return;
      }

      const selected = acceptedFiles[0];
      if (selected) {
        setInternalError(null);
        onFileSelect(selected);
      }
    },
    [accept, onFileSelect]
  );

  const handleRemoveFile = () => {
    setInternalError(null);
    setStoredFile(null);
    onFileSelect(null);
  };

  const handleDownloadStoredFile = () => {
    if (storedFile) {
      const link = document.createElement("a");
      link.href = storedFile.data;
      link.download = storedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 1 * 1024 * 1024,
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{label}</h3>

      {!storedFile ? (
        <div
          {...getRootProps({
            className: `border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition ${isDragActive
                ? "border-blue-500 bg-blue-50"
                : (internalError || externalError)
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 hover:border-primary"
              }`,
          })}
        >
          <input {...getInputProps()} />
          <UploadCloud className="mx-auto mb-2 text-gray-500" size={32} />
          <p className="text-sm text-gray-700">
            Déposez votre fichier ici ou{" "}
            <span className="text-primary font-medium">cliquez ici</span> pour l’importer
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Taille max : 1 Mo | Formats acceptés : {accept}
          </p>
        </div>
      ) : (
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="text-gray-600" size={24} />
              <div>
                <p className="font-medium text-gray-800">{storedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(storedFile.size / 1024).toFixed(1)} Ko
                </p>
                <p className="text-xs text-primary/100 mt-1">vous pouvez desormais télécharger votre document en cliquant sur la flèche</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleDownloadStoredFile}
                className="text-primary/150 hover:text-primary transition"
                title="Télécharger"
              >
                <Download size={20} />
              </button>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-gray-600 hover:text-red-700 transition"
                title="Supprimer"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {(internalError || externalError) && (
        <p className="text-red-500 text-sm mt-2">{internalError || externalError}</p>
      )}
    </div>
  );
};