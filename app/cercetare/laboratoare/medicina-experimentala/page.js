import Link from 'next/link';

export default function LaboratorMedicinaExperimentalaPage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator medicină experimentală</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Laborator medicină experimentală</h1>
					<p>Studii preclinice pe modele animale, validare in vivo a candidaților terapeutici.</p>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Scurtă descriere</h2>
					<div className="content-card description-card lab-description-card">
						<ul className="lab-description-list">
							<li>Acest departament este zona de testare in vivo unde sunt efectuate studii pe organe izolate, modele animale pentru diferite tipuri de tumori, studii asupra fibrelor musculare izolate, spirometrie, model Langendorff și studii de imagistică in vivo.</li>
							<li>Biomatricea poate fi obținută prin proceduri de decelularizare pentru experimentele de regenerare a țesuturilor.</li>
							<li>Compartimentul este echipat cu biobază pentru animale mici experimentale, sală de operație, sisteme complexe de monitorizare intraoperatorie și sisteme de sprijin vital în timpul intervențiilor chirurgicale, precum și echipamente dedicate medicinei experimentale.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light lab-detail-section">
				<div className="container">
					<h2>Principalele activități și tehnici</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Modele tumorale in vivo și studii imagistice in vivo</li>
							<li>Obținerea biomatricii pentru regenerarea țesuturilor</li>
							<li>Experimente de toxicologie in vivo</li>
							<li>Experimente pe inimă izolată - model Langendorff; studii de spirometrie</li>
							<li>Studii pe organ izolat</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section lab-detail-section">
				<div className="container">
					<h2>Personal</h2>
					<div className="content-card description-card lab-list-card">
						<ul>
							<li>Coordonator: Ada Cean</li>
							<li>Alexandra Ivan</li>
							<li>Mirabela Cristea</li>
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
							<li>Omogenizator tisular</li>
							<li>Aparate pentru studii pe fibre izolate</li>
							<li>Monitor complex de funcții vitale</li>
							<li>Aparat mic de ventilație pentru animale</li>
							<li>Pompă peristaltică</li>
							<li>Sistem de imagistică in vivo Hamamatsu Aequoria</li>
							<li>Electrod de oxigen Clark HANSATECH Oxygraf</li>
							<li>OROBOROS Oxygraph-2k</li>
							<li>Dispozitiv Langendorff</li>
							<li>Analizor complex Apollo 4000 cu 4 canale cu electrozi asociați</li>
							<li>Dispozitiv de prelevare a presiunii de endocavitate cu fibră optică</li>
							<li>Placă pentru achiziția de semnale biologice cu software de achiziție</li>
							<li>Monitor complex al funcțiilor vitale: electrocardiogramă, ritm respirator, temperatură, presiune invazivă, electroencefalogramă, indice bispectral și consumabile</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
