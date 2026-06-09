'use client';

import { useState, useCallback, useRef } from 'react';
import { UploadCloud } from 'lucide-react';
import { uploadImage } from '@/app/actions/upload';
import Shimmer from '@/components/ui/shimmer';

const ImageUploadDropzone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<{ url: string; altText: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const result = await uploadImage(formData);
      setUploadedImage(result);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Image upload failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const result = await uploadImage(formData);
      setUploadedImage(result);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Image upload failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="
        bg-neutral-50/50 dark:bg-slate-800/50
        border-2 border-dashed border-white/20
        rounded-xl p-8 text-center
        transition-all duration-300
        hover:border-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]
        ${isDragging ? 'border-gold-500' : ''}
        ${isDragging && 'shadow-[0_0_20px_rgba(212,175,55,0.6)]'}
      "
    >
      {/* If processing, show skeleton loading state */}
      {isProcessing && (
        <div className="flex h-[200px] items-center justify-center">
          <div className="h-12 w-48">
            <Shimmer />
          </div>
        </div>
      )}

      {/* If upload successful, show preview and alt text */}
      {uploadedImage && !isProcessing && (
        <div className="space-y-4">
          <img
            src={uploadedImage.url}
            alt={uploadedImage.altText}
            className="max-w-xs h-auto rounded-xl border border-gray-200"
          />
          <p className="font-inter text-sm text-muted-foreground">
            {uploadedImage.altText}
          </p>
        </div>
      )}

      {/* Default state: show upload prompt */}
      {!isProcessing && !uploadedImage && (
        <div className="space-y-4">
          <UploadCloud className="h-10 w-10 mx-auto text-muted-foreground" />
          <p className="font-inter text-sm">Drag & drop an image here, or click to select</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="px-4 py-2 font-poppins font-semibold bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Browse Files
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadDropzone;