import React from 'react';
import FeaturedProducts from './FeaturedProducts';

const Home = ({userToken, myUsername, isAdmin, allProducts, setselectedProduct}) => {
    return (
        <>
            <div className="home">
                {userToken ?
                <div className="loggedInMessage">
                    Welcome back {myUsername}, let's go shopping!
                </div>
                :
                <div className="loggedOutMessage">
                    <div className="welcome">
                    <h1>Welcome To McLovin's Scents</h1>
                    </div>
                    <div className="slogan">
                    <p>Appeal to your nostrils</p>
                    </div>
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