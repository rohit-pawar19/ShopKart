import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Component/ProductCard'

function Home() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://fakestoreapi.com/products', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Could not load products')
        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setStatus('success')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [])

  const featuredProducts = useMemo(
    () => products.filter((item) => item.price < 200),
    [products],
  )

  return (
    <main className="home-page">
      <section className="home-banner" aria-labelledby="home-banner-title">
        <div className="home-banner-copy">
          <p className="home-eyebrow">THE EVERYDAY EDIT</p>
          <h1 id="home-banner-title">Good finds. Great prices.</h1>
          <p>Discover the little upgrades that make every day better.</p>
          <Link className="home-banner-button" to="/product">Shop all products <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-banner-art" aria-hidden="true">
          <span className="banner-orb banner-orb-one" />
          <span className="banner-orb banner-orb-two" />
          <span className="banner-product banner-bag">✦</span>
          <span className="banner-product banner-box">◉</span>
          <span className="banner-product banner-cup">⌁</span>
          <span className="banner-sparkle">✳</span>
        </div>
      </section>

      <section className="home-products" aria-labelledby="home-products-title">
        <div className="home-section-heading">
          <div>
            <p className="home-eyebrow">CURATED FOR YOU</p>
            <h2 id="home-products-title">Popular picks</h2>
          </div>
          <Link to="/product">View all products <span aria-hidden="true">→</span></Link>
        </div>
        {status === 'loading' && <p className="home-message" role="status">Loading popular picks…</p>}
        {status === 'error' && <p className="home-message" role="alert">We couldn’t load products. Please refresh to try again.</p>}
        {status === 'success' && (
          <div className="product-grid">
            {featuredProducts.slice(0, 4).map((item) => (
              <ProductCard key={item.id} image={item.image} title={item.title} description={item.description} price={item.price} rate={item.rating?.rate} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
