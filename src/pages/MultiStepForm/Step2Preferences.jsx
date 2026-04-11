import './MultiStepForm.css'

const AVAILABLE_TAGS = [
  'Technology', 'Design', 'Data Science',
  'Finance', 'Marketing', 'Healthcare',
  'Education', 'Gaming'
]

const NOTIFICATION_OPTIONS = ['Email', 'SMS', 'Both']

export default function Step2Preferences({ formData, errors, touched, onChange, onBlur }) {

  function toggleTag(tag) {
    const current = formData.tags
    const updated = current.includes(tag)
      ? current.filter(t => t !== tag)   // remove if already selected
      : [...current, tag]                // add if not selected
    onChange('tags', updated)
  }

  return (
    <div className="step-fields">

      {/* Multi-select Tags */}
      <div className="field-group">
        <label className="field-label">Your Interests</label>
        <p className="field-hint">Select all that apply</p>
        <div className="tags-grid">
          {AVAILABLE_TAGS.map(tag => (
            <button
              key={tag}
              type="button"
              className={`tag-chip ${formData.tags.includes(tag) ? 'tag-selected' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        {touched.tags && errors.tags && (
          <span className="error-msg">{errors.tags}</span>
        )}
      </div>

      {/* Range Slider */}
      <div className="field-group">
        <label className="field-label">
          Experience Level
          <span className="slider-value">{formData.experience}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={formData.experience}
          className="range-slider"
          onChange={e => onChange('experience', Number(e.target.value))}
        />
        <div className="slider-labels">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Expert</span>
        </div>
      </div>

      {/* Toggle Group */}
      <div className="field-group">
        <label className="field-label">Notification Preference</label>
        <div className="toggle-group">
          {NOTIFICATION_OPTIONS.map(option => (
            <button
              key={option}
              type="button"
              className={`toggle-btn ${formData.notification === option ? 'toggle-active' : ''}`}
              onClick={() => onChange('notification', option)}
              onBlur={() => onBlur('notification')}
            >
              {option}
            </button>
          ))}
        </div>
        {touched.notification && errors.notification && (
          <span className="error-msg">{errors.notification}</span>
        )}
      </div>

    </div>
  )
}