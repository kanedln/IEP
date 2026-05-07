# External integrations and URL ownership

This page documents the production external URLs used by `index.html` so future edits do not reintroduce temporary hosts or unapproved tracking/form endpoints.

## Approved production integrations

| Integration | URL / ID | Purpose | Ownership / compliance notes |
| --- | --- | --- | --- |
| Google Analytics | `G-GT8C5V9LDG` via `https://www.googletagmanager.com/gtag/js` | Site analytics for `immersionedpartners.com`. | Intentional production measurement. Keep this measurement ID covered by the site's privacy notice, cookie/consent workflow where required, and any internal data-retention review. |
| Formspree | `https://formspree.io/f/mykwwyya` | Newsletter and contact form submissions. | Intended production form provider for IEP. The form id `mykwwyya` is the company-owned endpoint and should not be replaced without confirming account ownership. |
| Google Fonts | `https://fonts.googleapis.com` and `https://fonts.gstatic.com` | Hosted web fonts. | Approved third-party asset host for typography. |
| Lucide | `https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js` | Icon rendering. | Pinned to a specific package version; update deliberately after visual regression review. |
| CARLA / CAL / Calendly / Social links | Footer resource, scheduling, and social URLs. | User navigation to external services. | External links that open a new tab must include `rel="noopener noreferrer"`. |

## Local image asset policy

`index.html` should use committed assets under `assets/images/` for brand, hero, leadership, and service imagery. Do not use placeholder image CDNs such as Postimg or temporary stock-photo URLs in production markup.
