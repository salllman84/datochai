import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Initiating database seeding protocol...");

  // 1. Create a Lottery Category
  const category = await prisma.lotteryCategory.upsert({
    where: { slug: "grand-dragon-lotto" },
    update: {},
    create: {
      name: "Grand Dragon Lotto",
      slug: "grand-dragon-lotto",
      drawSchedule: { days: ["Monday", "Wednesday", "Saturday", "Sunday"], time: "19:00" },
      isActive: true,
    },
  });
  console.log(`✅ Category created: ${category.name}`);

  // 2. Generate 7 Days of Historical Predictions (For our Accuracy Chart)
  console.log("📊 Generating historical prediction data...");
  const today = new Date();
  
  for (let i = 7; i > 0; i--) {
    const drawDate = new Date(today);
    drawDate.setDate(today.getDate() - i);
    
    // Simulate slight fluctuations in accuracy for a realistic chart
    const simulatedAccuracy = Math.floor(Math.random() * (98 - 85 + 1) + 85);

    await prisma.prediction.create({
      data: {
        lotteryCategoryId: category.id,
        drawDate: drawDate,
        mainNumbers: ["1234", "5678", "9012"],
        hotNumbers: ["12", "34", "88"],
        coldNumbers: ["01", "07", "44"],
        overdueNumbers: ["99", "23"],
        status: "PUBLISHED",
        historyLogs: [{ 
          event: "AI_GENERATION", 
          timestamp: drawDate.toISOString(),
          accuracyScore: simulatedAccuracy 
        }],
        scientificNote: "Neural network identified pattern variance in recent historical draws.",
      }
    });
  }
  console.log("✅ 7 historical prediction records injected.");

  // 3. Create an Expert Profile (E-E-A-T)
  const expert = await prisma.expert.upsert({
    where: { slug: "dr-francesco" },
    update: {},
    create: {
      name: "Dr. Francesco",
      slug: "dr-francesco",
      bio: "Lead Data Scientist specializing in predictive modeling and stochastic processes.",
      credentials: ["Ph.D. Data Science", "Former NVIDIA AI Researcher"],
      authorityLinks: ["https://scholar.google.com", "https://linkedin.com"],
      isApproved: true,
      isVisible: true,
    }
  });
  console.log(`✅ Expert profile loaded: ${expert.name}`);

  // 4. Create an AI Engineer Team Member
  const engineerPassword = await bcrypt.hash("DatoChai2026!", 10);
  await prisma.user.upsert({
    where: { email: "admin@datochai.com" },
    update: {},
    create: {
      email: "admin@datochai.com",
      password: engineerPassword,
      name: "System Engineer",
      role: "SUPER_ADMIN",
    }
  });
  console.log("✅ Team member 'AI Engineer' provisioned.");

  console.log("🚀 Database seeding complete. System ready.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });