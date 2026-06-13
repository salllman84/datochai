"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createSuperAdmin() {
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@datochai.com" }
  });

  if (existingAdmin) return "Admin already exists.";

  const hashedPassword = await bcrypt.hash("DatoChai2026!", 10);

  await prisma.user.create({
    data: {
      email: "admin@datochai.com",
      password: hashedPassword,
      name: "Lead Developer",
      role: "SUPER_ADMIN",
    }
  });

  return "Super Admin created successfully.";
}