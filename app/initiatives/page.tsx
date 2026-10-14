import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Initiatives" };

export default function InitiativesPage() {
  return (
    <EmptyState
      eyebrow="Initiatives"
      title="Programs that put young people at the table."
      description="Our initiatives are in design. Nothing listed here should be read as an existing program until it is announced with dates, participants and a clear description of what it does."
      expect={[
        "Fellowships that pair young researchers with experienced practitioners",
        "Working groups that bring students, educators, technologists and policymakers into one conversation",
        "Public resources that make the questions around AI legible to young people",
      ]}
    />
  );
}
