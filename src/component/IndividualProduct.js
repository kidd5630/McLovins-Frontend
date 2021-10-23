import React, {useState, useEffect} from 'react';
import { BASE_URL} from '../api'
import EditProduct from './EditProduct';



const IndividualProduct = ({userToken, isAdmin, allProducts, setAllProducts, selectedProduct, productName, productDescript, setProductName, setProductDescript, productPrice, setProductPrice, productCategory, setProductCategory, productQuantity, setProductQuantity, productPhoto, setProductPhoto}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };
    
    return (
        <> 
            <div className="ip">
                {allProducts.map(prod => {
                    const {id, name, description, price, quantity, photo} = prod;
                    if(id === selectedProduct) {   
                        console.log("here now!", isAdmin)
                        return (
                        <div className="individualContainer" key={id}>
                                <div className="showbox">
                                <div className="ipText">
                                    <h2 className="innerboxText"> {name}</h2>
                                    <p className="innerText">{description}</p>
                                    <p className="innerText">{price}</p>
                                    <p className="innerText">{quantity}</p>
                                    <img src={prod.photo} alt="a picture of product" width="400" height="500" />
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
                    }
                })}
            </div>
        </>
    )
} 
export default IndividualProduct; 