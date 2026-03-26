import os

base = '/vercel/share/v0-project/app/noutati'

os.makedirs(os.path.join(base, 'anunturi'), exist_ok=True)
os.makedirs(os.path.join(base, 'articole'), exist_ok=True)

noutati_page = """import Link from 'next/link';

export const metadata = {
    title: 'Noutati | OncoGen',
    description: 'Anunturi si articole din activitatea Centrului OncoGen.',
};

export default function NoutatiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasa</Link> / <span>Noutati</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Noutati</h1>
                    <p>Anunturi si articole din activitatea Centrului OncoGen.</p>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <Link href="/noutati/anunturi" className="hub-card">
                            <h3>Anunturi</h3>
                            <p>Comunicatele si anunturile oficiale ale Centrului OncoGen.</p>
                        </Link>
                        <Link href="/noutati/articole" className="hub-card">
                            <h3>Articole</h3>
                            <p>Articole si materiale publicate de echipa OncoGen.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
"""

anunturi_page = """import Link from 'next/link';

export const metadata = {
    title: 'Anunturi | OncoGen',
    description: 'Comunicatele si anunturile oficiale ale Centrului OncoGen.',
};

export default function AnunturiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasa</Link> /{' '}
                    <Link href="/noutati">Noutati</Link> / <span>Anunturi</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Anunturi</h1>
                    <p>Comunicatele si anunturile oficiale ale Centrului OncoGen.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        Aceasta pagina va contine anunturile si comunicatele oficiale ale
                        Centrului de Terapii Genice si Celulare OncoGen.
                    </p>
                    <div className="section-cta">
                        <Link href="/noutati" className="btn btn-primary">
                            Inapoi la Noutati
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
"""

articole_page = """import Link from 'next/link';

export const metadata = {
    title: 'Articole | OncoGen',
    description: 'Articole si materiale publicate de echipa OncoGen.',
};

export default function ArticolePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasa</Link> /{' '}
                    <Link href="/noutati">Noutati</Link> / <span>Articole</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Articole</h1>
                    <p>Articole si materiale publicate de echipa OncoGen.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        Aceasta pagina va contine articolele si materialele publicate de
                        cercetatorii si specialistii Centrului OncoGen.
                    </p>
                    <div className="section-cta">
                        <Link href="/noutati" className="btn btn-primary">
                            Inapoi la Noutati
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
"""

with open(os.path.join(base, 'page.js'), 'w', encoding='utf-8') as f:
    f.write(noutati_page)

with open(os.path.join(base, 'anunturi', 'page.js'), 'w', encoding='utf-8') as f:
    f.write(anunturi_page)

with open(os.path.join(base, 'articole', 'page.js'), 'w', encoding='utf-8') as f:
    f.write(articole_page)

print("All 3 noutati pages created successfully.")
print(f"  - {base}/page.js")
print(f"  - {base}/anunturi/page.js")
print(f"  - {base}/articole/page.js")
