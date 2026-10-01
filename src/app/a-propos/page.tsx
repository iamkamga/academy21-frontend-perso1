import type { Metadata } from 'next';
import InstitutionalProfile from '@/components/InstitutionalProfile';

export const metadata: Metadata = {
  title: 'Qui sommes-nous ? | Academy Twenty One University',
  description: 'A21 University, établissement d’enseignement supérieur en management, leadership et entrepreneuriat : former ceux qui dirigeront demain.',
};

export default function AProposPage() {
  return <InstitutionalProfile />;
}
