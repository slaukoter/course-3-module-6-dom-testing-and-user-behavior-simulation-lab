// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const simulateBtn = document.getElementById("simulate-click")
    const form = document.getElementById("user-form")

    if (simulateBtn) {
      simulateBtn.addEventListener("click", () => {
        simulateClick("dynamic-content", "Button Clicked!")
      })
    }

    if (form) {
      handleFormSubmit("user-form", "dynamic-content")
    }
  })
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(id, text) {
  const element = document.getElementById(id)
  if (element) {
    element.textContent = text
  } else {
    console.error(`Element with ID "${id}" not found`)
  }
}

function removeElementFromDOM(id) {
  const element = document.getElementById(id)
  if (element) {
    element.remove()
  } else {
    console.error(`Cannot remove element with ID "${id}" — not found`)
  }
}

function simulateClick(id, message) {
  const element = document.getElementById(id)
  if (element) {
    element.textContent = message
  } else {
    console.error(`Element with ID "${id}" not found`)
  }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId)
  const input = document.getElementById("user-input")
  const error = document.getElementById("error-message")
  const output = document.getElementById(outputId)

  if (!form || !input || !error || !output) {
    console.error("Required elements missing from the DOM")
    return
  }

  const value = input.value.trim()

  if (!value) {
    error.textContent = "Input cannot be empty"
    error.classList.remove("hidden")
    return
  }

  error.classList.add("hidden")
  error.textContent = ""
  output.textContent = value
}

function displayError(message) {
  const error = document.getElementById("error-message")
  if (error) {
    error.textContent = message
    error.classList.remove("hidden")
  }
}

function hideError() {
  const error = document.getElementById("error-message")
  if (error) {
    error.classList.add("hidden")
    error.textContent = ""
  }
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}) {
  const element = document.createElement(tag)
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr])
  })
  return element
}

// Export for Jest testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    displayError,
    hideError,
    createElement
  }
}
