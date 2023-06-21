import React from 'react'

import styles from './banner.module.css'
import Image from 'next/image'

import ImageCoffe from '@/assets/intro-img.svg'
import Emblem from './emblem/emblem'

import CartImage from '@/assets/cart.svg'
import TimerImage from '@/assets/timer.svg'
import CoffeImage from '@/assets/coffe.svg'
import BoxImage from '@/assets/box.svg'

const Banner = () => {
  return (
    <div className={`${styles.bannerContainer} container`}>
      <div>
        <div>
          <h1 className={styles.title}>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3 className={styles.text}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        </div>
        <div className={styles.badges}>
          <Emblem  text="Compra simples e segura" icon={CartImage} color="#C47F17" />
          <Emblem  text="Embalagem mantém o café intacto" icon={BoxImage}  color="#574F4D"/>
          <Emblem  text="Entrega rápida e rastreada" icon={TimerImage} color="#DBAC2C"/>
          <Emblem  text="O café chega fresquinho até você" icon={CoffeImage} color="#8047F8"/>
        </div>
      </div>
      <Image src={ImageCoffe} alt='Imagem Cafe Grande' />
    </div>
  )
}

export default Banner