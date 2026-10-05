# Divisio Website — Task Tracker

Each task includes: what needs to be done, exactly how to do it, and why it matters.

---

## 1. App Screenshot

**What:** Replace the grey placeholder box on the home page with a real screenshot of the Divisio app.

**Why:** The placeholder exists only as a structural marker. A real screenshot is the single most persuasive element on a product landing page — it answers "what does this actually look like?" before the visitor has to imagine it. Visitors who can see the UI before signing up convert at a significantly higher rate.

**How:**
1. Take a screenshot of the app at a wide viewport (1280×800 minimum). Crop to show the most compelling view — ideally a populated group with a settle-up card visible.
2. Save it as `public/screenshot.png` (or `.webp` for better compression).
3. Open `src/app/page.tsx` and find the section labelled `{/* App screenshot */}`.
4. Replace the entire inner content of that `div` with:
   ```tsx
   import Image from "next/image";

   <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
     <Image
       src="/screenshot.png"
       alt="Divisio app — group expense view with settle-up summary"
       fill
       style={{ objectFit: "cover", borderRadius: 16 }}
       priority
     />
   </div>
   ```
5. Add `priority` because this image is above the fold and should not lazy-load.
6. Optionally add a second screenshot for the mobile view and use `srcSet` or a separate `<picture>` element.

---

## 2. Demo Video

**What:** Replace the play-button placeholder on the home page with a real embedded video showing the app in use.

**Why:** Video is the fastest way to communicate a flow-based product. Expense splitting is a multi-step process — creating a group, logging expenses, hitting settle up. Text describes it; video proves it. A 60-second walkthrough removes the biggest objection ("I don't understand how it works") before the visitor reaches the CTA.

**How — YouTube embed:**
1. Upload your demo video to YouTube (unlisted is fine).
2. From the video page, click Share → Embed → copy the `src` URL (format: `https://www.youtube.com/embed/VIDEO_ID`).
3. In `src/app/page.tsx`, find the section labelled `{/* Demo video */}`.
4. Replace the placeholder `div` contents with:
   ```tsx
   <iframe
     src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
     title="Divisio demo"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
     style={{ width: "100%", height: "100%", border: "none" }}
   />
   ```
5. The outer container already has `aspectRatio: "16/9"` and rounded borders — no other changes needed.

**How — Loom embed (alternative):**
1. Record in Loom, click Share → Embed.
2. Use the Loom embed URL (`https://www.loom.com/embed/VIDEO_ID`) in the same `<iframe>` above.

---

## 3. Contact Form Backend

**What:** Wire the contact form so that submitted messages actually reach you. Currently both forms (on `/contact` and on the home page contact banner) call `setSent(true)` immediately — nothing is sent anywhere.

**Why:** If a user reports a bug or asks a question through the form, it disappears silently. This is a trust and support problem that gets worse after launch.

**How — Option A: Resend (recommended, simplest):**
1. Sign up at resend.com — free tier allows 3,000 emails/month.
2. Install the package:
   ```bash
   npm install resend
   ```
3. Create `src/app/api/contact/route.ts`:
   ```ts
   import { Resend } from "resend";
   import { NextResponse } from "next/server";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const { name, email, message } = await req.json();
     await resend.emails.send({
       from: "Divisio Contact <onboarding@resend.dev>",
       to: "neeraj@divisio.in",
       subject: `Message from ${name}`,
       text: `From: ${name} <${email}>\n\n${message}`,
     });
     return NextResponse.json({ ok: true });
   }
   ```
4. Add `RESEND_API_KEY=re_xxxx` to `.env.local` (get it from your Resend dashboard).
5. Update the form `onSubmit` handler in `src/app/contact/page.tsx` and the `ContactBanner` component in `src/app/page.tsx`:
   ```ts
   async function handleSubmit(e: React.FormEvent) {
     e.preventDefault();
     await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(form),
     });
     setSent(true);
   }
   ```
6. Add `RESEND_API_KEY` as an environment variable in your Vercel project settings (Settings → Environment Variables).

**How — Option B: Formspree (no backend code at all):**
1. Sign up at formspree.io and create a form — you get a form endpoint URL like `https://formspree.io/f/xabcdefg`.
2. Change the form's `action` to that URL and `method` to `POST`. Formspree handles delivery and gives you a dashboard.

---

## 4. Email Address

**What:** Confirm and update the email address used across the site. Currently set to `neeraj@divisio.in` in three places: the footer, the `/contact` page, and the About page.

**Why:** If this email doesn't exist or goes to the wrong inbox, every contact attempt from the site is lost.

**How:**
1. Decide on the email — either a personal address (`neeraj@...`) or a product one (`hello@divisio.in`, `support@divisio.in`).
2. Search and replace across the codebase:
   ```bash
   grep -r "neeraj@divisio.in" src/
   ```
3. Update each occurrence with the correct address.
4. If using a custom domain email, set it up via your domain registrar or use Resend/Postmark to receive on that address.

---

## 5. LinkedIn URL

**What:** Confirm the LinkedIn profile URL. Currently set to `linkedin.com/in/neerajraisinghani` in the footer, contact page, and About page.

**Why:** A broken or wrong LinkedIn link looks unprofessional and loses a trust signal — people check the builder's profile to evaluate credibility.

**How:**
1. Go to your LinkedIn profile → Edit public profile URL → confirm the exact slug.
2. Search for the current value:
   ```bash
   grep -r "neerajraisinghani" src/
   ```
3. Update all occurrences if the slug differs.

---

## 6. App and Demo URLs

**What:** Replace the two placeholder URLs used in every CTA button across the site:
- `https://app.divisio.in` → the real app URL
- `https://app.divisio.in/demo` → the real demo account URL

**Why:** Every CTA on the site points to these URLs. If they 404 or redirect incorrectly, the entire conversion funnel breaks.

**How:**
1. Once your app is deployed, find all occurrences:
   ```bash
   grep -r "app.divisio.in" src/
   ```
2. Replace with the real URLs. Consider extracting them to a config file to avoid updating 10+ places manually in future:
   Create `src/lib/config.ts`:
   ```ts
   export const APP_URL = "https://app.divisio.in";
   export const DEMO_URL = "https://app.divisio.in/demo";
   ```
   Then import and use `APP_URL` and `DEMO_URL` in every component instead of hardcoding the strings.

---

## 7. Brand Colors

**What:** Replace the placeholder indigo palette with Divisio's real brand colors once they are decided.

**Why:** The current palette (`#4F6EF7` indigo, `#F0A050` amber) is a reasonable neutral placeholder but it isn't a deliberate brand decision. A distinctive, considered color palette is a core part of product identity and makes the site memorable.

**How:**
1. All color tokens live in one place: `src/app/globals.css`, inside the `:root` block.
2. The tokens to update and what they control:

   | Token | Current value | Controls |
   |---|---|---|
   | `--brand` | `#4F6EF7` | CTA buttons, active nav links, accent text |
   | `--brand-dim` | `rgba(79,110,247,0.12)` | Chip backgrounds, feature section tints |
   | `--brand-border` | `rgba(79,110,247,0.25)` | Chip outlines |
   | `--settle` | `#F0A050` | Settle-up card accent, changelog badge |
   | `--settle-dim` | `rgba(240,160,80,0.12)` | Settle card background tint |
   | `--bg` | `#0C0C14` | Page background |
   | `--surface` | `#13131E` | Card backgrounds |
   | `--surface-2` | `#1A1A28` | Nested elements, input backgrounds |
   | `--text` | `#E6E6F0` | Primary text |
   | `--text-2` | `#9898B8` | Secondary / body text |
   | `--text-3` | `#55556A` | Captions, labels, placeholders |

3. Update `--brand` to your primary color. Derive `--brand-dim` by adding `0.12` opacity and `--brand-border` by adding `0.25` opacity to the same hue.
4. Test that the brand color has sufficient contrast on `--surface` (aim for WCAG AA: 4.5:1 for body text, 3:1 for large text). Use https://webaim.org/resources/contrastchecker/ to verify.

---

## 8. Logo / Wordmark

**What:** The navbar and footer currently render `divisio` as plain text. Replace with a proper SVG logo or styled wordmark when ready.

**Why:** A text-only wordmark works for launch but an actual logo — even a simple typographic lockup — signals a more finished product. It also allows for a favicon and OG image that carry a consistent mark.

**How:**
1. Export the logo as an SVG.
2. Save it to `public/logo.svg`.
3. In `src/components/Navbar.tsx`, replace the `<Link>` wordmark text with:
   ```tsx
   import Image from "next/image";
   <Link href="/">
     <Image src="/logo.svg" alt="Divisio" width={100} height={28} priority />
   </Link>
   ```
4. Do the same in `src/components/Footer.tsx`.
5. Consider a monochrome (white) version of the logo for the dark background, saved as `public/logo-white.svg`.

---

## 9. Favicon

**What:** Replace the default Next.js favicon at `src/app/favicon.ico` with the Divisio favicon.

**Why:** The favicon appears in browser tabs, bookmarks, and when the site is saved to a phone home screen. A default Next.js icon on a live product looks unfinished.

**How:**
1. Create a square icon (1024×1024 PNG) — typically a simplified mark or monogram from the logo.
2. Generate a favicon package at https://realfavicongenerator.net — it outputs `favicon.ico`, `apple-touch-icon.png`, and a web manifest.
3. Replace `src/app/favicon.ico` with the generated file.
4. Add the `apple-touch-icon.png` to `public/`.
5. In `src/app/layout.tsx`, add to the `metadata` export:
   ```ts
   icons: {
     icon: "/favicon.ico",
     apple: "/apple-touch-icon.png",
   },
   ```

---

## 10. Per-page Metadata (SEO)

**What:** Add page-specific `title` and `description` metadata to every page. Currently all pages inherit the generic root metadata from `layout.tsx`.

**Why:** Search engines use the page title and description in results. A `/features/debt-simplification` page that shows "Divisio — Split expenses, not friendships." in search results instead of "Debt Simplification — Divisio" misses the keyword and confuses visitors about what the page covers.

**How:**
Add the following export to each page file:

`src/app/features/debt-simplification/page.tsx`:
```ts
export const metadata = {
  title: "Debt Simplification — Divisio",
  description: "How Divisio uses a graph-reduction algorithm to settle group expenses in the minimum number of payments.",
};
```

`src/app/features/flexible-splits/page.tsx`:
```ts
export const metadata = {
  title: "Flexible Splits — Divisio",
  description: "Split equally, by exact amounts, percentages, or shares. Every group scenario handled.",
};
```

`src/app/features/real-time-balances/page.tsx`:
```ts
export const metadata = {
  title: "Real-time Balances — Divisio",
  description: "Group balances update the moment an expense is added. Powered by Supabase Realtime.",
};
```

`src/app/features/group-management/page.tsx`:
```ts
export const metadata = {
  title: "Group Management — Divisio",
  description: "Create unlimited groups for trips, flats, and squads. Invite via link, track full history.",
};
```

`src/app/features/settle-summary/page.tsx`:
```ts
export const metadata = {
  title: "Settle Summary — Divisio",
  description: "One screen showing exactly who pays whom — shareable directly to WhatsApp.",
};
```

`src/app/use-cases/page.tsx`:
```ts
export const metadata = {
  title: "Use Cases — Divisio",
  description: "Friend trips, flatmates, group outings. See how Divisio handles every shared expense scenario.",
};
```

`src/app/about/page.tsx`:
```ts
export const metadata = {
  title: "About — Divisio",
  description: "Why Divisio was built, and who built it.",
};
```

`src/app/contact/page.tsx`:
```ts
export const metadata = {
  title: "Contact — Divisio",
  description: "Get in touch with questions, bug reports, or feature requests.",
};
```

---

## 11. OG Image (Social Sharing Preview)

**What:** Add an Open Graph image that appears when the site URL is shared on WhatsApp, Twitter, LinkedIn, or iMessage.

**Why:** Without an OG image, link previews show a blank card or auto-extract an arbitrary image. Given that the target audience shares links over WhatsApp, a well-designed preview card significantly increases click-through from shares.

**How:**
1. Design a 1200×630px image. It should include: the Divisio logo/wordmark, the tagline "Split expenses, not friendships.", and a clean version of the app UI or brand color background. Export as PNG.
2. Save it to `public/og-image.png`.
3. In `src/app/layout.tsx`, update the `openGraph` metadata:
   ```ts
   openGraph: {
     title: "Divisio — Split expenses, not friendships.",
     description: "Track shared expenses and settle up with the fewest transactions possible.",
     type: "website",
     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
   },
   ```
4. Also add Twitter card metadata:
   ```ts
   twitter: {
     card: "summary_large_image",
     title: "Divisio — Split expenses, not friendships.",
     description: "Track shared expenses and settle up with the fewest transactions possible.",
     images: ["/og-image.png"],
   },
   ```
5. Test the preview at https://opengraph.xyz before launch.

---

## 12. Privacy Policy Page

**What:** Create a `/privacy` page with Divisio's privacy policy. Currently linked in the footer but shows a 404.

**Why:** A privacy policy is legally required if you collect any personal data — which a contact form and user accounts both do. Without one, you are exposed to complaints under India's DPDP Act (Digital Personal Data Protection Act, 2023) and any other jurisdiction your users are in. Hosting providers and payment processors often also require one.

**How:**
1. Create `src/app/privacy/page.tsx`.
2. The policy must at minimum cover:
   - What data you collect (names, emails from the contact form; account data from app sign-ups)
   - How you use it (to respond to messages, to operate the service)
   - Whether you share it with third parties (Supabase, Vercel, Resend — name them)
   - How users can request deletion
   - Contact information for privacy queries
3. Use a privacy policy generator (e.g. https://www.iubenda.com or https://privacypolicygenerator.info) as a starting point, then customise for Divisio's specific stack.
4. Once the page exists, the footer link will resolve automatically (the `href="/privacy"` is already in `Footer.tsx`).

---

## 13. Terms of Use Page

**What:** Create a `/terms` page with Divisio's terms of service. Currently linked in the footer but shows a 404.

**Why:** Terms define acceptable use, limit liability, and establish the legal relationship between Divisio and its users. Required before accepting user accounts and especially before any monetisation.

**How:**
1. Create `src/app/terms/page.tsx`.
2. Cover at minimum:
   - What the service is and what it is not (not a financial service, not a payment processor)
   - User responsibilities (accurate information, not abusing the platform)
   - Divisio's right to suspend accounts
   - Limitation of liability
   - Governing law (India)
3. Use a terms of service generator as a starting point. Keep it plain English — the target audience is Indian consumers, not enterprise legal teams.

---

## 14. Sitemap

**What:** Add an auto-generated sitemap at `/sitemap.xml` so search engines can discover and index all pages.

**Why:** Without a sitemap, search engine crawlers have to discover pages by following links. For a new site with no inbound links yet, some pages — especially the feature sub-pages — may take months to be indexed. A sitemap guarantees all pages are submitted immediately.

**How:**
1. Create `src/app/sitemap.ts`:
   ```ts
   import { MetadataRoute } from "next";

   export default function sitemap(): MetadataRoute.Sitemap {
     const base = "https://divisio.in"; // replace with real domain
     const pages = [
       "",
       "/features",
       "/features/debt-simplification",
       "/features/flexible-splits",
       "/features/real-time-balances",
       "/features/group-management",
       "/features/settle-summary",
       "/use-cases",
       "/about",
       "/changelog",
       "/contact",
       "/privacy",
       "/terms",
     ];
     return pages.map((path) => ({
       url: `${base}${path}`,
       lastModified: new Date(),
       changeFrequency: path === "" ? "weekly" : "monthly",
       priority: path === "" ? 1 : 0.7,
     }));
   }
   ```
2. Update `base` once the production domain is confirmed.
3. After deploying, submit the sitemap URL (`https://divisio.in/sitemap.xml`) to Google Search Console.

---

## 15. Canonical Domain & metadataBase

**What:** Set `metadataBase` in `layout.tsx` so Next.js can generate absolute URLs for OG images, canonical links, and the sitemap.

**Why:** Without `metadataBase`, any metadata that uses a relative URL (like `/og-image.png`) will be output as a relative path, which many social platforms and search engines cannot resolve correctly.

**How:**
In `src/app/layout.tsx`, update the `metadata` export:
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://divisio.in"), // replace with real domain
  // ... rest of metadata
};
```

---

## 16. Vercel Analytics

**What:** Add Vercel Analytics to track page views, top pages, and traffic sources — without cookies, without GDPR friction.

**Why:** You need to know which pages visitors land on, how long they stay, and where they drop off. Without analytics, you are flying blind on what's working on the site. Vercel Analytics is the right choice here because the site is already on Vercel, it requires zero configuration, and it is privacy-first (no consent banner needed).

**How:**
1. In the Vercel dashboard, go to your project → Analytics tab → Enable.
2. Install the package:
   ```bash
   npm install @vercel/analytics
   ```
3. In `src/app/layout.tsx`, import and add the component:
   ```tsx
   import { Analytics } from "@vercel/analytics/react";

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           <Navbar />
           <main>{children}</main>
           <Footer />
           <Analytics />
         </body>
       </html>
     );
   }
   ```
4. Deploy. Analytics will start showing data within 24 hours.

---

## 17. Mobile Nav Active States

**What:** In the mobile menu, the current page is not visually highlighted. On desktop, the active link uses `var(--text)` instead of `var(--text-2)`. The mobile menu does not apply this distinction.

**Why:** Users should always be able to see where they are in the site. This is a basic navigation convention and its absence makes the site feel slightly unfinished on mobile.

**How:**
In `src/components/Navbar.tsx`, inside the mobile menu block, update each `<Link>` to check `pathname`:
```tsx
<Link
  key={l.href}
  href={l.href}
  style={{
    fontSize: 14,
    color: pathname === l.href ? "var(--text)" : "var(--text-2)",
    padding: "7px 0",
    fontWeight: pathname === l.href ? 500 : 400,
  }}
  onClick={() => setMobileOpen(false)}
>
  {l.label}
</Link>
```
Do the same for the feature links under the Product section.

---

## 18. Testimonials (Post-launch)

**What:** Re-add a testimonials section to the home page with real quotes from actual users.

**Why:** The placeholder testimonials were removed because fabricated social proof does more damage than no social proof — visitors can often tell, and it undermines trust. Real quotes from real users, even 2–3 short ones, are among the highest-converting elements on a product landing page.

**How:**
1. Collect quotes from early users — WhatsApp messages, DMs, or a short Typeform asking "How would you describe Divisio to a friend?". Screenshot or note the person's name and city.
2. Add a `testimonials` array to `src/app/page.tsx` (the structure already existed — see git history if needed).
3. Render it between the features grid and the use-cases strip, using the same card style as the rest of the page.
4. Always include the person's name and at least their city for credibility. Do not use stock photos.

---

## 19. Changelog — Keep It Updated

**What:** Add a new entry to `src/app/changelog/page.tsx` with every meaningful release.

**Why:** A live changelog builds trust by showing the product is actively maintained. For a new product, it signals momentum — visitors who come back see things have shipped since their last visit. It is also one of the first things developers and product-minded users check.

**How:**
Each entry in `src/app/changelog/page.tsx` follows this structure:
```ts
{
  version: "0.2.0",
  date: "November 2025",
  label: "Beta",           // Alpha / Beta / General Availability
  changes: [
    "Description of change 1",
    "Description of change 2",
  ],
}
```
Add new entries at the top of the `entries` array so the newest release appears first.
Keep the language user-facing ("You can now split by percentage") rather than technical ("Added percentage split type to SplitModal component").
