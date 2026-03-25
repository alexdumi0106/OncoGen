import Link from 'next/link';

const publications = [
	{
		year: '2025',
		title: 'Microengineered Breast Cancer Models: Shaping the Future of Personalized Oncology.',
		journal: 'Cancers, 2025; 17: 3160',
		doi: 'https://www.mdpi.com/2072-6694/17/19/3160',
		authors: 'Popoiu T-A, Cimpean AM, Bojin F, Cerbu S, Gug M-C, Pirvu C-A, Pantea S, Neagu A.'
	},
	{
		year: '2025',
		title: 'Doxorubicin-Induced Cardiotoxicity and the Emerging Role of SGLT2 Inhibitors: From Glycemic Control to Cardio-Oncology.',
		journal: 'Pharmaceuticals, 2025; 18: 681',
		doi: 'https://www.mdpi.com/1424-8247/18/5/681',
		authors: 'Goje ID, Goje GI, Ordodi VL, Ciobotaru VG, Ivan VS, Buzaș R, Tunea O, Bojin F, Lighezan DF.'
	},
	{
		year: '2025',
		title: 'Innovative Therapy with Stem Cell-Derived Extracellular Vesicles on Cardiac Hypertrophy in an Animal Model of Atherosclerosis; Elucidation of the Molecular Mechanisms Involved in the Repair Process.',
		journal: 'Biomolecules, 2025; 15(10)',
		doi: 'https://www.mdpi.com/2218-273X/15/10/1424',
		authors: 'Vîlcu A, Comarița IK, Constantin A, Alexandru N, Nemecz M, Safciuc F, Bojin F, Paunescu V, Georgescu A.'
	},
	{
		year: '2025',
		title: 'Aristolochic Acid I Adsorption onto Activated Carbon: Kinetics, Equilibrium, and Thermodynamic Studies.',
		journal: 'Processes, 2025; 13(11)',
		doi: 'https://www.mdpi.com/2227-9717/13/11/3397',
		authors: 'Pricop MA, Negrea A, Ciopec M, Pascu IB, Oprean C, Lukinich-Gruia AT, Cristea IM, Ivan A, Paunescu V, Tatu CA.'
	},
	{
		year: '2025',
		title: 'Cellular Metabolic Responses to Copper Nanoparticles: Comparison Between Normal and Breast Cancer Cells.',
		journal: 'International Journal of Molecular Sciences, 2025; 26(21)',
		doi: 'https://www.mdpi.com/1422-0067/26/21/10716',
		authors: 'Ivan A, Pricop MA, Lukinich-Gruia AT, Cristea IM, Negrea A, Pascu IB, Calma CL, Paunescu A, Paunescu V, Tatu CA.'
	},
	{
		year: '2025',
		title: 'Breaking Barriers: The Detrimental Effects of Combined Ragweed and House Dust Mite Allergen Extract Exposure on the Bronchial Epithelium.',
		journal: 'Applied Sciences, 2025; 15: 4113',
		doi: 'https://www.mdpi.com/2076-3417/15/8/4113',
		authors: 'Zimbru RI, Grijincu M, Tănasie G, Zimbru EL, Bojin MF, Buzan MR, Tamas TP, Cotarcă MD, Harich OO, Pătrașcu R, Haidar L, Ciurariu E, Marin KC, Păunescu V, Panaitescu C.'
	},
	{
		year: '2025',
		title: 'Anti-Her2 CAR-NK92 Cells and Their Exosomes: Generation, Characterization, and selective Cytotoxicity against Her2-Positive tumor Cells.',
		journal: 'International Journal of Molecular Sciences, 2025; 26(15): 7648',
		doi: 'https://www.mdpi.com/1422-0067/26/15/7648',
		authors: 'Tirziu A, Bojin MF, Gavriliuc OI, Buzan RM, Zbircea LE, Grijincu M, Paunescu V.'
	},
	{
		year: '2025',
		title: 'In Vitro Antioxidant Effects of Coenzyme Q10 on Cellular Metabolism in Aged Mesenchymal Stem Cells.',
		journal: 'Applied Sciences Basel, 2025; 15(5): 2783',
		doi: 'https://www.mdpi.com/2076-3417/15/5/2783',
		authors: 'Ivan A, Lukinich-Gruia AT, Cristea IM, Pricop MA, Calma CL, Paunescu A, Tatu CA, Galuscan A, Paunescu V.'
	},
	{
		year: '2025',
		title: 'Exploring CAR-PBMCs: A novel strategy against EGFR-positive tumor cells.',
		journal: 'Biomedicines, 2025; 13: 264',
		doi: 'https://www.mdpi.com/2227-9059/13/2/264',
		authors: 'Tirziu A, Gavriliuc O-I, Bojin M-F, Paunescu V.'
	},
	{
		year: '2024',
		title: 'Rosuvastatin attenuates vascular dysfunction induced by high-fructose diets and allergic asthma in rats.',
		journal: 'Nutrients, 2024; 16(23): 4104',
		doi: 'https://www.mdpi.com/2072-6643/16/23/4104',
		authors: 'Zimbru EL, Zimbru RI, Ordodi VL, Bojin FM, Crisnic D, andor M, Mirica SN, Hutu I, Tanasie G, Haidar L, Nistor D, Velcean L, Paunescu V, Panaitescu C.'
	},
	{
		year: '2024',
		title: 'Quercetin and Mesenchymal Stem Cell Metabolism: A Comparative Analysis of Young and Senescent States.',
		journal: 'Molecules, 2024; 29(23): 5755',
		doi: 'https://www.mdpi.com/1420-3049/29/23/5755',
		authors: 'Ivan A, Lukinich-Gruia AT, Cristea IM, Pricop MA, Calma CL, Simina AG, Tatu CA, Galuscan A, Paunescu V.'
	},
	{
		year: '2024',
		title: 'Aristolochia clematitis L. Ethanolic Extracts: In Vitro Evaluation of Antioxidant Activity and Cytotoxicity on Caco-2 Cell Line.',
		journal: 'Plants-Basel, 2024; 13(21): 2987',
		doi: 'https://www.mdpi.com/2223-7747/13/21/2987',
		authors: 'Pricop MA, Lukinich-Gruia AT, Cristea IM, Paunescu V, Tatu CA.'
	},
	{
		year: '2024',
		title: 'Evaluation of Antimicrobial, Antitumor, Antioxidant Activities, and Molecular Docking Studies of Some Co(II), Cu(II), Mn(II), Ni(II), Pd(II), and Pt(II) Complexes With a Schiff Base Derived From 2-Chloro-5-(trifluoromethyl)aniline.',
		journal: 'Applied Organometallic Chemistry, 2024; Corpus ID: 273645866',
		doi: 'https://onlinelibrary.wiley.com/doi/10.1002/aoc.7829',
		authors: 'Pahontu E, Pirvu CED, Visan DC, Socea LI, Apostol TV, Oprean C, Paunescu V, Ungurianu A, Margina DM, Codita I, Dumitrescu S, Draganescu D, Lupascu G.'
	},
	{
		year: '2024',
		title: 'Mitochondrial Dysfunction in Aristolochic Acid I-Induced Kidney Diseases: What We Know and What We Do Not Know.',
		journal: 'Applied Sciences-Basel, 2024; 14(17): 7961',
		doi: 'https://www.mdpi.com/2076-3417/14/17/7961',
		authors: 'Lukinich_Gruia AT, Calma CL, Szekely FAE, Cristea IM, Pricop MA, Simina AG, Ordodi VL, Pavlovic NM, Tatu CA, Paunescu V.'
	},
	{
		year: '2024',
		title: 'Experimental Device for the "Green" Synthesis of Unbranched Aliphatic Esters C4-C8 Using an Audio Frequency Electric Field.',
		journal: 'Processes, 2024; 12(9): 1891',
		doi: 'https://www.mdpi.com/2227-9717/12/9/1891',
		authors: 'Udrea IA, Lukinich-Gruia AT, Paul C, Pricop MA, Dan MR, Paunescu V, Baloi A, Tatu CA, Vaszilcsin N, Ordodi V.'
	},
	{
		year: '2024',
		title: 'The Impact of High-Fructose Diet and Co-Sensitization to House Dust Mites and Ragweed Pollen on the Modulation of Airway Reactivity and Serum Biomarkers in Rats.',
		journal: 'International Journal of Molecular Sciences, 2024; 25(16): 8868',
		doi: 'https://www.mdpi.com/1422-0067/25/16/8868',
		authors: 'Zimbru RI, Zimbru EL, Ordodi VL, Bojin FM, Crisnic D, Grijincu M, Mirica SN, Tanasie G, Georgescu M, Hutu I, Haidar L, Paunescu V, Panaitescu C.'
	},
	{
		year: '2024',
		title: 'Prenatal Factors in the Development of Allergic Diseases.',
		journal: 'International Journal of Molecular Sciences, 2024; 25(12): 6359',
		doi: 'https://www.mdpi.com/1422-0067/25/12/6359',
		authors: 'Grijincu M, Buzan MR, Zbircea LE, Paunescu V, Panaitescu C.'
	},
	{
		year: '2024',
		title: 'Non-Specific Lipid Transfer Protein Amb a 6 Is a Source-Specific Important Allergenic Molecule in Ragweed Pollen.',
		journal: 'International Journal of Molecular Sciences, 2024; 25(12): 6513',
		doi: 'https://www.mdpi.com/1422-0067/25/12/6513',
		authors: 'Grijincu M, Tanasie G, Zbircea LE, Buzan MR, Tamas TP, Cotarca MD, Hutu I, Babaev E, Stolz F, Dorofeeva Y, Valenta R, Paunescu V, Panaitescu C, Chen KW.'
	},
	{
		year: '2024',
		title: 'Cross-Reactivity of Ragweed Pollen Calcium-Binding Proteins and IgE Sensitization in a Ragweed-Allergic Population from Western Romania.',
		journal: 'Advances in Respiratory Medicine, 2024; 92(3): 218-229',
		doi: 'https://www.mdpi.com/2543-6031/92/3/22',
		authors: 'Zbircea LE, Buzan MR, Grijincu M, Tamas TP, Vulpe CB, Hutu I, Paunescu V, Panaitescu C, Chen KW.'
	},
	{
		year: '2024',
		title: 'Heterogenous Induction of Blocking Antibodies against Ragweed Allergen Molecules by Allergen Extract-Based Immunotherapy Vaccines.',
		journal: 'Vaccines, 2024; 12(6): 635',
		doi: 'https://www.mdpi.com/2076-393X/12/6/635',
		authors: 'Zbircea LE, Buzan MR, Grijincu M, Cotarca MD, Tamas TP, Haidar L, Tanasie G, Hutu I, Babaev E, Stolz F, Valenta R, Paunescu V, Panaitescu C, Chen KW.'
	},
	{
		year: '2024',
		title: 'Insect Cell-Expressed Major Ragweed Allergen Amb a 1.01 Exhibits Similar Allergenic Properties to Its Natural Counterpart from Common Ragweed Pollen.',
		journal: 'International Journal of Molecular Sciences, 2024; 25(10): 5175',
		doi: 'https://www.mdpi.com/1422-0067/25/10/5175',
		authors: 'Buzan MR, Grijincu M, Zbircea LE, Haidar L, Tamas TP, Cotarca MD, Tanasie G, Weber M, Babaev E, Stolz F, Valenta R, Paunescu V, Panaitescu C, Chen KW.'
	},
	{
		year: '2024',
		title: 'Hydrogel extrusion speed measurement for the optimization of bioprinting parameters.',
		journal: 'Gels, 2024; 10(2): 103',
		doi: 'https://www.mdpi.com/2310-2861/10/2/103',
		authors: 'Arjoca S, Bojin F, Neagu M, Paunescu A, Neagu A, Paunescu V.'
	},
	{
		year: '2023',
		title: 'Stem cells derived from exfoliated deciduous teeth functional assessment: Exploring the changes of free fatty acids composition during cultivation.',
		journal: 'International Journal of Molecular Sciences, 2023; 24(24): 17249',
		doi: 'https://www.mdpi.com/1422-0067/24/24/17249',
		authors: 'Ivan A, Cristea MI, telea A, Oprean C, Galuscan A, Tatu C, Paunescu V.'
	},
	{
		year: '2023',
		title: 'Inhibitory effects of lidocaine on colon carcinoma progression in a rat model: a pilot study.',
		journal: 'Br J Anaesth. 2023; 131(5): E163-E165',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/37709556/',
		authors: 'Habago SD, Ordodi V, Bojin F, Vesa SC, Moldovan V, Paunescu V, Ionescu D.'
	},
	{
		year: '2023',
		title: 'In Vitro Study of the Multimodal Effect of Na+/K+ ATPase Blocker Ouabain on the Tumor Microenvironment and Malignant Cells.',
		journal: 'Biomedicines, 2023; 11: 2205',
		doi: 'https://pubmed.ncbi.nlm.nih.gov/37626702/',
		authors: 'Harich OO, Gavriliuc OI, Ordodi VL, Tirziu A, Paunescu V, Panaitescu C, Bojin MF.'
	},
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
									<div key={`${year}-${index}`} className="pub-item" style={{ marginBottom: '20px' }}>
										<p>
											<a href={pub.doi} target="_blank" rel="noopener noreferrer">
												{index + 1}. {pub.authors} {pub.title} <em>{pub.journal}</em>
											</a>
										</p>
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
