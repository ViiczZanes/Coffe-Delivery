import React from 'react'

import styles from './products.module.css'
import ProductCard from './productCard/productCard'

import { coffees } from '@/data/Products'

const Products = async () => {

  return (

    <div className={styles.products}>
      {coffees.map((coffee) => (
        <ProductCard
          key={coffee.id}
          tags={coffee.tags}
          image={`/coffees/${coffee.photo}`}
          text={coffee.name}
          description={coffee.description}
          price={coffee.price.toFixed(2)}
        />
      ))}
    </div>
    // <div className={styles.products}>
    //   <ProductCard image={'/coffees/tradicional.png'} text={'Expresso Tradicional'} description='O tradicional café feito com água quente e grãos moídos' price={"9,90"} />
    // </div>
  )
}

export default Products