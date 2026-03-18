import Link from 'next/link';

export default function LaboratorImunofenotiparePage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator imunofenotipare</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Laborator imunofenotipare</h1>
					<p>Caracterizarea fenotipică a populațiilor celulare prin markeri de suprafață și intracelulari.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Laboratorul de imunofenotipare este conceput pentru a ajuta la diagnosticarea și clasificarea leucemiilor sau a limfoamelor și pentru a detecta și evalua reziduurile de leucocite tumorale după tratamentul bolii.</li>
							<li>Probele biologice (sângele venos periferic, biopsiile tisulare, fluidele biologice) sunt analizate folosind diferite blocuri de anticorpi, standardizate pentru tipuri specifice de patologii hematologice.</li>
							<li>Imunofenotipizarea este însoțită de determinarea hemoleucogramei, pe baza căreia se realizează selecția antigenelor vizate de analiza citometrică în flux.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Prepararea probei și etichetarea celulelor cu anticorpi monoclonali cuplați cu fluorocrom</li>
							<li>Identificarea și cuantificarea populațiilor de celule pe baza repertoriului unic de markeri celulari</li>
							<li>Efectuarea de teste pentru apoptoză, ciclul celular, proliferarea celulelor și detectarea citokinelor</li>
							<li>Determinarea formulei de leucocite</li>
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
							<li>Florina Bojin</li>
							<li>Oana Gavriliuc</li>
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
							<li>BD FACSVerse flow-citometru (BD Biosciences)</li>
							<li>Dispozitiv de hematologie semi-automat Rayto RT-7600 / analizor de hematologie automată</li>
							<li>Frigidere GLP (Thermo Scientific)</li>
							<li>Hote cu flux laminar 1.8M (Thermo Scientific)</li>
							<li>Centrifuge de laborator (Thermo Scientific)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
