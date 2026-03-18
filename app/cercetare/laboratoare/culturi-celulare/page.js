import Link from 'next/link';

export default function LaboratorCulturiCelularePage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator culturi celulare</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Laborator culturi celulare</h1>
					<p>Cultură celulară eucariotă și procariotă, menținerea liniilor celulare tumorale și stem.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Laboratoarele sunt complet echipate pentru cultivarea in vitro a celulelor și pentru realizarea unei game largi de experimente.</li>
							<li>Personalul care lucrează în laboratoarele de cultură celulară este foarte bine pregătit, cu o experiență de peste zece ani în domeniul biologiei celulare, producția și cultivarea liniilor celulare și dezvoltarea tehnicilor de citotoxicitate.</li>
							<li>Toate tipurile de celule pot fi cultivate, inclusiv celule primare, celule stem mezenchimale și hematopoietice, precum și celule stem pluripotente.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Culturi de celule primare (celule stem hematopoietice, celule stem mezenchimale, celule endoteliale, celule dendritice etc.)</li>
							<li>Diferențierea celulelor stem în diferite tipuri de celule</li>
							<li>Izolarea și caracterizarea celulelor tumorale</li>
							<li>Culturi de celule stem embrionare</li>
							<li>Cultivarea și analizarea diferitelor linii celulare (normale și tumorale)</li>
							<li>Extinderea in vitro a celulelor pentru terapii celulare</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Personal</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Coordonator: Alexandra Ivan</li>
							<li>Simona Anghel</li>
							<li>Mirabela Cristea</li>
							<li>Ada Cean</li>
							<li>Camelia Oprean</li>
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
							<li>Hote cu flux laminar</li>
							<li>Incubatoare CO2</li>
							<li>Centrifuge de laborator</li>
							<li>Dispozitive de sortare a celulelor magnetice (MACS Miltenyi Biotec, celule stem)</li>
							<li>Dispozitiv de electroporație pentru transfecții (Amaxa, Lonza)</li>
							<li>Microscop pentru culturi de celule cu fluorescență (Zeiss)</li>
							<li>Microscop cu brațe de micromanipulare (Narishige)</li>
							<li>Microscop video pentru experimente time-lapse (Zeiss)</li>
							<li>xCELLigence (ACEA Bioscience)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
