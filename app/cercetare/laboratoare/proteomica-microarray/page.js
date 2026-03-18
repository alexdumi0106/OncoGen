import Link from 'next/link';

export default function LaboratorProteonicaMicroarrayPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator proteomică și microarray</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator proteomică și microarray</h1>
          <p>Analize proteomice, profilare genică prin microarray și identificarea markerilor moleculari.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>Laboratorul oferă condiții de cercetare avansată pentru identificarea genelor, validarea proteinelor, detectarea markerilor specifici pentru diferite tipuri de celule și detectarea oncogenelor.</li>
                    <li>Laboratorul este echipat cu dispozitive specifice capabile să efectueze întregul spectru de analize proteomice și microarray, de la extracția automată a acidului nucleic până la citirea lamelor cu densitate mică sau medie, atât comerciale cât și personalizate: oligene, BAC, matrice proteice, lame speciale.</li>
                    <li>Polimorfismele cu un singur nucleotid (SNPs) și mutațiile pot fi identificate, tumorile pot fi clasificate, iar genele țintă, supresoarele tumorale, biomarkerii și genele asociate cu chemoreceptorii pot duce la descoperirea de noi medicamente.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Izolarea materialului genetic din diferite tipuri de culturi celulare și din probe biologice umane și animale proaspete</li>
              <li>Determinarea profilului de exprimare a proteinei</li>
              <li>Determinarea stării de metilare a ADN-ului; detectare SNP</li>
              <li>Hibridizare comparativă genomică</li>
              <li>Evidențierea genelor de fuziune</li>
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
              <li>Scanner microarray confocal InnoScan 710 (Innopsys)</li>
              <li>Magmax Express 96 (ThermoFisher)</li>
              <li>Centrifuge de laborator (Thermo Scientific)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
