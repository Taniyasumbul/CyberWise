
import React from 'react';
import { Button } from "@/components/ui/button";
import { ImagePlus, X } from "lucide-react";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
  selectedImage: string | null;
}

const ImageUpload = ({ onImageUpload, onImageRemove, selectedImage }: ImageUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-upload"
      />
      <label htmlFor="image-upload">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="cursor-pointer"
          asChild
        >
          <span>
            <ImagePlus className="h-4 w-4" />
          </span>
        </Button>
      </label>
      {selectedImage && (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="h-10 w-10 rounded object-cover"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute -top-2 -right-2 h-5 w-5"
            onClick={onImageRemove}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
