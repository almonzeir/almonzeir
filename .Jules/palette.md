## 2024-05-23 - Accessibility for Icon-Only Navigation
**Learning:** Icon-only navigation (like floating docks or mobile toggles) creates a major barrier for screen reader users when `aria-label` is missing. Tooltips alone are insufficient as they often don't expose accessible names reliably to all assistive technologies.
**Action:** Always audit icon-only buttons for `aria-label` or `aria-labelledby`. For toggle buttons, include `aria-expanded` to communicate state.

## 2024-05-24 - Accessibility in Markdown Documentation
**Learning:** READMEs often use images as functional badges (links) without text alternatives. This makes the primary entry point of the project inaccessible to screen reader users who can't "read" the badges.
**Action:** Always add `alt` text to `img` tags in Markdown, and `aria-label` to wrapping `a` tags if the image text is purely decorative or hard to parse.
