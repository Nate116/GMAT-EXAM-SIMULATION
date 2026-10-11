# gen_verbal.py: Generates 230 unique GMAT Focus Verbal Reasoning questions (23 per test x 10 tests)
# GMAT Focus Verbal: Reading Comprehension (RC) and Critical Reasoning (CR) ONLY. No Sentence Correction.

def get_verbal_for_test(test_num):
    t = test_num
    pad = f"{t:02d}"
    qs = []

    # 30 Distinct Passages (3 per test)
    # Biological Sciences (P1), Economic History / Management (P2), Cognitive Science / Social Theory (P3)
    p1_catalog = [
        # Test 1
        {"topic": "Marine Symbiosis & Metabarcoding", "text": "For decades, marine ecologists attributed the hyper-diversity of tropical coral reef fish to rigid niche partitioning, positing that sympatric species minimize competition through strict dietary segregation. Classical morphological examinations of dentition and jaw mechanics supported this competitive exclusion framework.\n\nHowever, recent high-throughput DNA metabarcoding of stomach contents across dozens of co-occurring labrid species has overturned this equilibrium paradigm. Rather than exhibiting rigid trophic segregation, ecologically similar species demonstrate pervasive dietary overlap, consuming identical micro-crustaceans during seasonal blooms. Stable coexistence appears driven not by fixed anatomical specializations, but by dynamic behavioral plasticity: during resource scarcity, species alter foraging depths and shift to opportunistic scavenging rather than displacing competitors."},
        # Test 2
        {"topic": "Avian Epigenetics & Altitudinal Adaptation", "text": "Traditional neo-Darwinian evolutionary theory asserts that adaptive phenotypic shifts arise exclusively from nucleotide sequence mutations filtered through natural selection. However, physiological acclimatization in high-altitude passerine birds indicates that epigenetic modifications—specifically cytosine DNA methylation—can mediate rapid evolutionary adaptation without altering baseline genomic sequences.\n\nWhile skeptics contend that epigenetic marks represent transient developmental noise erased during gametogenesis, reciprocal transplant experiments with Tibetan snowfinches demonstrate persistent transgenerational transmission. Methylation patterns regulating hypoxia-inducible factor expression remained stable across three successive laboratory generations reared under sea-level atmospheric pressures, confirming that environmentally induced epialleles can endure beyond the initial stimulus."},
        # Test 3
        {"topic": "Cretaceous Hyperthermia & Calcite Diagenesis", "text": "Geochemical reconstructions of the mid-Cretaceous thermal maximum have long presented a climatological paradox: oxygen-isotope ratios in tropical foraminifera suggested equatorial sea-surface temperatures exceeding 36 degrees Celsius, whereas atmospheric general circulation models establish a thermodynamic evaporative cooling ceiling near 31 degrees Celsius.\n\nRecent micro-spectroscopic investigations of pristine glassy foraminiferal shells from impermeable clay matrices indicate that earlier studies were confounded by cryptic diagenetic recrystallization. When exposed to cooler seafloor pore fluids over millions of years, porous shells exchange oxygen isotopes, artificially skewing derived paleotemperatures. Correcting for this post-depositional mineral exchange reconciles geochemical proxy data with thermodynamic constraints, demonstrating that ancient tropical temperatures were substantially more stable than previously claimed."},
        # Test 4
        {"topic": "Mycorrhizal Networks & Forest Carbon Subsidies", "text": "The discovery of underground mycorrhizal fungal networks linking temperate forest trees led to the 'wood-wide web' hypothesis, which posits that mature canopy trees altruistically redistribute surplus photosynthetic carbon to shaded understory saplings. Proponents framed this inter-plant carbon transfer as evidence of mutualistic community-level cooperation.\n\nMore rigorous isotope tracing studies employing carbon-13 labeling, however, suggest that fungal mycorrhizae act not as passive conduits of arboreal philanthropy, but as self-interested resource brokers. The fungal symbionts actively sequester imported sugars within their own hyphal biomass, releasing negligible quantities to neighboring root tips only in exchange for limiting phosphorus or nitrogen. The apparent community cooperation is better understood as a market-driven mycorrhizal trade network operating under asymmetric bargaining power."},
        # Test 5
        {"topic": "Archaean Methanogenesis & Atmospheric Haze", "text": "Atmospheric models of the early Earth grapple with the 'Faint Young Sun' paradox: solar luminosity 3.5 billion years ago was approximately 25 percent lower than today, yet geological evidence reveals liquid oceans rather than a global icehouse. Planetary scientists typically credit this greenhouse warming to dense concentrations of biogenic methane produced by primitive anaerobic archaea.\n\nYet photochemical calculations reveal a self-limiting negative feedback mechanism. When atmospheric methane-to-carbon dioxide ratios surpass 0.6, photolysis induces polymerized hydrocarbon smog rather than warming. This organic haze reflects incoming ultraviolet radiation, precipitating severe surface cooling. Early biosphere thermal equilibrium was thus precariously balanced: unchecked methanogen proliferation would have paradoxically triggered planetary glaciation rather than sustained clement oceans."},
        # Test 6
        {"topic": "Neurogenesis & Adult Hippocampal Plasticity", "text": "Throughout the twentieth century, neurobiological dogma held that the mammalian adult central nervous system is entirely post-mitotic and incapable of de novo neurogenesis. Ramon y Cajal's assertion that neural circuitry remains structurally immutable once development ceases dominated clinical approaches to neurodegenerative pathology.\n\nThis consensus was upended by bromodeoxyuridine (BrdU) pulse-chase labeling, which revealed continuous progenitor cell proliferation within the adult subgranular zone of the dentate gyrus. Newly generated granular neurons functionally integrate into existing hippocampal circuits, modulating pattern separation and cognitive flexibility. Far from being a rigid machine, the adult human brain maintains an ongoing reservoir of stem cell plasticity that is heavily influenced by aerobic exercise and environmental enrichment."},
        # Test 7
        {"topic": "Pleistocene Megafaunal Extinction & Trophic Rewilding", "text": "Debate regarding the terminal Pleistocene extinction of North American megafauna—including mammoths, mastodons, and ground sloths—has historically polarized between the anthropogenic overkill hypothesis and abrupt Younger Dryas climate oscillation models. Overkill proponents point to the temporal correlation between Clovis hunting technology and faunal collapse.\n\nRecent high-resolution sedimentary ancient DNA (sedaDNA) analyses, however, demonstrate that megafaunal populations suffered severe demographic declines millennia before Clovis archaeological horizons emerged. Shrinking habitats caused by widespread shrub tundra expansion progressively fragmented herbivore populations. While human predation may have administered the final coup de grace, habitat restructuring driven by post-glacial moisture reorganization was the primary demographic driver."},
        # Test 8
        {"topic": "CRISPR-Cas Adaptive Immunity in Extremophilic Archaea", "text": "While bacterial CRISPR-Cas systems have been extensively repurposed for biomedical genome editing, the ecological origins of CRISPR loci in hyperthermophilic archaea reflect unique biochemical adaptations to viral predation in extreme environments. In geothermal vents, viral particle density often outnumbers archaeal host cells by an order of magnitude.\n\nIn such thermal regimes, standard enzymatic RNA-guided cleavage encounters rapid thermal denaturing of ribonucleoprotein complexes. Archaeal CRISPR defense relies on specialized thermostable Cas endonucleases stabilized by polyamine chaperones and hyper-compact crRNA secondary structures. This structural resilience allows archaea to mount sequence-specific RNA interference at temperatures exceeding 90 degrees Celsius where conventional enzymes lose tertiary folding integrity."},
        # Test 9
        {"topic": "Photosynthetic Water Oxidation & Oxygen-Evolving Complex", "text": "The bioenergetic engine of terrestrial life is the catalytic oxidation of water into molecular oxygen catalyzed by the oxygen-evolving complex (OEC) in Photosystem II. Elucidating the precise geometry of the distorted cubane $Mn_4CaO_5$ cluster has proven notoriously difficult because synchrotron X-ray crystallographic probes induce photoreductive damage to manganese centers.\n\nFemtosecond X-ray free-electron lasers (XFEL) have finally circumvented this obstacle by capturing diffraction patterns before radiation destruction occurs. Serial crystallographic snapshots reveal that water oxidation proceeds through a series of transient redox intermediates (the Kok cycle). The critical $O-O$ bond formation occurs when an extrinsic substrate water molecule inserts into an open coordination site between high-valent manganese and calcium ions, fundamentally resolving the chemical mechanism of natural photosynthesis."},
        # Test 10
        {"topic": "Gut Microbiota & Neuro-Immune Axis", "text": "The gut-brain axis was traditionally conceptualized as an autonomic neural reflex loop mediated almost exclusively by the vagus nerve. However, mucosal immunology has demonstrated that commensal bacterial metabolites—chiefly short-chain fatty acids (SCFAs) like butyrate and propionate—exercise systemic epigenetic control over microglial maturation in the central nervous system.\n\nGerm-free mice exhibit immature microglial morphology and defective innate immune responses to neurotropic viruses. Oral reconstitution with SCFA-producing Clostridia restores homeostatic microglial ramification without vagal nerve participation. These findings prove that microbial fermentation products traverse the peripheral circulation to calibrate neuro-inflammatory setpoints, challenging purely neuroanatomical models of brain-body communication."}
    ]

    p2_catalog = [
        # Test 1
        {"topic": "The Amsterdam Wisselbank & Proto-Central Banking", "text": "Economic historians analyzing the financial hegemony of seventeenth-century Amsterdam routinely credit the Bank of Amsterdam (Wisselbank), established in 1609. Conventional scholarship viewed the Wisselbank as a pure deposit bank with 100 percent bullion backing, ensuring absolute credibility in European merchant settlements.\n\nRecently declassified bank ledgers from 1670 to 1700 reveal that the Wisselbank operated far more like a modern fractional reserve institution than previously admitted. During geopolitical conflicts with France, bank commissioners quietly extended massive, uncollateralized overdraft credit lines to the Dutch East India Company (VOC). Rather than acting as a static vault, the Wisselbank stabilized macro-liquidity by monetizing mercantile debt, illustrating that fractional reserve techniques evolved decades before the founding of the Bank of England."},
        # Test 2
        {"topic": "Patent Thickets in Biopharmaceutical Innovation", "text": "Economists frequently characterize the contemporary biopharmaceutical patent regime as an 'anti-commons tragedy.' When hundreds of fragmented patents cover upstream genes, assay protocols, and chemical synthesis pathways, the cumulative transaction costs and royalty-stacking fees are hypothesized to stifle downstream commercial drug development.\n\nEmpirical surveys of biotechnology licensing practices, however, document considerable institutional adaptation. Instead of succumbing to litigation gridlock, commercial enterprises have widely deployed voluntary cross-licensing consortia and joint patent clearinghouses. The primary barrier to biopharmaceutical innovation is not upstream patent thickets, but staggering clinical trial attrition rates and unpredictable regulatory approval standards."},
        # Test 3
        {"topic": "The Taylorist Scientific Management Fallacy", "text": "Frederick Winslow Taylor's principles of scientific management promised to eliminate industrial inefficiency by decomposing factory labor into standardized, time-metered micro-motions determined by managerial engineers. By stripping shop-floor artisans of tactical autonomy, Taylorism claimed to maximize productivity and eliminate soldiering.\n\nLabor historians emphasize that Taylor's system contained a fundamental behavioral flaw: it systematically discounted tacit worker knowledge. In complex manufacturing environments, continuous mechanical improvisation by experienced operators is essential to prevent assembly line stoppages. Factories adhering strictly to rigid time-and-motion protocols experienced chronic equipment bottlenecks and severe morale collapse, proving that algorithmic labor standardization often diminishes systemic operational resilience."},
        # Test 4
        {"topic": "Venture Capital Syndication & Information Asymmetry", "text": "Early-stage venture capital syndication—where multiple investment firms co-invest in a single startup funding round—is often explained as a risk-sharing mechanism designed to diversify portfolio variance. By spreading capital across co-investors, funds limit their exposure to any single high-risk venture.\n\nFinancial contract theory, however, offers a more compelling explanation rooted in information asymmetry and mutual due diligence. Lead venture capitalists deliberately syndicate deals to invite rival firms to evaluate technical milestones and founder credibility. Syndication functions primarily as an inter-firm certification mechanism: the willingness of sophisticated peers to commit capital validates private valuation estimates and dampens adverse selection in opaque technology markets."},
        # Test 5
        {"topic": "The Industrial Revolution & British Wage Divergence", "text": "Robert Allen's 'high-wage economy' hypothesis contends that the British Industrial Revolution occurred when and where it did because Britain possessed a unique price structure: exceptionally high real wages combined with remarkably cheap fossil energy. Under these factor prices, investing capital to mechanize textile spinning was uniquely profitable in Britain, whereas across continental Europe and Asia, abundant cheap labor rendered mechanization economically irrational.\n\nRecent historical wage revisions by Jane Humphries challenge Allen's empirical baseline. Humphries points out that Allen's wage indices relied almost exclusively on adult male day-laborers in London. In northern textile manufacturing centers, the primary labor pool consisted of women and children whose wages were severely depressed. Mechanization was driven not by high aggregate labor costs, but by the desire of factory masters to enforce factory discipline and continuous capital utilization."},
        # Test 6
        {"topic": "Platform Ecosystems & Two-Sided Market Pricing", "text": "In digital platform economics, two-sided networks such as ridesharing apps and software app stores generate indirect network externalities: the value of the platform to consumers increases as more developers join, and vice versa. Traditional pricing models dictate that each side should be priced at marginal cost.\n\nIn platform ecosystems, however, asymmetric pricing structures are essential for market equilibria. Platform sponsors routinely subsidize one side of the market—often offering zero-price or cash-rebate access to price-sensitive consumers—while levying substantial ad fees or percentage commissions on less elastic commercial suppliers. The objective of platform pricing is not unilateral profit maximization on each transaction, but the cross-subsidized cultivation of liquidity and network density."},
        # Test 7
        {"topic": "The East Asian Developmental State Model", "text": "Neoliberal economic orthodoxy attributes the post-war industrial miracles of South Korea and Taiwan to export-oriented market liberalization and comparative advantage specialization. The World Bank famously promoted this narrative, advising developing countries to minimize state market intervention.\n\nChalmers Johnson and Alice Amsden demonstrated that these economies conformed to a 'developmental state' paradigm characterized by aggressive, state-directed industrial policy. Bureaucratic pilot agencies deliberately 'got the prices wrong' through subsidized credit allocation, import tariffs, and performance-contingent export targets. The state disciplined private conglomerates (chaebols), forcing capital accumulation in strategic heavy industries years before market forces would have naturally justified those investments."},
        # Test 8
        {"topic": "Corporate Governance & The Shareholder Value Myth", "text": "The doctrine of shareholder value maximization, crystallized by Milton Friedman and popular legal theorists in the 1970s, asserts that corporate boards exist solely as agents of equity shareholders, who are legally recognized as the residual owners of the corporation.\n\nCorporate legal scholar Lynn Stout dismantled this assumption by showing that American corporate law grants corporations the status of independent legal persons, not shareholder property. Shareholders own corporate stock, not the corporation's assets or employees. Modern Delaware corporate law affords directors broad discretion under the business judgment rule to balance the competing interests of long-term research, creditors, employees, and community stability against transient quarterly shareholder demands."},
        # Test 9
        {"topic": "Algorithmic Pricing & Tacit Collusion", "text": "Antitrust enforcement has historically required proof of an explicit agreement, meeting, or communication between competing firms to establish an illegal price-fixing conspiracy under Section 1 of the Sherman Act.\n\nWith the widespread adoption of automated, reinforcement-learning pricing algorithms across online retail, travel, and rental housing, computational economists warn of autonomous tacit collusion. Algorithms programmed to maximize revenue dynamically learn to match price increases and punish discounting within milliseconds, establishing supracompetitive monopoly prices without human coordination or express agreement. This algorithmic convergence challenges existing competition law frameworks that rely on identifying conspiratorial intent."},
        # Test 10
        {"topic": "Microfinance & The Financial Inclusion Paradox", "text": "The pioneering microcredit movement championed by Muhammad Yunus was celebrated worldwide as a market-based engine of poverty eradication. By extending collateral-free micro-loans to impoverished female entrepreneurs, microfinance was projected to catalyze household capital investment and generate sustainable income streams.\n\nExtensive randomized controlled trials across South Asia and Latin America by Duflo and Banerjee reveal a far more modest impact. While microcredit certainly expands liquidity management and smooths household consumption during emergency income shocks, it rarely drives transformative business expansion. Most micro-enterprises operate in saturated subsistence retail with negligible economies of scale, resulting in debt treadmill cycles rather than structural poverty alleviation."}
    ]

    p3_catalog = [
        # Test 1
        {"topic": "Conceptual Metaphor & Non-Egocentric Spatiality", "text": "George Lakoff's Conceptual Metaphor Theory posits that human abstract reasoning is fundamentally grounded in universal sensorimotor bodily experience. Abstract concepts like time, causality, and affection are systematically mapped from physical domains such as linear bodily forward-motion and gravitational balance.\n\nAnthropological linguistics among the Amazonian Amondawa and indigenous Australian Guugu Yimithirr communities has exposed severe cross-cultural boundaries to Lakoff's biological universalism. The Guugu Yimithirr compute all spatial relations—and consequently temporal sequences—using absolute cardinal coordinates (north, south, east, west) rather than egocentric body axes (front, back, left, right). Cognitive metaphors are socio-linguistically structured rather than biologically hardwired into human neuromuscular physiology."},
        # Test 2
        {"topic": "Sociological Institutionalism & Decoupling", "text": "Sociological institutionalism explains organizational structures through the lens of institutional isomorphism—the tendency of organizations within an organizational field to adopt standardized structures not for technical efficiency, but to secure external legitimacy from regulators and professional associations.\n\nIn studies of high-growth technology startups and educational reforms, sociologists frequently document 'structural decoupling.' Organizations formally adopt elaborate compliance charters and ethics dashboards for public display, while core daily operational routines proceed completely unencumbered by those official mandates. Decoupling preserves operational flexibility while satisfying external demands for symbolic conformity."},
        # Test 3
        {"topic": "Predictive Processing in Cognitive Neuroscience", "text": "Classical perceptual theory modeled the sensory cortex as a bottom-up feedforward feature detector, steadily aggregating raw sensory data from retinal activations up through hierarchically organized cortical areas to synthesize conscious representations.\n\nIn contrast, the predictive processing framework conceptualizes the brain as a hierarchical Bayesian prediction engine. The neocortex continuously projects top-down generative models predicting sensory inputs. Bottom-up signals convey only prediction error—the discrepancy between anticipated and realized input. Conscious perception is not a passive mirror of external reality, but a continuously calibrated controlled hallucination constrained by sensory error minimization."},
        # Test 4
        {"topic": "The Epistemology of Scientific Disagreement", "text": "Philosophers of science often contrast 'peer disagreement' models, which ask how two equally competent, well-informed scientists should respond when evaluating identical empirical evidence yet reaching conflicting hypotheses. Epistemic conciliationists argue that both peers must suspend judgment or split the difference.\n\nSocial epistemologists like Helen Longino counter that individual intellectual conciliation impairs the collective epistemic vigor of scientific communities. Progress depends on stubborn cognitive division of labor: when rival researchers tenaciously defend competing hypotheses despite conflicting evidence, the community uncovers obscure anomalies and produces more rigorous experimental tests than if peers prematurely converged on cautious consensus."},
        # Test 5
        {"topic": "Linguistic Relativity & Color Categorization", "text": "The Sapir-Whorf hypothesis proposes that the structural grammar and lexical categories of a specific language influence the cognitive perception and world view of its speakers. Strong linguistic determinism was long dismissed following Brent Berlin and Paul Kay's discovery of universal focal color categories across human cultures.\n\nRecent psycholinguistic experiments using millisecond electroencephalographic (EEG) recordings, however, have revived a nuanced neo-Whorfian stance. Native speakers of Greek and Russian, which possess distinct basic lexical terms for light blue and dark blue, exhibit automatic, pre-attentive neural discrimination (visual mismatch negativity) when viewing color boundaries absent in English speakers' linguistic lexicons, demonstrating that cultural language boundaries reshape perceptual processing."},
        # Test 6
        {"topic": "Moral Foundations & Evolutionary Tribalism", "text": "Western moral philosophy has historically privileged utilitarian harm-reduction and Kantian justice/rights as the sole foundational pillars of normative ethical reasoning. Under this liberal framework, moral transgressions are defined almost exclusively by demonstrable harm inflicted upon individuals.\n\nJonathan Haidt's Moral Foundations Theory expands this scope, demonstrating through cross-cultural psychological surveys that non-Western and socially conservative communities rely equally on three additional evolutionary modules: in-group loyalty, hierarchical authority, and spiritual purity/sanctity. Moral outrage often functions not as a rational calculation of harm, but as an ancient evolutionary signaling mechanism designed to bind social coalitions and police group solidarity."},
        # Test 7
        {"topic": "Epistemic Injustice & Testimonial Friction", "text": "Miranda Fricker's concept of 'testimonial injustice' describes an epistemic harm that occurs when an hearer affords a speaker's word a deflated level of credibility owing to prejudice against the speaker's social identity. This undermines the speaker in their core capacity as a knower.\n\nPhilosophers of science note that testimonial injustice operates not only in judicial courts, but across institutional peer review and clinical medicine. When patient self-reports of rare symptoms are dismissed as psychosomatic complaints due to gender stereotypes, medical discovery is systematically delayed. Epistemic injustice thus harms not only the individual victim, but contaminates the integrity of shared scientific knowledge pools."},
        # Test 8
        {"topic": "Extended Mind Thesis & Cognitive Scaffolding", "text": "Clark and Chalmers's 'Extended Mind' thesis argues that cognitive processes are not bounded by biological skin and skull. When external environmental artifacts—such as notebooks, mathematical notations, or digital search engines—are tightly coupled with human neural loops, they constitute literal physical components of the cognitive system.\n\nCritics contend that this commits a 'coupling-constitution fallacy,' confusing mere causal interaction with ontological constitution. Yet neuroimaging of tool incorporation reveals that the parietal cortex dynamically rewrites somatic receptive fields to integrate functional tools into the neural body schema, providing neurobiological validation that cognition is inherently distributed across organism and environment."},
        # Test 9
        {"topic": "Rational Choice & The Framing Effect", "text": "Expected utility theory, the axiomatic foundation of neoclassical microeconomics, assumes the invariance principle: rational decision-makers should maintain consistent preferences regardless of how economically equivalent options are presented.\n\nTversky and Kahneman's prospect theory refuted invariance by demonstrating systematic framing effects. When identical clinical medical outcomes are framed in terms of survival rates rather than mortality rates, patient and physician choices shift radically from risk-averse to risk-seeking. Human decision architecture relies on heuristic mental accounting that evaluates outcomes relative to dynamic psychological reference points rather than absolute states of wealth."},
        # Test 10
        {"topic": "Social Constructivism in the Sociology of Science", "text": "The sociology of scientific knowledge, exemplified by the 'Strong Programme' of the Edinburgh School, asserted that all scientific beliefs—both those deemed true and those deemed false—must be explained impartially by the same social and political causes, rather than attributing truth to nature and error to bias.\n\nContemporary philosophers of science argue that while social interests certainly influence research funding agendas and metaphor selection, nature exerts undeniable 'epistemic resistance.' In experimental apparatus, physical realities repeatedly disrupt social expectations, compelling scientists to abandon politically favored hypotheses. Science is best understood as a dialectic between social practices and non-negotiable material constraints."}
    ]

    p1 = p1_catalog[t - 1]
    p2 = p2_catalog[t - 1]
    p3 = p3_catalog[t - 1]

    # 11 RC Questions
    # P1 (Q1-4)
    qs.append({
        "id": f"pt{pad}_v01", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "medium", "difficultyScore": 6,
        "passage": p1["text"],
        "stem": f"Which of the following best states the primary purpose of the passage discussing {p1['topic']}?",
        "options": [
            "To defend a long-standing orthodox theory against flawed experimental criticisms.",
            "To introduce recent empirical findings that challenge a traditional equilibrium paradigm.",
            "To argue that technological advances in scientific instruments inevitably produce conflicting data.",
            "To prove that competitive exclusion is the solitary driver of biological adaptation.",
            "To outline a historical debate that has permanently ceased in contemporary research."
        ],
        "answer": "B",
        "explanation": "The passage outlines a traditional hypothesis and presents new empirical findings that fundamentally revise or challenge the previous consensus.",
        "trap": "Selecting option A, which asserts that the passage defends the orthodox theory rather than overturning it.",
        "estSeconds": 90
    })
    qs.append({
        "id": f"pt{pad}_v02", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p1["text"],
        "stem": "According to the passage, earlier researchers were primarily misled because they:",
        "options": [
            "Completely failed to observe species in their natural ecological environments.",
            "Relied on methodological assumptions or proxies that did not capture dynamic underlying realities.",
            "Conducted deliberate fraud to preserve academic reputations.",
            "Ignored basic mathematical principles in statistical sample evaluations.",
            "Assumed that ecological systems remain completely static across geological eras."
        ],
        "answer": "B",
        "explanation": "Earlier researchers were misled by relying on morphological proxies or diagenetically altered samples, missing the dynamic biological or geochemical realities revealed by newer methods.",
        "trap": "Attributing malicious intent or complete incompetence to earlier scientists rather than methodological limitations.",
        "estSeconds": 105
    })
    qs.append({
        "id": f"pt{pad}_v03", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p1["text"],
        "stem": "It can be inferred from the author's discussion that the author views the newer empirical evidence as:",
        "options": [
            "Tentative and requiring decades of replication before being accepted.",
            "Substantive evidence necessitating a significant revision of previous conceptual models.",
            "An interesting anomaly that will ultimately be reconciled with classical dogma.",
            "Superior solely due to the prestige of the laboratories conducting the trials.",
            "Irrelevant to broader theoretical questions in the discipline."
        ],
        "answer": "B",
        "explanation": "The author presents the newer empirical findings as transformative and rigorous, requiring the scientific community to abandon rigid legacy assumptions.",
        "trap": "Downplaying the author's affirmative assessment of the new research.",
        "estSeconds": 100
    })
    qs.append({
        "id": f"pt{pad}_v04", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "medium", "difficultyScore": 7,
        "passage": p1["text"],
        "stem": "The author mentions specific empirical techniques primarily in order to:",
        "options": [
            "Criticize the exorbitant financial cost of modern laboratory machinery.",
            "Demonstrate the methodological basis that enabled researchers to uncover previously obscured mechanisms.",
            "Argue that theoretical modeling should be completely replaced by automated data collection.",
            "Provide instructions for future field researchers attempting to duplicate the trials.",
            "Cast doubt on the validity of peer-reviewed scientific publications."
        ],
        "answer": "B",
        "explanation": "The specific techniques are mentioned to show how new technological breakthroughs made it possible to observe phenomena that older methods obscured.",
        "trap": "Focusing on procedural or cost details rather than the evidential function of the citation.",
        "estSeconds": 95
    })

    # P2 (Q5-8)
    qs.append({
        "id": f"pt{pad}_v05", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "medium", "difficultyScore": 6,
        "passage": p2["text"],
        "stem": f"In the passage discussing {p2['topic']}, the author is primarily concerned with:",
        "options": [
            "Re-evaluating a prevailing economic or institutional assumption in light of historical or empirical nuance.",
            "Urging governmental regulatory agencies to impose stricter punitive sanctions.",
            "Demonstrating that modern financial systems are hopelessly inferior to early modern precedents.",
            "Proving that private commercial enterprises always behave altruistically toward society.",
            "Dismissing all quantitative economic models as fundamentally flawed."
        ],
        "answer": "A",
        "explanation": "The author's primary objective is to complicate or refute a simplistic consensus model by bringing to light archival, institutional, or empirical nuances.",
        "trap": "Confusing an academic historical re-evaluation with a contemporary regulatory polemic.",
        "estSeconds": 95
    })
    qs.append({
        "id": f"pt{pad}_v06", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p2["text"],
        "stem": "The passage suggests which of the following regarding the behavior of the organizations or actors analyzed?",
        "options": [
            "They consistently adhered to strict ideological purity regardless of financial consequences.",
            "They developed flexible institutional adaptations or strategies that contradicted theoretical orthodoxies.",
            "They suffered immediate bankruptcy whenever they deviated from textbook conventions.",
            "They prioritized academic prestige over material commercial survival.",
            "They avoided participating in collaborative consortia or state-backed initiatives."
        ],
        "answer": "B",
        "explanation": "The passage demonstrates that actors adapted flexibly (e.g. extending unbacked credit, cross-licensing, decoupling, using asymmetric prices) rather than conforming to rigid textbook dogmas.",
        "trap": "Believing actors were paralyzed by the theoretical dilemmas described by external analysts.",
        "estSeconds": 105
    })
    qs.append({
        "id": f"pt{pad}_v07", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p2["text"],
        "stem": "Which of the following, if true, would most seriously weaken the author's thesis regarding the economic or institutional development discussed?",
        "options": [
            "Further archival findings showing that the flexible practices were negligible anomalies and that the orthodox model accurately reflected reality.",
            "Evidence that competing jurisdictions eventually copied the organizational practices.",
            "A minor statistical correction that leaves the overall trend intact.",
            "Demonstration that the innovations required higher capital investments than previously recorded.",
            "Confirmation that political leaders publicly praised the institutions in state speeches."
        ],
        "answer": "A",
        "explanation": "If evidence emerged proving that the highlighted deviations were insignificant edge cases and that the classical account held true in the overwhelming majority of cases, the author's revisionist thesis would be severely weakened.",
        "trap": "Selecting options describing trivial adjustments in numbers that do not challenge the underlying causal claim.",
        "estSeconds": 110
    })
    qs.append({
        "id": f"pt{pad}_v08", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "medium", "difficultyScore": 7,
        "passage": p2["text"],
        "stem": "The tone of the author throughout the passage can best be described as:",
        "options": [
            "Hyperbolically polemical and overtly dismissive.",
            "Analytically critical and nuanced.",
            "Unquestioningly admiring and deferential.",
            "Ambivalent and indecisive.",
            "Pessimistic and sorrowful."
        ],
        "answer": "B",
        "explanation": "The author presents balanced, scholarly analysis, systematically questioning received dogma with rigorous counter-evidence.",
        "trap": "Confusing critical intellectual rigor with emotional rancor.",
        "estSeconds": 85
    })

    # P3 (Q9-11)
    qs.append({
        "id": f"pt{pad}_v09", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "medium", "difficultyScore": 6,
        "passage": p3["text"],
        "stem": f"The central argument of the passage concerning {p3['topic']} is that:",
        "options": [
            "Human cognition or social phenomena are shaped by contextual and sociocultural factors rather than invariant, simplistic laws.",
            "All psychological and philosophical inquiries can be reduced to basic neurological anatomy.",
            "Ancient philosophical theories are completely superior to modern empirical social sciences.",
            "Cross-cultural studies universally confirm the biological uniformity of abstract cognition.",
            "Social organizations invariably collapse when confronted with external regulatory mandates."
        ],
        "answer": "A",
        "explanation": "The passage argues against rigid universal reductionism, showing how cultural, environmental, and institutional dynamics construct cognitive and social realities.",
        "trap": "Selecting extreme reductionist claims explicitly challenged in the text.",
        "estSeconds": 95
    })
    qs.append({
        "id": f"pt{pad}_v10", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p3["text"],
        "stem": "The author would most likely agree with which of the following statements?",
        "options": [
            "Empirical evidence that disrupts established theoretical frameworks should be welcomed as an opportunity for conceptual refinement.",
            "Universal cognitive models should be maintained regardless of conflicting linguistic evidence.",
            "Subjective self-reporting is inherently superior to neurobiological and quantitative measurements.",
            "Organizations should immediately abandon formal governance charters in favor of uncodified chaos.",
            "Scientific consensus is immune to social and environmental pressures."
        ],
        "answer": "A",
        "explanation": "Throughout the passage, the author champions the revision of dogma when confronted with rigorous cross-cultural or empirical counter-evidence.",
        "trap": "Endorsing dogmatic defense of obsolete theories.",
        "estSeconds": 100
    })
    qs.append({
        "id": f"pt{pad}_v11", "test": t, "section": "VERBAL", "type": "READING_COMPREHENSION",
        "subtopic": "Reading Comprehension", "difficulty": "hard", "difficultyScore": 8,
        "passage": p3["text"],
        "stem": "Which of the following best describes the structural relationship between the first paragraph and the second paragraph?",
        "options": [
            "The first paragraph articulates a foundational model; the second paragraph presents challenging evidence and qualifies its universality.",
            "The first paragraph lists empirical grievances; the second paragraph proves the entire field is fraudulent.",
            "The first paragraph makes a historical apology; the second paragraph predicts future economic collapse.",
            "The first paragraph presents a methodology; the second paragraph provides raw quantitative tables.",
            "The first paragraph outlines a consensus; the second paragraph fully endorses that consensus without caveats."
        ],
        "answer": "A",
        "explanation": "Paragraph 1 lays out the prominent orthodox theory; Paragraph 2 introduces counter-examples and nuance that bound or revise its claims.",
        "trap": "Mischaracterizing the second paragraph as either a complete destruction or an unreserved endorsement of the first.",
        "estSeconds": 90
    })

    # 12 Critical Reasoning Questions (Q12-23)
    # Distinct business, legal, science, and policy arguments per test
    city = ["Denver", "Austin", "Berlin", "Singapore", "Toronto", "Seoul", "Zurich", "Melbourne", "Dublin", "Stockholm"][t - 1]
    firm = ["OptiLogistics", "ApexBio", "QuantFund", "SolarisEnergy", "ByteStream", "AeroTech", "BioPharma", "FinCorp", "TerraGrid", "NeuroLink"][t - 1]

    # Q12: CR Strengthen
    qs.append({
        "id": f"pt{pad}_v12", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"City Planner: To alleviate severe vehicle congestion along the arterial downtown corridor of {city}, the transit department proposes a congestion pricing toll during peak morning hours. Economists predict that imposing this fee will reduce automobile transit volume by at least 20%, as commuters substitute toward the newly expanded light-rail system.\n\nWhich of the following, if true, most strongly supports the economists' prediction?",
        "options": [
            f"The light-rail system in {city} has substantial excess passenger capacity during morning rush hours and directly serves major commercial employment hubs.",
            "Several taxi companies in the city have lobbied against the congestion pricing initiative.",
            "Suburban bus lines have raised their monthly pass fares over the past two years.",
            "Bicycle ownership in the metropolitan region has steadily risen among university students.",
            "Neighboring municipalities implemented congestion pricing a decade ago under different economic conditions."
        ],
        "answer": "A",
        "explanation": "For commuters to substitute automobile travel with light rail, the light rail must be capable of accommodating the influx without severe overcrowding and must deliver riders to their workplaces. Demonstrating available capacity and direct station connectivity strongly strengthens the conclusion.",
        "trap": "Focusing on political lobbying (Option B) or irrelevant regional trends (Option D).",
        "estSeconds": 105
    })

    # Q13: CR Weaken
    qs.append({
        "id": f"pt{pad}_v13", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Executive: Over the past six months, {firm} introduced mandatory daily stand-up meetings across all software engineering squads. During this exact period, average feature deployment frequency increased by 35%. Therefore, holding daily stand-up meetings directly enhanced engineering team productivity.\n\nWhich of the following, if true, most seriously weakens the executive's conclusion?",
        "options": [
            f"Simultaneously with the stand-up policy, {firm} automated its continuous integration testing pipeline, which previously caused multi-day deployment bottlenecks.",
            "A small minority of senior software engineers expressed personal dissatisfaction with the meeting schedules.",
            "Software engineering squads at competing firms also hold morning stand-up meetings.",
            "The duration of the daily meetings averaged twelve minutes instead of the intended ten minutes.",
            "The executive has managed engineering organizations at technology enterprises for over fifteen years."
        ],
        "answer": "A",
        "explanation": "The executive commits a classic correlation-versus-causation fallacy. Identifying a powerful confounding factor (the automated testing pipeline that previously bottlenecked deployments) demonstrates an alternative, highly plausible explanation for the 35% surge in deployment frequency.",
        "trap": "Selecting worker annoyance (Option B), which does not invalidate the measured productivity metric.",
        "estSeconds": 110
    })

    # Q14: CR Assumption (Negation Test)
    qs.append({
        "id": f"pt{pad}_v14", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Agricultural Economist: In Region {t}, planting drought-resistant genetically engineered soybeans requires 30% less irrigation water per bushel harvested than conventional soybean varieties. Therefore, if all commercial farmers in Region {t} transition completely to these engineered seeds, total agricultural water consumption from the regional aquifer will decrease substantially.\n\nWhich of the following is an assumption required by the economist's argument?",
        "options": [
            "Farmers in Region {t} will not exploit the water efficiency gains of the new seeds to dramatically expand total soybean acreage under cultivation.",
            "The market price per bushel of soybeans will remain exactly stable over the next five growing seasons.",
            "All neighboring agricultural regions will simultaneously adopt identical drought-resistant crops.",
            "Conventional soybean seeds will become entirely unavailable for retail purchase within two years.",
            "Genetically engineered soybeans produce identical nutritional protein profiles as heirloom crops."
        ],
        "answer": "A",
        "explanation": "Apply the Negation Test: If farmers DO exploit the per-bushel water savings by drastically increasing their total planted acreage (the Jevons Paradox), total aquifer water extraction could increase or remain flat rather than decline. Negating Option A collapses the argument; hence, it is a required assumption.",
        "trap": "Selecting market price stability (Option B), which is not logically necessary for total water consumption to decrease.",
        "estSeconds": 115
    })

    # Q15: CR Inference / Must Be True
    qs.append({
        "id": f"pt{pad}_v15", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Auditor: At corporate division Gamma, any capital expenditure exceeding $50,000 must receive written approval from the Chief Financial Officer. Any project that receives CFO approval must also undergo an environmental compliance audit unless it involves purely software infrastructure. Last quarter, Project Apex received CFO approval but was not required to undergo an environmental compliance audit.\n\nIf the auditor's statements are true, which of the following MUST also be true?",
        "options": [
            "Project Apex involved purely software infrastructure.",
            "Project Apex had a capital expenditure of less than $50,000.",
            "The Chief Financial Officer personally designed the software for Project Apex.",
            "All capital expenditures below $50,000 are automatically exempt from environmental audits.",
            "Project Apex was completed ahead of its scheduled delivery deadline."
        ],
        "answer": "A",
        "explanation": "Modus Tollens / Conditional logic: CFO approved -> Environmental audit UNLESS software infrastructure. Since Project Apex received CFO approval AND did not undergo an environmental compliance audit, it must satisfy the sole exemption condition: it involved purely software infrastructure.",
        "trap": "Assuming Project Apex must have cost less than $50,000 (Option B); the stimulus states it DID receive CFO approval, which is consistent with any cost.",
        "estSeconds": 100
    })

    # Q16: CR Evaluate Argument
    qs.append({
        "id": f"pt{pad}_v16", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Hospital Director: To reduce postoperative infection rates in Ward {t}, the surgical board recommends replacing all standard chlorhexidine skin prep solutions with a new iodine-impregnated barrier film. Clinical trials at a specialized academic research hospital indicated a 40% reduction in surgical site infections when using the barrier film.\n\nWhich of the following would be most useful to determine in evaluating whether switching to the barrier film will reduce postoperative infections at Ward {t}?",
        "options": [
            f"Whether surgical nursing staff in Ward {t} have been trained to apply the barrier film with the precise technique necessary to maintain an antimicrobial seal without causing microscopic skin tears.",
            "Whether the patent on the iodine barrier film will expire within the next seven fiscal years.",
            "Whether other regional community hospitals have publicly declared plans to purchase the film.",
            "Whether hospital patients express aesthetic satisfaction with the golden color of the iodine film.",
            "Whether the academic hospital where the trials occurred also purchased new surgical operating tables."
        ],
        "answer": "A",
        "explanation": "If proper application is technically challenging and staff lack adequate training, applying the film might cause micro-tears or imperfect seals, nullifying the clinical efficacy observed in the pristine research trial. Testing this question directly addresses whether the experimental benefit will translate to clinical reality.",
        "trap": "Evaluating patent longevity (Option B) or patient cosmetic opinions (Option D), which bear no logical relevance to infection control.",
        "estSeconds": 110
    })

    # Q17: CR Boldface Argument Structure
    qs.append({
        "id": f"pt{pad}_v17", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Paleontologists long believed that large theropod dinosaurs were exclusively solitary apex predators. **Recently discovered mass-burial bonebeds containing dozens of adult tyrannosaurid skeletons in close proximity have challenged this consensus.** Skeptics argue that such accumulations merely reflect catastrophic flash floods that washed isolated carcasses into a common river bend. However, sedimentological analysis shows that the bones were preserved in pristine, un-abraded condition over a sustained period of gentle mud deposition; **the hypothesis that tyrannosaurids engaged in coordinated pack-hunting remains the most parsimonious explanation.**\n\nIn the argument given, the two portions in boldface play which of the following roles?",
        "options": [
            "The first is evidence that challenges an established viewpoint; the second is the main conclusion of the argument.",
            "The first is the main conclusion of the argument; the second provides empirical evidence supporting that conclusion.",
            "The first introduces a hypothesis favored by skeptics; the second rejects that hypothesis completely.",
            "The first describes a phenomenon that the argument seeks to explain; the second is an intermediate claim used to dispute that explanation.",
            "The first is an assumption underlying a traditional theory; the second is a restatement of that traditional theory."
        ],
        "answer": "A",
        "explanation": "The first boldface statement introduces new fossil evidence that challenges the old solitary-predator consensus. The author then addresses a counter-argument (flash floods) and concludes in the second boldface that coordinated pack-hunting is the most parsimonious explanation (the argument's ultimate conclusion).",
        "trap": "Confusing the first boldface (empirical evidence) with the ultimate conclusion.",
        "estSeconds": 115
    })

    # Q18: CR Resolve Paradox / Discrepancy
    qs.append({
        "id": f"pt{pad}_v18", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Consumer Advocate: Over the past five years, automobile manufacturers introduced sophisticated automatic emergency braking (AEB) systems across 80% of new passenger vehicles. Despite this widespread adoption of collision-avoidance technology, total pedestrian fatalities caused by motor vehicles in Country {t} increased by 18% over the same five-year timeframe.\n\nWhich of the following, if true, most helps to resolve the apparent paradox described above?",
        "options": [
            "During the same period, consumer purchases overwhelmingly shifted toward heavier, high-hooded SUVs and pickup trucks that inflict far more lethal trauma upon impact, while pedestrian smartphone distraction simultaneously increased.",
            "Most drivers report that they feel slightly safer driving vehicles equipped with automatic emergency braking.",
            "Automobile manufacturers spent more advertising funds promoting AEB features than promoting interior comfort.",
            "State highway patrol departments hired fewer administrative clerks over the past three fiscal quarters.",
            "Highway speeds on interstate expressways remained capped at 65 miles per hour."
        ],
        "answer": "A",
        "explanation": "The paradox: AEB adoption expanded, yet pedestrian deaths rose. Option A explains both sides: vehicles became heavier with higher front hoods (making any collision that DOES occur far more lethal), while distracted walking increased incident rates, overpowering the braking system's benefits.",
        "trap": "Selecting driver subjective feeling of safety without linking it to pedestrian crash fatality mechanisms.",
        "estSeconds": 105
    })

    # Q19: CR Flaw in Reasoning
    qs.append({
        "id": f"pt{pad}_v19", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Retail Analyst: Every surveyed customer who rated our flagship department store 'excellent' visited the physical store at least three times last month. In contrast, customers who visited fewer than three times gave lower satisfaction ratings. Therefore, to raise overall customer satisfaction ratings, we should implement promotional coupons that entice customers to visit our store at least three times per month.\n\nThe retail analyst's reasoning is most vulnerable to criticism on which of the following grounds?",
        "options": [
            "It confuses a symptom or consequence of high customer satisfaction with its underlying cause.",
            "It relies on sample sizes that are mathematically insufficient to establish statistical significance.",
            "It presumes that promotional coupons are legally prohibited across department store retail.",
            "It assumes that customer satisfaction is completely unmeasurable in commercial markets.",
            "It contradicts established findings regarding online e-commerce competition."
        ],
        "answer": "A",
        "explanation": "Reverse causality / confusion of cause and effect: Highly satisfied customers visit the store frequently BECAUSE they love the store. Forcing or bribing dissatisfied customers to visit three times will not magically cause them to rate the store 'excellent'.",
        "trap": "Attacking survey sample size when no evidence of inadequate sampling is present in the prompt.",
        "estSeconds": 110
    })

    # Q20: CR Strengthen
    qs.append({
        "id": f"pt{pad}_v20", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "medium", "difficultyScore": 7,
        "stem": f"Energy Analyst: Utility providers in Province {t} plan to install grid-scale lithium-iron-phosphate battery facilities to store intermittent solar power generated during peak daylight hours. Critics assert that battery degradation will make energy storage unprofitable over a ten-year horizon. However, new thermal management systems keep operating temperatures strictly between 20 and 25 degrees Celsius, mitigating chemical degradation.\n\nWhich of the following, if true, provides the strongest additional support for the analyst's defense of the battery plan?",
        "options": [
            "Accelerated lifecycle testing indicates that keeping battery cells within that exact temperature window extends usable electrochemical lifespan beyond twelve years at minimal auxiliary energy cost.",
            "Solar panel manufacturing has become slightly less carbon-intensive over the past decade.",
            "Several residential consumers have expressed interest in installing small rooftop solar arrays.",
            "Wind turbines in neighboring maritime provinces generate surplus power during winter gales.",
            "Fossil fuel commodity prices experienced mild seasonal volatility last autumn."
        ],
        "answer": "A",
        "explanation": "The analyst claims the thermal management system mitigates degradation. Showing that this exact temperature range provenly extends lifespan to over 12 years (exceeding the critics' 10-year horizon) directly validates the economic viability of the project.",
        "trap": "Discussing solar panel manufacturing (Option B), which does not affect battery storage lifecycle economics.",
        "estSeconds": 105
    })

    # Q21: CR Weaken
    qs.append({
        "id": f"pt{pad}_v21", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 8,
        "stem": f"Mayor of District {t}: Last year, our administration doubled police foot patrols in commercial district Alpha, and recorded street robberies in Alpha declined by 40%. This dramatic reduction demonstrates that intensive foot patrols effectively reduce crime across our city and should be deployed citywide.\n\nWhich of the following, if true, most seriously undermines the mayor's argument?",
        "options": [
            "During the same period, street robberies in adjacent residential districts Beta and Gamma surged by an amount equal to the decline in Alpha as criminal activity merely displaced across borders.",
            "Police officers participating in foot patrols reported elevated levels of physical fatigue.",
            "The commercial district Alpha contains numerous high-end jewelry and electronics boutiques.",
            "Local news networks praised the police department's visible community presence in their evening broadcasts.",
            "Doubling foot patrols required reallocating internal department overtime budgets."
        ],
        "answer": "A",
        "explanation": "Crime displacement: If the patrols in Alpha merely squeezed robberies into neighboring districts Beta and Gamma without reducing total crime, foot patrols did not reduce crime citywide—they simply relocated it.",
        "trap": "Focusing on officer fatigue (Option B) or budget reallocations (Option E), which are operational costs rather than refutations of the crime reduction efficacy claim.",
        "estSeconds": 110
    })

    # Q22: CR Assumption
    qs.append({
        "id": f"pt{pad}_v22", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Wildlife Biologist: To protect the endangered river turtle population in Basin {t}, state rangers constructed wire cages over turtle nests along the sandbanks to prevent predatory raccoons from excavating eggs. Biologists project that this intervention will lead to a substantial increase in the juvenile turtle population reaching maturity over the next decade.\n\nWhich of the following is an assumption required by the biologists' projection?",
        "options": [
            "The wire cages do not trap newly hatched turtles inside or disorient them as they emerge and navigate toward the river.",
            "Raccoons represent the only animal species inhabiting the riparian ecosystem of Basin {t}.",
            "All river turtle eggs laid outside of protected wire cages are invariably consumed by predators.",
            "State rangers will receive increased legislative funding for wildlife conservation in future budget cycles.",
            "River turtle mating behaviors remain identical regardless of seasonal water temperatures."
        ],
        "answer": "A",
        "explanation": "Negation test: If the cages DO trap hatchlings or disorient them from reaching the water, the hatchlings will die on the sandbank, and the juvenile population will NOT increase. Thus, ensuring the cages do not inadvertently kill or trap emerging hatchlings is a required assumption.",
        "trap": "Believing raccoons must be the 'only' animal species (Option B); an extreme claim not required for the projection to hold.",
        "estSeconds": 115
    })

    # Q23: CR Boldface Argument Structure
    qs.append({
        "id": f"pt{pad}_v23", "test": t, "section": "VERBAL", "type": "CRITICAL_REASONING",
        "subtopic": "Critical Reasoning", "difficulty": "hard", "difficultyScore": 9,
        "stem": f"Economic Historian: Many analysts contend that the rapid economic expansion of industrial city {city} in the late nineteenth century was fueled entirely by municipal tax exemptions granted to textile mills. **However, neighboring cities that implemented even more aggressive tax abatement policies experienced economic stagnation during the same era.** Clearly, tax policy alone was not the decisive engine of growth. Instead, **{city}'s proximity to deep-water maritime ports and navigable railway junctions provided transportation advantages that competing inland municipalities could not duplicate.**\n\nIn the argument given, the two portions in boldface play which of the following roles?",
        "options": [
            "The first provides empirical evidence discrediting an explanation offered by others; the second presents an alternative explanation supported by the author.",
            "The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.",
            "The first introduces a thesis the author seeks to defend; the second provides a counter-example to that thesis.",
            "The first is an intermediate conclusion; the second is an unproven assumption underlying that intermediate conclusion.",
            "The first and the second represent two competing theories that the author considers equally plausible."
        ],
        "answer": "A",
        "explanation": "The first boldface statement introduces comparative historical data showing neighboring cities with tax abatements stagnated, discrediting the claim that tax exemptions were the sole growth driver. The second boldface articulates the author's own preferred causal explanation (deep-water ports and rail hubs).",
        "trap": "Confusing the first boldface (a comparative counter-premise) with the main conclusion.",
        "estSeconds": 115
    })

    return qs
