import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardShellProps {
  children: ReactNode;
  className?: string;
}

export default function CardShell({ children, className }: CardShellProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm transition-shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}
