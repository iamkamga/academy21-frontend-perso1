import InscriptionProgramme from '@/components/InscriptionProgramme';

export default function Page() {
  return (
    <InscriptionProgramme
      programmeId="mastere-strategie-leadership"
      heading="Mastère Stratégie & Leadership"
      label="Mastère Stratégie, Leadership & Transformation des Organisations"
      details={['Bac+5 · Niveau 7', '2 ans · 900 h', 'M1 + M2']}
      backHref="/programmes/masteres"
      afterSteps={[
        'Email de confirmation de votre acompte',
        'Étude du dossier, entretien et validation du projet professionnel',
        'Décision de la commission d’admission (entrée en M1 ou en M2)',
      ]}
    />
  );
}
