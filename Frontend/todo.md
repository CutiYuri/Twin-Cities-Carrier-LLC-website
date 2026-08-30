# Twin Cities Carrier LLC — Site To-Do

## Get from the client
- [ ] Real service area (which states/cities, how often)
- [ ] Which services he actually offers (full truckload / LTL / dedicated routes / expedited — confirm all or drop some)
- [ ] Business phone number
- [ ] Physical address (or just city/state if he doesn't want a full address listed)
- [ ] DOT / MC number (trucking companies often display this for credibility)
- [ ] Years in business / any real stats worth featuring
- [ ] Logo file, if he has one (otherwise the "TC" text badge stays as-is)
- [ ] Real photos (trucks, drivers, warehouse) — or confirm using stock photos is fine
- [ ] Domain name — does he already own one, or do you need to help him buy one?

## Bugs to fix (found on review)
- [ ] `contact.js` always returns success, even if Resend's API rejects the request — the fetch response isn't checked, only network errors are caught. Right now a bad API key or unverified domain would fail silently.
- [ ] `contact.js` ignores `company` and `phone` — only `name`, `email`, `message` are read from the request body, so those fields get dropped.
- [ ] No server-side honeypot check — the honeypot logic only lives in `script.js`, so anyone (or any bot) can `POST` directly to `/api/contact` and skip it entirely.
- [ ] No `reply_to` set on the outgoing email — replying to the notification currently won't reach the customer who submitted the form.
- [ ] `from` and `to` in `contact.js` are still placeholder addresses (`yoursite@resend.dev`, `client@business.com`)
- [ ] Form has `novalidate` but no JS validation to replace it (e.g. `form.checkValidity()`) — right now this disables the browser's required-field checking with nothing standing in for it, so an empty form can be submitted

## Technical / pre-launch
- [ ] Build the `/api/contact.js` serverless function (Resend integration)
- [ ] Verify sender domain in Resend — using the default `resend.dev` address often lands emails in spam
- [ ] Add `RESEND_API_KEY` in Vercel's environment variables (never hardcode it)
- [ ] Test the contact form on the actual deployed site, not just locally
- [ ] Add favicon
- [ ] Add page title, meta description, and Open Graph tags (so links look right when shared)
- [ ] Add a simple 404 page
- [ ] Test on an actual phone (not just browser resizing)
- [ ] Double check color contrast / keyboard focus states once real content is in

## Business / legal
- [ ] Short privacy note near the form (e.g. "we don't share your info") — not required, but good practice
- [ ] Written scope agreement with the client — deliverables, revision rounds, timeline
- [ ] Payment terms (deposit up front? full payment on delivery?)
- [ ] Confirm who's responsible for domain/hosting costs going forward

## Nice-to-haves (later)
- [ ] Split into multiple pages (Home / Services / About / Contact) instead of one long page, if the client wants that
- [ ] Basic analytics (e.g. Vercel Analytics or Plausible)
- [ ] Testimonials/reviews section once he has some
