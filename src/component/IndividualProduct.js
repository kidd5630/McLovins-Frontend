import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { BASE_URL} from '../api'
import EditProduct from './EditProduct';



const IndividualProduct = ({userToken, isAdmin, allProducts, setAllProducts, selectedProduct, productName, productDescript, setProductName, setProductDescript, productPrice, setProductPrice, productCategory, setProductCategory, productQuantity, setProductQuantity, productPhoto, setProductPhoto}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };
    console.log('products',allProducts);
    const { productid } = useParams();
    const filteredProduct = allProducts.filter(product => {
        console.log('this that id', product.id, productid);
        return parseInt(productid) == product.id
    })[0]
    return (
        <> 
            <div className="ip">
                
                        <div className="individualContainer" key={filteredProduct.id}>
                                <div className="showbox">
                                <div className="ipText">
                                    <h2 className="innerboxText"> {filteredProduct.name}, {filteredProduct.id}</h2>
                                    <p className="innerText">{filteredProduct.description}</p>
                                    <p className="innerText">{filteredProduct.price}</p>
                                    <p className="innerText">{filteredProduct.quantity}</p>
                                    <img src={filteredProduct.photo} alt="a picture of product" width="400" height="500" />
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
                        </div>
                    
                
            </div>
        </>
    )
} 
export default IndividualProduct; 