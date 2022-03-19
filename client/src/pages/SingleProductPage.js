import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import ProductCard from './Cards/ProductCard'
import SliderCard from './Cards/SliderCard'
import CartegoryCard from './Cards/CartegoryCard'
import FullCard from './Cards/Categories/FullCard'
import shoe from '../uploads/product-1.jpg';
import {
  Link,
  useParams
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const data = [
    {
        id: "avrvsergrdfvsrg",
        img: "product-1.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsegsvffgbvsrg",
        img: "product-2.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsgvderfgbtgfrg",
        img: "product-3.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergrasgvdfgbtfdg",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergsrgvtfdgbtsg",
        img: "product-2.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsaefwedfedaefrg",
        img: "product-3.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "asvreg4uthrgrtgvsrg",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergrdfvsdgbtdtdfb",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    }
]


const SingleProductPage = () => {

  let { id } = useParams();

    const renderPupular = () => data.map(item => (
            <SliderCard
                id={item.id}
                img={item.img} 
                title={item.title}
                description={item.description}
                price={item.price}
            />
    ))
    
    return (
        <Container>

        </Container>
    )
}

export default SingleProductPage

const Container = styled.div`
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 60px;
    background-color: #F5F5F5;
    padding-bottom: 20px;
`

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 30px;
`

const SliderContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 15px;
`