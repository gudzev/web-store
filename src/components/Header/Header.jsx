import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faCartShopping, faHouse, faSuitcase, faPhoneVolume, faHeart } from "@fortawesome/free-solid-svg-icons";

export function Header()
{
    return <header>

        <div className="header-main">
            <a className="header-img-wrapper" href="#">
                <img src="/logo.png" className="header-img" alt="Prodavnica logo"/>
            </a>

            <button className="header-categories">
                <FontAwesomeIcon icon={faBars} className="fa-icon-2x fa-textirght" /> Sve kategorije
            </button>

            <div className="header-search-container">
                <input type="text" className="header-search" placeholder="Pronađite proizvod"/>
                <button className="header-search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-icon-1x" />
                </button>
            </div>

            <div className="header-additional">
                <button className="header-wishlist">
                    <FontAwesomeIcon icon={faHeart} className="fa-icon-2x" />
                    Lista zelja
                </button>

                <button className="header-cart">
                    <FontAwesomeIcon icon={faCartShopping} className="fa-icon-2x" />
                    Korpa
                    
                    <span className="cart-counter">0</span>
                </button>
            </div>
        </div>

        <div className="header-links">
            <div className="header-pages">
                <ul className="ul-links">
                    <li><a href="#"><FontAwesomeIcon icon={faHouse} className="fa-icon-1x" /></a></li>
                    <li><a href="#">Grafičke karte</a></li>
                    <li><a href="#">Procesori</a></li>
                    <li><a href="#">Matične ploče</a></li>
                    <li><a href="#">Memorija</a></li>
                    <li><a href="#">SSD</a></li>
                    <li><a href="#">HDD</a></li>
                    <li><a href="#">Napajanja</a></li>
                    <li><a href="#">Kućišta</a></li>
                </ul>

                <ul className="ul-contact">
                    <li><a href="#"><FontAwesomeIcon icon={faSuitcase} className="fa-textright" />Pravna lica</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPhoneVolume} className="fa-textright" />Podrška za potrošače</a></li>
                </ul>
            </div>
        </div>

    </header>
}