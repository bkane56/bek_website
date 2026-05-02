# BrianEKane.com Landing/Home Page Requirements

## 1. Purpose

Create a professional landing/home page for BrianEKane.com that supports a software engineering job search, with emphasis on:

- Senior Software Engineering experience
- React.js and Java expertise
- AI Engineering knowledge
- Machine Learning, RAG, embeddings, LLM applications, Agentic AI, and N8N
- A professional but human personality
- Future support for highlighted project links and case studies
- Future integration with an AI Digital Twin assistant

The homepage should be built in **Next.js** and deployed to **Vercel**.

---

## 2. Primary Goal

The homepage should make a hiring manager, recruiter, or technical lead quickly understand:

> Brian is a senior software engineer with strong full-stack experience and modern AI engineering capability, who can build practical, production-ready systems and is also approachable to work with.

---

## 3. Target Audience

### Primary Audience

- Hiring managers
- Technical recruiters
- Engineering managers
- Senior engineers reviewing candidates
- AI product or platform teams

### Secondary Audience

- Professional contacts
- Former coworkers
- Clients or consulting prospects
- People exploring Brian's AI Digital Twin or technical projects

---

## 4. Tone and Brand

The tone should be:

- Professional
- Senior-level
- Clear
- Confident
- Slightly humorous
- Human and approachable

The site should avoid sounding like a junior portfolio or buzzword-heavy AI page.

### Suggested Brand Line

> Serious about engineering. Not overly serious about myself.

### Alternate Taglines

- Senior Software Engineer. AI Builder. Professional debugger of both code and meetings.
- Building practical software and AI systems with React, Java, and a healthy respect for production bugs.
- Full-stack software engineer moving modern AI from demo to durable.
- React, Java, AI systems, and the occasional well-timed joke.

---

## 5. Recommended Technology Stack

### Frontend

- Next.js
- React using React-Router and Reducers for routing and state management
- TypeScript
- Tailwind CSS

### Deployment

- Vercel
- AWS
- Railway

### Future Integrations

- AI Digital Twin
- RAG-based content retrieval
- OpenAI or similar LLM provider
- ElevenLabs optional voice mode
- Project links hosted on Vercel, Railway, AWS, GitHub Pages, or other platforms

---

## 6. Homepage Structure

The landing page should be a single polished homepage with future support for deeper project pages.

Recommended page structure:

```text
Home
├── Header / Navigation
├── Hero
├── About
├── Skills
├── Featured Projects Preview
├── AI Focus
├── Experience Summary
├── Resume Downloads
├── Optional AI Digital Twin Preview
├── Personality / Human Section
└── Contact / Footer
```

---

## 7. Header / Navigation Requirements

The header should include:

- Name or logo text: `Brian E. Kane` or `Brian Kane`
- Navigation links:
  - About
  - Skills
  - Projects
  - AI Focus
  - Resume
  - Contact
- Resume button
- Color scheme selector

### Header Behavior

- Sticky header recommended
- Responsive mobile menu required
- Header should remain clean and uncluttered
- Resume button should be visible on desktop
- Mobile navigation should be simple and accessible

---

## 8. Color Scheme Selector Requirement

The homepage must include a selector that allows the user to toggle between three professional color schemes.

### Required Selector Behavior

The color selector should:

- Be visible in the header or near the top of the page
- Allow switching between Color Scheme 1, 2, and 3
- Update the theme across the page immediately
- Persist the selected theme using `localStorage`
- Respect accessibility contrast requirements
- Avoid page reloads during theme switching

### Suggested Selector UI Options

Option A: Dropdown

```text
Theme: Executive Dark
Theme: Clean Light
Theme: Warm Human
```

Option B: Segmented Control

```text
Dark | Light | Warm
```

Option C: Icon Buttons

```text
🌙  ☀️  ◐
```

For a professional portfolio, use Option A or B.

---

## 9. Color Scheme Options

## Color Scheme 1: Executive Dark

Best for an AI/software credibility feel.

```text
Name: Executive Dark

Background: #0F172A
Card Background: #111827
Primary Text: #F8FAFC
Secondary Text: #CBD5E1
Accent: #38BDF8
Secondary Accent: #A78BFA
Border: #334155
Muted Surface: #1E293B
Button Text: #020617
```

### Usage Notes

This should feel:

- Senior
- Technical
- Modern
- AI-oriented
- Slightly premium

Recommended default if the site leans heavily into AI branding.

---

## Color Scheme 2: Clean Light Professional

Best for recruiter readability and enterprise credibility.

```text
Name: Clean Light

Background: #F8FAFC
Card Background: #FFFFFF
Primary Text: #111827
Secondary Text: #475569
Accent: #2563EB
Secondary Accent: #0F766E
Border: #CBD5E1
Muted Surface: #E2E8F0
Button Text: #FFFFFF
```

### Usage Notes

This should feel:

- Trustworthy
- Enterprise-ready
- Clean
- Easy to read
- Professional

Recommended default if the site prioritizes recruiter readability.

---

## Color Scheme 3: Warm Human Engineer

Best for approachable professionalism.

```text
Name: Warm Human

Background: #FAFAF7
Card Background: #FFFFFF
Primary Text: #1F2937
Secondary Text: #4B5563
Accent: #B45309
Secondary Accent: #2563EB
Border: #D6D3D1
Muted Surface: #F5F5F4
Button Text: #FFFFFF
```

### Usage Notes

This should feel:

- Mature
- Thoughtful
- Human
- Professional
- Less generic than a standard tech portfolio

Recommended if the site wants a strong approachable personality.

---

## 10. Theme Implementation Requirements

Use theme tokens instead of hardcoded colors.

Example conceptual tokens:

```ts
type ThemeName = "executive-dark" | "clean-light" | "warm-human";

type ThemeTokens = {
  name: string;
  background: string;
  card: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
  secondaryAccent: string;
  border: string;
  mutedSurface: string;
  buttonText: string;
};
```

The implementation should:

- Store the current theme in component state
- Apply theme colors with CSS variables or Tailwind-compatible custom properties
- Save the user selection to `localStorage`
- Load the saved selection on page load
- Default to either `clean-light` or `executive-dark`

Current recommended default:

```text
Clean Light Professional
```

Reason: recruiters and hiring managers may scan the site quickly, and the light theme provides maximum readability.

---

## 11. Hero Section Requirements

The hero section should include:

- Professional headline
- Short credibility statement
- Primary CTA button
- Secondary CTA button
- Optional professional headshot
- Optional AI Digital Twin preview callout

### Suggested Hero Headline

> Senior Software Engineer building production-grade web and AI systems.

### Suggested Hero Subheadline

> 11+ years building software with React, Java, backend services, and modern AI systems including RAG, embeddings, machine learning, and agentic workflows.

### Required CTA Buttons

- Download Resume
- View Projects
- Contact Me

### Optional CTA

- Ask My AI Digital Twin

This should be added once the AI Digital Twin is ready.

---

## 12. About Section Requirements

The about section should be short, clear, and personal.

Suggested copy:

> I am a software engineer with over 11 years of experience building reliable applications, APIs, and front-end systems. My core background is React.js and Java, and I have been expanding deeply into AI engineering, including machine learning, RAG, embeddings, LLM applications, and agentic AI systems.
>
> I take the work seriously: clean architecture, maintainable code, thoughtful UX, and systems that actually solve business problems. I do not take myself too seriously, which means I enjoy collaboration, humor, and working with people who like building things the right way without turning every meeting into a ceremony.

---

## 13. Skills Section Requirements

Skills should be grouped into cards, not displayed as arbitrary percentage bars.

### Required Skill Groups

#### Frontend

- React.js
- TypeScript
- JavaScript
- HTML
- CSS
- Responsive UI
- Component architecture

#### Backend

- Java
- Python
- REST APIs
- Service architecture
- Authentication
- Data handling

#### AI Engineering

- LLM applications
- RAG
- Embeddings
- Vector databases
- Agentic AI
- Prompt engineering
- AI app deployment

#### Cloud / DevOps

- Docker
- AWS
- Vercel
- CI/CD
- Deployment pipelines
- Observability

#### Engineering Practices

- Testing
- Code review
- Debugging
- Architecture
- Documentation
- Agile delivery

---

## 14. Featured Projects Preview Requirements

This section should be built so Brian can later add links to highlighted projects.

### Initial State

If project links are not ready yet, display project cards with:

- Project title
- Short description
- Status label such as `Coming Soon`, `Case Study Pending`, or `Private Code / Public Write-Up Coming`
- Tech stack tags
- Placeholder button disabled or labeled `Details Coming Soon`

### Future Project Card Fields

Each project card should support:

```ts
type ProjectCard = {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  status: "live" | "coming-soon" | "case-study" | "private-code";
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
};
```

### Recommended Initial Project Cards

#### AI Digital Twin

Description:

> Conversational AI assistant grounded on resume, portfolio content, project summaries, and professional background.

Tech stack ideas:

- Next.js
- React
- OpenAI
- RAG
- Embeddings
- Vector database
- ElevenLabs optional voice mode

#### Agentic Coding Team

Description:

> Multi-agent software workflow using supervisor, architect, engineer, and testing agents to plan, build, and validate software tasks.

Tech stack ideas:

- Python
- OpenAI Agents SDK
- MCP
- Docker
- Pydantic

#### React Enterprise Application

Description:

> Full React application demonstrating reducers, routing, state management, and production-oriented front-end architecture.

Tech stack ideas:

- React
- React Router
- Reducers
- JavaScript or TypeScript
- Component architecture

#### RAG Document Assistant

Description:

> Document assistant that retrieves relevant content from uploaded files and generates grounded responses with citations.

Tech stack ideas:

- Python
- RAG
- Embeddings
- Vector database
- LLM API
- Streamlit or Next.js

---

## 15. AI Focus Section Requirements

This section should explain Brian's AI focus without overstating professional AI experience.

Suggested copy:

> My AI work focuses on practical applications of modern AI systems: RAG, embeddings, LLM-powered applications, agentic workflows, and AI-assisted development. I am especially interested in turning AI demos into reliable systems with clear architecture, useful UX, and maintainable code.

This section should include:

- Agentic AI
- RAG systems / Embeddings
- MCP
- Context Engineering
- LLM applications
- AI-assisted software development
- AI UX
- Responsible and transparent AI behavior

---

## 16. Experience Summary Requirements

The homepage should include a high-level experience summary, not a full resume replacement.

Suggested format:

```text
Intern → Software Analyst → Senior Software Analyst → Software Advisor
```

Include:

- 11+ years of engineering experience
- Front-end and full-stack software experience
- React.js and Java expertise
- Enterprise software experience
- Cross-functional collaboration
- Debugging and maintainability
- Architecture and technical decision-making

---

## 17. Resume Download Requirements

The homepage should include a resume section with download links.

### Required Formats

- PDF
- DOCX

### Optional Format

- TXT

### Recommended File Names

```text
Brian_Kane_Senior_Software_Engineer_Resume.pdf
Brian_Kane_Senior_Software_Engineer_Resume.docx
Brian_Kane_Senior_Software_Engineer_Resume.txt
```

### Resume Button Labels

- Download PDF Resume
- Download DOCX Resume
- Download Plain Text Resume

PDF should be the primary button.

DOCX should be secondary.

TXT should be optional and can be placed as a smaller utility link.

---

## 18. AI Digital Twin Requirements

The homepage should prepare for a future AI Digital Twin feature.

### Initial Version

Show a non-functional or lightly functional teaser section:

> Ask my AI Digital Twin about my background, projects, and technical experience.

CTA:

```text
Ask My AI Digital Twin
```

If not yet ready:

```text
AI Digital Twin Coming Soon
```

### Future Text Chat

The AI Digital Twin should support:

- Questions about Brian's resume
- Questions about skills
- Questions about projects
- Questions about experience
- Questions about AI engineering focus
- Links to resume and contact information

### Future Voice Mode

Voice should be optional.

Do not autoplay audio.

Do not make voice the default interaction.

Voice mode should be clearly labeled.

Suggested copy:

> Voice mode uses synthetic speech through ElevenLabs. This is not my actual voice.

### Recommended Voice Modes

Phase 1:

- Text chat only

Phase 2:

- Text chat with optional audio playback

Phase 3:

- Full voice conversation demo

---

## 19. Pictures and Images Requirements

Use images strategically.

### Required / Recommended

- One professional, friendly headshot for the hero or about section
- Project screenshots as project pages become available
- Architecture diagrams for AI and software projects

### Optional Personality Image

Use the funny bear-hat photo only in a lower-page personality section, not as the primary hero headshot.

Suggested section title:

> Also, I'm human.

Suggested caption:

> Serious about engineering. Less serious about hats.

Or:

> I build production software, AI systems, and occasionally questionable fashion decisions.

### Image Requirements

- Use optimized images
- Use descriptive alt text
- Avoid large uncompressed images
- Avoid too many personal photos
- Do not use auto-playing media

---

## 20. Contact Section Requirements

The contact section should include:

- Email link
- LinkedIn link
- GitHub link
- Resume download link
- Optional contact form

Suggested copy:

> Open to senior software engineering, full-stack engineering, AI engineering, and agentic AI application roles.

The contact section should be simple and easy to use.

---

## 21. Accessibility Requirements

The page should:

- Meet WCAG AA color contrast where practical
- Use semantic HTML
- Use alt text for images
- Support keyboard navigation
- Avoid motion-heavy effects
- Avoid autoplay audio or video
- Use clear focus states
- Use readable font sizes
- Work well on mobile and desktop

---

## 22. Performance Requirements

The homepage should:

- Load quickly on Vercel
- Use optimized images
- Avoid unnecessary JavaScript
- Avoid heavy animation libraries unless needed
- Use lazy loading where appropriate
- Keep initial page experience fast and clean

---

## 23. Responsive Design Requirements

The page must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile requirements:

- Collapsed navigation
- Easy-to-tap buttons
- Readable text
- Project cards stacked vertically
- Theme selector still accessible
- Resume buttons not hidden

---

## 24. Animation Requirements

Animations should be subtle.

Allowed:

- Gentle fade-in
- Small hover effects
- Button transitions
- Card hover elevation
- Smooth scrolling

Avoid:

- Excessive particle effects
- Constant motion
- Auto-typing animations everywhere
- Spinning 3D objects
- Anything that distracts from the content

---

## 25. Future Project Hosting Considerations

Since future highlighted projects may be hosted in different places, project cards should allow flexible external links.

Possible hosting destinations:

- Vercel
- Railway
- AWS
- GitHub Pages
- GitHub repository
- Static case study page
- Private-code public write-up

Project cards should not assume all projects live in the same app.

---

## 26. Initial MVP Scope

The first version should include:

- Next.js homepage
- Responsive layout
- Three color schemes
- Theme selector
- Hero section
- About section
- Skills section
- Featured projects placeholder section
- AI focus section
- Experience summary
- Resume download section
- Contact section
- Personality image section
- Clean footer

Do not build full project detail pages in the MVP unless explicitly added later.

---

## 27. Clarification Questions

These need to be answered before final implementation:

1. Should the default color scheme be:
   - Executive Dark
   - Clean Light Professional
   - Warm Human Engineer

2. What exact name should appear in the header?
   - Brian Kane
   - Brian E. Kane
   - BrianEKane.com
   - Something else

3. What primary job title should appear in the hero?
   - Senior Software Engineer
   - Senior Full-Stack Software Engineer
   - Senior Software Engineer / AI Engineer
   - AI-Focused Senior Software Engineer

4. Do you want the first version to include the AI Digital Twin as:
   - Coming soon teaser only
   - Text chat prototype
   - Fully working text chat
   - Text chat plus optional voice output

5. Will the resume files be placed in the Next.js `public/` folder?

6. Do you want a contact form, or just direct links to email, LinkedIn, and GitHub?

7. Do you want the funny bear-hat photo included in the first version?

8. Will project pages eventually live inside this same Next.js site, or should project cards be treated as external links only?

9. Do you want a blog or technical notes section in the first version, or should that wait?

10. Should the site use App Router or Pages Router?

Recommended answer for question 10:

```text
Use Next.js App Router.
```

---

## 28. Suggested Folder Structure

Recommended Next.js App Router structure:

```text
brianekane-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── ThemeSelector.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── FeaturedProjects.tsx
│   ├── AIFocus.tsx
│   ├── ExperienceSummary.tsx
│   ├── ResumeDownloads.tsx
│   ├── PersonalitySection.tsx
│   └── Contact.tsx
├── lib/
│   ├── themes.ts
│   └── projects.ts
├── public/
│   ├── resume/
│   │   ├── Brian_Kane_Senior_Software_Engineer_Resume.pdf
│   │   ├── Brian_Kane_Senior_Software_Engineer_Resume.docx
│   │   └── Brian_Kane_Senior_Software_Engineer_Resume.txt
│   └── images/
│       ├── brian-headshot.jpg
│       └── brian-personality-hat.jpg
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 29. Acceptance Criteria

The homepage is complete when:

- The page builds successfully in Next.js
- The page deploys successfully to Vercel
- The design is responsive
- The three color schemes work
- The selected color scheme persists after refresh
- Resume download links work
- Project cards support future external links
- Contact links work
- Accessibility basics are met
- No autoplay audio exists
- The page feels professional, senior-level, and human
