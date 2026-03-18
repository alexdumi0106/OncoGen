import Link from 'next/link';

export default function LaboratorElisaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator ELISA</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator ELISA</h1>
          <p>Determinări cantitative de proteine, anticorpi și alți markeri biologici prin tehnica ELISA.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>Laboratorul ELISA este parte a Centrului OncoGen și este proiectat special pentru a detecta și cuantifica proteine, anticorpi, peptide sau hormoni în probe biologice.</li>
                    <li>Platforma ELISA oferă o citire avansată chimio-fluorimetrică pentru aplicații celulare sau biochimice, cu o serie de caracteristici special concepute pentru a îmbunătăți sensibilitatea și reproductibilitatea investigațiilor.</li>
                    <li>Această platformă este flexibilă și dispune de un sistem de spălare automată cu placă cu 96 de godeuri, cu uniformitate crescută a temperaturii.</li>
                    <li>Proiectarea este ideală pentru o serie de aplicații ELISA efectuate pe celule, enzime sau ADN, atât pentru cercetare, cât și pentru diagnosticul clinic.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Detectarea concentrației de anticorpi în plasmă, supernatant de cultură și alte lichide biologice</li>
              <li>Detectarea potențialilor alergeni</li>
              <li>Monitorizarea evoluției bolilor</li>
              <li>Detectarea antigenelor: alergeni la medicamente și concentrație de antigene tumorale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Personal</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Coordonator: Daniela Crișnic</li>
              <li>Oana Gavriliuc</li>
              <li>Simona Anghel</li>
              <li>Mirabela Cristea</li>
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
              <li>Mașină de spălat automată cu placă, format cu 96 de godeuri (Tecan)</li>
              <li>Cititor de plăci Infinite® 200 PRO (Tecan)</li>
              <li>PHO-4 Termohakere pentru microplaci (Grant-bio)</li>
              <li>Frigidere și congelatoare (Thermo Scientific)</li>
              <li>Centrifuge de laborator (Thermo Scientific)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
