// LECTURE 10 — Information Extraction (47 PDF pages; printed slide numbers 5–54 with gaps)
lecture({ id: 'L10', short: 'Lecture 10', title: 'Information Extraction', file: 'Lecture 10 - Information Extraction.pdf', pages: 47 });

PAGES('L10', [
  [1, 5, 'Landsat image and classified map (built-up, road, bare soil, shadow, vegetation, water)', 'S', 'L10-system'],
  [2, null, 'Recall: elements of remote sensing A–G (CCRS diagram)', 'S', 'L10-system'],
  [3, 7, 'Outline', 'O', null],
  [4, 8, 'I. Introduction (section title)', 'T', null],
  [5, 10, 'One pixel, one class (DN grid)', 'S', 'L10-space'],
  [6, 11, 'Image space: location and intensity value', 'S', 'L10-space'],
  [7, 12, 'Image space vs spectral space', 'S', 'L10-space'],
  [8, 13, 'The spectral space (RGB plots; NIR vs Red)', 'S', 'L10-space'],
  [9, 14, 'Spectral classifications (clusters and boundaries)', 'S', 'L10-space'],
  [10, 15, 'Image space → feature space (Band 4 / Band 5 grids)', 'S', 'L10-space'],
  [11, 16, 'Feature space → classified image', 'S', 'L10-space'],
  [12, 17, 'Mapping of categorical and continuous variables', 'S', 'L10-catcont'],
  [13, 18, 'II. Thematic information extraction (section title)', 'T', null],
  [14, 19, 'Thematic information extraction: 8 steps', 'S', 'L10-steps'],
  [15, 20, '1. Definition of the mapping approach', 'S', 'L10-mapping'],
  [16, 21, 'MMU and spatial unit of analysis', 'S', 'L10-mapping'],
  [17, null, '3. Image segmentation: bringing pixels together', 'S', 'L10-segment'],
  [18, null, '3. Image segmentation: classification vs detection vs segmentation', 'S', 'L10-segment'],
  [19, 25, '4. Feature identification and selection: questions', 'S', 'L10-features'],
  [20, 26, '4. Feature identification and selection: 1st/2nd order, ancillary', 'S', 'L10-features'],
  [21, 27, '5. Classification: definition (McCloy, 2005)', 'S', 'L10-classif'],
  [22, 28, '5. Classification: SUA vector, decision boundaries, decision rule', 'S', 'L10-classif'],
  [23, 29, 'Types of classification: supervised, unsupervised, hybrid', 'S', 'L10-classif'],
  [24, 30, 'Types of classification: categorisation tree', 'S', 'L10-classif'],
  [25, 31, 'Supervised classification workflow', 'S', 'L10-supunsup'],
  [26, 32, 'Unsupervised classification workflow', 'S', 'L10-supunsup'],
  [27, 33, 'Classic supervised classifiers (figure)', 'S', 'L10-classic'],
  [28, 34, 'Parallelepiped classifier', 'S', 'L10-classic'],
  [29, 35, 'Minimum distance classifier', 'S', 'L10-classic'],
  [30, 36, 'Maximum likelihood classifier (probability surfaces)', 'S', 'L10-classic'],
  [31, 37, 'Maximum likelihood classifier (repeat with ellipse figure)', 'D', 'L10-classic', 'Same text as PDF p. 30; only the figure differs.'],
  [32, 38, 'Classic supervised classifiers: map comparison (Principe, 2012)', 'S', 'L10-classic'],
  [33, 39, 'Considerations on the training stage', 'S', 'L10-training'],
  [34, 40, 'Mixed pixel problem (Foody, 2004)', 'S', 'L10-training'],
  [35, 41, 'Parametric classifiers', 'S', 'L10-param'],
  [36, 42, 'Non-parametric: artificial neural network', 'S', 'L10-param'],
  [37, 43, 'ANN pros and cons', 'S', 'L10-param'],
  [38, 44, 'Non-parametric: decision trees (Tso & Mather, 2001)', 'S', 'L10-param'],
  [39, 45, 'Decision tree pros and cons', 'S', 'L10-param'],
  [40, 46, 'Hard (crisp) vs soft (fuzzy)', 'S', 'L10-hardsoft'],
  [41, 47, 'Hard vs fuzzy decision rules (Jensen, 1996)', 'S', 'L10-hardsoft'],
  [42, 49, '6. Ancillary data integration', 'S', 'L10-post'],
  [43, 50, '7. Post-classification processing: two cases', 'S', 'L10-post'],
  [44, 51, '7. Post-classification processing by mapping approach', 'S', 'L10-post'],
  [45, 52, '7. Semantic generalisation (MMU 1 pixel → 5 ha)', 'S', 'L10-post'],
  [46, 53, 'III. Conclusions', 'S', 'L10-post'],
  [47, 54, 'IV. References', 'R', null]
]);

LIMIT('L10', [14, 15], 'Step 2 “Geographical stratification” is listed (p. 14) and implied (p. 15, “decision on stratifying the study area”), but the PDF has no slide explaining it. The reviewer gives only the lecture-supported facts and labels any explanation as a clarification.');
LIMIT('L10', [5, 16, 17, 18, 41, 42], 'Printed slide numbers jump: slide 9 and slide 48 are not in the PDF, and PDF pages 17–18 have no visible slide number (they fall between printed slides 21 and 25). No content appears to be missing apart from the stratification slide.');
LIMIT('L10', [32], 'The map comparison (Principe, 2012) has a small legend. The reviewer only states that the three classifiers give visibly different maps of the same area and does not read off class proportions.');

NOTE('n10-qgis', 'L10', 'L10-segment', [17], 'Segmentation can be done in “QuantumGIS, R, Python or GDAL.”', 'QuantumGIS is the former name of QGIS. Both names refer to the same open-source GIS.');
NOTE('n10-strat', 'L10', 'L10-mapping', [14, 15], 'Step 2: Geographical stratification (no dedicated slide).', 'In standard practice, stratification divides a study area into more homogeneous regions (e.g., by ecoregion or terrain) that are classified separately. The slides only say that the decision to stratify depends on the characteristics of the geographical area to be mapped.');
NOTE('n10-ml', 'L10', 'L10-post', [46], '“If the class distributions are Gaussian, the maximum-likelihood classifier results in minimum total misclassification error.”', 'This holds when the class means, covariances (and prior probabilities) are well estimated from adequate training data. Poor training statistics (e.g., the Hughes phenomenon) still degrade ML.');
NOTE('n10-dup', 'L10', 'L10-classic', [30, 31], 'Maximum likelihood is presented on two consecutive slides (PDF p. 30 and p. 31) with identical text.', 'Treat them as one concept. The second slide adds the equiprobability-ellipse scatter figure.');
NOTE('n10-dtbound', 'L10', 'L10-param', [39], 'DT con: “Use of hyperplane decision boundaries parallel to feature axes — may restrict use in which classes are clearly distinguishable.”', 'Meaning: each split tests one variable at a time, so boundaries are axis-parallel. Classes separated by diagonal or curved boundaries are approximated poorly. Decision trees work best when classes are clearly distinguishable along the individual features.');

// ───────────────────────── TOPICS ─────────────────────────
topic({
  id: 'L10-system', lec: 'L10', title: 'Remote sensing system elements (recall)', p: [1, 2],
  summary: 'Information extraction is element F (interpretation and analysis) of the seven-element remote sensing process, which turns recorded data into an application such as a classified map.',
  keys: ['l10.elA', 'l10.elB', 'l10.elC', 'l10.elD', 'l10.elE', 'l10.elF', 'l10.elG'],
  blocks: [
    ['table', ['Letter', 'Element (PDF p. 2, CCRS diagram)'], [
      ['A', 'Energy source / illumination'], ['B', 'Radiation and the atmosphere'], ['C', 'Interaction with the target'],
      ['D', 'Recording by the sensor'], ['E', 'Transmission, reception, and processing'], ['F', 'Interpretation and analysis'], ['G', 'Application']], null],
    ['p', 'Printed slide 5 (PDF p. 1) shows a Landsat image beside its classified map with classes **built-up, road, bare soil, shadow, vegetation, water**. This is the kind of product information extraction makes.']
  ],
  confused: [['E: transmission, reception and processing', 'F: interpretation and analysis', 'E gets the data to the ground station and processes it into images. F extracts information from those images (this lecture).']],
  aid: 'Learning aid: “Every Radiant Interaction Records Transmitted Information Applied”, A→G.'
});

topic({
  id: 'L10-space', lec: 'L10', title: 'Pixels, digital numbers, image space and feature space', p: [5, 6, 7, 8, 9, 10, 11],
  summary: 'Each pixel has a location (row, column) and a digital number. Plotting pixel values of one band against another moves them from image space into feature (spectral) space, where clusters (spectral classes) become the basis for classification.',
  keys: ['l10.pixel', 'l10.dn', 'l10.imagespace', 'l10.featurespace', 'l10.multilayer', 'l10.specpattern', 'l10.specclass', 'l10.infoclass'],
  blocks: [
    ['p', '“**One pixel, one class**” (p. 5): a Landsat image is represented by individual pixels and their digital numbers (Phiri & Morgenroth, 2017). The drawn cell size does not represent the true Landsat scale.'],
    ['table', ['Image space', 'Spectral (feature) space'], [
      ['Each pixel has a LOCATION (row & column number) corresponding to a geographic location on earth', 'Plot (digital) pixel values in one band against another band'],
      ['Each pixel has an INTENSITY VALUE (digital number) corresponding to a measured physical quantity (e.g., surface reflectance in the red spectrum)', 'Feature space plot (2D) shows spectral patterns'],
      ['Multilayer images (e.g., Landsat 8 band 3 green, band 4 red, band 5 NIR)', 'Basis for spectral classification; extends to multiple dimensions']], 'Slides 11–12.'],
    ['fig', 'fig-featurespace', 'Image space → feature space → classified image. A pixel with Red = 9 and NIR = 55 (highlighted on slide 15) becomes one point. Groups of points form clusters, and each cluster gets one class.'],
    ['p', 'On the NIR-versus-Red plot (p. 8), the diagonal arrow marks **increasing radiance**, the direction along which brightness rises in both bands. Separate groups (“Thing One”, “Thing Two”) can be split by a line, which is the idea behind spectral classification (p. 9).']
  ],
  confused: [['Image space', 'Feature space', 'Image space is organized by WHERE the pixel is (row/column). Feature space is organized by WHAT VALUES it has (band 1 vs band 2). Neighbors in one space need not be neighbors in the other.'],
    ['Spectral class', 'Information class', 'A spectral class is a cluster of similar pixel values. An information class is a meaningful category such as water or agriculture. Unsupervised classification must MATCH spectral classes to information classes.']],
  aid: 'Learning aid: Image space = a MAP of pixels. Feature space = a GRAPH of pixel values.'
});

topic({
  id: 'L10-catcont', lec: 'L10', title: 'Mapping categorical vs continuous variables', p: [12],
  summary: 'Thematic RS classifies images into maps of categorical variables (thematic classes). Quantitative RS models continuous variables such as LAI, biomass and tree volume.',
  keys: ['l10.categorical', 'l10.continuous', 'l10.thematicrs', 'l10.quantrs'],
  blocks: [
    ['table', ['', 'Categorical variables', 'Continuous variables'], [
      ['Map type', 'Map of thematic classes', 'Map of continuous variables'],
      ['Examples', 'Land cover, burned area, flooded, agriculture, forest maps', 'Leaf area index, biomass, tree volume'],
      ['Approach', 'Thematic remote sensing → image classification', 'Quantitative remote sensing → modelling']], 'Slide 17.'],
  ],
  confused: [['Burned area map', 'Biomass map', 'A burned area map is categorical (burned / not burned) and made by classification. A biomass map is continuous (tonnes per hectare) and made by modelling.']],
  aid: 'Learning aid: CATegorical = CATegories (classes). CONTinuous = CONTinuous numbers.'
});

topic({
  id: 'L10-steps', lec: 'L10', title: 'Thematic information extraction: the eight steps', p: [14, 3],
  summary: 'Thematic information extraction has eight steps. Four are mandatory (mapping approach, feature identification and selection, classification, accuracy assessment). Ancillary data integration and post-classification processing are optional but discussed.',
  keys: ['l10.thematicext'],
  blocks: [
    ['steps', ['Definition of the mapping approach *', 'Geographical stratification', 'Image segmentation', 'Feature identification and selection *', 'Classification *', 'Ancillary data integration **', 'Post-classification processing **', 'Accuracy assessment * (next lecture)']],
    ['p', '* Mandatory.  ** Not mandatory but discussed in this lecture (slide 19).']
  ],
  confused: [['Ancillary data integration (step 6)', 'Feature selection with ancillary information (step 4)', 'Ancillary information can be an INPUT feature (step 4). Step 6 uses ancillary data AFTER classification to improve the results (post-classification sorting).']],
  aid: 'Learning aid: the mandatory steps spell “M-F-C-A”: Mapping approach, Features, Classification, Accuracy. Think “My First Class Assessment.”'
});

topic({
  id: 'L10-mapping', lec: 'L10', title: 'Mapping approach, MMU and spatial unit of analysis', p: [15, 16, 14],
  summary: 'The mapping approach sets the minimum mapping unit, the spatial unit of analysis (pixel or object), whether to stratify and whether to use ancillary data. It decides between pixel/sub-pixel and object-oriented classification.',
  keys: ['l10.mappingapproach', 'l10.mmu', 'l10.sua', 'l10.perpixel', 'l10.subpixel', 'l10.obia', 'l10.strat'],
  blocks: [
    ['table', ['The mapping approach takes into account…', '…which leads to'], [
      ['Characteristics of the satellite data to be used; technical specifications of the final map (e.g., MMU)', 'Definition of the spatial unit of analysis'],
      ['Characteristics of the geographical area to be mapped', 'Decision on stratifying the study area'],
      ['Availability of ancillary data', 'Decision on the use of ancillary data']], 'Slide 20.'],
    ['ul', ['**Minimum Mapping Unit (MMU)**: the smallest area that is represented in a map. Raster maps: MMU = pixel. Vector maps: MMU = smallest object.',
      '**Spatial Unit of Analysis (SUA)**: the unit to which classification algorithms will be applied. Image pixel → per-pixel / sub-pixel classification. Object → object-oriented image classification.']],
    ['note', 'n10-strat']
  ],
  confused: [['MMU', 'SUA', 'MMU describes the FINAL MAP (smallest area shown). SUA describes the CLASSIFICATION (the unit the algorithm labels). They can differ, and when MMU > SUA, post-processing (generalisation) is needed.'],
    ['Per-pixel classification', 'Object-oriented classification', 'Per-pixel labels each pixel. Object-oriented first segments the image into objects and labels the objects.']],
  aid: 'Learning aid: MMU = what the MAP shows. SUA = what the algorithm SEES.'
});

topic({
  id: 'L10-segment', lec: 'L10', title: 'Image segmentation', p: [17, 18],
  summary: 'Segmentation brings similar pixels together into segments (objects). It differs from classification (labeling what is present) and detection (finding where objects are).',
  keys: ['l10.segmentation', 'l10.segment', 'l10.detection'],
  blocks: [
    ['ul', ['**Segments** are clusters of pixels which are similar to each other. The process to create them is **segmentation**. It can be carried out in common software such as QuantumGIS, R, Python or GDAL, and it is commonly used in computer science and image analysis (p. 17).',
      '(a) The human eye can thematically separate different targets. (b) Clusters are detected. (c) Based on pixel clusters, a segmentation is carried out.']],
    ['table', ['Image analysis by pixel grouping (Facebook Research, 2016)', 'What it produces'], [
      ['(a) Classification', 'A label for what the image contains: “person, sheep, dog”'],
      ['(b) Detection', 'Boxes locating each object'],
      ['(c) Segmentation', 'Pixel-accurate outlines grouping the pixels of each object']], 'Slide on PDF p. 18.'],
    ['note', 'n10-qgis']
  ],
  confused: [['Detection', 'Segmentation', 'Detection draws a bounding box around an object. Segmentation assigns the object’s actual pixels to a region with an exact outline.']],
  aid: 'Learning aid: Classify = WHAT, Detect = WHERE (box), Segment = EXACT SHAPE.'
});

topic({
  id: 'L10-features', lec: 'L10', title: 'Feature identification and selection', p: [19, 20],
  summary: 'Features are the measurements fed to the classifier: first-order spectral measurements, second-order measurements derived from the image, and ancillary information. Selection reduces their number without sacrificing accuracy.',
  keys: ['l10.featsel', 'l10.firstorder', 'l10.unitemporal', 'l10.multitemporal', 'l10.secondorder', 'l10.ancillary', 'l10.fusion'],
  blocks: [
    ['ul', ['Questions (p. 19): What type of features can we use? Should we manipulate the feature space? How can we select the best features for class discrimination?',
      '**Manipulation and selection of features** are used to **reduce the number of features without sacrificing accuracy**.']],
    ['table', ['Feature group', 'Contents (p. 20)'], [
      ['Spectral measurements = 1st order measurements', 'From a single date (unitemporal approach); from multiple dates (multi-temporal approach)'],
      ['Secondary measurements derived from the image = 2nd order measurements', 'Measurements of the spatial unit being classified (e.g., phenological characterisation from an NDVI curve; mean/min/max/amplitude per class → “neo-channels”); measurements related to the neighbourhood: quantification of spatial variability within the neighbourhood (texture, spatial features), and semantic relationships of a spatial unit with its neighbours'],
      ['Ancillary information', 'Generally non-spectral geographical information (e.g., DEM and derivatives: slope, aspect, positional index). Data from images with different characteristics can also be ancillary; approaches for multisensor data may fall within data fusion']], null]
  ],
  confused: [['1st order measurements', '2nd order measurements', '1st order = the spectral values themselves (one date or several). 2nd order = values DERIVED from the image, such as texture, phenology metrics and neighbourhood relationships.'],
    ['Unitemporal', 'Multi-temporal', 'Unitemporal uses spectral measurements from a single date. Multi-temporal uses several dates (e.g., spring, summer, fall).']],
  aid: 'Learning aid: 1st order = “raw spectrum”, 2nd order = “derived from the image”, ancillary = “from outside the spectrum.”'
});

topic({
  id: 'L10-classif', lec: 'L10', title: 'Classification: definition, decision rules and types', p: [21, 22, 23, 24],
  summary: 'Classification partitions image data into discrete classes using criteria based partly on pixel values. A decision rule (classifier) assigns a label to each spatial unit. Classifiers are grouped by type of learning, assumptions on data distribution, and number of outputs per spatial unit.',
  keys: ['l10.classif', 'l10.decisionrule', 'l10.boundary', 'l10.supervised', 'l10.unsupervised', 'l10.hybrid'],
  blocks: [
    ['quote', '“process of partitioning an image data set into a discrete number of classes in accordance with specific criteria that are based, in part, on the individual image point data values”', 'McCloy, K. R. (2005)'],
    ['ul', ['Each SUA is described by a **vector of measurements** in image feature space.',
      '**Decision boundaries** give class separation.',
      '**Decision rule (classifier)**: the algorithm that allocates a specific label to a SUA, producing a map of categorical classes (slide 28).']],
    ['table', ['Type', 'Key requirement (slide 29)'], [
      ['Supervised', 'Training pixels required'], ['Unsupervised', 'No extraneous data used'], ['Hybrid', 'Uses both supervised and unsupervised classifiers']],
      'Classification is not limited to pixel values: indices, distance from some target and data transformations can also be used.'],
    ['fig', 'fig-classtree', 'Three ways to categorise classifiers (slide 30): type of learning (supervised / unsupervised), assumptions on data distribution (parametric / non-parametric), and number of outputs for each spatial unit (hard (crisp) / soft (fuzzy)).']
  ],
  confused: [['Decision rule (classifier)', 'Decision boundary', 'The decision rule is the ALGORITHM that assigns labels. Decision boundaries are the resulting DIVIDING SURFACES between classes in feature space.']],
  aid: 'Learning aid: “Learn, Assume, Output” are the three questions to ask about any classifier.'
});

topic({
  id: 'L10-supunsup', lec: 'L10', title: 'Supervised and unsupervised classification workflows', p: [25, 26],
  summary: 'Supervised classification starts from classes and training pixels. Unsupervised classification starts from arbitrary cluster centers, iterates until the centroids stop changing, and then matches spectral classes to information classes.',
  keys: ['l10.training', 'l10.centroid', 'l10.iteration'],
  blocks: [
    ['h', 'Supervised (slide 31)'],
    ['steps', ['Decision of ground cover types (classes)', 'Choosing representative pixels per class', 'Classifier’s parameter estimation using training data', 'Labeling of pixels according to class', 'Summarize result of classification (maps or tables)', 'Accuracy assessment']],
    ['h', 'Unsupervised (slide 32)'],
    ['steps', ['Min and max categories (classes) specified', 'Arbitrary pixels set as cluster centers', 'Class centroids are defined', 'Assignment of pixels to nearest centroids', 'Calculation of new centroids. Different set of centroids? YES → repeat the assignment; NO → continue', 'Matching of information classes to spectral classes']],
    ['p', 'The slide example labels classes A = water, B = agriculture, C = rock. In the supervised case these are chosen first; in the unsupervised case they are assigned after clustering.']
  ],
  confused: [['Supervised', 'Unsupervised', 'Supervised: the analyst defines classes and training pixels BEFORE classifying. Unsupervised: the algorithm clusters first, and the analyst names the clusters AFTERWARDS.']],
  aid: 'Learning aid: Supervised = “teach, then sort.” Unsupervised = “sort, then name.”'
});

topic({
  id: 'L10-classic', lec: 'L10', title: 'Classic supervised classifiers', p: [27, 28, 29, 30, 31, 32],
  summary: 'The parallelepiped classifier uses min/max boxes, minimum distance uses the closest class mean, and maximum likelihood uses class means, variances and covariances under a normal-distribution assumption.',
  keys: ['l10.parallelepiped', 'l10.mindist', 'l10.ml', 'l10.equiprob'],
  blocks: [
    ['fig', 'fig-classifiers', 'The same training data in feature space (band 3 vs band 4 DN; classes water, urban, forest, crop, soil, heather) under three classifiers: boxes, nearest mean, and probability ellipses.'],
    ['table', ['Classifier', 'How it assigns', 'Pro', 'Con'], [
      ['Parallelepiped', 'Thresholds: min and max DN for each class (a box per class)', 'Simple to train and use, computationally fast', 'Unclassified pixels in gaps between boxes, and a region of overlapping parallelepipeds'],
      ['Minimum distance', 'Class centroid = mean value by band for each class; assign to the closest centroid', 'Mathematically simple and computationally efficient', 'Insensitive to different degrees of variance in spectral response data'],
      ['Maximum likelihood', 'Uses the variance and covariance of class spectra; often assumes normally distributed spectral responses; class membership by probability with some threshold', 'Takes variation in spectral response into consideration', 'Computationally intensive; multimodal classes require extra care when training']], 'Slides 34–37.'],
    ['note', 'n10-dup'],
    ['p', 'Slide 38 (Principe, 2012) shows that the three classifiers give visibly different maps from the same image. The choice of classifier matters.']
  ],
  confused: [['Minimum distance', 'Maximum likelihood', 'Both use class means. Only maximum likelihood also uses variance and covariance, so a widely spread class can “claim” pixels that are farther from its mean.'],
    ['Parallelepiped gaps', 'Parallelepiped overlap', 'Gaps: a pixel falls inside no box, so it is unclassified. Overlap: a pixel falls inside two boxes, so it is ambiguous (the region of inseparability).']],
  aid: 'Learning aid: P-M-M = Box, Ruler, Bell curve. Parallelepiped draws boxes, minimum distance measures with a ruler, maximum likelihood fits bell curves.'
});

topic({
  id: 'L10-training', lec: 'L10', title: 'The training stage, mixed pixels and the Hughes phenomenon', p: [33, 34],
  summary: 'The training phase dictates the result. Sampling is limited by cost, the number of samples affects statistical estimates, many bands with few samples cause the Hughes phenomenon, and mixed pixels contaminate training areas.',
  keys: ['l10.hughes', 'l10.mixel', 'l10.subpixeltarget', 'l10.boundarymix', 'l10.continuum', 'l10.psf'],
  blocks: [
    ['ul', ['Training phase dictates results of classification.', 'Restrictions on sampling cost → inadequate sampling.', 'Number of samples affects estimated statistical parameters.', '**Hughes phenomenon**: curse of dimensionality.', '**“Mixels”** in training areas.']],
    ['fig', 'fig-mixed', 'Four causes of mixed pixels (Foody, 2004). A: small, sub-pixel targets. B: boundaries of discrete land cover classes. C: gradual transition between land cover classes (continuum). D: contribution of areas outside the area represented by a pixel.'],
    ['p', 'Clarification (standard explanation, not on the slide): the Hughes phenomenon means that with a fixed number of training samples, adding more bands (dimensions) eventually lowers classification accuracy, because there are too few samples to estimate the class statistics reliably.']
  ],
  confused: [['Mixed pixel (cause B: boundary)', 'Mixed pixel (cause C: continuum)', 'B: a sharp border between two discrete classes crosses the pixel. C: the land cover changes gradually, so there is no sharp border at all.']],
  aid: 'Learning aid: “Hughes = Huge number of bands, too few samples.”'
});

topic({
  id: 'L10-param', lec: 'L10', title: 'Parametric vs non-parametric classifiers: ANN and decision trees', p: [35, 36, 37, 38, 39],
  summary: 'Parametric classifiers (e.g., maximum likelihood) assume a data distribution. Non-parametric classifiers such as artificial neural networks and decision trees make no such assumption, and each has its own strengths and weaknesses.',
  keys: ['l10.parametric', 'l10.nonparametric', 'l10.ann', 'l10.neuron', 'l10.blackbox', 'l10.dt', 'l10.recursive'],
  blocks: [
    ['h', 'Parametric classifiers (slide 41)'],
    ['ul', ['e.g., **maximum likelihood**; rely on assumptions of **data distribution**.', 'Performance depends on how well the data match the pre-defined model, and on the accuracy of model parameter estimation.', 'Suffer from the **Hughes phenomenon**: difficult to have a significant number of training pixels.', 'Not adequate to **integrate ancillary data**: difficulties classifying data at different measurement scales and units.']],
    ['h', 'Artificial Neural Network (ANN) (slides 42–43)'],
    ['fig', 'fig-ann', 'Remotely sensed discriminating variables enter the input layer, pass through a hidden layer, and the output layer gives class 1…n. All neurons are interlinked by weighted connections.'],
    ['table', ['ANN pros', 'ANN cons'], [
      ['Non-parametric: no requirement on the assumed statistical distribution of data', 'Semantically poor (black box)'],
      ['High computation rate → real-time processing of huge datasets', 'Training can be computationally demanding and slow'],
      ['', 'Perceived as difficult to apply successfully: hard to select network architecture, initial values of parameters, number of iterations required, choice of initial weights']], null],
    ['h', 'Decision Trees (DT) (slides 44–45)'],
    ['fig', 'fig-dtree', 'Example tree (Tso & Mather, 2001): if NIR > 50% and red < 12% → vegetation; if NIR < 5% and red < 10% → water; other branches are left undetermined (“?”).'],
    ['table', ['DT pros', 'DT cons'], [
      ['Not based on any assumption on training data distribution', 'Use of hyperplane decision boundaries parallel to feature axes'],
      ['Can reveal nonlinear and hierarchical relationships between input variables to predict class membership', 'May restrict use to cases in which classes are clearly distinguishable'],
      ['Set of rules is easy to interpret', ''], ['Unlike ANN, does not need extensive design and training', ''], ['Good computational efficiency', '']], null],
    ['note', 'n10-dtbound']
  ],
  confused: [['ANN', 'Decision tree', 'Both are non-parametric. ANN is a black box that needs careful design and training. DT rules are easy to interpret and need no extensive design or training, but its boundaries are axis-parallel.'],
    ['Parametric', 'Non-parametric', 'Parametric assumes a distribution (normal for ML) and estimates its parameters. Non-parametric makes no such assumption, so it can integrate ancillary data with different scales and units.']],
  aid: 'Learning aid: “Trees Talk, Nets Hide.” Decision-tree rules can be read; neural-network weights cannot.'
});

topic({
  id: 'L10-hardsoft', lec: 'L10', title: 'Hard (crisp) vs soft (fuzzy) classification', p: [40, 41, 46],
  summary: 'Hard classification forces each pixel into one class. Soft (fuzzy) classification allows multiple, partial memberships (grades from 0 to 1), which suits mixed pixels and class continua.',
  keys: ['l10.hard', 'l10.soft', 'l10.membership', 'l10.grade'],
  blocks: [
    ['table', ['Hard (crisp)', 'Soft (fuzzy)'], [['A pixel is constrained to a single class', 'A pixel may display multiple and partial class membership; proposed alternative to deal with “mixels”']], 'Slide 46.'],
    ['fig', 'fig-fuzzy', 'Jensen (1996), hypothetical NIR brightness. Hard rules: 0–30 → water, 30–60 → forested wetland, 60–90 → upland forest. Fuzzy membership functions overlap: water falls from 1 at 24 to 0 at 36, forested wetland is 1 from 36 to 55, upland forest rises from 55 to 70.'],
    ['ul', ['Decision rules are defined as **membership functions** for each class.', 'Membership functions allocate to each pixel a real value between 0 and 1: the **membership grade**.',
      'Reading the figure: at brightness 30 a pixel is about 0.5 water and 0.5 forested wetland. At 60 it is about 0.7 forested wetland and 0.3 upland forest.']],
    ['p', 'Conclusion (slide 53): soft classifications have notable advantages over hard ones, including the ability to discriminate **physical class continua** and to provide estimates of **subpixel class component fractions**.']
  ],
  confused: [['Hard decision rule at 45', 'Fuzzy membership at 45', 'Hard: 45 is in 30–60, so the pixel is forested wetland only. Fuzzy: 45 lies on the plateau (36–55), so forested wetland = 1 and the other classes = 0. The two agree here and differ near the class edges.']],
  aid: 'Learning aid: Hard = “one box per pixel.” Soft = “percent of each class per pixel.”'
});

topic({
  id: 'L10-post', lec: 'L10', title: 'Ancillary data integration, post-classification processing and conclusions', p: [42, 43, 44, 45, 46],
  summary: 'Ancillary data can refine a classified map through post-classification sorting. Post-processing is needed when the MMU exceeds the SUA (generalisation, upscaling) or when a vector map is made from pixels (raster-to-vector conversion).',
  keys: ['l10.ancint', 'l10.pcsort', 'l10.generalisation', 'l10.upscaling', 'l10.r2v', 'l10.semgen', 'l10.heuristic'],
  blocks: [
    ['h', '6. Ancillary data integration (slide 49)'],
    ['ul', ['Ancillary data can be integrated **after** image classification to improve the results.', '**Post-classification sorting**: application of very specific rules to the classified image and geographical ancillary data (e.g., elevation, slope, aspect).', 'Strategies based on expert-, rule-, and knowledge-based systems.']],
    ['h', '7. Post-classification processing (slide 50)'],
    ['table', ['Case', 'Post-processing required'], [
      ['The MMU of the final map is larger than the spatial unit used in the classification', 'Map generalisation ↔ upscaling'],
      ['The final map has a vector format and the SUA was the pixel', 'Raster to vector conversion']], 'Post processing is required in two cases.'],
    ['table', ['Mapping approach (slide 51)', 'Processing chain'], [
      ['Raster map, MMU = pixel size of input data', 'Feature selection > image classification > accuracy assessment'],
      ['Raster map, MMU > pixel size', 'Feature selection > image classification > post-processing (upscaling) > accuracy assessment'],
      ['Vector map, SUA = image pixel', 'Feature selection > image classification > post-processing (generalisation + raster to vector conversion) > accuracy assessment'],
      ['Vector map, SUA = object', 'Image segmentation (generate the objects) > feature selection > image classification > post-processing (generalisation) > accuracy assessment']], null],
    ['p', '**Semantic generalisation** (slide 52): a classified map with MMU = 1 pixel (30 m × 30 m) is generalised in steps to MMU = 5 ha (classes shrubland, forest, agriculture, bare soil), so small patches are absorbed into their surroundings.'],
    ['h', 'Conclusions (slide 53)'],
    ['ul', ['Thematic classification methods are either **heuristic (nonparametric)** or based on statistical distribution assumptions (**parametric**).', 'No classifier is best for all applications. Performance is strongly **data-dependent** if class signatures overlap. If class distributions are Gaussian, maximum likelihood gives minimum total misclassification error.', 'Soft classifications can discriminate physical class continua and estimate subpixel class fractions.']],
    ['note', 'n10-ml']
  ],
  confused: [['Upscaling / generalisation', 'Raster to vector conversion', 'Generalisation and upscaling fix a SIZE mismatch (MMU > SUA). Raster-to-vector conversion fixes a FORMAT mismatch (pixel SUA but vector map).']],
  aid: 'Learning aid: post-processing answers “Too small?” (generalise) and “Wrong format?” (vectorize).'
});

// ───────────────────────── CONCEPTS ─────────────────────────
C('L10', 'L10-system', 'l10.elA', 'Energy source or illumination (element A)', ['energy source', 'illumination', 'energy source illumination', 'energy source/illumination'], 'First element of the remote sensing process, which provides the electromagnetic energy.', [2]);
C('L10', 'L10-system', 'l10.elB', 'Radiation and the atmosphere (element B)', ['radiation and the atmosphere', 'radiation and atmosphere'], 'Element of the RS process in which energy travels through, and interacts with, the air layer on its way to and from the target.', [2]);
C('L10', 'L10-system', 'l10.elC', 'Interaction with the target (element C)', ['interaction with the target', 'interaction with target'], 'Element of the RS process in which energy meets the surface feature and is reflected, absorbed or emitted.', [2]);
C('L10', 'L10-system', 'l10.elD', 'Recording by the sensor (element D)', ['recording by the sensor', 'recording of energy by the sensor', 'recording by sensor'], 'Element of the RS process in which the instrument on the platform captures the energy coming from the target.', [2]);
C('L10', 'L10-system', 'l10.elE', 'Transmission, reception, and processing (element E)', ['transmission reception and processing', 'transmission, reception and processing'], 'Element of the RS process in which data are sent to a receiving station and processed into images.', [2]);
C('L10', 'L10-system', 'l10.elF', 'Interpretation and analysis (element F)', ['interpretation and analysis'], 'Element of the RS process in which information is extracted from the processed imagery (the subject of Lecture 10).', [2]);
C('L10', 'L10-system', 'l10.elG', 'Application (element G)', ['application'], 'Final element of the RS process: using the extracted information to solve a problem or better understand the target.', [2]);
C('L10', 'L10-space', 'l10.pixel', 'Pixel', ['picture element', 'pixels'], 'Basic image cell that has a location (row & column) and an intensity value; the slide title says one of these gets one class.', [5, 6]);
C('L10', 'L10-space', 'l10.dn', 'Digital number (DN)', ['digital number', 'dn', 'digital numbers', 'pixel value', 'brightness value', 'intensity value'], 'Intensity value of a pixel, corresponding to a measured physical quantity such as surface reflectance in the red spectrum.', [5, 6]);
C('L10', 'L10-space', 'l10.imagespace', 'Image space', [], 'Representation in which each pixel is placed by its row and column number, corresponding to its geographic location on earth.', [6, 7, 10]);
C('L10', 'L10-space', 'l10.featurespace', 'Feature space (spectral space)', ['feature space', 'spectral space', 'feature space plot', 'spectral feature space'], 'Plot of (digital) pixel values in one band against another band; the 2D version shows spectral patterns and is the basis for spectral classification.', [7, 8, 9, 10, 11]);
C('L10', 'L10-space', 'l10.multilayer', 'Multilayer image', ['multilayer images', 'multiband image', 'multispectral image', 'multi-layer image'], 'Image made of several co-registered bands (e.g., Landsat 8 band 3 green, band 4 red, band 5 NIR) for the same pixels.', [6, 7]);
C('L10', 'L10-space', 'l10.specpattern', 'Spectral pattern', ['spectral patterns', 'spectral signature pattern'], 'Characteristic arrangement of pixel values shown by a feature space plot, which is the basis for spectral classification.', [7]);
C('L10', 'L10-space', 'l10.specclass', 'Spectral class', ['spectral classes', 'cluster', 'spectral cluster'], 'Group of pixels that cluster together in feature space because of similar values; unsupervised classification later matches these to meaningful categories.', [9, 11, 26]);
C('L10', 'L10-space', 'l10.infoclass', 'Information class', ['information classes', 'info class', 'thematic class', 'land cover class'], 'Meaningful category (e.g., water, agriculture, rock) that the map user cares about, to which spectral clusters are matched.', [25, 26]);
C('L10', 'L10-catcont', 'l10.categorical', 'Categorical variable', ['categorical variables', 'map of categorical variables', 'thematic classes', 'map of thematic classes'], 'Kind of mapped variable expressed as discrete classes, such as land cover, burned area, flooded, agriculture and forest maps.', [12]);
C('L10', 'L10-catcont', 'l10.continuous', 'Continuous variable', ['continuous variables', 'map of continuous variables'], 'Kind of mapped variable that takes a range of numeric values, such as leaf area index, biomass and tree volume.', [12]);
C('L10', 'L10-catcont', 'l10.thematicrs', 'Thematic remote sensing', ['thematic rs', 'image classification'], 'Branch of RS that maps categorical variables (thematic classes) through image classification.', [12]);
C('L10', 'L10-catcont', 'l10.quantrs', 'Quantitative remote sensing', ['quantitative rs', 'modelling', 'modeling'], 'Branch of RS that maps continuous variables (e.g., LAI, biomass, tree volume) through modelling.', [12]);
C('L10', 'L10-steps', 'l10.thematicext', 'Thematic information extraction', ['thematic information extraction from satellite images', 'information extraction'], 'Eight-step procedure from mapping approach to accuracy assessment, of which four steps are mandatory.', [14]);
C('L10', 'L10-mapping', 'l10.mappingapproach', 'Definition of the mapping approach', ['mapping approach', 'definition of mapping approach'], 'First, mandatory step that weighs the data characteristics, final-map specifications, the area to be mapped and ancillary data availability.', [14, 15]);
C('L10', 'L10-mapping', 'l10.mmu', 'Minimum mapping unit (MMU)', ['minimum mapping unit', 'mmu'], 'Smallest area that is represented in a map: a pixel for raster maps, the smallest object for vector maps.', [15, 16, 44, 45], { acr: 'MMU' });
C('L10', 'L10-mapping', 'l10.sua', 'Spatial unit of analysis (SUA)', ['spatial unit of analysis', 'sua'], 'Unit to which classification algorithms will be applied: either an image pixel or an object.', [16, 22], { acr: 'SUA' });
C('L10', 'L10-mapping', 'l10.perpixel', 'Per-pixel classification', ['per pixel classification', 'pixel-based classification', 'pixel based classification', 'per-pixel'], 'Classification that uses the image pixel as the spatial unit of analysis, labeling every pixel individually.', [16]);
C('L10', 'L10-mapping', 'l10.subpixel', 'Sub-pixel classification', ['subpixel classification', 'sub pixel classification', 'subpixel'], 'Pixel-based approach that estimates the fractions of class components within each pixel instead of a single label.', [16, 46]);
C('L10', 'L10-mapping', 'l10.obia', 'Object-oriented image classification', ['object oriented image classification', 'object-based classification', 'object based image analysis', 'obia', 'object-oriented classification', 'object based classification', 'object-based image analysis'], 'Classification in which the spatial unit of analysis is an object (a segment of similar pixels) rather than a single pixel.', [16, 44]);
C('L10', 'L10-mapping', 'l10.strat', 'Geographical stratification', ['stratification', 'geographic stratification', 'stratifying the study area'], 'Step 2 of thematic information extraction, decided by the characteristics of the geographical area to be mapped.', [14, 15]);
C('L10', 'L10-segment', 'l10.segmentation', 'Image segmentation', ['segmentation'], 'Process of bringing pixels together into clusters of similar pixels, carried out with tools such as QGIS, R, Python or GDAL.', [14, 17, 18, 44]);
C('L10', 'L10-segment', 'l10.segment', 'Segment', ['segments', 'image object', 'object'], 'Cluster of pixels which are similar to each other in the measured domains.', [17]);
C('L10', 'L10-segment', 'l10.detection', 'Detection (object detection)', ['detection', 'object detection'], 'Image analysis result that locates each object with a bounding box, as in the “person, sheep, dog” example, without delineating exact pixel outlines.', [18]);
C('L10', 'L10-features', 'l10.featsel', 'Feature identification and selection', ['feature selection', 'feature identification', 'feature identification and selection'], 'Mandatory step whose manipulation and selection of inputs reduce their number without sacrificing accuracy.', [14, 19, 20]);
C('L10', 'L10-features', 'l10.firstorder', 'First-order measurements (spectral measurements)', ['first order measurements', '1st order measurements', 'spectral measurements', 'first-order measurements'], 'Spectral measurements taken directly from one date or multiple dates.', [20]);
C('L10', 'L10-features', 'l10.unitemporal', 'Unitemporal approach', ['unitemporal', 'single date approach', 'uni-temporal approach'], 'Use of spectral measurements from a single date.', [20]);
C('L10', 'L10-features', 'l10.multitemporal', 'Multi-temporal approach', ['multitemporal approach', 'multi-temporal', 'multitemporal', 'multi temporal approach'], 'Use of spectral measurements from multiple dates (e.g., spring, summer and fall images).', [20]);
C('L10', 'L10-features', 'l10.secondorder', 'Second-order measurements', ['second order measurements', '2nd order measurements', 'secondary measurements', 'secondary measurements derived from the image'], 'Measurements derived from the image: properties of the spatial unit (e.g., phenology), neighbourhood variability (texture, spatial features) and semantic relationships with neighbours.', [20]);
C('L10', 'L10-features', 'l10.ancillary', 'Ancillary information (ancillary data)', ['ancillary information', 'ancillary data', 'ancillary'], 'Generally non-spectral geographical information such as a DEM and its derivatives (slope, aspect); data from images with different characteristics can also count.', [20, 42]);
C('L10', 'L10-features', 'l10.fusion', 'Data fusion', ['image fusion', 'multisensor data fusion', 'fusion'], 'Approaches for combining multisensor data, for example images with different characteristics used together.', [20]);
C('L10', 'L10-classif', 'l10.classif', 'Classification', ['image classification', 'classification process'], 'Process of partitioning an image data set into a discrete number of classes according to specific criteria based, in part, on the individual image point data values (McCloy, 2005).', [1, 21, 22], { x: ['L9:6'] });
C('L10', 'L10-classif', 'l10.decisionrule', 'Decision rule (classifier)', ['decision rule', 'classifier', 'classification algorithm'], 'Algorithm that allocates a specific label to a spatial unit of analysis.', [22]);
C('L10', 'L10-classif', 'l10.boundary', 'Decision boundary', ['decision boundaries', 'class boundary'], 'Dividing line or surface in feature space that gives class separation.', [9, 22]);
C('L10', 'L10-classif', 'l10.supervised', 'Supervised classification', ['supervised'], 'Type of classification that requires training pixels.', [23, 24, 25]);
C('L10', 'L10-classif', 'l10.unsupervised', 'Unsupervised classification', ['unsupervised', 'clustering'], 'Type of classification that uses no extraneous data; pixels are clustered first and clusters are labeled afterwards.', [23, 24, 26]);
C('L10', 'L10-classif', 'l10.hybrid', 'Hybrid classification', ['hybrid'], 'Type of classification that uses both supervised and unsupervised classifiers.', [23]);
C('L10', 'L10-supunsup', 'l10.training', 'Training data (training pixels)', ['training pixels', 'training data', 'training samples', 'training areas', 'training sites', 'representative pixels'], 'Representative pixels chosen per class and used to estimate the classifier’s parameters.', [23, 25, 33]);
C('L10', 'L10-supunsup', 'l10.centroid', 'Cluster center (class centroid)', ['cluster center', 'centroid', 'class centroid', 'cluster centre', 'class mean'], 'Point around which pixels are grouped. Unsupervised classification starts from arbitrary ones and recalculates them after each pass.', [26, 29]);
C('L10', 'L10-supunsup', 'l10.iteration', 'Iterative clustering (convergence check)', ['iteration', 'iterative clustering', 'convergence', 'recalculation of centroids'], 'Loop in unsupervised classification: new centroids are calculated and pixels reassigned until the set of centroids no longer changes.', [26]);
C('L10', 'L10-classic', 'l10.parallelepiped', 'Parallelepiped classifier', ['parallelepiped', 'box classifier', 'parallelepiped classification'], 'Supervised classifier using thresholds (min and max DNs) for each class; simple and fast, but leaves unclassified pixels in gaps and has overlap regions.', [27, 28, 32]);
C('L10', 'L10-classic', 'l10.mindist', 'Minimum distance classifier', ['minimum distance', 'minimum distance to means', 'minimum distance to mean classifier', 'nearest mean classifier'], 'Supervised classifier that assigns each pixel to the class whose mean value by band is closest; simple and efficient but insensitive to differences in variance.', [27, 29, 32]);
C('L10', 'L10-classic', 'l10.ml', 'Maximum likelihood classifier', ['maximum likelihood', 'mlc', 'ml classifier', 'maximum likelihood classification'], 'Supervised classifier that uses the variance and covariance of class spectra, often assumes normal distributions, and assigns class membership by probability with a threshold.', [27, 30, 31, 32, 35, 46]);
C('L10', 'L10-classic', 'l10.equiprob', 'Equiprobability contours', ['equiprobability contour', 'equiprobability ellipses', 'probability contours', 'equal probability contours'], 'Ellipses around class means, joining points of equal probability, drawn for the probability-based classifier in feature space.', [27, 31]);
C('L10', 'L10-training', 'l10.hughes', 'Hughes phenomenon', ['curse of dimensionality', 'hughes effect', 'hughes'], 'Curse of dimensionality: with many bands and limited training pixels, the class statistics cannot be estimated well and accuracy suffers.', [33, 35]);
C('L10', 'L10-training', 'l10.mixel', 'Mixed pixel (mixel)', ['mixel', 'mixels', 'mixed pixel', 'mixed pixels', 'mixed pixel problem'], 'Pixel whose area contains more than one land cover class, causing problems in training areas and for hard classification.', [33, 34, 40]);
C('L10', 'L10-training', 'l10.subpixeltarget', 'Small sub-pixel targets (mixed pixel cause A)', ['sub-pixel targets', 'subpixel targets', 'small subpixel targets', 'presence of small sub-pixel targets'], 'Cause of mixed pixels in which objects smaller than the cell, such as isolated trees or houses, fall inside it.', [34]);
C('L10', 'L10-training', 'l10.boundarymix', 'Boundaries of discrete classes (mixed pixel cause B)', ['boundaries of discrete land cover classes', 'class boundaries', 'boundary pixels', 'presence of boundaries'], 'Cause of mixed pixels in which a sharp border between two discrete land cover classes crosses the cell.', [34]);
C('L10', 'L10-training', 'l10.continuum', 'Gradual transition (continuum) (mixed pixel cause C)', ['gradual transition', 'continuum', 'gradual transition between land cover classes', 'class continuum'], 'Cause of mixed pixels in which land cover changes gradually from one class to another, with no sharp border.', [34]);
C('L10', 'L10-training', 'l10.psf', 'Contribution from outside the pixel area (mixed pixel cause D)', ['contribution of areas outside the area represented by a pixel', 'outside contribution', 'point spread function', 'adjacency effect'], 'Cause of mixed pixels in which signal from ground outside the cell’s nominal footprint contributes to its value.', [34]);
C('L10', 'L10-param', 'l10.parametric', 'Parametric classifier', ['parametric', 'parametric classification'], 'Classifier (e.g., maximum likelihood) that relies on assumptions of data distribution, whose performance depends on how well data match the model and on parameter estimation.', [35, 46]);
C('L10', 'L10-param', 'l10.nonparametric', 'Non-parametric classifier', ['nonparametric', 'non-parametric', 'nonparametric classifier', 'heuristic classifier'], 'Classifier (e.g., ANN, decision tree) with no requirement on the assumed statistical distribution of the data.', [36, 37, 38, 39, 46]);
C('L10', 'L10-param', 'l10.ann', 'Artificial neural network (ANN)', ['artificial neural network', 'ann', 'neural network', 'neural net'], 'Form of artificial intelligence imitating brain functions, made of layers of interlinked processing units with weighted connections that learn regularities from training data.', [36, 37], { acr: 'ANN' });
C('L10', 'L10-param', 'l10.neuron', 'Neuron (processing unit)', ['neurons', 'processing unit', 'node', 'processing units'], 'Processing unit in a layer of an artificial neural network, linked to others by weighted connections.', [36]);
C('L10', 'L10-param', 'l10.blackbox', 'Black box (semantically poor)', ['black box', 'semantically poor'], 'Con of artificial neural networks: the learned weights cannot be read as meaningful rules.', [37]);
C('L10', 'L10-param', 'l10.dt', 'Decision tree (DT)', ['decision tree', 'decision trees', 'dt', 'classification tree'], 'Knowledge- and hierarchical-rule-based non-parametric classifier that predicts class membership by recursively partitioning a dataset into homogeneous subsets.', [38, 39], { acr: 'DT' });
C('L10', 'L10-param', 'l10.recursive', 'Recursive partitioning', ['recursive partition', 'recursive splitting', 'recursive partitioning of a dataset'], 'Repeatedly splitting a dataset into more homogeneous subsets: how a decision tree predicts class membership.', [38]);
C('L10', 'L10-hardsoft', 'l10.hard', 'Hard (crisp) classification', ['hard classification', 'crisp classification', 'hard', 'crisp'], 'Classification in which each pixel is constrained to a single class.', [24, 40, 41]);
C('L10', 'L10-hardsoft', 'l10.soft', 'Soft (fuzzy) classification', ['soft classification', 'fuzzy classification', 'soft', 'fuzzy'], 'Classification in which a pixel may display multiple and partial class membership, proposed as an alternative to deal with mixels.', [24, 40, 41, 46]);
C('L10', 'L10-hardsoft', 'l10.membership', 'Membership function', ['membership functions', 'fuzzy membership function'], 'Fuzzy decision rule defined for each class that allocates each pixel a real value between 0 and 1.', [41]);
C('L10', 'L10-hardsoft', 'l10.grade', 'Membership grade', ['membership value', 'degree of membership', 'grade of membership'], 'Real value between 0 and 1 expressing how strongly a pixel belongs to a class in fuzzy classification.', [41]);
C('L10', 'L10-post', 'l10.ancint', 'Ancillary data integration', ['ancillary data integration', 'integration of ancillary data'], 'Optional step 6: integrating non-image geographic data after classification to improve the results.', [14, 42]);
C('L10', 'L10-post', 'l10.pcsort', 'Post-classification sorting', ['post classification sorting', 'postclassification sorting'], 'Application of very specific rules to the classified image and geographical ancillary data such as elevation, slope and aspect.', [42]);
C('L10', 'L10-post', 'l10.generalisation', 'Map generalisation', ['generalisation', 'generalization', 'map generalization'], 'Post-processing required when the MMU of the final map is larger than the spatial unit used in the classification.', [43, 44]);
C('L10', 'L10-post', 'l10.upscaling', 'Upscaling', ['up-scaling', 'up scaling'], 'Post-processing paired with map generalisation for raster maps whose MMU is larger than the input pixel size.', [43, 44]);
C('L10', 'L10-post', 'l10.r2v', 'Raster to vector conversion', ['raster-to-vector conversion', 'vectorization', 'vectorisation', 'raster to vector'], 'Post-processing required when the final map has a vector format but the SUA was the pixel.', [43, 44]);
C('L10', 'L10-post', 'l10.semgen', 'Semantic generalisation', ['semantic generalization'], 'Generalising a classified map from MMU = 1 pixel (30 m × 30 m) to a larger MMU (e.g., 5 ha) so that small patches are merged into neighboring classes.', [45]);
C('L10', 'L10-post', 'l10.heuristic', 'Heuristic (nonparametric) methods', ['heuristic', 'heuristic methods', 'heuristic classification'], 'In the conclusions, the group of thematic classification methods that are not based on statistical distribution assumptions.', [46]);

// ───────────────────────── IDENTIFICATION ─────────────────────────
I('L10-I01', 'L10', 'L10-space', 2, 'visual', 'On slide 15 a pixel with Red (band 4) = 9 and NIR (band 5) = 55 is moved from a grid to a scatter plot. Into what is it moved?', 'Feature space', ['spectral space', 'feature space plot'], 'Image space → feature space: the pixel becomes a point at (9, 55).', [10], 'l10.featurespace');
I('L10-I02', 'L10', 'L10-space', 2, 'visual', 'On a NIR-vs-Red plot, the diagonal arrow pointing away from the origin represents increasing ______.', 'Radiance', ['brightness', 'increasing radiance'], 'Slide 13 labels the diagonal “= Increasing Radiance.”', [8], 'l10.featurespace');
I('L10-I03', 'L10', 'L10-mapping', 2, 'scenario', 'A raster land cover map is produced directly from 30 m Landsat pixels. What is its MMU?', 'One pixel (30 m × 30 m)', ['pixel', 'a pixel', 'one pixel', '30 m pixel', '30 m x 30 m', 'the pixel'], 'Slide 21: for raster maps, MMU = pixel.', [16], 'l10.mmu');
I('L10-I04', 'L10', 'L10-mapping', 2, 'scenario', 'For a vector map, the MMU equals the ______.', 'Smallest object', ['smallest object mapped', 'smallest polygon'], 'Slide 21: vector maps, MMU = smallest object.', [16], 'l10.mmu');
I('L10-I05', 'L10', 'L10-mapping', 2, 'scenario', 'In the mapping approach, the characteristics of the geographical area to be mapped lead to which decision?', 'Decision on stratifying the study area', ['stratification', 'stratifying the study area', 'whether to stratify', 'geographical stratification'], 'Slide 20.', [15], 'l10.strat', { kw: [['stratif']] });
I('L10-I06', 'L10', 'L10-mapping', 2, 'scenario', 'In the mapping approach, the characteristics of the satellite data and the technical specifications of the final map (e.g., MMU) lead to the definition of the ______.', 'Spatial unit of analysis', ['sua', 'spatial unit of analysis (sua)'], 'Slide 20.', [15], 'l10.sua');
I('L10-I07', 'L10', 'L10-segment', 2, 'visual', 'In the Facebook Research (2016) example, boxes are drawn around the person, each sheep and the dog, but without exact outlines. Which kind of analysis is this?', 'Detection', ['object detection'], 'Panel (b) of slide p. 18.', [18], 'l10.detection');
I('L10-I08', 'L10', 'L10-segment', 2, 'visual', 'In the same example, the image is only labeled “person, sheep, dog” with no locations. Which kind of analysis is this?', 'Classification', ['image classification'], 'Panel (a) of slide p. 18.', [18], 'l10.classif');
I('L10-I09', 'L10', 'L10-features', 2, 'scenario', 'An NDVI curve through the season is summarized as min, max and amplitude for each spatial unit and stacked as new layers (“neo-channels”). Which feature group is this?', 'Second-order measurements', ['2nd order measurements', 'secondary measurements', 'second order measurements', 'secondary measurements derived from the image'], 'Slide 26: measurements of the spatial unit being classified, e.g., phenological characterisation, are 2nd order.', [20], 'l10.secondorder');
I('L10-I10', 'L10', 'L10-features', 2, 'scenario', 'A DEM with its slope and aspect layers is added as input to a land cover classifier. These layers are ______ information.', 'Ancillary', ['ancillary information', 'ancillary data'], 'Slide 26: ancillary information = non-spectral geographical information.', [20], 'l10.ancillary');
I('L10-I11', 'L10', 'L10-features', 3, 'scenario', 'Texture computed in a moving window around each pixel quantifies spatial variability within the ______.', 'Neighbourhood', ['neighborhood', 'neighbourhood of the pixel'], 'Slide 26: measurements related to the neighbourhood — quantification of spatial variability (texture, spatial features).', [20], 'l10.secondorder');
I('L10-I12', 'L10', 'L10-classif', 2, 'def', 'Author of the definition: classification is the “process of partitioning an image data set into a discrete number of classes in accordance with specific criteria…”', 'McCloy', ['mccloy 2005', 'k r mccloy', 'mccloy k r'], 'Slide 27 quotes McCloy, K. R. (2005).', [21], 'l10.classif');
I('L10-I13', 'L10', 'L10-classif', 2, 'list', 'The three criteria for categorising classifiers (slide 30).', 'Type of learning, assumptions on data distribution, number of outputs for each spatial unit', ['type of learning assumptions on data distribution number of outputs'], 'Learning → supervised/unsupervised; assumptions → parametric/non-parametric; outputs → hard/soft.', [24], 'l10.classif', { kw: [['learning'], ['distribution', 'assumption'], ['output']] });
I('L10-I14', 'L10', 'L10-supunsup', 2, 'process', 'In supervised classification, which step comes right after “choosing representative pixels per class”?', 'Classifier’s parameter estimation using training data', ['parameter estimation', 'classifier parameter estimation', 'estimate classifier parameters using training data', 'parameter estimation using training data'], 'Slide 31 order: classes → representative pixels → parameter estimation → labeling → summarize → accuracy assessment.', [25], 'l10.training', { kw: [['parameter'], ['estimat']] });
I('L10-I15', 'L10', 'L10-supunsup', 2, 'process', 'In unsupervised classification, what is the FINAL step after the centroids stop changing?', 'Matching of information classes to spectral classes', ['matching info classes to spectral classes', 'match information classes to spectral classes', 'labeling clusters', 'matching of info classes to spectral classes'], 'Slide 32.', [26], 'l10.infoclass', { kw: [['match'], ['class']] });
I('L10-I16', 'L10', 'L10-supunsup', 2, 'process', 'What is the FIRST step of unsupervised classification on slide 32?', 'Min and max categories (classes) specified', ['specify minimum and maximum number of classes', 'min and max categories specified', 'specify min and max categories'], 'Slide 32 starts with “Min and Max Categories (Classes) Specified,” then arbitrary pixels are set as cluster centers.', [26], 'l10.unsupervised', { kw: [['min'], ['max']] });
I('L10-I17', 'L10', 'L10-classic', 2, 'visual', 'Rectangular boxes drawn around each class in feature space using each class’s minimum and maximum DN. Name the classifier.', 'Parallelepiped classifier', ['parallelepiped'], 'Slide 34.', [28], 'l10.parallelepiped', { fig: 'q-parallelepiped' });
I('L10-I18', 'L10', 'L10-classic', 2, 'visual', 'Each unknown pixel is joined by straight lines to every class mean and assigned to the nearest one. Name the classifier.', 'Minimum distance classifier', ['minimum distance', 'minimum distance to means', 'nearest mean'], 'Slide 35.', [29], 'l10.mindist', { fig: 'q-mindist' });
I('L10-I19', 'L10', 'L10-classic', 2, 'visual', 'Concentric ellipses (equiprobability contours) around each class mean, with assignment by probability. Name the classifier.', 'Maximum likelihood classifier', ['maximum likelihood', 'mlc'], 'Slides 33, 36–37.', [27, 30, 31], 'l10.ml', { fig: 'q-ml' });
I('L10-I20', 'L10', 'L10-classic', 3, 'scenario', 'A pixel falls inside the boxes of BOTH “crop” and “soil” in a parallelepiped classifier. What problem region is this?', 'Overlap (region of inseparability)', ['overlap', 'region of overlapping parallelepipeds', 'region of inseparability', 'overlapping parallelepipeds', 'overlapping region'], 'Slide 34: con — unclassified pixels in gaps and the region of overlapping parallelepipeds. The sketch labels it “region of inseparability.”', [28], 'l10.parallelepiped', { kw: [['overlap', 'insepar']] });
I('L10-I21', 'L10', 'L10-classic', 3, 'scenario', 'A pixel lies between the boxes of all classes in a parallelepiped classifier. What happens to it?', 'It remains unclassified', ['unclassified', 'it is unclassified', 'not classified'], 'Slide 34: unclassified pixels in gaps between parallelepipeds.', [28], 'l10.parallelepiped', { kw: [['unclassif', 'not classif']] });
I('L10-I22', 'L10', 'L10-classic', 3, 'scenario', 'Which classifier’s weakness is being “insensitive to different degrees of variance in spectral response data”?', 'Minimum distance classifier', ['minimum distance'], 'Slide 35 con.', [29], 'l10.mindist');
I('L10-I23', 'L10', 'L10-training', 2, 'def', 'Alternative name the slide gives for the Hughes phenomenon.', 'Curse of dimensionality', [], 'Slide 39: “Hughes phenomenon: curse of dimensionality.”', [33], 'l10.hughes');
I('L10-I24', 'L10', 'L10-training', 2, 'visual', 'A single isolated tree, smaller than one pixel, sits inside a grass pixel. Which Foody (2004) mixed-pixel cause is this (letter or description)?', 'Small sub-pixel targets (A)', ['a', 'sub-pixel targets', 'subpixel targets', 'small sub pixel targets', 'presence of small sub-pixel targets', 'cause a'], 'Slide 40, cause A.', [34], 'l10.subpixeltarget');
I('L10-I25', 'L10', 'L10-training', 2, 'visual', 'A pixel straddles the sharp edge between a lake and a field. Which mixed-pixel cause is this?', 'Boundaries of discrete land cover classes (B)', ['b', 'boundary', 'boundaries', 'class boundary', 'boundaries of discrete classes', 'cause b'], 'Slide 40, cause B.', [34], 'l10.boundarymix');
I('L10-I26', 'L10', 'L10-training', 3, 'visual', 'Marsh grades slowly into dry grassland with no clear border. Which mixed-pixel cause is this?', 'Gradual transition between land cover classes (C)', ['c', 'continuum', 'gradual transition', 'cause c'], 'Slide 40, cause C: gradual transition (continuum).', [34], 'l10.continuum');
I('L10-I27', 'L10', 'L10-training', 3, 'visual', 'Signal from ground just OUTSIDE a pixel’s footprint leaks into its value. Which mixed-pixel cause is this?', 'Contribution of areas outside the pixel (D)', ['d', 'cause d', 'contribution of areas outside the area represented by a pixel', 'outside contribution'], 'Slide 40, cause D.', [34], 'l10.psf');
I('L10-I28', 'L10', 'L10-param', 2, 'scenario', 'Non-parametric classifier whose rules are easy to interpret and which, unlike ANN, needs no extensive design and training.', 'Decision tree', ['decision trees', 'dt', 'classification tree'], 'Slide 45 pros.', [39], 'l10.dt');
I('L10-I29', 'L10', 'L10-param', 2, 'scenario', 'Non-parametric classifier criticized as “semantically poor (black box)”.', 'Artificial neural network', ['ann', 'neural network', 'artificial neural network (ann)'], 'Slide 43 cons.', [37], 'l10.ann');
I('L10-I30', 'L10', 'L10-param', 3, 'list', 'Name ANY TWO of the four design choices that make ANNs “difficult to apply successfully” (slide 43).', 'Network architecture; initial parameter values; number of iterations; initial weights', ['network architecture and initial weights', 'architecture and number of iterations'], 'Slide 43: network architecture, initial values of parameters, number of iterations required, choice of initial weights. Any two count.', [37], 'l10.ann', { kw2: [['architect'], ['initial value', 'parameter'], ['iteration'], ['weight']] });
I('L10-I31', 'L10', 'L10-param', 3, 'visual', 'In the Tso & Mather decision tree: NIR reflectance > 50% is TRUE and red reflectance < 12% is TRUE. What class results?', 'Vegetation', [], 'Slide 44 tree.', [38], 'l10.dt', { fig: 'fig-dtree' });
I('L10-I32', 'L10', 'L10-param', 3, 'visual', 'In the same tree: NIR > 50% is FALSE, NIR < 5% is TRUE and red < 10% is TRUE. What class results?', 'Water', [], 'Slide 44 tree.', [38], 'l10.dt', { fig: 'fig-dtree' });
I('L10-I33', 'L10', 'L10-hardsoft', 2, 'calc', 'Jensen (1996) HARD rules: NIR brightness 0–30 water, 30–60 forested wetland, 60–90 upland forest. Classify a pixel with brightness 75.', 'Upland forest', [], 'Slide 47: 60–90 → upland forest.', [41], 'l10.hard');
I('L10-I34', 'L10', 'L10-hardsoft', 3, 'calc', 'From the Jensen fuzzy membership figure, what is the forested wetland membership grade of a pixel at NIR brightness 60 (one decimal)?', '0.7', ['0.67', '0,7'], 'Forested wetland falls from 1 at 55 to 0 at 70, so at 60 it is about 0.7. Upland forest is about 0.3.', [41], 'l10.grade', { num: { v: 0.7, tol: 0.05 }, fig: 'fig-fuzzy' });
I('L10-I35', 'L10', 'L10-hardsoft', 3, 'calc', 'From the same figure, a pixel at NIR brightness 30 has what membership grade in WATER?', '0.5', ['0,5', 'one half'], 'Water and forested wetland cross at 30, where each is 0.5.', [41], 'l10.grade', { num: { v: 0.5, tol: 0.05 }, fig: 'fig-fuzzy' });
I('L10-I36', 'L10', 'L10-post', 2, 'scenario', 'A forest map was classified per pixel (30 m), but the agency needs polygons in a GIS. Which post-processing is required besides generalisation?', 'Raster to vector conversion', ['raster-to-vector conversion', 'vectorization', 'vectorisation'], 'Slide 50: final map vector and SUA pixel → raster to vector conversion.', [43, 44], 'l10.r2v');
I('L10-I37', 'L10', 'L10-post', 2, 'scenario', 'A raster map is required with MMU = 5 ha, but classification was done on 30 m pixels. Which post-processing step appears in the chain between classification and accuracy assessment?', 'Upscaling', ['generalisation', 'map generalisation', 'upscaling generalisation', 'generalization'], 'Slide 51: raster, MMU > pixel size → post-processing (upscaling). Slide 50 pairs map generalisation with upscaling.', [43, 44], 'l10.upscaling');
I('L10-I38', 'L10', 'L10-post', 3, 'process', 'For a vector map whose SUA is the object, what step comes FIRST in the processing chain (slide 51)?', 'Image segmentation', ['segmentation', 'image segmentation (generate the objects)', 'generate the objects'], 'Slide 51: image segmentation (generate the objects) > feature selection > classification > post-processing (generalisation) > accuracy assessment.', [44], 'l10.segmentation');
I('L10-I39', 'L10', 'L10-post', 2, 'scenario', 'Rule applied after classification: “pixels labeled rice above 1000 m elevation become grassland.” This strategy is called ______.', 'Post-classification sorting', ['post classification sorting', 'ancillary data integration'], 'Slide 49: specific rules applied to the classified image and ancillary data (elevation, slope, aspect).', [42], 'l10.pcsort');
I('L10-I40', 'L10', 'L10-post', 2, 'scenario', 'According to the conclusions, if the class distributions are Gaussian, which classifier gives minimum total misclassification error?', 'Maximum likelihood classifier', ['maximum likelihood', 'mlc'], 'Slide 53.', [46], 'l10.ml');
I('L10-I41', 'L10', 'L10-steps', 2, 'list', 'Name the four MANDATORY steps of thematic information extraction (slide 19).', 'Mapping approach, feature identification and selection, classification, accuracy assessment', ['definition of the mapping approach feature identification and selection classification accuracy assessment'], 'Slide 19 marks them with *. Ancillary data integration and post-classification processing are ** (not mandatory).', [14], 'l10.thematicext', { kw: [['mapping'], ['feature'], ['classif'], ['accuracy']] });
I('L10-I42', 'L10', 'L10-steps', 2, 'process', 'Step 3 of thematic information extraction.', 'Image segmentation', ['segmentation'], 'Slide 19 order: mapping approach, geographical stratification, image segmentation, feature identification & selection, classification, ancillary data integration, post-classification processing, accuracy assessment.', [14], 'l10.segmentation');
I('L10-I43', 'L10', 'L10-catcont', 2, 'scenario', 'A leaf area index map belongs to which branch of remote sensing?', 'Quantitative remote sensing', ['quantitative rs', 'quantitative', 'modelling'], 'Slide 17: continuous variables (LAI, biomass, tree volume) → quantitative remote sensing (modelling).', [12], 'l10.quantrs');
I('L10-I44', 'L10', 'L10-catcont', 2, 'scenario', 'A flooded-area map belongs to which branch of remote sensing?', 'Thematic remote sensing', ['thematic rs', 'thematic', 'image classification'], 'Slide 17: categorical variables (flooded maps etc.) → thematic RS (image classification).', [12], 'l10.thematicrs');
I('L10-I45', 'L10', 'L10-system', 1, 'list', 'Element D of the remote sensing process.', 'Recording by the sensor', ['recording by sensor', 'recording of energy by the sensor'], 'PDF p. 2: A energy source, B radiation & atmosphere, C interaction with target, D recording by the sensor, E transmission/reception/processing, F interpretation & analysis, G application.', [2], 'l10.elD');
I('L10-I46', 'L10', 'L10-mapping', 1, 'acronym', 'What does SUA stand for?', 'Spatial unit of analysis', [], 'Slide 21.', [16], 'l10.sua');
I('L10-I47', 'L10', 'L10-mapping', 1, 'acronym', 'What does MMU stand for?', 'Minimum mapping unit', [], 'Slide 20.', [15], 'l10.mmu');

// ───────────────────────── MULTIPLE CHOICE ─────────────────────────
M('L10-M01', 'L10', 'L10-space', 1, 'In image space, each pixel is described by…', [
  ['a location (row & column) and an intensity value (digital number)', 'Slide 11.'],
  ['a class label and a probability', 'Those are classification outputs, not image-space properties.'],
  ['a wavelength and a frequency', 'Those describe EM radiation.'],
  ['its position on a scatter plot only', 'That is feature space.']], [6], 'l10.imagespace');
M('L10-M02', 'L10', 'L10-space', 2, 'Why is feature (spectral) space useful for classification?', [
  ['Pixels with similar band values cluster together, revealing spectral patterns that can be separated into classes', 'Slides 12–16.'],
  ['It preserves the geographic neighbors of each pixel', 'Feature space discards geographic location.'],
  ['It shows the true scale of the Landsat scene', 'Neither space shows scale. Slide 10 even warns that the drawn cell size is not to scale.'],
  ['It replaces the need for training data', 'Supervised classification still needs training pixels.']], [7, 9, 11], 'l10.featurespace');
M('L10-M03', 'L10', 'L10-catcont', 2, 'Which pair correctly matches variable type with approach?', [
  ['Categorical → image classification; continuous → modelling', 'Slide 17.'],
  ['Categorical → modelling; continuous → image classification', 'Reversed.'],
  ['Both → segmentation', 'Segmentation is a pre-processing step.'],
  ['Both → accuracy assessment', 'Accuracy assessment validates results. It does not produce maps.']], [12], 'l10.categorical');
M('L10-M04', 'L10', 'L10-steps', 2, 'Which step of thematic information extraction is NOT mandatory?', [
  ['Post-classification processing', 'Marked ** (not mandatory but discussed).'],
  ['Definition of the mapping approach', 'Mandatory (*).'],
  ['Classification', 'Mandatory (*).'],
  ['Accuracy assessment', 'Mandatory (*), covered in the next lecture.']], [14], 'l10.thematicext');
M('L10-M05', 'L10', 'L10-mapping', 2, 'Which statement about MMU and SUA is correct?', [
  ['The MMU is the smallest area shown on the final map; the SUA is the unit the classification algorithm is applied to', 'Slide 21.'],
  ['They are always identical', 'When MMU > SUA, post-processing is needed (slide 50).'],
  ['The SUA is always larger than the MMU', 'Normally the SUA is the pixel or object and the MMU can be larger.'],
  ['MMU applies only to object-oriented classification', 'MMU applies to raster (pixel) and vector (smallest object) maps.']], [16, 43], 'l10.mmu');
M('L10-M06', 'L10', 'L10-mapping', 2, 'If the spatial unit of analysis is an OBJECT, the classification is…', [
  ['object-oriented image classification', 'Slide 21.'],
  ['per-pixel classification', 'Per-pixel uses the image pixel.'],
  ['sub-pixel classification', 'Sub-pixel also uses the image pixel.'],
  ['hard classification', 'Hard/soft refers to the number of outputs, not the SUA.']], [16], 'l10.obia');
M('L10-M07', 'L10', 'L10-segment', 2, 'Segments are best described as…', [
  ['clusters of pixels which are similar to each other', 'Slide on PDF p. 17.'],
  ['individual pixels with their DNs', 'Segments group several pixels.'],
  ['training areas drawn by the analyst', 'Training areas serve supervised classification.'],
  ['decision boundaries in feature space', 'Boundaries separate classes in feature space.']], [17], 'l10.segment');
M('L10-M08', 'L10', 'L10-features', 2, 'What is the purpose of feature manipulation and selection?', [
  ['To reduce the number of features without sacrificing accuracy', 'Slide 25.'],
  ['To increase the number of bands as much as possible', 'More bands with limited samples triggers the Hughes phenomenon.'],
  ['To convert raster maps to vector', 'That is post-processing.'],
  ['To compute the kappa coefficient', 'That is accuracy assessment.']], [19], 'l10.featsel');
M('L10-M09', 'L10', 'L10-features', 2, 'Spectral values from spring, summer and fall images of the same area are stacked as classifier inputs. This is…', [
  ['a multi-temporal approach using 1st order (spectral) measurements', 'Slide 26: spectral measurements from multiple dates.'],
  ['a unitemporal approach', 'Unitemporal uses a single date.'],
  ['2nd order measurements related to the neighbourhood', 'Neighbourhood measurements are texture and spatial features.'],
  ['ancillary information', 'Ancillary information is non-spectral geographic data.']], [20], 'l10.multitemporal');
M('L10-M10', 'L10', 'L10-features', 3, 'Combining radar and optical images of the same area as classifier inputs falls under…', [
  ['data fusion (images with different characteristics treated as ancillary information)', 'Slide 26: data from images with different characteristics can be ancillary, and multisensor approaches may fall within data fusion.'],
  ['semantic generalisation', 'That merges small patches after classification.'],
  ['post-classification sorting', 'That applies rules after classification.'],
  ['parallelepiped classification', 'That is a classifier, not an input strategy.']], [20], 'l10.fusion');
M('L10-M11', 'L10', 'L10-classif', 1, 'The decision rule (classifier) is…', [
  ['the algorithm that allocates a specific label to a spatial unit of analysis', 'Slide 28.'],
  ['the smallest area represented in a map', 'That is the MMU.'],
  ['a set of reference plots', 'Reference plots are for accuracy assessment.'],
  ['the boundary line drawn on the final map', 'Decision boundaries live in feature space, not on the map.']], [22], 'l10.decisionrule');
M('L10-M12', 'L10', 'L10-classif', 2, 'Which classification type uses NO extraneous data?', [
  ['Unsupervised', 'Slide 29.'],
  ['Supervised', 'Requires training pixels.'],
  ['Hybrid', 'Uses both supervised and unsupervised classifiers.'],
  ['Post-classification sorting', 'Uses ancillary data.']], [23], 'l10.unsupervised');
M('L10-M13', 'L10', 'L10-classif', 2, 'According to slide 29, classification is NOT limited to pixel values. Which is listed as another possible input?', [
  ['Distance from some target', 'Slide 29 lists indices, distance from some target and data transformation.'],
  ['The kappa coefficient', 'Kappa measures accuracy.'],
  ['The MMU', 'The MMU is a map specification.'],
  ['The confusion matrix', 'That is for accuracy assessment.']], [23], 'l10.classif');
M('L10-M14', 'L10', 'L10-supunsup', 2, 'In unsupervised classification, what happens if the newly calculated centroids differ from the previous set?', [
  ['Pixels are reassigned to the nearest centroids and the loop repeats', 'Slide 32: YES → back to assignment.'],
  ['The classification stops and accuracy is assessed', 'Stopping happens only when the centroids no longer change.'],
  ['Training pixels are collected', 'Unsupervised classification uses no training pixels.'],
  ['The number of classes is set to one', 'Not part of the procedure.']], [26], 'l10.iteration');
M('L10-M15', 'L10', 'L10-supunsup', 2, 'Which step is UNIQUE to supervised classification?', [
  ['Choosing representative pixels per class', 'Training pixels are the hallmark of supervised classification (slide 31).'],
  ['Matching of information classes to spectral classes', 'That is the last unsupervised step.'],
  ['Arbitrary pixels set as cluster centers', 'Unsupervised.'],
  ['Calculation of new centroids', 'Unsupervised.']], [25], 'l10.training');
M('L10-M16', 'L10', 'L10-classic', 2, 'Which classifier is “simple to train and use, computationally fast” but leaves unclassified pixels in gaps?', [
  ['Parallelepiped', 'Slide 34.'],
  ['Minimum distance', 'Minimum distance assigns every pixel to some centroid.'],
  ['Maximum likelihood', 'ML is computationally intensive.'],
  ['Artificial neural network', 'ANN training can be slow.']], [28], 'l10.parallelepiped');
M('L10-M17', 'L10', 'L10-classic', 3, 'Urban pixels have a very wide spread of DNs while water pixels are tightly clustered. Which classifier handles this difference in variance BEST?', [
  ['Maximum likelihood', 'It uses variance and covariance, taking variation in spectral response into consideration (slide 36).'],
  ['Minimum distance', 'It is insensitive to different degrees of variance.'],
  ['Parallelepiped', 'Its boxes ignore the shape of the distribution and overlap.'],
  ['Hard decision rules on one band', 'Single-band thresholds ignore covariance.']], [29, 30], 'l10.ml');
M('L10-M18', 'L10', 'L10-classic', 3, 'Which is a stated DISADVANTAGE of the maximum likelihood classifier?', [
  ['Multimodal classes require extra care when training the classifier', 'Slide 36 con (along with being computationally intensive).'],
  ['It ignores variance and covariance', 'It explicitly uses them.'],
  ['It leaves gaps between boxes', 'That is the parallelepiped con.'],
  ['It is semantically poor (black box)', 'That is the ANN con.']], [30], 'l10.ml');
M('L10-M19', 'L10', 'L10-classic', 2, 'In the minimum distance classifier, the class centroid is…', [
  ['the mean value by band for each class', 'Slide 35.'],
  ['the minimum and maximum DN of each class', 'Those are parallelepiped thresholds.'],
  ['the pixel with the highest probability', 'That is ML language.'],
  ['an arbitrary pixel chosen at random', 'That is how unsupervised clustering starts.']], [29], 'l10.mindist');
M('L10-M20', 'L10', 'L10-training', 2, 'Which is NOT listed as a consideration of the training stage?', [
  ['Training pixels should always come from cloud-covered areas', 'Not on the slide (and wrong).'],
  ['Restrictions on sampling cost lead to inadequate sampling', 'Listed (slide 39).'],
  ['Number of samples affects estimated statistical parameters', 'Listed.'],
  ['“Mixels” in training areas', 'Listed.']], [33], 'l10.hughes');
M('L10-M21', 'L10', 'L10-training', 3, 'An analyst adds 200 hyperspectral bands but keeps only 20 training pixels per class, and the accuracy of maximum likelihood DROPS. This is the…', [
  ['Hughes phenomenon (curse of dimensionality)', 'Too many dimensions for too few samples (slides 39, 41).'],
  ['Mixed pixel problem', 'Mixels are about multiple classes per pixel.'],
  ['Speckle effect', 'Speckle is a radar phenomenon.'],
  ['Region of inseparability', 'That is the overlap of parallelepipeds.']], [33, 35], 'l10.hughes');
M('L10-M22', 'L10', 'L10-param', 2, 'Which is a weakness of PARAMETRIC classifiers according to slide 41?', [
  ['Not adequate to integrate ancillary data at different measurement scales and units', 'Slide 41.'],
  ['No assumptions about the data distribution', 'That describes non-parametric classifiers.'],
  ['Rules are easy to interpret', 'That is a decision-tree pro.'],
  ['High computation rate for huge datasets', 'That is an ANN pro.']], [35], 'l10.parametric');
M('L10-M23', 'L10', 'L10-param', 2, 'In an ANN, the training phase…', [
  ['learns regularities in the training data and constructs rules to be applied to unknown data', 'Slide 42.'],
  ['assumes every class is normally distributed', 'ANN is non-parametric.'],
  ['draws boxes around each class', 'That is the parallelepiped classifier.'],
  ['recursively splits the data into homogeneous subsets', 'That is a decision tree.']], [36], 'l10.ann');
M('L10-M24', 'L10', 'L10-param', 3, 'A decision tree’s main limitation, according to the lecture, is that it…', [
  ['uses hyperplane decision boundaries parallel to the feature axes', 'Slide 45 con.'],
  ['requires normally distributed data', 'DT makes no distribution assumption.'],
  ['is a black box', 'DT rules are easy to interpret.'],
  ['needs extensive design and training', 'Unlike ANN, it does not.']], [39], 'l10.dt');
M('L10-M25', 'L10', 'L10-param', 2, 'Decision trees predict class membership by…', [
  ['recursive partitioning of a dataset into homogeneous subsets', 'Slide 44.'],
  ['adjusting weighted connections between neurons', 'That is ANN.'],
  ['computing the distance to each class mean', 'That is minimum distance.'],
  ['estimating covariance matrices', 'That is maximum likelihood.']], [38], 'l10.recursive');
M('L10-M26', 'L10', 'L10-param', 2, 'Which classifier pair are BOTH non-parametric?', [
  ['Artificial neural network and decision tree', 'Slides 42–45.'],
  ['Maximum likelihood and decision tree', 'ML is parametric.'],
  ['Maximum likelihood and minimum distance', 'ML is the lecture’s parametric example. Minimum distance is a classic statistical classifier.'],
  ['Parallelepiped and maximum likelihood', 'ML is parametric.']], [35, 36, 38], 'l10.nonparametric');
M('L10-M27', 'L10', 'L10-hardsoft', 2, 'A pixel is reported as 60% forest, 30% grass and 10% soil. What kind of classification produced this?', [
  ['Soft (fuzzy) classification', 'Multiple and partial class membership (slide 46).'],
  ['Hard (crisp) classification', 'Hard gives exactly one class.'],
  ['Parallelepiped classification', 'Parallelepiped gives one class or unclassified.'],
  ['Post-classification sorting', 'That refines hard labels with rules.']], [40], 'l10.soft');
M('L10-M28', 'L10', 'L10-hardsoft', 2, 'Membership grades in fuzzy classification range from…', [
  ['0 to 1', 'Slide 47: a real value between 0 and 1.'],
  ['−1 to +1', 'That is a correlation-like range.'],
  ['0 to 100 DN', 'DN ranges are image values.'],
  ['1 to the number of classes', 'That would be a class index.']], [41], 'l10.grade');
M('L10-M29', 'L10', 'L10-hardsoft', 3, 'Which advantage of soft classification is stated in the conclusions?', [
  ['It can discriminate physical class continua and estimate subpixel class component fractions', 'Slide 53.'],
  ['It always runs faster than hard classification', 'Not stated.'],
  ['It eliminates the need for accuracy assessment', 'Not stated.'],
  ['It requires no training data', 'Not stated.']], [46], 'l10.soft');
M('L10-M30', 'L10', 'L10-post', 2, 'Post-classification processing is required when…', [
  ['the MMU of the final map is larger than the SUA, or the final map is vector but the SUA was the pixel', 'Slide 50: the two cases.'],
  ['the image has more than three bands', 'Not a trigger.'],
  ['training pixels are mixed', 'That affects training, not post-processing.'],
  ['kappa is below 0.85', 'Not a trigger on the slides.']], [43], 'l10.generalisation');
M('L10-M31', 'L10', 'L10-post', 2, 'Post-classification sorting applies very specific rules to the classified image together with…', [
  ['geographical ancillary data such as elevation, slope and aspect', 'Slide 49.'],
  ['the original training pixels only', 'Not stated.'],
  ['the error matrix', 'That is for accuracy assessment.'],
  ['radar speckle filters', 'Unrelated.']], [42], 'l10.pcsort');
M('L10-M32', 'L10', 'L10-post', 3, 'For a raster map whose MMU EQUALS the pixel size of the input data, the processing chain is…', [
  ['feature selection > image classification > accuracy assessment', 'Slide 51: no post-processing needed.'],
  ['feature selection > image classification > upscaling > accuracy assessment', 'That is for MMU > pixel size.'],
  ['segmentation > feature selection > classification > generalisation > accuracy assessment', 'That is for a vector map with object SUA.'],
  ['classification > raster to vector conversion > accuracy assessment', 'That is for a vector map from pixels.']], [44], 'l10.mmu');
M('L10-M33', 'L10', 'L10-post', 2, 'The lecture concludes that it is not possible to declare one classifier better than another for all applications because…', [
  ['performance is strongly data-dependent when class signatures overlap', 'Slide 53.'],
  ['all classifiers give identical maps', 'Slide 38 shows different maps.'],
  ['accuracy cannot be measured', 'Lecture 11 measures it.'],
  ['non-parametric methods are always worse', 'Not stated.']], [46], 'l10.heuristic');
M('L10-M34', 'L10', 'L10-system', 1, 'In the seven elements of remote sensing, “F” is…', [
  ['Interpretation and analysis', 'PDF p. 2 (CCRS diagram).'],
  ['Recording by the sensor', 'That is D.'],
  ['Application', 'That is G.'],
  ['Interaction with the target', 'That is C.']], [2], 'l10.elF');
M('L10-M35', 'L10', 'L10-classic', 3, 'In feature space, two classes have the SAME mean but very different spreads. Which classifier can still tell them apart, at least partly?', [
  ['Maximum likelihood', 'It uses the variance and covariance as well as the mean.'],
  ['Minimum distance', 'With identical means, the distances are identical, so it cannot separate them.'],
  ['Parallelepiped with identical boxes', 'Identical boxes cannot separate them.'],
  ['None; it is impossible for any classifier', 'Probability-based assignment can still separate them by spread.']], [29, 30], 'l10.ml');
M('L10-M36', 'L10', 'L10-hardsoft', 2, 'Soft (fuzzy) classification was proposed mainly as an alternative to deal with…', [
  ['mixels (mixed pixels)', 'Slide 46.'],
  ['speckle', 'Radar topic.'],
  ['layover', 'Radar topic.'],
  ['Rayleigh scattering', 'Lecture 9 composite topic.']], [40], 'l10.soft');

// ───────────────────────── RECALL ─────────────────────────
R('L10-R01', 'L10', 'L10-classic', 'diff', 'Compare parallelepiped, minimum distance and maximum likelihood classifiers (rule, pro, con).', 'Parallelepiped: min/max DN boxes | simple, fast | gaps (unclassified) and overlaps. Minimum distance: closest class mean | simple, efficient | insensitive to variance. Maximum likelihood: variance/covariance, normal assumption, probability with threshold | accounts for variation | computationally intensive, multimodal classes need care.', [28, 29, 30], 'l10.parallelepiped');
R('L10-R02', 'L10', 'L10-supunsup', 'steps', 'List the steps of supervised classification.', '1 Decide ground cover types (classes); 2 choose representative pixels per class; 3 estimate classifier parameters from training data; 4 label pixels by class; 5 summarize results (maps or tables); 6 accuracy assessment.', [25], 'l10.supervised');
R('L10-R03', 'L10', 'L10-supunsup', 'steps', 'List the steps of unsupervised classification, including the loop.', '1 Specify min and max number of classes; 2 set arbitrary pixels as cluster centers; 3 define class centroids; 4 assign pixels to the nearest centroids; 5 calculate new centroids. Different set? Yes → repeat step 4; No → 6 match information classes to spectral classes.', [26], 'l10.unsupervised');
R('L10-R04', 'L10', 'L10-mapping', 'diff', 'Explain the difference between MMU and SUA.', 'MMU = smallest area represented in the final map (pixel for raster, smallest object for vector). SUA = unit to which the classification algorithm is applied (pixel → per-pixel/sub-pixel; object → object-oriented). If MMU > SUA, generalisation/upscaling is needed.', [16, 43], 'l10.mmu');
R('L10-R05', 'L10', 'L10-param', 'diff', 'Contrast ANN and decision trees (pros and cons).', 'ANN: non-parametric, high computation rate | black box, slow training, hard to choose architecture, parameters, iterations, weights. DT: no distribution assumption, reveals nonlinear/hierarchical relationships, easy rules, no extensive design/training, efficient | axis-parallel boundaries, best when classes are clearly distinguishable.', [37, 39], 'l10.ann');
R('L10-R06', 'L10', 'L10-steps', 'steps', 'List the 8 steps of thematic information extraction and mark the mandatory ones.', '1 Mapping approach*; 2 Geographical stratification; 3 Image segmentation; 4 Feature identification & selection*; 5 Classification*; 6 Ancillary data integration**; 7 Post-classification processing**; 8 Accuracy assessment*.', [14], 'l10.thematicext');
R('L10-R07', 'L10', 'L10-hardsoft', 'diff', 'Explain hard vs soft classification using the Jensen example.', 'Hard: one class per pixel by thresholds (0–30 water, 30–60 forested wetland, 60–90 upland forest). Soft: membership functions give grades 0–1 for every class (e.g., brightness 60 → ~0.7 forested wetland, ~0.3 upland forest), so mixels and continua are represented.', [40, 41], 'l10.soft');
R('L10-R08', 'L10', 'L10-training', 'explain', 'List the four causes of mixed pixels (Foody, 2004).', 'A small sub-pixel targets; B boundaries of discrete land cover classes; C gradual transition between classes (continuum); D contribution of areas outside the area represented by a pixel.', [34], 'l10.mixel');
R('L10-R09', 'L10', 'L10-post', 'diff', 'When is generalisation/upscaling needed vs raster-to-vector conversion?', 'Generalisation ↔ upscaling: the final map’s MMU is larger than the spatial unit used in classification. Raster-to-vector conversion: the final map is vector but the SUA was the pixel.', [43], 'l10.generalisation');

// ── Additional items linking every substantive page to practice
M('L10-M37', 'L10', 'L10-system', 1, 'The classified map beside the Landsat image on printed slide 5 has six legend classes. Which class is NOT among them?', [
  ['Cloud', 'Correct: the legend is built-up, road, bare soil, shadow, vegetation and water.'],
  ['Shadow', 'In the legend.'],
  ['Road', 'In the legend.'],
  ['Bare soil', 'In the legend.']], [1], 'l10.classif');
I('L10-I48', 'L10', 'L10-space', 1, 'def', 'Title of printed slide 10, expressing that in per-pixel mapping every pixel receives exactly one label.', 'One pixel, one class', ['one pixel one class'], 'Printed slide 10 (PDF p. 5), with a DN grid from Phiri & Morgenroth (2017).', [5], 'l10.pixel');
M('L10-M38', 'L10', 'L10-classic', 2, 'What does the map comparison on slide 38 (Principe, 2012) demonstrate?', [
  ['Parallelepiped, minimum distance and maximum likelihood produce visibly different maps from the same image, so the classifier choice matters', 'Slide 38.'],
  ['All three classifiers produce identical maps', 'The maps differ visibly.'],
  ['Only unsupervised classification can map forests', 'All three are supervised.'],
  ['Accuracy assessment is unnecessary', 'Contradicts Lectures 10–11.']], [32], 'l10.ml');
I('L10-I49', 'L10', 'L10-post', 2, 'calc', 'In the semantic generalisation example (slide 52), the MMU goes from 1 pixel (30 m × 30 m) to how many hectares?', '5', ['5 ha', 'five hectares'], 'Slide 52: MMU = 1 pixel (30 m × 30 m) → MMU = 5 ha.', [45], 'l10.semgen', { num: { v: 5, tol: 0 } });
