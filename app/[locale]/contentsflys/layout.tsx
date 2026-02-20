import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contentsflys",
  description: "Premium Contentsflys service details for enterprise localization workflows.",
  openGraph: {
    title: "Contentsflys | Nililia",
    description: "Premium Contentsflys service details for enterprise localization workflows.",
  },
};

export default function ContentsflysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
