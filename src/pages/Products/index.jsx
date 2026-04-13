import { useEffect, useState } from "react"
import './Products.css'
import ProductSkeleton from "./ProductSkeleton"
import useDebounce from "../../hooks/useDebounce"

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const [retryCount, setRetryCount] = useState(0)  
    const ITEMS_PER_PAGE = 6

    const debounceSearch = useDebounce(search, 500)
    const categories = ['All', ...new Set(products.map(p => p.category))]

    useEffect(() => {
        const controller = new AbortController()

        const fetchProducts = () => {
            setLoading(true)
            setError(null)

            fetch('https://dummyjson.com/products?limit=20', {
                signal: controller.signal      // ← pass signal to fetch
            })
                .then(res => {
                    if (!res.ok) throw new Error('Failed to fetch products')
                    return res.json()
                })
                .then(data => {
                    setProducts(data.products)
                    setLoading(false)
                })
                .catch(err => {
                    if (err.name === 'AbortError') return  // ← ignore cancelled requests
                    setError(err.message)
                    setLoading(false)
                })
        }

        fetchProducts()

        // cleanup — cancel fetch if component unmounts
        return () => controller.abort()
    }, [retryCount])

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(debounceSearch.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
        return matchesSearch && matchesCategory
    }
    )

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    useEffect(() => {
        setCurrentPage(1) // reset to first page on search/category change
    }, [debounceSearch, selectedCategory])

    return (
        <div className="products-page">
            <div className="products-header">
                <h2 className="products-title">Products</h2>
                <p className="products-count">
                    {loading ? 'Loading...' : `Showing ${paginatedProducts.length} of ${filteredProducts.length} products`}
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

                {/* category chips */}
                <div className="category-chips">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`chip ${selectedCategory === cat ? 'chip-active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="products-grid">
                {loading && <ProductSkeleton />}

                {!loading && error && (
                    <div className="error-state">
                        <span className="error-icon">⚠️</span>
                        <h3 className="error-title">Something went wrong</h3>
                        <p className="error-msg">{error}</p>
                        <button className="retry-btn" onClick={() => setRetryCount(c => c + 1)}>
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

                {!loading && !error && filteredProducts.length > 0 && paginatedProducts.map(product => (
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

            {!loading && !error && totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="page-btn"
                        onClick={() => setCurrentPage(p => p - 1)}
                        disabled={currentPage === 1}
                    >
                        ← Prev
                    </button>

                    <div className="page-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`page-num ${currentPage === page ? 'page-active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        className="page-btn"
                        onClick={() => setCurrentPage(p => p + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    )
}