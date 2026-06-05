import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Careers | Masfy Consulting Engineers',
  description:
    'Masfy Consulting Engineers careers, graduate programs, internships, and technical roles in Nairobi.',
};

export default function IndustriesPage() {
  redirect('/careers');
}
