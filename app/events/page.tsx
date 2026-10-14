import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <EmptyState
      eyebrow="Events"
      title="Events will be listed here when scheduled."
      description="MOEBIUS has not yet scheduled public events. When it does, this page will list them with dates, locations and how to take part."
      expect={["Small roundtables rather than large stages", "Sessions in which young people help set the agenda", "Notes or recordings published afterwards where participants agree"]}
    />
  );
}
