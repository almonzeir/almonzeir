## 2024-05-23 - Accessibility for Icon-Only Navigation
**Learning:** Icon-only navigation (like floating docks or mobile toggles) creates a major barrier for screen reader users when `aria-label` is missing. Tooltips alone are insufficient as they often don't expose accessible names reliably to all assistive technologies.
**Action:** Always audit icon-only buttons for `aria-label` or `aria-labelledby`. For toggle buttons, include `aria-expanded` to communicate state.

## 2026-01-19 - README Accessibility
**Learning:** Images inside links in Markdown/HTML READMEs act as icon-only buttons. Without `aria-label` on the link or `alt` text on the image, they are inaccessible to screen readers.
**Action:** Ensure all badge/icon links in README.md have descriptive `aria-label` attributes and meaningful `alt` text.
