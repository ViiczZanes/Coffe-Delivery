import Image from 'next/image'
import React from 'react'

import styles from './header.module.css'


import Logo from '@/assets/coffee-delivery-logo.svg'
import { MdLocationPin } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Image src={Logo} alt='Logo Coffe-Delivery' />
        <div className={styles.actions}>
          <div className={styles.location}>
            <MdLocationPin className={styles.locationIcon} />
            <span>
              Porto Alegre, RS
            </span>
          </div>
          <Link href="/cart" className={styles.cart}>
            <TiShoppingCart />
          </Link>
        </div>
      </div >
    </header>

  )
}

export default Header