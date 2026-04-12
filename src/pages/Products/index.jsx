import { useEffect, useState } from "react"

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
                console.log(data)        
                setProducts(data.products)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Products ({products.length})</h2>
            {products.map(p => (
                <p key={p.id}>{p.title}</p>   
            ))}
        </div>
    )
}