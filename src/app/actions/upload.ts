'use server';

import { promises as fs } from 'fs';
import sharp from 'sharp';

const UPLOAD_DIR = 'public/uploads';

/**
 * Server action to handle image upload and processing.
 * @param formData - FormData containing the file under the key 'image'
 * @returns Promise<{ url: string; altText: string }>
 */
export async function uploadImage(formData: FormData): Promise<{ url: string; altText: string }> {
  // Get the file from FormData
  const file = formData.get('image') as File;

  if (!file) {
    throw new Error('No file uploaded');
  }

  // Ensure the upload directory exists
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  // Convert File to Buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Process the image with sharp
  // Note: sharp by default strips all metadata (including EXIF) and converts to sRGB
  const processedBuffer = await sharp(buffer)
    .resize({ width: 1200 }) // Max width 1200px, maintain aspect ratio
    .webp() // Convert to WebP
    .toBuffer();

  // Generate a unique filename using timestamp and random number
  const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}.webp`;
  const filepath = `${UPLOAD_DIR}/${filename}`;

  // Save the processed image to the public/uploads directory
  await fs.writeFile(filepath, processedBuffer);

  // Return the public URL and mocked alt text
  return {
    url: `/uploads/${filename}`,
    altText: 'Auto-generated Alt Text',
  };
}