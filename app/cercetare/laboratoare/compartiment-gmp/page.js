import Link from 'next/link';
import Image from 'next/image';

export default function CompartimentGmpPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Compartiment GMP</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Compartiment GMP</h1>
          <p>Microproducție în condiții GMP pentru materiale biologice și produse terapeutice avansate.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
            <Image 
              src="/images/Laboratoare-GMP.jpg" 
              alt="Compartiment GMP - Clean Room Laboratory" 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
          <div className="content-card description-card lab-description-card">
            <ul className="lab-description-list">
              <li>Suprafața de 150 mp îndeplinește toate cerințele pentru prelucrarea materialelor biologice în condiții GMP (bune practici de fabricație) specifice industriei medicamentoase și altor produse terapeutice.</li>
              <li>Zona include 3 camere de clasă A, plasate în încăperi din clasa B (ISO 5), unde condițiile de mediu sunt monitorizate permanent: numărul de particule, încărcarea bacteriană, temperatura, umiditatea, presiunea și performanța filtrării aerului de tip HEPA.</li>
              <li>Accesul este strict restricționat pentru personalul de specialitate.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <p>Standardele extrem de ridicate ale acestor spații asigură următoarele aplicații:</p>
            <ul>
              <li>Imunoterapie antitumorală</li>
              <li>Crearea de combinații terapeutice personalizate pentru pacienții cu cancer</li>
              <li>Terapii inovatoare în bolile imune</li>
              <li>Izolarea și extinderea tipurilor de celule cu aplicare în medicina regenerativă în condiții controlate</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Echipament</h2>
          <div className="content-card description-card lab-list-card">
            <ul className="lab-equipment-list">
              <li>Hote cu flux laminar</li>
              <li>Incubatoare CO2</li>
              <li>Frigidere și congelatoare</li>
              <li>Centrifuge</li>
              <li>Separator celular clinic CliniMACS</li>
              <li>Uscătoare de congelare</li>
              <li>Mașină de prelucrare pentru țesut osos</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
