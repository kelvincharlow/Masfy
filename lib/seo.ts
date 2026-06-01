export function buildMetadata({ title, description }: { title?: string; description?: string }) {
  return {
    title: title ? `${title} | Engineering Co.` : 'Engineering Co.',
    description: description ?? 'Engineering services for industrial and infrastructure projects.',
    openGraph: {
      title: title ? `${title} | Engineering Co.` : 'Engineering Co.',
      description: description ?? 'Engineering services for industrial and infrastructure projects.',
      type: 'website',
    },
  };
}
