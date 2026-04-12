# Ahya React Developer Assessment

## 🔗 Live Demo

*Deploying... link will be updated shortly*

## 📦 GitHub Repository

https://github.com/h-samara-mohsin/ahya-assessment

---

## Setup Instructions

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

---

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

* Promotes reusability and scalability
* Keeps UI logic decoupled from business logic
* Aligns with real-world React architecture

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

* CSS Modules used for reusable components (Task 4)
* Global CSS used for layout and design tokens

**Reasoning:**

* CSS Modules prevent class name collisions
* Enables scoped, maintainable styling
* Meets task requirement (no Tailwind for component library)

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

* Collapsible sidebar
* Responsive grid layout
* Sortable table
* Semantic HTML used

---

### Task 2: Multi-Step Form

* 3-step onboarding flow
* Custom validation (no libraries)
* Keyboard accessible
* State persists across steps

---

### Task 3: Product Listing

* API integration
* Debounced search (300–500ms)
* Category filters
* Loading skeleton
* Error + retry handling
* Empty state handling

---

### Task 4: Component Library

* Built reusable UI components
* CSS Modules used for styling
* Toast system implemented using Context API
* Modal includes focus management and Escape handling

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

## Final Notes

This project prioritizes:

* Clean architecture
* Reusability
* Accessibility
* Maintainability

Trade-offs were made to balance time constraints while ensuring a production-ready structure.

---
