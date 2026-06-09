import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Seed SUPER_ADMIN
  const passwordHash = await bcrypt.hash('DatoChai@Admin2024!', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@datochai.com' },
    update: {},
    create: {
      email: 'admin@datochai.com',
      name: 'Dato Chai',
      passwordHash,
      role: Role.SUPER_ADMIN,
      is2FAEnabled: false,
    },
  })
  console.log('✅ Super Admin created:', admin.email)

  // Seed 9 Lottery Categories
  const lotteries = [
    { name: 'Carta Ramalan Magnum 4D', slug: 'carta-ramalan-magnum-4d-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: 'Carta 4D Ramalan Damacai 4D', slug: 'carta-4d-ramalan-damacai-kuda-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: 'Ramalan Lotto Sports Toto 4D', slug: 'ramalan-lotto-sports-toto-4d-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: 'Grand Dragon Lotto 4D', slug: 'ramalan-4d-grand-dragon-lotto-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: '9 Lotto 4D', slug: 'carta-planbee-9-lotto-4d-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: 'Perdana 4D', slug: 'carta-ramalan-4d-perdana-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday', 'Sunday'] } },
    { name: 'Singapore Pools', slug: 'carta-ramalan-4d-singapore-pools-hari-ini', drawSchedule: { days: ['Wednesday', 'Saturday'] } },
    { name: 'Sabah 88', slug: 'carta-ramalan-4d-sabah-88', drawSchedule: { days: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'] } },
    { name: 'Sandakan Turf Club', slug: 'carta-ramalan-sandakan-turf-club', drawSchedule: { days: ['Saturday', 'Sunday'] } },
  ]

  for (const lottery of lotteries) {
    const cat = await prisma.lotteryCategory.upsert({
      where: { slug: lottery.slug },
      update: {},
      create: lottery,
    })
    console.log('✅ Lottery category created:', cat.name)
  }

  console.log('🎉 Seed complete.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())