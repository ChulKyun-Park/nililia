import Section from "@/components/ui/Section";
import { LoadingState } from "@/components/ui/states";

export default function CasesLoading() {
  return (
    <Section>
      <LoadingState title="Loading cases" description="Fetching the latest case studies from Notion." />
    </Section>
  );
}
