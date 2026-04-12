import './Products.css'

function SkeletonCard() {
  return (
    <div className="product-card skeleton-card">
      <div className="skeleton skeleton-image" />
      <div className="card-body">
        <div className="skeleton skeleton-category" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-title short" />
        <div className="card-footer">
          <div className="skeleton skeleton-price" />
          <div className="skeleton skeleton-rating" />
        </div>
      </div>
    </div>
  )
}

export default function ProductSkeleton() {
  // show 6 skeleton cards — same as one page of results
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  )
}