import Link from 'next/link'

export default function AnalyticsRight() {
  // Mock recent activity
  const activities = [
    { id: 1, text: 'Admin updated Hot Numbers', time: '2 hours ago' },
    { id: 2, text: 'New prediction published for Magnum 4D', time: '5 hours ago' },
    { id: 3, text: 'SEO Manager updated pillar page for Toto', time: '1 day ago' },
    { id: 4, text: 'Content Editor scheduled a new blog post', time: '2 days ago' },
  ]

  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins text-lg font-bold">Recent Activity</h2>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="flex-shrink-0 h-2 w-2 bg-primary rounded-full" />
              <div>
                <p className="font-inter">{activity.text}</p>
                <p className="text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/admin/predictions/create" className="mt-auto">
        <button
          className="
            w-full
            flex items-center justify-center gap-2
            px-4 py-3
            font-poppins
            font-semibold
            bg-gradient-to-r
            from-green-500
            via-amber-500
            to-green-500
            text-white
            rounded-xl
            transition-all
            duration-300
            hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]
          "
        >
          Quick Create New Prediction
        </button>
      </Link>
    </div>
  )
}