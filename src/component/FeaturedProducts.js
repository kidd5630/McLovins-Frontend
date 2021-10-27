import {fetchAllProducts, BASE_URL} from '../api';
import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';


const FeaturedProducts = ({allProducts, isAdmin, setselectedProduct}) => {
    return (
        <> 
            <div className="ip">
                {allProducts.map(prod => {
                    const {id, name, photo} = prod;
                
                   
                        return (
                        <div className="individualContainer" key={id}>
                                <div className="showbox">
                                <div className="ipText">
                                <div onClick={()=>{
                                    setselectedProduct(id)
                                }}>
                                <Link to={`/product/${id}`} className="prodLink">
                                    <h2 className="innerboxText"> {name}, {id}</h2>
                                </Link>
                                   
                                <Link to={`/product/${id}`} className="prodLink">
                                    <img src={photo} alt="a picture of product" width="400" height="500" />
                                </Link>   
                                </div> 
                                </div>
                                
                            </div> 
                        </div>)  
                    
                })}
            </div>
        </>
    )
   
}

export default FeaturedProducts;

