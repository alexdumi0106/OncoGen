import Link from 'next/link';

export default function LaboratorBiologieMolecularaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator biologie moleculară</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator biologie moleculară</h1>
          <p>Diagnostic molecular și tehnologii avansate pentru medicina personalizată</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>Laboratorul este proiectat pentru diagnosticarea moleculară a cancerului. Testele moleculare permit diagnosticul precis al diverselor tipuri de cancer și selectarea terapiei adecvate.</li>
                    <li>Diagnosticul molecular, axat pe interacțiunea intracelulară a genelor și proteinelor, permite identificarea tiparelor de expresie caracteristice care pot fi utilizate pentru identificarea tumorii.</li>
                    <li>Interpretarea nivelului de exprimare a genelor și variația numărului de copii poate oferi informații despre evoluția bolii, iar profilul de expresie genică poate fi utilizat pentru monitorizarea terapiei.</li>
                    <li>Laboratorul este echipat cu dispozitive de înaltă calitate necesare pentru cuantificarea specifică a unui număr mare de tipuri de acid nucleic țintă, cum ar fi ARNm și microARN.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Pregătirea probelor și extracția acizilor nucleici</li>
              <li>Determinarea expresiei genice și analiza numărului de copii (CNV)</li>
              <li>Detectarea mutațiilor și genotiparea SNP</li>
              <li>Activități care permit generarea unui plan pentru tratamentul personalizat al cancerului</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Personal</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Coordonator: Calin Tatu</li>
              <li>Oana Gavriliuc</li>
              <li>Florina Bojin</li>
              <li>Alexandra Ivan</li>
              <li>Tehnician laborator: Marieta Neața</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Echipament</h2>
          <div className="content-card description-card lab-list-card">
            <ul className="lab-equipment-list">
              <li>LightCycler 480 II Block Kit, 384 (Roche)</li>
              <li>Veriti Thermal Cycler (Applied Biosystems)</li>
              <li>NanoDrop 1000 Spectrophotometer (Thermo Scientific)</li>
              <li>Molecular Imager Gel Doc XR+ Universal Hood II (Bio-Rad)</li>
              <li>Horizontal electrophoresis system Power Pack Mini-Sub</li>
              <li>GT Cell (Bio-Rad)</li>
              <li>TissueLyser LT (Qiagen)</li>
              <li>Thermoblock Eppendorf SmartBlock (Eppendorf)</li>
              <li>Termomixere compacte cu termobloc (Eppendorf)</li>
              <li>Centrifuge de laborator SL40R (Thermo Scientific)</li>
              <li>Centrifugă MiniSpin 5453 (Eppendorf)</li>
              <li>Congelatoare de temperatură joasă (-86 C) (Thermo Scientific)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}