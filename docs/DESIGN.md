# Scrobble.dev Design Contract & UI Standards

## Executive Design Vision

Scrobble.dev is authored as an authoritative, calm, high-contrast editorial field guide. It combines the rigorous typographic hierarchy of a field handbook with the modern component precision of **Tabler Core**.

---

## 1. Tabler-First Component Hierarchy

Every visual component on Scrobble.dev follows a strict hierarchy:

1. **Tabler Core Element**: Direct application of upstream Tabler classes (`.card`, `.btn`, `.badge`, `.table`, `.form-control`, `.form-select`, `.form-check-input`).
2. **Tabler Pattern Composition**: Multi-column search results (`search-results.html`), Datatables (`datatables.html`), and sticky filter sidebars.
3. **Fasti Token Skinning**: Semantic palette mapping using CSS custom properties (`brand/tokens/tokens.json`).
4. **Custom Component (Strict Exception)**: Permitted only when Tabler has zero equivalent, requiring explicit documented rationale.

---

## 2. Typographic & Color Hierarchy

### Typography
- **Headings & Display**: `Georgia, "Times New Roman", serif` — Authoritative, calm, human editorial voice.
- **Body Copy & UI Elements**: `Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` — Crisp, scannable, legibility-optimized.
- **Labels, Badges & Code**: `"Courier New", Courier, monospace` — Precise, technical, verifiable metadata.

### Color Palette & Tokens
- **Canvas / Paper**: `#f4f0e7` (Warm newsprint background).
- **Ink Primary**: `#111827` (Deep neutral text, $> 11:1$ contrast).
- **Ink Soft**: `#4b5563` (Muted secondary copy, $\ge 5.8:1$ contrast).
- **Tabler Accent / Primary**: `#206bc4` (Tabler Azure, $\ge 4.8:1$ contrast).
- **Surface Cards**: `#ffffff` with `#e6e7e9` borders and subtle `0 1px 3px rgba(0,0,0,0.04)` box shadow.
- **Badges**:
  - `Self-hosted / Free`: Soft green tint (`#e6f7eb` bg, `#2fb344` text, `#b7ecc3` border).
  - `Cloud / Azure`: Soft blue tint (`#eaf2ff` bg, `#206bc4` text, `#c2dbfe` border).
  - `Local client / Freemium`: Soft yellow tint (`#fdf5e5` bg, `#d63939` text, `#fce3b8` border).

---

## 3. Kathy Sierra Philosophy (*Badass: Making Users Awesome*)

1. **Focus on the User's Real Goal**: Users don't want to learn "tracking ontology"; they want to own their media history and make their tools work seamlessly together.
2. **Reduce Cognitive Friction**:
   - Live demo access (`▶ Try Demo ↗`) on catalogue rows.
   - 1-click credential copying (`🔑 username: demo / password: demo [COPY]`) with instant clipboard feedback.
   - Synchronized URL query params (`?media=Anime&hosting=Self-hosted`) allowing instant bookmarking and sharing.
3. **Eliminate Half-Baked Features**: Provide complete, working filters, zero dead ends, and immediate clear empty states with 1-click resets.

---

## 4. Interaction & Accessibility Standards

### Core Web Vitals & Performance
- **Layout Shift**: Cumulative Layout Shift (`CLS = 0`). Dynamic filters update table rows in place without viewport jumps.
- **Hitboxes**: Minimum $44\text{px} \times 44\text{px}$ interactive hitboxes for all buttons, checkboxes, links, and switches.
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce` with instantaneous transitions and zero decorative parallax.

### Compliance Rubric
- **WCAG 2.2 Level AA**: Full contrast conformance, visible high-contrast 3px focus rings with 2px offset, semantic landmark labeling (`<main id="main">`, `<nav aria-label="...">`, `<header>`, `<footer>`).
- **EN 301 549**: Conformance across Clause 9 (Web), Clause 10 (Documents), and Clause 12 (Documentation).
- **Gestalt Principles**: Strong visual grouping via cards, border hierarchy, common regions, and distinct figure/ground separation.
- **10 Nielsen Usability Heuristics**:
  1. *Visibility of system status*: Live counter (`Showing 4 of 35 projects`), instant copy feedback.
  2. *Match between system and real world*: Plain-language categories, human-centric copy.
  3. *User control and freedom*: 1-click "Reset filters" and dismissible active tag pills.
  4. *Consistency and standards*: Standard Tabler datatables and filter conventions.
  5. *Error prevention*: Robust multi-select logic preventing invalid empty queries.
  6. *Recognition rather than recall*: Visible facet count badges (`Anime 9`, `Self-hosted 15`).
  7. *Flexibility and efficiency of use*: Simultaneous text search + facet filtering + keyboard navigation.
  8. *Aesthetic and minimalist design*: Zero unnecessary AI gradients, ornamental glows, or SaaS fluff.
  9. *Help users recognize, diagnose, and recover from errors*: Clear empty state (`No projects match your current filters`) with direct reset action.
  10. *Help and documentation*: Contextual links to OKF specifications, issue trackers, and field guides.
