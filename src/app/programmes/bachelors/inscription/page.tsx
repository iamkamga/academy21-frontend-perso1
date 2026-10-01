import InscriptionProgramme from '@/components/InscriptionProgramme';

export default function Page() {
  return (
    <InscriptionProgramme
      programmeId="bachelor-management"
      heading="Bachelor Management"
      label="Bachelor Management Stratégique & Opérationnel"
      details={['Bac+3 · Niveau 6', '420 h', 'RNCP38666']}
      backHref="/programmes/bachelors"
      afterSteps={[
        'Email de confirmation de votre acompte',
        'Étude de votre dossier et entretien de positionnement',
        'Validation de l’admission et calendrier de rentrée',
      ]}
    />
  );
}
