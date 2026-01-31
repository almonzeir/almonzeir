## 2024-05-23 - Accessibility for Icon-Only Navigation
**Learning:** Icon-only navigation (like floating docks or mobile toggles) creates a major barrier for screen reader users when `aria-label` is missing. Tooltips alone are insufficient as they often don't expose accessible names reliably to all assistive technologies.
**Action:** Always audit icon-only buttons for `aria-label` or `aria-labelledby`. For toggle buttons, include `aria-expanded` to communicate state.

## 2024-05-23 - Developer Profile Visual Impact
**Learning:** Users perceive "mind-blowing" value in developer profiles through high-contrast, animated visualizations of activity (like 3D contribution graphs). Standard flat graphs are often overlooked.
**Action:** When enhancing developer READMEs, prioritize assets that visualize data in 3D or with motion (snakes), and ensure they match the personal brand color (e.g., Neon Green) for cohesiveness. Always ensure these images have descriptive `alt` text.
