import React from 'react'
import styled from 'styled-components'
import ProductCard from './Cards/ProductCard'
import shoe from '../uploads/product-1.jpg';

const data = [
    {
        img: shoe,
        title: "Sport Sneakers",
        description: "asf asdfa asdas asdf asd asd asd asd asd asd asd asd ",
        price: "$123"
    },
    {
        img: shoe,
        title: "Sport Sneakers",
        description: "asf asdfa asdas asdf asd asd asd asd asd asd asd asd ",
        price: "$123"
    },
    {
        img: shoe,
        title: "Sport Sneakers",
        description: "asf asdfa asdas asdf asd asd asd asd asd asd asd asd ",
        price: "$123"
    },
    {
        img: shoe,
        title: "Sport Sneakers",
        description: "asf asdfa asdas asdf asd asd asd asd asd asd asd asd ",
        price: "$123"
    }
]
const Home = () => {
    return (
        <div>
            <HorizontalSection>
                {
                    data.map((item, index) => {
                        return (
                            <ProductCard 
                                img={item.shoe} 
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
               
                        )
                    })
                }
                 <ProductCard />
                <ProductCard />
            </HorizontalSection>
        </div>
    )
}

export default Home

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`