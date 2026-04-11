import { useState } from 'react'
import './MultiStepForm.css'
import StepIndicator from './StepIndicator'

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="form-page">
      <div className="form-card">

        <div className="form-card-header">
          <h2 className="form-title">User Onboarding</h2>
          <p className="form-subtitle">Complete your profile in 3 simple steps</p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <div className="form-body">
          {currentStep === 1 && <p>Step 1 — Personal Info</p>}
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