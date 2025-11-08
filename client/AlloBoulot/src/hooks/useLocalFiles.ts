import { useState, useEffect, useCallback } from "react";

export interface StoredFile {
  name: string;
  type: string;
  size: number;
  data: string;
  uploadedAt: string;
}

export const useLocalFiles = (userId?: string | number) => {
  const CV_KEY = `user_cv_${userId ?? "guest"}`;
  const LETTER_KEY = `user_letter_${userId ?? "guest"}`;

  const [cv, setCV] = useState<StoredFile | null>(null);
  const [letter, setLetter] = useState<StoredFile | null>(null);

  // Charger les fichiers depuis le localStorage
  useEffect(() => {
    const storedCV = localStorage.getItem(CV_KEY);
    const storedLetter = localStorage.getItem(LETTER_KEY);

    if (storedCV) setCV(JSON.parse(storedCV));
    if (storedLetter) setLetter(JSON.parse(storedLetter));
  }, [CV_KEY, LETTER_KEY]);

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });

  const saveFile = useCallback(
    async (file: File, type: "cv" | "letter") => {
      const base64 = await fileToBase64(file);
      const storedFile: StoredFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        data: base64,
        uploadedAt: new Date().toISOString(),
      };
      if (type === "cv") {
        localStorage.setItem(CV_KEY, JSON.stringify(storedFile));
        setCV(storedFile);
      } else {
        localStorage.setItem(LETTER_KEY, JSON.stringify(storedFile));
        setLetter(storedFile);
      }
      return storedFile;
    },
    [CV_KEY, LETTER_KEY]
  );

  const deleteFile = useCallback(
    (type: "cv" | "letter") => {
      if (type === "cv") {
        localStorage.removeItem(CV_KEY);
        setCV(null);
      } else {
        localStorage.removeItem(LETTER_KEY);
        setLetter(null);
      }
    },
    [CV_KEY, LETTER_KEY]
  );

  return { cv, letter, saveFile, deleteFile };
};