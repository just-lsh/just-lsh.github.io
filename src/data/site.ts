interface SiteContent {
  name: string;
  handle: string;
  role: string;
  bio: string | string[];
  projects: { name: string; url: string; description: string; date?: string }[];
  links: { label: string; href: string; text: string }[];
}

export const site: SiteContent = {
  name: "Len",
  handle: "just-lsh",
  role: "software engineer",
  // TODO: replace with your bio.
  bio: ["[Placeholder] A short introduction goes here."],
  // TODO: replace with your projects and their URLs.
  projects: [
    {
      name: "project-one",
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
