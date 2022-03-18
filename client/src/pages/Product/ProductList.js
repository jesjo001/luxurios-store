import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from '../../uploads/product-1.jpg';
import ProductItem from './Product';



const data = [
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  }
]

const ProductList = (props) => {
  return (
    <Container>
      {
        data.map( (item, index) =>{
          return (
            <ProductItem prodTitle={item.productTitle} brandName={item.brandName} price={item.price} />
          )
        })
      }
    </Container>
  )
}

export default ProductList



const Container = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x:none;
  flex-wrap: wrap;
  background-color: grey;
`
