import "./Products.css";

import { Product } from "./Product";
import { useState, useEffect } from "react";

import axios from "axios";

export function Products()
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        const getProducts = async () =>
        {
            const response = await axios.get("/data.json");
            setProducts(response.data.products);
        }
        getProducts();
    }, []);

    if(!products)
    {
        console.log("productsArray is empty.");
        return;
    }

    console.log(products);

    return (
        <section className="products">
            <div className="products-grid">
            {
                products?.map((product) =>
                {
                    return <Product image_url={product.image_url} name={product.name} price_rsd={product.price_rsd} id={product.id} key={product.id}/>
                })
            }
            </div>
        </section>
    )
}