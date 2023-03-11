import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 69,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestiae quas aperiam praesentium iusto, nemo ullam neque amet rerum quam tenetur perspiciatis? Incidunt at quos, aliquid dolorem nemo labore perspiciatis!</p>

                <button>Compra agora</button>

            </ProductDetails>
        </ProductContainer>


    )
}