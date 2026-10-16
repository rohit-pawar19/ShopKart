import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/CartContext';

function Navbar() {

  const {state, dispatch}=useContext(ThemeContext)
  const {state: cartState}=useContext(CartContext)
 
  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="site-navbar-inner">
        <Link className="site-brand" to="/">ShopKart</Link>
        <div className="site-nav-links">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart">Cart({cartState.cart.length})</Link>
          <Link to="/login">Login</Link>
          <Link className="site-nav-register" to="/register">Register</Link>


          <button className="theme-toggle" type="button" aria-pressed={state.theme === "dark"} onClick={()=>dispatch({type: 'Toggle_theme'})}>
            {state.theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
