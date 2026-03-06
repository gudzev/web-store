import "./Home.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Products } from "../../components/Products/Products";

import { useState } from "react";

export function Home()
{
    const [searchText, setSearchText] = useState("");

    return <>
        <Header searchText={searchText} setSearchText={setSearchText}/>
        <Products searchText={searchText}/>
        <Footer />
    </>
}