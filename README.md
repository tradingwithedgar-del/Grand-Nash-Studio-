# Grand Nash Studio — website

This folder is the complete site. Upload ALL of these files to your GitHub repo root:

  index.html        the main page
  privacy.html      privacy policy (linked from footer + form)
  style.css         all styling
  script.js         section reveal on scroll
  hero-video.js     plays the hero film / falls back gracefully
  form.js           the inquiry form (emails you submissions)
  favicon.svg       the Pixel Ascent favicon
  README.md         this file (optional to upload)

Optional media you can add later (drop next to index.html):
  hero.mp4          your Higgsfield staircase film, self-hosted (recommended)
  hero-poster.jpg   a still frame (shown on reduced-motion + as the share image)
  If hero.mp4 is absent, the hero streams your Higgsfield video URL automatically,
  so the page works out of the box.

## Deploy to GitHub Pages
1. Delete the old files in your repo.
2. Upload every file from this folder to the repo root.
3. Settings -> Pages -> Source: your branch (usually main), folder /root -> Save.
4. Your site is live at https://<username>.github.io/<repo>/ within a minute or two.
5. Custom domain (optional): Settings -> Pages -> Custom domain, then add a CNAME
   record at your registrar pointing to <username>.github.io.

## Do these three things before / right after launch
1. PRIVACY DATE — open privacy.html and set "Effective date: [ADD DATE]".
2. ACTIVATE THE FORM — after the site is live, submit the form once yourself.
   FormSubmit emails hello@grandnashstudio.com a one-time confirmation link;
   click it, and every submission after that lands in your inbox automatically.
3. TEST — send yourself a real inquiry and confirm it arrives.

## Good to know
- Change where inquiries go: ENDPOINT_EMAIL at the top of form.js.
- Logo/name appear only in the top-left header and the footer (never as background).
- Not legal advice: privacy.html is a practical template. If you'll call or text
  people, a quick Texas-attorney review re: TCPA is worth it.
