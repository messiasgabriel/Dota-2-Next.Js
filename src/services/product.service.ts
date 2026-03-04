import { Product } from "@/types/product"
import { notFound } from "next/navigation"

export async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
}

export async function addToCart(formData: FormData) {
    'use server'
    const id = formData.get('id')
    console.log('Adicionado ao carrinho:', id)
}