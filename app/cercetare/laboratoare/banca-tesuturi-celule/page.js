import Link from 'next/link';

export default function BancaTesuturiCeluleUmanePage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Banca de țesuturi și celule umane</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Banca de țesuturi și celule umane</h1>
					<p>Colectare, procesare, crioconservare și stocare de probe biologice umane conform normelor europene.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Banca de celule și țesuturi are o suprafață de 76 mp și este dedicată depozitării pe termen lung a celulelor stem hematopoietice din diverse surse, a celulelor primare (celule stem mezenchimale, celule tumorale), liniilor celulare și fragmentelor de țesut tumoral în azot lichid.</li>
							<li>Facilitățile de crioprezervare sunt prevăzute și pentru stocarea celulelor și țesuturilor pe durată scurtă și medie la -80 °C.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Procese de crioprezervare adaptate fiecărui tip celular</li>
							<li>Procese de decongelare adaptate fiecărui tip de celulă</li>
							<li>Numărarea celulelor</li>
							<li>Analiza viabilității celulare</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Personal</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Coordonator: Carmen Tatu</li>
							<li>Simona Anghel</li>
							<li>Mirabela Cristea</li>
							<li>Ada Cean</li>
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
							<li>Sistem programabil pentru crioconservarea materialelor biologice (Thermo Scientific, Cryomed)</li>
							<li>Stocare celule cu unitate de control de diferite capacități fixe și mobile (Thermo Scientific, Cryoplus 2)</li>
							<li>Rezervoare de diferite capacități fixe și mobile (Chart.IND, Euro Cyl 8120)</li>
							<li>Unități de răcire automate</li>
							<li>Congelatoare -80 °C</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
