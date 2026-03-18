import Link from 'next/link';

export default function LaboratorCitometrieFluxPage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator citometrie în flux</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Laborator citometrie în flux</h1>
					<p>Analiză și sortare celulară, profilare imunologică, cuantificarea populațiilor celulare.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Laboratorul este conceput pentru cercetarea cancerului (celule tumorale circulante și celule provenite din tumori solide, celule stem tumorale), pentru cercetarea celulelor stem (embrionare, iPS, hematopoietice și mezenchimale), precum și pentru domeniile imunologie, neuroștiințe și cardiovascular.</li>
							<li>Activitățile se aliniază cu cele ale departamentelor de cultură celulară și medicină experimentală care furnizează probe biologice.</li>
							<li>Dotat cu echipamente de ultimă generație, laboratorul efectuează proceduri pentru identificarea celor mai multe tipuri de celule umane și animale și pentru sortarea populațiilor celulare rare din probe biologice lichide sau solide.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Determinarea conținutului total de ADN (analiza ciclului celular, cinetică celulară, proliferare)</li>
							<li>Analiza variației numărului de copii ADN</li>
							<li>Exprimarea și localizarea proteinelor celulare</li>
							<li>Analiza modificărilor proteinelor și sortarea populațiilor celulare</li>
							<li>Determinarea antigenelor de suprafață (markeri CD)</li>
							<li>Evidențierea antigenelor intracelulare (citokine, mediatori secundari etc.)</li>
							<li>Evidențierea și analiza antigenelor nucleare</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Personal</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Coordonator: Florina Bojin</li>
							<li>Calin Tatu</li>
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
							<li>BD FACSAria III Cell Sorter (BD Biosciences)</li>
							<li>FACSCalibur (BD Biosciences)</li>
							<li>MACSQuant Analyzer 10 (Miltenyi Biotec)</li>
							<li>Frigidere și congelatoare (Thermo Scientific)</li>
							<li>Hote cu flux laminar 1.8M (Thermo Scientific)</li>
							<li>Centrifuge de laborator (Thermo Scientific)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
