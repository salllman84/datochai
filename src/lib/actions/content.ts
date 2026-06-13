"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// ==========================================
// ACTION 1: CREATE NEW ARTICLE
// ==========================================
export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const rawContent = formData.get("content") as string;
  let slug = formData.get("slug") as string;
  
  const featuredImage = formData.get("featuredImage") as string; 
  
  const focusKeyword = formData.get("focusKeyword") as string;
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const seoScore = parseInt(formData.get("seoScore") as string) || 0; 

  if (!title || !rawContent) {
    return { error: "Title and content are required." };
  }

  if (!slug) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }

  try {
    await prisma.post.create({
      data: {
        title,
        slug,
        featuredImage: featuredImage || null,
        content: { text: rawContent }, 
        status: "DRAFT",
        contentType: "BLOG",
        seo: {
          create: {
            title: seoTitle || title,
            description: seoDescription || "",
            focusKeyphrase: focusKeyword || "",
            canonicalUrl: `https://datochai.com/${slug}`,
            seoScore // Saved to DB
          }
        }
      }
    });

    revalidatePath("/content");
    return { success: true };

  } catch (error: any) {
    console.error("Detailed Prisma Error:", error);
    return { error: `Database Error: ${error.message.split('\n').pop() || "Unknown error"}` };
  }
}

// ==========================================
// ACTION 2: UPDATE EXISTING ARTICLE
// ==========================================
export async function updateArticle(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const rawContent = formData.get("content") as string;
  let slug = formData.get("slug") as string;
  
  const featuredImage = formData.get("featuredImage") as string;
  
  const focusKeyword = formData.get("focusKeyword") as string;
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const seoScore = parseInt(formData.get("seoScore") as string) || 0; 
  const customCanonical = formData.get("canonicalUrl") as string;
  const finalCanonical = customCanonical && customCanonical.trim() !== "" 
    ? customCanonical 
    : `https://datochai.com/${slug}`;

  if (!id || !title || !rawContent) return { error: "Missing required fields." };
  if (!slug) slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  try {
    await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        featuredImage: featuredImage || null,
        content: { text: rawContent },
        seo: {
          upsert: {
            create: { title: seoTitle || title, description: seoDescription || "", focusKeyphrase: focusKeyword || "", canonicalUrl: finalCanonical, seoScore },
            update: { title: seoTitle || title, description: seoDescription || "", focusKeyphrase: focusKeyword || "", canonicalUrl: finalCanonical, seoScore }
          }
        }
      }
    });
    revalidatePath("/content");
    return { success: true };
  } catch (error: any) {
    return { error: `Database Error: ${error.message.split('\n').pop() || "Unknown error"}` };
  }
}

// ==========================================
// ACTION 3: SET PUBLISH STATUS
// ==========================================
export async function setArticleStatus(id: string, status: "DRAFT" | "PUBLISHED") {
  try {
    await prisma.post.update({
      where: { id },
      data: {
        status,
        publishedAt: status === "PUBLISHED" ? new Date() : null,
      }
    });
    revalidatePath("/content");
    return { success: true };
  } catch (error) {
    console.error("Failed to update status:", error);
    return { error: "Failed to update article status." };
  }
}

// ==========================================
// ACTION 4: DELETE ARTICLE
// ==========================================
export async function deleteArticle(id: string) {
  try {
    await prisma.post.delete({
      where: { id }
    });
    revalidatePath("/content");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete article:", error);
    return { error: "Failed to delete article. It may be linked to other data." };
  }
}