import {fetchAllProducts, BASE_URL} from '../api';
import React, {useState, useEffect} from 'react';

const FeaturedProducts = (token) => {
    
    try {
        fetch (`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
        }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setIsAdded(true)
            })
        }catch (err) {
            console.error(err)
        }
    }