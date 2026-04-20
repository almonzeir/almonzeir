## 2024-05-23 - Accessibility for Icon-Only Navigation
**Learning:** Icon-only navigation (like floating docks or mobile toggles) creates a major barrier for screen reader users when `aria-label` is missing. Tooltips alone are insufficient as they often don't expose accessible names reliably to all assistive technologies.
**Action:** Always audit icon-only buttons for `aria-label` or `aria-labelledby`. For toggle buttons, include `aria-expanded` to communicate state.

## 2025-02-24 - Brand Consistency in Documentation
**Learning:** Extending the brand's primary color (Neon Green `#00f260`) to external documentation assets (like GitHub profile snakes and graphs) creates a cohesive identity across platforms.
**Action:** When generating external assets, always customize palettes to match the project's primary brand color.
