import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {removeCurrentUserToken, removeCurrentUsername, removeIsAdmin, removeUserId}
from '../auth'
// import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({userToken, setUserToken, setMyUsername, setIsAdmin, setUserId}) => {
    let history = useHistory()	
    return(
        <>
            {/* <Top> */}
            {/* Will need to work in a ternary for admin */}
                {userToken? 
                    <div className="header">
                        <div className="shopName">McLovin's Scents</div>
                        <nav>
                            <ul>
                                <Link to="/home" className="link">
                                <li className="navBtn">Home</li>
                                </Link>
                                <Link to="/user/:id" className="link">
                                <li className="navBtn">Profile</li>
                                </Link>
                                <Link to="/product" className="link">
                                <li className="navBtn">All Products</li>
                                </Link>
                                <Link to="/cart" className="link">
                                <li className="navBtn">My Cart</li>
                                </Link>
                                <Link to="/order_history" className="link">
                                <li className="navBtn">Order History</li>
                                </Link>
                                <button className="logOut"
                                    onClick={() => {
                                    setUserToken(removeCurrentUserToken());
                                    setMyUsername(removeCurrentUsername());
                                    setIsAdmin(removeIsAdmin());
                                    setUserId(removeUserId())
                                history.push("/");
                                }}><LogoutIcon></LogoutIcon> LOGOUT
                                </button>
                            </ul>
                        </nav>
                    </div>
                :
                <nav>
                    <div className="header">
                    <div className="shopName">McLovin's Scents</div>
                        <ul>
                            <Link to="/home" className="link">
                            <li className="navBtn">Home</li>
                            </Link>
                            <Link to="/product" className="link">
                            <li className="navBtn">Products</li>
                            </Link>
                            <Link to="/cart" className="link">
                            <li className="navBtn">Cart</li>
                            </Link>
                            <Link to="/login" className="link">
                            <li className="navBtn"> LOGIN</li>
                            </Link>
                            <Link to="/register" className="link">
                            <li className="navBtn">REGISTER</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                }
            {/* </Top> */}
        </>
    ) 
}
export default Header;

