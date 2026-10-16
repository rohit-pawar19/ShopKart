import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';

const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR',
}).format(price);

function Cart() {
    const { state, dispatch } = useContext(CartContext);
    const { state: themeState } = useContext(ThemeContext);
    const subtotal = state.cart.reduce((total, item) => total + Number(item.price), 0);
    const navigate=useNavigate();

    return (
        <main className="cart-page" data-theme={themeState.theme}>
            <header className="cart-header">
                <div>
                    <p className="cart-eyebrow">YOUR SHOPPING BAG</p>
                    <h1>My cart <span className="cart-count">{state.cart.length}</span></h1>
                    <p>All your favourites, in one place.</p>
                </div>
                <Link className="cart-back-link" to="/product">Continue shopping <span aria-hidden="true">&rarr;</span></Link>
            </header>

            {state.cart.length === 0 ? (
                <section className="cart-empty">
                    <div className="cart-empty-icon" aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 7h14l1 14H4L5 7Z" />
                            <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                        </svg>
                    </div>
                    <h2>Your cart is waiting</h2>
                    <p>Find something you love and add it here.</p>
                    <Link className="cart-shop-button" to="/product">Explore products</Link>
                </section>
            ) : (
                <div className="cart-layout">
                    <ul className="cart-items" aria-label="Cart items">
                        {state.cart.map((item, index) => (
                            <li className="cart-item" key={index}>
                                <div className="cart-image-wrap">
                                    <img src={item.image} alt={item.title} className="cart-image" />
                                </div>
                                <div className="cart-item-details">
                                    <h2>{item.title}</h2>
                                    {item.description && <p className="cart-description">{item.description}</p>}
                                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                                    <button className="cart-remove" type="button" aria-label={`Remove ${item.title} from cart`}
                                        onClick={() => dispatch({ type: 'Remove_From_Cart', index })}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button className="cart-shop-button cart-payment-button" type="button" onClick={()=>navigate('/payment')}>
                Proceed to Payment <span aria-hidden="true">&rarr;</span>
            </button>

        </main>
        
    );
}

export default Cart;
