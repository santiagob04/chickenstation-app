import React from "react";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"
const Checkout = () => {

    const mainLogo = "https://res.cloudinary.com/dhfzmxq3s/image/upload/v1688856796/chicken-station/Logo_chickenstation_cxvkyv.png";

    //   const handleCheckout = () => {
    // history.push(''); // Ruta al formulario de checkout
    //   };

    return (
        <div>
                <h1>Para finalizar tu compra!</h1>

            {/* <img src={mainLogo} alt="LOGO CHICKEN STATION" /> */}

            <div>
                <CheckoutForm />
            </div>
        </div>
    );
}

export default Checkout;