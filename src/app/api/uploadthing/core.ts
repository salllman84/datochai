import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // 1. Image Uploader (Up to 4MB)
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Image upload complete! File URL:", file.url);
      return { url: file.url };
    }),

  // 2. Video Uploader (Up to 32MB)
  videoUploader: f({ video: { maxFileSize: "32MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Video upload complete! File URL:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;