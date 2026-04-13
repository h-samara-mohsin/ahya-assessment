# Ahya React Developer Assessment

## 🔗 Live Demo

https://ahya-assessment-live.vercel.app/

## 📦 GitHub Repository

https://github.com/h-samara-mohsin/ahya-assessment

---

## Setup Instructions - Run Locally

**Prerequisites:** Node.js v18+ and npm

```bash
# Clone the repository
git clone https://github.com/h-samara-mohsin/ahya-assessment.git

# Navigate into project
cd ahya-assessment

# Install dependencies
npm install

# Run development server
npm run dev
```
Open http://localhost:5173 in your browser.

---


## Navigation

| Sidebar Item | Page |
|---|---|
| Dashboard | Task 1 — Analytics Dashboard |
| Users | Task 2 — Multi-Step Form |
| Analytics | Task 3 — Product Listing |
| Reports | Task 4 — Component Library |

## Technical Decisions

### 1. Component Architecture

The project follows a clear separation of concerns:

```
src/
  components/   → reusable UI components
  pages/        → feature-level views
  hooks/        → reusable logic (e.g., debounce)
  data/         → mock/static data
```

**Reasoning:**

Pages and components are separated by responsibility. `pages/` contains route-level views that compose the layout. `components/` contains reusable pieces used across multiple pages (Header, Sidebar) or the component library (Button, Input, Modal, Toast).

---

### 2. State Management

* Local state (`useState`) used for UI-level interactions
* Context API used for global state (Toast system)

**Reasoning:**

* Avoided unnecessary libraries like Redux for simplicity
* Context used only where global access is required
* Keeps state predictable and lightweight

---

### 3. Styling Approach

- **Tasks 1–3:** Plain CSS with custom properties (CSS variables) defined in `globals.css`. Colors extracted directly from the provided design mockup. This approach demonstrates CSS fundamentals over utility-class shortcuts.
- **Task 4:** CSS Modules as required — scoped class names prevent any style collisions between components.

---

### 4. Reusable Component Design

Built a small component library:

* Button (variants, sizes, loading, disabled)
* Input (label, helper text, error, icons)
* Modal (accessible, keyboard support)
* Toast (global, auto-dismiss, stackable)

**Reasoning:**

* Components are designed to be composable and extensible
* Props-based API ensures flexibility
* Focus on accessibility and UX consistency

---

### 5. Async Data Handling (Task 3)

* Custom `useDebounce` hook implemented
* Fetch requests managed with loading, error, and empty states
* Prevented stale requests

**Reasoning:**

* Avoided external libraries for debounce
* Improved performance and UX
* Demonstrates understanding of async patterns

---

## Task Breakdown

### Task 1: Responsive Dashboard

- Built bar chart with pure CSS and dynamic inline `height` styles — avoided importing a charting library for what is essentially styled divs
- Sidebar collapse uses CSS `width` transition — smooth and performant
- Table sorting implemented with two state values: `sortField` and `sortDirection`
- SVG assets provided in the assessment zip were used directly for stat card icons and header icons

---

### Task 2: Multi-Step Form

- All form state lives in the parent `index.jsx` — single source of truth pattern
- Custom validation functions written in plain JS — no Formik or Yup as required
- `touched` object tracks which fields the user has interacted with — prevents showing errors before interaction
- `useEffect` with document-level keydown listener handles Enter (advance) and Escape (back) keyboard navigation

---

### Task 3: Async Data Fetching
- Used native `fetch` instead of axios — assessment preferred avoiding unnecessary dependencies, and fetch is built into every modern browser
- `AbortController` prevents stale results when component unmounts mid-fetch
- Custom `useDebounce` hook written in 10 lines — no lodash needed
- Chose pagination over infinite scroll: simpler implementation, no intersection observer complexity, users can jump to specific pages
- Filtering (search + category) applied on the frontend from a single fetch of all products

---

### Task 4: Component Library

- CSS Modules used as required — no Tailwind
- Toast system uses React Context so any component can trigger notifications without prop drilling
- Modal uses `e.stopPropagation()` to prevent overlay-close from triggering on content clicks
- Button `pointer-events: none` on disabled state prevents double-click even if `disabled` attribute is bypassed

---

## Trade-offs & Decisions

* Did not use external UI libraries to maintain full control
* Used inline styles in demo page for speed (can be refactored)
* Focus trap in modal is basic (can be enhanced for full accessibility)

---

## Known Limitations / Improvements

* Modal could implement full focus trap (Tab cycling)
* Toast system could support custom durations
* Input validation can be expanded (regex patterns, edge cases)
* Component library could be extracted into a standalone package
* Improve mobile polish in some edge cases

---

## Time Spent Per Task

> Note: Completed across multiple focused sessions within the 48-hour window.
> Each session included testing before committing — reflected in the commit history.

| Task | Estimated Active Time |
|---|---|
| Task 1 — Responsive Dashboard | ~3.5 hours |
| Task 2 — Multi-Step Form | ~2.5 hours |
| Task 3 — Async Data Fetching | ~2 hours |
| Task 4 — Component Library | ~2 hours |
| Setup, debugging, README, deployment | ~1.5 hours |
| **Total Active Coding Time** | **~11.5 hours** |

## Final Notes

This project prioritizes:

* Clean architecture
* Reusability
* Accessibility
* Maintainability

Trade-offs were made to balance time constraints while ensuring a production-ready structure.

---
