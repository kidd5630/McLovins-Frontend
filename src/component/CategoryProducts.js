import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ProductsByCategory = ({userToken, allProducts, allCartItem, isAdmin, CategoryProducts, setselectedProduct, productID}) => {
    return ( 
        <div className="catBox">
        {CategoryProducts.map(prod=> {
            return (
              <div className="categoryContainer" key={prod.id}>
                
                  
                    
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
                        <img src={prod.photo} alt="a picture of product" width="200" height="250" />
                        <div className='innerboxText'>{prod.description}</div>
                        <div className='innerboxText'>Price: ${prod.price}</div>
                      </div>
                     
                   
                </div>    
              
            )
        })}
        </div>
    )}

    export default ProductsByCategory;