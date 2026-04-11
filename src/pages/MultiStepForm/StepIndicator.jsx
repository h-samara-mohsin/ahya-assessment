import './StepIndicator.css'

const steps = [
  { number: 1, label: 'Personal Info' },
  { number: 2, label: 'Preferences' },
  { number: 3, label: 'Review' },
]

export default function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={step.number} className="step-item">

          {/* Circle */}
          <div className={`step-circle ${
            currentStep > step.number ? 'completed' :
            currentStep === step.number ? 'active' : 'upcoming'
          }`}>
            {currentStep > step.number ? '✓' : step.number}
          </div>

          {/* Label */}
          <span className={`step-label ${
            currentStep === step.number ? 'active-label' : ''
          }`}>
            {step.label}
          </span>

          {/* Connecting line — don't show after last step */}
          {index < steps.length - 1 && (
            <div className={`step-line ${
              currentStep > step.number ? 'completed-line' : ''
            }`} />
          )}

        </div>
      ))}
    </div>
  )
}