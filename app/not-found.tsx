import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      eyebrow="404"
      title="This page does not exist."
      description="The address may be out of date, or the page may not have been published yet. The sections of the site are listed in the footer."
    />
  );
}
