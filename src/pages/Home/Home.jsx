import "./Home.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Products } from "../../components/Products/Products";

export function Home()
{
    return <>
        <Header />
        <Products />
        <Footer />
    </>
}