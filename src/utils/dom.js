export function createElement(tag, options = {}) {
  const el = document.createElement(tag)

  if (options.classes) el.classList.add(...options.classes)
  if (options.text !== undefined) el.textContent = options.text

  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value)
    }
  }

  if (options.dataset) {
    for (const [key, value] of Object.entries(options.dataset)) {
      el.dataset[key] = value
    }
  }

  if (options.children) el.append(...options.children)

  return el
}