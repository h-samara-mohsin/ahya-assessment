import { useEffect, useState } from "react"
import './Products.css'
import ProductSkeleton from "./ProductSkeleton"
import useDebounce from "../../hooks/useDebounce"

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const debounceSearch = useDebounce(search, 500)

    const fetchProducts = () => {
        setLoading(true)
        setError(null)

        fetch('https://dummyjson.com/products?limit=20')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch products')
                return res.json()
            })
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(debounceSearch.toLowerCase())
    )

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="products-page">
            <div className="products-header">
                <h2 className="products-title">Products</h2>
                <p className="products-count">
                    {loading ? 'Loading...' : `${products.length} items`}
                </p>
            </div>

            <div className="products-toolbar">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search products..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button
                            className="search-clear"
                            onClick={() => setSearch('')}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <div className="products-grid">
                {loading && <ProductSkeleton />}

                {!loading && error && (
                    <div className="error-state">
                        <span className="error-icon">⚠️</span>
                        <h3 className="error-title">Something went wrong</h3>
                        <p className="error-msg">{error}</p>
                        <button className="retry-btn" onClick={fetchProducts}>
                            Try Again
                        </button>
                    </div>
                )}

                {!loading && !error && filteredProducts.length === 0 && (
                    <div className="empty-state">
                        <span className="empty-icon">🔍</span>
                        <h3 className="empty-title">No products found</h3>
                        <p className="empty-msg">
                            Try adjusting your search term
                        </p>
                        <button
                            className="retry-btn"
                            onClick={() => setSearch('')}
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {!loading && !error && filteredProducts.length > 0 && filteredProducts.map(product => (
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