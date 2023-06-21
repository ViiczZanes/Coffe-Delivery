import React from 'react'

import styles from './productCard.module.css'
import Image from 'next/image'

import { TiShoppingCart } from 'react-icons/ti'
import InputShop from './inputShop/inputShop';

interface ProductCardProps {
  image: string;
  text: string;
  description: string;
  price: string;
  tags: string[]
}


const ProductCard = ({ image, text, description, price, tags }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} alt='text' width={120} height={120} />
      <div className={styles.tags}>
        {tags.map(tag => {
          return <span>{tag}</span>
        })}
      </div>
      <h1 className={styles.productName}>{text}</h1>
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.shopActions}>
        <div>
          <p>R$</p>
          <strong className={styles.price}>{price}</strong>
        </div>
        <div className={styles.shop}>
          <InputShop />
          <button className={styles.cart}>
            <TiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard