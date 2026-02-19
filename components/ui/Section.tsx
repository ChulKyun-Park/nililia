import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
  spacing?: "default" | "tight";
}

export default function Section({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  spacing = "default",
}: SectionProps) {
  const spacingClassName = spacing === "tight" ? "py-16" : "py-24";

  return (
    <Tag className={cn(spacingClassName, className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
