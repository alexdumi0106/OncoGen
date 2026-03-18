import Link from 'next/link';

export default function CercetarePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Cercetare</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Domenii de Cercetare</h1>
                    <p>Cercetare fundamentală în imunologie, biologie moleculară și terapii avansate</p>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <a href="#cercetare-fundamentala" className="hub-card">
                            <h3>Cercetare Fundamentală</h3>
                            <p>Principalele domenii de interes științific ale OncoGen</p>
                        </a>
                        <a href="#aplicabilitate" className="hub-card">
                            <h3>Aplicabilitate Clinică</h3>
                            <p>Cum sunt aplicate rezultatele cercetării în practică</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="cercetare-fundamentala" className="content-section">
                <div className="container">
                    <h2>Cercetare Fundamentală</h2>
                    <p className="section-intro">
                        Prin integrarea cunoștințelor de imunologie, biologie moleculară,
                        biochimie, inginerie genetică, bioinformatică și alte domenii,
                        principalele domenii de interes pentru noi sunt:
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Terapii Avansate în Cancer</h3>
                            <p>Biologia celulelor tumorale.</p>
                        </div>
                        <div className="content-card">
                            <h3>Medicină Regenerativă</h3>
                            <p>Rolul celulelor stem în medicina regenerativă.</p>
                        </div>
                        <div className="content-card">
                            <h3>Sănătate și Factori de Mediu</h3>
                            <p>Cercetare privind influența factorilor de mediu asupra sănătății.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aplicabilitate" className="content-section bg-light">
                <div className="container">
                    <h2>Aplicabilitatea Rezultatelor Cercetării în Practica Clinică</h2>
                    <p className="section-intro">
                        Abordarea terapiilor inovatoare și personalizate (terapii avansate și
                        produse medicale) poate fi aplicată în:
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Oncologie</h3>
                            <p>Terapii avansate și produse medicale personalizate aplicate în tratamentul cancerului.</p>
                        </div>
                        <div className="content-card">
                            <h3>Medicină Regenerativă</h3>
                            <p>Soluții inovatoare bazate pe celule stem și inginerie tisulară.</p>
                        </div>
                        <div className="content-card">
                            <h3>Alergologie</h3>
                            <p>Alergene recombinate și imunoterapii personalizate pentru afecțiuni alergice.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
