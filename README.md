# Grand Nash Studio — Portfolio Site

A static, no-build-step site (HTML/CSS/JS). Deploys directly to GitHub Pages with no configuration.

## Files
- `index.html` — the page
- `style.css` — styles
- `script.js` — scroll fade-in
- `favicon.svg` — the Pixel Ascent favicon (brass base pixel)

## Brand system baked in
- Logo: the Pixel Ascent mark sits beside the wordmark in the nav and footer (solid base pixel in brass).
- Slogan: "Big starts with one pixel." appears under the hero headline and in the footer.
- Salient idea: "Proof before payment" — the hero, the 3-step process, and the CTA all lead with the free working demo before any money changes hands.
- Positioning: aimed at family-owned trade shops (welders, hydraulics, detailers, lowrider shops).
- The "#truth" section carries the counterintuitive angle: a $15k and a $500 site fail for the same reason — genericness, not price.

## Before you deploy
Contact info in the `#contact` section is already set to your real details. Double-check:
- `hello@grandnashstudio.com`
- `@grandnashstudio`
- `(832) 910-8301`

## Deploying to GitHub Pages
1. Create a new GitHub repo (e.g. `grand-nash-studio`)
2. Push all four files (`index.html`, `style.css`, `script.js`, `favicon.svg`) to the repo root (or a `/docs` folder)
3. In the repo: **Settings → Pages**
4. Under "Source," pick the branch (usually `main`) and the folder (`/root` or `/docs`)
5. Save — GitHub gives you a live URL within a minute or two

## Using a custom domain (optional)
1. In **Settings → Pages**, enter your domain under "Custom domain"
2. At your registrar, add a `CNAME` record pointing to `yourusername.github.io`
3. GitHub Pages handles HTTPS automatically once the domain verifies

## Notes
- Zero backend, zero build step — just static files. $0/month to host.
- Swap the placeholder "Your shop" case card for a real trade-shop build once you land one.
