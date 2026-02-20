import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nililia, our mission, and our team values.",
  openGraph: {
    title: "About | Nililia",
    description: "Learn about Nililia, our mission, and our team values.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
