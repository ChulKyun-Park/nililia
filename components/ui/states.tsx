import { ReactNode } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StateProps {
  title?: string;
  description?: string;
  className?: string;
}

function StateShell({ title, description, className, children }: (Required<Pick<StateProps, "title">> & Omit<StateProps, "title">) & { children?: ReactNode }) {
  return (
    <div className={cn("rounded-[32px] border border-primary/15 bg-primary/5 p-8 text-center", className)}>
      {children}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-gray-500">{description}</p> : null}
    </div>
  );
}

export function LoadingState({ title = "Loading", description = "Please wait while we load the content.", className }: StateProps) {
  return (
    <StateShell
      title={title}
      description={description}
      className={cn("flex flex-col items-center justify-center", className)}
    >
      <LoaderCircle className="mb-3 h-6 w-6 animate-spin text-primary" />
    </StateShell>
  );
}

export function EmptyState({ title = "No content", description = "There is no data available yet.", className }: StateProps) {
  return <StateShell title={title} description={description} className={className} />;
}

export function ErrorState({ title = "Something went wrong", description = "Please try again later.", className }: StateProps) {
  return (
    <div className={cn("rounded-[32px] border border-red-200 bg-red-50 p-8 text-center", className)}>
      <AlertCircle className="mx-auto h-6 w-6 text-red-500" />
      <h3 className="mt-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}
