import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Initiatives" };

export default function InitiativesPage() {
  return (
    <EmptyState
      eyebrow="Initiatives"
      title="Initiatives will be announced here once they exist."
      description="MOEBIUS's initiatives are in design. Nothing should be read as an existing programme until it is announced with dates, participants and a clear description of what it does."
      expect={["Structured ways of gathering and analysing youth perspectives through the ALPHAG3N Network", "Working groups bringing young people, researchers, technologists and policymakers into one conversation", "Public resources that make questions about ASI legible to young people"]}
    />
  );
}
