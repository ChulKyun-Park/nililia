import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ children, href, className = "" }: CardProps) {
  const base =
    "rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow";

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} hover:shadow-md block ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
