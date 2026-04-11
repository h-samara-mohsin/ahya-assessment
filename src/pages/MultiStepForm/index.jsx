import { useState } from 'react'
import './MultiStepForm.css'
import StepIndicator from './StepIndicator'
import Step1PersonalInfo from './Step1PersonalInfo'

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChange = (field, value) => {
        const updated = { ...formData, [field]: value }
        setFormData(updated)

        // if field was already touched, re-validate on every keystroke
        if (touched[field]) {
            const result = validateStep1(updated)
            setErrors(result)
        }
    }

    const validateStep1 = (data) => {
        const errors = {}

        if (!data.name.trim())
            errors.name = 'Full name is required'

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
            errors.email = 'Please enter a valid email address'

        if (!/^\+?[\d\s\-\(\)]{10,}$/.test(data.phone))
            errors.phone = 'Please enter a valid phone number'

        return errors
    }

    const handleBlur = (field) => {
        // mark field as touched
        setTouched(prev => ({ ...prev, [field]: true }))
        // validate and set errors
        const result = validateStep1(formData)
        setErrors(result)
    }

    const isStep1Valid = Object.keys(validateStep1(formData)).length === 0

    return (
        <div className="form-page">
            <div className="form-card">

                <div className="form-card-header">
                    <h2 className="form-title">User Onboarding</h2>
                    <p className="form-subtitle">Complete your profile in 3 simple steps</p>
                </div>

                <StepIndicator currentStep={currentStep} />

                <div className="form-body">
                    {currentStep === 1 && (<Step1PersonalInfo
                        formData={formData}
                        errors={errors}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />)}
                    {currentStep === 2 && <p>Step 2 — Preferences</p>}
                    {currentStep === 3 && <p>Step 3 — Review</p>}
                </div>

                <div className="form-footer">
                    {currentStep > 1 && (
                        <button
                            className="btn-back"
                            onClick={() => setCurrentStep(p => p - 1)}
                        >
                            ← Back
                        </button>
                    )}

                    {currentStep < 3 && (
                        <button
                            className="btn-next"
                            onClick={() => setCurrentStep(p => p + 1)}
                            disabled={currentStep === 1 && !isStep1Valid}
                        >
                            Next →
                        </button>
                    )}

                    {currentStep === 3 && (
                        <button className="btn-submit">
                            Submit ✓
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}