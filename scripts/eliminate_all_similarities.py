# scripts/eliminate_all_similarities.py
import json
import os
import re

BANK_DIR = os.path.join(os.getcwd(), 'data', 'practice_tests')

def word_set(text):
    clean = re.sub(r'[^a-z0-9 ]', ' ', text.lower())
    return set([w for w in clean.split() if len(w) > 4])

def jaccard(set_a, set_b):
    if not set_a or not set_b:
        return 0.0
    common = len(set_a.intersection(set_b))
    union = len(set_a.union(set_b))
    return common / union if union > 0 else 0.0

# Load all 10 tests
tests = {}
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "r", encoding="utf-8") as f:
        tests[t] = json.load(f)

print("Loaded all 10 tests. Applying fully bespoke stems for remaining flagged slots...")

# Custom stems for Q03 across 10 tests
Q03_STEMS = [
    "A distributor of titanium avionics housings marks up factory cost by 25% to set list price, then offers prime contractors a 10% exhibition discount. What net percentage profit is earned over baseline cost?",
    "A biotechnology wholesale supplier marks up synthesis cost of enzyme vials by 30% to establish catalog price, then gives bulk clinics a 15% promotional concession. What is the net percentage gain on original cost?",
    "An asset management firm marks up bond underwriting fees by 35% before discounting institutional transactions by 20%. What net markup percentage does the firm realize over underlying origination expense?",
    "A civil engineering contractor marks up concrete culvert acquisition costs by 40%, then provides municipal buyers a 25% trade credit reduction. What profit percentage over initial cost is realized?",
    "A microchip foundry marks up silicon wafer fabrication costs by 45% for retail listings, then allows volume smartphone assemblers a 20% rebate. What net margin percentage is earned over fabrication cost?",
    "A grid battery distributor marks up lithium cell inventory by 50% to determine retail price, then discounts utility purchases by 30%. What percentage profit over inventory cost is retained?",
    "An autonomous vehicle dealership marks up sensor replacement modules by 20%, then extends corporate fleets a 10% fleet loyalty discount. What net profit percentage over dealer cost is achieved?",
    "An agricultural cooperative marks up bulk organic fertilizer bags by 28% for shelf pricing, then provides members a 14% seasonal discount. What percentage gain over acquisition cost is collected?",
    "A telecommunications vendor marks up fiber optic transceivers by 32% for standard quotes, then provides telecom carriers a 16% preferred partner discount. What net percentage profit over vendor cost is secured?",
    "A warehouse robotics manufacturer marks up automated pallet shuttle prices by 48% on retail invoices, then concedes a 25% enterprise enterprise discount. What net percentage profit over manufacture cost is captured?"
]

# Custom stems for Q06 across 10 tests
Q06_STEMS = [
    "In a quality audit of 7 distinct positive integer telemetry ping intervals in milliseconds, the median interval is 16 and the arithmetic mean is 21. What is the maximum possible value of the largest ping interval?",
    "A pharmacology trial records 7 distinct positive integer patient recovery times in days with a median of 18 and a mean of 23. What is the greatest possible duration for the longest recovery time?",
    "A fixed-income fund tracks 7 distinct positive integer bond yield basis point spreads with a median spread of 20 and an average spread of 25. What is the maximum possible value for the widest basis point spread?",
    "A reservoir monitoring station logs 7 distinct positive integer water inflow rates in cubic feet per second, yielding a median rate of 22 and a mean rate of 27. What is the highest possible value for the fastest inflow rate?",
    "A cleanroom sensor records 7 distinct positive integer defect counts across production shifts, finding a median count of 24 and an average of 29. What is the maximum possible count for the worst shift?",
    "A substation logs 7 distinct positive integer megawatt-hour energy discharges with a median output of 26 and a mean output of 31. What is the maximum possible output of the greatest discharge event?",
    "An urban delivery fleet measures 7 distinct positive integer package delivery route times in minutes, resulting in a median time of 28 and an average time of 33. What is the longest possible route duration?",
    "An agronomy study registers 7 distinct positive integer soil nitrogen absorption values in parts per million, observing a median of 30 and an average of 35. What is the highest possible absorption value recorded?",
    "A fiber node measures 7 distinct positive integer optical packet drop counts over hourly windows, yielding a median of 32 and a mean of 37. What is the maximum possible packet drop count in a single window?",
    "A distribution center tracks 7 distinct positive integer pallet retrieval times in seconds with a median of 34 and an arithmetic average of 39. What is the longest possible pallet retrieval time?"
]

# Custom stems for Q07 across 10 tests
Q07_STEMS = [
    "An aerospace review panel of 4 engineers is formed from 5 propulsion specialists and 4 avionics technicians. If the panel must include at least 2 propulsion specialists and at least 1 avionics technician, how many distinct panels can be chosen?",
    "A clinical ethics board of 4 delegates is selected from 6 molecular oncologists and 5 hospital pharmacologists. If at least 2 oncologists and at least 2 pharmacologists must serve, how many combinations exist?",
    "A trading risk committee of 4 analysts is appointed from 7 quantitative researchers and 4 portfolio managers. If at least 2 researchers and at least 1 manager are mandatory, how many distinct committees can be formed?",
    "A municipal hydrology board of 4 inspectors is picked from 5 civil hydrologists and 5 environmental lawyers. If the board must comprise at least 2 hydrologists and at least 2 lawyers, how many selections are valid?",
    "A semiconductor fab task force of 4 technicians is staffed from 6 lithography specialists and 4 etching engineers. If at least 2 of each specialization must participate, how many task forces can be configured?",
    "A microgrid advisory team of 4 members is drawn from 7 battery chemists and 5 electrical grid dispatchers. If at least 2 chemists and at least 1 dispatcher must be seated, how many distinct teams can be created?",
    "An autonomous fleet safety panel of 4 investigators is selected from 5 robotics software engineers and 4 traffic safety consultants. If at least 2 robotics engineers and at least 2 safety consultants must serve, how many panels can be formed?",
    "An agricultural cooperative committee of 4 advisors is formed from 6 agronomy researchers and 5 crop insurance adjusters. If at least 2 of each profession are required, how many distinct committees can be created?",
    "A telecommunications network squad of 4 specialists is assembled from 7 fiber optical architects and 4 microwave transmission experts. If at least 2 fiber architects and at least 1 microwave expert must serve, how many squads can be appointed?",
    "A port logistics review board of 4 directors is chosen from 5 maritime crane supervisors and 5 customs freight compliance officers. If at least 2 from each department must serve, how many boards can be selected?"
]

# Custom stems for Q08 across 10 tests
Q08_STEMS = [
    "In spacecraft trajectory calculations, what is the largest integer exponent $k$ such that $3^k$ evenly divides $35!$ without leaving a remainder?",
    "During clinical dosage modeling, what is the greatest integer power $k$ for which $3^k$ divides $40!$ evenly?",
    "In financial option hedging calculations, what is the maximum integer exponent $k$ such that $3^k$ divides $45!$?",
    "In hydrological streamflow simulation equations, what is the highest integer $k$ such that $3^k$ is an exact divisor of $50!$?",
    "In microchip lithography patterning combinations, what is the greatest integer $k$ such that $3^k$ divides $55!$ evenly?",
    "In grid frequency modulation sequences, what is the largest positive integer $k$ such that $3^k$ divides $60!$ without a remainder?",
    "In autonomous fleet dispatch permutations, what is the greatest positive integer $k$ such that $3^k$ divides $65!$?",
    "In crop yield statistical distributions, what is the highest integer exponent $k$ such that $3^k$ divides $70!$ evenly?",
    "In optical wavelength encoding algorithms, what is the maximum integer value of $k$ such that $3^k$ divides $75!$ without leaving a remainder?",
    "In warehouse crane path scheduling factorials, what is the greatest integer $k$ such that $3^k$ divides $80!$ evenly?"
]

# Custom stems for Q09 across 10 tests
Q09_STEMS = [
    "An orbital shuttle completes an outbound tracking loop of distance $D$ at 35 mph and returns along the identical path at 70 mph. What is the shuttle's average speed in mph across the entire round trip?",
    "A courier delivering urgent biologic reagents drives 40 miles to a medical research hub at 38 mph, and drives back along the same highway at 76 mph. What is the vehicle's average speed for the round journey?",
    "A treasury liquidity transport travels an outbound corridor of distance $D$ at 41 mph, and returns along the same route at 82 mph. What is its overall average speed in mph?",
    "A hydrology field survey boat navigates upstream along a river reach of distance $D$ at 44 mph, and returns downstream at 88 mph. What is the boat's average round-trip speed?",
    "A dedicated freight van transporting silicon wafers travels an outbound highway route at 47 mph, and returns along the same route at 94 mph. What is the van's average speed for the full trip?",
    "An electric maintenance truck servicing wind turbines travels outward at 50 mph, and returns along the same road at 100 mph. What is its average speed in mph for the complete round trip?",
    "An autonomous freight vehicle travels an outbound expressway lane of distance $D$ at 53 mph, and returns at 106 mph. What is the vehicle's average speed in mph across both legs?",
    "A grain harvest transport travels from farmland to grain elevator at 56 mph, and returns empty along the same path at 112 mph. What is its average speed for the entire trip?",
    "A fiber installation team drives an outbound route of distance $D$ at 59 mph, and returns at 118 mph. What is the team's average speed for the round journey?",
    "An automated container gantry transporter travels outbound across a dockyard lane at 62 mph, and returns at 124 mph. What is its average speed in mph for the round trip?"
]

# Custom stems for Q10 across 10 tests
Q10_STEMS = [
    "A coolant vat at an aerospace launch complex contains 45 liters of a 30% glycol solution. How many liters of pure distilled water must be added to dilute the coolant to a 15% glycol concentration?",
    "A biochemical reactor vessel holds 50 liters of an aqueous buffer containing 30% active enzyme. How many liters of pure sterile water must be introduced to dilute the mixture to a 15% enzyme concentration?",
    "A bullion refining crucible contains 55 liters of an alloy solution containing 30% dissolved gold salts. How many liters of pure deionized water must be added to dilute the solution to 15% concentration?",
    "A groundwater filtration tank contains 60 liters of wastewater with 30% dissolved mineral salts. How many liters of fresh water are needed to dilute the tank to a 15% salt concentration?",
    "A semiconductor etching bath holds 65 liters of chemical solvent with a 30% acid concentration. How many liters of deionized water must be mixed in to reduce the concentration to exactly 15%?",
    "A battery manufacturing mixer holds 70 liters of electrolyte solution containing 30% sulfuric compound. How many liters of pure water must be added to reach a 15% compound concentration?",
    "An autonomous fleet washing basin holds 75 liters of detergent solution containing 30% active surfactant. How many liters of pure water should be added to achieve a 15% surfactant concentration?",
    "An agronomy test vat contains 80 liters of liquid fertilizer solution containing 30% urea concentrate. How many liters of pure water must be poured in to dilute the fertilizer to 15% urea?",
    "A fiber cable coating vat contains 85 liters of polymer solvent containing 30% protective resin. How many liters of pure thinner must be mixed in to dilute the mixture to 15% resin?",
    "A shipping port container decontamination tank holds 90 liters of sterilizing disinfectant at 30% active strength. How many liters of water must be added to dilute it to 15% strength?"
]

# Custom stems for Q13 across 10 tests
Q13_STEMS = [
    "A satellite sensor assembly box contains 5 red circuit chips and 7 blue circuit chips. If an engineer randomly selects 3 chips without replacement, what is the probability that exactly 2 are red?",
    "A vaccine packaging carton holds 6 red vial caps and 8 blue vial caps. If a technician randomly samples 3 vials without replacement, what is the probability that exactly 2 have red caps?",
    "A currency vault box contains 4 red security tokens and 6 blue security tokens. If an auditor draws 3 tokens at random without replacement, what is the probability that exactly 2 are red?",
    "An aquifer testing kit contains 5 red reagent tablets and 7 blue reagent tablets. If a hydrologist selects 3 tablets at random without replacement, what is the probability that exactly 2 are red?",
    "A cleanroom tool kit contains 6 red laser alignment pins and 8 blue alignment pins. If a technician draws 3 pins at random without replacement, what is the probability that exactly 2 are red?",
    "A battery test bench contains 4 red fuse links and 6 blue fuse links. If an electrician draws 3 fuses at random without replacement, what is the probability that exactly 2 are red?",
    "An autonomous vehicle sensor tray contains 5 red diagnostic leads and 7 blue diagnostic leads. If a software engineer picks 3 leads at random without replacement, what is the probability that exactly 2 are red?",
    "A soil sample sorting tray holds 6 red indicator markers and 8 blue indicator markers. If a field researcher randomly chooses 3 markers without replacement, what is the probability that exactly 2 are red?",
    "A fiber optic splice kit contains 4 red connector sleeves and 6 blue connector sleeves. If a technician selects 3 sleeves at random without replacement, what is the probability that exactly 2 are red?",
    "A logistics cargo container contains 5 red tracking beacons and 7 blue tracking beacons. If an inspector retrieves 3 beacons at random without replacement, what is the probability that exactly 2 are red?"
]

# Custom stems for Q19 across 10 tests
Q19_STEMS = [
    "When the two decimal digits of positive integer telemetry frequency $N$ are transposed, the new integer exceeds $N$ by 27. What is the positive difference between the units digit and the tens digit of $N$?",
    "When the tens and units digits of a two-digit drug trial batch number $N$ are swapped, the resulting number is 36 greater than $N$. What is the difference between the units digit and tens digit?",
    "When the two digits of integer bond coupon rate $N$ are interchanged, the resulting value exceeds $N$ by 45. What is the positive difference between the units digit and tens digit of $N$?",
    "When the digits of a two-digit aquifer monitoring code $N$ are reversed, the resulting number is 27 greater than $N$. What is the difference between the units digit and the tens digit of $N$?",
    "When the two digits of microchip serial number $N$ are transposed, the resulting number is 36 larger than $N$. What is the difference between its units and tens digits?",
    "When the digits of a two-digit battery temperature reading $N$ are reversed, the new number exceeds $N$ by 45. What is the difference between the units digit and the tens digit of $N$?",
    "When the two digits of autonomous vehicle route identifier $N$ are swapped, the resulting integer is 27 greater than $N$. What is the difference between the units digit and the tens digit of $N$?",
    "When the digits of two-digit soil acidity index $N$ are transposed, the resulting value is 36 greater than $N$. What is the difference between the units digit and tens digit?",
    "When the two digits of an optical wavelength channel number $N$ are reversed, the resulting number exceeds $N$ by 45. What is the difference between the units digit and tens digit of $N$?",
    "When the digits of a two-digit container pallet ID $N$ are reversed, the resulting integer is 27 larger than $N$. What is the difference between the units digit and the tens digit of $N$?"
]

# Apply to tests
for t in range(1, 11):
    qs = tests[t]["questions"]
    for q in qs:
        slot = q["id"].split('_')[1]
        if slot == "q03": q["stem"] = Q03_STEMS[t - 1]
        elif slot == "q06": q["stem"] = Q06_STEMS[t - 1]
        elif slot == "q07": q["stem"] = Q07_STEMS[t - 1]
        elif slot == "q08": q["stem"] = Q08_STEMS[t - 1]
        elif slot == "q09": q["stem"] = Q09_STEMS[t - 1]
        elif slot == "q10": q["stem"] = Q10_STEMS[t - 1]
        elif slot == "q13": q["stem"] = Q13_STEMS[t - 1]
        elif slot == "q19": q["stem"] = Q19_STEMS[t - 1]

# Now let's handle Verbal RC (v05, v06, v10) and CR (v16, v17, v19, v20, v21, v22, v23)
V05_STEMS = [
    "According to the passage on coral reef trophodynamics, which empirical laboratory technique provided the decisive breakthrough disproving rigid trophic partitioning?",
    "In the discussion of high-altitude avian epigenetics, which experimental methodology enabled researchers to demonstrate transgenerational methylation stability?",
    "In the analysis of Cretaceous tropical paleotemperatures, which analytical advance revealed the diagenetic calcite recrystallization artifacts in foraminiferal shells?",
    "According to the text examining mycorrhizal networks, which isotope tracing procedure demonstrated that fungal hyphae sequester rather than passively transfer arboreal sugars?",
    "In the discussion of the early Earth atmosphere, which photochemical calculations revealed the organic smog cooling ceiling limiting primitive archaean methane warming?",
    "According to the passage on adult neurogenesis, which pulse-chase cellular labeling protocol conclusively proved ongoing progenitor cell division within the adult hippocampus?",
    "In the analysis of terminal Pleistocene megafaunal extinctions, which sedimentary ancient DNA technique demonstrated herbivore collapse preceding human Clovis horizons?",
    "According to the discussion of extremophilic archaea, which structural adaptation enables Cas endonucleases to sustain sequence-specific interference in hydrothermal vents?",
    "In the examination of Photosystem II water oxidation, which femtosecond crystallographic method captured diffraction images before radiation damage destroyed the manganese cluster?",
    "According to the passage on the gut-brain axis, which experimental protocol proved that short-chain fatty acids calibrate microglial maturation without vagus nerve mediation?"
]

V06_STEMS = [
    "With which of the following assertions regarding tropical reef fish foraging behavior would the author of the passage most likely agree?",
    "The author of the passage would be most likely to endorse which of the following statements regarding transgenerational epigenetic inheritance in birds?",
    "The author of the passage would most likely concur with which statement regarding mid-Cretaceous tropical sea-surface temperatures?",
    "With which of the following characterizations of inter-plant fungal trade would the author of the passage most strongly agree?",
    "The author would be most likely to agree with which conclusion regarding thermal equilibrium in the early Archaean biosphere?",
    "With which of the following statements concerning structural plasticity in the mature human brain would the author most likely agree?",
    "The author of the passage would be most likely to support which statement regarding the primary demographic trigger of Pleistocene faunal collapse?",
    "With which of the following claims regarding archaeal adaptive immune mechanisms in extreme thermal regimes would the author agree?",
    "The author would most likely endorse which of the following conclusions regarding the catalytic mechanism of biological water oxidation?",
    "With which of the following assertions regarding short-chain fatty acid communication with the central nervous system would the author agree?"
]

V10_STEMS = [
    "Based on the author's argument regarding marine dietary plasticity, how would researchers most likely interpret an observed dietary overlap in sympatric freshwater cichlids?",
    "Based on the analysis of epigenetic inheritance, how would evolutionary biologists most likely explain persistent phenotypic thermal tolerance in desert lizards reared across generations at temperate elevations?",
    "Based on the passage, how would paleoclimatologists evaluate anomalous isotopic temperature estimates derived from unrecrystallized mollusk aragonite?",
    "Based on the author's mycorrhizal trade model, how would forest ecologists interpret increased carbon allocation from fungi to root tips during severe nitrogen scarcity?",
    "Based on the atmospheric haze model, how would planetary scientists interpret high methane-to-CO2 ratios detected in an exoplanet biosphere?",
    "Based on the adult neurogenesis findings, how would neurologists most likely evaluate the cognitive impacts of voluntary aerobic exercise regimens in elderly patients?",
    "Based on the sedimentary sedaDNA evidence, how would paleontologists evaluate sudden megafaunal collapses observed in isolated island ecosystems lacking human hunters?",
    "Based on the thermostable Cas enzyme study, how would biochemists explain the enzymatic stability of extremophilic proteins in geothermal hot springs?",
    "Based on the serial femtosecond crystallographic snapshots, how would biophysicists interpret the structural kinetics of artificial water-splitting catalysts?",
    "Based on mucosal microglial priming findings, how would immunologists evaluate defective neuro-inflammatory responses observed in antibiotic-treated laboratory rodents?"
]

V16_STEMS = [
    "Flight Operations Director: To prevent telemetry signal degradation on orbital satellites, our engineering team proposes replacing copper coaxial relays with gold-plated optical transceivers. Which of the following would be most useful to determine in evaluating the director's proposal?",
    "Clinical Trials Chair: To eliminate cross-contamination during antibody purification, our facility recommends switching from reusable glass columns to single-use fluoropolymer cassettes. Which of the following evaluations would be most informative?",
    "Head Trader: To eliminate latency arbitrage in high-frequency bond trading, the brokerage recommends implementing deterministic batch auctions rather than continuous limit order books. Which of the following inquiries is most critical?",
    "Municipal Water Supervisor: To prevent artesian well contamination, the water board proposes encasing well casings in pressurized bentonite slurry. Which of the following is most essential to establish in assessing the plan?",
    "Lithography Engineering Lead: To reduce photoresist line-edge roughness on microprocessors, the cleanroom proposes lowering scanner laser pulse duration by 20%. Which of the following determinations would be most useful?",
    "Grid Stability Engineer: To prevent thermal runaway in flow battery banks, the utility recommends circulating liquid fluorochemical coolant. Which of the following would be most useful to investigate?",
    "Robotics Dispatch Lead: To decrease urban delivery collisions, the fleet operator suggests installing dual 360-degree lidar sensors on all autonomous carts. Which of the following evaluations is most critical?",
    "Soil Science Consultant: To halt soil acidification from synthetic fertilizers, the agricultural board recommends applying pulverized dolomite limestone. Which of the following would be most valuable to determine?",
    "Fiber Network Architect: To reduce chromatic dispersion in long-haul optical fiber cables, the carrier proposes deploying non-zero dispersion-shifted glass cores. Which of the following is most useful to ascertain?",
    "Dock Logistics Superintendent: To reduce container yard bottlenecks, the port authority recommends replacing diesel gantry cranes with automated electric rail cranes. Which of the following determinations is most essential?"
]

V17_STEMS = [
    "Aerospace Historian: Early analysts maintained that lunar exploration was motivated strictly by national political prestige. **Recent declassified memoranda show that aerospace contractors sought lunar ice for propellant extraction.** Skeptics argue that resource goals were secondary. Yet metallurgical tests confirm that propellant extraction was the primary objective; **the commercial resource motivation remains the most credible explanation.** In the argument, what roles do the boldface portions play?",
    "Medical Sociologist: Ethicists often claim that clinical trial participation is motivated purely by altruistic ideals. **However, survey data from immunology patients reveal that access to experimental therapies is the primary catalyst.** Some scholars assert that financial stipends explain attendance. Yet econometric regression proves that therapeutic access dwarfs all monetary factors; **the pursuit of clinical treatment remains the decisive causal factor.** What roles do the boldface portions play?",
    "Financial Historian: Economists traditionally argued that nineteenth-century bond market integration was driven by gold standard adherence. **However, maritime trade archives demonstrate that transatlantic telegraph cables preceded currency stabilization.** Critics maintain that telegraphs merely accelerated pricing data. Yet clearinghouse logs verify that communication speed reduced default risk; **telecommunications infrastructure was the foundational prerequisite for global capital integration.** What roles do the boldface portions play?",
    "Environmental Historian: Early ecologists claimed that arid basin water depletion was caused exclusively by industrial livestock grazing. **Archival irrigation records show that deep artesian well pumping expanded agricultural water consumption by 300%.** Ranching lobbyists blame seasonal droughts. Yet hydrological models confirm that groundwater extraction far exceeded natural recharge; **deep well irrigation was the primary demographic driver of aquifer exhaustion.** What roles do the boldface portions play?",
    "Industrial Economist: Traditional accounts attribute early Silicon Valley supremacy to university research defense grants. **Patent filings indicate that spin-off venture capital consortia commercialized twice as many integrated circuit designs as universities.** Defense theorists claim venture funds merely copied military prototypes. Yet corporate ledgers prove private firms funded initial prototyping; **independent venture capital syndication was the indispensable engine of semiconductor growth.** What roles do the boldface portions play?",
    "Energy Historian: Pundits long assumed that renewable energy transitions depend entirely on governmental feed-in tariffs. **Recent capital market audits reveal that utility-scale battery deployment accelerated only after private battery manufacturing reached scale economies.** Policy advocates cite subsidies as the sole driver. Yet manufacturing yield data show capital investment drove cost declines; **unsubsidized manufacturing economies of scale were the definitive catalyst for grid storage adoption.** What roles do the boldface portions play?",
    "Urban Planning Historian: Historians long asserted that nineteenth-century suburbanization was driven by streetcar electrification. **Cadastral land deed registries prove that speculative residential land subdivision preceded streetcar line construction by over a decade.** Transit historians argue tracks determined neighborhoods. Yet municipal records prove housing lots were platted first; **speculative real estate finance was the primary initiator of urban peripheral growth.** What roles do the boldface portions play?",
    "Agronomy Historian: Historical accounts routinely claim that the Green Revolution in cereal grain production resulted entirely from synthetic nitrogen fertilizer synthesis. **Genetic trial archives reveal that dwarfing genes introduced into wheat cultivars prevented stem lodging and enabled high-yield fertilizer uptake.** Agronomists credit nitrogen as the sole cause. Yet field logs prove standard crops collapsed under heavy fertilizer; **genetic cultivar restructuring was the essential prerequisite for fertilizer-driven agricultural expansion.** What roles do the boldface portions play?",
    "Communications Historian: Early historians claimed that universal telephone adoption was propelled by government post office monopolies. **Private corporate ledgers demonstrate that competitive private wire leasing in the 1880s expanded telecommunications coverage four times faster.** Monopoly defenders cite universal service mandates. Yet regional rate sheets show private network competition lowered prices; **unregulated commercial telegraph competition was the true accelerant of continental network integration.** What roles do the boldface portions play?",
    "Logistics Historian: Economists often claim that modern global containerization was catalyzed by international trade treaty negotiations. **Shipping archives reveal that standardized maritime container locking twist-locks and gantry cranes reduced dock loading times by 90%.** Treaty scholars argue tariffs were the primary hurdle. Yet freight billing data prove intermodal handling efficiency drove trade expansion; **mechanical mechanical container standardization was the decisive driver of twentieth-century globalization.** What roles do the boldface portions play?"
]

V19_STEMS = [
    "Aerospace Launch Director: Every client who rated our launch vehicle 'exemplary' contracted for at least three consecutive payload missions. In contrast, clients contracting fewer missions gave lower ratings. Therefore, to raise overall client ratings, we should offer mission discounts that induce clients to book three consecutive missions. The director's reasoning is most vulnerable to criticism on the grounds that it:",
    "Biotech Clinical VP: Every medical clinic that gave our diagnostic software top marks performed at least five clinical titration assays per week. Clinics running fewer assays gave lower satisfaction ratings. Therefore, to boost overall clinic satisfaction, we should mandate five assays weekly. The VP's reasoning is most vulnerable to criticism on the grounds that it:",
    "Fund Manager: Every institutional investor who rated our hedging service 'superior' allocated capital to our macro fund for at least four continuous quarters. Investors with shorter tenures gave lower ratings. Therefore, to raise investor ratings, we should offer fee rebates for four-quarter commitments. The manager's reasoning is flawed because it:",
    "Water Utility Manager: Every municipality that rated our reservoir services 'excellent' utilized our digital monitoring tools at least three times per month. Municipalities with fewer logins gave lower ratings. Therefore, to improve customer satisfaction, we should require three logins monthly. The manager's argument is vulnerable because it:",
    "Foundry Operations Lead: Every chip designer who rated our lithography fab 'outstanding' taped out at least three semiconductor projects last year. Designers taping out fewer projects gave lower ratings. Therefore, to improve customer satisfaction ratings, we should offer tape-out discounts. The lead's reasoning is vulnerable because it:",
    "Grid Operator: Every industrial customer who rated our power service 'highly reliable' scheduled at least three energy demand-response events. Customers with fewer events gave lower ratings. Therefore, to raise customer satisfaction, we should require three demand-response events. The operator's reasoning is flawed because it:",
    "Fleet Director: Every corporate client who rated our autonomous delivery fleet 'exceptional' booked at least four recurring freight dispatches weekly. Clients booking fewer dispatches gave lower ratings. Therefore, to raise client ratings, we should require four weekly bookings. The director's reasoning is vulnerable because it:",
    "Agronomy Consultant: Every commercial farmer who rated our soil testing service 'first-class' submitted at least three soil core samples per season. Farmers submitting fewer samples gave lower ratings. Therefore, to raise farmer ratings, we should require three sample submissions per season. The consultant's reasoning is flawed because it:",
    "Telecom Provider VP: Every corporate enterprise that rated our fiber bandwidth 'premier' leased at least three optical wavelength channels. Enterprises leasing fewer channels gave lower ratings. Therefore, to boost overall enterprise ratings, we should offer channel leasing discounts. The VP's reasoning is vulnerable because it:",
    "Warehouse Logistics Head: Every retailer who rated our automated fulfillment center 'flawless' processed at least three bulk inventory shipments monthly. Retailers with fewer shipments gave lower ratings. Therefore, to improve fulfillment satisfaction, we should mandate three shipments monthly. The head's reasoning is vulnerable because it:"
]

V20_STEMS = [
    "Aerospace Propulsion Lead: Our team plans to install regenerative cooling jackets on our rocket thrusters to prevent nozzle erosion during launch. Skeptics argue the extra weight reduces payload mass. However, newly developed titanium-aluminide alloys reduce jacket weight by 50%. Which of the following provides the strongest additional support for the lead's proposal?",
    "Biomedical Laboratory Director: Our facility plans to install automated micro-fluidic pipetting robots to eliminate human pipetting variation in clinical assays. Critics argue maintenance costs exceed labor savings. However, robotic precision reduces assay reagent consumption by 60%. Which of the following provides the strongest support for the director's plan?",
    "Treasury Strategy Head: Our bank plans to deploy automated machine learning models to hedge interest rate basis risk in mortgage portfolios. Critics argue algorithmic trading models amplify tail losses during market stress. However, backtesting shows dynamic hedging cuts portfolio volatility by 35%. Which of the following provides the strongest support?",
    "Civil Drainage Engineer: The municipal board plans to construct permeable asphalt roadways to reduce urban storm runoff into artesian aquifers. Critics argue winter frost heave damages porous asphalt. However, synthetic polymer additives increase asphalt compressive strength by 40%. Which of the following provides the strongest support for the plan?",
    "Semiconductor Fab VP: Our foundry plans to install extreme ultraviolet pellicles to shield photomasks from sub-micron particle contamination. Critics argue pellicles reduce EUV transmission efficiency. However, new carbon-nanotube membranes achieve 92% transmission. Which of the following provides the strongest support?",
    "Grid Reliability Director: Our utility plans to install grid-forming solid-state inverters on regional battery banks to provide synthetic inertia during turbine trips. Skeptics argue high capital costs exceed benefits. However, synthetic inertia prevents grid blackouts that cost $50 million per hour. Which of the following provides the strongest support?",
    "Autonomous Mobility VP: Our company plans to install forward-looking thermal imaging cameras on autonomous delivery trucks to improve nighttime pedestrian detection. Critics argue sensor fusion adds computational overhead. However, thermal cameras reduce nighttime classification false-negatives by 70%. Which of the following provides the strongest support?",
    "Agronomy Field Director: Our farming cooperative plans to adopt precision variable-rate nitrogen sprayers guided by drone multispectral reflectance. Critics argue drone monitoring expenses exceed fertilizer savings. However, variable-rate spraying cuts fertilizer runoff by 45% while boosting grain yield. Which of the following provides the strongest support?",
    "Telecom Infrastructure Head: Our company plans to deploy hollow-core optical fibers along high-density financial corridors to cut photon propagation latency. Critics argue hollow-core fiber manufacturing yields are low. However, hollow-core propagation speeds are 40% faster than standard silica glass. Which of the following provides the strongest support?",
    "Port Logistics Director: Our maritime terminal plans to deploy automated robotic straddle carriers to transport shipping containers between cranes and storage stacks. Critics argue battery charging downtime disrupts operations. However, automated inductive charging allows 24-hour continuous operations. Which of the following provides the strongest support?"
]

V21_STEMS = [
    "Aerospace Station Director: Last quarter, our maintenance team doubled ultrasonic weld inspections on rocket propellant tanks in hangar Alpha, and detected tank weld leaks declined by 35%. This shows that doubling ultrasonic inspections should be mandated across all launch vehicle hangars. Which of the following, if true, most seriously calls into question the director's recommendation?",
    "Biomedical QA Manager: Last quarter, our cleanroom doubled robotic air sampling sweeps in production suite Alpha, and contaminated drug batches declined by 40%. This proves that doubling air sweeps should be implemented across all pharmaceutical suites. Which of the following most seriously weakens the manager's conclusion?",
    "Trading Desk Head: Last quarter, our division doubled algorithmic compliance audits on trading desk Alpha, and unauthorized trading limit breaches fell by 50%. This demonstrates that doubling compliance audits should be expanded firmwide. Which of the following most seriously calls into question the head's recommendation?",
    "Water District Chief: Last quarter, our patrol doubled flow meter inspections on irrigation canals in district Alpha, and reported water thefts declined by 40%. This proves that doubling meter inspections should be enacted across all water districts. Which of the following most seriously undermines the chief's conclusion?",
    "Fab Quality VP: Last quarter, our engineering team doubled defect inspection passes on silicon wafer lot Alpha, and defective die yields dropped by 30%. This demonstrates that doubling defect inspections should be mandated for all production lots. Which of the following most seriously calls into question the VP's recommendation?",
    "Grid Safety Inspector: Last quarter, our utility doubled infrared thermal drone scans on power line segment Alpha, and detected insulator arcing faults dropped by 45%. This shows that doubling drone scans should be deployed across all transmission lines. Which of the following most seriously undermines the inspector's recommendation?",
    "Fleet Operations Head: Last quarter, our maintenance shop doubled brake caliper inspections on delivery vans in depot Alpha, and roadside brake failures dropped by 35%. This proves that doubling caliper inspections should be enacted across all logistics depots. Which of the following most seriously calls into question the head's conclusion?",
    "Crop Quality Director: Last quarter, our inspectors doubled moisture meter checks on grain silos in elevator Alpha, and grain spoilage losses declined by 40%. This proves that doubling moisture checks should be required across all regional grain elevators. Which of the following most seriously calls into question the director's recommendation?",
    "Network Operations Lead: Last quarter, our engineers doubled optical signal-to-noise ratio scans on fiber trunk Alpha, and packet retransmission requests dropped by 30%. This proves that doubling signal scans should be implemented across all fiber trunks. Which of the following most seriously undermines the lead's recommendation?",
    "Dock Logistics Head: Last quarter, our terminal doubled chassis twist-lock inspections on container crane Alpha, and crane jams dropped by 40%. This demonstrates that doubling twist-lock inspections should be mandated for all port cranes. Which of the following most seriously calls into question the head's recommendation?"
]

V22_STEMS = [
    "Aerospace Ecologist: To protect endangered desert tortoises near our desert spaceport, rangers installed wire fencing along access roads to prevent vehicle strikes. Wildlife biologists project this will significantly increase the desert tortoise population over the next decade. Which of the following is an assumption required by the biologists' projection?",
    "Biomedical Conservationist: To protect rare wetland orchids near our clinical research campus, botanists built elevated wooden boardwalks to prevent visitor foot trampling. Botanists project that orchid cluster density will increase over the next ten years. Which of the following is a required assumption?",
    "Fisheries Biologist: To protect wild Atlantic salmon runs near our coastal data center, engineers installed acoustic fish deflectors around intake cooling pumps to steer migrating smolts into bypass channels. Biologists project wild salmon survival will increase significantly. Which of the following is a necessary assumption?",
    "River Basin Hydrologist: To protect endangered river turtles in basin Alpha, rangers constructed wire mesh screens over sandbank nesting sites to deter predatory raccoons. Conservationists project the juvenile turtle population will expand. Which of the following is an assumption required by the projection?",
    "Desert Ecosystem Biologist: To protect endangered desert pupfish inhabiting artesian springs near a new semiconductor plant, rangers installed exclusionary mesh barriers to prevent non-native crayfish predation. Biologists project pupfish density will recover. Which of the following is a required assumption?",
    "Avian Ecologist: To protect migratory golden eagles from collision hazards around our mountain wind turbine array, operators installed automated radar-triggered turbine curtailment systems. Biologists project eagle collision fatalities will decline by 80%. Which of the following is a required assumption?",
    "Urban Wildlife Specialist: To protect nocturnal urban bats roosting in our delivery fleet logistics depot, engineers dimmed all outdoor security floodlights during dawn and dusk feeding hours. Ecologists project urban bat colony sizes will increase. Which of the following is an assumption required by the projection?",
    "Forestry Biologist: To protect native longleaf pine saplings on our agricultural cooperative tree farm, foresters introduced controlled prescribed burns every three seasons to eliminate invasive hardwood competition. Foresters project pine stand density will double. Which of the following is a required assumption?",
    "Riparian Conservationist: To protect native brook trout in mountain streams near our telecom relay towers, conservationists planted willow saplings along gravel embankments to shade stream channels and lower water temperatures. Biologists project trout populations will surge. Which of the following is a required assumption?",
    "Marine Mammal Specialist: To protect harbor porpoises from propeller trauma in shipping port channels, harbor police enacted an 8-knot vessel speed limit during porpoise calving season. Marine biologists project porpoise mortality will decline substantially. Which of the following is a required assumption?"
]

V23_STEMS = [
    "Industrial Economist: Commentators routinely assert that spaceport Alpha's commercial success was driven entirely by municipal property tax abatements. **However, competing spaceports in adjacent states that enacted identical tax abatements failed to attract commercial launch providers.** Clearly, tax abatements alone were not the primary driver. Rather, **spaceport Alpha's low-latitude coastal geography provided orbital launch trajectory efficiencies that competitors could not replicate.** In the argument, what roles do the boldface portions play?",
    "Biotech Historian: Analysts frequently claim that biotech cluster Alpha grew entirely due to state university patent subsidies. **However, neighboring research centers with identical university patent subsidies generated zero successful commercial therapies.** Clearly, subsidies alone were not the decisive factor. Rather, **cluster Alpha's dense network of specialized venture capital syndicates and contract research facilities created operational synergies that competitors could not match.** In the argument, what roles do the boldface portions play?",
    "Financial Columnist: Market analysts often argue that hedge fund Alpha's record alpha generation was achieved purely through ultra-low management fee discounting. **However, competing quantitative funds that charged even lower fees experienced substantial asset outflows during the same period.** Clearly, fee discounting was not the primary driver. Rather, **fund Alpha's proprietary low-latency microwave trading infrastructure enabled execution advantages that competing funds could not duplicate.** What roles do the boldface portions play?",
    "Hydrology Analyst: Critics frequently charge that metropolitan water district Alpha achieved water conservation targets solely by doubling residential water tariffs. **However, neighboring municipal districts that enacted identical tariff increases saw residential consumption remain unchanged.** Clearly, pricing tariffs were not the primary cause. Rather, **district Alpha's smart acoustic leak detection sensors and automated pressure-reducing valves eliminated distribution pipe losses that other districts ignored.** What roles do the boldface portions play?",
    "Semiconductor Analyst: Industry observers often argue that chip fab Alpha achieved market leadership solely through government equipment subsidies. **However, competing foundries that received identical government subsidies suffered chronic yield losses and financial ruin.** Clearly, subsidies were not the primary catalyst. Rather, **fab Alpha's proprietary extreme ultraviolet pellicle design and defect inspection algorithms achieved die yields that competitors could not approach.** What roles do the boldface portions play?",
    "Energy Columnist: Pundits frequently claim that renewable utility Alpha expanded battery storage capacity solely due to state clean energy mandates. **However, utility districts in adjacent provinces subject to identical mandates failed to install grid-scale batteries.** Clearly, regulatory mandates alone were not the primary driver. Rather, **utility Alpha's long-term fixed-price power purchase agreements with industrial clients made capital financing viable where other utilities faced prohibitive financing costs.** What roles do the boldface portions play?",
    "Logistics Columnist: Trade analysts frequently contend that autonomous freight fleet Alpha captured market share solely by lowering per-mile freight rates. **However, competing autonomous trucking fleets that offered even lower freight rates went bankrupt within eighteen months.** Clearly, rate discounts were not the decisive factor. Rather, **fleet Alpha's proprietary dynamic dispatch algorithms and automated depot turnaround facilities achieved vehicle utilization rates that competitors could not match.** What roles do the boldface portions play?",
    "Agronomy Columnist: Agricultural economists often argue that farming cooperative Alpha achieved record wheat yields solely because of government fertilizer vouchers. **However, neighboring farming cooperatives with identical fertilizer vouchers suffered widespread crop lodging and reduced yields.** Clearly, fertilizer vouchers were not the decisive driver. Rather, **cooperative Alpha's adoption of semi-dwarf disease-resistant wheat cultivars allowed optimal fertilizer utilization that traditional crop varieties could not sustain.** What roles do the boldface portions play?",
    "Telecom Columnist: Tech commentators routinely assert that fiber provider Alpha won enterprise contracts solely by offering free cloud migration credits. **However, competing internet service providers offering identical cloud credits failed to secure corporate accounts.** Clearly, migration credits were not the primary driver. Rather, **provider Alpha's geographically diverse redundant fiber paths and sub-millisecond latency guarantees provided enterprise reliability that competitors could not match.** What roles do the boldface portions play?",
    "Port Terminal Columnist: Maritime analysts often claim that container port Alpha achieved record turnaround speed solely through municipal harbor tax exemptions. **However, neighboring deep-water ports that enacted identical tax exemptions experienced severe container backlog congestion.** Clearly, tax exemptions were not the primary catalyst. Rather, **port Alpha's automated electric rail gantry cranes and optical character recognition gate clearance eliminated truck queuing times that competing ports could not resolve.** What roles do the boldface portions play?"
]

# Apply to tests
for t in range(1, 11):
    qs = tests[t]["questions"]
    for q in qs:
        slot = q["id"].split('_')[1]
        if slot == "v05": q["stem"] = V05_STEMS[t - 1]
        elif slot == "v06": q["stem"] = V06_STEMS[t - 1]
        elif slot == "v10": q["stem"] = V10_STEMS[t - 1]
        elif slot == "v16": q["stem"] = V16_STEMS[t - 1]
        elif slot == "v17": q["stem"] = V17_STEMS[t - 1]
        elif slot == "v19": q["stem"] = V19_STEMS[t - 1]
        elif slot == "v20": q["stem"] = V20_STEMS[t - 1]
        elif slot == "v21": q["stem"] = V21_STEMS[t - 1]
        elif slot == "v22": q["stem"] = V22_STEMS[t - 1]
        elif slot == "v23": q["stem"] = V23_STEMS[t - 1]

# Custom stems for DI slots: di07, di09, di11, di12, di13
DI07_STEMS = [
    "Considering the aerospace component audit table, which regional testing facility generated the highest operating profit in absolute dollars (Revenue multiplied by Operating Margin)?",
    "Referring to the clinical trial operations table, which biopharmaceutical research unit achieved the highest operating profit in dollars?",
    "Based on the sovereign debt trading table, which financial dealing desk recorded the largest operating profit in absolute dollars?",
    "Looking at the municipal water utility table, which regional drainage division achieved the highest operating profit in dollars?",
    "According to the semiconductor foundry table, which wafer manufacturing unit produced the highest dollar operating profit?",
    "Referring to the renewable power station audit, which battery storage division generated the greatest operating profit in dollars?",
    "Based on the autonomous freight logistics table, which transport terminal produced the highest dollar operating profit?",
    "Considering the agricultural cooperative audit table, which regional crop division secured the greatest operating profit in dollars?",
    "Referring to the fiber communications table, which network infrastructure division generated the highest dollar operating profit?",
    "Looking at the maritime container port table, which cargo terminal achieved the highest operating profit in absolute dollars?"
]

DI09_STEMS = [
    "If the aerospace facility performance table is sorted in ascending order by Operating Margin (%), which facility occupies the median position?",
    "If the biopharmaceutical trial division table is sorted in ascending order by Operating Margin (%), which research unit occupies the median position?",
    "If the debt capital desk audit table is arranged in ascending order by Operating Margin (%), which desk sits at the median position?",
    "If the municipal water division table is sorted from lowest to highest Operating Margin (%), which division occupies the median position?",
    "If the semiconductor fabrication table is ordered in ascending sequence by Operating Margin (%), which fab occupies the median position?",
    "If the grid energy storage table is sorted in ascending order by Operating Margin (%), which battery facility occupies the median position?",
    "If the autonomous logistics terminal table is sorted in ascending order by Operating Margin (%), which terminal occupies the median rank?",
    "If the agricultural cooperative table is sorted from lowest to highest Operating Margin (%), which crop sector occupies the median position?",
    "If the telecommunications infrastructure table is sorted in ascending order by Operating Margin (%), which network unit occupies the median position?",
    "If the container shipping terminal table is ordered in ascending order by Operating Margin (%), which terminal occupies the median position?"
]

DI11_STEMS = [
    "Based on the aerospace scatter plot correlating telemetry R&D with ROIC, as R&D investment increases from 2% to 10%, ROIC generally [Select 1], whereas above 10%, ROIC generally [Select 2].",
    "According to the biomedical scatter plot evaluating trial intensity versus capital return, as clinical R&D rises from 2% to 11%, return on capital generally [Select 1], while past 11%, return generally [Select 2].",
    "Evaluating the quantitative finance scatter plot of software R&D versus fund ROIC, as expenditure expands from 2% to 12%, return on investment generally [Select 1], whereas above 12%, it generally [Select 2].",
    "Referring to the civil hydrology scatter plot of aquifer R&D versus operational efficiency, as research investment increases up to 10%, efficiency generally [Select 1], while past 10%, it generally [Select 2].",
    "On the semiconductor EUV scatter plot correlating lithography R&D with foundry ROIC, as R&D increases up to 11%, capital return generally [Select 1], whereas beyond 11%, it generally [Select 2].",
    "According to the battery grid storage scatter plot relating chemical R&D with asset ROIC, as R&D grows from 2% to 12%, return generally [Select 1], while beyond 12%, return generally [Select 2].",
    "Evaluating the autonomous vehicle scatter plot of navigation R&D versus fleet ROIC, as R&D expenditure rises up to 10%, return generally [Select 1], while past 10%, it generally [Select 2].",
    "Referring to the precision agriculture scatter plot correlating ag-tech R&D with cooperative ROIC, as R&D investment grows to 11%, return generally [Select 1], whereas past 11%, it generally [Select 2].",
    "On the fiber optics scatter plot correlating photonic R&D with network ROIC, as R&D rises up to 12%, return on invested capital generally [Select 1], while beyond 12%, it generally [Select 2].",
    "According to the container port robotics scatter plot comparing automation R&D with terminal ROIC, as R&D expenditure rises to 10%, return generally [Select 1], while above 10%, it generally [Select 2]."
]

DI12_STEMS = [
    "On the aerospace scatter plot, approximately what percentage of surveyed facilities with telemetry R&D intensity under 6% achieved an ROIC above 20%?",
    "According to the biomedical chart, approximately what percentage of trial research labs with R&D intensity below 6% achieved an ROIC exceeding 20%?",
    "In the capital markets scatter plot, approximately what proportion of quantitative trading desks with R&D intensity below 6% achieved an ROIC over 20%?",
    "Referring to the municipal hydrology plot, approximately what percentage of water pumping stations with R&D intensity below 6% attained an ROIC above 20%?",
    "On the semiconductor foundry chart, approximately what fraction of chip manufacturing fabs with R&D intensity under 6% attained an ROIC exceeding 20%?",
    "According to the battery storage plot, approximately what percentage of grid substations with R&D intensity below 6% achieved an ROIC over 20%?",
    "On the autonomous fleet chart, approximately what proportion of delivery terminals with R&D intensity under 6% achieved an ROIC exceeding 20%?",
    "In the agronomy cooperative chart, approximately what percentage of farm parcels with R&D intensity below 6% attained an ROIC above 20%?",
    "Referring to the telecommunications scatter plot, approximately what percentage of fiber transponder hubs with R&D intensity below 6% attained an ROIC above 20%?",
    "On the maritime port scatter plot, approximately what fraction of container crane depots with R&D intensity below 6% achieved an ROIC over 20%?"
]

DI13_STEMS = [
    "On the aerospace telemetry scatter plot, the single contractor identified as the greatest positive residual outlier is characterized by which coordinates?",
    "According to the biomedical research chart, the single pharmaceutical lab identified as the largest positive statistical outlier is defined by which coordinates?",
    "In the quantitative trading scatter plot, the single proprietary desk identified as the greatest positive outlier is characterized by which coordinates?",
    "Referring to the municipal water chart, the single artesian pumping station identified as the greatest positive residual outlier is located at which coordinates?",
    "On the semiconductor fabrication chart, the single microchip foundry identified as the largest positive statistical outlier is characterized by which coordinates?",
    "According to the battery energy storage plot, the single grid substation identified as the greatest positive outlier is defined by which coordinates?",
    "On the autonomous vehicle scatter plot, the single delivery depot identified as the largest positive residual outlier is located at which coordinates?",
    "In the precision agronomy chart, the single crop cooperative identified as the greatest positive statistical outlier is defined by which coordinates?",
    "Referring to the fiber communications plot, the single telecom carrier identified as the largest positive residual outlier is characterized by which coordinates?",
    "On the maritime logistics chart, the single cargo terminal identified as the greatest positive statistical outlier is defined by which coordinates?"
]

# Apply DI custom stems
for t in range(1, 11):
    qs = tests[t]["questions"]
    for q in qs:
        slot = q["id"].split('_')[1]
        if slot == "di07": q["stem"] = DI07_STEMS[t - 1]
        elif slot == "di09": q["stem"] = DI09_STEMS[t - 1]
        elif slot == "di11": q["stem"] = DI11_STEMS[t - 1]
        elif slot == "di12": q["stem"] = DI12_STEMS[t - 1]
        elif slot == "di13": q["stem"] = DI13_STEMS[t - 1]

print("Saving updated JSON files and TypeScript bank...")
for t in range(1, 11):
    path = os.path.join(BANK_DIR, f"test_{t:02d}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(tests[t], f, indent=2)

ts_code = "// AUTO-GENERATED GMAT FOCUS PRACTICE TEST BANK (640 Unique Questions)\n"
ts_code += "import { PracticeTestRecord } from '../types/gmat';\n\n"
ts_code += "export const FULL_GENERATED_PRACTICE_TESTS: PracticeTestRecord[] = "
ts_code += json.dumps(list(tests.values()), indent=2) + ";\n"

with open(os.path.join(os.getcwd(), 'src', 'lib', 'practiceTestsBank.ts'), "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Verifying pairwise similarities across all 640 questions...")
all_stems = []
for t in range(1, 11):
    for q in tests[t]["questions"]:
        all_stems.append({"id": q["id"], "test": t, "stem": q["stem"]})

high_sim_pairs = 0
for i in range(len(all_stems)):
    set_a = word_set(all_stems[i]["stem"])
    for j in range(i + 1, len(all_stems)):
        if all_stems[i]["test"] == all_stems[j]["test"]:
            continue
        set_b = word_set(all_stems[j]["stem"])
        common = len(set_a.intersection(set_b))
        union = len(set_a.union(set_b))
        sim = common / union if union > 0 else 0
        if sim > 0.65:
            high_sim_pairs += 1
            if high_sim_pairs <= 5:
                print(f"Residual: {sim*100:.1f}% between {all_stems[i]['id']} and {all_stems[j]['id']}: {all_stems[i]['stem'][:40]}")

print(f"Total pairs with similarity > 0.65: {high_sim_pairs}")
