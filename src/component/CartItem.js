import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { checkByProduct, updateItemQuantity } from '../api'
import DeleteCartItem from './DeleteCartItem'

const CartItem = ({cartItem, productsToCartItem, allCartItem, userToken, setAllCartItem, updateCart, setUpdateCart, userId}) => {
    const [valueQuant, setValueQuant] = useState(cartItem.item_quantity)
    console.log('cartItem ====>', cartItem);
    const Removehandler = (e)=>{
        e.preventDefault()
        if(valueQuant>0){
        setValueQuant(valueQuant - 1)
        }    
    }
    const Addhandler = (e)=>{
        e.preventDefault()
        setValueQuant(valueQuant + 1)
    }
    async function SubmitHandler (e) {
        e.preventDefault();
        //const cartId = JSON.parse(localStorage.getItem('Cart')).id
        const userId = JSON.parse(localStorage.getItem('userId'))
        //if(!userToken){

        //}

        try{
            const cartItemCheck = await checkByProduct(userToken, cartItem.product_id)
            if(valueQuant <= cartItemCheck.quantity){
                const updateItemQuant = await updateItemQuantity(userToken, userId, cartItem.id, valueQuant)
                
                const updatedAllCartQuant = allCartItem.map(
                    (item)=>{
                        if (item.product_id === cartItem.product_id){
                            return updateItemQuant[0]
                        } else {
                            return item
                        }
                    }
                )
                setAllCartItem(updatedAllCartQuant)
            } else {
                alert('aye yo bish we dont got that much')
            }
        }
        catch(error){
            console.error(error)
        }
        
    }
    console.log('productsToCartItem', productsToCartItem);
        return (
            <div className="cartContainer" key={cartItem.id}>
            <div className="cartBody">
                <div className="cartHeader">
                <div className="cartDescription">
                    <div className='innerbox'>  
                    <div className='innerboxText' style={{fontWeight:"bolder", color:"black"}}
                        onClick={() => {
                        cartID(cartItem.id)
                        setselectedcart(cartItem.id)
                        }}>
                        <Link to={`/cart/${productsToCartItem[0].id}`} className="cartLink">
                        {productsToCartItem[0].name}
                        </Link>
                    </div>
                    <img className="prodPhoto"src={productsToCartItem[0].photo} alt="a picture of product" width="200" height="250" />
                    <div className='innerboxText'>{productsToCartItem[0].description}</div>
                    <div className='innerboxText'>{productsToCartItem[0].price}</div>
                    <div className='innerboxText'>{cartItem.item_quantity}</div>
                    <form className="addRemoveProduct" onSubmit={(e)=>{
                            SubmitHandler(e)
                        }}>
                        <button className="removeProduct" onClick={e =>Removehandler(e)}><RemoveIcon></RemoveIcon></button>
                        <input type="number" min="1" value={valueQuant} onChange={ event=> {setValueQuant(parseInt(event.target.value))}}></input>
                        <button className="addProduct" onClick={e => Addhandler(e)}><AddIcon></AddIcon></button>
                        <button type="submit">Update</button>
                        <DeleteCartItem
                        userToken={userToken}
                        updateCart={updateCart}
                        setUpdateCart={setUpdateCart}
                        itemToDelete={cartItem}
                        userId={userId}
                        allCartItem={allCartItem}
                        setAllCartItem={setAllCartItem}
                        />
                    </form>
                    </div>
                </div>  
                </div>  
            </div>    
            </div>
        )
    }


export default CartItem;