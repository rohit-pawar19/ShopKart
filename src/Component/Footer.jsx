import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="site-footer-logo">ShopKart<span>.</span></Link>
          <p>Good finds for everyday living.</p>
        </div>
        <nav className="site-footer-links" aria-label="Footer navigation">
          <Link to="/product">Shop</Link>
          <Link to="/cart">Your cart</Link>
          <Link to="/login">Sign in</Link>
        </nav>
        <p className="site-footer-copy">© {new Date().getFullYear()} ShopKart. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
