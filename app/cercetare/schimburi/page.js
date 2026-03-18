import Link from 'next/link';

const students = [
	{ name: 'Ming-Yi Tsai', university: 'Universitatea de Medicină din Taipei, Taiwan' },
	{ name: 'Jakub Michalak', university: 'Universitatea din Opole, Polonia' },
	{ name: 'Teodor Sefcovic', university: 'Universitatea Masaryk din Brno, Republica Cehă' },
	{ name: 'Marina-Claudia-Cătălina Miron', university: 'Informatică Aplicată, Universitatea de Vest Timișoara, România' },
	{ name: 'Raul-Mihai Rădulescu', university: 'Inteligență Artificială, Universitatea de Vest Timișoara, România' },
	{ name: 'Biro Barna', university: 'Facultatea de Medicină și Farmacie Oradea, România' },
];

export default function SchimburiPage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <span>Schimburi de experiență</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Schimburi de experiență</h1>
					<p>Studenți și tineri cercetători care au efectuat stagii de cercetare la OncoGen</p>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<div className="content-card description-card intro-card">
						<ul className="intro-bullets">
							<li>
								<p className="section-intro">
									La OncoGen încurajăm și sprijinim tinerii cercetători să își înceapă aventura în lumea cercetării medicale,
									oferindu-le suportul necesar pentru a-și dezvolta ideile și a face descoperiri inovatoare. Suntem dedicați
									în a crea un mediu propice în care acești tineri să-și poată exprima creativitatea și să-și valorifice
									potențialul maxim.
								</p>
							</li>
							<li>
								<p className="section-intro">
									În efortul nostru de a revoluționa domeniul medical, punem la dispoziție resursele, expertiza și
									infrastructura necesară pentru a-i încuraja pe tinerii cercetători să facă primii pași în cariera lor
									promițătoare. Credem în puterea noilor generații de a transforma lumea medicală și suntem mândri să fim
									alături de ei în acest drum către progres și inovație.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light">
				<div className="container">
					<h2>Studenți care au efectuat stagii de schimb de experiență</h2>
					<div className="committee-list">
						{students.map((student) => (
							<div key={student.name} className="committee-member">
								<h4>{student.name}</h4>
								<p>{student.university}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<h2>Impresii după stagii</h2>
					<p className="section-intro">
						Iată impresiile acestora după ce au luat parte la activitățile științifice din cadrul laboratoarelor noastre:
					</p>

					<div className="content-grid">
						<div className="content-card">
							<h3>Ming-Yi Tsai</h3>
							<p><em>Universitatea de Medicină din Taipei, Taiwan — IFMSA SCORE — 08.2023</em></p>
							<p>
								Am lucrat pe proiectul „The Impact Ragweed Pollen and Dust-Mite Allergens Have on the Respiratory
								Mucosa." Am avut o înțelegere mai profundă a ambrozie, mecanismului imun și imunoterapiei. Am avut
								oportunitatea de a mă alătura procesului de la designul experimentului până la analiza datelor.
							</p>
							<p>
								Îmi exprim cea mai profundă apreciere tutorilor mei, Dr. Bunu, Roxana, Lauriana, Manuela și
								Centrului OncoGen. Vă mulțumesc pentru că ați explicat întotdeauna totul cu răbdare și m-ați
								încurajat să pun întrebări.
							</p>
							<p><strong>Mulțumesc!</strong></p>
						</div>
					</div>

					<div className="section-cta">
						<Link href="/young-researchers" className="btn btn-primary">Young Researchers →</Link>
					</div>
				</div>
			</section>
		</>
	);
}
