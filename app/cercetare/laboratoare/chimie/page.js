import Link from 'next/link';

export default function LaboratorChimiePage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator chimie</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator chimie</h1>
          <p>Analize chimice și biochimice, sinteza și caracterizarea compușilor de interes biomedical.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>Analizele biologice, toxicologice și de mediu pot fi efectuate în cadrul Departamentului Chimie.</li>
                    <li>Compuși anorganici din probele biologice și de mediu, compuși organici volatili din plante și nevolatili din probe de mediu sau biologice pot fi determinați folosind echipamentul disponibil în acest departament.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Colectarea probelor: probe de mediu (sol, apă, cărbune, plante); probe biologice (sânge, ser, urină, țesuturi, celule)</li>
              <li>Prelucrarea probelor: extracție lichid-lichid și în fază solidă pe coloane, agitație, centrifugare, evaporare cu evaporator rotativ</li>
              <li>Analiza probelor: analiza calitativă și cantitativă prin cromatografie în strat subțire (TLC), cromatografie lichidă (HPLC), gaze (GC), absorbție atomică (AAS)</li>
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
              <li>Alexandra T. Gruia</li>
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
              <li>HP6890 Cromatograf de gaze cuplat cu detectorul de spectrometrie de masă Hewlett Packard 5973</li>
              <li>Cromatograf de gaze cu detector de ionizare cu flacără Agilent 6890N</li>
              <li>Cromatograf de gaze Scion 436-GC Bruker</li>
              <li>Cromatografie lichidă de înaltă presiune (HPLC) Agilent 1100 cu unitate de detecție UV/VIS</li>
              <li>UHPLC Dionex Ultimate 3000 Thermo Scientific cu spectrometrie de masă Bruker</li>
              <li>Spectrometru de absorbție atomică Analytik Jena vario 700</li>
              <li>Spectrofluorimetru pentru plăci Bio-Tek FL600</li>
              <li>Spectrofotometru Perkin Elmer Lambda EZ201 UV-VIS</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}