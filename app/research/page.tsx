import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <EmptyState
      eyebrow="Research"
      title="Research shaped with young people, not just about them."
      description="MOEBIUS is at an early stage. We are defining our first research questions and have not yet published findings. When we do, they will appear here, with methods and limitations stated plainly."
      expect={[
        "Short briefings written by young researchers with mentors from other generations",
        "Longer studies on how AI is changing learning, work and public life for young people",
        "Open questions we are working on, and what we do not yet know",
      ]}
    />
  );
}
