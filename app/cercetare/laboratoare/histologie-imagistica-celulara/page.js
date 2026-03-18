import Link from 'next/link';

export default function LaboratorHistologieImagisticaCelularaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator histologie și imagistică celulară</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Laborator histologie și imagistică celulară</h1>
          <p>Preparare și analiză de secțiuni histologice, microscopie avansată și imagistică celulară.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
            <div className="content-card description-card lab-description-card">
                <ul className="lab-description-list">
                    <li>Laboratorul este dedicat investigării aspectelor biologice și genetice în cancer și alte boli, dezvoltarea și aplicarea tehnologiei de top în diagnosticul histopatologic, oferind suport de colaborare pentru protocoalele de cercetare clinică.</li>
                    <li>Laboratorul oferă o gamă largă de tehnici de cercetare histologică, inclusiv metode standard de includere a parafinelor, orientare specială a țesuturilor, segmentare serială și separare a probelor înghețate.</li>
                    <li>În plus față de colorarea cu hematoxilină și eozină a secțiunilor de parafină, laboratorul oferă colorare specială pentru a identifica celulele, alte componente specifice ale țesuturilor sau alte elemente celulare.</li>
                    <li>Laboratorul are echipamente microscopice avansate de imagistică a lamei, precum și un sistem foto telepatologic care permite reconstituirea tridimensională a probelor.</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Prepararea secțiunilor histologice ale țesuturilor înghețate cu parafină, inclusiv secțiunile seriale</li>
              <li>Colorare hematoxilină-eozină</li>
              <li>Colorare specială</li>
              <li>Colorare imunohistochimică</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Personal</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Coordonator: Daciana Nistor</li>
              <li>Calin Tatu</li>
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
                    <li>Carl Zeiss Confocal Microscope Axio Observer.Z1</li>
                    <li>Carl Zeiss Axio Observer D1 inverse microscope</li>
                    <li>Carl Zeiss Axio Scope A1 Microscope direct</li>
                    <li>Hund microscope with fluorescent lamp and camera</li>
                    <li>Nikon E 600 direct light microscope with fluorescent lamp and camera</li>
                    <li>Olympus inverted light microscope with digital capture and storage of microscopic images</li>
                    <li>Criotom Leica CM 1950</li>
                    <li>Leica RM 2255 Microtome</li>
                    <li>Carl Zeiss Axio Imager Z2 telepathology camera</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  );
}