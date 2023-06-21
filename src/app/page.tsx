import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Banner from '@/components/banner/banner'
import Products from '@/components/products/products'

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.bannerSection}>
          <Banner />
        </section>
        <section className={`${styles.productsSection} container`}>
          <h1 className={styles.subtitle}>Nossos cafés</h1>
          <Products/>
        </section>
      </main>
    </div>
  )
}
