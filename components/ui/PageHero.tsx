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
        {/* h1 태그에 leading-tight 대신 고정 수치인 leading-[1.4]를 추가하여 줄간격을 벌렸습니다. */}
        <h1 
          className={`text-4xl sm:text-5xl font-bold tracking-tight leading-[1.4] sm:leading-[1.5] break-keep ${titleClassName}`}
        >
          {title}
        </h1>
        
        {description ? (
          /* p 태그에도 leading-relaxed를 추가하여 긴 설명글이 시원하게 보이도록 했습니다. */
          <p className={`mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed break-keep ${descriptionClassName}`}>
            {description}
          </p>
        ) : null}
        
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}