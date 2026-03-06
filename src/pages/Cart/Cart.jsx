import "./Cart.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CartItem } from "./CartItem";

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

    console.log(cartProducts);

    return <>
        <Header setSearchText={setSearchText} cart={cart}/>

        <section className="cart">
            <div className="cart-content">

                <h1 className="cart-header">Korpa</h1>

                <div className="cart-flex-container">
                    <div className="cart-preview">
                        {
                            cartProducts?.map((cartItem) =>
                            {
                                return <CartItem key={cartItem.cartProduct.id} cartItem={cartItem} />
                            })
                        }
                    </div>

                    <div className="cart-checkout">

                    </div>
                </div>

            </div>
        </section>

        <Footer />
    </>
}