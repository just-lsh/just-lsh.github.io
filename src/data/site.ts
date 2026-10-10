export type IconName = "mdi:briefcase" | "mdi:source-repository" | "mdi:react";

export interface WorkEntry {
  company: string;
  url?: string;
  role: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM; omitted = current
  description: string;
}

interface SiteContent {
  name: string;
  handle: string;
  role: string;
  bio: string | string[];
  work: WorkEntry[];
  projects: {
    name: string;
    url: string;
    description: string;
    date?: string;
    icon?: IconName;
  }[];
  links: { label: string; href: string; text: string }[];
}

export const site: SiteContent = {
  name: "Len",
  handle: "just-lsh",
  role: "software engineer",
  // TODO: replace with your bio.
  bio: ["[Placeholder] A short introduction goes here."],
  // TODO: replace with real dates, role and description
  work: [
    {
      company: "adesso SE",
      url: "https://www.adesso.de",
      role: "[role]",
      start: "2023-04",
      description: "[Placeholder] What you built and owned there.",
    },
    {
      company: "bitfactory GmbH",
      url: "https://www.bitfactory.io",
      role: "[role]",
      start: "2020-08",
      end: "2023-03",
      description: "[Placeholder] Short description of the role.",
    },
  ],
  // TODO: replace with your projects and their URLs.
  projects: [
    {
      name: "project-one",
      // TODO: replace this demo icon override with the project's actual icon.
      icon: "mdi:react",
      url: "https://example.com",
      description: "[Placeholder] A brief project description.",
      date: "2026-09",
    },
    {
      name: "project-two",
      url: "https://example.com",
      description: "[Placeholder] Another project description.",
    },
  ],
  links: [
    { label: "github", href: "https://github.com/just-lsh", text: "github.com/just-lsh" },
    // TODO: replace with your contact address.
    { label: "email", href: "mailto:you@example.com", text: "you@example.com" },
  ],
};
