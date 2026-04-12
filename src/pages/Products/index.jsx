import { useEffect, useState } from "react"
import './Products.css'
import ProductSkeleton from "./ProductSkeleton"

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch('https://dummyjson.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return (
        <div className="products-page">
            <div className="products-header">
                <h2 className="products-title">Products</h2>
                <p className="products-count">
                    {loading ? 'Loading...' : `${products.length} items`}
                </p>
            </div>

            <div className="products-grid">
                {loading
                    ? <ProductSkeleton />
                    : products.map(product => (
                        <div key={product.id} className="product-card">
                            {/* ...card content stays same */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
    if (error) return <p>Error: {error}</p>

    return (
        <div className="products-page">
            <div className="products-header">
                <h2 className="products-title">Products</h2>
                <p className="products-count">{products.length} items</p>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">

                        <div className="card-image-wrapper">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="card-image"
                            />
                        </div>

                        <div className="card-body">
                            <span className="card-category">{product.category}</span>
                            <h3 className="card-title">{product.title}</h3>

                            <div className="card-footer">
                                <span className="card-price">${product.price}</span>
                                <span className="card-rating">⭐ {product.rating}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}