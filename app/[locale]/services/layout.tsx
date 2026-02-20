import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Nililia's localization and translation services.",
  openGraph: {
    title: "Services | Nililia",
    description: "Explore Nililia's localization and translation services.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
