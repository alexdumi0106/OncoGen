import Link from 'next/link';

export default function SustinereCercetareDoctoralPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> / <span>Susținere Cercetare Doctorală</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Susținere Cercetare Doctorală</h1>
                    <p>
                        Mentorat, asistență și infrastructură performantă pentru doctoranzi.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        OncoGen asigură mentorat, asistență și condiții de lucru performante pentru derularea studiilor
                        doctorale în domeniul biotehnologiilor.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Cadru academic și științific</h3>
                            <ul>
                                <li>Coordonare științifică în arii relevante pentru biotehnologii medicale</li>
                                <li>Acces la infrastructură de cercetare modernă și platforme interdisciplinare</li>
                                <li>Sprijin pentru dezvoltarea tezelor cu componentă aplicativă</li>
                            </ul>
                        </div>
                        <div className="content-card">
                            <h3>Comunitate doctorală</h3>
                            <p>
                                Programul include atât doctoranzi în curs, cât și doctoranzi absolvenți, cu rezultate
                                orientate spre cercetare relevantă clinic și translațională.
                            </p>
                        </div>
                    </div>
                    <div className="section-cta">
                        <a
                            href="https://oncogen.ro/ro/hub-biotehnologii/sustinere-cercetare-doctorala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Vezi detalii Susținere Cercetare Doctorală
                        </a>
                        <Link href="/hub-biotech" className="btn btn-primary">
                            Înapoi la Hub Biotehnologii
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
