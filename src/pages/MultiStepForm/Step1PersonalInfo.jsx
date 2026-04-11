import './MultiStepForm.css'

export default function Step1PersonalInfo({ formData, errors, touched, onChange, onBlur }) {
    return (
        <div className="step-fields">

            <div className="field-group">
                <label className="field-label">Full Name</label>
                <input
                    type="text"
                    className={`field-input ${touched.name && errors.name ? 'input-error' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={e => onChange('name', e.target.value)}
                    onBlur={() => onBlur('name')}
                />
                {touched.name && errors.name && (
                    <span className="error-msg">{errors.name}</span>
                )}
            </div>

            <div className="field-group">
                <label className="field-label">Email Address</label>
                <input
                    type="email"
                    className={`field-input ${touched.email && errors.email ? 'input-error' : ''}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={e => onChange('email', e.target.value)}
                    onBlur={() => onBlur('email')}
                />
                {touched.email && errors.email && (
                    <span className="error-msg">{errors.email}</span>
                )}
            </div>

            <div className="field-group">
                <label className="field-label">Phone Number</label>
                <input
                    type="tel"
                    className={`field-input ${touched.phone && errors.phone ? 'input-error' : ''}`}
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={e => {
                        // only allow digits, +, spaces, dashes, brackets
                        const cleaned = e.target.value.replace(/[^\d\s\+\-\(\)]/g, '')
                        onChange('phone', cleaned)
                    }}
                    onBlur={() => onBlur('phone')}
                />
                {touched.phone && errors.phone && (
                    <span className="error-msg">{errors.phone}</span>
                )}
            </div>

        </div>
    )
}