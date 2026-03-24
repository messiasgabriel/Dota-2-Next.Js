import Link from "next/link"
import Image from "next/image"

export default function ProductsLayout ({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <>
            <header className="bg-transparent px-6 py-4 flex items-center gap-4">
                <nav className="flex gap-4 text-sm text-dota-gray text-center">
                    <Link className="font-bold text-[18px] font-reaver" href="/">
                        <Image
                            src="https://cdn.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
                            alt="Dota 2"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                </Link>
                </nav>
            </header>
            <main className="min-h-screen flex flex-col items-center gap-14">
                {children}
            </main>
            <footer className="bg-black py-8 flex flex-col items-center gap-5">
                <div className="flex items-center gap-12">
                    <Image
                        src="https://cdn.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
                        alt="Dota 2"
                        width={130}
                        height={36}
                        className="object-contain"
                    />
                </div>
                <div className="text-center text-xs text-dota-gray leading-relaxed">
                    <p>Dota e o logotipo do Dota são marcas e/ou marcas registradas da Valve Corporation.</p>
                    <p>2025 Valve Corporation, todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}
