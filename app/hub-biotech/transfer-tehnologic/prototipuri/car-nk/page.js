'use client';

import Link from 'next/link';

export default function CarNkPage() {
  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/hub-biotech">Hub Biotehnologii</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link href="/hub-biotech/transfer-tehnologic/prototipuri">Prototipuri</Link>
        <span>&nbsp;/&nbsp;</span>
        <span>CAR-NK</span>
      </nav>

      {/* Main Section */}
      <section className="content-section">
        <h1>CAR-NK</h1>
        
        <div className="section-content">
          <p>
            Conținut despre proiectul CAR-NK va fi adăugat aici.
          </p>
        </div>

        {/* CTA Back Button */}
        <div className="section-cta-buttons">
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-secondary">
            ← Înapoi la Prototipuri
          </Link>
        </div>
      </section>
    </div>
  );
}
