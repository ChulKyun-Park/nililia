import Section from "@/components/ui/Section";
import { LoadingState } from "@/components/ui/states";

export default function NewsLoading() {
  return (
    <Section>
      <LoadingState title="Loading news" description="Fetching the latest updates from Notion." />
    </Section>
  );
}
