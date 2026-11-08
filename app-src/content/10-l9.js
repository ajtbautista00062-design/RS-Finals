// LECTURE 9 — Fundamentals of Image Interpretation (42 PDF pages, no printed slide numbers)
lecture({ id: 'L9', short: 'Lecture 9', title: 'Fundamentals of Image Interpretation', file: 'Lecture 9 Fundamentals of Image Interpretation.pdf', pages: 42, slideOffset: null });

PAGES('L9', [
  [1, null, 'GEn 411 Remote Sensing (course title)', 'T', null],
  [2, null, '9 — Fundamentals of Image Interpretation (lecture title)', 'T', null],
  [3, null, 'Aspect 1: overhead perspective', 'S', 'L9-intro'],
  [4, null, 'Aspect 2: wavelengths outside the visible spectrum', 'S', 'L9-intro'],
  [5, null, 'Aspect 3: unfamiliar scales and resolutions (MODIS 250 m … WorldView-4 0.3 m)', 'S', 'L9-intro'],
  [6, null, 'Information extraction in RS: types and examples (table)', 'S', 'L9-intro'],
  [7, null, 'Image interpretation; interpreter’s task; geographical knowledge', 'S', 'L9-intro'],
  [8, null, 'Image interpretation process diagram', 'S', 'L9-intro'],
  [9, null, 'Human vs computer information extraction (table)', 'S', 'L9-human'],
  [10, null, '3 levels of interpretation (pyramid)', 'S', 'L9-levels'],
  [11, null, '3 types of interpretation', 'S', 'L9-levels'],
  [12, null, 'Spatial interpretation and its elements', 'S', 'L9-elements', 'Line “Most important task for spatial interpretation:” is left blank on the slide.'],
  [13, null, 'Primary ordering of image elements (Estes et al., 1983)', 'S', 'L9-elements'],
  [14, null, 'Tone or color', 'S', 'L9-elements'],
  [15, null, 'Shape (Kauai residential area; MSU desire paths)', 'S', 'L9-elements'],
  [16, null, 'Size (numbered buildings)', 'S', 'L9-elements'],
  [17, null, 'Pattern (Pampanga rice fields; Laguna de Bay fish pens)', 'S', 'L9-elements'],
  [18, null, 'Shadow: profile view vs hindrance', 'S', 'L9-elements'],
  [19, null, 'Shadow examples: transmission towers; high-rise vs low-rise', 'S', 'L9-elements'],
  [20, null, 'Texture: forest, pasture, cropland', 'S', 'L9-elements'],
  [21, null, 'Site: sea port', 'S', 'L9-elements'],
  [22, null, 'Association: port cranes; aircraft', 'S', 'L9-elements'],
  [23, null, 'Image interpretation key; selective and elimination keys', 'S', 'L9-keys'],
  [24, null, 'Sample image interpretation key (tree species table)', 'S', 'L9-keys'],
  [25, null, 'Spectral interpretation: single-band images', 'S', 'L9-spectral'],
  [26, null, 'Spectral interpretation: composites, scattergram, classification', 'S', 'L9-spectral'],
  [27, null, 'Information extracted from multispectral image data', 'S', 'L9-spectral'],
  [28, null, 'Inference of physical and chemical properties (table)', 'S', 'L9-spectral'],
  [29, null, 'Landsat TM bands (table)', 'S', 'L9-bands'],
  [30, null, 'Landsat 8 OLI and TIRS bands (table)', 'S', 'L9-bands'],
  [31, null, 'Visualization of multispectral data: color modes', 'S', 'L9-vis'],
  [32, null, 'RGB normal (true) color composition (table)', 'S', 'L9-vis'],
  [33, null, 'NIR false color composition (tables)', 'S', 'L9-vis'],
  [34, null, 'Spectral interpretation key: built-up areas', 'S', 'L9-vis'],
  [35, null, 'Temporal interpretation', 'S', 'L9-temporal'],
  [36, null, 'Image acquisition date/time considerations', 'S', 'L9-temporal'],
  [37, null, 'Other false color composition (table)', 'S', 'L9-fcc'],
  [38, null, 'Common Landsat band composites (TM/ETM+ vs OLI)', 'S', 'L9-fcc'],
  [39, null, 'USGS EROS preferred band combinations; band-ratio composites', 'S', 'L9-fcc'],
  [40, null, 'Image interpretation: set sequence (8 steps)', 'S', 'L9-workflow'],
  [41, null, 'Summary', 'S', 'L9-workflow'],
  [42, null, 'Thank You! (closing)', 'X', null]
]);

LIMIT('L9', [12], 'The slide line “Most important task for spatial interpretation:” has no answer on the slide. The reviewer does not invent one.');
LIMIT('L9', [14, 15, 16, 17, 18, 19, 20, 21, 22, 34], 'Example photographs carry only short captions (and none on some slides). They are described by what the slide labels, not by unlabeled details.');

NOTE('n9-quality', 'L9', 'L9-intro', [6, 9], 'The table lists “Extraction of physical quality” (temperature, atmospheric component, elevation).', 'Slide 9 calls the same thing “extraction of physical quantities.” Temperature and elevation are physical quantities, so read “quality” as “quantity.” Either wording should be recognized.');
NOTE('n9-reprod', 'L9', 'L9-human', [9], 'Merit of computer processing: “Reproductivity.”', 'The usual term is reproducibility (the same input gives the same result every time). Both words refer to the same merit.');
NOTE('n9-lard', 'L9', 'L9-keys', [24], 'Cypress texture: “Lard and fine.”', 'Almost certainly a typo for “Hard and fine,” to match the cedar row (“Hard and coarse”). Learn the cypress texture as hard and fine.');
NOTE('n9-height', 'L9', 'L9-elements', [12, 13], 'Slide 12 lists 8 elements (no height). The Estes et al. (1983) figure on slide 13 also includes HEIGHT at the tertiary level.', 'Exam lists of “elements of image interpretation” from slide 12 have 8 items. Height belongs only to the Estes ordering figure (tertiary, with pattern and shadow).');
NOTE('n9-tirs100', 'L9', 'L9-bands', [30], 'Landsat 8 TIRS bands 10 and 11: “100 meter resolution.”', 'TIRS collects data at 100 m. Standard Landsat products resample it to 30 m pixels. Treat 100 m as the sensor’s native resolution.');
NOTE('n9-wv4', 'L9', 'L9-intro', [5], 'Examples of resolution: Aqua (MODIS) 250 m, Landsat-8 30 m, Sentinel-2 10 m, PlanetScope (Dove) 3 m, Pleiades 0.5 m, WorldView-4 0.3 m.', 'These are teaching examples, not current mission facts. WorldView-4 stopped operating in 2019, and mission status changes over time. Learn the resolutions in this order of increasing detail.');
NOTE('n9-tmnumbers', 'L9', 'L9-fcc', [37, 38, 39], 'Band combinations such as 4/3/2, 5/4/3 and B5/B4/B1 are written in Landsat TM/ETM+ band numbers.', 'Landsat 8 OLI numbers its bands differently (OLI band 5 is NIR, while TM band 4 is NIR). Slide 38 gives the translation: TM 5,4,3 = OLI 6,5,4; TM 7,5,3 = OLI 7,6,4; TM 7,4,2 = OLI 7,5,3. Always check which sensor a band number refers to.');
NOTE('n9-20combos', 'L9', 'L9-fcc', [37], 'Landsat TM (non-thermal bands): “20 different 3-band combinations.”', 'TM has 6 non-thermal bands (1–5 and 7). Choosing 3 of 6 without regard to order gives C(6,3) = 20 sets, which explains the number.');

// ───────────────────────── TOPICS ─────────────────────────
topic({
  id: 'L9-intro', lec: 'L9', title: 'Image interpretation: what is different and what we extract', p: [3, 4, 5, 6, 7, 8],
  summary: 'Aerial and satellite images differ from everyday images in three ways. Image interpretation turns them into information through a process that depends on the interpreter’s skills and knowledge.',
  keys: ['l9.overhead', 'l9.nonvisible', 'l9.scales', 'l9.interp', 'l9.task', 'l9.geoknow', 'l9.changedet', 'l9.physq', 'l9.indices', 'l9.specfeat'],
  blocks: [
    ['h', 'Three ways RS interpretation departs from everyday interpretation'],
    ['ol', ['**Overhead perspective**: features are portrayed from above (an aerial view of a park instead of people seen from the side) (p. 3).',
      '**Frequent use of wavelengths outside the visible spectrum**, e.g., a near-infrared false-color image in which vegetation looks red (p. 4).',
      '**Unfamiliar scales and resolutions**: the same scene at Aqua MODIS 250 m, Landsat-8 30 m, Sentinel-2 10 m, PlanetScope (Dove) 3 m, Pleiades 0.5 m and WorldView-4 0.3 m (p. 5).']],
    ['note', 'n9-wv4'],
    ['h', 'Information extraction in RS (p. 6)'],
    ['table', ['Type', 'Example'], [
      ['Classification', 'Land cover, vegetation'],
      ['Change detection', 'Land cover change'],
      ['Extraction of physical quality (quantity)', 'Temperature, atmospheric component, elevation'],
      ['Extraction of indices', 'Vegetation index, turbidity index'],
      ['Identification of specific features', 'Disasters (forest fire, flood), extraction of lineament, detection of archaeological features']], 'Five types of information extraction, from slide 6.'],
    ['note', 'n9-quality'],
    ['h', 'Definitions (p. 7)'],
    ['ul', ['**Image interpretation**: the process of identifying objects or conditions in images and determining their meaning or significance.',
      '**The interpreter’s task**: use scientific tools and methodology to arrive at objective findings.',
      '**Geographical knowledge** is needed to relate visible image characteristics to real-world geographic features, even features that are not physically visible.']],
    ['h', 'The interpretation process (p. 8)'],
    ['fig', 'fig-process', 'The image and the interpreter’s skills and knowledge level feed the interpretation process. It produces INFORMATION (quality and quantity). Learning and perceptions form a feedback loop that improves the interpreter.'],
  ],
  confused: [['Image interpretation (definition)', 'Image interpretation (highest level)', 'Slide 7 defines interpretation as a process: identify objects or conditions and determine their meaning. Slide 10 uses the same name for the deepest of three levels: inductive and deductive analysis together with other data.'],
    ['Change detection', 'Classification', 'Classification labels land cover at one time. Change detection compares dates (land cover change).']],
  aid: 'Learning aid, not from the slides: “O-N-S” = Overhead, Non-visible, Scale. These are the three ways satellite images feel unfamiliar.'
});

topic({
  id: 'L9-human', lec: 'L9', title: 'Human vs computer information extraction', p: [9],
  summary: 'Human image interpretation is strong at spatial information but slow and varies between people. Computer image processing is fast and reproducible but weak at spatial information.',
  keys: ['l9.human', 'l9.computer'],
  blocks: [
    ['table', ['Method', 'Merit', 'Demerit'], [
      ['Human (image interpretation)', 'Interpreter’s knowledge is available; excellent in spatial information extraction', 'Time consuming; individual difference'],
      ['Computer (image processing)', 'Short processing time; reproductivity; extraction of physical quantities or indices is possible', 'Human knowledge is unavailable; spatial information extraction is poor']], 'Comparison table from slide 9.'],
    ['note', 'n9-reprod'],
    ['p', 'The merits and demerits mirror each other. Spatial information extraction is a strength for humans and a weakness for computers. Human knowledge is available in one and unavailable in the other.']
  ],
  confused: [['Individual difference', 'Reproductivity', 'Individual difference is a human demerit: two interpreters may disagree. Reproductivity is a computer merit: the same input gives the same output.']],
  aid: 'Learning aid: humans “see shapes,” computers “count numbers.” Shapes are spatial (a human strength). Numbers are indices and physical quantities (a computer strength).'
});

topic({
  id: 'L9-levels', lec: 'L9', title: 'Levels and types of interpretation', p: [10, 11, 12, 25, 35, 41],
  summary: 'Interpretation has three levels of increasing depth (reading → analysis → interpretation) and three types (spatial, spectral, temporal).',
  keys: ['l9.reading', 'l9.analysis', 'l9.levelinterp', 'l9.spatial', 'l9.spectralint', 'l9.temporal'],
  blocks: [
    ['fig', 'fig-levels', 'The three levels of interpretation as a pyramid: image reading at the top, image analysis in the middle, image interpretation at the base (slide 10).'],
    ['table', ['Level', 'What it is (slide 10)'], [
      ['Image reading', 'A relatively superficial visual examination of an image, undertaken to quickly identify the main features and determine their distribution and likely relationship'],
      ['Image analysis', 'Image reading with longer and more detailed visual inspection of the imagery, to understand the more general and obvious features'],
      ['Image interpretation', 'Inductive and deductive analysis of imagery, in conjunction with other data, to gain as full an understanding as possible of the features, their functions and inter-relationships']], null],
    ['h', 'Three types of interpretation (p. 11, 41)'],
    ['ul', ['**Spatial**: uses the spatial characteristics of objects (shape, size, pattern, tone, texture, association, site).',
      '**Spectral**: based on spectral signatures (reflectance of objects in each band).',
      '**Temporal**: considers seasonal and time-of-day effects, using multitemporal images to identify change and movement.']]
  ],
  confused: [['Image reading', 'Image analysis', 'Reading is quick and superficial. Analysis is longer and more detailed, but still limited to the general and obvious features.'],
    ['Image analysis', 'Image interpretation (level)', 'Only interpretation uses OTHER DATA and inductive/deductive reasoning to understand functions and inter-relationships.']],
  aid: 'Learning aid: R-A-I goes from top to bottom of the pyramid (Reading, Analysis, Interpretation). The deeper you go, the wider the base of knowledge needed.'
});

topic({
  id: 'L9-elements', lec: 'L9', title: 'Elements of spatial interpretation', p: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  summary: 'Spatial interpretation identifies features from their spatial characteristics. Slide 12 lists eight elements: shape, size, pattern, shadow, tone/hue, texture, association and site.',
  keys: ['l9.tone', 'l9.shape', 'l9.size', 'l9.pattern', 'l9.shadow', 'l9.texture', 'l9.site', 'l9.association'],
  blocks: [
    ['table', ['Element', 'Slide definition', 'Lecture example'], [
      ['Tone or color (hue)', 'Relative brightness or color of objects. Without tonal differences, shapes, patterns, textures and shadows could not be determined', 'Dark roofs vs bright roofs and trees (p. 14)'],
      ['Shape', 'General form, configuration or outline of individual objects', 'Circular or rectilinear shapes indicate human influence; desire paths at Michigan State University; residential area in Kauai, Hawaii (p. 15)'],
      ['Size', 'Size of buildings tends to indicate their nature and usage', 'Numbered buildings of different sizes (p. 16)'],
      ['Pattern', 'Spatial arrangement of objects; repetition of certain general forms or relationships aids recognition', 'Rice fields in Pampanga; fish pens in the upper West Bay of Laguna de Bay (Landsat 8 OLI) (p. 17)'],
      ['Shadow', 'Gives an impression of the profile view of objects, but can hinder interpretation of objects within the shadows', 'Power line transmission towers; high-rise building (long shadow) vs low-rise building (short shadow) (p. 18–19)'],
      ['Texture', 'Frequency of tonal changes; varies with resolution and is influenced by shadow', 'Forest (dark and coarse), pasture (light and smooth), farmland (light and smooth with regular road and drainage network) (p. 20)'],
      ['Site', 'Topographic or geographic location', 'Sea port: regular shoreline, large concrete loading zones, extensive transportation network (p. 21)'],
      ['Association', 'Occurrence of certain features in relation to others', 'Port cranes with container yards; aircraft at an airfield (p. 22)']], 'Eight elements of spatial interpretation (slides 12–22).'],
    ['note', 'n9-height'],
    ['h', 'Primary ordering of image elements (Estes et al., 1983; p. 13)'],
    ['fig', 'fig-estes', 'Image elements ordered by increasing complexity. Primary (basic element): tone/color. Secondary (spatial arrangement of tone): size, shape, texture. Tertiary: pattern, height, shadow. Higher: site, association.'],
    ['p', 'Tone is the foundation. Every other element is built from spatial arrangements of tone, which is why the tone slide says shapes, patterns, textures and shadows could not be seen without tonal differences.']
  ],
  confused: [['Pattern', 'Texture', 'Pattern is the arrangement of distinct OBJECTS (rows of fish pens, a road grid). Texture is the frequency of TONAL change across an area (coarse forest vs smooth pasture).'],
    ['Site', 'Association', 'Site is WHERE a feature is (its topographic or geographic location, e.g., a shoreline). Association is WHAT IT OCCURS WITH (cranes and containers with a port).'],
    ['Shape', 'Size', 'Shape is the outline or form (circular, rectilinear). Size is how big it is (large buildings suggest a particular use).'],
    ['Tone', 'Texture', 'Tone is the brightness or color at a place. Texture is how often that tone changes.']],
  aid: 'Learning aid: “Tall Shadows Sit Patiently To Show Size And Shape” lists Tone, Shadow, Site, Pattern, Texture, Size, Association, Shape. Check the count: 8 elements.'
});

topic({
  id: 'L9-keys', lec: 'L9', title: 'Image interpretation keys', p: [23, 24],
  summary: 'An interpretation key is a characteristic, or combination of characteristics, that guides correct identification. Selective keys use many examples. Elimination keys go from the general to the specific.',
  keys: ['l9.key', 'l9.selective', 'l9.elimination'],
  blocks: [
    ['ul', ['**Image interpretation key**: a characteristic or a combination of characteristics that enables an interpreter to identify an object on an image. It provides guidance about the correct identification of features or conditions.',
      '**Selective key**: contains numerous photographic examples with supporting text.',
      '**Elimination key**: arranged so that interpretation proceeds step by step from the general to the specific, leading to the elimination of all features or conditions except the one being identified.']],
    ['h', 'Sample key: tree species (p. 24)'],
    ['table', ['Species', 'Crown shape', 'Edge of crown', 'Tone', 'Pattern', 'Texture'], [
      ['Cedar', 'Conical with sharp spear', 'Circular with sharp spear', 'Dark', 'Spotted grain', 'Hard and coarse'],
      ['Cypress', 'Conical with round crown', 'Circular but not sharp', 'Dark but lighter than cedar', 'Spotted', 'Hard and fine (slide: “Lard and fine”)'],
      ['Pine', 'Cylindrical with shapeless crown', 'Circular but unclear', 'Light and unclear', 'Irregularly spotted', 'Soft but coarse'],
      ['Larch', 'Conical with unclear crown', 'Circular with unclear edge', 'Lighter than cypress', 'Spotted', 'Soft and fine'],
      ['Fir/spruce', 'Conical with wider crown', 'Circular with zigzag edge', 'Dark and unclear', 'Irregular', 'Coarse'],
      ['Deciduous', 'Irregular shapes', 'Unclear', 'Lighter', 'Irregular', 'Coarse']], 'Sample image interpretation key from slide 24.'],
    ['note', 'n9-lard']
  ],
  confused: [['Selective key', 'Elimination key', 'Selective = pick the matching example from many illustrated examples. Elimination = a step-by-step path from general to specific that rules out all other options.']],
  aid: 'Learning aid: SElective = SEe many Examples; ELIMination = ELIMinate step by step.'
});

topic({
  id: 'L9-spectral', lec: 'L9', title: 'Spectral interpretation and multispectral information', p: [25, 26, 27, 28],
  summary: 'Spectral interpretation uses how objects reflect or emit in each band. Single bands, color composites, scattergrams and classification all support it.',
  keys: ['l9.spectralint', 'l9.scattergram', 'l9.thematic', 'l9.recon'],
  blocks: [
    ['ul', ['A **single-band image** can be interpreted like an aerial photograph, but stay aware of the band’s spectral wavelength and the spectral reflectance of objects in that band (p. 25).',
      '**Color composites** assist interpretation. Multispectral band graphs (**scattergrams**) and statistics, and **multispectral classification**, are also used (p. 26).']],
    ['h', 'Information extracted from multispectral image data (p. 27)'],
    ['ul', ['Mainly **thematic information** based on the spectral properties of individual pixels.',
      'Multispectral data create a **color composite** as the backdrop for visualization.',
      'Conduct an **inventory (reconnaissance)**, and measure the **condition (status)** of specific areas, e.g., crop growth, extent of soil erosion, water quality status, and forested land with insect infestation.']],
    ['h', 'Inference of physical and chemical properties (p. 28)'],
    ['table', ['Spectral region', 'Property inferred', 'How'], [
      ['VNIR (visible and near-infrared)', 'Chemical properties', 'Sensors record reflected sunlight to acquire information about the chemical composition of observed objects'],
      ['TIR / microwave', 'Thermal properties', 'Records the emitted radiation from the earth surface or atmosphere to acquire thermal properties as well as the composition of the object'],
      ['Microwave / radio', 'Physical and electrical properties', 'Sensors use active radar or laser beams to collect information about the object’s physical structure and electrical properties']], null]
  ],
  confused: [['Reconnaissance (inventory)', 'Status (condition)', 'An inventory records WHAT is there. A status measurement records its CONDITION (crop growth, erosion extent, water quality, insect infestation).']],
  aid: 'Learning aid: Reflected → Chemistry, Emitted → Heat, Active radar/laser → Structure & electricity.'
});

topic({
  id: 'L9-bands', lec: 'L9', title: 'Interpreting individual bands: Landsat TM and Landsat 8', p: [29, 30],
  summary: 'Each band was designed for particular targets: blue for water penetration, green for the vegetation reflectance peak, red for chlorophyll absorption, NIR for biomass, SWIR for moisture, and thermal IR for temperature.',
  keys: ['l9.tm1', 'l9.tm2', 'l9.tm3', 'l9.tm4', 'l9.tm5', 'l9.tm6', 'l9.tm7', 'l9.l8b1', 'l9.l8b8', 'l9.l8b9', 'l9.l8b10'],
  blocks: [
    ['table', ['Band', 'Wavelength (µm)', 'Application (slide 29)'], [
      ['TM 1', '0.45–0.52 (blue)', 'Water body penetration (bathymetry/coastal mapping); soil/vegetation discrimination; cultural/urban features'],
      ['TM 2', '0.52–0.60 (green)', 'Green reflectance peak of vegetation (green vegetation mapping, vigor assessment); cultural/urban features'],
      ['TM 3', '0.63–0.69 (red)', 'Chlorophyll absorption region (plant species differentiation); cultural/urban features'],
      ['TM 4', '0.76–0.90 (near IR)', 'Plant/vegetation types, health, biomass content; water body delineation; soil moisture discrimination'],
      ['TM 5', '1.55–1.75 (mid IR)', 'Moisture in soil and vegetation; differentiate snow from clouds'],
      ['TM 6', '10.4–12.5 (thermal IR)', 'Vegetation stress and soil moisture related to thermal radiation; thermal mapping (urban, water)'],
      ['TM 7', '2.08–2.35 (mid IR)', 'Discrimination of mineral and rock types; sensitive to vegetation moisture content']], 'Landsat TM bands. Note that band 7 (2.08–2.35 µm) is numbered after the thermal band 6.'],
    ['table', ['Landsat 8 band', 'Wavelength (µm)', 'Useful for mapping (slide 30)'], [
      ['Band 1 – coastal aerosol', '0.43–0.45', 'Coastal and aerosol studies'],
      ['Band 2 – blue', '0.45–0.51', 'Bathymetric mapping; distinguishing soil from vegetation and deciduous from coniferous vegetation'],
      ['Band 3 – green', '0.53–0.59', 'Emphasizes peak vegetation, useful for assessing plant vigor'],
      ['Band 4 – red', '0.64–0.67', 'Discriminates vegetation slopes'],
      ['Band 5 – near infrared (NIR)', '0.85–0.88', 'Emphasizes biomass content and shorelines'],
      ['Band 6 – SWIR 1', '1.57–1.65', 'Discriminates moisture content of soil and vegetation; penetrates thin clouds'],
      ['Band 7 – SWIR 2', '2.11–2.29', 'Improved moisture content of soil and vegetation; penetrates thin clouds'],
      ['Band 8 – panchromatic', '0.50–0.68', '15 m resolution, sharper image definition'],
      ['Band 9 – cirrus', '1.36–1.38', 'Improved detection of cirrus cloud contamination'],
      ['Band 10 – TIRS 1', '10.60–11.19', '100 m resolution, thermal mapping and estimated soil moisture'],
      ['Band 11 – TIRS 2', '11.50–12.51', '100 m resolution, improved thermal mapping and estimated soil moisture']], 'OLI = Operational Land Imager (bands 1–9); TIRS = Thermal Infrared Sensor (bands 10–11). The expansions are standard, not written on the slide.'],
    ['note', 'n9-tirs100']
  ],
  confused: [['TM 4 (NIR)', 'Landsat 8 band 5 (NIR)', 'Same spectral role (biomass), different band numbers. Landsat 8 added a coastal aerosol band 1, which shifted the blue–NIR numbering up by one.'],
    ['TM 5 / L8 band 6', 'TM 7 / L8 band 7', 'Both are mid-IR/SWIR moisture bands. TM 5 also separates snow from clouds. TM 7 discriminates minerals and rock types.']],
  aid: 'Learning aid for TM 1–4: “Blue dives, Green glows, Red absorbs, NIR grows.” Blue penetrates water, green is the reflectance peak, red is chlorophyll absorption, NIR tracks biomass.'
});

topic({
  id: 'L9-vis', lec: 'L9', title: 'Visualizing multispectral data: true color and NIR false color', p: [31, 32, 33, 34],
  summary: 'At most three bands can be displayed at once, through the red, green and blue layers. True color puts B, G, R bands in their natural colors. NIR false color puts NIR → red, red → green, green → blue.',
  keys: ['l9.grayscale', 'l9.pseudocolor', 'l9.truecolor', 'l9.fcc', 'l9.nirfcc', 'l9.rgb', 'l9.hsi', 'l9.builtupkey'],
  blocks: [
    ['ul', ['Color modes: black-white, gray scale, pseudo color, true color, false color (p. 31).',
      '**Single band**: black-white, gray scale, pseudo color.',
      '**Multispectral bands**: true (normal) color and false color, based on the **RGB** or **HSI** color model.',
      'The **maximum number of bands that can be displayed simultaneously is 3**.',
      'A **trial and error** approach is often needed to get the right contrast and highlight the right features.']],
    ['fig', 'fig-composites', 'How bands are assigned to display colors. True color: blue→B, green→G, red→R. NIR false color: NIR→R, red→G, green→B.'],
    ['table', ['Satellite images', 'True color composite (RGB)', 'IR false color composite (RGB)'], [
      ['Landsat 8 (OLI-1) and 9 (OLI-2)', 'B4, B3, B2', 'B5, B4, B3'],
      ['Landsat 4–5 (TM) and 7 (ETM+)', 'B3, B2, B1', 'B4, B3, B2'],
      ['Landsat MSS (no blue band)*', 'B2, (B1*3+B2)/4, B1', 'B4, B2, B1 or B3, B2, B1'],
      ['SPOT XS (no blue band)*', 'B2, (B1*3+B2)/4, B1', 'B3, B2, B1'],
      ['Sentinel-2', 'B4, B3, B2', 'B8, B4, B3']], '*Simulated true color, because these sensors have no blue band (slides 32–33).'],
    ['h', 'What features look like in a NIR false color composite (p. 33)'],
    ['table', ['Feature', 'Color'], [
      ['Clear water', 'Black'], ['Silt-laden water', 'Light or dark blue'], ['Deciduous forest', 'Dark red'],
      ['Coniferous forest', 'Brownish red'], ['Grassland', 'Pinkish red'], ['Red soils and rocks', 'Yellow or green'],
      ['Sand', 'White or yellow'], ['Cities', 'Bluish gray'], ['Snow and clouds', 'White'], ['Lava and asphalt', 'Black']], null],
    ['h', 'Spectral interpretation key: built-up areas (p. 34)'],
    ['ul', ['Built-up areas are mainly buildings, mixed with a small proportion of vegetation and other cover types.',
      'Their spectral characteristic is quite unique: often “darkened” concrete signals related to the **shadow of buildings**.',
      'The **pattern of the road network** is also a helpful key.']]
  ],
  confused: [['Pseudocolor', 'False color', 'Pseudocolor colors a SINGLE band (value ranges shown as colors). False color assigns THREE different bands to R, G and B in non-natural order.'],
    ['Clear water', 'Silt-laden water', 'Both are dark in NIR. In NIR false color, clear water is black while silt-laden water is light or dark blue (sediment reflects green and red).'],
    ['True color', 'NIR false color', 'True color: R-G-B bands → R-G-B colors. NIR FCC: shift everything “down” one band, so NIR shows as red and healthy vegetation appears red.']],
  aid: 'Learning aid: in NIR false color, “red means green.” Bright red = healthy, leafy vegetation.'
});

topic({
  id: 'L9-temporal', lec: 'L9', title: 'Temporal interpretation and acquisition date/time', p: [35, 36],
  summary: 'Temporal interpretation adds time to spatial and spectral interpretation. The acquisition date and time change shadows, crop appearance and therefore the spectral keys.',
  keys: ['l9.temporal', 'l9.acqtime'],
  blocks: [
    ['ul', ['Uses **multitemporal images** to identify change and movement (p. 35).',
      'It is **based on spatial and spectral interpretation** and adds the temporal dimension.',
      'Image acquisition date/time largely influences interpretation. It affects spectral characteristics that change with **season** or **time of day** (p. 36):',
      '• shadow effects  • seasonal change of crops  • may show very different spectral interpretation keys']]
  ],
  confused: [['Temporal interpretation', 'Change detection', 'Change detection (slide 6) is an information-extraction TYPE (e.g., land cover change). Temporal interpretation is the interpretation approach that uses multitemporal images to find such change and movement.']],
  aid: 'Learning aid: the same field can look different in March and in October. Always check the acquisition date before trusting a spectral key.'
});

topic({
  id: 'L9-fcc', lec: 'L9', title: 'Other false color composites and band ratios', p: [37, 38, 39],
  summary: 'Changing the bands, or their order, gives many more false color composites. Interpreters prefer particular combinations for water sediment, urban areas, vegetation and rocks. Ratio images can also be composited.',
  keys: ['l9.rayleigh', 'l9.ratio', 'l9.eros'],
  blocks: [
    ['table', ['Satellite images', 'Other false color composites (RGB)'], [
      ['Landsat TM (non-thermal bands)', '20 different 3-band combinations; most common 5/4/3, 7/4/3, 7/5/3, 7/5/4. B1 or B2 can replace B3 but give a fuzzier image due to Rayleigh scattering'],
      ['Landsat MSS (no blue band)*', 'Most common: 4/2/1'],
      ['Sentinel-2', 'B12/B8A/B4; agriculture: B11/B8/B2; geology: B12/B11/B2']], 'Slide 37.'],
    ['note', 'n9-20combos'],
    ['table', ['Landsat 4–5 (TM), 7 (ETM+)', 'Landsat 8 (OLI) equivalent'], [['5, 4, 3', '6, 5, 4'], ['7, 5, 3', '7, 6, 4'], ['7, 4, 2', '7, 5, 3']], 'Common Landsat band composites (slide 38).'],
    ['table', ['Application', 'Suggested band combinations (TM numbering)'], [
      ['Mapping water sediment patterns', 'B3/B2/B1'],
      ['Mapping urban features and vegetation types', 'B4/B3/B2; B7/B4/B3; B5/B4/B3'],
      ['Vegetation discrimination', 'Include data from one mid-IR band (B5 or B7): a combination of B5 or B7, NIR (B4) and any one visible band (B1, B2, B3)'],
      ['Rock discrimination', 'B5/B4/B1']], 'USGS EROS Data Center study of interpreter preferences (slide 39).'],
    ['note', 'n9-tmnumbers'],
    ['p', 'You can also build a false color composite from **band ratio** images such as B/R, G/R and NIR/R (p. 39).']
  ],
  confused: [['TM 4/3/2', 'OLI 5/4/3', 'Both are the standard NIR false color composite, written in each sensor’s own band numbers.']],
  aid: 'Learning aid: to convert TM → OLI, add 1 to bands 1–5. Band 7 keeps its number.'
});

topic({
  id: 'L9-workflow', lec: 'L9', title: 'Interpretation workflow, field checking and summary', p: [40, 41],
  summary: 'The interpretation set sequence has eight steps, from understanding the goals to assessing accuracy. Field inspection resolves conflicts before the final accuracy assessment.',
  keys: ['l9.fieldinsp', 'l9.assessacc'],
  blocks: [
    ['steps', ['Understand the goals of the interpretation task', 'Describe characteristics of the area and processes to be interpreted', 'Validate the generalized understanding of the area and problem', 'Plan the information sources needed', 'Acquire the image data and facilities required', 'Conduct the interpretation', 'Field inspection to resolve conflicts or confusion → revise analyses', 'Assess accuracy']],
    ['h', 'Summary (p. 41)'],
    ['ul', ['Image interpretation identifies ground objects and conditions from remotely sensed data.',
      'It uses spatial, spectral and temporal identifications.',
      '**Spatial**: shape, size, pattern, tones, texture, association, site. **Spectral**: spectral signatures. **Temporal**: seasonal and time-of-day effects.']]
  ],
  confused: [['Field inspection (step 7)', 'Accuracy assessment (step 8)', 'Field inspection RESOLVES conflicts and confusion, then the analyses are revised. Accuracy assessment comes last and MEASURES how correct the result is (Lecture 11).']],
  aid: 'Learning aid: “Good Detectives Validate Plans, Acquire, Conduct, Field-check, Assess” gives Goals, Describe, Validate, Plan, Acquire, Conduct, Field inspection, Assess.'
});

// ───────────────────────── CONCEPTS ─────────────────────────
C('L9', 'L9-intro', 'l9.overhead', 'Overhead perspective', ['overhead view', 'birds eye view', 'bird’s-eye view', 'aerial perspective', 'portrayal of features from an overhead perspective'], 'First of three aspects in which aerial and satellite image interpretation departs from everyday interpretation: features are portrayed as seen from above.', [3]);
C('L9', 'L9-intro', 'l9.nonvisible', 'Wavelengths outside the visible spectrum', ['nonvisible wavelengths', 'non-visible wavelengths', 'invisible wavelengths', 'wavelengths beyond the visible spectrum', 'frequent use of wavelengths outside the visible spectrum'], 'Second aspect that makes RS interpretation unlike everyday viewing: frequent use of energy the eye cannot see, such as near-infrared.', [4]);
C('L9', 'L9-intro', 'l9.scales', 'Unfamiliar scales and resolutions', ['unfamiliar scale and resolution', 'scales and resolutions', 'scale and resolution', 'representation at unfamiliar scales and resolutions'], 'Third aspect of RS interpretation: the earth’s surface is represented at sizes and levels of detail we do not normally see, e.g., 250 m MODIS vs 0.3 m WorldView-4 pixels.', [5]);
C('L9', 'L9-intro', 'l9.interp', 'Image interpretation', ['interpretation', 'image interpretation process'], 'Process of identifying objects or conditions in images and determining their meaning or significance.', [7, 8, 41]);
C('L9', 'L9-intro', 'l9.task', 'Interpreter’s task', ['interpreters task', 'the interpreters task', 'task of the interpreter'], 'To use scientific tools and methodology to arrive at objective findings.', [7]);
C('L9', 'L9-intro', 'l9.geoknow', 'Geographical knowledge', ['geographic knowledge', 'geographical knowledge of the area'], 'Knowledge needed to relate the visible characteristics on an image to real-world features, even features that are not physically visible.', [7]);
C('L9', 'L9-intro', 'l9.changedet', 'Change detection', ['land cover change detection'], 'Type of information extraction in RS whose example output is land cover change.', [6]);
C('L9', 'L9-intro', 'l9.physq', 'Extraction of physical quantities', ['extraction of physical quantity', 'extraction of physical quality', 'physical quantity extraction', 'extraction of physical quantities or indices'], 'Type of information extraction whose examples are temperature, atmospheric components and elevation.', [6, 9]);
C('L9', 'L9-intro', 'l9.indices', 'Extraction of indices', ['index extraction', 'extraction of index', 'indices'], 'Type of information extraction exemplified by the vegetation index and the turbidity index.', [6]);
C('L9', 'L9-intro', 'l9.specfeat', 'Identification of specific features', ['specific feature identification', 'identification of specific feature'], 'Type of information extraction covering identification of disasters (forest fire, flood), extraction of lineaments and detection of archaeological features.', [6]);
C('L9', 'L9-human', 'l9.human', 'Human image interpretation', ['human', 'image interpretation', 'human interpretation', 'visual interpretation', 'visual image interpretation', 'human information extraction', 'manual interpretation'], 'Information-extraction method whose merits are the interpreter’s knowledge and excellent spatial information extraction, but which is time consuming and has individual differences.', [9]);
C('L9', 'L9-human', 'l9.computer', 'Computer image processing', ['image processing', 'computer', 'digital image processing', 'computer processing', 'computer information extraction'], 'Information-extraction method with short processing time, reproducibility and the ability to extract physical quantities or indices, but with no human knowledge and poor spatial information extraction.', [9]);
C('L9', 'L9-levels', 'l9.reading', 'Image reading', ['reading'], 'Level of interpretation: a relatively superficial visual examination undertaken to quickly identify the main features and determine their distribution and likely relationship.', [10]);
C('L9', 'L9-levels', 'l9.analysis', 'Image analysis', ['analysis'], 'Level of interpretation: a longer and more detailed visual inspection to understand the more general and obvious features in the imagery.', [10]);
C('L9', 'L9-levels', 'l9.levelinterp', 'Image interpretation (highest level)', ['image interpretation', 'interpretation'], 'Deepest of the three levels: inductive and deductive analysis of imagery, in conjunction with other data, to understand features, their functions and inter-relationships as fully as possible.', [10]);
C('L9', 'L9-levels', 'l9.spatial', 'Spatial interpretation', ['spatial', 'spatial identification'], 'Type of interpretation that identifies geographical features using the spatial characteristics of objects shown on images.', [11, 12, 41]);
C('L9', 'L9-levels', 'l9.spectralint', 'Spectral interpretation', ['spectral', 'spectral identification'], 'Type of interpretation based on spectral signatures: how objects reflect in each band, using single bands, color composites, scattergrams and classification.', [11, 25, 26, 28, 41]);
C('L9', 'L9-levels', 'l9.temporal', 'Temporal interpretation', ['temporal', 'temporal identification', 'multitemporal interpretation'], 'Type of interpretation that uses multitemporal images to identify change and movement, adding a time dimension to spatial and spectral interpretation.', [11, 35, 41]);
C('L9', 'L9-elements', 'l9.tone', 'Tone (or color)', ['tone', 'color', 'colour', 'hue', 'tone or color', 'tone/color', 'tone or hue', 'tone color'], 'Relative brightness or color of objects on images. Without differences in it, shapes, patterns, textures and shadows could not be determined.', [12, 13, 14]);
C('L9', 'L9-elements', 'l9.shape', 'Shape', [], 'General form, configuration or outline of individual objects; circular or rectilinear outlines indicate human influence.', [12, 15]);
C('L9', 'L9-elements', 'l9.size', 'Size', [], 'Element whose value, for buildings, tends to indicate their nature and usage.', [12, 16]);
C('L9', 'L9-elements', 'l9.pattern', 'Pattern', [], 'Spatial arrangement of objects. The repetition of certain general forms or relationships aids recognition, e.g., rows of rice fields or fish pens.', [12, 17]);
C('L9', 'L9-elements', 'l9.shadow', 'Shadow', [], 'Element that gives the interpreter an impression of the profile view of objects but can also hinder interpretation of objects lying within it.', [12, 18, 19]);
C('L9', 'L9-elements', 'l9.texture', 'Texture', [], 'Frequency of tonal changes, e.g., forest dark and coarse vs pasture light and smooth; varies with resolution and is influenced by shadow.', [12, 20]);
C('L9', 'L9-elements', 'l9.site', 'Site', [], 'Topographic or geographic location of a feature, e.g., a regular shoreline with large concrete loading zones identifies a sea port.', [12, 21]);
C('L9', 'L9-elements', 'l9.association', 'Association', [], 'Occurrence of certain features in relation to others, e.g., cranes and container yards occurring together at a port.', [12, 22]);
C('L9', 'L9-keys', 'l9.key', 'Image interpretation key', ['interpretation key', 'key'], 'A characteristic or a combination of characteristics that enables an interpreter to identify an object on an image and provides guidance about correct identification.', [23, 24]);
C('L9', 'L9-keys', 'l9.selective', 'Selective key', [], 'Type of interpretation key that contains numerous photographic examples with supporting text.', [23]);
C('L9', 'L9-keys', 'l9.elimination', 'Elimination key', [], 'Type of interpretation key arranged so that interpretation proceeds step by step from general to specific details, ruling out all features except the one being identified.', [23]);
C('L9', 'L9-spectral', 'l9.scattergram', 'Scattergram', ['scatter plot', 'scatterplot', 'multispectral band graph', 'scatter diagram', 'band graph'], 'Multispectral band graph (one band plotted against another) used with statistics to support spectral interpretation.', [26]);
C('L9', 'L9-spectral', 'l9.thematic', 'Thematic information', ['thematic', 'thematic info'], 'Main kind of information extracted from multispectral image data, based on the spectral properties of individual pixels.', [27]);
C('L9', 'L9-spectral', 'l9.recon', 'Reconnaissance (inventory)', ['reconnaissance', 'inventory', 'reconnaissance inventory'], 'Use of multispectral data to record what exists in an area, as opposed to measuring its condition (status).', [27]);
C('L9', 'L9-bands', 'l9.tm1', 'Landsat TM band 1 (blue, 0.45–0.52 µm)', ['tm1', 'tm 1', 'band 1', 'tm band 1', 'blue band', 'landsat tm band 1'], 'Landsat TM band designed for water body penetration, making it useful for bathymetry/coastal mapping and soil/vegetation discrimination.', [29]);
C('L9', 'L9-bands', 'l9.tm2', 'Landsat TM band 2 (green, 0.52–0.60 µm)', ['tm2', 'tm 2', 'band 2', 'tm band 2', 'green band', 'landsat tm band 2'], 'Landsat TM band designed to measure the green reflectance peak of vegetation for green vegetation mapping and vigor assessment.', [29]);
C('L9', 'L9-bands', 'l9.tm3', 'Landsat TM band 3 (red, 0.63–0.69 µm)', ['tm3', 'tm 3', 'band 3', 'tm band 3', 'red band', 'landsat tm band 3'], 'Landsat TM band designed to sense the chlorophyll absorption region, aiding plant species differentiation.', [29]);
C('L9', 'L9-bands', 'l9.tm4', 'Landsat TM band 4 (near IR, 0.76–0.90 µm)', ['tm4', 'tm 4', 'band 4', 'tm band 4', 'nir band', 'near infrared band', 'landsat tm band 4'], 'Landsat TM band for identifying plant/vegetation types, health and biomass content, delineating water bodies and discriminating soil moisture.', [29]);
C('L9', 'L9-bands', 'l9.tm5', 'Landsat TM band 5 (mid IR, 1.55–1.75 µm)', ['tm5', 'tm 5', 'band 5', 'tm band 5', 'landsat tm band 5'], 'Landsat TM band indicative of moisture in soil and vegetation that also differentiates snow from clouds.', [29]);
C('L9', 'L9-bands', 'l9.tm6', 'Landsat TM band 6 (thermal IR, 10.4–12.5 µm)', ['tm6', 'tm 6', 'band 6', 'tm band 6', 'thermal band', 'landsat tm band 6'], 'Landsat TM band for vegetation stress and soil moisture discrimination related to thermal radiation, and thermal mapping of urban areas and water.', [29]);
C('L9', 'L9-bands', 'l9.tm7', 'Landsat TM band 7 (mid IR, 2.08–2.35 µm)', ['tm7', 'tm 7', 'band 7', 'tm band 7', 'landsat tm band 7'], 'Landsat TM band for discrimination of mineral and rock types that is also sensitive to vegetation moisture content.', [29]);
C('L9', 'L9-bands', 'l9.l8b1', 'Landsat 8 band 1 (coastal aerosol, 0.43–0.45 µm)', ['band 1', 'coastal aerosol', 'coastal aerosol band', 'landsat 8 band 1', 'b1'], 'Landsat 8 OLI band used for coastal and aerosol studies.', [30]);
C('L9', 'L9-bands', 'l9.l8b2', 'Landsat 8 band 2 (blue, 0.45–0.51 µm)', ['band 2', 'blue', 'blue band', 'landsat 8 band 2', 'b2'], 'Landsat 8 OLI band for bathymetric mapping and for distinguishing soil from vegetation and deciduous from coniferous vegetation.', [30]);
C('L9', 'L9-bands', 'l9.l8b3', 'Landsat 8 band 3 (green, 0.53–0.59 µm)', ['band 3', 'green', 'green band', 'landsat 8 band 3', 'b3'], 'Landsat 8 OLI band that emphasizes peak vegetation, useful for assessing plant vigor.', [30]);
C('L9', 'L9-bands', 'l9.l8b4', 'Landsat 8 band 4 (red, 0.64–0.67 µm)', ['band 4', 'red', 'red band', 'landsat 8 band 4', 'b4'], 'Landsat 8 OLI band that, according to the lecture table, discriminates vegetation slopes.', [30]);
C('L9', 'L9-bands', 'l9.l8b5', 'Landsat 8 band 5 (NIR, 0.85–0.88 µm)', ['band 5', 'nir', 'near infrared', 'nir band', 'landsat 8 band 5', 'b5'], 'Landsat 8 OLI band that emphasizes biomass content and shorelines.', [30]);
C('L9', 'L9-bands', 'l9.l8b6', 'Landsat 8 band 6 (SWIR 1, 1.57–1.65 µm)', ['band 6', 'swir 1', 'swir1', 'shortwave infrared 1', 'landsat 8 band 6', 'b6'], 'Landsat 8 OLI band that discriminates moisture content of soil and vegetation and penetrates thin clouds (the shorter of the two SWIR bands).', [30]);
C('L9', 'L9-bands', 'l9.l8b7', 'Landsat 8 band 7 (SWIR 2, 2.11–2.29 µm)', ['band 7', 'swir 2', 'swir2', 'shortwave infrared 2', 'landsat 8 band 7', 'b7'], 'Landsat 8 OLI band giving improved moisture content of soil and vegetation; penetrates thin clouds (the longer SWIR band).', [30]);
C('L9', 'L9-bands', 'l9.l8b8', 'Landsat 8 band 8 (panchromatic, 0.50–0.68 µm)', ['band 8', 'panchromatic', 'panchromatic band', 'pan band', 'landsat 8 band 8', 'b8'], 'Landsat 8 OLI band with 15 m resolution for sharper image definition.', [30]);
C('L9', 'L9-bands', 'l9.l8b9', 'Landsat 8 band 9 (cirrus, 1.36–1.38 µm)', ['band 9', 'cirrus', 'cirrus band', 'landsat 8 band 9', 'b9'], 'Landsat 8 OLI band for improved detection of cirrus cloud contamination.', [30]);
C('L9', 'L9-bands', 'l9.l8b10', 'Landsat 8 band 10 (TIRS 1, 10.60–11.19 µm)', ['band 10', 'tirs 1', 'tirs1', 'landsat 8 band 10', 'b10'], 'First Landsat 8 thermal band (100 m) for thermal mapping and estimated soil moisture.', [30]);
C('L9', 'L9-bands', 'l9.l8b11', 'Landsat 8 band 11 (TIRS 2, 11.50–12.51 µm)', ['band 11', 'tirs 2', 'tirs2', 'landsat 8 band 11', 'b11'], 'Second Landsat 8 thermal band (100 m) for improved thermal mapping and estimated soil moisture.', [30]);
C('L9', 'L9-vis', 'l9.grayscale', 'Gray scale', ['grayscale', 'greyscale', 'grey scale', 'gray scale display'], 'Single-band display mode in which pixel values are shown as shades from black to white.', [31]);
C('L9', 'L9-vis', 'l9.pseudocolor', 'Pseudo color', ['pseudocolor', 'pseudo colour', 'pseudocolour', 'pseudo-color', 'density slicing'], 'Single-band display mode in which ranges of pixel values are shown in different colors instead of gray levels.', [31], { note: 'The slide only lists it as a single-band mode. The explanation of how it works is a standard clarification.' });
C('L9', 'L9-vis', 'l9.truecolor', 'True color composite', ['true color', 'normal color composite', 'normal color', 'natural color composite', 'true colour composite', 'normal color composition'], 'Composite in which the blue, green and red bands are displayed in the blue, green and red layers using the RGB additive color model.', [31, 32]);
C('L9', 'L9-vis', 'l9.fcc', 'False color composite (FCC)', ['false color composite', 'false color', 'fcc', 'false colour composite', 'false color composition'], 'Multispectral display in which bands are assigned to the red, green and blue layers in a non-natural way.', [31, 33, 37, 38]);
C('L9', 'L9-vis', 'l9.nirfcc', 'NIR false color composite', ['near infrared false color composite', 'nir fcc', 'infrared false color composite', 'color infrared composite', 'cir composite', 'ir false color composite', 'standard false color composite', 'near infrared false color composition'], 'Common multispectral display: NIR band → red layer, red band → green layer, green band → blue layer.', [33]);
C('L9', 'L9-vis', 'l9.rgb', 'RGB additive color model', ['rgb', 'rgb color model', 'additive color model', 'rgb model', 'red green blue'], 'Color model that mixes red, green and blue light; the basis for normal color composition of three bands.', [31, 32]);
C('L9', 'L9-vis', 'l9.hsi', 'HSI color model', ['hsi', 'hue saturation intensity', 'hsi model', 'ihs'], 'Alternative to RGB for false color display, describing color by hue, saturation and intensity.', [31], { note: 'The expansion hue–saturation–intensity is standard but not written on the slide.' });
C('L9', 'L9-vis', 'l9.builtupkey', 'Spectral interpretation key for built-up areas', ['built-up area key', 'built up key', 'built-up areas', 'spectral key for built-up areas'], 'Key in which “darkened” concrete spectral signals caused by building shadows, plus the road-network pattern, identify buildings mixed with small proportions of vegetation.', [34]);
C('L9', 'L9-temporal', 'l9.acqtime', 'Image acquisition date/time', ['acquisition date', 'acquisition time', 'image acquisition date', 'date and time of acquisition', 'acquisition date and time'], 'Factor that largely influences interpretation because spectral characteristics change with season or time of day (shadow effects, seasonal crop change).', [36]);
C('L9', 'L9-fcc', 'l9.rayleigh', 'Rayleigh scattering', ['rayleigh'], 'Atmospheric effect that makes a TM composite fuzzier when B1 or B2 is used in place of B3.', [37]);
C('L9', 'L9-fcc', 'l9.ratio', 'Band ratio image', ['band ratio', 'ratio image', 'band ratios', 'band ratioing'], 'Image made by dividing one band by another (e.g., B/R, G/R, NIR/R). Three such images can also form a false color composite.', [39]);
C('L9', 'L9-fcc', 'l9.eros', 'USGS EROS Data Center', ['eros data center', 'usgs eros', 'eros'], 'Organization whose study showed interpreter preference for specific band color combinations for various features.', [39]);
C('L9', 'L9-workflow', 'l9.fieldinsp', 'Field inspection', ['field checking', 'field check', 'field verification', 'ground checking', 'field inspection to resolve conflicts'], 'Seventh step of the interpretation set sequence: going to the ground to resolve conflicts or confusion, followed by revising the analyses.', [40]);
C('L9', 'L9-workflow', 'l9.assessacc', 'Assess accuracy', ['accuracy assessment', 'assessing accuracy'], 'Final (eighth) step of the interpretation set sequence.', [40]);

// ───────────────────────── IDENTIFICATION (hand-written) ─────────────────────────
I('L9-I01', 'L9', 'L9-intro', 1, 'scenario', 'Information-extraction type in RS whose typical examples are land cover and vegetation maps.', 'Classification', ['image classification', 'land cover classification'], 'Slide 6 lists classification first, with examples “land cover, vegetation.”', [6], 'l10.classif');
I('L9-I02', 'L9', 'L9-intro', 2, 'process', 'In the image interpretation process diagram, which input goes into the interpretation process together with the image?', 'Interpreter’s skills and knowledge level', ['interpreters skills and knowledge level', 'interpreter’s skills and knowledge', 'skills and knowledge level', 'interpreter skills and knowledge', 'skills and knowledge'], 'Slide 8: Image + Interpreter’s skills and knowledge level → Interpretation process → INFORMATION (quality, quantity).', [8], 'l9.interp', { kw: [['skill'], ['knowledge']] });
I('L9-I03', 'L9', 'L9-intro', 2, 'process', 'The interpretation process outputs INFORMATION described by which two attributes?', 'Quality and quantity', ['quantity and quality', 'quality quantity'], 'Slide 8 labels the INFORMATION box “quality” and “quantity.”', [8], 'l9.interp', { kw: [['quality'], ['quantity']] });
I('L9-I04', 'L9', 'L9-intro', 3, 'process', 'Name the feedback loop drawn under the interpretation process diagram that improves the interpreter over time (two words joined by an arrow).', 'Learning → Perceptions', ['learning perceptions', 'learning and perceptions', 'learning to perceptions', 'learning perception'], 'Slide 8 shows a curved loop: Learning → Perceptions, feeding back into the interpreter’s skills.', [8], 'l9.interp', { kw: [['learn'], ['percept']] });
I('L9-I05', 'L9', 'L9-human', 2, 'scenario', 'Demerit of human image interpretation meaning that two interpreters may reach different results from the same image.', 'Individual difference', ['individual differences'], 'Slide 9 lists “time consuming” and “individual difference” as the demerits of human interpretation.', [9], 'l9.human');
I('L9-I06', 'L9', 'L9-human', 2, 'scenario', 'Merit of computer image processing meaning the same input data give the same output every time (term used on the slide).', 'Reproductivity', ['reproducibility', 'reproducible', 'repeatability'], 'Slide 9 writes “Reproductivity.” The standard word is reproducibility, and both are accepted.', [9], 'l9.computer');
I('L9-I07', 'L9', 'L9-elements', 2, 'scenario', 'A sea port is recognized by its regular shoreline, large concrete loading zones and an extensive transportation network. Which interpretation element is the slide illustrating?', 'Site', [], 'Slide 21 uses the sea port to illustrate SITE, the topographic or geographic location.', [21], 'l9.site');
I('L9-I08', 'L9', 'L9-elements', 2, 'scenario', 'Container cranes appear alongside stacked containers and docked ships, so the area must be a port. Which element is being used?', 'Association', [], 'Association is the occurrence of certain features in relation to others (slide 22).', [22], 'l9.association');
I('L9-I09', 'L9', 'L9-elements', 2, 'scenario', 'A high-rise building casts a long dark band while a low-rise building casts a short one. Which element reveals the building heights?', 'Shadow', [], 'Slide 19 contrasts a high-rise (long shadow) with a low-rise (short shadow). Shadow gives a profile view.', [18, 19], 'l9.shadow');
I('L9-I10', 'L9', 'L9-elements', 2, 'scenario', 'Forest looks dark and coarse, pasture light and smooth, and farmland light and smooth with regular roads and drainage. Which element is described?', 'Texture', [], 'Slide 20 illustrates texture with forest, pasture and cropland.', [20], 'l9.texture');
I('L9-I11', 'L9', 'L9-elements', 2, 'scenario', 'Rows of rectangular fish pens in Laguna de Bay and regularly arranged rice paddies in Pampanga are recognized mainly by which element?', 'Pattern', [], 'Slide 17: pattern is the spatial arrangement of objects; repeated forms aid recognition.', [17], 'l9.pattern');
I('L9-I12', 'L9', 'L9-elements', 2, 'scenario', 'Circular or rectilinear outlines suggest human influence, as with desire paths on a campus. Which element is this?', 'Shape', [], 'Slide 15 defines shape as general form, configuration or outline and gives this example.', [15], 'l9.shape');
I('L9-I13', 'L9', 'L9-elements', 3, 'list', 'In the Estes et al. (1983) primary ordering of image elements, which element sits alone at the primary (basic) level?', 'Tone/color', ['tone', 'color', 'tone or color', 'tone color', 'colour'], 'Slide 13: Primary = tone/color; Secondary = size, shape, texture; Tertiary = pattern, height, shadow; Higher = site, association.', [13], 'l9.tone');
I('L9-I14', 'L9', 'L9-elements', 3, 'list', 'In the Estes et al. (1983) ordering, size, shape and texture are grouped as the “spatial arrangements of tone.” At what level are they?', 'Secondary', ['secondary level', 'second', 'secondary elements'], 'Slide 13 places size, shape and texture at the secondary level.', [13], 'l9.tone');
I('L9-I15', 'L9', 'L9-elements', 3, 'list', 'Which element appears in the Estes et al. tertiary level together with pattern and shadow, but is NOT in the 8 elements on slide 12?', 'Height', [], 'The tertiary level of the Estes figure is pattern, height, shadow. Slide 12 does not list height.', [12, 13], 'l9.shadow');
I('L9-I16', 'L9', 'L9-elements', 3, 'list', 'Name the two elements at the highest (most complex) level of the Estes et al. (1983) ordering.', 'Site and association', ['association and site', 'site association'], 'Slide 13 places site and association at the higher level.', [13], 'l9.site', { kw: [['site'], ['association']] });
I('L9-I17', 'L9', 'L9-keys', 2, 'scenario', 'Species key entry: conical crown with sharp spear, circular edge with sharp spear, dark tone, spotted grain, hard and coarse texture.', 'Cedar', [], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I18', 'L9', 'L9-keys', 2, 'scenario', 'Species key entry: cylindrical crown with shapeless crown, circular but unclear edge, light and unclear tone, irregularly spotted, soft but coarse.', 'Pine', [], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I19', 'L9', 'L9-keys', 3, 'scenario', 'Species key entry: conical crown with wider crown, circular crown edge with zigzag edge, dark and unclear tone.', 'Fir/spruce', ['fir', 'spruce', 'fir or spruce', 'fir spruce'], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I20', 'L9', 'L9-keys', 3, 'scenario', 'Species key entry: conical with unclear crown, circular with unclear edge, tone lighter than cypress, spotted, soft and fine.', 'Larch', [], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I21', 'L9', 'L9-keys', 2, 'scenario', 'Species key entry: irregular crown shapes, unclear crown edge, lighter tone, irregular pattern, coarse texture.', 'Deciduous', ['deciduous trees', 'deciduous forest'], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I22', 'L9', 'L9-keys', 3, 'scenario', 'Species key entry: conical with round crown, crown edge circular but not sharp, dark but lighter than cedar, spotted.', 'Cypress', [], 'From the sample key on slide 24.', [24], 'l9.key');
I('L9-I23', 'L9', 'L9-spectral', 2, 'scenario', 'Spectral region whose sensors record reflected sunlight to acquire information about the chemical composition of objects (abbreviation accepted).', 'VNIR', ['visible and near infrared', 'visible near infrared', 'visible and near-infrared', 'vnir region'], 'Slide 28: VNIR → chemical properties.', [28], 'l9.spectralint');
I('L9-I24', 'L9', 'L9-spectral', 2, 'scenario', 'Sensors that use active radar or laser beams collect information about which two kinds of object properties?', 'Physical and electrical properties', ['physical and electrical', 'electrical and physical properties', 'physical structure and electrical properties'], 'Slide 28: microwave/radio → physical and electrical properties.', [28], 'l9.spectralint', { kw: [['physical'], ['electric']] });
I('L9-I25', 'L9', 'L9-spectral', 2, 'scenario', 'Kind of property inferred by recording radiation EMITTED from the earth surface or atmosphere in the TIR/microwave region.', 'Thermal properties', ['thermal', 'thermal property'], 'Slide 28: TIR/microwave → thermal properties (and composition).', [28], 'l9.spectralint');
I('L9-I26', 'L9', 'L9-spectral', 2, 'scenario', 'Measuring crop growth, the extent of soil erosion, water quality and insect infestation in forests is measuring the ______ of specific areas.', 'Condition (status)', ['condition', 'status', 'status condition'], 'Slide 27: conduct an inventory (reconnaissance) and measure the condition (status) of specific areas.', [27], 'l9.recon');
I('L9-I27', 'L9', 'L9-vis', 1, 'calc', 'What is the maximum number of bands that can be displayed simultaneously?', '3', ['three'], 'Slide 31: the maximum number of bands that can be displayed at the same time is 3 (one per R, G, B layer).', [31], 'l9.rgb', { num: { v: 3, tol: 0 } });
I('L9-I28', 'L9', 'L9-vis', 2, 'list', 'Landsat 8 true color composite (R, G, B bands).', '4, 3, 2', [], 'Slide 32: Landsat 8 (OLI-1) and 9 (OLI-2): B4, B3, B2.', [32], 'l9.truecolor', { bands: ['4', '3', '2'] });
I('L9-I29', 'L9', 'L9-vis', 2, 'list', 'Landsat 8 NIR (IR) false color composite (R, G, B bands).', '5, 4, 3', [], 'Slide 33: Landsat 8 and 9: B5, B4, B3.', [33], 'l9.nirfcc', { bands: ['5', '4', '3'] });
I('L9-I30', 'L9', 'L9-vis', 2, 'list', 'Landsat 4–5 TM and Landsat 7 ETM+ true color composite (R, G, B bands).', '3, 2, 1', [], 'Slide 32: Landsat 4–5 (TM) and 7 (ETM+): B3, B2, B1.', [32], 'l9.truecolor', { bands: ['3', '2', '1'] });
I('L9-I31', 'L9', 'L9-vis', 2, 'list', 'Landsat TM/ETM+ NIR false color composite (R, G, B bands).', '4, 3, 2', [], 'Slide 33: Landsat 4–5 (TM) and 7 (ETM+): B4, B3, B2.', [33], 'l9.nirfcc', { bands: ['4', '3', '2'] });
I('L9-I32', 'L9', 'L9-vis', 2, 'list', 'Sentinel-2 NIR false color composite (R, G, B bands).', '8, 4, 3', [], 'Slide 33: Sentinel-2: B8, B4, B3.', [33], 'l9.nirfcc', { bands: ['8', '4', '3'] });
I('L9-I33', 'L9', 'L9-vis', 2, 'visual', 'In a NIR false color composite, which feature appears BLUISH GRAY?', 'Cities', ['city', 'urban areas', 'urban', 'built-up areas', 'built up', 'built-up'], 'Slide 33 table: cities → bluish gray.', [33], 'l9.nirfcc', { swatch: '#8d9aa8' });
I('L9-I34', 'L9', 'L9-vis', 2, 'visual', 'In a NIR false color composite, which type of water appears LIGHT OR DARK BLUE (rather than black)?', 'Silt-laden water', ['silty water', 'turbid water', 'sediment laden water', 'silt laden water'], 'Slide 33: clear water → black; silt-laden water → light or dark blue.', [33], 'l9.nirfcc', { swatch: '#4f7fb3' });
I('L9-I35', 'L9', 'L9-vis', 3, 'visual', 'In a NIR false color composite, which forest type appears BROWNISH RED (as opposed to dark red)?', 'Coniferous forest', ['coniferous', 'conifers', 'conifer forest'], 'Slide 33: deciduous forest → dark red; coniferous forest → brownish red.', [33], 'l9.nirfcc', { swatch: '#8a3b2c' });
I('L9-I36', 'L9', 'L9-vis', 2, 'visual', 'In a NIR false color composite, which land cover appears PINKISH RED?', 'Grassland', ['grass', 'grasslands'], 'Slide 33: grassland → pinkish red.', [33], 'l9.nirfcc', { swatch: '#d9798a' });
I('L9-I37', 'L9', 'L9-vis', 3, 'visual', 'In a NIR false color composite, which two surfaces does the slide say appear BLACK besides clear water? (two items)', 'Lava and asphalt', ['asphalt and lava', 'lava asphalt'], 'Slide 33: clear water → black; lava and asphalt → black.', [33], 'l9.nirfcc', { swatch: '#151515' }, { kw: [['lava'], ['asphalt']] });
I('L9-I38', 'L9', 'L9-fcc', 2, 'list', 'Landsat 8 OLI equivalent of the TM/ETM+ composite 5, 4, 3.', '6, 5, 4', [], 'Slide 38: TM 5,4,3 = OLI 6,5,4.', [38], 'l9.fcc', { bands: ['6', '5', '4'] });
I('L9-I39', 'L9', 'L9-fcc', 3, 'list', 'Landsat 8 OLI equivalent of the TM/ETM+ composite 7, 4, 2.', '7, 5, 3', [], 'Slide 38: TM 7,4,2 = OLI 7,5,3.', [38], 'l9.fcc', { bands: ['7', '5', '3'] });
I('L9-I40', 'L9', 'L9-fcc', 2, 'list', 'USGS EROS preferred band combination (TM numbering) for mapping water sediment patterns.', '3/2/1', [], 'Slide 39: mapping of water sediment patterns → B3/B2/B1.', [39], 'l9.eros', { bands: ['3', '2', '1'] });
I('L9-I41', 'L9', 'L9-fcc', 3, 'list', 'USGS EROS preferred band combination (TM numbering) for rock discrimination.', '5/4/1', [], 'Slide 39: rock discrimination → B5/B4/B1.', [39], 'l9.eros', { bands: ['5', '4', '1'] });
I('L9-I42', 'L9', 'L9-fcc', 2, 'list', 'Most common false color composite for Landsat MSS (no blue band).', '4/2/1', [], 'Slide 37: Landsat MSS most common: 4/2/1.', [37], 'l9.fcc', { bands: ['4', '2', '1'] });
I('L9-I43', 'L9', 'L9-fcc', 3, 'list', 'Sentinel-2 false color composite the slide suggests for geology (R/G/B).', 'B12/B11/B2', ['12/11/2'], 'Slide 37: Sentinel-2 geology: B12/B11/B2 (agriculture: B11/B8/B2).', [37], 'l9.fcc', { bands: ['12', '11', '2'] });
I('L9-I44', 'L9', 'L9-fcc', 3, 'list', 'Sentinel-2 false color composite the slide suggests for agriculture (R/G/B).', 'B11/B8/B2', ['11/8/2'], 'Slide 37: Sentinel-2 agriculture: B11/B8/B2.', [37], 'l9.fcc', { bands: ['11', '8', '2'] });
I('L9-I45', 'L9', 'L9-workflow', 2, 'process', 'Step 3 of the image interpretation set sequence.', 'Validate the generalized understanding of the area and problem', ['validate the generalized understanding', 'validate generalized understanding of the area and problem', 'validation of the generalized understanding'], 'Slide 40: 1 goals, 2 describe characteristics, 3 VALIDATE the generalized understanding, 4 plan information sources, 5 acquire data, 6 conduct, 7 field inspection, 8 assess accuracy.', [40], 'l9.fieldinsp', { kw: [['validat'], ['understand']] });
I('L9-I46', 'L9', 'L9-workflow', 2, 'process', 'First step of the image interpretation set sequence.', 'Understand the goals of the interpretation task', ['understand the goals', 'understanding the goals of the interpretation task', 'understand the goals of the task'], 'Slide 40, step 1.', [40], 'l9.fieldinsp', { kw: [['goal']] });
I('L9-I47', 'L9', 'L9-workflow', 2, 'process', 'Step 4 of the image interpretation set sequence.', 'Plan the information sources needed', ['plan the information sources', 'planning the information sources needed', 'plan information sources'], 'Slide 40, step 4.', [40], 'l9.fieldinsp', { kw: [['plan'], ['source']] });
I('L9-I48', 'L9', 'L9-temporal', 2, 'scenario', 'Interpretation type that is BASED ON spatial and spectral interpretation and adds one more dimension.', 'Temporal interpretation', ['temporal'], 'Slide 35: temporal interpretation is based on spatial and spectral interpretation and adds the temporal dimension.', [35], 'l9.temporal');
I('L9-I49', 'L9', 'L9-intro', 2, 'list', 'On slide 5, which satellite example has the FINEST resolution (0.3 m)?', 'WorldView-4', ['worldview 4', 'worldview4', 'world view 4'], 'Slide 5 order: Aqua (MODIS) 250 m, Landsat-8 30 m, Sentinel-2 10 m, PlanetScope (Dove) 3 m, Pleiades 0.5 m, WorldView-4 0.3 m. WorldView-4 stopped operating in 2019; the slide is a teaching example.', [5], 'l9.scales');
I('L9-I50', 'L9', 'L9-intro', 2, 'list', 'On slide 5, the Aqua satellite example uses which sensor (250 m)?', 'MODIS', ['moderate resolution imaging spectroradiometer'], 'Slide 5: Aqua (MODIS) 250 m resolution.', [5], 'l9.scales');

// ───────────────────────── MULTIPLE CHOICE ─────────────────────────
M('L9-M01', 'L9', 'L9-intro', 1, 'Which is NOT one of the three ways aerial and satellite image interpretation departs from everyday image interpretation?', [
  ['Images are always captured in true color', 'Correct. Nothing on the slides says this, and in fact RS often uses non-visible wavelengths.'],
  ['Portrayal of features from an overhead perspective', 'This is aspect 1 (slide 3).'],
  ['Frequent use of wavelengths outside the visible spectrum', 'This is aspect 2 (slide 4).'],
  ['Representation of the earth’s surface at unfamiliar scales and resolutions', 'This is aspect 3 (slide 5).']], [3, 4, 5], 'l9.overhead');
M('L9-M02', 'L9', 'L9-intro', 2, 'Producing a turbidity index map for a lake belongs to which information-extraction type?', [
  ['Extraction of indices', 'Slide 6 gives vegetation index and turbidity index as examples of extraction of indices.'],
  ['Change detection', 'Change detection compares dates, e.g., land cover change.'],
  ['Extraction of physical quantities', 'Physical quantities are temperature, atmospheric component and elevation.'],
  ['Identification of specific features', 'That covers disasters, lineaments and archaeological features.']], [6], 'l9.indices');
M('L9-M03', 'L9', 'L9-intro', 2, 'Detecting an archaeological feature or extracting lineaments from imagery is an example of…', [
  ['Identification of specific features', 'Slide 6 lists disasters, lineament extraction and archaeological feature detection under this type.'],
  ['Classification', 'Classification gives land cover or vegetation classes.'],
  ['Extraction of indices', 'Indices are ratios such as vegetation or turbidity indices.'],
  ['Change detection', 'Change detection compares images over time.']], [6], 'l9.specfeat');
M('L9-M04', 'L9', 'L9-intro', 1, 'According to the lecture, the interpreter’s task is to…', [
  ['use scientific tools and methodology to arrive at objective findings', 'Exact wording of slide 7.'],
  ['reproduce the image at a larger scale', 'Not mentioned. Enlarging an image is not interpretation.'],
  ['replace field work with automated processing', 'The workflow still includes field inspection (slide 40).'],
  ['record only features that are physically visible', 'Slide 7 says geographical knowledge helps relate even features that are NOT physically visible.']], [7], 'l9.task');
M('L9-M05', 'L9', 'L9-human', 2, 'Which is listed as a DEMERIT of computer image processing?', [
  ['Spatial information extraction is poor', 'Slide 9: computer demerits are “human knowledge is unavailable” and “spatial information extraction is poor.”'],
  ['Time consuming', 'That is a demerit of HUMAN interpretation.'],
  ['Individual difference', 'That is a demerit of HUMAN interpretation.'],
  ['Extraction of physical quantities is possible', 'That is a MERIT of computer processing.']], [9], 'l9.computer');
M('L9-M06', 'L9', 'L9-human', 2, 'An analyst must quickly derive NDVI for 500 scenes with identical, repeatable results. Based on slide 9, which approach suits this best, and why?', [
  ['Computer image processing, because of short processing time, reproducibility and index extraction', 'All three computer merits on slide 9 match the need.'],
  ['Human interpretation, because the interpreter’s knowledge is available', 'Human knowledge helps with spatial context, but humans are time consuming and vary between individuals.'],
  ['Human interpretation, because it excels at spatial information extraction', 'The task is index computation, not spatial pattern recognition.'],
  ['Either one, because both have identical merits', 'The slide contrasts different merits and demerits.']], [9], 'l9.computer');
M('L9-M07', 'L9', 'L9-levels', 2, 'Which level of interpretation is described as “inductive and deductive analysis of imagery, in conjunction with other data”?', [
  ['Image interpretation', 'The base of the pyramid on slide 10.'],
  ['Image reading', 'Reading is a relatively superficial visual examination.'],
  ['Image analysis', 'Analysis is a longer, more detailed visual inspection of the general and obvious features, without other data.'],
  ['Image enhancement', 'Not one of the three levels.']], [10], 'l9.levelinterp');
M('L9-M08', 'L9', 'L9-levels', 2, 'A quick look at a scene to see where the main features are and how they are distributed is called…', [
  ['Image reading', 'Slide 10: a relatively superficial visual examination to quickly identify main features and their distribution.'],
  ['Image analysis', 'Analysis takes longer and is more detailed.'],
  ['Image interpretation', 'Interpretation adds other data and inductive/deductive reasoning.'],
  ['Ground truthing', 'Ground truthing means collecting reference data in the field.']], [10], 'l9.reading');
M('L9-M09', 'L9', 'L9-elements', 2, 'Which statement BEST distinguishes texture from pattern?', [
  ['Texture is the frequency of tonal change; pattern is the spatial arrangement of objects', 'Matches slides 12 and 20.'],
  ['Texture is the outline of an object; pattern is its color', 'Outline is shape, and color is tone.'],
  ['Texture describes location; pattern describes size', 'Location is site.'],
  ['They are synonyms in image interpretation', 'They are separate elements on slide 12.']], [12, 17, 20], 'l9.texture');
M('L9-M10', 'L9', 'L9-elements', 2, 'Without which element could shapes, patterns, textures and shadows NOT be determined?', [
  ['Tone or color', 'Slide 14: without tonal differences, the other elements could not be determined. Estes puts tone at the primary level.'],
  ['Association', 'Association is a higher-level element.'],
  ['Site', 'Site is a higher-level element.'],
  ['Size', 'Size is secondary and depends on tone.']], [13, 14], 'l9.tone');
M('L9-M11', 'L9', 'L9-elements', 3, 'Shadows are useful because they show a profile view. According to slide 18, what is their drawback?', [
  ['They can hinder interpretation of objects within the shadows', 'Exact slide wording.'],
  ['They make buildings appear smaller than they are', 'Not stated. Long shadows actually indicate tall objects.'],
  ['They only appear in radar images', 'Shadows appear in optical images too (the slide examples are optical).'],
  ['They remove tonal differences everywhere in the image', 'Only shadowed areas are affected.']], [18], 'l9.shadow');
M('L9-M12', 'L9', 'L9-elements', 2, 'Identifying an airport because aircraft are parked next to long runways relies MAINLY on…', [
  ['Association', 'Features occurring in relation to others (slide 22).'],
  ['Texture', 'Texture is the frequency of tonal changes.'],
  ['Tone', 'Tone alone does not link the aircraft to the runway.'],
  ['Pattern', 'Pattern is the repeated arrangement of similar objects. Here, different features occur together.']], [22], 'l9.association');
M('L9-M13', 'L9', 'L9-elements', 3, 'In the Estes et al. (1983) ordering, which set correctly matches the TERTIARY level?', [
  ['Pattern, height, shadow', 'Slide 13 tertiary level.'],
  ['Size, shape, texture', 'That is the secondary level (spatial arrangements of tone).'],
  ['Site, association', 'That is the higher level.'],
  ['Tone, color', 'That is the primary (basic) level.']], [13], 'l9.pattern');
M('L9-M14', 'L9', 'L9-keys', 2, 'An interpretation guide shows many example photographs of each crop with supporting text, and the interpreter picks the closest match. This is a(n)…', [
  ['Selective key', 'Slide 23: a selective key contains numerous photographic examples with supporting text.'],
  ['Elimination key', 'An elimination key proceeds step by step from general to specific.'],
  ['Spectral signature', 'A spectral signature is a reflectance pattern, not a guide.'],
  ['Set sequence', 'The set sequence is the 8-step workflow.']], [23], 'l9.selective');
M('L9-M15', 'L9', 'L9-keys', 2, 'A guide asks “Is it vegetation? → Is it woody? → Is the crown conical?” until only one feature remains. This is a(n)…', [
  ['Elimination key', 'It goes from general to specific and eliminates every feature except one (slide 23).'],
  ['Selective key', 'A selective key relies on illustrated examples, not stepwise elimination.'],
  ['Decision boundary', 'That term belongs to classification in feature space (Lecture 10).'],
  ['Association', 'Association is an interpretation element.']], [23], 'l9.elimination');
M('L9-M16', 'L9', 'L9-spectral', 2, 'When interpreting a SINGLE-band image like an aerial photograph, the lecture says you must stay aware of…', [
  ['the band’s spectral wavelength and the spectral reflectance of objects in that band', 'Slide 25.'],
  ['the number of ground control points', 'Not mentioned.'],
  ['the RGB order of the three displayed bands', 'Only one band is displayed.'],
  ['the minimum mapping unit of the final map', 'MMU belongs to Lecture 10 classification.']], [25], 'l9.spectralint');
M('L9-M17', 'L9', 'L9-spectral', 2, 'Information extracted from multispectral image data is MAINLY…', [
  ['thematic information based on the spectral properties of individual pixels', 'Slide 27.'],
  ['height information from shadows', 'Shadow-based height is spatial interpretation.'],
  ['temperature only', 'Temperature needs thermal bands. Multispectral data serve much broader purposes.'],
  ['positional accuracy of the image', 'Positional accuracy is a reference-data issue (Lecture 11).']], [27], 'l9.thematic');
M('L9-M18', 'L9', 'L9-bands', 2, 'Which Landsat TM band was designed for water body penetration and bathymetry/coastal mapping?', [
  ['TM 1 (0.45–0.52 µm, blue)', 'Slide 29.'],
  ['TM 4 (0.76–0.90 µm, near IR)', 'NIR delineates water bodies (water is dark) but does not penetrate them.'],
  ['TM 3 (0.63–0.69 µm, red)', 'Red senses chlorophyll absorption.'],
  ['TM 6 (10.4–12.5 µm, thermal IR)', 'Thermal maps temperature.']], [29], 'l9.tm1');
M('L9-M19', 'L9', 'L9-bands', 2, 'Which TM band differentiates snow from clouds?', [
  ['TM 5 (1.55–1.75 µm)', 'Slide 29: indicative of moisture in soil and vegetation; differentiates snow from clouds.'],
  ['TM 2 (0.52–0.60 µm)', 'Green measures the vegetation reflectance peak.'],
  ['TM 7 (2.08–2.35 µm)', 'TM 7 discriminates mineral and rock types.'],
  ['TM 1 (0.45–0.52 µm)', 'Blue is used for water penetration.']], [29], 'l9.tm5');
M('L9-M20', 'L9', 'L9-bands', 3, 'A geologist wants to discriminate mineral and rock types with Landsat TM. Which band is most directly recommended on slide 29?', [
  ['TM 7 (2.08–2.35 µm)', 'Slide 29: discrimination of mineral and rock types; sensitive to vegetation moisture content.'],
  ['TM 2 (0.52–0.60 µm)', 'Green is for vegetation vigor.'],
  ['TM 4 (0.76–0.90 µm)', 'NIR is for biomass and water delineation.'],
  ['TM 6 (10.4–12.5 µm)', 'Thermal is for thermal mapping and stress.']], [29], 'l9.tm7');
M('L9-M21', 'L9', 'L9-bands', 2, 'Which Landsat 8 band has 15 m resolution for sharper image definition?', [
  ['Band 8 – panchromatic (0.50–0.68 µm)', 'Slide 30.'],
  ['Band 9 – cirrus (1.36–1.38 µm)', 'Cirrus detects cirrus cloud contamination.'],
  ['Band 10 – TIRS 1', 'TIRS bands are 100 m.'],
  ['Band 1 – coastal aerosol', 'Coastal aerosol is for coastal and aerosol studies.']], [30], 'l9.l8b8');
M('L9-M22', 'L9', 'L9-bands', 3, 'Which Landsat 8 band corresponds in role to TM band 4 (biomass)?', [
  ['Band 5 (NIR, 0.85–0.88 µm)', 'Landsat 8 inserted a coastal aerosol band 1, so NIR moved from band 4 to band 5.'],
  ['Band 4 (red, 0.64–0.67 µm)', 'Landsat 8 band 4 is red.'],
  ['Band 6 (SWIR 1)', 'SWIR 1 is a moisture band.'],
  ['Band 3 (green)', 'Green emphasizes peak vegetation (vigor).']], [29, 30], 'l9.l8b5');
M('L9-M23', 'L9', 'L9-bands', 2, 'Detecting thin, high cirrus contamination in a Landsat 8 scene calls for…', [
  ['Band 9 (1.36–1.38 µm)', 'Slide 30: improved detection of cirrus cloud contamination.'],
  ['Band 1 (0.43–0.45 µm)', 'For coastal and aerosol studies.'],
  ['Band 11 (11.50–12.51 µm)', 'Thermal mapping.'],
  ['Band 3 (0.53–0.59 µm)', 'Peak vegetation.']], [30], 'l9.l8b9');
M('L9-M24', 'L9', 'L9-vis', 1, 'Which display modes apply to a SINGLE band?', [
  ['Black-white, gray scale, pseudo color', 'Slide 31.'],
  ['True color and false color', 'These need multispectral bands.'],
  ['RGB and HSI', 'These are color models for multiband display.'],
  ['NIR FCC and band ratio FCC', 'These are multiband composites.']], [31], 'l9.pseudocolor');
M('L9-M25', 'L9', 'L9-vis', 2, 'In a NIR false color composite, NIR, red and green bands are assigned respectively to…', [
  ['Red, green and blue layers', 'Slide 33: NIR → red, red → green, green → blue.'],
  ['Blue, green and red layers', 'That reverses the assignment.'],
  ['Green, red and blue layers', 'Incorrect mapping.'],
  ['Red, blue and green layers', 'Incorrect mapping.']], [33], 'l9.nirfcc');
M('L9-M26', 'L9', 'L9-vis', 2, 'In a NIR false color composite, which feature is described as BLACK?', [
  ['Clear water', 'Slide 33: clear water → black (lava and asphalt are black too).'],
  ['Silt-laden water', 'Light or dark blue.'],
  ['Snow and clouds', 'White.'],
  ['Sand', 'White or yellow.']], [33], 'l9.nirfcc');
M('L9-M27', 'L9', 'L9-vis', 3, 'Landsat MSS and SPOT XS have no blue band. How does the lecture produce a (simulated) true color composite for them?', [
  ['B2, (B1*3+B2)/4, B1', 'Slide 32. The green layer is synthesized from bands 1 and 2.'],
  ['B3, B2, B1', 'For MSS/SPOT XS this would be a NIR false color composite.'],
  ['B4, B3, B2', 'Landsat 8 true color.'],
  ['True color is impossible, so it cannot be done', 'The slide shows a simulated version.']], [32], 'l9.truecolor');
M('L9-M28', 'L9', 'L9-vis', 2, 'Built-up areas are often recognized by “darkened” concrete spectral signals. The lecture relates this darkening to…', [
  ['the shadows of buildings', 'Slide 34.'],
  ['high soil moisture', 'Not mentioned for built-up areas.'],
  ['chlorophyll absorption', 'That is a vegetation property (red band).'],
  ['Rayleigh scattering', 'Rayleigh scattering relates to fuzzy blue/green composites.']], [34], 'l9.builtupkey');
M('L9-M29', 'L9', 'L9-temporal', 2, 'Why must interpreters consider the acquisition date/time of an image?', [
  ['Spectral characteristics change with season or time of day (shadows, seasonal crop changes), so spectral keys may differ', 'Slide 36.'],
  ['Because older images always have lower resolution', 'Not stated.'],
  ['Because the RGB model changes with the date', 'Color models do not depend on date.'],
  ['Only to compute the minimum mapping unit', 'MMU is unrelated.']], [36], 'l9.acqtime');
M('L9-M30', 'L9', 'L9-fcc', 2, 'Why does the lecture say using TM B1 or B2 in place of B3 produces a fuzzier composite?', [
  ['Rayleigh scattering', 'Slide 37.'],
  ['Mie scattering by smoke', 'Not mentioned.'],
  ['Speckle', 'Speckle is a radar phenomenon.'],
  ['Layover', 'Layover is a radar geometric distortion.']], [37], 'l9.rayleigh');
M('L9-M31', 'L9', 'L9-fcc', 3, 'According to the USGS EROS study, a good vegetation-discrimination composite (TM numbering) combines…', [
  ['one mid-IR band (B5 or B7), the NIR band (B4) and any one visible band (B1, B2 or B3)', 'Slide 39.'],
  ['three visible bands only', 'That is the water-sediment choice (B3/B2/B1).'],
  ['the thermal band with two visible bands', 'Not recommended on the slide.'],
  ['B5/B4/B1 only, with nothing else allowed', 'B5/B4/B1 is the rock-discrimination choice.']], [39], 'l9.eros');
M('L9-M32', 'L9', 'L9-fcc', 2, 'Which of these can ALSO be used to create a false color composite, according to slide 39?', [
  ['Band ratio images such as B/R, G/R and NIR/R', 'Slide 39.'],
  ['Only raw bands in their natural order', 'That is true color, not the point of the slide.'],
  ['Elevation contours', 'Not mentioned.'],
  ['Training samples', 'Training samples are for supervised classification (Lecture 10).']], [39], 'l9.ratio');
M('L9-M33', 'L9', 'L9-workflow', 2, 'In the interpretation set sequence, what immediately follows “conduct the interpretation”?', [
  ['Field inspection to resolve conflicts or confusion, then revise analyses', 'Step 7 on slide 40.'],
  ['Assess accuracy', 'That is step 8, after field inspection.'],
  ['Acquire the image data', 'Step 5, before interpretation.'],
  ['Plan the information sources needed', 'Step 4.']], [40], 'l9.fieldinsp');
M('L9-M34', 'L9', 'L9-workflow', 1, 'What is the LAST step of the image interpretation set sequence?', [
  ['Assess accuracy', 'Step 8 (slide 40).'],
  ['Conduct the interpretation', 'Step 6.'],
  ['Field inspection', 'Step 7.'],
  ['Understand the goals', 'Step 1.']], [40], 'l9.assessacc');
M('L9-M35', 'L9', 'L9-levels', 2, 'Per the summary slide, temporal identification considers…', [
  ['seasonal and time-of-day effects', 'Slide 41.'],
  ['spectral signatures', 'That is spectral identification.'],
  ['shape, size and pattern', 'That is spatial identification.'],
  ['positional accuracy', 'Lecture 11.']], [41], 'l9.temporal');
M('L9-M36', 'L9', 'L9-intro', 2, 'Why does the lecture say geographical knowledge is needed in image interpretation?', [
  ['To relate visible image characteristics to real-world geographic features, even ones not physically visible', 'Slide 7.'],
  ['To set the RGB order of bands', 'Not related.'],
  ['To calibrate digital numbers into reflectance', 'That is a processing step and is not mentioned.'],
  ['To compute kappa', 'Kappa is from Lecture 11.']], [7], 'l9.geoknow');

// ───────────────────────── RECALL ─────────────────────────
R('L9-R01', 'L9', 'L9-elements', 'diff', 'Explain the difference between SITE and ASSOCIATION.', 'Site = the topographic or geographic location of a feature (a port on a regular shoreline with concrete loading zones). Association = the occurrence of features in relation to others (cranes with containers, aircraft with runways). Site asks “where is it?”, association asks “what is it found with?”', [12, 21, 22], 'l9.site');
R('L9-R02', 'L9', 'L9-elements', 'diff', 'Explain the difference between PATTERN and TEXTURE.', 'Pattern = the spatial arrangement of objects; repeated forms aid recognition (rice paddies, fish pens). Texture = the frequency of tonal change (forest coarse, pasture smooth); it varies with resolution and is influenced by shadow.', [12, 17, 20], 'l9.pattern');
R('L9-R03', 'L9', 'L9-keys', 'diff', 'Explain the difference between a SELECTIVE key and an ELIMINATION key.', 'A selective key contains numerous photographic examples with supporting text: you match to an example. An elimination key proceeds step by step from general to specific, eliminating all features except the one being identified.', [23], 'l9.selective');
R('L9-R04', 'L9', 'L9-levels', 'steps', 'List the three levels of interpretation from shallowest to deepest and describe each in one phrase.', '1) Image reading: superficial, quick look at main features and their distribution. 2) Image analysis: longer, more detailed inspection of general and obvious features. 3) Image interpretation: inductive/deductive analysis with other data to understand features, functions and inter-relationships.', [10], 'l9.reading');
R('L9-R05', 'L9', 'L9-workflow', 'steps', 'List the 8 steps of the image interpretation set sequence.', '1 Understand the goals; 2 Describe characteristics of area and processes; 3 Validate the generalized understanding; 4 Plan information sources; 5 Acquire image data and facilities; 6 Conduct the interpretation; 7 Field inspection to resolve conflicts → revise analyses; 8 Assess accuracy.', [40], 'l9.fieldinsp');
R('L9-R06', 'L9', 'L9-vis', 'explain', 'Explain how a NIR false color composite is built and why vegetation appears red.', 'NIR band → red layer, red band → green layer, green band → blue layer. Healthy vegetation reflects strongly in NIR, so it shows up in the red layer (deciduous dark red, coniferous brownish red, grassland pinkish red).', [33], 'l9.nirfcc');
R('L9-R07', 'L9', 'L9-human', 'diff', 'Contrast human image interpretation with computer image processing (merits and demerits).', 'Human: interpreter’s knowledge available, excellent spatial information extraction | time consuming, individual difference. Computer: short processing time, reproductivity, physical quantities/indices possible | human knowledge unavailable, poor spatial information extraction.', [9], 'l9.human');
R('L9-R08', 'L9', 'L9-spectral', 'explain', 'Match each spectral region to the property it infers: VNIR, TIR/microwave, microwave/radio.', 'VNIR → chemical properties (reflected sunlight). TIR/microwave → thermal properties (emitted radiation). Microwave/radio → physical and electrical properties (active radar or laser beams).', [28], 'l9.spectralint');

// ── Additional items linking every substantive page to practice
I('L9-I51', 'L9', 'L9-elements', 1, 'scenario', 'Slide 16 numbers buildings 1–4 of very different footprints to show that this element tends to indicate the nature and usage of buildings.', 'Size', [], 'Slide 16: “Size of buildings tends to indicate the nature and usage of them.”', [16], 'l9.size');
M('L9-M37', 'L9', 'L9-spectral', 2, 'Which set of aids does slide 26 list for SPECTRAL interpretation?', [
  ['Color composites, multispectral band graphs (scattergram) and statistics, and multispectral classification', 'Slide 26.'],
  ['Shadow length, building size and road patterns', 'Those are spatial elements.'],
  ['Field inspection and accuracy assessment', 'Those are workflow steps 7–8.'],
  ['Selective and elimination keys only', 'Keys are on slide 23; slide 26 lists composites, scattergrams/statistics and classification.']], [26], 'l9.scattergram');
M('L9-M38', 'L9', 'L9-levels', 1, 'How many TYPES of interpretation does Lecture 9 list, and what are they?', [
  ['Three: spatial, spectral, temporal', 'Slide 11.'],
  ['Three: reading, analysis, interpretation', 'Those are the three LEVELS (slide 10).'],
  ['Two: visual and digital', 'Not the lecture’s classification.'],
  ['Eight: shape, size, pattern, shadow, tone, texture, site, association', 'Those are the spatial ELEMENTS (slide 12).']], [11], 'l9.spatial');
