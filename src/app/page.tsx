import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50">
      <h1 className="text-5xl font-bold text-slate-900 m-0 tracking-tight">
        Home
      </h1>

      <Link
        href="/products"
        className="py-3 px-8 bg-blue-600 text-white rounded-lg no-underline text-base font-medium"
      >
        Produtos
      </Link>
    </main>
  )
}
