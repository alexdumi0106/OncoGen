import Link from 'next/link';

export default function BiobazaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Biobaza - Departamentul de Medicină Experimentală</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Biobaza - Departamentul de Medicină Experimentală</h1>
          <p>Cercetare preclinică și studii pe modele animale pentru validarea terapiilor experimentale.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
          <div className="content-card description-card lab-description-card">
            <ul className="lab-description-list">
              <li>Departamentul de Medicină Experimentală (Biobaza) este un compartiment specializat dedicat cercetării preclinice și studiilor pe modele animale.</li>
              <li>Facilitatea este dotată cu spații moderne pentru adăpostirea și îngrijirea animalelor de laborator, respectând toate normele etice și legale în vigoare.</li>
              <li>Activitățile sunt supervizate de personal calificat și autorizat în domeniul experimentării pe animale.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Studii preclinice pentru evaluarea eficacității și siguranței candidaților terapeutici</li>
              <li>Modele experimentale pentru boli oncologice, imunologice și metabolice</li>
              <li>Validare in vivo a terapiilor celulare și genice</li>
              <li>Studii de farmacodinamică și farmacocinetică</li>
              <li>Evaluarea biodistribuției și toxicității produselor biologice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Facilități</h2>
          <div className="content-card description-card lab-list-card">
            <ul className="lab-equipment-list">
              <li>Spații de adăpostire pentru animale mici (șoareci, șobolani)</li>
              <li>Zone de carantină și aclimatizare</li>
              <li>Săli de proceduri și intervenții</li>
              <li>Echipamente de monitorizare și imagistică preclinică</li>
              <li>Sisteme de ventilație și control al mediului</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
