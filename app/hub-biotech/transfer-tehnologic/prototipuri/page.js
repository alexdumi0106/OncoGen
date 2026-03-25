import Link from 'next/link';

const prototypeItems = [
    {
        title: 'INSPIRED',
        href: '/hub-biotech/transfer-tehnologic/prototipuri/inspired',
    },
    {
        title: 'CAR-NK',
        href: '/hub-biotech/transfer-tehnologic/prototipuri/car-nk',
    },
    {
        title: 'BIOPRINTARE',
        href: '/hub-biotech/transfer-tehnologic/prototipuri/bioprintare',
    },
];

export default function PrototipuriPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasa</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
                    <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link> / <span>Prototipuri</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Prototipuri</h1>
                    <p>Prototipuri realizate in cadrul colectivului OncoGen.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="prototype-hero-image-wrap">
                        <img
                            src="/images/prototipuri-poza-2.jpg"
                            alt="Structuri moleculare asociate prototipurilor din cadrul OncoGen"
                            className="prototype-hero-image"
                        />
                    </div>

                    <div className="prototype-links-section">
                        <h2 className="prototype-links-title">Prototipuri realizate in cadrul colectivului OncoGen:</h2>
                        <div className="prototype-links-row">
                            {prototypeItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="prototype-pill-btn"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="section-cta">
                        <Link href="/hub-biotech/transfer-tehnologic" className="btn btn-primary">
                            Înapoi la Transfer Tehnologic
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
