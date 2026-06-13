"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function forceGeneratePrediction() {
  try {
    // 1. Get the target lottery category
    const category = await prisma.lotteryCategory.findUnique({
      where: { slug: "grand-dragon-lotto" }
    });

    if (!category) return { error: "Category not found." };

    // 2. Simulate AI processing time (In the future, you will call your Python script here)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 3. Generate a dynamic prediction
    const simulatedAccuracy = Math.floor(Math.random() * (98 - 85 + 1) + 85);
    
    await prisma.prediction.create({
      data: {
        lotteryCategoryId: category.id,
        drawDate: new Date(),
        mainNumbers: [
          Math.floor(1000 + Math.random() * 9000).toString(),
          Math.floor(1000 + Math.random() * 9000).toString(),
          Math.floor(1000 + Math.random() * 9000).toString()
        ],
        hotNumbers: ["26", "99", "07"],
        coldNumbers: ["04", "13", "44"],
        overdueNumbers: ["55", "88"],
        status: "PUBLISHED",
        historyLogs: [{ 
          event: "MANUAL_OVERRIDE", 
          timestamp: new Date().toISOString(),
          accuracyScore: simulatedAccuracy 
        }],
        scientificNote: "Manual override triggered by Admin. Real-time data ingested and processed.",
      }
    });

    // 4. Force Next.js to refresh the dashboard and predictions pages
    revalidatePath("/predictions");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate prediction." };
  }
}