import "./Products.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

let timeoutList = [];

export function Product({image_url, name, price_rsd, id})
{
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addToCart = (productId) =>
    {
        console.log(productId);
        displayAddedToCartText();
    }

    const displayAddedToCartText = () =>
    {
        timeoutList.forEach((timeout) =>
        {
            clearTimeout(timeout);
        })

        setIsAddedToCart(true);
        const timeout = setTimeout(() =>
        {
            setIsAddedToCart(false);
        }, 2500);
        timeoutList.push(timeout);
    }

    return <div className="product">
                <img src={image_url} alt={name + " image"} className="product-img" />

                <h2 className="product-name">{name}</h2>

                <div className="product-details">
                    <div className="product-quantity">
                        <span className="product-qty-text">Quantity: </span>
                        <select className="product-qty-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <span className="product-price">Price: {price_rsd} RSD</span>
                </div>

                <button className="add-to-cart-btn" onClick={() => { addToCart(id)}}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add To Cart
                </button>
                <span className={isAddedToCart ? `cart-added active` : `cart-added`}><FontAwesomeIcon icon={faCheck} />Added</span>
    </div>
}