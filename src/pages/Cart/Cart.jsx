import "./Cart.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CartItem } from "./CartItem";
import { CartCheckout } from "./CartCheckout";
import { CartPreview } from "./CartPreview";

import { useState, useEffect } from "react";

import axios from "axios";

export function Cart({setSearchText, cart})
{
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() =>
    {
        const getCartProducts = async () =>
        {
            const response = await axios.get("/data.json");
            const products = response.data.products;

            const newProducts = [];

            cart.forEach((cartProduct) =>
            {
                products.forEach((dataProduct) =>
                {
                    if(cartProduct.productId == dataProduct.id)
                    {
                        newProducts.push({cartProduct: dataProduct, quantity: cartProduct.quantity});
                    }
                })
            })
            setCartProducts(newProducts);
        }
        getCartProducts();
    }, [cart]);

    return <>
        <Header setSearchText={setSearchText} cart={cart}/>

        <section className="cart">
            <div className="cart-content">

                <h1 className="cart-header">Korpa</h1>

                <div className="cart-flex-container">
                    <CartPreview cartProducts={cartProducts}/>
                    <CartCheckout />
                </div>

            </div>
        </section>

        <Footer />
    </>
}