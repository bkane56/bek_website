import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AIFocus } from "@/components/AIFocus";
import { Contact } from "@/components/Contact";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PersonalitySection } from "@/components/PersonalitySection";
import { ResumeDownloads } from "@/components/ResumeDownloads";
import { Skills } from "@/components/Skills";
import { TwinTeaser } from "@/components/TwinTeaser";
import { aiFocus, experience, footerNote, hero, personality, resumeFiles, siteMeta, twinTeaser } from "@/lib/content";
import { siteLinks } from "@/lib/site-links";

describe("marketing sections", () => {
  it("introduces Brian with actionable hero controls", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1, name: hero.headline })).toBeVisible();
    expect(screen.getByRole("link", { name: /download resume/i })).toHaveAttribute("href", "#resume");
    expect(screen.getByRole("img", { name: /headshot/i })).toHaveAttribute("src", "/images/BEK_2.png");
  });

  it("lists layered skills without fluff", () => {
    render(<Skills />);

    expect(screen.getByRole("heading", { name: "Skills" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Frontend" })).toBeVisible();
    expect(screen.getByText(/no vanity percentages/i)).toBeInTheDocument();
  });

  it("covers AI specialties with concrete bullets", () => {
    render(<AIFocus />);

    expect(screen.getByRole("heading", { name: /AI focus/i })).toBeVisible();
    expect(screen.getByText(/practical applications of modern AI systems/i)).toBeInTheDocument();
    expect(screen.getByText(aiFocus.bullets[0])).toBeInTheDocument();
  });

  it("summarizes career progression with highlights", () => {
    render(<ExperienceSummary />);

    expect(screen.getByRole("heading", { name: "Experience summary" })).toBeVisible();
    expect(screen.getByText(experience.progression)).toBeInTheDocument();
    expect(screen.getByText(experience.highlights[0])).toBeInTheDocument();
  });

  it("surfaces resume formats recruiters expect", () => {
    render(<ResumeDownloads />);

    expect(screen.getByRole("heading", { name: "Resume" })).toBeVisible();
    expect(screen.getByRole("link", { name: /Download PDF Resume/i })).toHaveAttribute("href", resumeFiles.pdf);
    expect(screen.getByRole("link", { name: /Download DOCX Resume/i })).toHaveAttribute("href", resumeFiles.docx);
    expect(screen.getByRole("link", { name: /plain text resume/i })).toHaveAttribute("href", resumeFiles.txt);
  });

  it("keeps the digital twin teaser honest about availability", () => {
    render(<TwinTeaser />);

    expect(screen.getByRole("heading", { name: twinTeaser.title })).toBeVisible();
    expect(screen.getByRole("button", { name: twinTeaser.ctaDisabled })).toBeDisabled();
  });

  it("balances personality copy with the lighter photo", () => {
    render(<PersonalitySection />);

    expect(screen.getByRole("heading", { name: personality.title })).toBeVisible();
    expect(screen.getByRole("img", { name: /personality/i })).toHaveAttribute("src", "/images/BEK_3.jpeg");
  });

  it("links contact touchpoints for hiring teams", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", siteLinks.email);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", siteLinks.linkedIn);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", siteLinks.github);
    expect(screen.getByRole("link", { name: /Resume \(PDF\)/i })).toHaveAttribute("href", resumeFiles.pdf);
  });

  it("reminds visitors about global navigation in the footer", () => {
    render(<Footer />);

    expect(screen.getByText(siteMeta.displayName)).toBeVisible();
    expect(screen.getByText(footerNote)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", siteLinks.github);
  });
});
