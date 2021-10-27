import {fetchAllProducts, BASE_URL} from '../api';
import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';


const FeaturedProducts = ({allProducts, isAdmin}) => {
    console.log(allProducts, "featProds")
    return (
        <> 
            <div className="ip">
                {allProducts.map(prod => {
                    const {id, name, photo} = prod;
                
                   
                        return (
                        <div className="individualContainer" key={id}>
                                <div className="showbox">
                                <div className="ipText">
                                <Link to={`/product/${id}`} className="prodLink">
                                    <h2 className="innerboxText"> {name}</h2>
                                </Link>
                                   
                                <Link to={`/product/${id}`} className="prodLink">
                                    <img src={photo} alt="a picture of product" width="400" height="500" />
                                </Link>   
                                </div> 
                                {isAdmin
                                ?
                                (<div>
                                    <button className="edit button" 
                                    onClick={ToggleClass}>
                                        Edit
                                    </button>
                                </div>)
                                :
                                (<div></div>)
                                }
                                
                                {isAdmin
                                ?
                                (<div className="iaInteractiveBox">
                                        <div 
                                        className={`editFeild-${isActiveEdit ? "inactive" : "active"}`}
                                        >
                                            <EditProduct 
                                                userToken={userToken} 
                                                allProducts={allProducts} 
                                                setAllProducts={setAllProducts} 
                                                selectedProduct={selectedProduct}
                                                ToggleClass={ToggleClass}                             
                                                setProductName={setProductName}                                             
                                                setProductDescript={setProductDescript}
                                                setProductPrice={setProductPrice} 
                                                setProductCategory={setProductCategory} 
                                                setProductQuantity={setProductQuantity} 
                                                setProductPhoto={setProductPhoto}
                                            />
                                        </div>
                                </div>)
                                :
                                (<div></div>)
                                }
                            </div> 
                        </div>)  
                    
                })}
            </div>
        </>
    )
   
}

export default FeaturedProducts;