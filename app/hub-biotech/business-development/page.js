import Link from 'next/link';

export default function BusinessDevelopmentPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> / <span>Business Development</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Business Development</h1>
                    <p>
                        Parteneriate cu industrie, IMM-uri inovative și ecosistemul de life sciences.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        OncoGen promovează colaborarea cu parteneri industriali și IMM-uri inovative pentru a accelera
                        transformarea ideilor în produse și servicii cu impact în sănătate.
                    </p>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Identificare oportunitate</h3>
                            <p>Definirea ideii, a nevoii de piață și a direcției de dezvoltare tehnologică.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Validare concept</h3>
                            <p>Testare tehnică folosind infrastructura și echipa multidisciplinară OncoGen.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Scalare și transfer</h3>
                            <p>Pregătirea prototipului pentru transfer tehnologic și implementare industrială.</p>
                        </div>
                    </div>
                    <div className="section-cta">
                        <Link href="/hub-biotech" className="btn btn-primary">
                            Înapoi la Hub Biotehnologii
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
