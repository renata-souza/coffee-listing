import React from 'react'
import Image from 'next/image'

import noRating from '../../../public/Star.svg'
import rating from '../../../public/Star_fill.svg'

import styles from './Card.module.css'

const Card: React.FC<{ product: Product }> = ({ product }) => {

  const myLoader = () => {
    return product.src
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <Image loader={myLoader} src={product.src} alt={product.name} width={250} height={150} className={styles.productImg} />
        {product.available && (product.votes > 50) && <span className={styles.popular}>Popular</span>}
      </div>

      <div className={styles.cardPricing}>
        <h2>{product.name}</h2>
        <p>${product.pricing}</p>
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.rating}>
          {product.votes > 0
            ? <Image src={rating} alt="star" />
            : <Image src={noRating} alt="star" />
          }
          {product.rating}
          {product.votes > 0 && <span>({product.votes} votes)</span>}
        </div>

        {!product.available && <span className={styles.soldOut}>Sold out</span>}
      </div>
    </div>
  )
}

export default Card