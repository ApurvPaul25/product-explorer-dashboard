"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

type ProductCardProps = {
  product: any;
  favorite: boolean;
  onToggle: (id: number) => void;
};

export default function ProductCard({
  product,
  favorite,
  onToggle,
}: ProductCardProps) {
   {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-sm font-semibold text-white line-clamp-2">
        {product.title}
      </h3>

      <p className="text-white/70">${product.price}</p>

      <Button onClick={() => onToggle(product.id)}>
        {favorite ? "★ Favorite" : "☆ Add Favorite"}
      </Button>
    </Card>
  );
}
}


