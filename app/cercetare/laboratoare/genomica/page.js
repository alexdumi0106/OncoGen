import Link from 'next/link';

export default function LaboratorGenomicaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator genomică</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator genomică</h1>
          <p>Secvențiere de generație următoare (NGS), analiză genomică și bioinformatică.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>În laboratorul de genomică investigăm variațiile genetice și epigenetice asociate cu susceptibilitatea dezvoltării unor forme de cancer pentru a utiliza informațiile obținute pentru metode de diagnostic și prognostic mai bune.</li>
                    <li>Laboratorul este echipat cu sisteme de automatizare versatile cu o gamă largă de aplicații științifice: extragerea materialului genetic, analiza unui panou cuprinzător de gene sub- sau supra-exprimate în cancer, și identificarea mutațiilor punctuale (SNPs) prin secvențiere ADN.</li>
                    <li>Se efectuează analiza stării de metilare a genelor prin metoda de tratament cu bisulfit și secvențiere ADN. În colaborare cu Laboratoarele Microarray și Cultură Celulară, genele asociate cu sensibilitatea la cancer sunt validate și confirmate prin teste in vitro pe liniile de celule tumorale umane.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Izolarea materialului genetic din diferite tipuri de culturi celulare și probe ale pacienților (ADN, ARN, microARN etc.)</li>
              <li>Analiza expresiei genice</li>
              <li>Analiza stării de metilare a genelor</li>
              <li>Secvențiere ADN amplicon</li>
              <li>Genotiparea SNP</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Personal</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Coordonator: Oana Gavriliuc</li>
              <li>Florina Bojin</li>
              <li>Ada Cean</li>
              <li>Alexandra Ivan</li>
              <li>Tehnician laborator: Marieta Neață</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Echipament</h2>
          <div className="content-card description-card lab-list-card">
            <ul className="lab-equipment-list">
              <li>Extractor de acid nucleic MagMAX Express 96 (ThermoFisher)</li>
              <li>Sistem PCR în timp real (Roche Lightcycler 480 II)</li>
              <li>Sistem de secvențiere a primerilor</li>
              <li>Analizator genetic 3130XL Sequencer (AB/Hitachi)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
