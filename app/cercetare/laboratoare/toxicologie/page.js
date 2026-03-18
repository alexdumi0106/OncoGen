import Link from 'next/link';

export default function LaboratorToxicologiePage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator toxicologie</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Laborator toxicologie</h1>
					<p>Evaluarea toxicității compușilor și produselor biologice în modele in vitro și in vivo.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Laboratorul oferă diagnosticul de intoxicații acute și cronice cu substanțe chimice necunoscute.</li>
							<li>Folosind probe biologice precum sânge integral, ser și urină, sunt identificate substanțe organice toxice (inclusiv droguri, stupefiante, pesticide) și metale toxice.</li>
							<li>Sistemele cromatografice HPLC și GC de înaltă performanță, echipate cu spectrometrie de masă, sunt utilizate pentru identificarea moleculelor organice, iar pentru analize metalice este utilizat un spectrofotometru de absorbție atomică.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Prelevarea probelor biologice: sânge întreg, ser, probe de păr, urină, salivă, probe de țesut</li>
							<li>Prelucrarea probelor prin purificare chimică</li>
							<li>Identificarea specifică a moleculelor organice sau metalelor, precum și analiza chimică completă</li>
							<li>Achiziția de date și identificarea moleculară a compușilor țintă necunoscuți pentru un diagnostic toxicologic precis</li>
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
							<li>Sistem HPLC-MS cu detector de masă (Bruker)</li>
							<li>Sistem HPLC cu detector UV (Agilent)</li>
							<li>GC-MS și GC-FID (Agilent și Bruker)</li>
							<li>Spectrofotometru de absorbție atomică (Bruker)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
