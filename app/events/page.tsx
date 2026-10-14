import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <EmptyState
      eyebrow="Events"
      title="Conversations across generations."
      description="We have not yet scheduled public events. When we do, this page will list them with dates, locations and how to take part."
      expect={[
        "Small roundtables rather than large stages",
        "Sessions where young people set the agenda and lead the discussion",
        "Recordings and notes published afterwards where participants agree",
      ]}
    />
  );
}
