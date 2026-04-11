import './MultiStepForm.css'

export default function SuccessState({ onReset }) {
  return (
    <div className="form-page">
      <div className="form-card success-card">
        <div className="success-icon">✅</div>
        <h2 className="success-title">You're all set!</h2>
        <p className="success-body">
          Your profile has been created successfully.
        </p>
        <button className="btn-next" onClick={onReset}>
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}