import Link from "next/link";
import { ReactNode } from "react";
import CardShell from "@/components/ui/CardShell";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ children, href, className = "" }: CardProps) {
  if (href) {
    return (
      <Link href={href} className="block">
        <CardShell className={className}>{children}</CardShell>
      </Link>
    );
  }

  return <CardShell className={className}>{children}</CardShell>;
}
