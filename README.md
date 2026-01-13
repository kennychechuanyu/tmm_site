# TMM Website

The official website for the Theory, Model, Measurement (TMM) Network - an international network addressing the disconnect between psychological theory, modeling, and measurement.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 5.x
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** [Vercel](https://vercel.com/)
- **Forms:** [Formspree](https://formspree.io/)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
TMM/
├── public/
│   └── images/
│       └── people/          # Profile photos (KY.jpg, NV.jpg, MR.png)
├── src/
│   ├── components/          # Reusable UI components
│   ├── content/
│   │   ├── events/          # Event pages (Markdown)
│   │   └── news/            # Meeting notes and updates (Markdown)
│   ├── layouts/             # Page templates
│   ├── pages/               # Website pages
│   └── styles/
│       └── global.css       # Global styles and design system
└── package.json
```

---

## Form System

The website uses [Formspree](https://formspree.io/) to handle form submissions. Each form has its own Formspree endpoint, and submissions are sent to the TMM email.

### Current Forms

| Form | Purpose | File | Formspree ID |
|------|---------|------|--------------|
| Membership | New member registration | `src/pages/community.astro` | `mreegjyb` |
| Project Ideas | Collaborative project proposals | `src/pages/community.astro` | `xnjjqylg` |
| Discussion Topics | Community discussion proposals | `src/pages/community.astro` | `xqeekonw` |
| Resources | Resource submissions | `src/pages/resources/index.astro` | `xjggvlaw` |
| Contact | General inquiries | `src/pages/contact.astro` | `mdaaobwz` |

### Managing Forms

1. Log into [Formspree](https://formspree.io/) with the TMM account
2. View submissions in the dashboard
3. Each form has its own inbox

### Changing a Form ID

To change a Formspree endpoint, edit the `FORMSPREE_ID` variable at the top of the respective page file:

```javascript
const FORMSPREE_ID = "your_new_form_id";
```

---

## Common Tasks

### Adding a New Coordinating Team Member

Edit `src/pages/people.astro`:

```javascript
const coordinatingCommittee = [
  {
    name: "Dr. First Last",
    role: "Research Group Name",
    institution: "University Name",
    email: "email@university.edu",
    image: "/images/people/XX.jpg",  // Add photo to public/images/people/
  },
  // ... existing members
];
```

**Don't forget:** Add the profile photo to `public/images/people/`

---

### Adding a News Post / Meeting Notes

Create a new file in `src/content/news/` with format `YYYY-MM-DD-title.md`:

```markdown
---
title: "Your Title Here"
description: "Brief description for preview."
date: 2025-01-15
type: meeting-notes    # Options: meeting-notes, announcement, update
featured: false
---

Your content in Markdown format...

## Use Headings

Write paragraphs, lists, etc.
```

---

### Adding an Event

Create a new file in `src/content/events/` (e.g., `2025-summer-workshop.md`):

```markdown
---
title: "Workshop Title"
date: 2025-06-15
endDate: 2025-06-17          # Optional
location: "City, Country"
type: workshop               # Options: conference, workshop, webinar, meetup
featured: true
registrationUrl: "https://..."  # Optional
description: "Brief description."
---

Full event details in Markdown...
```

---

### Editing the Navigation Menu

Edit `src/components/Header.astro`:

```javascript
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  // Add or remove items here
];
```

---

### Editing the Footer

The footer is in `src/components/Footer.astro`. It contains:
- TMM logo and tagline
- Contact email
- Copyright notice

To change the email, edit the `mailto:` link in the footer file.

---

### Editing the Homepage

Edit `src/pages/index.astro`:

- **Hero section:** Modify the `<Hero>` component props
- **What We Do:** Edit the activity items in the section
- **Focus areas:** Edit the `focusAreas` array
- **Events section:** Automatically pulls from `src/content/events/`

---

### Editing the About Page

Edit `src/pages/about.astro`:

- **Mission:** Edit the text in the first `<Section>`
- **Two Gaps:** Edit the gap cards in the second section
- **Values:** Edit the `values` array at the top of the file

---

### Changing Contact Email

The contact email appears in:

1. `src/pages/contact.astro` - Contact page
2. `src/components/Footer.astro` - Footer

---

## Page Files Reference

| Page | File |
|------|------|
| Homepage | `src/pages/index.astro` |
| About | `src/pages/about.astro` |
| People | `src/pages/people.astro` |
| Events | `src/pages/events/index.astro` |
| News | `src/pages/news/index.astro` |
| Resources | `src/pages/resources/index.astro` |
| Community | `src/pages/community.astro` |
| Contact | `src/pages/contact.astro` |

---

## Deployment

The site automatically deploys to Vercel when changes are pushed to the `main` branch.

To deploy changes:
1. Make your edits
2. Commit: `git add -A && git commit -m "Your message"`
3. Push: `git push`

Vercel will automatically build and deploy within 1-2 minutes.

---

## License

Copyright TMM Network. All rights reserved.
