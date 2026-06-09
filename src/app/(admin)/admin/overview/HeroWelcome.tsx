
export default function HeroWelcome() {
  // Mock data
  const predictionsToday = 12

  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl px-6 py-4 mb-6">
      <h1 className="font-poppins text-xl font-bold">
        Selamat Kembali, Dato Chai – Hari Ini: {predictionsToday} Ramalan Dijana
      </h1>
    </div>
  )
}