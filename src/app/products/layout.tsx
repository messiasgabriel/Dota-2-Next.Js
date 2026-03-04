import Link from "next/link"

export default function ProductsLayout ({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <>
            <header className="bg-blue-600 px-6 py-4 flex items-baseline gap-4">
                <span className="text-lg font-bold text-white">🛍️Loja </span>
                <nav className="flex gap-4 text-sm text-blue-100 text-center">
                    <Link className="font-bold" href="/">Home</Link>
                </nav>
            </header>
            {children}
            <footer className="bg-blue-600 py-4 text-center text-sm text-blue-100">
                desenvolvido por G.Messias
            </footer>
        </>
    )
}