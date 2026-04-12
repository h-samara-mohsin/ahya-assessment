import { useState } from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { Eye, Search } from "lucide-react"
import Modal from "../../components/Modal/Modal"

export default function ComponentLibrary() {
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const handleLoadingDemo = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h2>Component Library</h2>

            {/* Variants */}
            <section>
                <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Button Variants</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="outline">Outline</Button>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Button Sizes</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
            </section>

            {/* States */}
            <section>
                <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Button States</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button onClick={handleLoadingDemo} loading={loading}>{loading ? 'Loading...' : 'Click to Load'}</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant="danger" disabled>Disabled Danger</Button>
                </div>
            </section>

            {/* Input */}
            <section>
                <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Input</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexWrap: 'wrap' }}>
                    {/* Basic */}
                    <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        helperText="This will appear on your profile"
                    />

                    {/* with left icon */}
                    <Input
                        label="Search"
                        placeholder="Search..."
                        leftIcon={<Search size={16} />}
                    />

                    {/* With right icon */}
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        rightIcon={<Eye size={16} />}
                    />

                    {/* Error state */}
                    <Input
                        label="Email"
                        placeholder="Enter email"
                        error="Please enter a valid email address"
                    />

                </div>
            </section>

            {/* Modal */}
            <section>
                <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Modal</h3>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Confirm Action"
                    footer={
                        <>
                            <Button variant="ghost" onClick={() => setModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => setModalOpen(false)}>
                                Confirm
                            </Button>
                        </>
                    }
                >
                    <p>Are you sure you want to proceed? This action cannot be undone.</p>
                </Modal>

            </section>

        </div>
    )
}