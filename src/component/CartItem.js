import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({cartItem, productsToCartItem, allCartItem, isAdmin}) => {
    const [valueQuant, setValueQuant] = useState(cartItem.item_quantity)

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
        const cartId = JSON.parse(localStorage.getItem('Cart')).id
        const userId = JSON.parse(localStorage.getItem('userId'))
        try{
            const productCheck = await checkCartByProduct(userToken, userId, cartId, filteredProduct.id)            
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
                console.log('updatedAllCart=====>', updatedAllCart);
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
                    </form>
                    </div>
                </div>  
                </div>  
            </div>    
            </div>
        )
    }


export default CartItem;