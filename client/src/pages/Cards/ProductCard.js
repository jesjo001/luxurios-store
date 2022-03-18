import React from 'react';
import styled from 'styled-components'

export default function ProductCard({img, title, description, price}) {
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <ProductTitle>{title? title : ""}</ProductTitle>
        <ProductDescription>{ description? description : ""} </ProductDescription>

        <BottomContainer>
            <PriceTag> { price ? price : ""}</PriceTag>
            <ActionButton> </ActionButton>
        </BottomContainer>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 20%;
  height: 300px;
  background-color: #F8FCFF;
  paddingLeft: 10px;
  paddingRight: 10px;
  margin:10px;
`
const ImageContainer = styled.div`
`

const ProductTitle = styled.h3`
`
const ProductDescription = styled.p`
`

const BottomContainer = styled.div`
`

const PriceTag = styled.span`
`

const ActionButton = styled.button`
`