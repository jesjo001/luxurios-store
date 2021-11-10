import React from 'react'
import styled from 'styled-components'
import { Select as Select2 } from 'antd';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ProductList from "./Product/ProductList.js"

const Shop = () => {

    const [currency, setCurrency] = React.useState('EUR');
    const { Option } = Select;

    function handleSelect(value) {
        console.log(`selected ${value}`);
    }

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Container>
            <Header>
                <TitleArea>
                    <h6>HOME > <span style={{ textAlign: 'center', fontSize: '0.8em', fontWeight: 'normal' }}>Sneakers </span></h6>
                </TitleArea>
                <SearchArea>
                    <SearchInput placeholder="Search..." type="text"></SearchInput>
                </SearchArea>
            </Header>
            <ContentArea>
                <Sidebar>
                    <SortFilter>
                        <SidebarTitle >Sort </SidebarTitle>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                            <SelectBox
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={10}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Category</MenuItem>
                                <MenuItem value={20}>Newest</MenuItem>
                                <MenuItem value={30}>Trending</MenuItem>
                            </SelectBox>
                        </FormControl>
                    </SortFilter>
                    <SidebarTitle>Filter </SidebarTitle>
                    <FilterContainer>

                      <FormControl sx={{ m: 1, minWidth: 300 }}>
                          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                      <SelectBox
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={10}
                          label="Age"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Category</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-size">Age</InputLabel>
                      <SelectBox
                          labelId="demo-size"
                          id="demo-simple-select-helper"
                          value={10}
                          label="size"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Size</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl >

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-style">Style</InputLabel>
                      <SelectBox
                          labelId="demo-style"
                          id="demo-style"
                          value={10}
                          label="Style"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Style</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>

                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <SelectBox
                          labelId="demo-color"
                          id="demo-color"
                          value={10}
                          label="color"
                          onChange={handleChange}

                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Color</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>

                      <SelectBox
                          labelId="demo-prince"
                          id="demo-prince"
                          value={10}
                          label="prince"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Price Range </MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>
                    </FilterContainer>
                </Sidebar>
                <ProductArea>
                  <ProductList />
                </ProductArea>
            </ContentArea>

        </Container>
    )
}

export default Shop


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: 25333D;
  padding: 10px;
  width: 100%;
  height: 95vh;
  flex-grow: 1;
  margin:0px;
  padding:0px;
`;

const Header = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    flex-direction: row;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
`

const TitleArea = styled.div`
    padding: 20px;
    margin: 10px;
    width : 50vh;
`

const SearchArea = styled.div`

`

const SearchInput = styled.input`
    width:85vw;
    height: 70px;
    border:none;
    border-radius: 15px;
    border-color: white;
    font-size: 3em;
    outline:none;

    &:hover{
        outline: none;
        border:none;
        border-radius: 15px;
        border-color: white;
    }
    &:active {
        outline: none;
        border:none;
        border-radius: 15px;
        border-color: white;
    }
`

const ContentArea = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
`

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    flex:0.2;
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 89%;
    height:70%;
    margin-bottom:50px;
    margin-left: 20px;
`

const SortFilter = styled.div`
    width: 100%;
    padding-bottom: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-left: -50px;
`

const SidebarTitle = styled.h3`
    align-self: flex-start;
    padding-left: 50px;
    padding-top: 50px;
    margin: 10px;
`

const SelectBox = styled(Select)`
  margin-bottom:20px;
`
const ProductArea = styled.div`
    flex:0.8;
    display: flex;
    flex-direction: column;
`
