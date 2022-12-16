import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Carousel from './carousel'
import Navbar from "./navbar"
import Footer from './footer'
import Suits from './suits'
import shop from './clothing'
export default function Home() {
  return (
    
    <div >

      <Navbar/>
      <Carousel/>
      <Footer/>

<Link href="/carousel" ></Link>
<Link href="/Suits" ></Link>
<Link href="/shop" ></Link>
<Link href="/accessories" ></Link>
<Link href="/cart" ></Link>
<Link href="/login" ></Link>
<Link href="/register" ></Link>
<Link href="/wishlist" ></Link>

    </div>
  )
}
