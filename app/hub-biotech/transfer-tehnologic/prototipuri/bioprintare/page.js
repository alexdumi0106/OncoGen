'use client';

import Link from 'next/link';

export default function BioPrintarePage() {
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
        <span>BIOPRINTARE</span>
      </nav>

      {/* Main Section */}
      <section className="content-section">
        <h1>BIOPRINTARE</h1>
        
        <div className="section-content">
          <p>
            Conținut despre proiectul BIOPRINTARE va fi adăugat aici.
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
