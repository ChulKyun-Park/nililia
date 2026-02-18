import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
}

export default function PageHero({
  title,
  description,
  children,
  className = "bg-gray-50 border-b border-gray-200",
  descriptionClassName = "text-gray-600",
  containerClassName = "",
  titleClassName = "text-gray-900",
}: PageHeroProps) {
  return (
    <section className={`${className} py-20 sm:py-24`}>
      <Container className={containerClassName}>
        <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight ${titleClassName}`}>{title}</h1>
        {description ? (
          <p className={`mt-5 max-w-3xl text-lg sm:text-xl ${descriptionClassName}`}>{description}</p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
