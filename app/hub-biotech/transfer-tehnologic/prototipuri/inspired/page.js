'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const prototipuri = [
  {
    id: 'celule',
    title: '7 tipuri de celule E.coli și 7 tipuri de celule de insecte (Spodoptera frugiperda Sf9) infectate cu baculovirusuri modificate genetic pentru producerea de alergene recombinate din polenul de ambrozia',
    detalii: (
      <div>
        <p><strong>Celule Escherichia coli BL21 Gold modificate genetic, capabile să producă alergenele recombinate:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 3</li><li>Amb a 5</li><li>Amb a 8</li><li>Amb a 9</li>
          <li>Amb a 10</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
        <p><strong>Baculovirusuri Autographa californica conținând secvența genică pentru alergenele din ambrozia capabile să infecteze celule de insecte Sf9 pentru a produce alergenele recombinate:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 1</li><li>Amb a 3</li><li>Amb a 4</li><li>Amb a 5</li>
          <li>Amb a 6</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
        <div className="inspired-photo-row">
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/producerea-de-celule-competente-RWTaiuGgya7Z36shgaDcWrVzvDZmgf.jpeg" alt="Producerea de celule competente" width={300} height={380} className="inspired-photo" />
            <figcaption>Producerea de celule competente</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preparare_mediu_LB-PX8xbiDqoy5coS9GJCHCKl0j6miaEx.png" alt="Preparare mediu LB" width={300} height={380} className="inspired-photo" />
            <figcaption>Preparare mediu LB</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Insamantare_suspensie_EColi-w55WInIk1nLU6Qnl9WBShqBHt9BqfW.png" alt="Însământare suspensie E.Coli" width={300} height={380} className="inspired-photo" />
            <figcaption>Însământare suspensie E.Coli</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/realizare_copii_colonii-fd6TBWemp8MnNbeNIrSTFJDIyiidb0.png" alt="Realizare copii colonii" width={300} height={380} className="inspired-photo" />
            <figcaption>Realizare copii colonii</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colony_screening_pcr-ceCR7FFQqKorTT1OiXnNFZgWtGhKf5.png" alt="Colony screening PCR" width={300} height={380} className="inspired-photo" />
            <figcaption>Colony screening PCR</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/preparare_gel_agaroza_electroforeza-MyU15zVjapXEWXCd04Myg3lHw1XLlY.png" alt="Preparare gel agaroză electroforeză" width={300} height={380} className="inspired-photo" />
            <figcaption>Preparare gel agaroză electroforeză</figcaption>
          </figure>
          <figure className="inspired-figure">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rezultate_electroforeza-FvuVXA4ZZqdEyLMXiAXbwPQG732yUp.png" alt="Rezultate electroforeză" width={300} height={380} className="inspired-photo" />
            <figcaption>Rezultate electroforeză</figcaption>
          </figure>
        </div>
      </div>
    ),
    publicatii: (
      <div>
        <p><strong>Celule Escherichia coli BL21 Gold modificate genetic, capabile să producă alergenele recombinate:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 3</li><li>Amb a 5</li><li>Amb a 8</li><li>Amb a 9</li>
          <li>Amb a 10</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
        <p><strong>Baculovirusuri Autographa californica conținând secvența genică pentru alergenele din ambrozia capabile să infecteze celule de insecte Sf9 pentru a produce alergenele recombinate:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 1</li><li>Amb a 3</li><li>Amb a 4</li><li>Amb a 5</li>
          <li>Amb a 6</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'alergene',
    title: 'Alergene recombinate din polenul de ambrozia',
    detalii: (
      <div>
        <p><strong>Alergene din polenul de ambrozia produse în E.coli:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 3</li><li>Amb a 5</li><li>Amb a 8</li><li>Amb a 9</li>
          <li>Amb a 10</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
        <p><strong>Alergene din polenul de ambrozia produse în Sf9:</strong></p>
        <ul className="inspired-list">
          <li>Amb a 1</li><li>Amb a 3</li><li>Amb a 4</li><li>Amb a 5</li>
          <li>Amb a 6</li><li>Amb a 11</li><li>Amb a 12</li>
        </ul>
        <p><strong>Puritate în SDS-PAGE {'>'} 95%</strong></p>
      </div>
    ),
    publicatii: (
      <div>
        <ul className="inspired-pub-list">
          <li>
            Tamaș et al. 2023 – Ragweed Major Allergen Amb a 11 Recombinant Production and Clinical Implications – Impact Factor: 6.064 –{' '}
            <a href="https://www.mdpi.com/2218-273X/13/1/182" target="_blank" rel="noopener noreferrer">https://www.mdpi.com/2218-273X/13/1/182</a>
          </li>
          <li>
            Grijincu et al. 2023 – Physicochemical and immunological characterization of Amb a 12, a novel ragweed (Ambrosia artemisiifolia) pollen allergen – Impact factor 4.174 –{' '}
            <a href="https://www.sciencedirect.com/science/article/pii/S0161589023000548" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S0161589023000548</a>
          </li>
          <li>
            Zbîrcea et al. 2023 – Relationship between IgE levels specific for ragweed pollen extract, Amb a 1 and cross-reactive allergen molecules – Impact factor 6.208 –{' '}
            <a href="https://www.mdpi.com/1422-0067/24/4/4040" target="_blank" rel="noopener noreferrer">https://www.mdpi.com/1422-0067/24/4/4040</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'kit-elisa-diagnostic',
    title: 'Kit ELISA pentru diagnosticul alergiei la polen de ambrozia prin detecția IgE specific pentru panelul de alergene din polenul de ambrozia',
    detalii: (
      <p>
        Plăci de ELISA căptușite cu alergene recombinate din polenul de ambrozia. Peste alergen se adaugă serul de la pacienții alergici și se detectează cu anticorpi anti-IgE uman marcați cu peroxidază din hrean.
      </p>
    ),
    publicatii: (
      <p>
        Panaitescu C., Chen KW., Păunescu V., Buzan RM. „Kit și metodă de utilizare pentru diagnosticul alergiei la ambrozie", nr. A/00615/2020, data de depozit 30/09/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
      </p>
    ),
  },
  {
    id: 'kit-elisa-detectie',
    title: 'Kit ELISA pentru detecția și cuantificarea alergenelor de ambrozia din mediu sau din extractele alergenice pentru diagnostic sau imunoterapie',
    detalii: (
      <p>
        Plăci ELISA căptușite cu diluții seriate de alergene recombinate din polen de ambrozia unde se adaugă diluții ale extractului care se dorește testat. Peste alergen și probă se adaugă seruri alergen-specifice de iepuri imunizați cu alergene recombinate din polenul de ambrozia. Legarea acestor anticorpi alergen-specifici se detectează cu anticorpi anti IgG de iepure marcați cu peroxidază din hrean.
      </p>
    ),
    publicatii: (
      <p>
        Panaitescu C., Chen KW., Buzan RM., Grijincu M., Zbircea LE., Tamas TP., Haidar L., Tanasie G., Hutu I., Anghel S. „Kit de testare cu anticorpi alergen-specifici pentru detecția și cuantificarea alergenelor din polenul de Ambrozia din mediu și din extracte alergenice diagnostice/terapeutice", nr. A/00759/2020, data de depozit 19/11/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
      </p>
    ),
  },
];

const publicatii = [
  { text: 'Chen et al. 2018 – Ragweed Pollen Allergy: Burden, Characteristics, and Management of an Imported Allergen Source in Europe – Impact factor 2.932', url: 'https://karger.com/iaa/article/176/3-4/163/168362' },
  { text: 'Panaitescu et al. 2022 – Precision medicine in the allergy clinic: the application of component resolved diagnosis – Impact Factor: 4.47', url: 'https://www.tandfonline.com/doi/full/10.1080/1744666X.2022.2034501' },
  { text: 'Bumbăcea et al. 2022 – Mechanisms of allergen immunotherapy supporting its disease-modifying effect – Impact Factor: 4.19', url: 'https://www.futuremedicine.com/doi/abs/10.2217/imt-2021-0325' },
  { text: 'Marusciac et al. 2021 – Symptom patterns and comparison of diagnostic methods in ragweed pollen allergy – Impact factor 2.751', url: 'https://www.spandidos-publications.com/10.3892/etm.2021.9957' },
  { text: 'Buzan et al. 2022 – Complex IgE sensitization patterns in ragweed allergic patients: Implications for diagnosis and specific immunotherapy – Impact Factor: 5.657', url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/clt2.12179' },
  { text: 'Zbircea et al. 2023 – Relationship between IgE Levels Specific for Ragweed Pollen Extract, Amb a 1 and Cross-Reactive Allergen Molecules – Impact factor 6.208', url: 'https://www.mdpi.com/1422-0067/24/4/4040' },
  { text: 'Tamaș et al. 2023 – Ragweed Major Allergen Amb a 11 Recombinant Production and Clinical Implications – Impact Factor: 6.064', url: 'https://www.mdpi.com/2218-273X/13/1/182' },
  { text: 'Grijincu et al. 2023 – Physicochemical and immunological characterization of Amb a 12, a novel ragweed (Ambrosia artemisiifolia) pollen allergen – Impact factor 4.174', url: 'https://www.sciencedirect.com/science/article/pii/S0161589023000548' },
];

const teze = [
  { nume: 'Tamaș Tudor Paul', titlu: 'Alergenul major Amb a 11 din polenul de ambrozia (Ambrosia artemisiifolia): expresie in sistem procariot si eucariot, aspecte imunoproteomice și corelatii clinice' },
  { nume: 'Buzan Maria Roxana', titlu: 'Caracterizarea imunoproteomică a alergenelor recombinate din polenul de Ambrosia artemisiifolia' },
  { nume: 'Zbîrcea Lauriana-Eunice', titlu: 'Evaluarea reacției de reactivitate încrucișată și testarea relevanței clinice a unor alergene din Ambrosia artemisiifolia' },
  { nume: 'Grijincu Manuela', titlu: 'Caracterizarea unei noi proteine alergenice din familia liazelor din polenul de ambrozia (Ambrosia artemisiifolia) și evaluarea relevanței clinice a acesteia' },
  { nume: 'Zimbru Razvan', titlu: 'Evaluarea markerilor inflamației alergice prin metode noninvazive' },
];

function AccordionItem({ id, title, detalii, publicatii: pub }) {
  const [tab, setTab] = useState(null);
  const isOpen = tab !== null;

  return (
    <div className="accordion-item">
      <button
        className={`accordion-header${isOpen ? ' active' : ''}`}
        onClick={() => setTab(isOpen ? null : 'detalii')}
        aria-expanded={isOpen}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-toggle-btn">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content inspired-accordion-body">
          <div className="inspired-tabs">
            <button
              className={`inspired-tab-btn${tab === 'detalii' ? ' active' : ''}`}
              onClick={() => setTab('detalii')}
            >
              Detalii
            </button>
            <button
              className={`inspired-tab-btn${tab === 'publicatii' ? ' active' : ''}`}
              onClick={() => setTab('publicatii')}
            >
              Publicații / Brevet
            </button>
          </div>
          <div className="inspired-tab-content">
            {tab === 'detalii' && <div>{detalii}</div>}
            {tab === 'publicatii' && <div>{pub}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function InspiredPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> /&nbsp;
          <Link href="/hub-biotech">Hub Biotehnologii</Link> /&nbsp;
          <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link> /&nbsp;
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri">Prototipuri</Link> /&nbsp;
          <span>INSPIRED</span>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-secondary">
        <div className="container">
          <h1>Producerea de alergene recombinate din polenul de ambrozia în cadrul proiectului INSPIRED</h1>
        </div>
      </section>

      {/* Prototipuri Accordion */}
      <section className="content-section">
        <div className="container">
          <div className="patents-accordion">
            {prototipuri.map((p) => (
              <AccordionItem key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Narrative section */}
      <section className="content-section bg-light">
        <div className="container">
          <p className="inspired-narrative">
            În cadrul proiectului INSPIRED (Strategii inovative pentru prevenția, diagnosticul și terapia afecțiunilor respiratorii induse de polenul de ambrozia) s-a identificat profilul de sensibilizare IgE al pacienților alergici la polenul de ambrozia (<em>Ambrosia artemisiifolia</em>).
          </p>

          {/* Sensitization profile image */}
          <figure className="inspired-figure-wide">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profil%20de%20sensibilizare-DjOMrCgivIb1a55faKhBf3m0dxdzjE.png"
              alt="Profil de sensibilizare identificat în rândul pacienților alergici la polenul de ambrozia"
              width={1100}
              height={420}
              className="inspired-img-wide"
            />
            <figcaption>Profil de sensibilizare identificat în rândul pacienților alergici la polenul de ambrozia conform Buzan et al. 2022</figcaption>
          </figure>

          <p className="inspired-narrative">
            Pe baza acestui profil au fost identificate și caracterizate alergenele din polenul de ambrozia (<em>Ambrosia artemisiifolia</em>). Pentru a efectua caracterizarea, s-a identificat secvența proteică a acestor alergene din bazele de date (allergen.org) și s-a realizat un construct pentru expresia acestora în celule procariote, <em>Escherichia coli</em>, și eucariote, <em>Spodoptera frugiperda</em> (Sf9).
          </p>

          {/* 3D model image */}
          <figure className="inspired-figure-wide">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Model%203D%20a%20alergenelor%20din%20polenul%20de%20ambrozia-WvNgFDA98Lt9oUbQIKDfDjdDXT0GgQ.jpg"
              alt="Model 3D a alergenelor din polenul de ambrozia"
              width={900}
              height={520}
              className="inspired-img-wide"
            />
            <figcaption>Model 3D a alergenelor din polenul de ambrozia obținute în https://swissmodel.expasy.org/</figcaption>
          </figure>

          <p className="inspired-narrative">
            Sistemul de expresie a fost ales în funcție de complexitatea structurală a proteinei. Constructul codificând proteina de interes a fost inserat în genomul celulelor procariote prin administrarea unui șoc termic. Apoi s-a adăugat un factor de transcripție pentru a induce expresia proteică. Pentru a produce proteinele în celule de insecte, constructul genic a fost introdus în celule E. coli pentru amplificare și obținerea unui bacmid cu secvența de interes. Acesta a fost apoi folosit pentru transfecția celulelor de insecte, amplificarea stocului baculoviral și producția de proteine. Proteinele au fost apoi izolate și purificate prin cromatografie de afinitate. Puritatea a fost verificată pe SDS-PAGE. Producția mai detaliată a proteinelor se regăsește în Zbircea et al. 2023, Tămaș et al. 2023, Grijincu et al. 2023.
          </p>

          {/* Steps image */}
          <figure className="inspired-figure-wide">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%C8%99ii%20parcur%C8%99i%20%C3%AEn%20vederea%20producerii%20de%20alergene%20recombinate-0haBtOxRE2pWIYsGgkUHAYjO0LkR7j.png"
              alt="Pașii parcurși în vederea producerii de alergene recombinate"
              width={900}
              height={340}
              className="inspired-img-wide"
            />
            <figcaption>Pașii parcurși în vederea producerii de alergene recombinate</figcaption>
          </figure>

          <p className="inspired-narrative">
            Aceste proteine au fost incluse într-un brevet pentru dezvoltarea unui kit de diagnostic al alergiei la polenul de ambrozia. Ele au fost folosite și pentru a obține anticorpi alergen-specifici care s-au folosit într-un al doilea brevet pentru detectarea alergenelor din polenul de ambrozia în mediu și în extracte alergenice.
          </p>
        </div>
      </section>

      {/* Brevete */}
      <section className="content-section">
        <div className="container">
          <h2>Brevete rezultate în urma proiectului INSPIRED</h2>
          <div className="inspired-patent-block">
            <p>
              Panaitescu C., Chen KW., Păunescu V., Buzan RM.<br />
              <em>„Kit și metodă de utilizare pentru diagnosticul alergiei la ambrozie"</em>, nr. A/00615/2020, data de depozit 30/09/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
            </p>
            <p>
              Panaitescu C., Chen KW., Buzan RM., Grijincu M., Zbircea LE., Tamas TP., Haidar L., Tanasie G., Hutu I.<br />
              <em>„Kit de testare cu anticorpi alergen-specifici pentru detecția și cuantificarea alergenelor din polenul de Ambrozia din mediu și din extracte alergenice diagnostice/terapeutice"</em>, nr. A/00759/2020, data de depozit 19/11/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
            </p>
          </div>
        </div>
      </section>

      {/* Publicatii */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Publicații rezultate în urma proiectului INSPIRED</h2>
          <ul className="inspired-pub-list">
            {publicatii.map((p, i) => (
              <li key={i}>
                {p.text} –{' '}
                <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Teze doctorat */}
      <section className="content-section">
        <div className="container">
          <p className="inspired-narrative">
            Rezultatele acestei cercetări au fost și vor fi incluse în următoarele teze de doctorat sub coordonarea doamnei prof. univ. dr. Panaitescu Carmen:
          </p>
          <div className="inspired-table-wrap">
            <table className="inspired-table">
              <thead>
                <tr>
                  <th>Nume Prenume</th>
                  <th>Titlu teză</th>
                </tr>
              </thead>
              <tbody>
                {teze.map((t, i) => (
                  <tr key={i}>
                    <td>{t.nume}</td>
                    <td>{t.titlu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="section-cta" style={{ marginTop: '40px' }}>
            <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-primary">
              Înapoi la Prototipuri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
