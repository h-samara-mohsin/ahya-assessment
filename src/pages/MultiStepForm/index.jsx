import { useState } from 'react'
import './MultiStepForm.css'
import StepIndicator from './StepIndicator'
import Step1PersonalInfo from './Step1PersonalInfo'
import Step2Preferences from './Step2Preferences'

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [formData, setFormData] = useState({
        // Step 1
        name: '',
        email: '',
        phone: '',
        // Step 2 — add these
        tags: [],
        experience: 50,
        notification: '',
    })

    const handleChange = (field, value) => {
        const updated = { ...formData, [field]: value }
        setFormData(updated)

        // Auto-touch tags and notification on change
        if (field === 'tags' || field === 'notification') {
            setTouched(prev => ({ ...prev, [field]: true }))
        }

        if (touched[field]) {
            const result = currentStep === 1
                ? validateStep1(updated)
                : validateStep2(updated)
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

    const validateStep2 = (data) => {
        const errors = {}

        if (data.tags.length === 0)
            errors.tags = 'Please select at least one interest'

        if (!data.notification)
            errors.notification = 'Please select a notification preference'

        return errors
    }

    const handleBlur = (field) => {
        // mark field as touched
        setTouched(prev => ({ ...prev, [field]: true }))
        // validate and set errors
        const result = currentStep === 1
            ? validateStep1(formData)
            : validateStep2(formData)
        setErrors(result)
    }

    const isStepValid = currentStep === 1
        ? Object.keys(validateStep1(formData)).length === 0
        : currentStep === 2
            ? Object.keys(validateStep2(formData)).length === 0
            : true

    function handleNext() {
        const result = currentStep === 1
            ? validateStep1(formData)
            : validateStep2(formData)

        if (Object.keys(result).length > 0) {
            // show ALL errors at once
            const allTouched = Object.keys(result).reduce(
                (acc, key) => ({ ...acc, [key]: true }), {}
            )
            setTouched(prev => ({ ...prev, ...allTouched }))
            setErrors(result)
            return   // block navigation
        }

        setErrors({})
        setCurrentStep(p => p + 1)
    }

    return (
        <div className="form-page">
            <div className="form-card">

                <div className="form-card-header">
                    <h2 className="form-title">User Onboarding</h2>
                    <p className="form-subtitle">Complete your profile in 3 simple steps</p>
                </div>

                <StepIndicator currentStep={currentStep} />

                <div className="form-body">
                    {currentStep === 1 && (
                        <Step1PersonalInfo
                            formData={formData}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />)}
                    {currentStep === 2 &&
                        <Step2Preferences
                            formData={formData}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
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
                            onClick={handleNext}
                            disabled={currentStep === 1 && !isStepValid}
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