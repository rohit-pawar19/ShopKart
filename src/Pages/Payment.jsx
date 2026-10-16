import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function Payment() {

  const navigate = useNavigate();

  const { state, dispatch } = useContext(CartContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  function Submit() {
    dispatch({ type: "Clear_Cart" });
    navigate("/success");
  }

  return (
    <main className="auth-page payment-page">
      <section className="auth-card payment-card" aria-labelledby="payment-title">
        <header className="auth-header">
          <p className="auth-eyebrow">CHECKOUT</p>
          <h1 id="payment-title">Payment</h1>
          <p>Review your total and enter your card details.</p>
        </header>

        <div className="payment-total">
          <span>Total amount</span>
          <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</strong>
        </div>

        <div className="auth-form">
          <div className="auth-field">
            <label htmlFor="card-number">Card number</label>
            <input id="card-number" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="payment-fields">
            <div className="auth-field">
              <label htmlFor="card-expiry">Expiry date</label>
              <input id="card-expiry" type="month" autoComplete="cc-exp" />
            </div>
            <div className="auth-field">
              <label htmlFor="card-cvv">CVV</label>
              <input id="card-cvv" type="password" inputMode="numeric" autoComplete="cc-csc" maxLength={4} placeholder="123" />
            </div>
          </div>
          <button className="auth-submit checkout-button" type="button" onClick={Submit}>
            Pay Now <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Payment;
