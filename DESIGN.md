---
name: SignalDesk Social Intelligence
description: Evidence-first social intelligence command desk with an Airtable-inspired editorial operating system.
colors:
  ink: "#171b21"
  ink-secondary: "#252a32"
  body: "#3c424c"
  muted: "#5f6670"
  muted-secondary: "#747b85"
  canvas: "#ffffff"
  shell: "#f6f7f8"
  soft: "#f8f9fa"
  line: "#e5e7e8"
  line-strong: "#c9cdd1"
  coral: "#b8380f"
  forest: "#123b25"
  cream: "#f3e8d6"
  peach: "#f4a273"
  mint: "#a9d8c5"
  yellow: "#f1d459"
  mustard: "#c99d33"
  link: "#1e5fbd"
  success: "#287a43"
  warning: "#a06a00"
  danger: "#b13a24"
typography:
  display:
    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, Segoe UI, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, Segoe UI, sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  title:
    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.46
  label:
    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
  editorial: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "9px 15px"
    height: "42px"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "9px 15px"
    height: "42px"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "8px"
    height: "38px"
  signature-surface:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "26px"
---

# Design System: SignalDesk Social Intelligence

## Overview

**Creative North Star: "The Intelligence Command Desk"**

SignalDesk is a dense operating workspace that behaves like an editorial command desk rather than a wall of equal SaaS cards. The visual hierarchy answers four questions in order: what changed, why it matters, which evidence proves it, and what action follows. White work surfaces and cool paper-gray chrome keep recurring monitoring calm; selective full-surface coral, forest, cream, and mint moments give high-value signals a recognizable authored character.

The system is deliberately restrained. Typography stays regular or medium, depth is mostly expressed with borders, tonal surfaces, and asymmetric composition, and charts/tables remain close to the evidence they summarize. It rejects gradients, glassmorphism, neon glow, decorative 3D effects, and shadow-heavy card stacks because they compete with high-frequency operational data.

**Key Characteristics:**
- Evidence-first hierarchy: insight surfaces always lead toward source rows, search, or drill-down actions.
- Editorial asymmetry: dominant movement panel plus a smaller solid-color signal surface instead of uniform KPI tiles.
- Calm density: compact labels and tables sit inside generous page spacing rather than inside repeated cards.
- Signature color as structure: coral/forest/cream/mint are full surfaces or analytic moments, not decorative confetti.
- Bilingual-ready UI: Thai and English share one IBM Plex type system and predictable wrapping behavior.

## Colors

The palette is a cool neutral operating canvas with scarce, high-salience signature surfaces.

### Primary
- **Command Ink** (`colors.ink`): primary actions, active navigation, main chart line, and high-emphasis text.
- **Coral Signal** (`colors.coral`): urgent/high-priority intelligence surfaces and negative movement.

### Secondary
- **Forest Evidence** (`colors.forest`): healthy/system states, positive analytical surfaces, and high-contrast secondary moments.
- **Cream Context** (`colors.cream`): explanatory callouts, comparison context, and quiet summaries.
- **Mint Analysis** (`colors.mint`): non-urgent analytical/support surfaces.

### Tertiary
- **Peach Accent** (`colors.peach`), **Yellow** (`colors.yellow`), and **Mustard** (`colors.mustard`): limited chart/brand/state support. They are never the default CTA color.

### Neutral
- **Canvas** (`colors.canvas`): primary work area.
- **Cool Shell** (`colors.shell`): application chrome and navigation background.
- **Soft Surface** (`colors.soft`): hover and low-emphasis grouping.
- **Hairline** (`colors.line`) / **Strong Hairline** (`colors.line-strong`): separation without card elevation.
- **Body / Muted** (`colors.body`, `colors.muted`, `colors.muted-secondary`): functional text hierarchy with readable contrast.

### Named Rules

**The Signal Surface Rule.** Signature colors earn attention by occupying meaningful surfaces; do not sprinkle them across icons, borders, and labels on the same screen.

**The Near-Black Action Rule.** Primary actions use Command Ink. Color surfaces may invert to a white action, but the interface does not invent a second bright CTA color.

## Typography

**Display Font:** IBM Plex Sans Thai with IBM Plex Sans and Segoe UI fallbacks.  
**Body Font:** IBM Plex Sans Thai with IBM Plex Sans and Segoe UI fallbacks.

**Character:** Neutral, operational, and slightly editorial. Regular/medium weights keep the dashboard calm even when data density rises; scale, placement, and whitespace carry hierarchy before weight does.

### Hierarchy
- **Display** (400, 32px, 1.16): page titles and the primary command-desk heading; desktop tracking is slightly tightened.
- **Headline** (400, 28px, 1.13): signature signal statements and large analytical moments.
- **Title** (500, 18px, 1.3): chart/section headings.
- **Body** (400, 14px, 1.46): explanatory copy; long descriptions generally cap around 72ch.
- **Label** (500, 11px, 1.4): filters, metadata, table headers, badges, and secondary operational text.

### Named Rules

**The Weight Restraint Rule.** Use 400 for display/body and 500 for emphasis. Reserve 600 for compact labels or exceptional navigation utility; do not use 700 as a hierarchy shortcut.

## Layout

The desktop shell uses a fixed 68px utility bar and 272px left navigation rail, with a white main canvas and a content ceiling of roughly 1540px. Main content starts with 34–42px outer breathing room and follows a 4px-derived rhythm through 8, 12, 16, 24, 32, and 48px steps.

Dashboard composition follows a 12-column command field: the movement narrative occupies roughly eight columns and the ranked signal surface four. KPI information is a single integrated ribbon rather than five independent cards. Evidence, sentiment, Share of Voice, and tables then continue the same reading order without resetting into a uniform card grid.

At 1240px the sidebar narrows and multi-panel layouts reduce density. At 920px the fixed sidebar becomes a full-height off-canvas sheet, the main canvas loses its left offset, and major command panels collapse to one column. At 640px filters stack, controls widen for touch, tables retain intentional horizontal scrolling, modals fit within the viewport, and content remains legible rather than being miniaturized.

**The Reduce-Columns Rule.** Responsive behavior removes columns and navigation density; it never shrinks text or cards merely to preserve a desktop grid.

## Elevation & Depth

SignalDesk is flat by default. Hierarchy comes from white space, 1px hairlines, solid color blocks, and contrasting shell/canvas tones. The only durable floating shadow is reserved for layers that truly detach from the workspace: modal dialogs, command palette, and toasts.

### Shadow Vocabulary
- **Floating Layer** (`0 18px 48px rgba(23,27,33,.14), 0 2px 8px rgba(23,27,33,.08)`): dialogs, command palette, and transient floating feedback only.

### Named Rules

**The Flat-By-Default Rule.** Resting content surfaces do not get decorative drop shadows. If a surface is part of the page flow, separate it with space, tone, or a hairline.

## Shapes

Controls use a disciplined radius hierarchy: 6px for small technical controls, 8–10px for buttons/inputs/navigation states, 12px for major content/signature surfaces, and 16px only for exceptional larger containers. Pills are limited to status/sentiment/tag semantics. Borders are thin and cool neutral; thick outlines are not part of the normal form language.

## Components

### Buttons
- **Shape:** gently curved rectangular control (10px radius) with a practical 42px standard height.
- **Primary:** Command Ink background, Canvas text, compact 9px × 15px internal spacing.
- **Secondary:** Canvas background with a hairline and Command Ink text.
- **Hover / Focus:** subtle tonal or ink shift, no decorative glow; `:focus-visible` gets a clear blue ring. Active state compresses very slightly (`scale(.985)`).
- **Quiet / Link:** used for low-emphasis navigation between analytical contexts; they never compete with the primary action.

### Chips
- **Style:** status and analytical tags use semantic tonal backgrounds with compact padding and full-pill geometry.
- **State:** date presets are a segmented neutral control; the selected state becomes white with a tiny structural shadow.

### Cards / Containers
- **Corner Style:** major surfaces use 12px corners.
- **Background:** Canvas for working surfaces; Coral/Forest/Cream/Mint for authored moments.
- **Shadow Strategy:** none for in-flow content; see Floating Layer for overlays.
- **Border:** working panels use one hairline; evidence sections may use a dark top rule instead of a boxed card.
- **Internal Padding:** 18–28px depending on hierarchy and breakpoint.

### Inputs / Fields
- **Style:** white fill, 1px neutral border, 8px radius, compact operational height (38–42px).
- **Focus:** border moves to focus blue plus the global visible focus ring.
- **Disabled:** lowered opacity with native non-interactive cursor behavior.

### Navigation
- Group labels are small uppercase operational labels; links use inline SVG line icons, muted text at rest, a soft neutral hover, and a solid Command Ink active state with white text. Mobile navigation becomes an off-canvas sheet with a dimmed backdrop instead of compressing the desktop rail.

### Evidence Signal Surface
- The signature dashboard component is a solid Coral or Forest analytical block paired asymmetrically with a larger neutral chart. It contains a narrative headline, one large numeric movement, supporting tags, and a direct path to evidence. Only one such high-salience surface should dominate a working viewport.

### Command Palette
- `Ctrl/Cmd + K` opens a floating search layer that searches modules, evidence, and keywords. It uses the same neutral input language as the app, keyboard-visible focus, and the Floating Layer shadow rather than a separate visual identity.

## Do's and Don'ts

### Do:
- **Do** keep insight, evidence, and next action visually adjacent.
- **Do** use white space and hairlines before inventing another card container.
- **Do** reserve full-surface Coral/Forest/Cream/Mint for meaningful analytical moments.
- **Do** keep functional text at 11px or larger and body copy at 14px with readable contrast.
- **Do** collapse layouts by reducing columns at 1240/920/640px breakpoints and keep tables horizontally scrollable when necessary.
- **Do** use inline SVG icons with one consistent stroke language.

### Don't:
- **Don't** introduce gradients, glassmorphism, neon glow, 3D decoration, or shadow-heavy card walls.
- **Don't** use signature colors simultaneously as CTA, icon, border, and background decoration; their rarity is the point.
- **Don't** promote a surface-specific dashboard composition into every module; secondary modules preserve the same visual system but use their own operational states/actions.
- **Don't** use emoji or text glyphs as interface icons where the SVG icon system already exists.
- **Don't** use bold display weights to create hierarchy that spacing, position, and scale should provide.
