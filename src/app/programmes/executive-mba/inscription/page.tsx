import InscriptionProgramme from '@/components/InscriptionProgramme';

export default function Page() {
  return (
    <InscriptionProgramme
      programmeId="executive-mba"
      heading="Executive MBA"
      label="Executive MBA Gouvernance, Leadership & Transformation"
      details={['12 mois', '360 h + Impact Project', 'Executive Education']}
      backHref="/programmes/executive-mba"
      afterSteps={[
        'Email de confirmation de votre acompte',
        'Entretien Executive avec la direction du programme',
        'Confirmation d’admission et intégration à la cohorte',
      ]}
    />
  );
}
