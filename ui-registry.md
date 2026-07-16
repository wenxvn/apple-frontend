# UI Registry

### Immersive Product Hero

File: `src/App.jsx`, `src/styles.css`
Last updated: 2026-07-16

| Property | Pattern |
| --- | --- |
| Background | `#000` with restrained radial ambient color |
| Border | None in the page chrome; icon strokes use semitransparent white |
| Border radius | `980px` for primary CTA; circular ambient lighting |
| Text — primary | `#f5f5f7`, heavy tight letter spacing for product statements |
| Text — secondary | `rgba(245, 245, 247, 0.78)` for navigation |
| Spacing | Centered hero copy, large vertical breathing room, compact navigation |
| Hover state | Brighten navigation; CTA uses slight scale and blue shadow |
| Shadow | Soft colored glow only; no card shadows |
| Accent usage | Cyan → violet → pink → orange gradient reserved for intelligence wording and 3D lighting |

**Pattern notes:** Keep product pages visually quiet: a black canvas, white type, and one controlled multicolor accent. Any future CTA should retain the pill form and Apple-blue emphasis rather than introducing a competing accent color.

### Product Explorer Controls

File: `src/App.jsx`, `src/styles.css`
Last updated: 2026-07-16

| Property | Pattern |
| --- | --- |
| Background | Pure `#000` product canvas; controls use `#2a2a2c` |
| Border | Swatches use a subtle translucent white ring; selected swatch uses an inset `#bfc4c8` ring |
| Border radius | `999px` group containers; `50%` for individual color and size choices |
| Text — primary | `#f5f5f7`, compact semibold product selection label |
| Text — secondary | `rgba(245, 245, 247, 0.42)` for nonessential interaction hints |
| Spacing | 22px between option groups; 6px within each pill group |
| Hover state | Show the rotation hint when the interactive 3D stage is hovered |
| Shadow | None, except selected-color inset ring |
| Accent usage | Selection state uses neutral white/gray, leaving the screen rendering as the visual focal point |

**Pattern notes:** Product configuration controls should read as compact dark pill groups. Keep color selections icon-only with an accessible label, and invert the active size button to white for an unmistakable selected state.
