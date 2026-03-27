'use client';

import Link from 'next/link';
import { useState } from 'react';

const inspiredAccordions = [
    {
        id: 1,
        title: '7 tipuri de celule E.coli și 7 tipuri de celule de insecte (Spodoptera frugiperda Sf9) infectate cu baculovirusuri modificate genetic pentru producerea de alergene recombinate din polenul de ambrozia',
        content: (
            <>
                <p><strong>Detalii</strong></p>
                <p>
                    Celule <em>Escherichia coli</em> BL21 Gold modificate genetic, capabile să producă
                    alergenele recombinate:
                </p>
                <ul>
                    <li><strong>Amb a 3</strong></li>
                    <li><strong>Amb a 5</strong></li>
                    <li><strong>Amb a 8</strong></li>
                    <li><strong>Amb a 9</strong></li>
                    <li><strong>Amb a 10</strong></li>
                    <li><strong>Amb a 11</strong></li>
                    <li><strong>Amb a 12</strong></li>
                </ul>
                <p>
                    Baculovirusuri <em>Autographa californica</em> conținând secvența genică pentru
                    alergenele din ambrozia capabile să infecteze celule de insecte <em>Sf9</em> pentru a
                    produce alergenele recombinate:
                </p>
                <ul>
                    <li><strong>Amb a 1</strong></li>
                    <li><strong>Amb a 3</strong></li>
                    <li><strong>Amb a 4</strong></li>
                    <li><strong>Amb a 5</strong></li>
                    <li><strong>Amb a 6</strong></li>
                    <li><strong>Amb a 11</strong></li>
                    <li><strong>Amb a 12</strong></li>
                </ul>
                <p><strong>Publicații/ Brevet</strong></p>
                <p>
                  Celule <em>Escherichia coli</em> BL21 Gold modificate genetic, capabile să producă
                  alergenele recombinate:
                </p>
                <ul>
                  <li><strong>Amb a 3</strong></li>
                  <li><strong>Amb a 5</strong></li>
                  <li><strong>Amb a 8</strong></li>
                  <li><strong>Amb a 9</strong></li>
                  <li><strong>Amb a 10</strong></li>
                  <li><strong>Amb a 11</strong></li>
                  <li><strong>Amb a 12</strong></li>
                </ul>
                <p>
                  Baculovirusuri <em>Autographa californica</em> conținând secvența genică pentru
                  alergenele din ambrozia capabile să infecteze celule de insecte <em>Sf9</em> pentru a
                  produce alergenele recombinate:
                </p>
                <ul>
                  <li><strong>Amb a 1</strong></li>
                  <li><strong>Amb a 3</strong></li>
                  <li><strong>Amb a 4</strong></li>
                  <li><strong>Amb a 5</strong></li>
                  <li><strong>Amb a 6</strong></li>
                  <li><strong>Amb a 11</strong></li>
                  <li><strong>Amb a 12</strong></li>
                </ul>
            </>
        ),
    },
    {
        id: 2,
        title: 'Alergene recombinate din polenul de ambrozie',
        content: (
            <>
                <p><strong>Detalii</strong></p>
                <p>Alergene din polenul de ambrozie:</p>
                <ul>
                    <li>
                    <u>produse în <em>coli</em></u>:
                        <ul>
                            <li><strong>Amb a 3</strong></li>
                            <li><strong>Amb a 5</strong></li>
                            <li><strong>Amb a 8</strong></li>
                            <li><strong>Amb a 9</strong></li>
                            <li><strong>Amb a 10</strong></li>
                            <li><strong>Amb a 11</strong></li>
                            <li><strong>Amb a 12</strong></li>
                        </ul>
                    </li>
                    <li>
                      <u>produse în <em>sf9</em></u>:
                        <ul>
                            <li><strong>Amb a 1</strong></li>
                            <li><strong>Amb a 3</strong></li>
                            <li><strong>Amb a 4</strong></li>
                            <li><strong>Amb a 5</strong></li>
                            <li><strong>Amb a 6</strong></li>
                            <li><strong>Amb a 11</strong></li>
                            <li><strong>Amb a 12</strong></li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Puritate în SDS-PAGE &gt; 95%</strong></p>
                <p><strong>Publicații/ Brevet</strong></p>
                <ul>
                    <li>
                        Tamaș et al. 2023 - Ragweed Major Allergen Amb a 11 Recombinant Production and
                    Clinical Implications
                  </li>
                </ul>
                <p>
                  - Impact Factor: 6.064 -{' '}
                  <a href="https://www.mdpi.com/2218-273X/13/1/182" target="_blank" rel="noopener noreferrer">
                    https://www.mdpi.com/2218-273X/13/1/182
                  </a>
                </p>
                <ul>
                  <li>
                    Grijincu et al. 2023 - Physicochemical and immunological characterization of Amb a 12,
                    a novel ragweed (<em>Ambrosia artemisiifolia</em>) pollen allergen - Impact factor 4.174 -
                  </li>
                </ul>
                <p>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0161589023000548" target="_blank" rel="noopener noreferrer">
                    https://www.sciencedirect.com/science/article/pii/S0161589023000548
                  </a>
                </p>
                <ul>
                  <li>
                    Zbîrcea et al. 2023 - Relationship between IgE levels specific for ragweed pollen
                    extract, Amb a 1 and cross-reactive allergen molecules - Impact factor 6.208
                  </li>
                </ul>
                <p>
                        <a href="https://www.mdpi.com/1422-0067/24/4/4040" target="_blank" rel="noopener noreferrer">
                      https://www.mdpi.com/1422-0067/24/4/4040
                        </a>
                </p>
            </>
        ),
    },
    {
        id: 3,
        title: 'Kit ELISA pentru diagnosticul alergiei la polen de ambrozia prin detecția IgE specific pentru panelul de alergene din polenul de ambrozia',
        content: (
            <>
                <p><strong>Detalii</strong></p>
                <p>
                    Plăci de ELISA căptușite cu alergene recombinate din polenul de ambrozia. Peste alergen
                    se adaugă serul de la pacienții alergici și se detectează cu anticorpi anti-IgE uman
                    marcați cu peroxidază din hrean.
                </p>
                <p><strong>Publicații/ Brevet</strong></p>
                <p>
                  Panaitescu C., Chen KW., Păunescu V., Buzan RM., „Kit și metodă de utilizare pentru
                  diagnosticul alergiei la ambrozie”, nr.A /00615 /2020, data de depozit 30/09/2020,
                  Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații
                  tehnologice.
                </p>
            </>
        ),
    },
    {
        id: 4,
        title: 'Kit ELISA pentru detecția și cuantificarea alergenelor de ambrozia din din mediu sau din extractele alergenice pentru diagnostic sau imunoterapie',
        content: (
            <>
                <p><strong>Detalii</strong></p>
                <p>
                    Plăci ELISA căptușite cu diluții seriate de alergene recombinate din polen de ambrozia
                    unde se adaugă diluții ale extractului care se dorește testat. Peste alergen și probă se
                    adaugă seruri alergen-specifice de iepuri imunizați cu alergene recombinate din polenul
                    de ambrozia. Legarea acestor anticorpi alergen-specifici se detectează cu anticorpi anti
                    IgG de iepure marcați cu peroxidază din hrean.
                </p>
                <p><strong>Publicații/ Brevet</strong></p>
                <p>
                  Panaitescu C.,Chen KW., Buzan RM., Grijincu M., Zbircea LE.,Tamas TP., Haidar L.,Tanasie
                  G., Hutu I., Anghel S., „Kit de testare cu anticorpi alergen-specifici pentru detecția și
                  cuantificarea alergenelor din polenul de Ambrozia din mediu și din extracte alergenice
                  diagnostice/terapeutice”,nr. A/ 00759/ 2020, data de depozit 19/11/2020,Oficiul de Stat
                  pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
                </p>
            </>
        ),
    },
];

  const inspiredProcessImages = [
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/producerea-de-celule-competente.jpeg',
      alt: 'Producerea de celule competente',
      caption: 'Producerea de celule competente',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/Preparare_mediu_LB.png',
      alt: 'Preparare mediu LB',
      caption: 'Preparare mediu LB',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/Insamantare_suspensie_EColi.png',
      alt: 'Insamantare suspensie E.Coli pe mediu solid',
      caption: 'Insamantare suspensie E.Coli pe mediu solid',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/realizare_copii_colonii.png',
      alt: 'Coloniile E.coli pregatite pentru selectie',
      caption: 'Coloniile E.coli pregatite pentru selectie',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/realizare_copii_colonii.png',
      alt: 'Realizare copii colonii de interes',
      caption: 'Realizare copii colonii de interes',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/colony_screening_pcr.png',
      alt: 'Colony screening - PCR',
      caption: 'Colony screening - PCR',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/preparare_gel_agaroza_electroforeza.png',
      alt: 'Preparare gel agaroza pentru electroforeza',
      caption: 'Preparare gel agaroza pentru electroforeza',
    },
    {
      src: '/images/hub-bioteh-transferuri-prototipiuri-inspired/rezultate_electroforeza.png',
      alt: 'Rezultate electroforeza - citire lumina UV',
      caption: 'Rezultate electroforeza - citire lumina UV',
    },
  ];

export default function InspiredPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
          <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link> /{' '}
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri">Prototipuri</Link> / <span>INSPIRED</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Producerea de alergene recombinate din polenul de ambrozia în cadrul proiectului INSPIRED</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container inspired-content">
          <div className="patents-accordion inspired-accordion">
            {inspiredAccordions.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  className={`accordion-header ${expandedId === item.id ? 'active' : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="accordion-title">{item.title}</span>
                  <span className="accordion-toggle-btn">{expandedId === item.id ? '−' : '+'}</span>
                </button>
                {expandedId === item.id && (
                  <div className="accordion-content inspired-accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>

          <p>
            În cadrul proiectului INSPIRED (Strategii inovative pentru prevenția, diagnosticul și terapia
            afecțiunilor respiratorii induse de polenul de ambrozia) s-a identificat profilul de sensibilizare
            IgE al pacienților alergici la polenul de ambrozia (<em>Ambrosia artemisiifolia</em>).
          </p>

          <figure className="inspired-figure">
            <img
              src="/images/hub-bioteh-transferuri-prototipiuri-inspired/profil-de-sensibilizare.png"
              alt="Profil de sensibilizare identificat în rândul pacienților alergici la polenul de ambrozia"
              className="inspired-image"
            />
            <figcaption>Profil de sensibilizare identificat în rândul pacienților alergici la polenul de ambrozia conform Buzan et al. 2022</figcaption>
          </figure>

          <p>
            Pe baza acestui profil au fost identificate și caracterizate alergenele din polenul de ambrozia
            (<em>Ambrosia artemisiifolia</em>). Pentru a efectua caracterizarea, s-a identificat secvența
            proteică a acestor alergene din bazele de date (allergen.org) și s-a realizat un construct pentru
            expresia acestora în celule procariote, <em>Escherichia coli</em>, și eucariote,{' '}
            <em>Spodoptera frugiperda (Sf9)</em>.
          </p>

          <figure className="inspired-figure">
            <img
              src="/images/hub-bioteh-transferuri-prototipiuri-inspired/model-3d-alergene-polen-ambrozia.jpg"
              alt="Model 3D al alergenelor din polenul de ambrozia"
              className="inspired-image"
            />
            <figcaption>
              Model 3D a alergenelor din polenul de ambrozia obținute în{' '}
              <a href="https://swissmodel.expasy.org/" target="_blank" rel="noopener noreferrer">
                https://swissmodel.expasy.org/
              </a>
            </figcaption>
          </figure>

          <p>Sistemul de expresie a fost ales în funcție de complexitatea structurală a proteinei.</p>

          <p>
            Constructul codificând proteina de interes a fost inserat în genomul celulelor procariote prin
            administrarea unui șoc termic. Apoi s-a adăugat un factor de transcripție pentru a induce expresia
            proteică. Pentru a produce proteinele în celule de insecte, constructul genic a fost introdus în
            celule <em>E. coli</em> pentru amplificare și obținerea unui bacmid cu secvența de interes. Acesta
            a fost apoi folosit pentru transfecția celulelor de insecte, amplificarea stocului baculoviral și
            producția de proteine. Proteinele au fost apoi izolate și purificate prin cromatografie de
            afinitate. Puritatea a fost verificată pe SDS-PAGE. Producția mai detaliată a proteinelor se
            regăsește în Zbircea et al. 2023, Tămaș et al. 2023, Grijincu et al. 2023.
          </p>

          <div className="inspired-process-grid">
            {inspiredProcessImages.map((item) => (
              <figure key={item.caption} className="inspired-process-card">
                <img src={item.src} alt={item.alt} className="inspired-process-image" />
                <figcaption className="inspired-process-caption">{item.caption}</figcaption>
              </figure>
            ))}
          </div>

          <figure className="inspired-figure">
            <img
              src="/images/hub-bioteh-transferuri-prototipiuri-inspired/pasii-parcursi-producere-alergene-recombinate.png"
              alt="Pașii parcurși în vederea producerii de alergene recombinate"
              className="inspired-image"
            />
            <figcaption>Pașii parcurși în vederea producerii de alergene recombinate</figcaption>
          </figure>

          <p>
            Aceste proteine au fost incluse într-un brevet pentru dezvoltarea unui kit de diagnostic al
            alergiei la polenul de ambrozia. Ele au fost folosite și pentru a obține anticorpi alergen-specifici
            care s-a folosit într-un al doilea brevet pentru detectarea alergenelor din polenul de ambrozia în
            mediu sau din extractele alergenice pentru diagnostic sau imunoterapie.
          </p>

          <h3>Brevete rezultate în urma proiectului INSPIRED</h3>
          <p>Panaitescu C., Chen KW., Păunescu V., Buzan RM.</p>
          <p>
            „Kit și metodă de utilizare pentru diagnosticul alergiei l la ambrozie”, nr.A /00615 /2020, data de
            depozit 30/09/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de
            invenție și informații tehnologice.
          </p>
          <p>Panaitescu C.,Chen KW., Buzan RM., Grijincu M., Zbircea LE.,Tamas TP., Haidar L.,Tanasie G., Hutu I.</p>
          <p>
            „Kit de testare cu anticorpi alergen-specifici pentru detecția și cuantificarea alergenelor din
            polenul de Ambrozia din mediu și din extracte alergenice diagnostice/terapeutice”, nr. A/
            00759/ 2020, data de depozit 19/11/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția
            de brevete de invenție și informații tehnologice.
          </p>

          <h3>Publicații rezultate în urma proiectului INSPIRED</h3>
          <ul className="inspired-publications">
            <li>
              Chen et al. 2018 - Ragweed Pollen Allergy: Burden, Characteristics, and Management of an Imported
              Allergen Source in Europe - <strong>Impact factor 2.932</strong> -{' '}
              <a href="https://karger.com/iaa/article/176/3-4/163/168362" target="_blank" rel="noopener noreferrer">
                https://karger.com/iaa/article/176/3-4/163/168362
              </a>
            </li>
            <li>
              Panaitescu et al. 2022 - Precision medicine in the allergy clinic: the application of component
              resolved diagnosis - <strong>Impact Factor: 4.47</strong> -{' '}
              <a href="https://www.tandfonline.com/doi/full/10.1080/1744666X.2022.2034501" target="_blank" rel="noopener noreferrer">
                https://www.tandfonline.com/doi/full/10.1080/1744666X.2022.2034501
              </a>
            </li>
            <li>
              Bumbăcea et al. 2022 - Mechanisms of allergen immunotherapy supporting its disease-modifying effect
              - <strong>Impact Factor: 4.19</strong> -{' '}
              <a href="https://www.futuremedicine.com/doi/abs/10.2217/imt-2021-0325" target="_blank" rel="noopener noreferrer">
                https://www.futuremedicine.com/doi/abs/10.2217/imt-2021-0325
              </a>
            </li>
            <li>
              Marusciac et al. 2021 - Symptom patterns and comparison of diagnostic methods in ragweed pollen
              allergy - <strong>Impact factor 2.751</strong> -{' '}
              <a href="https://www.spandidos-publications.com/10.3892/etm.2021.9957" target="_blank" rel="noopener noreferrer">
                https://www.spandidos-publications.com/10.3892/etm.2021.9957
              </a>
            </li>
            <li>
              Buzan et al. 2022 - Complex IgE sensitization patterns in ragweed allergic patients: Implications
              for diagnosis and specific immunotherapy - <strong>Impact Factor: 5.657</strong> -{' '}
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/clt2.12179" target="_blank" rel="noopener noreferrer">
                https://onlinelibrary.wiley.com/doi/full/10.1002/clt2.12179
              </a>
            </li>
            <li>
              Zbircea et al. 2023 - Relationship between IgE Levels Specific for Ragweed Pollen Extract, Amb a 1
              and Cross-Reactive Allergen Molecules - <strong>Impact factor 6.208</strong> -{' '}
              <a href="https://www.mdpi.com/1422-0067/24/4/4040" target="_blank" rel="noopener noreferrer">
                https://www.mdpi.com/1422-0067/24/4/4040
              </a>
            </li>
            <li>
              Tamaș et al. 2023 - Ragweed Major Allergen Amb a 11 Recombinant Production and Clinical
              Implications - <strong>Impact Factor: 6.064</strong> -{' '}
              <a href="https://www.mdpi.com/2218-273X/13/1/182" target="_blank" rel="noopener noreferrer">
                https://www.mdpi.com/2218-273X/13/1/182
              </a>
            </li>
            <li>
              Grijincu et al. 2023 - Physicochemical and immunological characterization of Amb a 12, a novel
              ragweed (<em>Ambrosia artemisiifolia</em>) pollen allergen - <strong>Impact factor 4.174</strong> -{' '}
              <a href="https://www.sciencedirect.com/science/article/pii/S0161589023000548" target="_blank" rel="noopener noreferrer">
                https://www.sciencedirect.com/science/article/pii/S0161589023000548
              </a>
            </li>
          </ul>

          <p>
            Rezultate acestei cercetări au fost și vor fi incluse în următoarele teze de doctorat sub
            coordonarea doamnei prof. univ. dr. Panaitescu Carmen:
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
                <tr>
                  <td>Tamaș Tudor Paul</td>
                  <td>Alergenul major Amb a 11 din polenul de ambrozia (<em>Ambrosia artemisiifolia</em>): expresie in sistem procariot si eucariot, aspecte imunoproteomice și corelatii clinice</td>
                </tr>
                <tr>
                  <td>Buzan Maria Roxana</td>
                  <td>Caracterizarea imunoproteomică a alergenelor recombinate din polenul de <em>Ambrosia artemisiifolia</em></td>
                </tr>
                <tr>
                  <td>Zbîrcea Lauriana-Eunice</td>
                  <td>Evaluarea reacției de reactivitate încrucișată și testarea relevanței clinice a unor alergene din <em>Ambrosia artemisiifolia</em></td>
                </tr>
                <tr>
                  <td>Grijincu Manuela</td>
                  <td>Caracterizarea unei noi proteine alergenice din familia liazelor din polenul de ambrozia (<em>Ambrosia artemisiifolia</em>) și evaluarea relevanței clinice a acesteia</td>
                </tr>
                <tr>
                  <td>Zimbru Razvan</td>
                  <td>Evaluarea markerilor inflamației alergice prin metode noninvazive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-cta">
            <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-primary">
              Înapoi la Prototipuri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
