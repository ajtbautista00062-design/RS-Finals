// LECTURES 12–13 — Thermal and Microwave Remote Sensing (86 PDF pages; printed slide = PDF page + 1)
lecture({ id: 'L12', short: 'Lectures 12–13', title: 'Thermal and Microwave Remote Sensing', file: 'Lecture 12 and 13 Thermal and Microwave RS.pdf', pages: 86 });

(function () {
  const t = [
    [1, 'Outline: Part 1 thermal, Part 2 microwave/radar', 'O', null],
    [2, 'TC 24 Lecture 11 (Part 1): Thermal remote sensing (title)', 'T', null],
    [3, 'Unlabeled true-color satellite scene (no text)', 'U', null],
    [4, 'Unlabeled grayscale (thermal-looking) image (no text)', 'U', null],
    [5, 'Thermal infrared of the EM spectrum', 'S', 'L12-tir'],
    [6, 'Thermal infrared (TIR): laws, 3–5 and 8–14 µm windows', 'S', 'L12-tir'],
    [7, 'What TIRS measures', 'S', 'L12-tir'],
    [8, 'Kinetic heat, radiant flux and temperature', 'S', 'L12-temps'],
    [9, 'Tkin–Trad correlation; emissivity', 'S', 'L12-temps'],
    [10, 'Temperature and Stefan–Boltzmann law', 'S', 'L12-laws'],
    [11, 'Emissivity (quartz example)', 'S', 'L12-temps'],
    [12, 'Brightness temperature vs physical temperature (Planck)', 'S', 'L12-laws'],
    [13, 'Thermal radiation laws: blackbody, S–B, Wien, emissivity', 'S', 'L12-laws'],
    [14, 'Thermal radiation law: application to RS (λmax table)', 'S', 'L12-laws'],
    [15, 'Day thermal vs dawn thermal image; heat island', 'S', 'L12-thermalapps'],
    [16, 'ETM+ thermal-band temperature map', 'S', 'L12-thermalapps'],
    [17, 'MODIS — Moderate-Resolution Imaging Spectroradiometer', 'S', 'L12-thermalapps'],
    [18, 'MODIS land surface temperature & emissivity (split window)', 'S', 'L12-thermalapps'],
    [19, 'Examples of the global MODIS LST product (3 Aug 2001)', 'S', 'L12-thermalapps'],
    [20, 'Urban heat island of San Antonio (MODIS; Xie & Ytuarte, 2005)', 'S', 'L12-thermalapps'],
    [21, 'Ocean surface temperature from MODIS', 'S', 'L12-thermalapps'],
    [22, 'Active fire detection: MODIS fire & thermal anomalies', 'S', 'L12-thermalapps'],
    [23, 'NOAA and other missions with thermal IR capability', 'S', 'L12-thermalapps'],
    [24, 'Thermal infrared (TIR) applications', 'S', 'L12-thermalapps'],
    [25, 'TC 24 Lecture 11 (Part 2): Microwave/radar remote sensing (title)', 'T', null],
    [26, 'Active and passive remote sensing', 'S', 'L12-mw'],
    [27, 'Atmospheric windows and radar bands', 'S', 'L12-mw'],
    [28, 'SAR–optical comparison (Radarsat-1 vs SPOT-3)', 'S', 'L12-mw'],
    [29, 'Unlabeled optical image of a coastal bay', 'U', 'L12-mw'],
    [30, 'Unlabeled SAR image of the same bay', 'U', 'L12-mw'],
    [31, 'Frequency–wavelength relation', 'S', 'L12-mw'],
    [32, 'Microwave band codes (table)', 'S', 'L12-mw'],
    [33, 'Why use radar?', 'S', 'L12-mw'],
    [34, 'Advantages of radar', 'S', 'L12-mw'],
    [35, 'Problems with radar', 'S', 'L12-mw'],
    [36, 'What does radar measure? (side-viewing geometry)', 'S', 'L12-measure'],
    [37, 'How it works: range/look direction, near and far range', 'S', 'L12-measure'],
    [38, 'Radar parameters vs target parameters', 'S', 'L12-measure'],
    [39, 'Scattering mechanism (1): smooth vs rough surface', 'S', 'L12-scatter'],
    [40, 'Scattering mechanism (2): double bounce', 'S', 'L12-scatter'],
    [41, 'Scattering mechanism (3): volumetric scattering', 'S', 'L12-scatter'],
    [42, 'Sources of radar backscattering from a vegetation canopy', 'S', 'L12-scatter'],
    [43, 'Types of scattering from a tree stand', 'S', 'L12-scatter'],
    [44, 'Strength of scattering depends on frequency (L, C, X)', 'S', 'L12-scatter'],
    [45, 'Observations for forests (C, L, P bands)', 'S', 'L12-scatter'],
    [46, 'Scattering mechanisms: surface types vs radar image', 'S', 'L12-scatter'],
    [47, 'Surface scattering: moisture and roughness', 'S', 'L12-scatter'],
    [48, 'Variability with look direction (X-band HH)', 'S', 'L12-pol'],
    [49, 'Polarization: like and cross', 'S', 'L12-pol'],
    [50, 'Polarization with radar (Ka-band HH vs HV)', 'S', 'L12-pol'],
    [51, 'Radar geometry: slant vs ground range', 'S', 'L12-geom'],
    [52, 'Slant-range display vs ground-range display (figure)', 'S', 'L12-geom'],
    [53, 'Range resolution (35.5 m vs 19.58 m example)', 'S', 'L12-geom'],
    [54, 'Azimuth resolution (120 m vs 240 m example)', 'S', 'L12-geom'],
    [55, 'Layover (diagram)', 'S', 'L12-distort'],
    [56, 'Foreshortening (diagram)', 'S', 'L12-distort'],
    [57, 'Foreshortening examples (ERS-1, JERS-1, X-band)', 'S', 'L12-distort'],
    [58, 'Layover: θ < α (slide heading reads “Foreshortening”)', 'S', 'L12-distort'],
    [59, 'Shadow (diagram)', 'S', 'L12-distort'],
    [60, 'Shadow: −α > γ', 'S', 'L12-distort'],
    [61, 'Speckle and multiple looks', 'S', 'L12-distort'],
    [62, 'Landsat 7 Path 116 Row 50: Pinatubo, Manila, Taal', 'S', 'L12-ph'],
    [63, 'RADARSAT backscatter: Mt. Pinatubo, Feb 1998', 'S', 'L12-ph'],
    [64, 'SPOT image of Mt. Pinatubo, Dec 1991', 'S', 'L12-ph'],
    [65, 'RADARSAT backscatter: western fan of Mt. Pinatubo', 'S', 'L12-ph'],
    [66, 'Clark Air Base: RADARSAT standard beam (25 m/pixel)', 'S', 'L12-ph'],
    [67, 'Changes in Pinatubo lahar deposits 1991–1996 (SPOT)', 'S', 'L12-ph'],
    [68, 'ERS-1 backscatter: low-backscatter lahar deposits', 'S', 'L12-ph'],
    [69, 'NASA TOPSAR shaded relief of lahar fans', 'S', 'L12-ph'],
    [70, 'RADARSAT ScanSAR beam 1 (50 m/pixel): Taal Volcano', 'S', 'L12-ph'],
    [71, 'Unlabeled SAR image (coast/urban)', 'U', 'L12-ph'],
    [72, 'Unlabeled SAR image (coast/urban)', 'U', 'L12-ph'],
    [73, 'Unlabeled SAR image (grid structures in water)', 'U', 'L12-ph'],
    [74, 'Unlabeled SAR image (same area, fewer structures)', 'U', 'L12-ph'],
    [75, 'Adding value to radar imagery', 'S', 'L12-value'],
    [76, 'Multi-polarisation radar (Douglas fir vs Radiata pine)', 'S', 'L12-value'],
    [77, 'Multi-temporal radar (SRL-2 X-SAR, NZ)', 'S', 'L12-value'],
    [78, 'Multi-wavelength radar (AIRSAR 68/24/5.6 cm)', 'S', 'L12-value'],
    [79, 'Floods: Maastricht two-date ERS SAR composite', 'S', 'L12-value'],
    [80, 'Generation of DEMs: SRTM X-SAR', 'S', 'L12-value'],
    [81, 'Land cover classification: airborne radar, 8 classes', 'S', 'L12-value'],
    [82, 'Forest stand age estimation (5.6 cm multi-polarisation)', 'S', 'L12-value'],
    [83, 'Response to moisture (Graham, 2001)', 'S', 'L12-value'],
    [84, 'An ambitious list of applications', 'S', 'L12-value'],
    [85, 'Conclusion (ALOS)', 'S', 'L12-value'],
    [86, 'Thank you for listening (closing)', 'X', null]
  ];
  PAGES('L12', t.map(r => [r[0], r[0] + 1, r[1], r[2], r[3]]));
})();

LIMIT('L12', [3, 4], 'PDF pages 3–4 are full-page images with no title, caption or text. They look like a true-color scene and a thermal/grayscale version of the same area, but the area, sensor and date are not stated, so they are not used for questions.');
LIMIT('L12', [29, 30], 'PDF pages 29–30 show an optical image and a SAR image of the same coastal bay without any caption. Only the general contrast is used (water dark in SAR, ships bright, clouds visible only in optical). The location is not stated in the PDF.');
LIMIT('L12', [71, 72, 73, 74], 'PDF pages 71–74 are four uncaptioned SAR images placed after the Philippine examples. Location, date and purpose are not stated, so no questions are based on them.');
LIMIT('L12', [60], 'The SAR image on PDF p. 60 (an island) has no caption. Only the slide’s shadow rule is assessed.');
LIMIT('L12', [16, 19, 20], 'Small legend values on the ETM+ temperature map (p. 16) and the MODIS LST maps (pp. 19–20) are not fully legible. Only the captioned facts (dates, products, day/night) are used.');
LIMIT('L12', [42], 'The canopy figure also shows a term σ°d that the slide’s subscript list does not define. It is reported here and not tested.');

NOTE('n12-deck', 'L12', 'L12-tir', [2, 25], 'Title slides read “TC 24 LECTURE 11 (Part 1)” and “(Part 2)”.', 'The source deck was numbered Lecture 11 in its original training course (TC 24). In this course it is Lectures 12 and 13. The content is the same.');
NOTE('n12-range', 'L12', 'L12-tir', [5, 6], 'Objects emit EM energy “in 3.0–100 µm”; for satellite use, TIR is limited to 3–5 µm and 8–14 µm.', 'The 3–100 µm span is the broad thermal-IR region. Atmospheric absorption (H₂O, CO₂, O₃) leaves the 3–5 µm and 8–14 µm windows usable from space. Earth-surface sensors (e.g., Landsat TM band 6, 10.4–12.5 µm) sit in the 8–14 µm window.');
NOTE('n12-spell', 'L12', 'L12-tir', [6], 'Laws named “Wiens Law” and “Kirchof’s Law.”', 'Correct spellings: Wien’s (displacement) law and Kirchhoff’s law. The slides name Kirchhoff’s law but do not explain it. Clarification: Kirchhoff’s radiation law says that at thermal equilibrium a body’s emissivity equals its absorptivity (good absorbers are good emitters).');
NOTE('n12-tirs', 'L12', 'L12-tir', [7], 'Slide title: “What TIRS measures.”', 'Used here generically for thermal-infrared sensing. TIRS is also the name of the Landsat 8/9 Thermal Infrared Sensor (Lecture 9).');
NOTE('n12-sb', 'L12', 'L12-laws', [10], '“The amount of energy, radiant flux (F_R), emitted by an object is directly proportional to its temperature,” and “radiation increases exponentially with temperature.”', 'F_R = εσT⁴: emission is proportional to the FOURTH POWER of absolute temperature (a power law, not strictly exponential). Doubling T multiplies emission by 2⁴ = 16. Absolute zero is 0 K (written without a degree sign) = −273.15 °C.');
NOTE('n12-sigma', 'L12', 'L12-laws', [10, 13], 'σ = 5.67 × 10⁻¹² W cm⁻² K⁻⁴ (slide 11), while slide 14 gives M_B = σT⁴ in W m⁻².', 'Both are the same constant in different units: 5.67 × 10⁻⁸ W m⁻² K⁻⁴ = 5.67 × 10⁻¹² W cm⁻² K⁻⁴ (because 1 m² = 10⁴ cm²). Check which unit the question uses.');
NOTE('n12-800k', 'L12', 'L12-laws', [14], 'Forest fires: “800ºK (527 ºC) ~3.62 µm.” Soil, water, rock: “300ºK (27 ºC) 9.66 µm.”', 'Write kelvin without a degree sign: 800 K and 300 K. Check: 2898/800 = 3.62 µm and 2898/300 = 9.66 µm (Wien’s law with λ in µm and T in K).');
NOTE('n12-modis', 'L12', 'L12-thermalapps', [17], 'MODIS: “36 bands, 1 in SWIR, 6 in mid IR, 10 in thermal IR.”', 'MODIS has 36 bands from about 0.4 to 14.4 µm. The slide counts only some infrared groups: 6 mid-IR (bands 20–25) and 10 thermal IR (bands 27–36) make up MODIS’s 16 thermal emissive bands. The remaining visible–SWIR bands are not itemized on the slide. MODIS flies on Terra and Aqua, and mission status should be checked in current NASA sources.');
NOTE('n12-npoess', 'L12', 'L12-thermalapps', [23], 'NPOESS (joint NOAA/NASA/DoD): “middle-wave thermal 8 bands, long-wave thermal 4 bands, 400–800 m”; GOES bands 3.78–4.03, 6.47–7.02, 10.2–11.2, 11.5–12.5 µm.', 'These are HISTORICAL specifications. NPOESS was restructured in 2010, and its VIIRS instrument now flies on the Suomi NPP and JPSS (NOAA-20, NOAA-21) satellites with a different final band design. The GOES bands listed are from the older GOES imagers; the current GOES-R series uses the 16-band ABI. Learn the slide values for the exam, but do not treat them as current mission facts.');
NOTE('n12-bandcodes', 'L12', 'L12-mw', [32], 'Band table boundaries: Ka 0.75–1.18 cm / K 1.19–1.67 cm (26.5 GHz); X 2.4–3.8 cm / C 3.9–7.5 cm (8.0 GHz).', 'Using ν(GHz) = 30/λ(cm), 26.5 GHz corresponds to 1.13 cm and 8.0 GHz to 3.75 cm. The slide’s wavelength edges are rounded slightly differently. Use the slide values on the exam and expect small rounding differences in other sources.');
NOTE('n12-cband', 'L12', 'L12-scatter', [45], '“C-band (cm–tens of cm): low penetration depth, leaves / needles / twigs.”', 'From the band table (slide 33), C-band wavelengths are 3.9–7.5 cm, i.e., a few centimetres. “Tens of cm” describes L-band (15–30 cm) and P-band (30–100 cm). The key idea still holds: shorter wavelength → less canopy penetration.');
NOTE('n12-layover', 'L12', 'L12-distort', [58], 'The slide heading on PDF p. 58 displays “Foreshortening”, while its bullet text defines LAYOVER (“extreme case of foreshortening, when incidence angle is less than slope angle toward radar (θ < α)”).', 'Layover is the extreme case of foreshortening: the top of a slope facing the radar is imaged before its base, because θ < α. Layover cannot be corrected. Foreshortening compresses the slope without reversing it.');
NOTE('n12-rangeres', 'L12', 'L12-geom', [53], 'R_r = τc / (2 cos γ), with γ = depression angle.', 'Equivalent form: R_r = τc / (2 sin θ), with θ the look (incidence) angle on flat terrain, because θ = 90° − γ. Range resolution is FINER (smaller) in the FAR range, where the depression angle is smaller.');
NOTE('n12-azres', 'L12', 'L12-geom', [54], 'R_a = S × λ / L (slant range × wavelength / antenna length), shown for a real aperture radar beam.', 'This is the real-aperture formula: azimuth resolution coarsens with range and improves with a longer antenna. The example values imply λ/L = 0.006 (e.g., a 3 cm wavelength with a 5 m antenna); the slide does not state λ or L. Synthetic aperture radar (SAR) synthesizes a long antenna, which makes azimuth resolution much finer and nearly independent of range.');
NOTE('n12-multilook', 'L12', 'L12-distort', [61], 'Speckle is “reduced by multiple looks — processing separate portions of an aperture and recombining these portions so that interference does not occur.”', 'Multi-look processing averages several independent looks. This reduces speckle (it does not eliminate it) at the cost of coarser spatial resolution, as the 1-, 4- and 16-look images show.');

// ───────────────────────── TOPICS ─────────────────────────
topic({
  id: 'L12-tir', lec: 'L12', title: 'Thermal infrared: spectrum, windows and what TIR measures', p: [5, 6, 7, 1, 2],
  summary: 'Every object above absolute zero emits EM energy. Thermal IR remote sensing measures this emitted energy, mainly through the 3–5 µm and 8–14 µm atmospheric windows.',
  keys: ['l12.tirrs', 'l12.abszero', 'l12.window', 'l12.w35', 'l12.w814', 'l12.solarcontam', 'l12.emitted'],
  blocks: [
    ['fig', 'fig-spectrum', 'Visible light (0.4–0.7 µm) and reflected IR (0.7–3 µm) carry reflected solar energy. Thermal IR (from about 3 µm) carries emitted energy; the usable satellite windows are 3–5 µm and 8–14 µm. Radar uses microwaves of about 1–100 cm.'],
    ['ul', ['All objects having temperature above **absolute zero (0 K)** emit EM energy (in 3.0–100 µm).', 'A human being has a normal temperature of 37 °C (98.6 °F).', 'Our eyes are only sensitive to visible energy (0.4–0.7 µm). Humans sense thermal energy through touch, while detectors (sensors) are sensitive to all of the EM spectrum.', 'All objects (vegetation, soil, rock, water, concrete, etc.) selectively absorb solar short-wavelength energy and radiate thermal infrared energy.']],
    ['ul', ['**Thermal infrared (TIR) RS** is the sensing of **emissive energy**, or “temperature” energy.', 'It is governed by the **blackbody concept**, the **Stefan–Boltzmann law**, **Wien’s law** and **Kirchhoff’s law**.', 'For satellite RS, TIR is typically limited to two portions because of atmospheric interference: **3–5 µm** and **8–14 µm**.', 'Solar reflectance contaminates the **3–4 µm window** to some degree during daylight hours, so it is used for Earth studies **only when measurements are made at night**.']],
    ['note', 'n12-range'], ['note', 'n12-spell'],
    ['h', 'What TIR sensing measures (slide 8)'],
    ['ul', ['Land and ocean surface temperature', 'Atmospheric temperature and humidity; trace gas concentrations', 'Radiation balance', 'Emissivity']],
    ['note', 'n12-tirs'], ['note', 'n12-deck']
  ],
  confused: [['Reflected IR (0.7–3 µm)', 'Thermal (emitted) IR (3–14 µm)', 'Reflected IR measures sunlight bounced off surfaces, so it needs the sun. Thermal IR measures energy emitted by the object itself, so it works at night.'],
    ['3–5 µm window', '8–14 µm window', '3–5 µm suits very hot targets (fires, ~800 K) and is contaminated by reflected sunlight by day. 8–14 µm suits normal Earth temperatures (~300 K).']],
  aid: 'Learning aid: “3-5 for fire, 8-14 for Earth.”'
});

topic({
  id: 'L12-temps', lec: 'L12', title: 'Kinetic heat, radiant flux, kinetic vs radiant temperature, emissivity', p: [8, 9, 11],
  summary: 'Kinetic (true) temperature is what a thermometer measures. Radiant temperature is what a remote radiometer “sees.” Because real materials have emissivity below 1, T_rad is slightly lower than T_kin.',
  keys: ['l12.temperature', 'l12.kinheat', 'l12.tkin', 'l12.radflux', 'l12.trad', 'l12.emissivity', 'l12.emisspec', 'l12.greybody'],
  blocks: [
    ['table', ['Term', 'Slide definition (slide 9)'], [
      ['Temperature', 'A measure of the motion of atoms and molecules in a substance'],
      ['Kinetic heat', 'Energy of particles of matter in random motion; aka internal, real, or true heat'],
      ['True kinetic temperature (T_kin)', 'Can be measured using a thermometer'],
      ['Radiant flux (watts)', 'Emitted EM radiation when particles (with kinetic heat) collide, change their energy state and emit electromagnetic radiation'],
      ['Radiant temperature (T_rad)', 'Concentration of the amount of radiant flux exiting (emitted from) an object']], null],
    ['ul', ['There is usually a **high positive correlation** between T_kin and T_rad (slide 10).', 'Radiometers placed some distance from the object measure its T_rad, which hopefully correlates well with its T_kin. **This is the basis of thermal infrared remote sensing.**', 'The relationship is not perfect: the remote measurement of T_rad is **slightly < T_kin**, because of a thermal property called **emissivity**.']],
    ['h', 'Emissivity (slide 12)'],
    ['ul', ['Real materials such as rocks, water, soil and road pavements do not behave as perfect black or grey bodies; they emit only a fraction of the energy emitted by a blackbody.', 'This emitting ability is called **emissivity (ε)**, a **dimensionless** scaling ratio.', 'The **emissivity spectrum** is the ratio of the radiance spectrum of a non-perfect emitter to that of a perfect emitter (blackbody) at the same temperature. The slide shows quartz at 70 °F: its radiance dips below the blackbody curve near 8–10 µm, giving emissivity dips there.']]
  ],
  confused: [['Kinetic temperature (T_kin)', 'Radiant temperature (T_rad)', 'T_kin is the internal, true temperature measured by contact (thermometer). T_rad is the remotely sensed temperature from emitted flux, and it is slightly lower because ε < 1.'],
    ['Kinetic heat', 'Radiant flux', 'Kinetic heat is the energy of particles moving inside the object. Radiant flux (W) is the EM radiation that leaves the object when those particles collide and change energy state.']],
  aid: 'Learning aid: “KIN = Kontact (thermometer), RAD = Remote (radiometer).”'
});

topic({
  id: 'L12-laws', lec: 'L12', title: 'Thermal radiation laws and brightness temperature', p: [10, 12, 13, 14],
  summary: 'Blackbody exitance rises with T⁴ (Stefan–Boltzmann). The dominant wavelength shifts as 2898/T (Wien). Emissivity links radiant and kinetic temperature (ε = T_rad⁴/T_kin⁴). Inverting Planck’s equation gives a brightness temperature below the physical temperature.',
  keys: ['l12.blackbody', 'l12.sb', 'l12.sigma', 'l12.wien', 'l12.lmax', 'l12.kirchhoff', 'l12.planck', 'l12.tb', 'l12.physT'],
  blocks: [
    ['formula', 'f-sb'], ['note', 'n12-sb'], ['note', 'n12-sigma'],
    ['formula', 'f-wien'], ['formula', 'f-emis'], ['formula', 'f-trad'],
    ['fig', 'fig-planck', 'Blackbody exitance curves (Planck) for 300 K (Earth surface) and 800 K (forest fire). The peak λ_max moves to shorter wavelengths as temperature rises: 9.66 µm vs 3.62 µm.'],
    ['table', ['Interest', 'Temperature', 'λ_max', 'Applicable RS system'], [
      ['Forest fires', '800 K (527 °C)', '~3.62 µm', 'MODIS bands 20–25 (3–5 µm)'],
      ['Soil, water, rock', '300 K (27 °C)', '9.66 µm', 'Landsat band 6 (10.4–12.5 µm); ASTER bands 12 & 13 (8–14 µm); MODIS bands 29–30 & 31–32 (8–14 µm)']], 'Dominant wavelength tells us which part of the thermal spectrum to sense in (slide 15).'],
    ['note', 'n12-800k'],
    ['h', 'Brightness temperature (slide 13)'],
    ['p', 'From the radiance recorded by a remote sensor, the Planck equation gives a temperature called the **brightness temperature T_b**, which is **less than the real physical (or surface) temperature T**.'],
    ['formula', 'f-planck'],
    ['p', 'The slide’s graph of T_b − T (for 270 K and 300 K, ε = 0.9 and 0.8) shows the gap growing with **longer wavelength**, **lower emissivity** and **higher temperature**. For example, at 300 K and ε = 0.8 the gap reaches about −18 K at 14 µm.']
  ],
  confused: [['Stefan–Boltzmann law', 'Wien’s displacement law', 'Stefan–Boltzmann gives HOW MUCH energy is emitted (∝ T⁴). Wien gives WHERE the emission peaks (λ_max = 2898/T).'],
    ['Brightness temperature T_b', 'Radiant temperature T_rad', 'Both are temperatures inferred from emitted radiation, and both are lower than the true temperature when ε < 1. The lecture uses T_rad with the Stefan–Boltzmann/emissivity relation, and T_b when inverting Planck’s equation at a given wavelength.']],
  aid: 'Learning aid: “Hotter → Brighter (T⁴) and Bluer (shorter λ_max).”'
});

topic({
  id: 'L12-thermalapps', lec: 'L12', title: 'Thermal imagery, sensors, products and applications', p: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  summary: 'Day thermal images show heated surfaces and shadows, while pre-dawn images show few shadows and reveal heat islands. MODIS provides LST (split window), SST and fire products. GOES, AVHRR and NPOESS-era instruments also carry thermal bands.',
  keys: ['l12.dawn', 'l12.uhi', 'l12.modis', 'l12.splitwindow', 'l12.fire', 'l12.goes', 'l12.avhrr', 'l12.npoess'],
  blocks: [
    ['table', ['Day thermal image', 'Dawn thermal image'], [['Contrasts between heated buildings and streets and areas in shadow', 'Differences in temperature have decreased sharply (no shadows), although part of the image is brighter, representing a local “heat island” effect']], 'Slide 16.'],
    ['ul', ['Slide 17: color-coded map of temperature variations measured by the thermal band of the **ETM+** sensor.',
      'Slide 21: **urban heat island** of downtown San Antonio detected by the MODIS temperature product (Xie & Ytuarte, 2005), comparing **July 14, 2:30 pm** with **July 15, 2:00 am**.',
      'Slide 20: examples of the **global MODIS LST product**, daytime and nighttime, 3 Aug 2001.',
      'Slide 22: **ocean (sea) surface temperature** from MODIS.',
      'Slide 23: **active fire detection** with the MODIS fire and thermal anomalies products. Fires in the Bahamas, Florida and Cuba (03 April 2004, 18:30 UTC) were identified using MODIS Aqua and outlined in red on the MODIS 1 km corrected reflectance product.']],
    ['h', 'MODIS — Moderate-Resolution Imaging Spectroradiometer (slide 18)'],
    ['ul', ['36 bands; the slide lists 1 in SWIR, 6 in mid IR, 10 in thermal IR.', 'Measures surface/cloud temperature, atmospheric temperature, cirrus clouds and water vapor, ozone, and cloud top altitude.']],
    ['note', 'n12-modis'],
    ['formula', 'f-splitwindow'],
    ['h', 'NOAA and other missions with thermal IR capability (slide 24)'],
    ['table', ['Mission', 'Thermal bands listed (µm) and resolution'], [
      ['GOES (NOAA)', '3.78–4.03 (4 km), 6.47–7.02 (8 km), 10.2–11.2 (4 km), 11.5–12.5 (4 km)'],
      ['AVHRR (NOAA)', '3.55–3.93, 10.30–11.30, 11.5–12.5, all 1.1 km'],
      ['NPOESS (joint NOAA/NASA/DoD)', 'Middle-wave thermal 8 bands, long-wave thermal 4 bands; 400–800 m (VIIRS summary)']], 'Historical specifications — see clarification.'],
    ['note', 'n12-npoess'],
    ['h', 'Thermal infrared applications (slide 25)'],
    ['ul', ['Surface spectral emittance and temperature (local to global scales)', 'Heat and moisture fluxes (exchanges)', 'Climatological processes', 'Evapotranspiration', 'Soil moisture variation', 'Hydrology, oceanography and ocean currents', 'Biomass distribution', 'Vegetation monitoring', 'Lithology & geology', 'Urban land use', 'Natural disaster monitoring (volcano)', 'Thermal pollution']]
  ],
  confused: [['Day thermal image', 'Pre-dawn thermal image', 'Day: solar heating and shadows dominate, giving strong contrasts. Dawn: shadows are gone and differences shrink, but heat islands stand out.'],
    ['MODIS LST product', 'MODIS fire & thermal anomalies product', 'LST estimates surface temperature with the split window (bands 31, 32 at ~11–12 µm). Fire products detect very hot targets (3–5 µm region, bands 20–25).']],
  aid: 'Learning aid: “Dawn shows the city’s fever” (the heat island), because the sun is not confusing the picture.'
});

topic({
  id: 'L12-mw', lec: 'L12', title: 'Microwave basics: active vs passive, bands, why radar', p: [26, 27, 28, 31, 32, 33, 34, 35, 29, 30],
  summary: 'Radar is ACTIVE microwave sensing that uses long wavelengths (1–100 cm) and records backscatter. Frequency is used instead of wavelength (ν = c/λ; ν(GHz) = 30/λ(cm)). Bands carry WWII code letters. Radar works in all weather, day or night, but its signal is complex to interpret.',
  keys: ['l12.passive', 'l12.active', 'l12.backscatter', 'l12.radar', 'l12.sar', 'l12.freq', 'l12.hz', 'l12.bandKa', 'l12.bandK', 'l12.bandKu', 'l12.bandX', 'l12.bandC', 'l12.bandS', 'l12.bandL', 'l12.bandP', 'l12.wwii', 'l12.allweather', 'l12.insar'],
  blocks: [
    ['table', ['Passive', 'Active'], [['Uses natural energy: either reflected sunlight or emitted thermal or microwave radiation', 'Sensor creates its own energy: transmitted toward Earth, interacts with atmosphere and/or surface, reflects back toward the sensor (backscatter)']], 'Slide 27.'],
    ['p', '**Active microwave (radar)** uses long-wavelength microwaves (**1–100 cm**) and records the amount of energy **back-scattered** from the terrain (slide 28).'],
    ['p', 'SAR–optical comparison (slide 29): a **Radarsat-1 C-band (HH), 1998** image beside a **SPOT-3 band 1 (visible green), 1996** image of an airfield. Smooth runways look dark in SAR, and textures differ from the optical view. Uncaptioned slides 30–31 show a bay where clouds appear in the optical image but the SAR image (water dark, ships bright) is unaffected.'],
    ['formula', 'f-freq'],
    ['table', ['Band', 'Wavelength (cm)', 'Frequency (GHz)'], [
      ['Mid-IR', '(3–5) × 10⁻⁴', '100,000–60,000'], ['Thermal IR', '(8–15) × 10⁻⁴', '37,500–20,000'],
      ['Ka', '0.75–1.18', '40.0–26.5'], ['K', '1.19–1.67', '26.5–18.0'], ['Ku', '1.67–2.4', '18.0–12.5'],
      ['X', '2.4–3.8', '12.5–8.0'], ['C', '3.9–7.5', '8.0–4.0'], ['S', '7.5–15.0', '4.0–2.0'],
      ['L', '15.0–30.0', '2.0–1.0'], ['P', '30.0–100', '1.0–0.3']], 'Microwave band codes (slide 33). The unusual names are an artifact of the original secret work on radar RS in World War II.'],
    ['note', 'n12-bandcodes'],
    ['h', 'Why use radar? (slides 34–36)'],
    ['table', ['Advantages', 'The same features as problems'], [
      ['Provides its own source of illumination; all weather, day or night (some areas are persistently cloud covered)', ''],
      ['Atmosphere is essentially transparent at radar wavelengths (longer than ~2 cm); generally unaffected by cloud or rain', ''],
      ['Penetrates clouds, vegetation, dry soil, dry snow', 'Signal is integrated over a depth range and a variety of materials'],
      ['Sensitive to water content and surface roughness (can measure waves in water)', 'Small amounts of water affect the signal; hard to separate volume response from surface response'],
      ['Sensitive to polarization and frequency', 'Many instrument choices, expensive to cover the range of possibilities; the math can be formidable'],
      ['Interferometry using 2 receiving antennas', '']], null]
  ],
  confused: [['Passive microwave', 'Active microwave (radar)', 'Passive microwave records naturally emitted microwave radiation. Radar transmits its own pulse and records the backscatter.'],
    ['Wavelength', 'Frequency', 'Inverse: longer wavelength = lower frequency. P-band (30–100 cm) is 0.3–1 GHz; Ka-band (~1 cm) is 26.5–40 GHz.']],
  aid: 'Learning aid, from shortest to longest wavelength: “Kind Kids Kiss X-ray Cats, Sometimes Licking Paws” = Ka, K, Ku, X, C, S, L, P.'
});

topic({
  id: 'L12-measure', lec: 'L12', title: 'What radar measures: geometry and parameters', p: [36, 37, 38],
  summary: 'Radar is side-viewing. Pulses illuminate strips at right angles to the flight direction (the range or look direction), from near range to far range. Radar brightness depends on radar parameters and target parameters.',
  keys: ['l12.sidelooking', 'l12.lookdir', 'l12.azimuth', 'l12.near', 'l12.far', 'l12.dielectric', 'l12.roughness', 'l12.incidence', 'l12.depression'],
  blocks: [
    ['fig', 'fig-radargeom', 'Side-looking radar geometry: the platform flies in the azimuth direction and transmits pulses sideways (range/look direction). The depression angle γ is measured from the horizontal, and the look (incidence) angle θ from the vertical. Near range is closest to the nadir track, far range farthest.'],
    ['ul', ['Radar has a **side-viewing geometry**. The platform illuminates the terrain and receives the scattered signal; the radar signal characteristics are carefully controlled; comparing the transmitted with the scattered signal lets us deduce target characteristics (slide 37).',
      'Pulses of active microwave energy illuminate strips of terrain **at right angles (orthogonal) to the direction of travel**, called the **range** or **look direction**. The terrain illuminated nearest the aircraft is the **near-range**; the farthest point is the **far-range** (slide 38).',
      'The slide 38 figure uses a pulse length of 10⁻⁷ s: objects 1 and 2 are 30 m apart and objects 3 and 4 are 10 m apart, and the returns are followed through times n to n+3.']],
    ['table', ['Radar parameters affecting radar brightness', 'Target parameters affecting radar brightness'], [['Wavelength', 'Roughness'], ['Polarisation', 'Bulk'], ['Scene incidence angle', 'Ground slope & azimuth'], ['Flight orientation', 'Target geometry'], ['', 'Dielectric constant']], 'Radar brightness is a combination of all these (slide 39).']
  ],
  confused: [['Range (look) direction', 'Azimuth (flight) direction', 'Range is ACROSS track, perpendicular to flight (the direction the pulse travels). Azimuth is ALONG track, parallel to flight.'],
    ['Depression angle γ', 'Look/incidence angle θ', 'γ is measured DOWN from the horizontal; θ is measured from the vertical. On flat terrain θ = 90° − γ, so near range has a large γ and small θ.']],
  aid: 'Learning aid: “Radar looks sideways, flies forward.” Look = range, fly = azimuth.'
});

topic({
  id: 'L12-scatter', lec: 'L12', title: 'Scattering mechanisms, vegetation and surfaces', p: [39, 40, 41, 42, 43, 44, 45, 46, 47],
  summary: 'Smooth surfaces reflect away from the radar (dark), rough surfaces scatter diffusely (brighter), corner reflectors give double bounce (very bright), and canopies or dry snow give volume scattering. Longer wavelengths penetrate deeper into vegetation.',
  keys: ['l12.specular', 'l12.diffuse', 'l12.double', 'l12.volume', 'l12.canopy', 'l12.penetration', 'l12.saturation', 'l12.wetrough', 'l12.attenuator'],
  blocks: [
    ['fig', 'fig-scatter', 'Four mechanisms: specular reflection off a smooth surface (angle of incidence = angle of reflection, little return), diffuse scattering off a rough surface (height variations comparable to the wavelength), double bounce off two perpendicular surfaces (corner reflector), and volume scattering inside a canopy or dry snow.'],
    ['ul', ['**Reflection off a smooth surface**: the angle of incidence, i, equals the angle of reflection (slide 40).',
      '**Scattering off a rough surface**: the variation in surface height is on the order of the incoming signal’s wavelength.',
      '**Double bounce (corner reflector)** (slide 41). A natural occurrence: reflecting off two smooth surfaces, such as grass and a freshly-cut tree stump.',
      '**Volumetric scattering** (slide 42), e.g., scattering in a tree. In dry snow, the incident radiation is both reflected and refracted/transmitted through the snow, the refracted part reflects off underlying ice, scatters off a chunk of ice in the snow, and finally refracts back toward the receiver.']],
    ['fig', 'fig-canopy', 'Sources of backscatter from a vegetation canopy (slide 43): σ°_c from leaves/canopy, σ°_t from trunks, σ°_s from soil, σ°_m from multiple interactions. Woody (forested) vegetation has all four; non-woody (herbaceous) vegetation has σ°_s, σ°_c and σ°_m.'],
    ['ul', ['Types of scattering from a tree stand (slide 44): **surface scattering from the top of the canopy**, **volume scattering** within it, and **surface and volume scattering from the ground**.',
      'Scattering strength depends on frequency (slide 45): L-band (23.5 cm), C-band (5.8 cm) and X-band (3 cm) penetrate the stand to decreasing depths.',
      '**C-band**: low penetration depth, interacting with leaves/needles/twigs. **L-band**: leaves/branches. **P-band**: can propagate through the canopy to branches, trunk and ground.',
      '**C-band quickly saturates** (even at relatively low biomass, it only sees the canopy). **P-band maintains sensitivity to higher biomass** because it “sees” trunks, branches, etc. (slide 46).']],
    ['note', 'n12-cband'],
    ['table', ['Surface (slide 47)', 'Dominant mechanism', 'Radar image appearance'], [
      ['Flat surface', 'Specular reflection away from the sensor', 'Black / very dark'], ['Forest', 'Volume scattering', 'Bright, mottled'], ['Cropland', 'Surface/volume mix', 'Medium gray, field patterns'],
      ['Mountains', 'Slope-dependent', 'Bright slopes facing the radar, dark slopes facing away'], ['Rough surface', 'Diffuse scattering', 'Medium gray'], ['City', 'Double bounce (corner reflectors)', 'Very bright']], 'Mechanisms by surface type, from the schematic on slide 47.'],
    ['h', 'Surface scattering (slide 48)'],
    ['ul', ['Scattering from surfaces depends on **moisture and roughness**. Note that we could get penetration into soils at longer wavelengths or with dry soils (sand).', 'Surfaces are typically **bright if wet and rough**, **dark if dry and smooth**.', 'When vegetation is present it can act as the **dominant scatterer OR as an attenuator** of the ground scattering.']]
  ],
  confused: [['Specular reflection', 'Double bounce', 'Both involve smooth surfaces. Specular reflection off ONE smooth surface sends energy away (dark). Two perpendicular smooth surfaces return energy straight back (very bright).'],
    ['Surface scattering', 'Volume scattering', 'Surface scattering happens at an interface (soil, water, canopy top). Volume scattering happens through a 3-D medium (canopy, dry snow), with many internal scatterers.'],
    ['C-band in forest', 'P-band in forest', 'C-band (short) sees the canopy top and saturates at low biomass. P-band (long) reaches trunks and ground and keeps sensitivity at high biomass.']],
  aid: 'Learning aid: “Wet & Rough = bRight; Dry & Smooth = dark.”'
});

topic({
  id: 'L12-pol', lec: 'L12', title: 'Look direction and polarization', p: [48, 49, 50],
  summary: 'The same terrain looks different from different look directions. Polarization is written as transmit–receive: HH and VV are like-polarized, HV and VH cross-polarized.',
  keys: ['l12.lookvar', 'l12.polarization', 'l12.like', 'l12.cross'],
  blocks: [
    ['p', '**Variability with look direction** (slide 49): two X-band HH images of the same mountains taken from opposite look directions show different bright and dark slopes.'],
    ['fig', 'fig-pol', 'Polarization codes: the first letter is the transmitted polarization and the second is the received one. HH and VV are like-polarized; HV and VH are cross-polarized.'],
    ['ul', ['1st letter is transmitted polarization, 2nd is received (slide 50).', 'Like-polarized: **VV, HH**. Cross-polarized: **HV, VH**.', 'Slide 51 compares Ka-band HH with Ka-band HV images of the same area: the polarizations bring out different features.']]
  ],
  confused: [['HV', 'VH', 'Both are cross-polarized. HV = transmit horizontal, receive vertical. VH = transmit vertical, receive horizontal.']],
  aid: 'Learning aid: “Send first, hear second” (the transmit letter comes first).'
});

topic({
  id: 'L12-geom', lec: 'L12', title: 'Radar geometry and resolution', p: [51, 52, 53, 54],
  summary: 'Uncorrected radar images are in slant-range geometry; ground-range geometry puts features in their planimetric positions. Range resolution = τc / (2 cos γ) improves toward far range. Real-aperture azimuth resolution = Sλ/L worsens with range.',
  keys: ['l12.slant', 'l12.ground', 'l12.rangeres', 'l12.azres', 'l12.pulselength', 'l12.antenna', 'l12.rar'],
  blocks: [
    ['ul', ['Radar geometry is “weird,” not like cameras or multispectral sensors (slide 52).', 'Uncorrected radar imagery is displayed in **slant-range geometry**, based on the distance from the radar to each feature.', 'It can also be displayed in **ground-range geometry**, so that features are in their proper planimetric (x, y) positions.', 'Radar resolution has **2 dimensions: range and azimuth**.']],
    ['p', 'Slide 53 figure: two fields A and B of EQUAL ground size appear with different lengths (a < b) on the slant-range image. The near-range field is compressed most.'],
    ['formula', 'f-rangeres'], ['note', 'n12-rangeres'],
    ['steps', ['Pulse length τ = 0.1 × 10⁻⁶ s; c = 3 × 10⁸ m s⁻¹ → τc = 30 m → τc/2 = 15 m', 'Near range, depression angle 65°: R_r = 15 / cos 65° = 15 / 0.4226 = **35.5 m** → towers 1 & 2 (30 m apart) are **not resolved**', 'Far range, depression angle 40°: R_r = 15 / cos 40° = 15 / 0.7660 = **19.58 m** → towers 3 & 4 (30 m apart) **are resolved**']],
    ['formula', 'f-azres'], ['note', 'n12-azres'],
    ['steps', ['Near range S = 20 km → R_a = **120 m** → tanks 1 & 2 (200 m apart) **are resolved**', 'Far range S = 40 km → R_a = **240 m** → tanks 3 & 4 (200 m apart) are **not resolved**', 'Doubling the slant range doubles R_a; the real-aperture beam widens with distance']]
  ],
  confused: [['Range resolution vs distance', 'Azimuth resolution vs distance', 'Range resolution gets BETTER toward far range (smaller depression angle). Real-aperture azimuth resolution gets WORSE toward far range (larger S).'],
    ['Slant range', 'Ground range', 'Slant range is the line-of-sight distance from the antenna, so near-range features are compressed. Ground range is the corrected horizontal distance (planimetric).']],
  aid: 'Learning aid: “Range likes FAR, Azimuth likes NEAR.”'
});

topic({
  id: 'L12-distort', lec: 'L12', title: 'Geometric distortions and speckle', p: [55, 56, 57, 58, 59, 60, 61],
  summary: 'Side-looking geometry causes foreshortening (slopes facing the radar are compressed and bright), layover (their tops are imaged before their bases, θ < α) and radar shadow (back-slopes steeper than the depression angle get no signal). Speckle comes from coherent interference and is reduced by multi-looking.',
  keys: ['l12.foreshort', 'l12.layover', 'l12.shadow', 'l12.speckle', 'l12.multilook'],
  blocks: [
    ['fig', 'fig-distort', 'The three geometric distortions, with the radar on the left. Foreshortening: the foreslope a–b is compressed in slant range. Layover: the top b is imaged before the base a. Shadow: the back-slope receives no illumination.'],
    ['table', ['Distortion', 'Condition (lecture)', 'Appearance', 'Correctable?'], [
      ['Foreshortening', 'Slope facing the radar is compressed in slant range (steep foreslope a–b)', 'Steep, bright foreslope; darker gradual back-slope', 'Can be corrected geometrically (a lesser case than layover)'],
      ['Layover', 'Extreme case of foreshortening, when the incidence angle is less than the slope angle toward the radar: θ < α', 'Top of the mountain (b) imaged before its base (a); a and b reversed', 'Cannot be corrected; be careful in the mountains'],
      ['Shadow', 'Slope away from the radar is steeper than the depression angle: −α > γ', 'Black area behind steep slopes (no return)', 'No data in shadow']], 'Geometric distortions occur in ALL radar imagery (slides 56–61).'],
    ['note', 'n12-layover'],
    ['p', 'Slide 58 examples: **C-band ERS-1** (depression angle 67°, incident angle 23°) shows stronger foreshortening than **L-band JERS-1** (depression angle 51°, incident angle 39°) of the same mountains. An X-band image of a volcano is labeled with foreshortening, shadow and slant-range distortion beside an aerial photograph. Slide 59 shows L-band SIR-C (HH) of Pasadena, July 20, 1995.'],
    ['h', 'Speckle (slide 62)'],
    ['ul', ['A grainy **salt-and-pepper** pattern in radar imagery.', 'Caused by the **coherent nature of the radar wave**, which causes random constructive and destructive interference, and hence random bright and dark areas.', 'Reduced by **multiple looks**: processing separate portions of an aperture and recombining them so that interference does not occur (1-look, 4-look and 16-look examples).']],
    ['note', 'n12-multilook']
  ],
  confused: [['Foreshortening', 'Layover', 'Foreshortening: the slope is compressed but keeps the right order (base before top). Layover: the order reverses (top before base), which happens when θ < α.'],
    ['Radar shadow', 'Optical shadow (L9)', 'An optical shadow is caused by the sun angle and still has some diffuse light. A radar shadow is caused by the radar look angle: back-slopes steeper than γ receive NO signal at all.'],
    ['Speckle', 'Texture', 'Speckle is random noise from coherent interference. Texture is real tonal variation of the surface. Multi-looking reduces speckle, not real texture.']],
  aid: 'Learning aid: “Fore-shortened, Lay-over, Shadow-after.” Foreshortening and layover happen on the slope facing the radar; shadow forms behind it.'
});

topic({
  id: 'L12-ph', lec: 'L12', title: 'Philippine case studies: Pinatubo, lahars, Clark and Taal', p: [62, 63, 64, 65, 66, 67, 68, 69, 70],
  summary: 'Optical and radar images of Mt. Pinatubo’s lahar deposits, Clark Air Base and Taal Volcano show how SAR maps volcanic terrain and change in a frequently cloudy region.',
  keys: ['l12.pinatubo', 'l12.lahar', 'l12.clark', 'l12.taal', 'l12.radarsat', 'l12.ers1', 'l12.topsar', 'l12.scansar'],
  blocks: [
    ['table', ['Slide', 'Image', 'What it shows'], [
      ['63', 'Landsat 7, Path 116 Row 50', 'Regional view locating Pinatubo, Manila and Taal'],
      ['64', 'RADARSAT radar backscatter, Feb 1998', 'Mt. Pinatubo'],
      ['65', 'SPOT image, Dec 1991', 'Mt. Pinatubo after the 1991 eruption (false color)'],
      ['66', 'RADARSAT radar backscatter', 'Western fan of Mt. Pinatubo'],
      ['67', 'RADARSAT standard beam data set (25 m/pixel)', 'Clark Air Base'],
      ['68', 'SPOT, Dec ’91 vs Feb ’96', 'Changes in Mt. Pinatubo lahar deposits, lower Pasig-Potrero River 1991–1996'],
      ['69', 'ERS-1 radar backscatter', 'Pasig-Potrero River showing LOW-backscatter lahar deposits (labels: summit, Clark, lahar)'],
      ['70', 'NASA TOPSAR topographic data (shaded relief, Nov 30, 1996)', 'Lahar fans SE of the Mt. Pinatubo summit (Pasig-Potrero River, dike)'],
      ['71', 'RADARSAT ScanSAR beam 1 (50 m/pixel)', 'Taal Volcano and surrounding area']], 'Printed slide numbers (PDF page + 1).'],
    ['p', 'Why do lahar deposits look dark (low backscatter) in ERS-1? Clarification: fresh lahar sheets are wide, relatively smooth, unvegetated sediment surfaces, so more energy is reflected away from the sensor than on the rough, vegetated surroundings. The slide states only that the deposits show low backscatter.'],
    ['p', 'Notice the two resolutions: RADARSAT standard beam at 25 m/pixel (Clark) vs ScanSAR beam 1 at 50 m/pixel (Taal). ScanSAR covers a wider swath at coarser resolution.']
  ],
  confused: [['RADARSAT standard beam (25 m/pixel)', 'RADARSAT ScanSAR (50 m/pixel)', 'Standard beam was used for Clark Air Base (finer detail). ScanSAR beam 1 was used for Taal and its surroundings (wider area, coarser pixels).'],
    ['SPOT (optical) change images', 'ERS-1 (radar) image', 'SPOT Dec ’91 vs Feb ’96 shows lahar spread in false color. ERS-1 shows the lahar deposits as low-backscatter (dark) areas.']],
  aid: 'Learning aid: “Pinatubo Lahar = dark radar river.”'
});

topic({
  id: 'L12-value', lec: 'L12', title: 'Adding value: multi-polarisation, multi-temporal, multi-wavelength; applications', p: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
  summary: 'A single radar image often cannot separate targets, so more information is added through polarisations, dates or wavelengths. Case studies cover floods, DEMs, land cover, forest stand age and soil moisture.',
  keys: ['l12.multipol', 'l12.multitemp', 'l12.multiwave', 'l12.srtm', 'l12.airsar', 'l12.flood', 'l12.moisture', 'l12.adjunct'],
  blocks: [
    ['ul', ['We cannot always use a single image to distinguish between different targets (slide 76).', 'To enhance target differences, add extra information: several polarisations (**multi-polarisation**), images over time (**multi-temporal**), different wavelengths (**multi-wavelength**).', 'It is **most common to use multi-polarisation imagery** to increase the information from targets.']],
    ['table', ['Case study', 'Data', 'Key facts'], [
      ['Multi-polarisation radar (slide 77)', 'C-band CHH, CHV, CVV composite vs aerial photograph', 'Douglas fir and Radiata pine stands distinguished'],
      ['Multi-temporal radar (slide 78)', 'SRL-2, X-SAR; Renwick, Marlborough, NZ', 'Dates 8/9/10 Oct 1994 combined'],
      ['Multi-wavelength radar (slide 79)', 'Airborne AIRSAR, Mt Tongariro, North Island, 5 Nov 1996', 'Red = 68 cm, green = 24 cm, blue = 5.6 cm wavelength'],
      ['Floods (slide 80)', 'Two-date ERS SAR composite, Maastricht (Maas/Meuse river)', '30/1/95 in red/green, 21/9/95 in blue'],
      ['Generation of DEMs (slide 81)', 'SRTM, X-SAR, 3 cm wavelength, 12 Feb 2000', 'Big Bend, South Island'],
      ['Land cover classification (slide 82)', 'Airborne radar, 24 cm wavelength, Mt Tongariro, Nov 1996', 'Classified image with 8 classes'],
      ['Forest stand age estimation (slide 83)', '5.6 cm wavelength, multi-polarisation image', 'Cleared stand, forest stand, pasture distinguished'],
      ['Response to moisture (slide 84)', 'Graham (2001), Norfolk test site 1998, fields 1 and 2', 'White pixels = very high backscatter due to sub-surface water; a linear feature in field 2 is a spring (blue 02.04.98, green 08.05.98, red 12.06.98)']], null],
    ['p', 'Reading the flood composite (clarification): open water is smooth and gives low backscatter. Areas flooded on 30/1/95 are dark in the red and green layers but brighter in the blue (21/9/95) layer, so they appear blue.'],
    ['h', 'An ambitious list of applications (slide 85)'],
    ['ul', ['Flood mapping, snow mapping, oil slicks', 'Sea ice type, crop classification', 'Forest biomass / timber estimation, tree height', 'Soil moisture mapping, soil roughness mapping / monitoring', 'Pipeline integrity', 'Wave strength for oil platforms', 'Crop yield, crop stress', 'Flood prediction', 'Landslide prediction']],
    ['h', 'Conclusion (slide 86)'],
    ['ul', ['Radar is very **reliable** because of cloud penetration and day/night availability.', 'Major advances in **interferometric SAR**.', 'Open question: should radar be used separately or as an **adjunct to optical** Earth observation data? (Image: ALOS.)']]
  ],
  confused: [['Multi-polarisation', 'Multi-wavelength', 'Multi-polarisation: same wavelength, different transmit/receive polarisations (CHH, CHV, CVV). Multi-wavelength: different bands (68, 24, 5.6 cm).'],
    ['Multi-temporal radar', 'Two-date flood composite', 'Both use time. The flood composite is an application of multi-temporal imagery to detect change (water).']],
  aid: 'Learning aid: “Pol, Time, Wave” are the three ways to add value. Pol is the most common.'
});

// ───────────────────────── CONCEPTS ─────────────────────────
C('L12', 'L12-tir', 'l12.tirrs', 'Thermal infrared remote sensing (TIR)', ['thermal infrared remote sensing', 'thermal infrared', 'tir', 'thermal remote sensing', 'thermal ir remote sensing'], 'Sensing of emissive energy or “temperature” energy, governed by the blackbody concept and the Stefan–Boltzmann, Wien and Kirchhoff laws.', [6, 7, 16, 24]);
C('L12', 'L12-tir', 'l12.abszero', 'Absolute zero (0 K)', ['absolute zero', '0 k', 'zero kelvin', '-273 c', '−273 °c'], 'Temperature above which all objects emit EM energy; 0 K, about −273 °C.', [5, 10]);
C('L12', 'L12-tir', 'l12.window', 'Atmospheric window', ['atmospheric windows', 'window'], 'Wavelength region in which the atmosphere transmits energy well; for thermal satellite sensing these are 3–5 µm and 8–14 µm.', [6, 27]);
C('L12', 'L12-tir', 'l12.w35', '3–5 µm thermal window', ['3-5 µm', '3 to 5 micrometers', '3-5 um', '3-5 micrometer window', 'midwave thermal window', 'mid-wave infrared window', '3–5 µm'], 'Thermal window used for very hot targets such as forest fires; partly contaminated by solar reflectance during the day.', [6, 14]);
C('L12', 'L12-tir', 'l12.w814', '8–14 µm thermal window', ['8-14 µm', '8 to 14 micrometers', '8-14 um', '8-14 micrometer window', 'longwave thermal window', '8–14 µm'], 'Thermal window matching the emission peak of ordinary Earth surfaces near 300 K (soil, water, rock).', [6, 14]);
C('L12', 'L12-tir', 'l12.solarcontam', 'Solar reflectance contamination of the 3–4 µm window', ['solar reflectance contamination', 'solar contamination', 'daytime solar reflectance', 'use at night'], 'Daytime problem in the shorter thermal window that leads analysts to use it for Earth studies only at night.', [6]);
C('L12', 'L12-tir', 'l12.emitted', 'Emitted (emissive) energy', ['emitted energy', 'emissive energy', 'emitted radiation', 'emission'], 'Energy radiated by an object because of its own temperature, as opposed to reflected sunlight; what thermal IR sensors record.', [5, 6]);
C('L12', 'L12-temps', 'l12.temperature', 'Temperature', [], 'A measure of the motion of atoms and molecules in a substance.', [8]);
C('L12', 'L12-temps', 'l12.kinheat', 'Kinetic heat', ['internal heat', 'real heat', 'true heat'], 'Energy of particles of matter in random motion; also called internal, real or true heat.', [8]);
C('L12', 'L12-temps', 'l12.tkin', 'Kinetic temperature (T_kin)', ['kinetic temperature', 'true kinetic temperature', 'tkin', 't kin', 'true temperature'], 'True internal temperature of an object that can be measured with a thermometer.', [8, 9, 13]);
C('L12', 'L12-temps', 'l12.radflux', 'Radiant flux', ['radiant flux (watts)', 'fr', 'f r'], 'EM radiation (in watts) emitted when particles with kinetic heat collide, change their energy state and emit electromagnetic radiation.', [8, 10]);
C('L12', 'L12-temps', 'l12.trad', 'Radiant temperature (T_rad)', ['radiant temperature', 'trad', 't rad', 'apparent temperature'], 'Concentration of the amount of radiant flux exiting (emitted from) an object; measured remotely by radiometers and slightly lower than the true temperature.', [8, 9, 13]);
C('L12', 'L12-temps', 'l12.emissivity', 'Emissivity (ε)', ['emissivity', 'epsilon', 'e', 'ε'], 'Dimensionless ratio describing the fraction of blackbody energy a real material emits at the same temperature; the reason T_rad is slightly less than T_kin.', [9, 11, 13]);
C('L12', 'L12-temps', 'l12.emisspec', 'Emissivity spectrum', ['spectral emissivity', 'emissivity curve'], 'Ratio of the radiance spectrum of a non-perfect emitter to that of a perfect emitter at the same temperature, e.g., quartz with dips near 8–10 µm.', [11]);
C('L12', 'L12-temps', 'l12.greybody', 'Grey body', ['gray body', 'graybody', 'greybody'], 'Idealized emitter (mentioned alongside the blackbody) that real rocks, water, soil and pavements do not perfectly behave as; it has a constant emissivity below 1.', [11], { note: 'The “constant emissivity below 1” explanation is a standard clarification.' });
C('L12', 'L12-laws', 'l12.blackbody', 'Blackbody', ['black body', 'perfect blackbody', 'perfect emitter'], 'Perfect absorber and emitter of radiation; its exitance is M_B = σT⁴.', [6, 11, 13]);
C('L12', 'L12-laws', 'l12.sb', 'Stefan–Boltzmann law', ['stefan boltzmann law', 'stefan-boltzmann', 'stefan boltzmann', 'stefan–boltzmann law'], 'Law stating that radiant flux emitted by an object rises with the fourth power of its absolute temperature: F_R = εσT⁴.', [6, 10, 13]);
C('L12', 'L12-laws', 'l12.sigma', 'Stefan–Boltzmann constant (σ)', ['sigma', 'σ', 'stefan boltzmann constant', '5.67 x 10^-8', '5.67e-8'], 'Constant equal to 5.67 × 10⁻¹² W cm⁻² K⁻⁴ (= 5.67 × 10⁻⁸ W m⁻² K⁻⁴) in the T⁴ emission law.', [10, 13]);
C('L12', 'L12-laws', 'l12.wien', 'Wien’s displacement law', ['wien’s law', 'wiens law', 'wien law', 'wiens displacement law', 'wien displacement law', 'wien'], 'Law giving the dominant (peak) wavelength of emission: λ_max = 2898 / T (µm, with T in K).', [6, 13, 14]);
C('L12', 'L12-laws', 'l12.lmax', 'Dominant wavelength (λ_max)', ['dominant wavelength', 'lambda max', 'λmax', 'peak wavelength', 'wavelength of maximum emission'], 'Wavelength of peak emission; it tells which part of the thermal spectrum to sense in (≈ 9.66 µm at 300 K, ≈ 3.62 µm at 800 K).', [13, 14]);
C('L12', 'L12-laws', 'l12.kirchhoff', 'Kirchhoff’s law', ['kirchhoffs law', 'kirchoffs law', 'kirchof’s law', 'kirchhoff law', 'kirchoff'], 'Radiation law named on the TIR slide (spelled “Kirchof’s”). Standard meaning: at thermal equilibrium, emissivity equals absorptivity.', [6], { note: 'Only the name appears on the slide; the meaning is a clarification.' });
C('L12', 'L12-laws', 'l12.planck', 'Planck equation', ['planck’s law', 'plancks law', 'planck law', 'planck function', 'planck radiation law'], 'Radiation equation used to convert recorded spectral radiance into a temperature (brightness temperature).', [12]);
C('L12', 'L12-laws', 'l12.tb', 'Brightness temperature (T_b)', ['brightness temperature', 'tb', 't b'], 'Temperature obtained from sensor-recorded radiance through the Planck equation; less than the real physical (surface) temperature.', [12, 18]);
C('L12', 'L12-laws', 'l12.physT', 'Physical (surface) temperature', ['physical temperature', 'surface temperature', 'real temperature', 'land surface temperature'], 'Real temperature T of a surface, which is higher than the temperature inferred from radiance when ε < 1.', [12]);
C('L12', 'L12-thermalapps', 'l12.dawn', 'Pre-dawn (dawn) thermal image', ['dawn image', 'predawn thermal image', 'pre-dawn image', 'dawn thermal image', 'night thermal image'], 'Thermal image taken at dawn, when temperature differences have decreased sharply and there are no shadows, revealing heat islands.', [15]);
C('L12', 'L12-thermalapps', 'l12.uhi', 'Urban heat island', ['heat island', 'uhi', 'urban heat island effect', 'heat island effect'], 'Local area, typically a city center, that stays warmer than its surroundings; detected in dawn thermal images and in the MODIS San Antonio example.', [15, 20]);
C('L12', 'L12-thermalapps', 'l12.modis', 'MODIS (Moderate-Resolution Imaging Spectroradiometer)', ['modis', 'moderate resolution imaging spectroradiometer', 'moderate-resolution imaging spectroradiometer'], '36-band sensor measuring surface/cloud temperature, atmospheric temperature, cirrus and water vapor, ozone and cloud-top altitude; source of LST, SST and fire products.', [17, 18, 19, 20, 21, 22], { acr: 'MODIS', x: ['L9:5'] });
C('L12', 'L12-thermalapps', 'l12.splitwindow', 'Split-window algorithm (MODIS LST)', ['split window', 'split-window', 'generalized split window', 'split window algorithm', 'split-window technique'], 'Land surface temperature method that combines brightness temperatures in bands 31 and 32 with emissivity terms and lookup-table coefficients A, B, C.', [18]);
C('L12', 'L12-thermalapps', 'l12.fire', 'MODIS fire and thermal anomalies product', ['active fire detection', 'fire and thermal anomalies', 'modis fire product', 'thermal anomalies'], 'Product that identified fires in the Bahamas, Florida and Cuba (3 April 2004) from MODIS Aqua, outlined in red on 1 km corrected reflectance.', [22]);
C('L12', 'L12-thermalapps', 'l12.goes', 'GOES (NOAA)', ['goes', 'geostationary operational environmental satellite'], 'NOAA mission with thermal IR bands listed as 3.78–4.03 (4 km), 6.47–7.02 (8 km), 10.2–11.2 (4 km) and 11.5–12.5 µm (4 km).', [23], { note: 'Acronym expansion is standard, not on the slide.' });
C('L12', 'L12-thermalapps', 'l12.avhrr', 'AVHRR (NOAA)', ['avhrr', 'advanced very high resolution radiometer'], 'NOAA sensor with thermal bands 3.55–3.93, 10.30–11.30 and 11.5–12.5 µm, all at 1.1 km.', [23], { note: 'Acronym expansion is standard, not on the slide.' });
C('L12', 'L12-thermalapps', 'l12.npoess', 'NPOESS', ['npoess', 'national polar-orbiting operational environmental satellite system', 'viirs'], 'Joint NOAA/NASA/DoD program listed with 8 middle-wave and 4 long-wave thermal bands at 400–800 m (VIIRS summary); historical.', [23], { note: 'Historical program; see clarification.' });
C('L12', 'L12-mw', 'l12.passive', 'Passive remote sensing', ['passive', 'passive sensing', 'passive sensor'], 'Sensing that uses natural energy: either reflected sunlight or emitted thermal or microwave radiation.', [26]);
C('L12', 'L12-mw', 'l12.active', 'Active remote sensing', ['active', 'active sensing', 'active sensor'], 'Sensing in which the sensor creates its own energy, transmits it toward Earth and records what comes back.', [26]);
C('L12', 'L12-mw', 'l12.backscatter', 'Backscatter', ['back-scatter', 'backscattering', 'radar backscatter', 'back scattered energy'], 'Energy reflected back toward the sensor after interacting with the atmosphere and/or surface; what radar records.', [26, 27]);
C('L12', 'L12-mw', 'l12.radar', 'Radar (active microwave)', ['radar', 'active microwave', 'radio detection and ranging', 'active microwave remote sensing'], 'Active microwave sensing with long wavelengths (1–100 cm) that records the amount of energy back-scattered from the terrain.', [27, 33]);
C('L12', 'L12-mw', 'l12.sar', 'Synthetic aperture radar (SAR)', ['sar', 'synthetic aperture radar'], 'Imaging radar used in the SAR–optical comparison (Radarsat-1) and SAR case studies; interferometric SAR is a major advance.', [28, 85], { acr: 'SAR', note: 'The expansion is standard; the slides use “SAR” without expanding it.' });
C('L12', 'L12-mw', 'l12.freq', 'Frequency–wavelength relation', ['frequency wavelength relation', 'nu = c / lambda', 'ν = c/λ', 'v = c/lambda', 'frequency equals speed of light over wavelength'], 'Relation used in the microwave region where frequency replaces wavelength: ν = c/λ, with c = 3.00 × 10⁸ m s⁻¹; trick ν(GHz) = 30/λ(cm).', [31]);
C('L12', 'L12-mw', 'l12.hz', 'Hertz (Hz) / gigahertz (GHz)', ['hertz', 'hz', 'ghz', 'gigahertz'], 'Unit of frequency equal to s⁻¹; in microwaves it is most often expressed in units of 10⁹ of these.', [31]);
C('L12', 'L12-mw', 'l12.bandKa', 'Ka-band', ['ka', 'ka band'], 'Shortest radar band in the lecture table: 0.75–1.18 cm, 40.0–26.5 GHz.', [32]);
C('L12', 'L12-mw', 'l12.bandK', 'K-band', ['k', 'k band'], 'Radar band of 1.19–1.67 cm, 26.5–18.0 GHz.', [32]);
C('L12', 'L12-mw', 'l12.bandKu', 'Ku-band', ['ku', 'ku band'], 'Radar band of 1.67–2.4 cm, 18.0–12.5 GHz.', [32]);
C('L12', 'L12-mw', 'l12.bandX', 'X-band', ['x', 'x band'], 'Radar band of 2.4–3.8 cm, 12.5–8.0 GHz; e.g., SRTM X-SAR at 3 cm.', [32, 44, 80]);
C('L12', 'L12-mw', 'l12.bandC', 'C-band', ['c', 'c band'], 'Radar band of 3.9–7.5 cm, 8.0–4.0 GHz; used by Radarsat-1 and ERS-1; low canopy penetration and early saturation.', [32, 45]);
C('L12', 'L12-mw', 'l12.bandS', 'S-band', ['s', 's band'], 'Radar band of 7.5–15.0 cm, 4.0–2.0 GHz.', [32]);
C('L12', 'L12-mw', 'l12.bandL', 'L-band', ['l', 'l band'], 'Radar band of 15.0–30.0 cm, 2.0–1.0 GHz (e.g., 23.5–24 cm); penetrates canopy to leaves and branches; used by JERS-1 and SIR-C.', [32, 44, 45]);
C('L12', 'L12-mw', 'l12.bandP', 'P-band', ['p', 'p band'], 'Longest radar band in the table: 30.0–100 cm, 1.0–0.3 GHz; propagates through the canopy to trunks and ground and keeps sensitivity at high biomass.', [32, 45]);
C('L12', 'L12-mw', 'l12.wwii', 'World War II origin of band names', ['world war ii', 'wwii', 'world war 2', 'ww2', 'secret wartime radar work'], 'Historical reason the microwave band letter codes look unusual: an artifact of the original secret radar work.', [32]);
C('L12', 'L12-mw', 'l12.allweather', 'All-weather, day-or-night capability', ['all weather', 'all-weather', 'day or night', 'all weather day or night', 'all weather day and night'], 'Main radar advantage: it supplies its own illumination and its wavelengths pass through clouds and rain.', [33, 34, 35, 85]);
C('L12', 'L12-mw', 'l12.insar', 'Interferometry (InSAR)', ['interferometry', 'insar', 'interferometric sar', 'sar interferometry', 'radar interferometry'], 'Radar technique using 2 receiving antennas, listed as an advantage and as a major advance in the conclusion.', [34, 85]);
C('L12', 'L12-measure', 'l12.sidelooking', 'Side-viewing (side-looking) geometry', ['side viewing geometry', 'side-looking', 'side looking', 'side-looking radar', 'side viewing'], 'Radar viewing arrangement in which the platform illuminates terrain off to one side of its flight path rather than straight down.', [36]);
C('L12', 'L12-measure', 'l12.lookdir', 'Range (look) direction', ['range direction', 'look direction', 'range', 'range or look direction'], 'Direction in which radar pulses illuminate strips of terrain, at right angles (orthogonal) to the direction of travel.', [37, 48]);
C('L12', 'L12-measure', 'l12.azimuth', 'Azimuth (flight) direction', ['azimuth direction', 'azimuth', 'along-track direction', 'flight direction'], 'Direction parallel to the radar platform’s flight path, perpendicular to the range direction.', [54]);
C('L12', 'L12-measure', 'l12.near', 'Near range', ['near-range'], 'Terrain illuminated nearest the aircraft or satellite.', [37, 53, 54]);
C('L12', 'L12-measure', 'l12.far', 'Far range', ['far-range'], 'Farthest point of terrain illuminated by the radar.', [37, 53, 54]);
C('L12', 'L12-measure', 'l12.dielectric', 'Dielectric constant', ['dielectric properties', 'dielectric', 'complex dielectric constant'], 'Target parameter affecting radar brightness that is strongly tied to moisture content.', [38]);
C('L12', 'L12-measure', 'l12.roughness', 'Surface roughness', ['roughness'], 'Target parameter affecting radar brightness; surfaces whose height variation is on the order of the wavelength scatter diffusely.', [34, 38, 39, 47]);
C('L12', 'L12-measure', 'l12.incidence', 'Incidence (look) angle θ', ['incidence angle', 'look angle', 'incident angle', 'theta', 'θ'], 'Angle measured from the vertical to the radar beam; a radar parameter (scene incidence angle) that controls foreshortening and layover.', [38, 55, 56, 57, 58]);
C('L12', 'L12-measure', 'l12.depression', 'Depression angle γ', ['depression angle', 'gamma', 'γ'], 'Angle between the horizontal and the radar line of sight, used in the range-resolution formula and the shadow condition.', [52, 53, 59, 60]);
C('L12', 'L12-scatter', 'l12.specular', 'Specular reflection (smooth surface)', ['specular reflection', 'specular', 'reflection off a smooth surface', 'mirror reflection'], 'Reflection off a smooth surface in which the angle of incidence equals the angle of reflection, so little energy returns to the radar.', [39, 46]);
C('L12', 'L12-scatter', 'l12.diffuse', 'Diffuse scattering (rough surface)', ['diffuse scattering', 'diffuse', 'rough surface scattering', 'scattering off a rough surface', 'surface scattering'], 'Scattering off a surface whose height variations are on the order of the incoming signal’s wavelength, sending energy in many directions.', [39, 46, 47]);
C('L12', 'L12-scatter', 'l12.double', 'Double bounce (corner reflector)', ['double bounce', 'corner reflector', 'double-bounce', 'dihedral scattering'], 'Scattering mechanism in which the signal reflects off two smooth perpendicular surfaces and returns strongly to the radar, e.g., buildings, or grass and a freshly cut stump.', [40, 46]);
C('L12', 'L12-scatter', 'l12.volume', 'Volume (volumetric) scattering', ['volume scattering', 'volumetric scattering', 'volumetric'], 'Scattering within a 3-D medium such as a tree canopy or dry snow, through multiple internal reflections and refractions.', [41, 43, 46]);
C('L12', 'L12-scatter', 'l12.canopy', 'Canopy backscatter components (σ°)', ['sigma nought', 'backscatter coefficient', 'σ°', 'sigma naught', 'canopy backscattering'], 'Backscatter from vegetation split by source: subscripts t (trunk), s (soil), c (leaves/canopy) and m (multiple).', [42]);
C('L12', 'L12-scatter', 'l12.penetration', 'Penetration depth (wavelength dependence)', ['penetration depth', 'penetration', 'wavelength penetration'], 'How far radar energy enters vegetation or soil; deeper at longer wavelengths (P > L > C > X) and in dry materials.', [44, 45, 47]);
C('L12', 'L12-scatter', 'l12.saturation', 'Backscatter saturation (C-band)', ['saturation', 'c-band saturation', 'saturates', 'biomass saturation'], 'Behavior in which a short-wavelength band stops responding to increasing biomass because it only sees the canopy; C-band saturates at relatively low biomass.', [45]);
C('L12', 'L12-scatter', 'l12.wetrough', 'Bright if wet and rough; dark if dry and smooth', ['wet and rough', 'bright if wet and rough', 'wet rough bright', 'dry and smooth'], 'Typical surface-scattering rule linking moisture and roughness to radar brightness.', [47]);
C('L12', 'L12-scatter', 'l12.attenuator', 'Vegetation as attenuator', ['attenuator', 'attenuation', 'vegetation attenuation'], 'Role vegetation can play instead of being the dominant scatterer: weakening the signal scattered from the ground.', [47]);
C('L12', 'L12-pol', 'l12.lookvar', 'Variability with look direction', ['look direction variability', 'look direction effect', 'look direction'], 'Effect whereby the same terrain shows different bright and dark slopes in radar images taken from different look directions.', [48]);
C('L12', 'L12-pol', 'l12.polarization', 'Polarization', ['polarisation'], 'Orientation of the radar wave’s electric field; written with the transmitted letter first and the received letter second (HH, VV, HV, VH).', [34, 38, 49, 50]);
C('L12', 'L12-pol', 'l12.like', 'Like-polarized (HH, VV)', ['like polarization', 'like-polarization', 'co-polarized', 'copolarized', 'hh and vv', 'like'], 'Polarization combinations in which transmit and receive orientations are the same.', [49]);
C('L12', 'L12-pol', 'l12.cross', 'Cross-polarized (HV, VH)', ['cross polarization', 'cross-polarization', 'cross polarized', 'hv and vh', 'cross'], 'Polarization combinations in which transmit and receive orientations differ.', [49, 50]);
C('L12', 'L12-geom', 'l12.slant', 'Slant-range geometry', ['slant range', 'slant-range', 'slant range display', 'slant range geometry'], 'Display of uncorrected radar imagery based on the line-of-sight distance from the radar to each feature.', [51, 52]);
C('L12', 'L12-geom', 'l12.ground', 'Ground-range geometry', ['ground range', 'ground-range', 'ground range display', 'ground range geometry'], 'Corrected radar display in which features are in their proper planimetric (x, y) positions.', [51, 52]);
C('L12', 'L12-geom', 'l12.rangeres', 'Range resolution', ['range resolution', 'rr', 'r r'], 'Resolution across track: R_r = τc / (2 cos γ); finer in the far range (e.g., 19.58 m at 40° vs 35.5 m at 65°).', [53]);
C('L12', 'L12-geom', 'l12.azres', 'Azimuth resolution', ['azimuth resolution', 'ra', 'r a', 'along-track resolution'], 'Resolution along track for a real aperture radar: R_a = S × λ / L; coarser at longer slant range (120 m at 20 km vs 240 m at 40 km).', [54]);
C('L12', 'L12-geom', 'l12.pulselength', 'Pulse length (τ)', ['pulse length', 'tau', 'τ', 'pulse duration'], 'Duration of the transmitted microwave pulse (e.g., 10⁻⁷ s); a shorter one gives finer range resolution.', [37, 53]);
C('L12', 'L12-geom', 'l12.antenna', 'Antenna length (L)', ['antenna length', 'antenna size'], 'Physical length of the radar antenna, in the denominator of the azimuth resolution formula; longer means finer azimuth resolution.', [54]);
C('L12', 'L12-geom', 'l12.rar', 'Real aperture radar', ['real aperture radar', 'rar', 'real-aperture radar', 'real aperture'], 'Radar whose beam width (and hence azimuth resolution) is set by its physical antenna, widening with distance as in the slide’s tank example.', [54]);
C('L12', 'L12-distort', 'l12.foreshort', 'Foreshortening', ['fore-shortening', 'fore shortening'], 'Geometric distortion in which a slope facing the radar appears compressed (steep, bright) in slant range.', [56, 57]);
C('L12', 'L12-distort', 'l12.layover', 'Layover', ['lay over', 'lay-over'], 'Extreme case of foreshortening when the incidence angle is less than the slope angle toward the radar (θ < α); the top of a mountain is imaged before its base and it cannot be corrected.', [55, 58]);
C('L12', 'L12-distort', 'l12.shadow', 'Radar shadow', ['shadow', 'radar shadowing'], 'Geometric distortion that occurs when a slope facing away from the radar is steeper than the depression angle (−α > γ), so no signal returns.', [59, 60]);
C('L12', 'L12-distort', 'l12.speckle', 'Speckle', ['salt and pepper noise', 'salt-and-pepper', 'speckle noise'], 'Grainy salt-and-pepper pattern in radar imagery caused by random constructive and destructive interference of the coherent radar wave.', [61]);
C('L12', 'L12-distort', 'l12.multilook', 'Multi-look processing (multiple looks)', ['multiple looks', 'multilook', 'multi-look', 'multilooking', 'multi-looking', 'multi look processing'], 'Speckle reduction by processing separate portions of an aperture and recombining them (e.g., 1-look vs 4-look vs 16-look images).', [61]);
C('L12', 'L12-ph', 'l12.pinatubo', 'Mount Pinatubo', ['pinatubo', 'mt pinatubo', 'mt. pinatubo'], 'Philippine volcano imaged by RADARSAT (Feb 1998), SPOT (Dec 1991), ERS-1 and TOPSAR to map its lahar deposits.', [62, 63, 64, 65, 67, 68, 69]);
C('L12', 'L12-ph', 'l12.lahar', 'Lahar deposits (low backscatter)', ['lahar', 'lahar deposits', 'lahars', 'low-backscatter lahar deposits'], 'Volcanic mudflow sediments along the Pasig-Potrero River that appear as low-backscatter (dark) areas in the ERS-1 image.', [67, 68, 69]);
C('L12', 'L12-ph', 'l12.clark', 'Clark Air Base', ['clark', 'clark airbase'], 'Site near Pinatubo imaged with a RADARSAT standard beam data set at 25 m/pixel.', [66, 68]);
C('L12', 'L12-ph', 'l12.taal', 'Taal Volcano', ['taal'], 'Philippine volcano and surrounding area imaged with RADARSAT ScanSAR beam 1 at 50 m/pixel.', [62, 70]);
C('L12', 'L12-ph', 'l12.radarsat', 'RADARSAT', ['radarsat-1', 'radarsat 1', 'radarsat1'], 'Canadian C-band SAR satellite used for the SAR–optical comparison (C-band HH, 1998) and the Pinatubo, Clark and Taal images.', [28, 63, 65, 66, 70]);
C('L12', 'L12-ph', 'l12.ers1', 'ERS-1', ['ers 1', 'ers', 'ers-1 sar'], 'European C-band SAR satellite (depression angle 67°, incident angle 23° in the example) used for the Pasig-Potrero lahar image and the Maastricht flood composite.', [57, 68, 79]);
C('L12', 'L12-ph', 'l12.topsar', 'NASA TOPSAR', ['topsar'], 'Airborne interferometric radar whose topographic data produced a shaded-relief image of the lahar fans SE of the Pinatubo summit.', [69]);
C('L12', 'L12-ph', 'l12.scansar', 'ScanSAR', ['scansar beam', 'scan sar', 'scansar mode'], 'Wide-swath RADARSAT beam mode (beam 1, 50 m/pixel) used for the Taal Volcano image.', [70]);
C('L12', 'L12-value', 'l12.multipol', 'Multi-polarisation radar', ['multi-polarisation', 'multipolarization', 'multi-polarization', 'multipolarisation', 'polarimetric'], 'Using several polarisations (e.g., CHH, CHV, CVV) to enhance target differences; the most common way to add value.', [75, 76, 82]);
C('L12', 'L12-value', 'l12.multitemp', 'Multi-temporal radar', ['multi-temporal', 'multitemporal', 'multitemporal radar', 'multi temporal'], 'Using radar images over time to enhance target differences, e.g., SRL-2 X-SAR dates 8/9/10 Oct 1994.', [75, 77, 79]);
C('L12', 'L12-value', 'l12.multiwave', 'Multi-wavelength radar', ['multi-wavelength', 'multiwavelength', 'multi-frequency', 'multifrequency'], 'Using different radar wavelengths (e.g., AIRSAR 68, 24 and 5.6 cm in red, green, blue) to enhance target differences.', [75, 78]);
C('L12', 'L12-value', 'l12.srtm', 'SRTM (X-SAR)', ['srtm', 'shuttle radar topography mission'], 'Shuttle radar mission (X-SAR, 3 cm, 12 Feb 2000) used for DEM generation, e.g., Big Bend, South Island.', [80], { note: 'Expansion is standard, not on the slide.' });
C('L12', 'L12-value', 'l12.airsar', 'AIRSAR', ['airsar', 'airborne sar'], 'Airborne radar used for the multi-wavelength image of Mt Tongariro (5 Nov 1996).', [78]);
C('L12', 'L12-value', 'l12.flood', 'Two-date SAR flood composite', ['flood mapping', 'two date composite', 'flood composite', 'two-date composite'], 'Maastricht example combining ERS SAR images from 30/1/95 (red/green) and 21/9/95 (blue) to show flooding along the Maas.', [79, 84]);
C('L12', 'L12-value', 'l12.moisture', 'Radar response to moisture', ['response to moisture', 'soil moisture', 'sub-surface water', 'moisture response'], 'Very high backscatter due to sub-surface water (white pixels) in fields at the Norfolk test site, 1998 (Graham, 2001).', [83, 34, 47]);
C('L12', 'L12-value', 'l12.adjunct', 'Radar as an adjunct to optical data', ['adjunct to optical', 'radar and optical', 'complement to optical data', 'adjunct'], 'Open question in the conclusion: whether radar should be used separately or together with optical Earth-observation data.', [85]);

// ───────────────────────── IDENTIFICATION ─────────────────────────
I('L12-I01', 'L12', 'L12-tir', 1, 'scenario', 'Name the two thermal-IR atmospheric windows used for satellite remote sensing (µm).', '3–5 µm and 8–14 µm', ['3-5 and 8-14', '3 to 5 and 8 to 14', '3-5 µm and 8-14 µm', '3-5um and 8-14um'], 'Slide 7.', [6], 'l12.window', { kw: [['3'], ['5'], ['8'], ['14']] });
I('L12-I02', 'L12', 'L12-tir', 2, 'scenario', 'Which thermal window is contaminated by solar reflectance during daylight, so it is used for Earth studies only at night?', '3–4 µm (part of the 3–5 µm window)', ['3-4 µm', '3-4 um', '3 to 4 micrometers', '3-5 µm', '3-4', '3-5'], 'Slide 7: solar reflectance contaminates the 3–4 µm window during daylight hours.', [6], 'l12.solarcontam', { kw: [['3']] });
I('L12-I03', 'L12', 'L12-tir', 1, 'scenario', 'Our eyes are sensitive only to this range (µm).', '0.4–0.7 µm', ['0.4-0.7', '0.4 to 0.7', '0.4-0.7 um', 'visible'], 'Slide 6.', [5], 'l12.emitted', { kw: [['0.4', 'visible'], ['0.7', 'visible']] });
I('L12-I04', 'L12', 'L12-temps', 2, 'scenario', 'Temperature measured by placing a thermometer in contact with an object.', 'Kinetic temperature (T_kin)', ['kinetic temperature', 'true kinetic temperature', 'tkin', 'true temperature'], 'Slide 9.', [8], 'l12.tkin');
I('L12-I05', 'L12', 'L12-temps', 2, 'scenario', 'Temperature a radiometer some distance away measures; usually slightly lower than the object’s true temperature.', 'Radiant temperature (T_rad)', ['radiant temperature', 'trad'], 'Slide 10: remote measurement of T_rad is slightly < T_kin due to emissivity.', [9], 'l12.trad');
I('L12-I06', 'L12', 'L12-temps', 2, 'scenario', 'Property responsible for T_rad being slightly lower than T_kin.', 'Emissivity', ['emissivity (ε)', 'ε', 'epsilon'], 'Slide 10.', [9], 'l12.emissivity');
I('L12-I07', 'L12', 'L12-temps', 1, 'scenario', 'Three other names the slide gives for kinetic heat.', 'Internal, real, or true heat', ['internal real true heat', 'internal heat real heat true heat'], 'Slide 9: aka internal, real, or true heat.', [8], 'l12.kinheat', { kw: [['internal'], ['real'], ['true']] });
I('L12-I08', 'L12', 'L12-temps', 2, 'scenario', 'Unit in which radiant flux is expressed on slide 9.', 'Watts', ['watt', 'w'], 'Slide 9: “Radiant flux (watts).”', [8], 'l12.radflux');
I('L12-I09', 'L12', 'L12-laws', 2, 'formula', 'Identify the law: F_R = ε σ T⁴.', 'Stefan–Boltzmann law', ['stefan boltzmann law', 'stefan-boltzmann law', 'stefan boltzmann'], 'Slide 11.', [10], 'l12.sb');
I('L12-I10', 'L12', 'L12-laws', 2, 'formula', 'Identify the law: λ_max = 2898 / T.', 'Wien’s displacement law', ['wiens displacement law', 'wien’s law', 'wiens law', 'wien law', 'wien displacement law'], 'Slide 14.', [13], 'l12.wien');
I('L12-I11', 'L12', 'L12-laws', 3, 'calc', 'Using Wien’s law, compute λ_max (µm) for soil, water and rock at 300 K (two decimals).', '9.66', ['9.66 µm', '9.66 um'], '2898 / 300 = 9.66 µm (slide 15).', [14], 'l12.lmax', { num: { v: 9.66, tol: 0.02 } });
I('L12-I12', 'L12', 'L12-laws', 3, 'calc', 'Using Wien’s law, compute λ_max (µm) for a forest fire at 800 K (two decimals).', '3.62', ['3.62 µm', '3.6225', '3.62 um'], '2898 / 800 = 3.62 µm, within the 3–5 µm window (slide 15).', [14], 'l12.lmax', { num: { v: 3.6225, tol: 0.02 } });
I('L12-I13', 'L12', 'L12-laws', 3, 'calc', 'By the Stefan–Boltzmann law, if an object’s absolute temperature doubles, its emitted radiant flux increases by what factor?', '16', ['16 times', '16x', 'sixteen'], 'F ∝ T⁴ → 2⁴ = 16.', [10], 'l12.sb', { num: { v: 16, tol: 0 } });
I('L12-I14', 'L12', 'L12-laws', 3, 'calc', 'A blackbody (ε = 1) at 300 K: compute its exitance M_B = σT⁴ in W m⁻² (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴), to the nearest whole number.', '459', ['459 w/m2', '459.27'], '5.67 × 10⁻⁸ × 300⁴ = 5.67 × 10⁻⁸ × 8.1 × 10⁹ = 459 W m⁻² (= 0.0459 W cm⁻² using the slide’s σ = 5.67 × 10⁻¹² W cm⁻² K⁻⁴).', [10, 13], 'l12.sigma', { num: { v: 459.27, tol: 1 } });
I('L12-I15', 'L12', 'L12-laws', 3, 'calc', 'Using ε = T_rad⁴ / T_kin⁴, find T_rad (K, one decimal) for a surface with ε = 0.90 and T_kin = 300 K.', '292.2', ['292', '292.2 k'], 'T_rad = ε^{1/4} × T_kin = 0.9^{0.25} × 300 = 0.974 × 300 = 292.2 K.', [13], 'l12.emissivity', { num: { v: 292.2, tol: 0.3 } });
I('L12-I16', 'L12', 'L12-laws', 2, 'def', 'Temperature obtained by inverting the Planck equation from sensor-recorded radiance; less than the real physical temperature.', 'Brightness temperature (T_b)', ['brightness temperature', 'tb'], 'Slide 13.', [12], 'l12.tb');
I('L12-I17', 'L12', 'L12-laws', 2, 'def', 'Theoretical perfect absorber and emitter of radiation.', 'Blackbody', ['black body', 'perfect blackbody'], 'Slide 14.', [13], 'l12.blackbody');
I('L12-I18', 'L12', 'L12-laws', 2, 'formula', 'Emissivity expressed with exitances: ε = M_R / ( ? ) at the same temperature.', 'M_B (blackbody exitance)', ['mb', 'm b', 'blackbody exitance', 'blackbody radiant exitance', 'm_b'], 'Slide 14: ε = M_R / M_B at the same temperature.', [13], 'l12.emissivity');
I('L12-I19', 'L12', 'L12-laws', 3, 'scenario', 'Which RS systems does the lecture list for sensing forest fires (λ_max ≈ 3.62 µm)?', 'MODIS bands 20–25 (3–5 µm)', ['modis bands 20-25', 'modis', 'modis 20-25', 'modis bands 20 to 25'], 'Slide 15.', [14], 'l12.modis', { kw: [['modis']] });
I('L12-I20', 'L12', 'L12-laws', 3, 'scenario', 'Name ANY ONE system the lecture lists for sensing soil, water and rock at 300 K.', 'Landsat band 6, ASTER bands 12 & 13, or MODIS bands 29–30 & 31–32', ['landsat band 6', 'aster bands 12 and 13', 'modis bands 31-32', 'modis bands 29-30', 'landsat tm band 6', 'aster', 'landsat'], 'Slide 15: Landsat band 6 (10.4–12.5 µm); ASTER bands 12 & 13 (8–14 µm); MODIS bands 29–30 & 31–32 (8–14 µm).', [14], 'l12.w814', { kw: [['landsat', 'aster', 'modis']] });
I('L12-I21', 'L12', 'L12-thermalapps', 2, 'scenario', 'In which thermal image (day or dawn) have temperature differences decreased sharply with no shadows, while a brighter area reveals a local heat island?', 'Dawn (pre-dawn) thermal image', ['dawn', 'predawn', 'pre-dawn', 'dawn image', 'night'], 'Slide 16.', [15], 'l12.dawn');
I('L12-I22', 'L12', 'L12-thermalapps', 2, 'acronym', 'What does MODIS stand for?', 'Moderate-Resolution Imaging Spectroradiometer', ['moderate resolution imaging spectroradiometer'], 'Slide 18.', [17], 'l12.modis');
I('L12-I23', 'L12', 'L12-thermalapps', 3, 'formula', 'The MODIS LST algorithm uses brightness temperatures in which two MODIS bands?', 'Bands 31 and 32', ['31 and 32', '31 32', 'bands 31 32', 't31 and t32'], 'Slide 19: T31, T32 brightness temperatures in bands 31, 32 (split window).', [18], 'l12.splitwindow', { kw: [['31'], ['32']] });
I('L12-I24', 'L12', 'L12-thermalapps', 3, 'formula', 'In the MODIS LST formula, ε = (ε31 + ε32)/2 and Δε = ?', 'ε31 − ε32', ['e31 - e32', 'epsilon31 - epsilon32', 'ε31-ε32', 'difference of emissivities in bands 31 and 32'], 'Slide 19: Δε = ε31 − ε32.', [18], 'l12.splitwindow', { kw: [['31'], ['32']] });
I('L12-I25', 'L12', 'L12-thermalapps', 3, 'formula', 'In the MODIS LST algorithm, coefficients A, B and C come from multidimensional lookup tables that depend on ______.', 'Angle', ['viewing angle', 'view angle', 'the angle'], 'Slide 19: “coefficients given by multidimensional lookup tables (they depend on angle).”', [18], 'l12.splitwindow');
I('L12-I26', 'L12', 'L12-thermalapps', 2, 'scenario', 'NOAA sensor whose listed thermal bands (3.55–3.93, 10.30–11.30, 11.5–12.5 µm) are ALL at 1.1 km.', 'AVHRR', ['advanced very high resolution radiometer', 'noaa avhrr'], 'Slide 24.', [23], 'l12.avhrr');
I('L12-I27', 'L12', 'L12-thermalapps', 3, 'scenario', 'Joint NOAA/NASA/DoD program listed with 8 middle-wave and 4 long-wave thermal bands at 400–800 m.', 'NPOESS', ['viirs', 'npoess viirs'], 'Slide 24 (historical; see clarification).', [23], 'l12.npoess');
I('L12-I28', 'L12', 'L12-thermalapps', 2, 'scenario', 'The urban heat island of downtown San Antonio was detected by which sensor’s temperature product (Xie & Ytuarte, 2005)?', 'MODIS', ['modis lst', 'modis temperature product'], 'Slide 21.', [20], 'l12.uhi');
I('L12-I29', 'L12', 'L12-thermalapps', 2, 'scenario', 'Fires in the Bahamas, Florida and Cuba (03 April 2004, 18:30 UTC) were identified using MODIS on which satellite?', 'Aqua', ['modis aqua', 'aqua satellite'], 'Slide 23.', [22], 'l12.fire');
I('L12-I30', 'L12', 'L12-thermalapps', 1, 'list', 'Name any TWO thermal IR applications from slide 25.', 'e.g., evapotranspiration and thermal pollution', ['urban heat island', 'soil moisture', 'evapotranspiration'], 'Slide 25 lists: surface emittance & temperature, heat & moisture fluxes, climatological processes, evapotranspiration, soil moisture variation, hydrology/oceanography/ocean currents, biomass distribution, vegetation monitoring, lithology & geology, urban land use, natural disaster monitoring (volcano), thermal pollution.', [24], 'l12.tirrs', { kw2: [['surface', 'emittance', 'temperature'], ['flux', 'exchange'], ['climat'], ['evapotrans'], ['soil moisture'], ['hydrolog', 'oceanograph', 'ocean current'], ['biomass'], ['vegetation'], ['litholog', 'geolog'], ['urban'], ['disaster', 'volcano'], ['pollution']] });
I('L12-I31', 'L12', 'L12-mw', 2, 'scenario', 'Type of remote sensing in which the sensor creates its own energy, transmits it toward Earth and records the backscatter.', 'Active remote sensing', ['active', 'active sensing'], 'Slide 27.', [26], 'l12.active');
I('L12-I32', 'L12', 'L12-mw', 1, 'scenario', 'Wavelength range of the long-wavelength microwaves used by active microwave (radar), in cm.', '1–100 cm', ['1-100 cm', '1 to 100 cm', '1-100'], 'Slide 28.', [27], 'l12.radar', { kw: [['1'], ['100']] });
I('L12-I33', 'L12', 'L12-mw', 2, 'calc', 'Using ν(GHz) = 30/λ(cm), compute the frequency of a 23.5 cm L-band radar (GHz, two decimals).', '1.28', ['1.28 ghz', '1.277'], '30 / 23.5 = 1.28 GHz (L-band: 1–2 GHz).', [31, 44], 'l12.freq', { num: { v: 1.2766, tol: 0.01 } });
I('L12-I34', 'L12', 'L12-mw', 2, 'calc', 'Using ν(GHz) = 30/λ(cm), compute the frequency of a 3 cm X-band radar (GHz).', '10', ['10 ghz', '10.0'], '30 / 3 = 10 GHz (X-band: 8.0–12.5 GHz).', [31, 80], 'l12.freq', { num: { v: 10, tol: 0.05 } });
I('L12-I35', 'L12', 'L12-mw', 3, 'calc', 'Using ν(GHz) = 30/λ(cm), compute the frequency of the 5.6 cm C-band layer of the AIRSAR composite (GHz, two decimals).', '5.36', ['5.36 ghz', '5.357'], '30 / 5.6 = 5.36 GHz, within C-band (4.0–8.0 GHz).', [31, 78], 'l12.freq', { num: { v: 5.357, tol: 0.01 } });
I('L12-I36', 'L12', 'L12-mw', 2, 'scenario', 'Radar band with wavelength 3.9–7.5 cm (4.0–8.0 GHz).', 'C-band', ['c', 'c band'], 'Slide 33.', [32], 'l12.bandC');
I('L12-I37', 'L12', 'L12-mw', 2, 'scenario', 'Radar band with wavelength 15.0–30.0 cm (1.0–2.0 GHz).', 'L-band', ['l', 'l band'], 'Slide 33.', [32], 'l12.bandL');
I('L12-I38', 'L12', 'L12-mw', 2, 'scenario', 'Radar band with wavelength 30.0–100 cm (0.3–1.0 GHz).', 'P-band', ['p', 'p band'], 'Slide 33.', [32], 'l12.bandP');
I('L12-I39', 'L12', 'L12-mw', 2, 'scenario', 'Radar band with wavelength 2.4–3.8 cm (8.0–12.5 GHz).', 'X-band', ['x', 'x band'], 'Slide 33.', [32], 'l12.bandX');
I('L12-I40', 'L12', 'L12-mw', 3, 'scenario', 'Radar band with wavelength 7.5–15.0 cm (2.0–4.0 GHz).', 'S-band', ['s', 's band'], 'Slide 33.', [32], 'l12.bandS');
I('L12-I41', 'L12', 'L12-mw', 3, 'scenario', 'Radar band with wavelength 1.67–2.4 cm (12.5–18.0 GHz).', 'Ku-band', ['ku', 'ku band'], 'Slide 33.', [32], 'l12.bandKu');
I('L12-I42', 'L12', 'L12-mw', 2, 'scenario', 'Above roughly what wavelength is the atmosphere “essentially transparent” to radar, according to slide 34?', '~2 cm', ['2 cm', '2', 'about 2 cm', 'longer than 2 cm'], 'Slide 34: transparent at radar wavelengths (longer than ~2 cm).', [33], 'l12.allweather', { kw: [['2']] });
I('L12-I43', 'L12', 'L12-mw', 2, 'scenario', 'Radar technique listed as an advantage that uses 2 receiving antennas.', 'Interferometry', ['interferometric sar', 'insar', 'sar interferometry', 'radar interferometry'], 'Slide 35.', [34], 'l12.insar');
I('L12-I44', 'L12', 'L12-measure', 2, 'scenario', 'Direction at right angles (orthogonal) to the direction of travel in which radar pulses illuminate strips of terrain.', 'Range (look) direction', ['range direction', 'look direction', 'range', 'range or look direction'], 'Slide 38.', [37], 'l12.lookdir');
I('L12-I45', 'L12', 'L12-measure', 1, 'scenario', 'Terrain illuminated nearest the aircraft.', 'Near range', ['near-range'], 'Slide 38.', [37], 'l12.near');
I('L12-I46', 'L12', 'L12-measure', 2, 'list', 'Name the five TARGET parameters affecting radar brightness.', 'Roughness, bulk, ground slope & azimuth, target geometry, dielectric constant', ['roughness bulk ground slope azimuth target geometry dielectric constant'], 'Slide 39 (radar parameters: wavelength, polarisation, scene incidence angle, flight orientation).', [38], 'l12.dielectric', { kw: [['rough'], ['bulk'], ['slope'], ['geometry'], ['dielectric']] });
I('L12-I47', 'L12', 'L12-measure', 2, 'list', 'Name the four RADAR (system) parameters affecting radar brightness.', 'Wavelength, polarisation, scene incidence angle, flight orientation', ['wavelength polarization incidence angle flight orientation'], 'Slide 39.', [38], 'l12.incidence', { kw: [['wavelength'], ['polari'], ['incidence'], ['flight', 'orientation']] });
I('L12-I48', 'L12', 'L12-scatter', 2, 'visual', 'The angle of incidence equals the angle of reflection and almost no energy returns to the radar. Name the mechanism.', 'Specular reflection', ['specular', 'reflection off a smooth surface', 'smooth surface reflection', 'mirror reflection'], 'Slide 40.', [39], 'l12.specular', { fig: 'q-specular' });
I('L12-I49', 'L12', 'L12-scatter', 2, 'visual', 'The signal hits the ground, then a wall (or a freshly cut stump), and returns straight back to the antenna. Name the mechanism.', 'Double bounce', ['corner reflector', 'double-bounce', 'dihedral'], 'Slide 41.', [40], 'l12.double', { fig: 'q-double' });
I('L12-I50', 'L12', 'L12-scatter', 2, 'visual', 'Energy enters a canopy or dry snow pack and is scattered by many internal elements before some returns. Name the mechanism.', 'Volume scattering', ['volumetric scattering', 'volumetric', 'volume'], 'Slide 42.', [41], 'l12.volume', { fig: 'q-volume' });
I('L12-I51', 'L12', 'L12-scatter', 2, 'visual', 'Surface height variations are on the order of the radar wavelength, so energy scatters in many directions. Name the mechanism.', 'Diffuse scattering (rough surface)', ['diffuse scattering', 'diffuse', 'scattering off a rough surface', 'rough surface scattering'], 'Slide 40.', [39], 'l12.diffuse', { fig: 'q-diffuse' });
I('L12-I52', 'L12', 'L12-scatter', 2, 'def', 'In the canopy backscatter figure, what does the subscript “m” denote?', 'Multiple (scattering)', ['multiple', 'multiple scattering', 'multiple interactions'], 'Slide 43: t trunk, s soil, c leaves, m multiple.', [42], 'l12.canopy');
I('L12-I53', 'L12', 'L12-scatter', 2, 'def', 'In the canopy backscatter figure, what does the subscript “t” denote?', 'Trunk', ['trunks', 'tree trunk'], 'Slide 43.', [42], 'l12.canopy');
I('L12-I54', 'L12', 'L12-scatter', 3, 'scenario', 'Which radar band can propagate through the canopy to branches, trunk and ground, and keeps sensitivity to higher biomass?', 'P-band', ['p', 'p band'], 'Slide 46.', [45], 'l12.bandP');
I('L12-I55', 'L12', 'L12-scatter', 3, 'scenario', 'Which radar band “quickly saturates” because even at relatively low biomass it only sees the canopy?', 'C-band', ['c', 'c band'], 'Slide 46.', [45], 'l12.saturation');
I('L12-I56', 'L12', 'L12-scatter', 2, 'scenario', 'Radar surface rule: surfaces are typically bright if ______ and ______.', 'Wet and rough', ['rough and wet', 'wet rough'], 'Slide 48: bright if wet and rough; dark if dry and smooth.', [47], 'l12.wetrough', { kw: [['wet'], ['rough']] });
I('L12-I57', 'L12', 'L12-scatter', 3, 'scenario', 'Besides being the dominant scatterer, what other role can vegetation play with respect to ground scattering?', 'Attenuator', ['attenuation', 'it attenuates ground scattering', 'an attenuator'], 'Slide 48.', [47], 'l12.attenuator', { kw: [['attenuat']] });
I('L12-I58', 'L12', 'L12-scatter', 2, 'scenario', 'In radar images, cities usually appear very bright because of which mechanism?', 'Double bounce (corner reflectors)', ['double bounce', 'corner reflector', 'corner reflectors'], 'Slide 47 schematic: city → corner reflectors → very bright.', [46], 'l12.double');
I('L12-I59', 'L12', 'L12-pol', 1, 'scenario', 'Polarization: transmitted horizontally, received vertically. Write the code.', 'HV', ['h v', 'h-v'], 'Slide 50: 1st letter transmitted, 2nd received; HV is cross-polarized. Slide 51 compares Ka-band HH with Ka-band HV.', [49, 50], 'l12.cross');
I('L12-I60', 'L12', 'L12-pol', 2, 'scenario', 'Collective term for HH and VV polarizations.', 'Like-polarized', ['like', 'like polarization', 'co-polarized', 'copolarized', 'like polarized'], 'Slide 50.', [49], 'l12.like');
I('L12-I61', 'L12', 'L12-geom', 2, 'scenario', 'Geometry in which uncorrected radar imagery is displayed, based on the distance from the radar to each feature.', 'Slant-range geometry', ['slant range', 'slant-range', 'slant range geometry'], 'Slide 52.', [51], 'l12.slant');
I('L12-I62', 'L12', 'L12-geom', 2, 'formula', 'Identify the quantity: R = τc / (2 cos γ).', 'Range resolution', ['rr', 'range resolution (rr)'], 'Slide 54: τ = pulse length, c = speed of light, γ = depression angle.', [53], 'l12.rangeres');
I('L12-I63', 'L12', 'L12-geom', 2, 'formula', 'Identify the quantity: R = S × λ / L.', 'Azimuth resolution', ['ra', 'azimuth resolution (ra)'], 'Slide 55: slant range × wavelength / antenna length.', [54], 'l12.azres');
I('L12-I64', 'L12', 'L12-geom', 3, 'calc', 'Range resolution with pulse length τ = 0.1 × 10⁻⁶ s at a depression angle of 65° (m, one decimal). c = 3 × 10⁸ m/s.', '35.5', ['35.5 m', '35.49'], 'R_r = (0.1e-6 × 3e8) / (2 cos 65°) = 30 / 0.8452 = 35.5 m (slide 54).', [53], 'l12.rangeres', { num: { v: 35.49, tol: 0.15 } });
I('L12-I65', 'L12', 'L12-geom', 3, 'calc', 'Same radar, depression angle 40°: compute the range resolution (m, two decimals).', '19.58', ['19.58 m', '19.6'], 'R_r = 30 / (2 cos 40°) = 30 / 1.532 = 19.58 m (slide 54).', [53], 'l12.rangeres', { num: { v: 19.58, tol: 0.05 } });
I('L12-I66', 'L12', 'L12-geom', 3, 'calc', 'A real aperture radar has R_a = 120 m at slant range 20 km. What is R_a at 40 km (m)?', '240', ['240 m'], 'R_a ∝ S, so doubling S doubles R_a: 240 m (slide 55).', [54], 'l12.azres', { num: { v: 240, tol: 0.5 } });
I('L12-I67', 'L12', 'L12-geom', 3, 'calc', 'Compute R_a = Sλ/L for S = 20 km, λ = 3 cm, L = 5 m (in m).', '120', ['120 m'], '20,000 m × 0.03 m / 5 m = 120 m, which matches the slide’s near-range value (λ and L chosen to illustrate).', [54], 'l12.azres', { num: { v: 120, tol: 0.5 } });
I('L12-I68', 'L12', 'L12-geom', 3, 'scenario', 'Two towers 30 m apart are at near range, where R_r = 35.5 m. Are they resolved?', 'No (not resolved)', ['no', 'not resolved', 'they are not resolved', 'unresolved'], 'They are closer together than the resolution cell (30 m < 35.5 m), so they are not resolved (slide 54).', [53], 'l12.rangeres', { kw: [['no', 'not', 'unresolved']] });
I('L12-I69', 'L12', 'L12-distort', 2, 'visual', 'The top of a mountain facing the radar is imaged BEFORE its base (a and b reversed). Name the distortion.', 'Layover', [], 'Slides 56, 59.', [55, 58], 'l12.layover', { fig: 'q-layover' });
I('L12-I70', 'L12', 'L12-distort', 2, 'visual', 'A slope facing the radar appears compressed and bright, but its base is still imaged before its top. Name the distortion.', 'Foreshortening', ['fore-shortening'], 'Slides 57–58.', [56, 57], 'l12.foreshort', { fig: 'q-foreshort' });
I('L12-I71', 'L12', 'L12-distort', 2, 'visual', 'A slope facing away from the radar is steeper than the depression angle, and a black area with no return appears behind the ridge. Name the effect.', 'Radar shadow', ['shadow'], 'Slides 60–61: −α > γ.', [59, 60], 'l12.shadow', { fig: 'q-shadow' });
I('L12-I72', 'L12', 'L12-distort', 2, 'formula', 'Condition for layover in terms of incidence angle θ and slope angle α.', 'θ < α', ['theta < alpha', 'theta less than alpha', 'incidence angle less than slope angle', 'θ<α'], 'Slide 59: incidence angle less than slope angle toward radar.', [58], 'l12.layover', { kw: [['<', 'less', 'smaller']] });
I('L12-I73', 'L12', 'L12-distort', 2, 'formula', 'Condition for radar shadow in terms of back-slope angle α and depression angle γ.', '−α > γ', ['-alpha > gamma', '-α > γ', 'back slope steeper than depression angle', 'slope away steeper than depression angle'], 'Slide 61.', [60], 'l12.shadow', { kw: [['>', 'steeper', 'greater']] });
I('L12-I74', 'L12', 'L12-distort', 2, 'scenario', 'Grainy salt-and-pepper pattern in radar imagery caused by the coherent nature of the radar wave.', 'Speckle', ['speckle noise'], 'Slide 62.', [61], 'l12.speckle');
I('L12-I75', 'L12', 'L12-distort', 2, 'scenario', 'Processing that reduces speckle by processing separate portions of an aperture and recombining them.', 'Multi-look processing (multiple looks)', ['multiple looks', 'multilook', 'multi-look', 'multilooking'], 'Slide 62.', [61], 'l12.multilook');
I('L12-I76', 'L12', 'L12-distort', 3, 'scenario', 'Which sensor in slide 58 shows MORE foreshortening of the same mountains: C-band ERS-1 (incident angle 23°) or L-band JERS-1 (incident angle 39°)?', 'C-band ERS-1', ['ers-1', 'ers 1', 'c-band ers-1', 'ers'], 'A smaller incidence angle (steeper look) increases foreshortening: ERS-1 at 23° vs JERS-1 at 39°.', [57], 'l12.foreshort', { kw: [['ers']] });
I('L12-I77', 'L12', 'L12-ph', 2, 'scenario', 'Philippine river whose lahar deposits appear as low-backscatter areas in the ERS-1 image near Mt. Pinatubo.', 'Pasig-Potrero River', ['pasig potrero', 'pasig-potrero', 'pasig potrero river'], 'Slides 68–69.', [67, 68], 'l12.lahar');
I('L12-I78', 'L12', 'L12-ph', 2, 'scenario', 'Site imaged with the RADARSAT standard beam data set at 25 m/pixel.', 'Clark Air Base', ['clark', 'clark airbase'], 'Slide 67.', [66], 'l12.clark');
I('L12-I79', 'L12', 'L12-ph', 2, 'scenario', 'Volcano imaged by RADARSAT ScanSAR beam 1 at 50 m/pixel.', 'Taal Volcano', ['taal'], 'Slide 71.', [70], 'l12.taal');
I('L12-I80', 'L12', 'L12-ph', 3, 'scenario', 'Source of the topographic data used to make a shaded-relief image of the lahar fans SE of Mt. Pinatubo (Nov 30, 1996).', 'NASA TOPSAR', ['topsar'], 'Slide 70.', [69], 'l12.topsar');
I('L12-I81', 'L12', 'L12-ph', 3, 'scenario', 'Landsat 7 path/row shown with Pinatubo, Manila and Taal labeled.', 'Path 116, Row 50', ['116/50', 'path 116 row 50', '116 50'], 'Slide 63.', [62], 'l12.pinatubo', { kw: [['116'], ['50']] });
I('L12-I82', 'L12', 'L12-value', 2, 'scenario', 'The most common way to add value to radar imagery, according to slide 76.', 'Multi-polarisation imagery', ['multi-polarisation', 'multipolarization', 'multi-polarization', 'multipolarisation'], 'Slide 76.', [75], 'l12.multipol');
I('L12-I83', 'L12', 'L12-value', 2, 'scenario', 'AIRSAR composite of Mt Tongariro with Red = 68 cm, Green = 24 cm, Blue = 5.6 cm. Which way of adding value is this?', 'Multi-wavelength radar', ['multi-wavelength', 'multiwavelength', 'multi-frequency', 'multifrequency'], 'Slide 79.', [78], 'l12.multiwave');
I('L12-I84', 'L12', 'L12-value', 2, 'scenario', 'Mission used for “Generation of DEMs” with X-SAR at 3 cm wavelength on 12 Feb 2000.', 'SRTM', ['shuttle radar topography mission', 'srtm x-sar'], 'Slide 81.', [80], 'l12.srtm');
I('L12-I85', 'L12', 'L12-value', 3, 'scenario', 'In the Graham (2001) moisture example, white pixels relate to very high backscatter due to the presence of ______.', 'Sub-surface water', ['subsurface water', 'sub surface water', 'water below the surface', 'groundwater'], 'Slide 84.', [83], 'l12.moisture', { kw: [['water']] });
I('L12-I86', 'L12', 'L12-value', 3, 'scenario', 'Number of classes in the airborne radar (24 cm) land cover classification of Mt Tongariro.', '8', ['eight', '8 classes'], 'Slide 82.', [81], 'l12.radarlc', { num: { v: 8, tol: 0 } });
I('L12-I87', 'L12', 'L12-value', 2, 'scenario', 'Two-date ERS SAR composite of Maastricht (30/1/95 red/green, 21/9/95 blue) was used to map what?', 'Floods', ['flood', 'flooding', 'flood mapping', 'flooded areas'], 'Slide 80.', [79], 'l12.flood', { kw: [['flood']] });
I('L12-I88', 'L12', 'L12-mw', 2, 'scenario', 'In the SAR–optical comparison, which sensor produced the C-band (HH) image from 1998?', 'Radarsat-1', ['radarsat', 'radarsat 1'], 'Slide 29: Radarsat-1 C-band (HH), 1998 vs SPOT-3 band 1 (visible green), 1996.', [28], 'l12.radarsat');

// ───────────────────────── MULTIPLE CHOICE ─────────────────────────
M('L12-M01', 'L12', 'L12-tir', 1, 'Thermal infrared remote sensing senses…', [
  ['emissive energy, or “temperature” energy', 'Slide 7.'],
  ['reflected sunlight only', 'That is optical/reflective sensing.'],
  ['backscattered microwave pulses', 'That is radar.'],
  ['sound waves', 'Not EM.']], [6], 'l12.tirrs');
M('L12-M02', 'L12', 'L12-tir', 2, 'Why do satellite thermal sensors use only the 3–5 µm and 8–14 µm portions?', [
  ['Atmospheric interference (absorption) blocks the other thermal wavelengths', 'Slide 7: limited by atmospheric interference.'],
  ['Objects do not emit outside these ranges', 'Objects emit across 3–100 µm.'],
  ['Detectors cannot be built for other wavelengths', 'Not stated.'],
  ['Sunlight is strongest there', 'Sunlight peaks in the visible.']], [6], 'l12.window');
M('L12-M03', 'L12', 'L12-temps', 2, 'Which statement about T_kin and T_rad is correct?', [
  ['They are usually highly positively correlated, but remote T_rad is slightly less than T_kin because of emissivity', 'Slide 10.'],
  ['T_rad is always higher than T_kin', 'Reversed.'],
  ['They are unrelated', 'Their high correlation is the basis of TIR RS.'],
  ['T_rad is measured with a thermometer', 'T_kin is measured with a thermometer.']], [9], 'l12.trad');
M('L12-M04', 'L12', 'L12-temps', 2, 'Emissivity is best described as…', [
  ['a dimensionless ratio of the energy a real material emits to that of a blackbody at the same temperature', 'Slides 12 and 14.'],
  ['the temperature at which emission peaks', 'That is related to Wien’s λ_max.'],
  ['energy in watts emitted per unit area', 'That is exitance/flux.'],
  ['the reflectance of a surface in the visible', 'Not the definition.']], [11, 13], 'l12.emissivity');
M('L12-M05', 'L12', 'L12-laws', 2, 'According to the Stefan–Boltzmann law, F_R = εσT⁴. If T rises from 300 K to 600 K (ε unchanged), F_R becomes…', [
  ['16 times larger', '(600/300)⁴ = 2⁴ = 16.'],
  ['2 times larger', 'That would be linear.'],
  ['4 times larger', 'That would be T².'],
  ['unchanged', 'Emission increases strongly with T.']], [10], 'l12.sb');
M('L12-M06', 'L12', 'L12-laws', 2, 'As an object gets hotter, Wien’s displacement law says its dominant wavelength…', [
  ['becomes shorter (λ_max = 2898/T)', 'Slide 14.'],
  ['becomes longer', 'Opposite.'],
  ['stays at 9.66 µm', '9.66 µm applies only at 300 K.'],
  ['depends only on emissivity', 'Wien’s law depends on T.']], [13], 'l12.wien');
M('L12-M07', 'L12', 'L12-laws', 3, 'A forest fire at about 800 K should be sensed in which region, and with which system according to the lecture?', [
  ['~3.62 µm, MODIS bands 20–25 (3–5 µm)', 'Slide 15.'],
  ['~9.66 µm, Landsat band 6', 'That is for ~300 K targets.'],
  ['0.4–0.7 µm, Landsat band 2', 'Visible bands are not used for fire emission here.'],
  ['~1 cm, Ka-band radar', 'Radar is not thermal emission sensing.']], [14], 'l12.lmax');
M('L12-M08', 'L12', 'L12-laws', 2, 'Brightness temperature T_b obtained from sensor radiance via the Planck equation is…', [
  ['less than the real physical (surface) temperature', 'Slide 13 (because ε < 1).'],
  ['always equal to the physical temperature', 'Only for a blackbody (ε = 1).'],
  ['greater than the physical temperature', 'Opposite.'],
  ['unrelated to emissivity', 'The slide’s formula includes ε_λ.']], [12], 'l12.tb');
M('L12-M09', 'L12', 'L12-laws', 3, 'From the slide 13 graph of T_b − T, the difference between brightness and physical temperature becomes LARGER when…', [
  ['wavelength is longer and emissivity is lower', 'The ε = 0.8 curves fall farther below zero and the gap grows toward 14 µm.'],
  ['emissivity approaches 1', 'At ε = 1 the gap vanishes.'],
  ['wavelength is shorter', 'The gap shrinks at shorter λ.'],
  ['temperature is lower and emissivity is higher', 'Both reduce the gap.']], [12], 'l12.tb');
M('L12-M10', 'L12', 'L12-laws', 2, 'Using the lecture’s relations (M_B = σT_kin⁴, M_R = σT_rad⁴), emissivity equals…', [
  ['T_rad⁴ / T_kin⁴', 'Slide 14.'],
  ['T_kin / T_rad', 'Wrong power and inverted.'],
  ['T_rad / T_kin', 'Missing the fourth power.'],
  ['2898 / T', 'That is Wien’s law.']], [13], 'l12.emissivity');
M('L12-M11', 'L12', 'L12-thermalapps', 2, 'Compared with a daytime thermal image of a city, a dawn thermal image shows…', [
  ['much smaller temperature differences, no shadows, and a brighter local heat island', 'Slide 16.'],
  ['stronger shadows', 'Shadows disappear at dawn.'],
  ['exactly the same pattern', 'The patterns differ markedly.'],
  ['no information because there is no sunlight', 'Thermal sensing does not need sunlight.']], [15], 'l12.dawn');
M('L12-M12', 'L12', 'L12-thermalapps', 2, 'Which is NOT listed among MODIS measurements on slide 18?', [
  ['Radar backscatter of lahars', 'That came from ERS-1/RADARSAT.'],
  ['Surface/cloud temperature', 'Listed.'],
  ['Cirrus clouds and water vapor', 'Listed.'],
  ['Cloud top altitude', 'Listed.']], [17], 'l12.modis');
M('L12-M13', 'L12', 'L12-thermalapps', 3, 'In the MODIS LST algorithm, T31 and T32 are…', [
  ['brightness temperatures in MODIS bands 31 and 32', 'Slide 19.'],
  ['kinetic temperatures measured in the field', 'Not in the formula.'],
  ['emissivities of bands 31 and 32', 'Those are ε31, ε32.'],
  ['lookup-table coefficients', 'Those are A, B, C.']], [18], 'l12.splitwindow');
M('L12-M14', 'L12', 'L12-thermalapps', 2, 'Which is listed as a thermal infrared application on slide 25?', [
  ['Thermal pollution', 'Listed.'],
  ['Pipeline integrity', 'That is on the radar applications list.'],
  ['Sea ice type', 'Radar applications list.'],
  ['Wave strength for oil platforms', 'Radar applications list.']], [24], 'l12.tirrs');
M('L12-M15', 'L12', 'L12-thermalapps', 3, 'Which statement about the slide 24 mission list is the BEST practice for an exam?', [
  ['Learn the slide values, but treat them as historical specifications (NPOESS was restructured and GOES now flies the newer ABI)', 'See clarification n12-npoess.'],
  ['Assume NPOESS is the newest operating system', 'It was restructured in 2010.'],
  ['Ignore the slide because it is outdated', 'It may still be examined as lecture content.'],
  ['Assume all bands listed are radar bands', 'They are thermal IR bands.']], [23], 'l12.npoess');
M('L12-M16', 'L12', 'L12-mw', 1, 'Passive remote sensing uses…', [
  ['natural energy: reflected sunlight or emitted thermal or microwave radiation', 'Slide 27.'],
  ['energy created and transmitted by the sensor', 'That is active.'],
  ['only laser pulses', 'Lidar is active.'],
  ['only backscatter', 'Backscatter is recorded by active sensors.']], [26], 'l12.passive');
M('L12-M17', 'L12', 'L12-mw', 2, 'Why is frequency often used instead of wavelength in the microwave region? The slide simply states that…', [
  ['frequency (Hz, usually GHz) is generally used there, related by ν = c/λ', 'Slide 32.'],
  ['microwaves have no wavelength', 'They do (1–100 cm for radar).'],
  ['frequency is identical to wavelength', 'They are inversely related.'],
  ['wavelength cannot be measured', 'Not stated.']], [31], 'l12.freq');
M('L12-M18', 'L12', 'L12-mw', 2, 'Which band ordering goes from SHORTEST to LONGEST wavelength?', [
  ['Ka, K, Ku, X, C, S, L, P', 'Slide 33 table order.'],
  ['P, L, S, C, X, Ku, K, Ka', 'Longest to shortest.'],
  ['X, C, L, P, S, K', 'Mixed.'],
  ['L, C, X, Ka, P, S', 'Mixed.']], [32], 'l12.bandKa');
M('L12-M19', 'L12', 'L12-mw', 2, 'The unusual microwave band letter names are…', [
  ['an artifact of the original secret radar work in World War II', 'Slide 33.'],
  ['abbreviations of the scientists who discovered them', 'Not stated.'],
  ['chosen alphabetically by wavelength', 'They are not alphabetical.'],
  ['named after satellites', 'No.']], [32], 'l12.wwii');
M('L12-M20', 'L12', 'L12-mw', 2, 'Radar’s sensitivity to water content and surface roughness is listed as an advantage. Why is it ALSO a problem?', [
  ['Small amounts of water affect the signal, and it is hard to separate the volume response from the surface response', 'Slide 36.'],
  ['Radar cannot detect water at all', 'Radar is very sensitive to water.'],
  ['Roughness makes radar unusable at night', 'Radar works day or night.'],
  ['It requires a thermometer', 'Unrelated.']], [34, 35], 'l12.allweather');
M('L12-M21', 'L12', 'L12-mw', 2, 'Radar penetrating clouds, vegetation, dry soil and dry snow is an advantage, but the problem is that…', [
  ['the signal is integrated over a depth range and a variety of materials', 'Slide 36.'],
  ['it can only image water', 'No.'],
  ['penetration is impossible at long wavelengths', 'Longer wavelengths penetrate more.'],
  ['it removes speckle', 'Unrelated.']], [35], 'l12.penetration');
M('L12-M22', 'L12', 'L12-measure', 2, 'Radar pulses illuminate strips of terrain…', [
  ['at right angles (orthogonal) to the direction of travel (the range or look direction)', 'Slide 38.'],
  ['parallel to the flight direction', 'That is azimuth.'],
  ['directly beneath the aircraft only', 'Radar is side-looking.'],
  ['only at the far range', 'From near range to far range.']], [37], 'l12.lookdir');
M('L12-M23', 'L12', 'L12-measure', 3, 'Which is a TARGET parameter (not a radar system parameter) affecting radar brightness?', [
  ['Dielectric constant', 'Slide 39: target parameters are roughness, bulk, ground slope & azimuth, target geometry, dielectric constant.'],
  ['Wavelength', 'Radar parameter.'],
  ['Polarisation', 'Radar parameter.'],
  ['Flight orientation', 'Radar parameter.']], [38], 'l12.dielectric');
M('L12-M24', 'L12', 'L12-scatter', 2, 'A calm lake appears very dark in a radar image mainly because of…', [
  ['specular reflection away from the sensor', 'Smooth surface: angle of incidence = angle of reflection (slides 40, 47).'],
  ['double bounce', 'That makes targets bright.'],
  ['volume scattering', 'Water surfaces do not volume-scatter at radar wavelengths.'],
  ['speckle', 'Speckle is noise, not the cause of darkness.']], [39, 46], 'l12.specular');
M('L12-M25', 'L12', 'L12-scatter', 2, 'Which scattering occurs when a signal is reflected and refracted inside dry snow, reflects off underlying ice and refracts back to the receiver?', [
  ['Volumetric scattering', 'Slide 42.'],
  ['Specular reflection', 'A single smooth surface.'],
  ['Double bounce', 'Two perpendicular surfaces.'],
  ['Layover', 'A geometric distortion, not a scattering mechanism.']], [41], 'l12.volume');
M('L12-M26', 'L12', 'L12-scatter', 3, 'For mapping HIGH forest biomass, the lecture favors…', [
  ['P-band, because it “sees” trunks and branches and keeps sensitivity at higher biomass', 'Slide 46.'],
  ['C-band, because it sees only the canopy', 'C-band saturates quickly.'],
  ['X-band, because it has the shortest wavelength', 'Shorter λ penetrates least.'],
  ['Any band, since all respond equally to biomass', 'Response depends on frequency (slide 45).']], [44, 45], 'l12.bandP');
M('L12-M27', 'L12', 'L12-scatter', 2, 'A ploughed, wet field compared with a dry, smooth road usually appears…', [
  ['brighter, because surfaces are bright if wet and rough', 'Slide 48.'],
  ['darker, because water absorbs radar', 'Wet surfaces generally backscatter more strongly.'],
  ['identical, because radar ignores moisture', 'Radar is very sensitive to moisture.'],
  ['black, because of radar shadow', 'Shadow is geometric.']], [47], 'l12.wetrough');
M('L12-M28', 'L12', 'L12-scatter', 3, 'With longer wavelengths or dry soils such as sand, radar may…', [
  ['penetrate into the soil', 'Slide 48 note.'],
  ['stop working entirely', 'No.'],
  ['become specular everywhere', 'Not stated.'],
  ['produce layover', 'Unrelated.']], [47], 'l12.penetration');
M('L12-M29', 'L12', 'L12-pol', 2, 'In radar polarization codes, the first and second letters represent…', [
  ['transmitted and received polarization respectively', 'Slide 50.'],
  ['received and transmitted polarization respectively', 'Reversed.'],
  ['wavelength and frequency', 'No.'],
  ['look direction and azimuth', 'No.']], [49], 'l12.polarization');
M('L12-M30', 'L12', 'L12-pol', 2, 'Which pair are BOTH cross-polarized?', [
  ['HV and VH', 'Slide 50.'],
  ['HH and VV', 'Like-polarized.'],
  ['HH and HV', 'Mixed.'],
  ['VV and VH', 'Mixed.']], [49], 'l12.cross');
M('L12-M31', 'L12', 'L12-geom', 2, 'Ground-range geometry differs from slant-range geometry in that…', [
  ['features are shown in their proper planimetric (x, y) positions', 'Slide 52.'],
  ['it is the uncorrected format', 'Slant range is the uncorrected format.'],
  ['it measures distance along the line of sight', 'That is slant range.'],
  ['it has only an azimuth dimension', 'Radar resolution has range and azimuth dimensions.']], [51], 'l12.ground');
M('L12-M32', 'L12', 'L12-geom', 3, 'For a fixed pulse length, why is range resolution FINER in the far range?', [
  ['The depression angle γ is smaller there, so cos γ is larger and τc/(2 cos γ) is smaller', 'Slide 54: 19.58 m at 40° vs 35.5 m at 65°.'],
  ['The slant range is larger, which shrinks the cell', 'Slant range appears in the AZIMUTH formula, not range.'],
  ['The antenna is longer at far range', 'The antenna does not change.'],
  ['The wavelength is shorter at far range', 'Wavelength is fixed.']], [53], 'l12.rangeres');
M('L12-M33', 'L12', 'L12-geom', 3, 'For a real aperture radar, azimuth resolution can be IMPROVED (made smaller) by…', [
  ['using a longer antenna or shorter wavelength', 'R_a = Sλ/L (slide 55).'],
  ['imaging at a longer slant range', 'Larger S worsens R_a.'],
  ['using a longer wavelength', 'Larger λ worsens R_a.'],
  ['using a longer pulse', 'Pulse length affects range resolution.']], [54], 'l12.azres');
M('L12-M34', 'L12', 'L12-geom', 3, 'In the slide 55 example, tanks 200 m apart are resolved at 20 km but NOT at 40 km because…', [
  ['R_a grows from 120 m to 240 m, exceeding the 200 m spacing at far range', 'Slide 55.'],
  ['the depression angle is larger at far range', 'That affects range resolution.'],
  ['the tanks are smaller at far range', 'Their size does not change.'],
  ['radar shadow hides them', 'Not stated.']], [54], 'l12.azres');
M('L12-M35', 'L12', 'L12-distort', 2, 'Layover occurs when…', [
  ['the incidence angle is less than the slope angle toward the radar (θ < α)', 'Slide 59.'],
  ['the slope away from the radar is steeper than the depression angle', 'That is shadow.'],
  ['the surface is wet and rough', 'That gives bright returns.'],
  ['multiple looks are processed', 'That reduces speckle.']], [58], 'l12.layover');
M('L12-M36', 'L12', 'L12-distort', 3, 'Which geometric distortion “cannot be corrected,” according to the lecture?', [
  ['Layover', 'Slide 59.'],
  ['Speckle', 'Speckle is reduced by multi-looking. It is noise, not a geometric distortion.'],
  ['Slant-range display', 'It can be converted to ground range.'],
  ['Foreshortening of gentle slopes', 'Foreshortening can be corrected; layover cannot.']], [58], 'l12.layover');
M('L12-M37', 'L12', 'L12-distort', 2, 'Speckle in radar images is caused by…', [
  ['random constructive and destructive interference due to the coherent nature of the radar wave', 'Slide 62.'],
  ['clouds and rain', 'Radar is generally unaffected by them.'],
  ['slope facing away from the radar', 'That causes shadow.'],
  ['low emissivity', 'A thermal concept.']], [61], 'l12.speckle');
M('L12-M38', 'L12', 'L12-distort', 3, 'Going from a 1-look to a 16-look radar image mainly…', [
  ['reduces speckle (with some loss of spatial detail)', 'Slide 62; see clarification on multi-look trade-off.'],
  ['increases layover', 'Unrelated.'],
  ['changes the polarization', 'Unrelated.'],
  ['converts slant range to ground range', 'That is geometric correction.']], [61], 'l12.multilook');
M('L12-M39', 'L12', 'L12-ph', 2, 'In the ERS-1 image of the Pasig-Potrero River, the lahar deposits appear…', [
  ['as low-backscatter (dark) areas', 'Slide 69 caption.'],
  ['as very bright corner reflectors', 'Not described.'],
  ['in red, like vegetation in NIR FCC', 'That is an optical convention.'],
  ['invisible because of clouds', 'Radar sees through clouds.']], [68], 'l12.lahar');
M('L12-M40', 'L12', 'L12-ph', 2, 'Which RADARSAT mode/resolution was used for Taal Volcano and its surroundings?', [
  ['ScanSAR beam 1, 50 m/pixel', 'Slide 71.'],
  ['Standard beam, 25 m/pixel', 'That was Clark Air Base.'],
  ['SPOT, 20 m', 'SPOT is optical.'],
  ['TOPSAR shaded relief', 'That was the lahar fans.']], [70], 'l12.scansar');
M('L12-M41', 'L12', 'L12-value', 2, 'Which is NOT one of the three ways to add value to radar imagery on slide 76?', [
  ['Multi-emissivity', 'Not a radar method.'],
  ['Multi-polarisation', 'Listed (most common).'],
  ['Multi-temporal', 'Listed.'],
  ['Multi-wavelength', 'Listed.']], [75], 'l12.multipol');
M('L12-M42', 'L12', 'L12-value', 3, 'In the Maastricht composite (30/1/95 → red & green, 21/9/95 → blue), areas flooded ONLY on 30/1/95 would appear…', [
  ['blue, because smooth floodwater is dark in red/green but the ground was brighter on the September date', 'Clarification: water gives low backscatter, so only the blue layer stays bright.'],
  ['yellow, because red and green are bright', 'Floodwater makes red and green dark.'],
  ['white, because all layers are bright', 'Floodwater is dark in two layers.'],
  ['unchanged gray', 'Change between dates makes them stand out.']], [79], 'l12.flood');
M('L12-M43', 'L12', 'L12-value', 2, 'Which is on the radar “ambitious list of applications” (slide 85)?', [
  ['Oil slicks and sea ice type', 'Listed.'],
  ['Evapotranspiration', 'A thermal IR application.'],
  ['Thermal pollution', 'A thermal IR application.'],
  ['Urban heat island', 'A thermal application.']], [84], 'l12.multipol');
M('L12-M44', 'L12', 'L12-value', 2, 'The lecture concludes that radar is very reliable because of…', [
  ['cloud penetration and day/night availability', 'Slide 86.'],
  ['its high spectral resolution', 'Not stated.'],
  ['the absence of geometric distortions', 'Radar HAS distortions.'],
  ['its use of reflected sunlight', 'Radar is active.']], [85], 'l12.allweather');
M('L12-M45', 'L12', 'L12-scatter', 3, 'A radar image shows a forested area as bright and mottled while an adjacent smooth parking lot is dark. The forest’s brightness is mainly due to…', [
  ['volume scattering within the canopy', 'Slide 47 schematic: forest → volume scattering.'],
  ['specular reflection', 'That would make it dark.'],
  ['radar shadow', 'Shadow produces no return.'],
  ['layover', 'Layover is geometric, on steep slopes.']], [46], 'l12.volume');
M('L12-M46', 'L12', 'L12-tir', 2, 'The 3–4 µm window is used for Earth studies mainly at night because…', [
  ['solar reflectance contaminates it during daylight hours', 'Slide 7.'],
  ['objects stop emitting during the day', 'Emission continues day and night.'],
  ['clouds only form during the day', 'Not stated.'],
  ['radar interferes with it', 'Unrelated.']], [6], 'l12.solarcontam');

// ───────────────────────── RECALL ─────────────────────────
R('L12-R01', 'L12', 'L12-temps', 'diff', 'Explain the difference between kinetic temperature and radiant temperature.', 'T_kin: true internal temperature from the random motion of particles (kinetic heat), measured with a thermometer. T_rad: concentration of radiant flux emitted from the object, measured remotely by radiometers; highly correlated with T_kin but slightly lower because emissivity < 1 (ε = T_rad⁴/T_kin⁴).', [8, 9, 13], 'l12.tkin');
R('L12-R02', 'L12', 'L12-laws', 'formula', 'State the Stefan–Boltzmann and Wien laws with symbols and units.', 'Stefan–Boltzmann: F_R = εσT⁴ (σ = 5.67×10⁻¹² W cm⁻² K⁻⁴ = 5.67×10⁻⁸ W m⁻² K⁻⁴; blackbody M_B = σT⁴ in W m⁻²; T in kelvin). Wien: λ_max = 2898/T (λ in µm, T in K) — 300 K → 9.66 µm, 800 K → 3.62 µm.', [10, 13, 14], 'l12.sb');
R('L12-R03', 'L12', 'L12-distort', 'diff', 'Distinguish foreshortening, layover and radar shadow.', 'Foreshortening: foreslope compressed and bright in slant range, order preserved. Layover: extreme foreshortening when θ < α, the top is imaged before the base, cannot be corrected. Shadow: back-slope steeper than the depression angle (−α > γ) receives no signal, so it is black.', [55, 56, 58, 59, 60], 'l12.layover');
R('L12-R04', 'L12', 'L12-geom', 'formula', 'Write the range and azimuth resolution equations and how each changes from near to far range.', 'R_r = τc/(2 cos γ): gets finer toward far range (smaller γ); e.g., 35.5 m at 65° vs 19.58 m at 40°. R_a = Sλ/L: gets coarser toward far range (larger S); e.g., 120 m at 20 km vs 240 m at 40 km.', [53, 54], 'l12.rangeres');
R('L12-R05', 'L12', 'L12-scatter', 'diff', 'Describe the four scattering mechanisms and how each appears on a radar image.', 'Specular (smooth surface, incidence = reflection angle) → dark. Diffuse (roughness ~ wavelength) → medium gray. Double bounce (two perpendicular surfaces, corner reflector; e.g., buildings, grass + stump) → very bright. Volume (canopy, dry snow; multiple internal scattering) → bright/mottled.', [39, 40, 41, 46], 'l12.double');
R('L12-R06', 'L12', 'L12-mw', 'explain', 'List radar’s advantages and the matching problems.', 'Own illumination, all weather, day/night, transparent above ~2 cm. Penetrates clouds/vegetation/dry soil/dry snow → signal integrated over depth & materials. Sensitive to water & roughness (waves) → small water amounts affect signal; volume vs surface hard to separate. Sensitive to polarization & frequency → many expensive choices, formidable math. Interferometry with 2 antennas.', [33, 34, 35], 'l12.allweather');
R('L12-R07', 'L12', 'L12-mw', 'explain', 'Recite the microwave band codes with wavelength ranges (cm).', 'Ka 0.75–1.18; K 1.19–1.67; Ku 1.67–2.4; X 2.4–3.8; C 3.9–7.5; S 7.5–15; L 15–30; P 30–100. ν(GHz) = 30/λ(cm).', [32], 'l12.bandX');
R('L12-R08', 'L12', 'L12-scatter', 'diff', 'Contrast C-, L- and P-band behavior in forests.', 'C-band: low penetration, interacts with leaves/needles/twigs, saturates at low biomass (sees canopy only). L-band: leaves/branches. P-band: propagates through canopy to branches, trunk and ground; maintains sensitivity at higher biomass.', [44, 45], 'l12.saturation');
R('L12-R09', 'L12', 'L12-value', 'explain', 'Name the three ways to add value to radar imagery with one lecture example each.', 'Multi-polarisation (most common): CHH/CHV/CVV separating Douglas fir vs Radiata pine; also forest stand age (5.6 cm). Multi-temporal: SRL-2 X-SAR Renwick NZ 8/9/10 Oct 1994; Maastricht flood two-date ERS composite. Multi-wavelength: AIRSAR Mt Tongariro R 68, G 24, B 5.6 cm.', [75, 76, 77, 78, 79], 'l12.multipol');
R('L12-R10', 'L12', 'L12-tir', 'diff', 'Explain why the 3–5 µm and 8–14 µm windows are used for different targets.', '3–5 µm matches very hot targets (fires, ~800 K, λ_max ≈ 3.62 µm; MODIS bands 20–25) and is contaminated by sunlight by day, so it is used at night for Earth studies. 8–14 µm matches ordinary surfaces (~300 K, λ_max ≈ 9.66 µm; Landsat band 6, ASTER 12–13, MODIS 29–32).', [6, 14], 'l12.w35');

// ───────────────────────── FORMULAS ─────────────────────────
F({ id: 'f-sb', lec: 'L12', topic: 'L12-laws', name: 'Stefan–Boltzmann law', expr: 'F_{R} = ε σ T_{k}^{4}   (blackbody: M_{B} = σ T^{4})', vars: [['F_{R}', 'radiant flux emitted by the object'], ['ε', 'emissivity (dimensionless, 0–1)'], ['σ', '5.67 × 10⁻¹² W cm⁻² K⁻⁴ (= 5.67 × 10⁻⁸ W m⁻² K⁻⁴)'], ['T_{k}', 'kinetic temperature in kelvin']], units: 'W cm⁻² (slide 11) or W m⁻² (slide 14)', example: 'Blackbody at 300 K: 5.67×10⁻⁸ × 300⁴ ≈ 459 W m⁻². Doubling T → ×16.', assume: 'T must be absolute (K). Emission scales with T⁴.', p: [10, 13] });
F({ id: 'f-wien', lec: 'L12', topic: 'L12-laws', name: 'Wien’s displacement law', expr: 'λ_{max} = 2898 / T', vars: [['λ_{max}', 'dominant (peak) wavelength in µm'], ['T', 'temperature in K']], units: 'µm', example: '300 K → 9.66 µm; 800 K → 3.62 µm', assume: 'Constant 2898 µm·K.', p: [13, 14] });
F({ id: 'f-emis', lec: 'L12', topic: 'L12-laws', name: 'Emissivity', expr: 'ε = M_{R} / M_{B} = T_{rad}^{4} / T_{kin}^{4}', vars: [['M_{R}', 'exitance of the real material'], ['M_{B}', 'blackbody exitance at the same temperature'], ['T_{rad}', 'radiant temperature'], ['T_{kin}', 'kinetic temperature']], units: 'dimensionless', example: 'ε = 0.9, T_kin = 300 K → T_rad ≈ 292.2 K', assume: 'Same temperature for M_R and M_B.', p: [11, 13] });
F({ id: 'f-trad', lec: 'L12', topic: 'L12-laws', name: 'Radiant from kinetic temperature (derived)', expr: 'T_{rad} = ε^{1/4} · T_{kin}', vars: [['ε', 'emissivity'], ['T_{kin}', 'kinetic temperature (K)']], units: 'K', example: '0.95^{0.25} × 300 = 296.2 K', assume: 'Rearranged from ε = T_rad⁴/T_kin⁴ (derived, not printed on the slide).', p: [13] });
F({ id: 'f-planck', lec: 'L12', topic: 'L12-laws', name: 'Brightness temperature (Planck)', expr: 'L(λ, T_{b}) = 2πhc² / [λ⁵ (e^{hc/λkT_{b}} − 1)] = ε_{λ} · B(λ, T);   T = hc / [kλ · ln(1 − ε_{λ} + ε_{λ} e^{hc/λkT_{b}})]', vars: [['L', 'recorded radiance'], ['T_{b}', 'brightness temperature'], ['T', 'physical (surface) temperature'], ['ε_{λ}', 'spectral emissivity'], ['h, c, k', 'Planck constant, speed of light, Boltzmann constant'], ['λ', 'wavelength']], units: 'K', example: '300 K surface, ε = 0.8 at 10 µm → T_b ≈ 286.8 K (≈ 13 K lower)', assume: 'Atmospheric effects ignored.', p: [12] });
F({ id: 'f-splitwindow', lec: 'L12', topic: 'L12-thermalapps', name: 'MODIS LST split-window (Wan)', expr: 'T_{s} = C + (A_{1} + A_{2}(1−ε)/ε + A_{3}Δε/ε²)(T_{31}+T_{32})/2 + (B_{1} + B_{2}(1−ε)/ε + B_{3}Δε/ε²)(T_{31}−T_{32})/2', vars: [['T_{31}, T_{32}', 'brightness temperatures in MODIS bands 31, 32'], ['ε', '(ε_{31} + ε_{32}) / 2'], ['Δε', 'ε_{31} − ε_{32}'], ['A, B, C', 'coefficients from multidimensional lookup tables (depend on angle)']], units: 'K', example: 'Recognize the structure: mean term (T31+T32)/2 plus difference term (T31−T32)/2.', assume: 'Coefficients depend on viewing angle.', p: [18] });
F({ id: 'f-freq', lec: 'L12', topic: 'L12-mw', name: 'Frequency–wavelength relation', expr: 'ν = c / λ;   ν(GHz) = 30 / λ(cm)', vars: [['ν', 'frequency (Hz = s⁻¹; GHz = 10⁹ Hz)'], ['c', 'speed of light = 3.00 × 10⁸ m s⁻¹'], ['λ', 'wavelength']], units: 'Hz / GHz', example: 'λ = 3 cm → 10 GHz; λ = 23.5 cm → 1.28 GHz', assume: 'The 30/λ trick needs λ in centimetres.', p: [31] });
F({ id: 'f-rangeres', lec: 'L12', topic: 'L12-geom', name: 'Range resolution', expr: 'R_{r} = τ c / (2 cos γ)', vars: [['τ', 'pulse length (s)'], ['c', 'speed of light (3 × 10⁸ m s⁻¹)'], ['γ', 'depression angle']], units: 'm', example: 'τ = 0.1×10⁻⁶ s: γ = 65° → 35.5 m; γ = 40° → 19.58 m', assume: 'Equivalent to τc/(2 sin θ) with look angle θ.', p: [53] });
F({ id: 'f-azres', lec: 'L12', topic: 'L12-geom', name: 'Azimuth resolution (real aperture)', expr: 'R_{a} = S × λ / L', vars: [['S', 'slant range'], ['λ', 'wavelength'], ['L', 'antenna length']], units: 'm', example: 'S = 20 km → 120 m; S = 40 km → 240 m (λ/L = 0.006)', assume: 'Real aperture radar beam.', p: [54] });

// ── Additional items linking every substantive page to practice
C('L12', 'L12-value', 'l12.radarlc', 'Radar land cover classification', ['land cover classification', 'radar classification'], 'Application in which an airborne radar image (24 cm wavelength, Mt Tongariro, November 1996) was classified into 8 classes.', [81]);
I('L12-I89', 'L12', 'L12-tir', 2, 'list', 'Name any TWO things that, per slide 8, thermal IR sensing (“TIRS”) measures.', 'e.g., land and ocean surface temperature; emissivity', ['surface temperature and emissivity'], 'Slide 8: land & ocean surface temperature; atmospheric temperature & humidity; trace gas concentrations; radiation balance; emissivity.', [7], 'l12.tirrs', { kw2: [['surface temperature', 'land', 'ocean'], ['atmospheric temperature', 'humidity'], ['trace gas'], ['radiation balance'], ['emissivity']] });
I('L12-I90', 'L12', 'L12-thermalapps', 2, 'scenario', 'The color-coded map of temperature variations on slide 17 was measured by the thermal band of which Landsat sensor?', 'ETM+', ['etm', 'etm plus', 'enhanced thematic mapper plus', 'landsat 7 etm+', 'landsat 7'], 'Slide 17: “thermal band on the ETM+ sensor.”', [16], 'l12.tirrs');
M('L12-M47', 'L12', 'L12-thermalapps', 2, 'The global MODIS LST examples on slide 20 show…', [
  ['daytime and nighttime land surface temperature for 3 Aug 2001', 'Slide 20 (MODLAND browse page, Z. Wan).'],
  ['active fires in the Bahamas, Florida and Cuba', 'That is slide 23.'],
  ['sea surface temperature only', 'That is slide 22.'],
  ['radar backscatter of lahars', 'That is Part 2 (ERS-1).']], [19], 'l12.modis');
M('L12-M48', 'L12', 'L12-thermalapps', 1, 'Which MODIS product is shown on slide 22 with a color scale of about −2 to 35 °C over the oceans?', [
  ['Ocean (sea) surface temperature', 'Slide 22: “Ocean surface temperature from MODIS.”'],
  ['Land surface emissivity', 'Not the slide’s product.'],
  ['Fire and thermal anomalies', 'That is slide 23.'],
  ['Cloud top altitude', 'A MODIS measurement, but not this map.']], [21], 'l12.modis');
I('L12-I91', 'L12', 'L12-measure', 2, 'process', 'Radar deduces target characteristics by comparing which two signals?', 'The transmitted signal and the scattered signal', ['transmitted and scattered signal', 'transmitted and scattered', 'transmitted pulse and scattered return'], 'Slide 37: compare transmitted with scattered signal and deduce target characteristics.', [36], 'l12.sidelooking', { kw: [['transmit'], ['scatter', 'return']] });
I('L12-I92', 'L12', 'L12-scatter', 2, 'scenario', 'In a tree stand (slide 44), scattering from the top of the canopy is surface scattering, while scattering within the crowns is ______ scattering.', 'Volume', ['volume scattering', 'volumetric'], 'Slide 44: surface scattering from the top of the canopy; volume scattering; surface and volume scattering from the ground.', [43], 'l12.volume');
M('L12-M49', 'L12', 'L12-pol', 2, 'Two X-band HH images of the same mountains show different bright and dark slopes. The most likely reason (slide 49) is that…', [
  ['they were acquired from different look directions', 'Slide 49: variability with look direction.'],
  ['they used different wavelengths', 'Both are X-band.'],
  ['they used different polarizations', 'Both are HH.'],
  ['one is a thermal image', 'Both are radar.']], [48], 'l12.lookvar');
I('L12-I93', 'L12', 'L12-geom', 3, 'scenario', 'On a slant-range image, two fields of equal ground size appear with different lengths. Which one is compressed more: the near-range or the far-range field?', 'The near-range field', ['near range', 'near-range', 'near', 'near range field'], 'Slide 53: field A (near range) appears shorter (a) than field B (b) in slant range.', [52], 'l12.slant');
M('L12-M50', 'L12', 'L12-ph', 2, 'Which pairing of image and date for Mt. Pinatubo matches the slides?', [
  ['RADARSAT radar backscatter: February 1998; SPOT image: December 1991', 'Slides 64–65.'],
  ['RADARSAT: December 1991; SPOT: February 1998', 'Dates swapped.'],
  ['ERS-1: 2010; Landsat 8: 2013', 'Not on the slides.'],
  ['SRTM: 1991; SPOT: 2000', 'SRTM (2000) appears only for the New Zealand DEM.']], [63, 64], 'l12.pinatubo');
I('L12-I94', 'L12', 'L12-ph', 2, 'scenario', 'Which part of Mt. Pinatubo is shown in the RADARSAT backscatter image on slide 66?', 'Western fan', ['west fan', 'western fan of mt pinatubo', 'the western fan'], 'Slide 66: “RADARSAT radar backscatter image of western fan of Mt. Pinatubo.”', [65], 'l12.pinatubo', { kw: [['west'], ['fan']] });
I('L12-I95', 'L12', 'L12-value', 2, 'scenario', 'In the multi-polarisation example (CHH, CHV, CVV) on slide 77, which two tree species are distinguished?', 'Douglas fir and Radiata pine', ['radiata pine and douglas fir', 'douglas fir radiata pine'], 'Slide 77.', [76], 'l12.multipol', { kw: [['douglas'], ['radiata']] });
I('L12-I96', 'L12', 'L12-value', 2, 'scenario', 'SRL-2 X-SAR images of Renwick, Marlborough (8/9/10 Oct 1994) illustrate which way of adding value to radar imagery?', 'Multi-temporal radar', ['multi-temporal', 'multitemporal', 'multitemporal radar'], 'Slide 78.', [77], 'l12.multitemp');
I('L12-I97', 'L12', 'L12-value', 2, 'scenario', 'A 5.6 cm multi-polarisation image distinguishing cleared stand, forest stand and pasture was used for which application (slide 83)?', 'Forest stand age estimation', ['stand age estimation', 'forest age estimation', 'forest stand age'], 'Slide 83.', [82], 'l12.multipol', { kw: [['age']] });
