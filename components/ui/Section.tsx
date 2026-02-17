import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={`py-16 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
