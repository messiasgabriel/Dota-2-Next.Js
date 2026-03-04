import { ProductDetailsProps } from "@/types/product"
import Image from "next/image"

export default function ProductDetails( {product}: ProductDetailsProps){

    return(
        <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-125 w-full flex flex-col items-center gap-4">
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain"
            />
            <h2 className="text-2xl font-bold text-slate-900 m-0 tracking-tight text-center">
                {product.title}
            </h2>
            <p className="text-slate-500 text-[0.95rem] text-center m-0">
                {product.description}
            </p>
            <p className="text-xl font-bold text-blue-600 m-0">
                R$ {product.price}
            </p>
        </div>
    )
}