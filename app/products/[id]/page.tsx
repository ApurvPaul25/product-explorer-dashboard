
import { fetchProduct } from "@/lib/api";

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const product = await fetchProduct(params.id);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <img src={product.image} alt={product.title} className="h-64 mx-auto object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.category}</p>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-bold text-lg">₹{product.price}</p>
    </main>
  );
}
