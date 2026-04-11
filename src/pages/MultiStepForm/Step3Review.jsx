import './MultiStepForm.css'

export default function Step3Review({ formData }) {
  return (
    <div className="review-container">
      <h3 className="review-heading">Review Your Information</h3>

      <div className="review-section">
        <h4 className="review-section-title">Personal Info</h4>
        <div className="review-row">
          <span className="review-label">Name</span>
          <span className="review-value">{formData.name}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Email</span>
          <span className="review-value">{formData.email}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Phone</span>
          <span className="review-value">{formData.phone}</span>
        </div>
      </div>

      <div className="review-section">
        <h4 className="review-section-title">Preferences</h4>
        <div className="review-row">
          <span className="review-label">Interests</span>
          <span className="review-value">{formData.tags.join(', ')}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Experience</span>
          <span className="review-value">{formData.experience}%</span>
        </div>
        <div className="review-row">
          <span className="review-label">Notifications</span>
          <span className="review-value">{formData.notification}</span>
        </div>
      </div>
    </div>
  )
}