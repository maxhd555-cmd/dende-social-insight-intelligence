# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/JavaScript for a portable front-end prototype with no build step; PWA shell included. This is inferred from the user's request to clone/rebuild the interface without a specified framework or deployment target.

## Users

Inferred from the requested source product and observed authenticated workflows: social intelligence analysts, brand/marketing teams, customer-experience teams, and operators who monitor posts/comments, keywords, sentiment, competitors, reports, alerts, and automation from one workspace.

## Product Purpose

Rebuild the useful operating workflows of the referenced Social Intelligence dashboard as an original front-end experience: quickly understand activity, investigate evidence, filter/search monitored content, compare brands, produce reports, and create automation rules.

## Positioning

A dense social-listening operations console is reorganized into a calmer editorial workspace: high-frequency data stays scannable while analysis and action are separated into clear surfaces instead of competing for attention.

## Operating Context

Users work mainly on desktop with recurring monitoring and investigation, but tablet/mobile must remain usable for status checks, filtering, reading alerts, and light actions. Primary recurring flows include Dashboard → evidence/detail, Deep Search → filtered results, Posts/Keywords → monitoring and export, Competitive Intelligence → comparison, Reports → generate/schedule, and Automation → event/condition/action rules.

## Capabilities and Constraints

- Preserve the observed information architecture: Workspace, Data Collection, Monitoring, Intelligence, AI & Detection, Team & Automation, System.
- Core prototype screens: Dashboard, Deep Search, Post Monitoring, Keyword Monitoring, Competitive Intelligence, Reports, Automations, plus useful representative screens for the remaining navigation.
- Filters include project, brand, platform, campaign/source/sentiment/topic where relevant, and date-range presets.
- Prototype data is synthetic/local. Do not use the source site's private database, authentication, credentials, or proprietary assets.
- Navigation and key controls must behave locally; backend integrations are intentionally out of scope for this front-end prototype.
- PWA manifest/service worker and responsive desktop/tablet/mobile behavior are required.

## Brand Commitments

The user explicitly supplied DESIGN-airtable as the binding visual direction. Preserve its editorial white-canvas system, dark-ink type, restrained weights, near-black primary actions, hairline secondary controls, 4px spacing rhythm, 12/10/6px radius hierarchy, minimal shadows, and selective full-surface signature colors (coral, forest, cream, peach, mint, yellow, mustard, dark navy). Do not copy Airtable logos, wording, or proprietary imagery.

## Evidence on Hand

- User-supplied DESIGN-airtable.md is the visual authority.
- Authenticated inspection of the referenced app supplied real information architecture, labels, filters, and workflow structure.
- Source product data is not an asset for reuse; all demonstration values in this prototype are synthetic.

## Product Principles

1. Evidence before decoration: every insight should lead to the posts/comments or filters that explain it.
2. Scan first, drill second: overview surfaces prioritize state and comparison; details appear on demand.
3. One primary action per working context, with secondary actions visually quieter.
4. Dense data should feel calm through spacing, typography, and clear grouping rather than heavy containers.
5. Responsive behavior reduces columns and navigation density rather than shrinking content into unreadability.

## Accessibility & Inclusion

Use semantic controls, keyboard-visible focus, readable contrast, minimum 44px touch targets where practical, and Thai/English-friendly typography and wrapping.
