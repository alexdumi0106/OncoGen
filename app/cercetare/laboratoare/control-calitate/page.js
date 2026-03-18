import Link from 'next/link';

export default function LaboratorControlCalitatePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Laborator control calitate</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Laborator Control al Calității (QC/GLP)</h1>
                    <p>Controlul calității produselor biologice conform standardelor GLP, testare și validare</p>
                </div>
            </section>

            <section className="content-section lab-detail-section">
                <div className="container">
                    <h2>Scurtă descriere</h2>
                    <div className="content-card description-card lab-description-card">
                        <ul className="lab-description-list">
                            <li>În cadrul acestui compartiment, sunt dezvoltate teste de control al calității aplicate în analiza tuturor materialelor și reactivilor a căror utilizare este considerată critică în producerea și depozitarea materialelor și produselor finite.</li>
                            <li>Laboratorul este esențial pentru stabilirea procedurilor de monitorizare a produselor dedicate utilizării clinice și pentru controlul calității culturilor de celule.</li>
                            <li>Se propune validarea tuturor procedurilor de lucru, inclusiv durata și condițiile de transport a materialelor biologice, protocoalele de cultivare a diverselor tipuri de celule, calitatea și verificarea aseptică a reactivilor, procedurilor și produselor finale.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section bg-light lab-detail-section">
                <div className="container">
                    <h2>Principalele activități și tehnici</h2>
                    <div className="content-card description-card lab-list-card">
                        <ul>
                            <li>Teste de sterilitate</li>
                            <li>Stabilirea numărului de celule</li>
                            <li>Teste de diferențiere celulară</li>
                            <li>Teste citogenetice</li>
                            <li>Teste de detectare a markerilor celulari (fluxcitometric și/sau imunohistochimic)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section lab-detail-section">
                <div className="container">
                    <h2>Personal</h2>
                    <div className="content-card description-card lab-list-card">
                        <ul>
                            <li>Coordonator: Simona Anghel, Biolog Principal</li>
                            <li>Tehnician laborator: Marieta Neață</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section bg-light lab-detail-section">
                <div className="container">
                    <h2>Echipament</h2>
                    <div className="content-card description-card lab-list-card">
                        <ul className="lab-equipment-list">
                            <li>Hote cu flux laminar</li>
                            <li>Frigidere</li>
                            <li>Microscoape</li>
                            <li>Centrifuge</li>
                            <li>Incubator CO2</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}