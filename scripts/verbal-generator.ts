import { GMATTestQuestion } from './generate-full-bank';

export function generateVerbalQuestions(): GMATTestQuestion[] {
  const list: GMATTestQuestion[] = [];

  for (let test = 1; test <= 10; test++) {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const tStr = pad(test);

    // 3 Unique Academic Passages for this test
    const rcPassages = [
      // Passage 1: Biological & Environmental Sciences
      {
        id: `p1`,
        domain: 'Biological Sciences',
        text: test === 1
          ? `For decades, marine ecologists attributed the high species diversity of tropical coral reef fish exclusively to niche partitioning—the competitive exclusion principle dictating that species must exploit distinct ecological niches to coexist within nutrient-poor oligotrophic waters. Under this classical framework, minor morphological differences in jaw biomechanics or dental morphology were assumed to indicate rigid trophic specialization.\n\nHowever, recent high-throughput DNA metabarcoding of stomach contents across dozens of sympatric wrasse and damselfish species has challenged this equilibrium paradigm. Rather than exhibiting rigid dietary segregation, many ecologically similar species demonstrate substantial trophic overlap, consuming identical micro-invertebrates during periods of seasonal abundance. Coexistence appears sustained not by static anatomical specialization, but by dynamic behavioral plasticity: during lean periods, species alter their foraging depths and exhibit opportunistic scavenging rather than competitive displacement.`
          : test === 2
          ? `Epigenetic inheritance mechanisms, specifically cytosine DNA methylation and post-translational histone modifications, have challenged traditional neo-Darwinian assumptions regarding the exclusive role of nucleotide sequence variation in phenotypic evolution. In several migratory avian species, physiological adaptations to thermal stress and hypoxia appear to be transmitted transgenerationally without alterations in underlying genomic sequences.\n\nCritics of transgenerational epigenetic inheritance argue that such modifications represent transient developmental noise rather than stable evolutionary adaptations, pointing out that germline reprogramming typically erases methylation marks during gametogenesis. Yet empirical field studies in high-altitude passerines demonstrate that environmentally induced epialleles can persist across multiple generations, provided the selective environmental pressure endures.`
          : `Paleo-oceanographic reconstructions of the mid-Cretaceous thermal maximum have long presented an enigma: isotopic paleotemperature proxies indicate sea surface temperatures exceeding 35 degrees Celsius in equatorial waters, while general circulation models predict that evaporative cooling and cloud feedback should establish an upper thermal ceiling around 31 degrees Celsius.\n\nRecent geochemical analyses of pristinely preserved glassy foraminifera suggest that early studies were confounded by diagenetic calcite recrystallization, which systematically skewed oxygen-isotope ratios toward higher apparent temperatures. When corrected for post-depositional mineral exchange, Cretaceous tropical temperatures align with modern thermodynamic constraints, resolving the apparent conflict between geochemical data and atmospheric physics.`
      },
      // Passage 2: Economics, History & Business
      {
        id: `p2`,
        domain: 'Economic History',
        text: test % 2 === 0
          ? `Historians analyzing the commercial hegemony of the seventeenth-century Dutch Republic frequently cite the institutional innovation of the Amsterdam Wisselbank—a municipal exchange bank established in 1609. Traditional accounts credit the Wisselbank's success to its 100 percent bullion reserve backing, which eliminated counterparty default risk in international settlements.\n\nRecent archival reconstructions of bank ledgers indicate that the Wisselbank operated far more flexibly than previously acknowledged. Throughout the 1670s, during geopolitical conflicts with France, the bank secretly extended substantial unbacked overdraft credit to the Dutch East India Company (VOC). Rather than functioning as a rigid warehouse of precious metals, the Wisselbank operated as a proto-central bank, demonstrating that modern fractional reserve banking principles predated the formal establishment of the Bank of England.`
          : `The concept of 'patent thickets'—dense webs of overlapping intellectual property rights that companies must navigate to commercialize a new technology—is widely cited as a major drag on biomedical innovation. Economists theorize that fragmented ownership of upstream gene sequences creates an 'anti-commons tragedy,' where high transaction costs and royalty-stacking deter downstream therapeutic development.\n\nEmpirical research into pharmaceutical patent filings, however, presents a more nuanced reality. While upstream patent density has indeed proliferated, commercial biopharmaceutical firms have largely adapted through cross-licensing consortia and patent pools. The primary deterrent to development appears not to be licensing friction, but high clinical trial attrition rates and regulatory uncertainty.`
      },
      // Passage 3: Humanities & Cognitive Philosophy
      {
        id: `p3`,
        domain: 'Cognitive Linguistics',
        text: test % 3 === 0
          ? `In cognitive linguistics, the Conceptual Metaphor Theory pioneered by George Lakoff posits that human abstract reasoning is fundamentally grounded in sensorimotor experience. Abstract concepts such as time, morality, and causality are systematically structured through metaphorical mappings from physical domains, such as spatial orientation and bodily equilibrium.\n\nWhile this framework effectively explains cross-linguistic metaphors like 'time is motion,' critics from cognitive anthropology argue that Lakoff's model understates cultural variability. Studies of indigenous Amazonian and Australian languages demonstrate that temporal relationships can be mapped onto non-egocentric topographic landscapes rather than bodily axes, suggesting that cognitive metaphors are socio-historically contingent rather than biologically universal.`
          : `Sociological institutionalism posits that organizational structures are driven less by technical efficiency than by institutional isomorphism—the tendency of organizations in a shared field to adopt uniform practices to gain external legitimacy. DiMaggio and Powell identified three distinct mechanisms: coercive pressures from state regulation, mimetic imitation under environmental uncertainty, and normative standards disseminated by professional associations.\n\nRecent empirical evaluations of fintech startups reveal limits to this homogenizing framework. Rather than conforming to legacy banking compliance rituals, emerging financial firms engage in strategic institutional decoupling—publicly adopting standardized governance terminology while maintaining radically decentralized, algorithmic internal operations.`
      }
    ];

    // 11 RC Questions based on the passages (Q1-4 on P1, Q5-7 on P2, Q8-11 on P3)
    // Q1: RC Main Idea (Passage 1)
    list.push({
      id: `pt${tStr}_v01`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 6,
      passage: rcPassages[0].text,
      stem: 'Which of the following best expresses the primary purpose of the passage?',
      options: [
        'To dispute the empirical validity of high-throughput DNA metabarcoding in marine biology.',
        'To challenge a traditional ecological hypothesis by introducing findings that support an alternative behavioral model.',
        'To reconcile two competing theories regarding dietary specialization on tropical coral reefs.',
        'To argue that morphological variations in reef fish are solely determined by evolutionary anomalies.',
        'To provide experimental proof that competitive exclusion is the principal driver of biodiversity.'
      ],
      answer: 'B',
      explanation: 'The passage opens with the traditional view (niche partitioning based on morphology) and presents new empirical evidence (DNA metabarcoding showing trophic overlap and behavioral plasticity) that challenges this equilibrium paradigm.',
      trap: 'Choosing an overly broad or extreme option (such as A or D).',
      estSeconds: 100
    });

    // Q2: RC Inference (Passage 1)
    list.push({
      id: `pt${tStr}_v02`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'hard',
      difficultyScore: 8,
      passage: rcPassages[0].text,
      stem: 'It can be inferred from the passage that proponents of the classical framework assumed that:',
      options: [
        'Sympatric fish species consume identical micro-invertebrates during lean seasons.',
        'Species coexistence requires dynamic spatial migration across variable ocean depths.',
        'Anatomical differences in jaw morphology directly correspond to distinct foraging diets.',
        'High-throughput genetic sequencing yields unreliable dietary measurements.',
        'Oligotrophic waters contain an overabundance of primary producer nutrients.'
      ],
      answer: 'C',
      explanation: "The first paragraph explicitly states that under the classical framework, 'slight morphological variations in jaw biomechanics... were assumed to reflect strict dietary specialization.'",
      trap: 'Confusing the authors revised perspective with the classical view being questioned.',
      estSeconds: 110
    });

    // Q3: RC Specific Detail (Passage 1)
    list.push({
      id: `pt${tStr}_v03`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 7,
      passage: rcPassages[0].text,
      stem: 'According to the passage, recent DNA metabarcoding findings indicate that sympatric species:',
      options: [
        'Experience competitive displacement whenever nutrient levels decline.',
        'Share broad trophic overlap during periods of seasonal food abundance.',
        'Rely exclusively on structural jaw modifications to maintain feeding niches.',
        'Have eliminated micro-invertebrates from their dietary spectrum.',
        'Display identical foraging behaviors regardless of seasonal shifts.'
      ],
      answer: 'B',
      explanation: "Paragraph 2 notes that 'many ecologically similar species exhibit broad trophic overlap, consuming identical micro-invertebrates during periods of seasonal abundance.'",
      trap: 'Selecting a statement contradicted by seasonal behavioral shifts.',
      estSeconds: 95
    });

    // Q4: RC Author Attitude / Tone (Passage 1)
    list.push({
      id: `pt${tStr}_v04`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'hard',
      difficultyScore: 8,
      passage: rcPassages[0].text,
      stem: 'The author’s attitude toward the traditional niche partitioning model can best be described as:',
      options: [
        'Outright dismissive of all morphological research.',
        'Critical of its static assumptions in light of dynamic behavioral findings.',
        'Unquestioningly accepting of its historical methodology.',
        'Apathetic toward its ecological implications.',
        'Enthusiastic about its universal applicability.'
      ],
      answer: 'B',
      explanation: 'The author acknowledges that DNA evidence has complicated the equilibrium paradigm, demonstrating that static anatomical assumptions overlooked dynamic plasticity.',
      trap: 'Opting for extreme emotional labels like dismissive or apathetic.',
      estSeconds: 105
    });

    // Q5: RC Main Idea (Passage 2)
    list.push({
      id: `pt${tStr}_v05`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 6,
      passage: rcPassages[1].text,
      stem: 'The primary purpose of the passage is to:',
      options: [
        'Refute a revisionist historical hypothesis regarding early banking practices.',
        'Re-evaluate a conventional historical narrative by examining recent archival or empirical evidence.',
        'Propose an entirely novel mathematical formula for fractional reserve banking.',
        'Denounce the governance practices of seventeenth-century mercantile institutions.',
        'Synthesize two incompatible economic models into an overarching theory.'
      ],
      answer: 'B',
      explanation: 'Both variants of Passage 2 present an orthodox interpretation and qualify it through modern archival or empirical data.',
      trap: 'Selecting an option claiming total refutation when the author provides a nuanced re-evaluation.',
      estSeconds: 100
    });

    // Q6: RC Nuanced Inference (Passage 2)
    list.push({
      id: `pt${tStr}_v06`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'hard',
      difficultyScore: 8,
      passage: rcPassages[1].text,
      stem: 'Based on the passage, which of the following can most reasonably be inferred about the institutional system described?',
      options: [
        'It was structurally incapable of adapting to external economic stress.',
        'Its actual operational mechanisms were more flexible and complex than classical models assumed.',
        'It caused the immediate economic collapse of associated corporate entities.',
        'It functioned in complete isolation from governmental or geopolitical pressures.',
        'Its leaders publicly advertised all secret credit arrangements to maintain legitimacy.'
      ],
      answer: 'B',
      explanation: "The passage demonstrates that real operational practices (e.g. unbacked credit or cross-licensing consortia) exhibited far greater flexibility than rigid historical models assumed.",
      trap: 'Assuming an extreme negative outcome not mentioned in the text.',
      estSeconds: 110
    });

    // Q7: RC Function of Detail (Passage 2)
    list.push({
      id: `pt${tStr}_v07`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 7,
      passage: rcPassages[1].text,
      stem: 'The author mentions historical records or empirical filings primarily in order to:',
      options: [
        'Demonstrate that theoretical economic models are inherently useless.',
        'Substantiate a revisionist perspective with concrete documentary evidence.',
        'Argue that modern corporations should emulate pre-modern governance structures.',
        'Contrast successful mercantile strategies with failed regulatory mandates.',
        'Question the credibility of professional historians and archivists.'
      ],
      answer: 'B',
      explanation: 'Documentary evidence (ledgers, patent filings) is presented to back the qualified, revisionist viewpoint against orthodox assumptions.',
      trap: 'Choosing anti-theory rhetoric (option A) which mischaracterizes the academic tone.',
      estSeconds: 95
    });

    // Q8: RC Primary Purpose (Passage 3)
    list.push({
      id: `pt${tStr}_v08`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 6,
      passage: rcPassages[2].text,
      stem: 'The passage is primarily concerned with:',
      options: [
        'Outlining an influential conceptual theory and discussing empirical caveats or limitations raised by subsequent research.',
        'Advocating for the total abandonment of cognitive and sociological models.',
        'Tracing the biographical origins of twentieth-century academic scholars.',
        'Comparing the competitive advantages of fintech startups with commercial banks.',
        'Demonstrating the absolute biological universality of human metaphorical mapping.'
      ],
      answer: 'A',
      explanation: 'The passage introduces a major conceptual framework (Lakoff or DiMaggio/Powell) and presents counter-evidence highlighting its cultural or strategic boundaries.',
      trap: 'Picking an option that ignores the qualifying second paragraph.',
      estSeconds: 100
    });

    // Q9: RC Specific Detail (Passage 3)
    list.push({
      id: `pt${tStr}_v09`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'hard',
      difficultyScore: 7,
      passage: rcPassages[2].text,
      stem: 'According to the second paragraph of the passage, recent studies suggest that:',
      options: [
        'Theoretical frameworks require no qualification across non-Western cultures.',
        'Organizations and cognitive systems can exhibit strategic divergence rather than strict conformity.',
        'Regulatory isomorphism is the sole determinant of modern organizational survival.',
        'Bodily sensorimotor experience is universally identical across all human populations.',
        'Decoupling practices are promptly detected and penalized by institutional regulators.'
      ],
      answer: 'B',
      explanation: 'The concluding paragraph highlights decoupling or cultural variation, showing systems can diverge from expected universal homogeneity.',
      trap: 'Confusing the claims of the original theorists with the findings of recent empirical studies.',
      estSeconds: 105
    });

    // Q10: RC Nuanced Inference (Passage 3)
    list.push({
      id: `pt${tStr}_v10`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'hard',
      difficultyScore: 8,
      passage: rcPassages[2].text,
      stem: 'It can be inferred that the author would be most likely to agree with which of the following statements?',
      options: [
        'Broad theoretical models are most valuable when tested against diverse empirical and cultural contexts.',
        'Universalist paradigms in the social sciences are completely invulnerable to critique.',
        'Empirical anomalies should be discarded if they conflict with elegant foundational theories.',
        'Linguistic metaphors have no relation to sensory or physical experience.',
        'Organizational structures are solely determined by internal engineering efficiency.'
      ],
      answer: 'A',
      explanation: 'The author values the overarching model while demonstrating the necessity of testing it against empirical anomalies and cultural diversity.',
      trap: 'Selecting extreme binary stances (all correct or completely invalid).',
      estSeconds: 110
    });

    // Q11: RC Contextual Meaning (Passage 3)
    list.push({
      id: `pt${tStr}_v11`,
      test,
      section: 'VERBAL',
      type: 'READING_COMPREHENSION',
      subtopic: 'Reading Comprehension',
      difficulty: 'medium',
      difficultyScore: 7,
      passage: rcPassages[2].text,
      stem: 'The author’s discussion of empirical counter-examples functions primarily to:',
      options: [
        'Illustrate the boundaries and contingent nature of an otherwise influential paradigm.',
        'Provide comic relief within a dry academic discourse.',
        'Defend the original theorists against accusations of intellectual dishonesty.',
        'Prove that human behavior is entirely unpredictable and lawless.',
        'Discourage future scholars from investigating the topic.'
      ],
      answer: 'A',
      explanation: 'The counter-examples delineate the boundary conditions under which the theoretical framework holds.',
      trap: 'Viewing counter-examples as total refutations rather than nuanced boundary markers.',
      estSeconds: 95
    });

    // 12 Critical Reasoning Questions (Q12-Q23)
    // Q12: CR - Assumption (Negation Technique)
    list.push({
      id: `pt${tStr}_v12`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Mayor of City ${test}: "Implementing automated radar speed cameras across the downtown commercial district will reduce pedestrian injuries by at least 30%. Therefore, the city council should immediately approve funding for this camera installation."\n\nWhich of the following is an assumption on which the mayor's argument depends?`,
      options: [
        'Pedestrian traffic in the downtown commercial district will not significantly decrease over the next year.',
        'Automated speed cameras will not cause drivers to divert onto residential side streets with higher pedestrian density.',
        'The revenue generated by speeding fines will fully offset the initial hardware procurement costs.',
        'City drivers are currently unaware of existing municipal speed limits.',
        'Pedestrians are predominantly responsible for traffic collisions in commercial zones.'
      ],
      answer: 'B',
      explanation: "Negation test: If cameras DO cause drivers to divert onto residential side streets with higher pedestrian density, total pedestrian injuries would likely increase rather than decrease by 30%, which shatters the mayor's conclusion.",
      trap: 'Selecting option C (fiscal viability), which is a common real-world concern but not logically required for injury reduction.',
      estSeconds: 115
    });

    // Q13: CR - Weaken (Alternative Explanation)
    list.push({
      id: `pt${tStr}_v13`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Epidemiologist: "A five-year longitudinal study of 10,000 adults in Metropolitan Area ${test} found that individuals who consumed at least two cups of green tea daily experienced a 25% lower incidence of cardiovascular disease than non-drinkers. Therefore, compounds in green tea provide active biochemical protection against arterial disease."\n\nWhich of the following, if true, most seriously weakens the epidemiologist's conclusion?`,
      options: [
        'Green tea contains trace amounts of caffeine, which can temporarily elevate resting heart rate.',
        'Adults who regularly drink green tea are significantly more likely to engage in regular aerobic exercise and adhere to low-sodium diets.',
        'Black tea contains many of the same antioxidant flavonoids found in green tea leaves.',
        'The manufacturing process for bottled green tea extracts degrades certain volatile polyphenols.',
        'Several participants in the study reported occasional gastrointestinal discomfort after drinking green tea.'
      ],
      answer: 'B',
      explanation: 'Option B introduces a decisive confounding variable (lifestyle factors: aerobic exercise and low-sodium diets), demonstrating that the correlation between green tea and cardiovascular health is likely non-causal.',
      trap: 'Choosing option A (temporary heart rate elevation), which does not refute long-term arterial protection.',
      estSeconds: 110
    });

    // Q14: CR - Strengthen
    list.push({
      id: `pt${tStr}_v14`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Chief Marketing Officer: "To boost brand retention among Gen-Z consumers, Brand ${test} should reallocate 60% of its traditional display ad budget to micro-influencer video partnerships. A pilot campaign using micro-influencers generated 4 times the engagement rate of our standard programmatic banner ads."\n\nWhich of the following, if true, most strongly supports the CMO's recommendation?`,
      options: [
        'Micro-influencers charge substantially higher production fees per deliverable than large celebrity influencers.',
        'High engagement rates on micro-influencer video content correlate directly with long-term brand recall and product consideration in the target demographic.',
        'Several competing brands recently increased their television broadcast advertising expenditures.',
        'Programmatic banner ads remain the most widely used advertising format in enterprise software marketing.',
        'Social media platform algorithms occasionally restrict the organic reach of sponsored video posts.'
      ],
      answer: 'B',
      explanation: 'Option B bridges the crucial gap between intermediate engagement metrics (clicks/comments) and the stated business objective (brand retention and consideration among Gen-Z).',
      trap: 'Selecting an option regarding competitor behavior (C) rather than the causal efficacy of the proposed strategy.',
      estSeconds: 105
    });

    // Q15: CR - Boldface Argument Structure
    list.push({
      id: `pt${tStr}_v15`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `Financial Analyst: **Corporate share repurchases have surged to record levels over the past fiscal quarter.** Many retail investors assume that these buybacks signal executive confidence in future corporate earnings growth. **However, this optimistic interpretation overlooks the widespread use of stock-based executive compensation packages tied directly to earnings-per-share metrics.** Reducing the outstanding share denominator artificially inflates earnings per share without requiring any operational profit expansion. Therefore, current buyback volume should not be construed as evidence of impending economic expansion.\n\nIn the analyst's argument, the two portions in boldface play which of the following roles?`,
      options: [
        'The first is a premise presented to support the main conclusion; the second is that main conclusion.',
        'The first provides background factual context; the second introduces evidence that challenges an interpretation of that context.',
        'The first is an intermediate conclusion; the second is a counterexample refuting that conclusion.',
        'The first is an assumption underlying a widespread belief; the second defends that widespread belief.',
        'The first introduces an argument that the analyst accepts; the second rejects the analyst’s own conclusion.'
      ],
      answer: 'B',
      explanation: 'The first boldface statement establishes the undisputed empirical trend (buyback surge). The second boldface statement introduces the alternative causal mechanism (incentive structures) that challenges the common optimistic interpretation.',
      trap: 'Confusing the second boldface statement with the main conclusion (which appears in the final sentence).',
      estSeconds: 125
    });

    // Q16: CR - Evaluate the Argument (Crucial Variance)
    list.push({
      id: `pt${tStr}_v16`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Agricultural Board Member: "A newly bioengineered drought-resistant wheat variety yields 20% more grain per hectare than conventional cultivars under arid conditions. Therefore, subsidizing the adoption of this seed in Drought Zone ${test} will significantly enhance local farmers' net profitability."\n\nWhich of the following would be most useful to determine in evaluating the board member's recommendation?`,
      options: [
        'Whether the bioengineered seed requires specialized, costlier fertilizers and licensing fees that exceed the financial gain from the 20% yield increase.',
        'Whether farmers in neighboring non-arid districts are planning to switch to drought-resistant crops.',
        'Whether consumers prefer the taste of conventional wheat over bioengineered wheat in artisanal bakeries.',
        'How many centuries local farmers have cultivated conventional wheat varieties.',
        'Whether other drought-resistant crops, such as sorghum, can also be grown in the region.'
      ],
      answer: 'A',
      explanation: 'Profitability = Revenue minus Cost. If seed and chemical input costs exceed the 20% revenue boost, net profit will decline. Determining input costs is decisive.',
      trap: 'Focusing on cultural sentiment or historical duration (D), which does not affect economic profit.',
      estSeconds: 110
    });

    // Q17: CR - Resolve Paradox / Discrepancy
    list.push({
      id: `pt${tStr}_v17`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `During Year ${test}, Municipality X installed high-intensity LED streetlights across all major intersections to improve night-time visibility. City traffic safety records revealed that although daytime collisions remained constant, the total number of pedestrian-vehicle collisions at night increased by 18% following the installation.\n\nWhich of the following, if true, best explains the apparent discrepancy described above?`,
      options: [
        'The LED streetlights consumed 40% less electrical power than the legacy high-pressure sodium bulbs they replaced.',
        'Drivers perceived the brighter intersection lighting as conferring complete safety, leading them to travel at higher speeds and pay less attention to crosswalks.',
        'Several adjacent municipalities chose not to replace their existing incandescent streetlights.',
        'Pedestrian foot traffic at intersections was slightly higher during morning rush hours than at midnight.',
        'The municipality conducted annual maintenance on traffic signals and street markings.'
      ],
      answer: 'B',
      explanation: 'Risk compensation: Brighter lighting induced driver overconfidence, causing faster driving and reduced vigilance, resolving why better illumination led to more collisions.',
      trap: 'Selecting energy efficiency facts (A) that do not resolve the accident rate paradox.',
      estSeconds: 105
    });

    // Q18: CR - Logical Flaw / Vulnerability
    list.push({
      id: `pt${tStr}_v18`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Corporate Consultant: "Every department head at Corporation ${test} who attended the Executive Leadership Seminar reported an improvement in employee morale within their team. Therefore, requiring all mid-level managers to attend this seminar will guarantee an improvement in overall corporate morale."\n\nThe consultant's reasoning is most vulnerable to criticism on the grounds that it:`,
      options: [
        'Relies on subjective self-reporting by seminar attendees who have an incentive to justify the time spent attending.',
        'Assumes that what is true of senior department heads will necessarily apply with equal efficacy to mid-level managers.',
        'Fails to consider the monetary cost of enrolling all mid-level managers in external seminars.',
        'Confuses a correlation between two events with an unproven causal connection.',
        'Generalizes from a sample that may be biased toward managers who were already motivated to improve team culture.'
      ],
      answer: 'B',
      explanation: 'The flaw is a faulty analogy / extrapolation from one distinct group (senior department heads) to another group with different responsibilities and scope (mid-level managers).',
      trap: 'Selecting cost considerations (C) which criticize the policy rather than the logical validity of the causal argument.',
      estSeconds: 115
    });

    // Q19: CR - Inference / Must Be True
    list.push({
      id: `pt${tStr}_v19`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `All software engineers at TechCo ${test} who work on the Core Infrastructure team are proficient in Rust. Some engineers proficient in Rust also contribute to the Machine Learning platform. No engineer who contributes to the Machine Learning platform works on Frontend UI.\n\nIf the statements above are true, which of the following MUST also be true?`,
      options: [
        'No software engineer on the Core Infrastructure team works on Frontend UI.',
        'Some software engineers proficient in Rust do NOT work on Frontend UI.',
        'All engineers proficient in Rust work on the Core Infrastructure team.',
        'Every engineer who works on Frontend UI is proficient in Rust.',
        'No engineer on the Core Infrastructure team is proficient in Python.'
      ],
      answer: 'B',
      explanation: 'There exist engineers proficient in Rust who contribute to ML. Since NO engineer contributing to ML works on Frontend UI, those specific Rust engineers do NOT work on Frontend UI. Thus, statement B must be true.',
      trap: 'Generalizing to all Core Infrastructure engineers (A), which is not logically required by the premises.',
      estSeconds: 110
    });

    // Q20: CR - Weaken (Alternative Mechanism)
    list.push({
      id: `pt${tStr}_v20`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 8,
      stem: `Biologist: "Cichlid fish in Lake ${test} display two distinct color morphs: bright blue and dull gray. Laboratory experiments show that predatory birds capture gray fish twice as frequently as blue fish against murky water backgrounds. Therefore, natural selection by aerial predators is the primary mechanism maintaining the high frequency of blue morphs in the lake."\n\nWhich of the following, if true, most seriously weakens the biologist's conclusion?`,
      options: [
        'Blue male cichlids are substantially more visible to underwater predatory fish that hunt near the lake floor.',
        'Female cichlids strongly prefer to mate with blue males even under clear water conditions.',
        'The water in Lake X has become increasingly clear due to invasive filter-feeding mussels.',
        'Predatory birds hunt during daylight hours when water turbidity is lowest.',
        'Gray cichlids lay fewer eggs on average than blue cichlids.'
      ],
      answer: 'B',
      explanation: 'Sexual selection (female mate choice), rather than predator evasion, provides a powerful alternative mechanism that explains why blue morphs thrive despite predation pressures.',
      trap: 'Selecting underwater fish predation (A), which actually would select AGAINST blue morphs.',
      estSeconds: 115
    });

    // Q21: CR - Strengthen
    list.push({
      id: `pt${tStr}_v21`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'medium',
      difficultyScore: 7,
      stem: `Hospital Administrator: "Introducing computerized physician order entry (CPOE) systems in Ward ${test} reduced medication dosing errors by 45% during the first quarter. Therefore, implementing this CPOE system across all hospital wards will significantly reduce clinical medication errors network-wide."\n\nWhich of the following, if true, most strongly supports the administrator's conclusion?`,
      options: [
        'The types of pharmaceutical prescriptions and clinical workflow in Ward X are representative of those found in other hospital wards.',
        'Nursing staff in Ward X required only three hours of software onboarding.',
        'The software vendor guarantees technical support for five years.',
        'Several other regional hospitals use different competing electronic medical record systems.',
        'Medication errors represent the single largest liability insurance expense for hospitals.'
      ],
      answer: 'A',
      explanation: 'Establishing that the test ward is representative eliminates the vulnerability that the success was an artifact of unique ward characteristics.',
      trap: 'Confusing financial motivation (E) with proof of system efficacy.',
      estSeconds: 100
    });

    // Q22: CR - Assumption (Causal Link)
    list.push({
      id: `pt${tStr}_v22`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `Economist: "In Nation ${test}, regions with the highest density of fiber-optic broadband infrastructure experienced 3.2% higher GDP growth over the past decade than regions with copper broadband. To accelerate national GDP growth, the federal government should allocate infrastructure subsidies exclusively to expanding fiber-optic networks in rural regions."\n\nWhich of the following is an assumption on which the economist's argument relies?`,
      options: [
        'The higher GDP growth in fiber-dense regions was not primarily caused by other pre-existing advantages, such as higher levels of corporate headquarters and universities.',
        'Rural regions possess the human capital necessary to immediately staff technology startups.',
        'Copper broadband networks cannot be maintained for more than five additional years.',
        'Private telecommunication companies refuse to invest in fiber without government subsidies.',
        'Gross Domestic Product is the sole measure of regional economic welfare.'
      ],
      answer: 'A',
      explanation: 'Negation test: If the higher growth was caused by pre-existing urban advantages (universities, corporate HQs) rather than fiber optics, laying fiber in rural regions will not reproduce that growth.',
      trap: 'Picking absolute statements like option E (sole measure) which the argument does not require.',
      estSeconds: 120
    });

    // Q23: CR - Boldface Structure
    list.push({
      id: `pt${tStr}_v23`,
      test,
      section: 'VERBAL',
      type: 'CRITICAL_REASONING',
      subtopic: 'Critical Reasoning',
      difficulty: 'hard',
      difficultyScore: 9,
      stem: `Historian: **Traditional accounts hold that the fall of the Western Roman Empire was triggered primarily by sudden barbarian military invasions.** However, archaeological evidence from fifth-century frontier settlements reveals continuous, peaceful trade and cultural assimilation between Germanic tribes and Roman citizens. **This trade continued unbroken even during periods of supposed imperial collapse.** Thus, the collapse was driven by internal structural crises—specifically monetary hyperinflation and administrative decentralization—rather than sudden external conquest.\n\nIn the argument above, the two boldface portions play which of the following roles?`,
      options: [
        'The first states a claim that the argument aims to undermine; the second provides empirical evidence supporting that undermining.',
        'The first is the main conclusion of the argument; the second is a premise offered in support of that conclusion.',
        'The first is an established historical fact accepted by the author; the second is an interpretation the author rejects.',
        'The first introduces a hypothesis; the second proves that hypothesis conclusively.',
        'The first provides evidence for an argument; the second identifies a flaw in that argument.'
      ],
      answer: 'A',
      explanation: 'Boldface 1 represents the traditional view the historian seeks to undermine. Boldface 2 provides the archaeological trade evidence supporting the alternative structural explanation.',
      trap: 'Selecting option B which confuses the introductory traditional claim with the author’s own conclusion.',
      estSeconds: 120
    });
  }

  return list;
}
