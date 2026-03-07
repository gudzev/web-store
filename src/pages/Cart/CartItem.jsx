import "./Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { formatPrice } from "../../utils/formatPrice";

export function CartItem({cartItem})
{
    return <div className="cart-item">
        <img src={cartItem.cartProduct.image_url} alt={cartItem.cartProduct.name + ' ' + "Image"} className="cart-item-img"/>
        <h2 className="cart-item-name">{cartItem.cartProduct.name}</h2>
        <div className="cart-item-qty">
            <input type="text" value={cartItem.quantity} className="cart-item-qty-input"/>
        </div>
        <p className="cart-item-price">
            {formatPrice(cartItem.cartProduct.price_rsd * cartItem.quantity) + ' ' + "RSD"}
        </p>
        <FontAwesomeIcon icon={faTrash} className="cart-item-delete-btn" />
    </div>
}