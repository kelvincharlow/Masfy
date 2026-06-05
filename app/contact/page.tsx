import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Masfy Consulting Engineers | Nairobi Engineering Consultants',
  description:
    'Contact Masfy Consulting Engineers in Westlands, Nairobi for structural design, civil engineering, drainage design, foundation design, and project support.',
};

export default function ContactPage() {
  return (
    <div className="space-y-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
      <ContactForm />
    </div>
  );
}
