import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { BASE_URL} from '../api'
import EditProduct from './EditProduct';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const IndividualProduct = ({userToken, isAdmin, allProducts, setAllProducts, selectedProduct, productName, productDescript, setProductName, setProductDescript, productPrice, setProductPrice, productCategory, setProductCategory, productQuantity, setProductQuantity, productPhoto, setProductPhoto}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [valueQuant, setValueQuant] = useState(0)
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };
    const { productid } = useParams();
    const filteredProduct = allProducts.filter(product => {
        return parseInt(productid) == product.id
    })[0]
    
    return (
        <> {filteredProduct?
            <div className="ip">
                <div className="individualContainer" key={filteredProduct.id}>
                        <div className="showbox">
                        <div className="ipText">
                            <h2 className="innerboxTextName"> {filteredProduct.name}</h2>
                            <img className="prodPhoto"src={filteredProduct.photo} alt="a picture of product" width="400" height="500" />
                            <p className="innerText"> {filteredProduct.description}</p>
                            <p className="innerText">Price: ${filteredProduct.price}</p>
                            <p className="innerText">Available Quantity{filteredProduct.quantity}</p>
                            <form className="addRemoveProduct" onSubmit={()=>{

                            }}>
                            <button className="removeProduct" onClick={(e)=>{
                                e.preventDefault()
                                setValueQuant(valueQuant - 1)
                            }}><RemoveIcon></RemoveIcon></button>
                            <input type="number" value={valueQuant} onChange={ event=> {setValueQuant(parseInt(event.target.value))}}></input>
                            <button className="addProduct" onClick={(e)=>{
                                e.preventDefault()
                                setValueQuant(valueQuant + 1)
                            }}><AddIcon></AddIcon></button>
                            <button type="submit">Add To Cart</button>
                            </form>
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
                    
                
            </div>:null}
        </>
    )
} 
export default IndividualProduct; 