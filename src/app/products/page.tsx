import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import { getProducts } from "@/services/product.service"

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <main className="min-h-screen flex flex-col items-center py-12 px-4 gap-8 bg-slate-50">
            <h1 className="text-5xl font-bold text-slate-900 m-0 tracking-tight">
                Lista de Produtos
            </h1>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 w-full max-w-275">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            <Link
                href="/"
                className="py-3 px-8 bg-blue-600 text-white rounded-lg no-underline text-base font-medium"
            >
                Voltar
            </Link>
        </main>
    )
}
