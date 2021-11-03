import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { BASE_URL, createCartItems, checkCartByProduct, updateItemQuantity} from '../api'
import EditProduct from './EditProduct';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const IndividualProduct = ({userToken, isAdmin, allProducts, setAllProducts, selectedProduct, setProductName, setProductDescript, setProductPrice, setProductCategory, setProductQuantity, setProductPhoto, allCartItem, setAllCartItem}) => {
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [valueQuant, setValueQuant] = useState(1)
    const ToggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };
    const { productid } = useParams();
    const filteredProduct = allProducts.filter(product => {
        return parseInt(productid) == product.id
    })[0]
    
    const Removehandler = (e)=>{
        e.preventDefault()
        if(valueQuant>0){
        setValueQuant(valueQuant - 1)
        }    
    }
    const Addhandler = (e)=>{
        e.preventDefault()
        if(valueQuant<filteredProduct.quantity){
        setValueQuant(valueQuant + 1)}
    }
    async function SubmitHandler (e) {
        e.preventDefault();
        const cartId = JSON.parse(localStorage.getItem('Cart')).id
        const userId = JSON.parse(localStorage.getItem('userId'))
        try{
            const productCheck = await checkCartByProduct(userToken, userId, cartId, filteredProduct.id)     
            console.log('productCheckproductCheckproductCheckproductCheck', productCheck);       
            if(productCheck && productCheck.length){
                const quantity = productCheck[0].item_quantity + valueQuant
                const updateItem = await updateItemQuantity(userToken, userId, productCheck[0].id, quantity)
                const updatedAllCart = allCartItem.map(
                    (item)=>{
                        if (item.product_id === filteredProduct.id){
                            return updateItem[0]
                        } else {
                            return item
                        }
                    }
                )
                setAllCartItem(updatedAllCart)
            } else {
                const createItem = await createCartItems(userToken, cartId, filteredProduct.id, valueQuant, filteredProduct.price, userId);
                const newArr = [...allCartItem, createItem]
                setAllCartItem(newArr);
            }
        }
        catch(error){
            console.error(error)
        }
        
    }

    return (
        <> {filteredProduct?
            <div className="ip">
                <div className="individualContainer" key={filteredProduct.id}>
                        <div className="showbox">
                            <div className="ipText">
                                <h2 className="innerboxTextName"> {filteredProduct.name}</h2>
                                <img className="prodPhoto"src={filteredProduct.photo} alt="a picture of product" width="300" height="400" />
                                <p className="innerText"> {filteredProduct.description}</p>
                                <p className="innerText">Price:$ {filteredProduct.price}</p>
                                <p className="innerText">Available Quantity{filteredProduct.quantity}</p>
                                <form className="addRemoveProduct" onSubmit={(e)=>{
                                    SubmitHandler(e)
                                }}>
                                <button className="removeProduct" onClick={e =>Removehandler(e)}><RemoveIcon></RemoveIcon></button>
                                <input type="number" min="1" value={valueQuant} onChange={ event=> {setValueQuant(parseInt(event.target.value))}}></input>
                                <button className="addProduct" onClick={e => Addhandler(e)}><AddIcon></AddIcon></button>
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







