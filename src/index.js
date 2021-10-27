import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, EditProduct, Header, Home, IndividualProduct, Login, MakeProduct, Register, Cart, FeaturedProducts } from './component';
import { getCurrentUserToken, getCurrentUsername, getIsAdmin } from './auth'
import {  fetchAllProducts,fetchUsersCart } from './api'


const App = () => {
    const [allProducts, setAllProducts]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
	const [isAdmin, setIsAdmin] = useState(getIsAdmin());
    const [myPassword, setMyPassword] = useState('');
	const [myEmail, setMyEmail] = useState('');
    const [selectedProduct, setselectedProduct] = useState(getProdId());
    const [productName, setProductName] = useState("");
	const [productDescript, setProductDescript] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPhoto, setProductPhoto] = useState("");
	const [allCartItem, setAllCartItem] = useState("");
	const [userId, setUserId] = useState("");
	const [featuredProds, setFeaturedProds] = useState([]);


    function productID(prod_ID) {
        localStorage.removeItem('prodId');
        localStorage.setItem('prodId', JSON.stringify(prod_ID));
    }
	function getProdId() {
    	const selectedProductID = JSON.parse(localStorage.getItem('prodId'));
        return selectedProductID;
    }
	useEffect(() => {
        fetchAllProducts()
            .then((allProducts) => {
                setAllProducts(allProducts);
					const newArr = [];
				for(let i = 0; i < 3; i++){
					const randomProd = Math.floor(Math.random()*allProducts.length)
					newArr.push(allProducts[randomProd])
				}
				setFeaturedProds(newArr);
            })
            .catch(error => console.error(error))
    }, []);

    return (

		<Router>
			<div className="app">	
				<Header 
					userToken={userToken}
					setUserToken={setUserToken}
					setMyUsername={setMyUsername} 
					setIsAdmin={setIsAdmin}
					setUserId={setUserId}
					/>	

				{userToken
				?
				(<div className="backdrop">
					<Switch>	
						<Route exact path ="/">
							<Home 
								userToken={userToken}
								myUsername={myUsername} 
								isAdmin={isAdmin}
								allProducts={featuredProds}
								setselectedProduct={setselectedProduct}
								/>
						</Route>
						<Route exact path ="/home">
							<Home 
								userToken={userToken}
								myUsername={myUsername} 
								isAdmin={isAdmin}
								allProducts={featuredProds}
								setselectedProduct={setselectedProduct}
								/>
						</Route>
						<Route exact path ="/product">
							<Products 
								userToken={userToken}
								allProducts={allProducts}
								setAllProducts={setAllProducts}
								setselectedProduct={setselectedProduct}
								productID={productID}
								isAdmin={isAdmin}
                                />
						</Route> 
						<Route path="/product/:productid">
                            <IndividualProduct
                                allProducts={allProducts}
                                setAllProducts={setAllProducts}
                                userToken={userToken}
                                selectedProduct={selectedProduct}
                                productName={productName}
                                setProductName={setProductName}
                                productDescript={productDescript}
                                setProductDescript={setProductDescript}
                                productPrice={productPrice}
                                setProductPrice={setProductPrice}
                                productCategory={productCategory}
                                setProductCategory={setProductCategory}
                                productQuantity={productQuantity}
                                setProductQuantity={setProductQuantity}
                                productPhoto={productPhoto}
                                setProductPhoto={setProductPhoto} 
								isAdmin={isAdmin}/> 
                        </Route>
						<Route exact path ="/cart">
							<Cart 
								userToken={userToken}
								allProducts={allProducts} 
								allCartItem={allCartItem}
								isAdmin={isAdmin}/>
						</Route>
					</Switch>
				</div>)	
				: 
				(<div className="backdrop" >
					<Switch>
						<Route exact path ="/">
							<Home 
								userToken={userToken}
								myUsername={myUsername} 
								isAdmin={isAdmin}
								allProducts={featuredProds}
								setselectedProduct={setselectedProduct}
								/>
						</Route>
						<Route exact path ="/home">
							<Home 
								userToken={userToken}
								myUsername={myUsername} 
								isAdmin={isAdmin}
								allProducts={featuredProds}
								setselectedProduct={setselectedProduct}
								/>								
						</Route>
						<Route exact path ="/product">
							<Products
								userToken={userToken}
								allProducts={allProducts}
								setAllProducts={setAllProducts}
								setselectedProduct={setselectedProduct}
								productID={productID} />
						</Route>
						<Route path="/product/:productid">
                            <IndividualProduct
                                allProducts={allProducts}
                                setAllProducts={setAllProducts}
                                userToken={userToken}
                                selectedProduct={selectedProduct}
                                productName={productName}
                                setProductName={setProductName}
                                productDescript={productDescript}
                                setProductDescript={setProductDescript}
                                productPrice={productPrice}
                                setProductPrice={setProductPrice}
                                productCategory={productCategory}
                                setProductCategory={setProductCategory}
                                productQuantity={productQuantity}
                                setProductQuantity={setProductQuantity}
                                productPhoto={productPhoto}
                                setProductPhoto={setProductPhoto} /> 
                        </Route>
						<Route path="/register">
							<Register 
								setUserToken={setUserToken}
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword} 
								myEmail = {myEmail}
								setMyEmail={setMyEmail}/>
						</Route>
						<Route path="/login">
							<Login 
								myUsername={myUsername}
								setMyUsername={setMyUsername}
								myPassword={myPassword}
								setMyPassword={setMyPassword}
								setUserToken={setUserToken} 
								setIsAdmin={setIsAdmin}
								userId={userId}
								setUserId={setUserId}
								setAllCartItem={setAllCartItem}/>
						</Route>
						<Route exact path ="/cart">
							<Cart 
								userToken={userToken}
								allProducts={allProducts} 
								allCartItem={allCartItem}
								isAdmin={isAdmin}/>
						</Route>
					</Switch>
				</div>)
				}
			</div>
		</Router>
	)

}

ReactDOM.render(<App/>, document.getElementById('app'))
