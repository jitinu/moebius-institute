import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <EmptyState
      eyebrow="Research"
      title="Research will be published here as it is produced."
      description="MOEBIUS is defining its initial research questions and has not yet published findings. When it does, they will appear here with methods, sources and limitations stated plainly."
      expect={[
        "Briefings synthesising young people's perspectives on AI and its implications",
        "Longer studies on how increasingly powerful intelligence may affect education, work, creativity and agency",
        "Open questions we are working on, and what we do not yet know",
      ]}
    />
  );
}
