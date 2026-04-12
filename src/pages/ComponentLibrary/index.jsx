import { useState } from "react"
import Button from "../../components/Button/Button"

export default function ComponentLibrary() {
    const [loading, setLoading] = useState(false)

    const handleLoadingDemo = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
    }

  return (
    <div style={{ padding: '32px' , display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <h2>Component Library</h2>

       {/* Variants */}
        <section>
            <h3 style={{marginBottom: '16px', color: 'var(--text-secondary)'}}>Button Variants</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
            </div>
        </section>

        {/* Sizes */}
        <section>
            <h3 style={{marginBottom: '16px', color: 'var(--text-secondary)'}}>Button Sizes</h3>
            <div style={{ display: 'flex', gap: '12px',alignItems: 'center', flexWrap: 'wrap' }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
        </section>

        {/* States */}
        <section>
            <h3 style={{marginBottom: '16px', color: 'var(--text-secondary)'}}>Button States</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button onClick={handleLoadingDemo} loading={loading}>{loading ? 'Loading...' : 'Click to Load'}</Button>
                <Button disabled>Disabled</Button>
                <Button variant="danger" disabled>Disabled Danger</Button>
            </div>
        </section>
    </div>
  )
}