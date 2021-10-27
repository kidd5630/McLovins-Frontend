import React from 'react';
import FeaturedProducts from './FeaturedProducts';

const Home = ({userToken, myUsername, isAdmin, allProducts, setselectedProduct}) => {
    return (
        <>
            <div className="home">
                {userToken ?
                <div className="loggedInMessage">
                    Welcome back to McLovin's Scents{myUsername}, let's go shopping!
                </div>
                :
                <div className="loggedOutMessage">
                    <div className="welcome">
                    <h1>Welcome To</h1>
                    <h1 className="shopName"> McLovin's Scents </h1>
                    </div>
                    <p className="slogan">Appeal to your nostrils</p>
                </div>
                }
            </div>
            <FeaturedProducts
				isAdmin={isAdmin}
				allProducts={allProducts}
                setselectedProduct={setselectedProduct}
			/>
        </>
    ) 
}

export default Home; 