import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-white m-0 tracking-tight">
        Home
      </h1>

      <Link
        href="/heros"
        className="py-3 px-8 bg-dota-btn text-dota-primary rounded-lg no-underline text-base font-medium"
      >
        Heróis
      </Link>
    </main>
  )
}
