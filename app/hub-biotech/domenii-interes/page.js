import Link from 'next/link';

export default function DomeniiInteresPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> / <span>Domenii de Interes</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Domenii de Interes / Nișe Potențiale</h1>
                    <p>
                        Nișe potențiale în biotehnologii, bioinformatică și medicină translațională.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        OncoGen își propune să devină un hub regional pentru biotehnologii medicale avansate,
                        bioinformatică și medicină translațională.
                    </p>
                    <div className="content-card description-card">
                        <ul>
                            <li>
                                Interconectarea domeniilor de expertiză: sănătate, biotehnologii,
                                bioinformatică, inteligență artificială, e-sănătate, biobanking,
                                biosecuritate și calitatea vieții.
                            </li>
                            <li>
                                Dezvoltarea de competențe valorificabile pentru fabricarea de produse de
                                diagnostic și terapeutice avansate (biofarmaceutice, terapii genice și
                                celulare).
                            </li>
                            <li>
                                Atragerea de investiții din partea companiilor din sectorul farmaceutic,
                                științele vieții și biotehnologii.
                            </li>
                        </ul>
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
