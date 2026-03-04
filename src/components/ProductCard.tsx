'use client'

import { ProductCardProps } from "@/types/product"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ProductCard({ product }: ProductCardProps) {
    const [favorited, setFavorited] = useState(false)

    return (
        <Link
            href={`/products/${product.id}`}
            className="flex flex-col items-center gap-3 p-5 bg-white border border-slate-200 rounded-xl no-underline text-slate-900"
        >
            <div className="relative w-full h-45">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <span className="text-sm font-semibold text-center leading-snug">
                {product.title}
            </span>
            <span className="text-base font-bold text-blue-600">
                R$ {product.price}
            </span>
            <button
                onClick={e => {
                    e.preventDefault()
                    setFavorited(prev => !prev)
                }}
                className={`text-xl transition-colors 
                    ${  favorited
                        ? 'text-red-500'
                        : 'text-transparent [-webkit-text-stroke:1.5px_#ef4444]'
                    }
                `}
            >
                ♥
            </button>
        </Link>
    )
}
