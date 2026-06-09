import { prisma } from '@/lib/prisma'

export default async function LotteryMatrix() {
  // Fetch all active lottery categories
  const categories = await prisma.lotteryCategory.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
  })

  // If we have less than 9, we can still show what we have.
  // We'll map over the categories and create a card for each.

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="
            bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl
            p-4
            flex
            flex-col
            items-start
            gap-2
            relative
          "
        >
          <div className="flex items-baseline gap-2 w-full">
            <h2 className="font-poppins text-sm font-medium">
              {category.name}
            </h2>
            {/* Mock status - in reality, we would check if there's a recent prediction */}
            <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
              PUBLISHED
            </span>
          </div>
          {/* Edit button */}
          <div className="absolute top-2 right-2">
            <a
              href={`/admin/lotteries/${category.slug}/edit`}
              className="text-muted-foreground hover:text-primary"
            >
              Edit
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}