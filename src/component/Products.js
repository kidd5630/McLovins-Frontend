import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import MakeProduct from './MakeProduct';
const Header = styled.header`
  font-family: "Akaya Telivigala", cursive;
  font-weight: 100;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding: 0.25em 0;
`;
const Container = styled.header`
`;
const Products = ({userToken, isAdmin, allProducts, setAllProducts, setselectedProduct, productID}) => {
  return ( 
    <Container>
      <Header><h1>All Products</h1></Header>
      <div className="allProducts">
        <div className="products">
          {isAdmin?
            (<div className="productContainer">
              <MakeProduct
                userToken={userToken}
                allProducts={allProducts}
                setAllProducts={setAllProducts}/>
            </div>)
            : 
            (<div></div>)
          }
          {allProducts.map(prod=> {
            return (
              <div className="productContainer" key={prod.id}>
                <div className="productBody">
                  <div className="productHeader">
                    <div className="productDescription">
                      <div className='innerbox'>  
                        <div className='innerboxText' style={{fontWeight:"bolder", color:"black"}}
                            onClick={() => {
                            productID(prod.id)
                            setselectedProduct(prod.id)
                            }}>
                          <Link to={`/product/${prod.id}`} className="prodLink">
                            {prod.name}
                          </Link>
                        </div>
                        <img src={prod.photo} alt="a picture of product" width="400" height="500" />
                        <div className='innerboxText'>{prod.description}</div>
                        <div className='innerboxText'>{prod.price}</div>
                      </div>
                    </div>  
                  </div>  
                </div>    
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
export default Products;