import Link from 'next/link';

const publications = [
	{
		year: '2023',
		title: 'Design of a Synthetic Long Peptide Vaccine Targeting HPV-16 and-18 Using Immunoinformatic Methods.',
		journal: 'Pharmaceutics. 2023, 15, 7',
		doi: 'https://www.mdpi.com/1999-4923/15/7/1798',
		authors: 'Tirziu, A., Avram S., Mada L., Crisan-Vida M., Popovici C., Popovici D., Faur C., Duda-Seiman C., Paunescu V., Vernic, C.'
	},
	{
		year: '2023',
		title: 'Inhibitory effects of lidocaine on colon carcinoma progression in a rat model: a pilot study.',
		journal: 'British Journal of Anesthesia, 2023, 131, 5: E163-E165',
		doi: 'https://www.bjanaesthesia.org.uk/article/S0007-0912(23)00440-3/fulltext',
		authors: 'Habago S.D., Ordodi V., Bojin F., Vesa S.C., Moldovan V., Paunescu V., Ionescu D.'
	},
	{
		year: '2023',
		title: 'Relationship between IgE Levels Specific for Ragweed Pollen Extract, Amb a 1 and Cross-Reactive Allergen Molecules.',
		journal: 'International Journal of Molecular Sciences. 2023; 24(4):4040',
		doi: 'https://www.mdpi.com/1422-0067/24/4/4040',
		authors: 'Zbîrcea L-E., Buzan M-R., Grijincu M., Babaev E., Stolz F., Valenta R., Păunescu V., Panaitescu C., Chen K-W.'
	},
	{
		year: '2023',
		title: 'Ragweed Major Allergen Amb a 11 Recombinant Production and Clinical Implications.',
		journal: 'Biomolecules, 2023, 13(1), 182',
		doi: 'https://www.mdpi.com/2218-273X/13/1/182',
		authors: 'Tamaș T.P., Buzan R.M., Zbîrcea L.E., Cotarcă M.D., Grijincu M., Păunescu V., Panaitescu C., Chen C.W.'
	},
	{
		year: '2022',
		title: 'Aristolochic acid I as an emerging biogenic contaminant involved in chronic kidney diseases: A comprehensive review.',
		journal: 'Chemosphere, 2022, Feb 26; 297:134111',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/35231474/',
		authors: 'Lukinich-Gruia A.T., Nortier J., Pavlović N.M., Milovanović D., Popović M., Drăghia L.P., Păunescu V., Tatu C.A.'
	},
	{
		year: '2022',
		title: 'Art v 1 IgE epitopes of patients and humanized mice are conformational.',
		journal: 'J Allergy Clin Immunol., 2022',
		doi: 'https://doi.org/10.1016/j.jaci.2022.04.031',
		authors: 'Zabel M., Weber M., Kratzer B., et al., Panaitescu C.B., et al., Valenta R., Pickl W.F.'
	},
	{
		year: '2022',
		title: 'Stem cell-derived extracellular vesicles reduce the expression of molecules involved in cardiac hypertrophy.',
		journal: 'Frontiers in Pharmacology, 2022; 13: 1003684',
		doi: 'https://www.frontiersin.org/articles/10.3389/fphar.2022.1003684/full',
		authors: 'Constantin A., Comarita I.K., Alexandru N., Filippi A., Bojin F., Gherghiceanu M., Vilcu A., Nemecx M., Niculescu L.S., Paunescu V., Georgescu A.'
	},
	{
		year: '2022',
		title: 'Cytotoxic T-Cell-Based Vaccine against SARS-CoV-2: A Hybrid Immunoinformatic Approach.',
		journal: 'Vaccines, 2022; 10(2): 218',
		doi: 'https://www.mdpi.com/2076-393X/10/2/218',
		authors: 'Tirziu A., Paunescu V.'
	},
	{
		year: '2022',
		title: 'Decellularized Extracellular Matrix Scaffolds for Cardiovascular Tissue Engineering: Current Techniques and Challenges.',
		journal: 'International Journal of Molecular Sciences, 2022; 23(21): 13040',
		doi: 'https://www.mdpi.com/1422-0067/23/21/13040',
		authors: 'Barbulescu G.I., Bojin F.M., Ordodi V.L., Goje I.D., Barbulescu A.S., Paunescu V.'
	},
	{
		year: '2021',
		title: '3D Bioprinting of model tissue that mimic the tumor microenvironment.',
		journal: 'Micromachines, 2021; 12: 535',
		doi: 'https://www.mdpi.com/2072-666X/12/5/535',
		authors: 'Bojin F., Robu A., Bejenariu M.I., Ordodi V., Olteanu E., Cean A., Popescu R., Neagu M., Gavriliuc O., Neagu A., Arjoca S., Paunescu V.'
	},
	{
		year: '2021',
		title: 'Analysis of Polycyclic Aromatic Hydrocarbons and Phthalate Esters in Soil and Food Grains from the Balkan Peninsula.',
		journal: 'Environmental Science & Technology., 2021',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/34125507/',
		authors: 'Wanlin Guo, Jiayin Zhang, Zhihan Sun, William H. Orem, Calin A. Tatu, Niko S. Radulović, Dragan Milovanović, Nikola M. Pavlović, Wan Chan'
	},
	{
		year: '2020',
		title: 'The role of mobile health technologies in allergy care: An EAACI position paper.',
		journal: 'Allergy. 2020; 75(2): 259-272',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/31230373/',
		authors: 'Matricardi P.M., Dramburg S., Alvarez-Perea A., ..., Panaitescu C., et al.'
	},
	{
		year: '2020',
		title: 'Toward personalization of asthma treatment according to trigger factors.',
		journal: 'J Allergy Clin Immunol. 2020; 145(6): 1529-1534',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/32081759/',
		authors: 'Niespodziana K., Borochova K., Pazderova P., ..., Panaitescu C., et al.'
	},
	{
		year: '2019',
		title: 'Allergic Rhinitis and its Impact on Asthma (ARIA) Phase 4 (2018): Change management in allergic rhinitis and asthma multimorbidity using mobile technology.',
		journal: 'Journal of Allergy and Clinical Immunology. 2019; 143, 3: 864-879',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/30273709/',
		authors: 'Bousquet J., Hellings P.W., Agache I., the Mobile Airways Sentinel network M (Panaitescu C. et al).'
	},
	{
		year: '2018',
		title: 'Ragweed Pollen Allergy: Burden, Characteristics, and Management of an Imported Allergen Source in Europe.',
		journal: 'International archives of allergy and immunology, 2018, Vol.176(3-4), pp.163-180',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/29788026/',
		authors: 'Chen Kuan-Wei, Marusciac L., Tamas P.T., Valenta R., Panaitescu (Bunu) C.'
	},
	{
		year: '2014',
		title: 'Enucleation: a possible mechanism of cancer cell death.',
		journal: 'J Cell Mol Med, 2014; 18(6): 962-965',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/24629135/',
		authors: 'Paunescu V., Bojin F.M., Gavriliuc O.I., Taculescu E.A., Ianos R., Ordodi V.L., Iman V.F., Tatu C.A.'
	},
	{
		year: '2011',
		title: 'Tumour-associated fibroblasts and mesenchymal stem cells: more similarities than differences.',
		journal: 'J Cell Mol Med. 2011 Mar; 15(3): 635-46',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/20184663/',
		authors: 'Paunescu V., Bojin F.M., Tatu C.A., Gavriliuc O.I., Rosca A., Gruia A.T., Tanasie G., Bunu C., Crisnic D., Gherghiceanu M., Tatu F.R., Tatu C.S., Vermesan S.'
	},
	{
		year: '2007',
		title: 'In vitro differentiation of human mesenchymal stem cells to epithelial lineage.',
		journal: 'Journal of cellular and molecular medicine. 2007 May; 11(3): 502-8',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/17635641/',
		authors: 'Paunescu V., Deak E., Herman D., Siska I.R., Tanasie G., Bunu C., Anghel S., Tatu C.A., Oprea T.I., Henschler R., Rüster B.'
	}
];

export default function PublicatiiPage() {
	const groupedPublications = publications.reduce((acc, pub) => {
		if (!acc[pub.year]) {
			acc[pub.year] = [];
		}
		acc[pub.year].push(pub);
		return acc;
	}, {});

	const years = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));

	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <span>Publicații</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Publicații</h1>
					<p>Rezultatele cercetării OncoGen publicate în reviste internaționale de top</p>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<div className="publications-list">
						{years.map((year) => (
							<div key={year} className="pub-year-group">
								<h3 className="pub-year">{year}</h3>
								{groupedPublications[year].map((pub, index) => (
									<div key={`${year}-${index}`} className="pub-item">
										<div>
											<h4>
												<a href={pub.doi} target="_blank" rel="noopener noreferrer">
													{index + 1}. {pub.title}
												</a>
											</h4>
											<p><em>{pub.journal}</em></p>
											<p>{pub.authors}</p>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
