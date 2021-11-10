import React, { useState } from 'react';
import {
    editThisProduct,
    BASE_URL
} from '../api'
const EditProduct = ({category, name, photo, description, price, quantity, allProducts, setAllProducts, userToken, productId, ToggleClass, setProductName, setProductDescript, setProductPrice, setProductCategory, setProductQuantity, setProductPhoto }) => {
    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);
    const [newPrice, setNewPrice] = useState(price);
    const [newCategory, setNewCategory] = useState(category);
    const [newQuantity, setNewQuantity] = useState(quantity);
    const [newPhoto, setNewPhoto] = useState(photo);
    function resetForm() {
        setNewName('');
        setNewDescription('');
        setNewPrice('');
        setNewCategory('');
        setNewQuantity('');
        setNewPhoto('');
    }
    async function edit(e) {
        e.preventDefault();
        try {
            const results = await editThisProduct(BASE_URL, productId, userToken, newName, newDescription, newCategory, newQuantity, newPrice,  newPhoto);
            if (results.id) {
                setProductName(results.name)
                setProductDescript(results.description)
                setProductCategory(results.category)
                setProductPrice(results.price)
                setProductQuantity(results.quantity)
                setProductPhoto(results.photo)
                setAllProducts([...allProducts]);
                ToggleClass();
                resetForm();
            }
        } catch (error) {
            console.error(error)
        }
        location.reload();
    }
    return (
        <section className="editProductAside">
            <h1 className="editProduct">Edit Product</h1>
            <form className="editProductForm" onSubmit={(e) => {
                                edit(e)
                            }}>
                <div className="editProductContent">
                    <label className="editProductLabel">Name:</label>
                </div>
                <div className="editProductContent">
                    <input className="editProductInput" type="text"
                        placeholder="Name" value={newName}
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }} />
                </div>
                <div className="editProductContent">
                    <label className="editProductLabel">Description:</label>
                </div>
                <div className="editPostContent">
                    <input className="editProductInputBox" type="text"
                        placeholder="Description" value={newDescription}
                        onChange={(event) => {
                            setNewDescription(event.target.value);
                        }} />
                </div>

                <div className="editProductContent">
                    <label className="editProductLabel">Price:</label>
                </div>
                <div className="editPostContent">
                    <input className="editProductInput"
                        type="number"
                        min="1"
                        step="any"
                        placeholder="Price" value={newPrice}
                        onChange={(event) => {
                            setNewPrice(event.target.value);
                        }} />
                </div>
                <div className="editProductContent">
                    <label className="editProductLabel">Quantity:</label>
                </div>
                <div className="editPostContent">
                    <input className="editProductInput" type="number"
                        placeholder="Quantity" value={newQuantity}
                        onChange={(event) => {
                            setNewQuantity(event.target.value);
                        }} />
                </div>
                <div className="editProductContent">
                    <label className="editProductLabel">Category:</label>
                </div>
                <div className="editPostContent">
                    <input className="editProductInput" type="text"
                        placeholder="Category" value={newCategory}
                        onChange={(event) => {
                            setNewCategory(event.target.value);
                        }} />
                </div>
                <div className="editProductContent">
                    <label className="editProductLabel">Photo</label>
                </div>
                <div className="editPostContent">
                    <input className="editProductInput" type="text"
                        placeholder="Photo" value={newPhoto}
                        onChange={(event) => {
                            setNewPhoto(event.target.value);
                        }} />
                </div>
                <button className="editProdSubmit" type="submit">Update Product!</button>
            </form>
        </section>
    )
}
export default EditProduct;