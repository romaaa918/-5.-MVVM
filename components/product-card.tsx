"use client"

import Image from "next/image"
import type { Product } from "@/models/product.model"

interface ProductCardProps {
  product: Product
  onClick: (productId: number) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg p-2 flex flex-col cursor-pointer" onClick={() => onClick(product.id)}>
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={120}
        height={120}
        className="object-contain mx-auto"
      />
      <div className="text-xs font-bold mt-1">
        {product.name}, {product.price}р.
      </div>
      <div className="text-xs text-gray-500">{product.category}</div>
    </div>
  )
}

