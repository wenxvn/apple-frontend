# UI Registry

### Immersive Product Hero

File: `src/App.jsx`, `src/styles.css`
Last updated: 2026-07-17

| Property | Pattern |
| --- | --- |
| Background | `#000` with restrained radial ambient color |
| Border | None in the page chrome; icon strokes use semitransparent white |
| Border radius | No container radius; the navigation mark remains circular |
| Text — primary | `#f5f5f7`, heavy tight letter spacing for product statements |
| Text — secondary | `rgba(245, 245, 247, 0.78)` for navigation |
| Spacing | 62px navigation, centered hero copy, and a distinct full-viewport follow-up section |
| Hover state | Brighten navigation; underline the blue text link |
| Shadow | Restrained cool product lighting only; no card shadows |
| Accent usage | Apple blue is reserved for the in-page exploration link and cool product reflections |

**Pattern notes:** Keep the main product statement in the first viewport. Product interaction belongs in a visually separate section reached by scrolling or the blue in-page link; retain the black canvas, white typography, and restrained blue accent.

### Product Explorer Controls

File: `src/App.jsx`, `src/styles.css`
Last updated: 2026-07-17

| Property | Pattern |
| --- | --- |
| Background | Near-black product canvas with a restrained cool radial reflection; controls use `#2a2a2c` |
| Border | Swatches use a subtle translucent white ring; selected swatch uses an inset `#bfc4c8` ring |
| Border radius | `999px` group containers; `50%` for individual color and size choices |
| Text — primary | `#f5f5f7`, compact semibold product selection label |
| Text — secondary | `rgba(245, 245, 247, 0.42)` for nonessential interaction hints |
| Spacing | 22px between option groups; 6px within each pill group |
| Hover state | Show the rotation hint when the interactive 3D stage is hovered |
| Shadow | None, except selected-color inset ring |
| Accent usage | Selection state uses neutral white/gray; the screen is a dark blue-black gradient reflection with no symbolic or ring-shaped artwork |

**Pattern notes:** Product configuration controls should read as compact dark pill groups. Keep color selections icon-only with an accessible label, invert the active size button to white, and show the full laptop silhouette—screen, keyboard, trackpad, and frame—at the default camera angle.
