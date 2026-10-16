import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate();
  return (
    <main className="auth-page success-page">
      <section className="auth-card success-card" aria-labelledby="success-title">
        <div className="success-icon" aria-hidden="true">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>
        <header className="auth-header">
          <p className="auth-eyebrow">THANK YOU</p>
          <h1 id="success-title">Payment successful</h1>
          <p>Thanks for your order. We hope you enjoy your new favourites!</p>
        </header>
        <button className="auth-submit checkout-button" type="button" onClick={() => navigate('/')}>
          Return to Home <span aria-hidden="true">&rarr;</span>
        </button>
      </section>
    </main>
  )
}

export default Success;
