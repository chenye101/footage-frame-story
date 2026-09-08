# Pure Cinema Portfolio

Build a dark, cinematic one-page portfolio website for a videographer/cinematographer named Cheyne Hoesli, brand name "footagebycheyne." Static site only, no backend/database.

STYLE:
- Dark theme throughout (near-black backgrounds, #1a1a1a range)
- Elegant font headings (like Playfair Display), clean font for body text
- Gold/amber accent color (#d4a15f range) for small labels and links
- Subtle decorative abstract vector line illustrations on the far left and right edges of the hero section (thin white/gray squiggly vertical lines, trickling to low opacity)
- Generous whitespace, minimal, high-end feel

NAVIGATION:
Fixed top nav bar, dark background, logo "footagebycheyne." on the left (lowercase), nav links top center: Home, Portfolio, About, Services, Contact

SECTIONS (single page, scrollable, with nav linking to anchors):

1. HOME/HERO
- Full-width cinematic background image/video (placeholder)
- Centered overlay text: large heading "Cheyne Hoesli", below it "pure cinema." above it "footage by"

2. PORTFOLIO
- Heading "PORTFOLIO." centered, letter-spaced, small caps serif
- A vertical stack of 6 full-width video embeds/placeholders (16:9), one after another as the user scrolls, each a different video showcasing his work (use placeholder video embeds I can swap later)

3. ABOUT
- Small gold label "about" above heading
- Large serif heading "Behind the Scenes."
- Body paragraph (left column, gray text): "What's up, I'm Cheyne, a 21-year-old cinematographer based in Boise, Idaho / Orange County, California. I've always thought of myself as creative. As a kid I was obsessed with YouTubers like Smosh and PewDiePie, dreaming of making my own videos. What I didn't realize then was that it was never about being on camera. It was about creating. That realization led me here — turning everyday moments into cinematic experiences. Cars, motorcycles, surfing, cooking, music, travel — anything can be cinematic."
- Right column: a photo placeholder (portrait aspect ratio)

4. SERVICES
- Small gold label "services" above heading
- Large serif heading "What I offer."
- 3-column card layout, each card with a thin colored top border (gold, blue, pink respectively):
  - "Brand & Commercial" — "Cinematic brand videos and advertisements that make your product feel like a moment worth remembering." — "Inquire for pricing" link
  - "Social Media Content" — "Short form content built for TikTok, Instagram, and beyond. Scroll-stopping visuals that actually convert." — "Inquire for pricing" link
  - "Event Coverage" — "Real moments, captured beautifully. Whether it's an intimate gathering or a large scale production." — "Inquire for pricing" link

5. CONTACT
- Small gold label "contact"
- Large serif heading "Let's make *something*." (italic on "something")
- Email link: footagebycheyne@gmail.com (gold color)
- A contact form with fields: Your name, Your email (side by side), Budget range (e.g. $500 – $1,000), Timeline (e.g. within 2 weeks), Tell me about your project (textarea), and a "Send Inquiry" button (outlined style)
- Form should use Formspree or similar free static-form service so it works without a backend — set up the integration but leave a placeholder for my form ID

Keep components clean and reusable, minimal dependencies, fully responsive for mobile. Give me a complete first draft in one pass rather than partial sections.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/77800f91-4f6b-4f0f-af11-3ec083f333f2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
