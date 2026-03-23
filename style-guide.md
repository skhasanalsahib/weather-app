# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors
Let me ask you a few things first to give you the best guidance:

1. **Scope of use:** Are these colors used throughout the entire project, or mostly in specific components? This affects whether you want global variables or scoped ones.

2. **Architecture approach:** Are you thinking of a flat structure (all colors at root level), or something more hierarchical like `--color-neutral-900`, `--color-bg-primary`, etc.? The latter adds a semantic layer that's often better for maintainability.

3. **Tool consideration:** Will you be processing this through a build tool (Sass), or using native CSS custom properties? That changes naming conventions and organization slightly.

**For the markdown itself though:**

The neutral colors would organize well under a `### Neutral` heading (which you already have). The question is whether you want to include the CSS variable names *in the markdown* or just use this as reference while you define variables separately in your CSS file.

**Common approaches:**

- **Document the variables in markdown** (alongside the HSL values) so anyone reviewing your code sees both the design tokens and their CSS names
- **Keep markdown as design reference** and define variables cleanly in CSS without duplicating names here

Which matters more for your workflow—having the CSS variable names documented here, or keeping the markdown as pure design tokens with variable definitions only in your stylesheet?


### Orange

- **Orange 500**: hsl(28, 100%, 52%)

### Blue

- **Blue 500**: hsl(233, 67%, 56%)
- **Blue 700**: hsl(248, 70%, 36%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Weights: 300, 500, 600, 600i, 700

- Family: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)
- Weights: 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma. The design file for this challenge also includes a design system and tablet layout to help you build a more accurate solution faster.