import './MultiStepForm.css'

export default function Step1PersonalInfo({ formData, onChange }) {
  return (
    <div className="step-fields">

      <div className="field-group">
        <label className="field-label">Full Name</label>
        <input
          type="text"
          className="field-input"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label className="field-label">Email Address</label>
        <input
          type="email"
          className="field-input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={e => onChange('email', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label className="field-label">Phone Number</label>
        <input
          type="tel"
          className="field-input"
          placeholder="+92 300 0000000"
          value={formData.phone}
          onChange={e => onChange('phone', e.target.value)}
        />
      </div>

    </div>
  )
}