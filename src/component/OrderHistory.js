import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../api'

const OrderHistory = () => {
    return(
        <div className='orderhistory'>
        <h1 classkName='quote'>"THE BEST THING TO DO WITH BAD SMELL IS TO GET RID OF IT IT"</h1>
        <p className='author'>Carol Kendall</p>
        <p className='reply'>So, What you waiting for? Go smell McLovin!</p>
        </div>
    )
}
export default OrderHistory;