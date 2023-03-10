import { HomeContainer, Product } from "@/styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";

import Link from 'next/link';

import Image from "next/image";

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} 
    className="keen-slider">

    {
      products.map(product => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
            
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })
    }

    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100)
    }
  })

  return {
    props: {
      products,
    }
  }
}