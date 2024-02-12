'use client'

import Image from "next/image"
import { useState } from "react"

import Card from "@/components/Card/Card"
import vector from "../../public/vector.svg"
import database from "../data/db.json"

import "./style.css"

export default function Home() {
  const [active, setActive] = useState<'available' | 'all'>('all')
  const [availableProducts, setAvailableProducts] = useState<Product[]>()
  const products = database.products

  function getAvailableProducts() {
    setActive('available')

    const availableProducts = products?.filter(product => product.available)
    setAvailableProducts(availableProducts)
  }

  const myLoader = () => {
    return "https://i.imgur.com/DGrCSY0.jpeg"
  }

  return (
    <main>
      <Image
        priority
        loader={myLoader}
        width={2560}
        height={290}
        src="https://i.imgur.com/DGrCSY0.jpeg"
        alt="façade of a coffee shop with people sitting drinking coffee"
      />

      <section>
        <div className="products-list-header">
          <Image src={vector} alt="brown spiral detail" />
          <h1>Our Collection</h1>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

          <div>
            <button onClick={() => setActive('all')} className={active === 'all' ? 'active' : ''}>All Products</button>
            <button onClick={getAvailableProducts} className={active === 'available' ? 'active' : ''} >Available Now</button>
          </div>
        </div>

        <div className="products-list-cards">
          {active === 'all' && products?.map(product => <Card product={product} key={product.name} />)}
          {active === 'available' && availableProducts?.map(product => <Card product={product} key={product.name} />)}
        </div>
      </section>
    </main>
  )
}
