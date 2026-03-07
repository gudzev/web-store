export function CartCheckout()
{
    return <div className="cart-checkout">
        <div className="cart-checkout-heading">
            <h1>Pregled porudžbine</h1>
        </div>

        <div className="cart-checkout-summary">
            <div className="cart-checkout-summary-row">
                <h2>Cena proizvoda: </h2>
                <h2>BROJ</h2>
            </div>
            <div className="cart-checkout-summary-row">
                <h2>Isporuka: </h2>
                <h2>BROJ</h2>
            </div>
            <div className="cart-checkout-summary-row">
                <h2>Ukupno: </h2>
                <h2>BROJ</h2>
            </div>
        </div>

        <div className="cart-checkout-summary-row">
            <button className="checkout-btn">
                Nastavi ka plaćanju
            </button>
        </div>
    </div>
}