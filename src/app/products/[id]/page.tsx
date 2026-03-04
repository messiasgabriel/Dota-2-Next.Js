import { getProduct } from "@/services/product.service"
import ProductDetails from "@/components/ProductDetails"
import Link from "next/link"

type PageProps = { params: Promise<{id: string}>}

async function addToCart(formData: FormData) {
    'use server'
    const id = formData.get('id')
    console.log('Adicionado ao carrinho:', id)
}

export default async function ProductPage({params}: PageProps) {
    const { id } = await params
    const product = await getProduct(id)

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 gap-6 bg-slate-50">
            <h1 className="text-5xl font-bold text-slate-900 m-0 tracking-tight">
                Detalhes do Produtos
            </h1>
            <form action={addToCart}>
                <input type="hidden" name="id" value={product.id} />
                <button type="submit" className="text-blue-600 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>
            </form>
            <ProductDetails product={product}/>
            <Link
                href="/products"
                className="py-3 px-8 bg-blue-600 text-white rounded-lg no-underline text-base font-medium"
            >
                Voltar
            </Link>
        </main>
    )
}
