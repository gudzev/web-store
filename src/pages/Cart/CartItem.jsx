import "./Cart.css";

export function CartItem({cartItem})
{
    return <div className="cart-item">
        <img src={cartItem.cartProduct.image_url} alt={cartItem.cartProduct.name + ' ' + "Image"} className="cart-item-img"/>
        <h2>{cartItem.cartProduct.name}</h2>
        <div className="cart-item-qty">
            <p>Količina: {cartItem.quantity}</p>
        </div>
        <p className="cart-item-price">
            {cartItem.cartProduct.price_rsd * cartItem.quantity + ' ' + "RSD"}
        </p>
    </div>
}