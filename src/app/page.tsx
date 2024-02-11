'use client'

import Card from "@/components/Card/Card";
import { getProducts } from "@/data/api/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import heroBanner from '../../public/bg-cafe.jpg';
import vector from '../../public/vector.svg';
import './style.css';

export default function Home() {
  const [products, setProducts] = useState<Product[]>()
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    setLoading(true)
    const products = await getProducts()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <main>
      <Image
        priority
        src={heroBanner}
        alt="fachada de uma cafeteria com pessoas sentadas tomando café"
      />

      <section>
        <div className="products-list-header">
          <Image src={vector} alt="detalhe" />
          <h1>Our Collection</h1>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div>
            <button className="active">All Products</button>
            <button>Available Now</button>
          </div>
        </div>

        {loading
          ? <p className="loading">Loading...</p>
          : (
            <>
              {products?.map(product => (
                <Card product={product} key={product.name} />
              ))}
            </>
          )
        }
      </section>

    </main>
  );
}
