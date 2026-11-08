// LECTURE 11 — Accuracy Assessment (25 PDF pages; printed slide = PDF page + 2)
lecture({ id: 'L11', short: 'Lecture 11', title: 'Accuracy Assessment', file: 'Lecture 11 Accuracy Assessment.pdf', pages: 25 });

PAGES('L11', [
  [1, 3, 'I. Introduction: classified map − accuracy assessment = pretty picture; goals', 'S', 'L11-intro'],
  [2, 4, 'Overview: reference data vs classified map', 'S', 'L11-intro'],
  [3, 5, 'II. The reference data: sources and three issues', 'S', 'L11-reference'],
  [4, 6, 'Issue 1: choosing reference source', 'S', 'L11-reference'],
  [5, 7, 'Issue 2: determining size of reference plots', 'S', 'L11-reference'],
  [6, 8, 'Issue 3: position and number of samples; 50 per class', 'S', 'L11-sampling'],
  [7, 9, 'Sampling methods (5 diagrams)', 'S', 'L11-sampling'],
  [8, 10, 'Comparing data: plot-by-plot agreement table', 'S', 'L11-matrix'],
  [9, 11, 'III. Quantifying accuracy: the error matrix', 'S', 'L11-matrix'],
  [10, 12, 'Total accuracy = 74%', 'S', 'L11-matrix'],
  [11, 13, 'Problem with total accuracy', 'S', 'L11-matrix'],
  [12, 14, 'User’s accuracy = commission (inclusion)', 'S', 'L11-uapa'],
  [13, 15, 'User’s accuracy example: built-up 57%', 'S', 'L11-uapa'],
  [14, 16, 'Producer’s accuracy = omission (exclusion)', 'S', 'L11-uapa'],
  [15, 17, 'Producer’s accuracy example: built-up 87%', 'S', 'L11-uapa'],
  [16, 18, 'Accuracy assessment summary table (UA, PA, total)', 'S', 'L11-uapa'],
  [17, 19, 'Kappa statistic: concept and simple formula', 'S', 'L11-kappa'],
  [18, 20, 'Kappa statistic: KHAT formula and symbols', 'S', 'L11-kappa'],
  [19, 21, 'Kappa example: K̂ = 0.65 (class exercise)', 'S', 'L11-kappa'],
  [20, 22, 'Each accuracy gives different information', 'S', 'L11-report'],
  [21, 23, 'What to report?', 'S', 'L11-report'],
  [22, 24, 'IV. Interpreting assessment results: why accuracy might be low', 'S', 'L11-report'],
  [23, 25, 'V. Improving classification (problem → solution table)', 'S', 'L11-report'],
  [24, 26, 'VI. Summary', 'S', 'L11-report'],
  [25, 27, 'End of lecture (closing)', 'X', null]
]);

NOTE('n11-commission-eg', 'L11', 'L11-uapa', [12], 'User’s accuracy example: “1 water and 3 shrub sites included erroneously in the forest category.”', 'The lecture’s own matrix has no water or shrub class, so this example comes from a different dataset. In the lecture matrix, Forest commission = the off-diagonal cells of the FOREST ROW = 6 + 5 + 8 = 19 of 100 plots (19%), so UA(forest) = 81%.');
NOTE('n11-omission-eg', 'L11', 'L11-uapa', [14], 'Producer’s accuracy example: “7 forest and 1 built-up sites omitted from agriculture category.”', 'The lecture matrix has no agriculture class either. In the lecture matrix, Forest omission = the off-diagonal cells of the FOREST COLUMN = 4 + 11 + 7 = 22 of 103 plots (21.4%), so PA(forest) = 78.6% ≈ 79%.');
NOTE('n11-kapparange', 'L11', 'L11-kappa', [17], 'Kappa “Range: 0 – 1”, and “Kappa of 0.85 means there is 85% better agreement than by chance alone.”', 'Kappa can be negative when agreement is worse than chance. In practice useful maps fall between 0 and 1. A stricter reading of 0.85 is that the classification avoids 85% of the errors a chance (random) assignment would make. Use the lecture wording on the exam.');
NOTE('n11-lillesand', 'L11', 'L11-sampling', [6], 'Rule of thumb: 50 per class (Lillesand & Kiefer, 2015).', 'The 2015 (7th) edition is by Lillesand, Kiefer & Chipman. The rule of thumb is the same: about 50 reference samples per class.');
NOTE('n11-orient', 'L11', 'L11-matrix', [9], 'Lecture matrices: ROWS = classified data (map), COLUMNS = reference data.', 'Some textbooks transpose the matrix (rows = reference). Always read the labels first. With the lecture orientation: user’s accuracy divides by ROW totals and producer’s accuracy divides by COLUMN totals.');

// ───────────────────────── TOPICS ─────────────────────────
topic({
  id: 'L11-intro', lec: 'L11', title: 'Why accuracy assessment?', p: [1, 2],
  summary: 'A classified map without accuracy assessment is just a “pretty picture.” Accuracy assessment compares classes in the reference data with classes on the classified map.',
  keys: ['l11.aa', 'l11.pretty'],
  blocks: [
    ['p', '**Classified map − Accuracy assessment = pretty picture** (slide 3).'],
    ['ul', ['Goal 1: assess how well a classification worked.', 'Goal 2: understand how to interpret the usefulness of someone else’s classification.']],
    ['p', 'Overview (slide 4): for each reference location (vegetation, built-up, water, bare soil, forest…), ask whether the class in the reference data equals the class on the classified map.']
  ],
  confused: [['Accuracy assessment (L11)', 'Field inspection (L9 step 7)', 'Field inspection resolves confusion during interpretation. Accuracy assessment quantifies agreement between the final map and reference data.']],
  aid: 'Learning aid: no matrix, no trust. A map without accuracy numbers is only decoration.'
});

topic({
  id: 'L11-reference', lec: 'L11', title: 'Reference data: sources, plot size and position', p: [3, 4, 5],
  summary: 'Reference data may come from aerial photo interpretation, GPS ground truth or GIS layers. The three issues are choosing the source, sizing the plots (match scale, spatial frequency, positional accuracy) and placing and counting samples.',
  keys: ['l11.reference', 'l11.groundtruth', 'l11.refplot', 'l11.scalematch', 'l11.spatfreq', 'l11.posacc'],
  blocks: [
    ['ul', ['**Possible sources**: aerial photo interpretation; ground truth with GPS; GIS layers.',
      '**Issues**: 1) choosing the reference source; 2) determining the size of reference plots; 3) determining the position and number of samples.']],
    ['h', 'Issue 1: choosing the reference source (slide 6)'],
    ['p', 'Make sure you can **accurately extract** from the reference source the information you need for the classification scheme. Example: an aerial photo cannot show the **species of grass**, so GPS-derived ground data would be needed for that scheme.'],
    ['h', 'Issue 2: size of reference plots (slide 7)'],
    ['table', ['Consideration', 'Lecture example'], [
      ['Match spatial scale: reference vs RS data', 'GPS-derived ground plots of 5 × 5 m vs RS cells of 1 × 1 km → aerial photos or even other satellite images are preferred'],
      ['Spatial frequencies of the image', 'Photo reference plots that cover an area of 3 × 3 pixels; a LOW spatial frequency (homogeneous) image vs a HIGH spatial frequency (heterogeneous) image'],
      ['Accuracy of position of image and reference data', 'Image position accurate to ±1 pixel. In a heterogeneous image, a 1-pixel shift can land on a different class']], null],
    ['fig', 'fig-spatfreq', 'A 3 × 3 reference plot in a homogeneous (low spatial frequency) image still covers one class after a ±1 pixel shift. In a heterogeneous (high spatial frequency) image, the same shift can change the class.']
  ],
  confused: [['Spatial frequency', 'Spatial resolution', 'Spatial frequency is how often the cover type changes across the image (homogeneous vs heterogeneous). Spatial resolution is the pixel size. Larger plots help in heterogeneous images.']],
  aid: 'Learning aid: “Source, Size, Spot.” Pick the right source, size the plot to the pixels, and place the samples well.'
});

topic({
  id: 'L11-sampling', lec: 'L11', title: 'Sampling design and sample size', p: [6, 7],
  summary: 'Adequately sample the landscape with random, stratified random, systematic, systematic non-aligned or cluster designs. More plots are better, and the rule of thumb is 50 per class.',
  keys: ['l11.simplerandom', 'l11.stratrandom', 'l11.systematic', 'l11.nonaligned', 'l11.cluster', 'l11.fifty'],
  blocks: [
    ['ul', ['Adequately sample the landscape; a variety of sampling schemes exists (random, stratified random, systematic, etc.).',
      'The more reference plots, the better. You can estimate how many you need statistically, but in reality one can never get enough!',
      '**Rule of thumb: 50 per class** (Lillesand & Kiefer, 2015).']],
    ['note', 'n11-lillesand'],
    ['fig', 'fig-sampling', 'Five sampling designs from slide 9.'],
    ['table', ['Design', 'Slide description'], [
      ['Simple random', 'Observations are randomly placed'],
      ['Stratified random', 'A minimum number of observations are randomly placed in each category'],
      ['Systematic', 'Observations are placed at equal intervals according to a strategy'],
      ['Systematic non-aligned', 'A grid provides even distribution of randomly placed observations'],
      ['Cluster', 'Randomly placed “centroids” used as a base of several nearby observations (can be randomly selected, systematically selected, etc.)']], null]
  ],
  confused: [['Stratified random', 'Systematic non-aligned', 'Stratified random guarantees a minimum number of samples per CATEGORY (class). Systematic non-aligned guarantees an even spread over SPACE (one random point per grid cell).'],
    ['Systematic', 'Systematic non-aligned', 'Systematic points sit at fixed equal intervals and line up. Non-aligned points are random within each grid cell, so they do not line up.']],
  aid: 'Learning aid: Stratified = by STRATA (classes). Non-aligned = by GRID cell. Cluster = by CENTROID.'
});

topic({
  id: 'L11-matrix', lec: 'L11', title: 'The error (confusion) matrix and overall accuracy', p: [8, 9, 10, 11],
  summary: 'Plot-by-plot comparisons are summarized in an error matrix (confusion matrix, contingency table). In the lecture, ROWS are the classified data and COLUMNS the reference data. The diagonal holds correct plots, and overall accuracy is the diagonal sum divided by N.',
  keys: ['l11.matrix', 'l11.diagonal', 'l11.offdiag', 'l11.marginal', 'l11.oa'],
  blocks: [
    ['table', ['Reference plot ID', 'Class from reference source', 'Class claimed on classified map', 'Agreement?'], [['1', 'Built-up', 'Built-up', 'Yes'], ['2', 'Forest', 'Vegetation', 'No'], ['3', 'Vegetation', 'Vegetation', 'Yes'], ['4', 'Bare soil', 'Built-up', 'No'], ['5', 'Etc…', '', '']], 'Comparing data (slide 10). How to summarize and quantify?'],
    ['lab', 'matrix'],
    ['note', 'n11-orient'],
    ['formula', 'f-oa'],
    ['p', '**Problem with total accuracy** (slide 13): it is a summary value, an average, and does not reveal whether error was evenly distributed between classes (accurate classes vs inaccurate classes). So also report **user’s** and **producer’s** accuracy.']
  ],
  confused: [['Diagonal', 'Off-diagonal', 'Diagonal cells = sites classified correctly according to the reference data. Off-diagonal cells = misclassified sites.'],
    ['Row total (Xi+)', 'Column total (X+i)', 'With the lecture orientation, a row total is how many plots the MAP claims for a class. A column total is how many plots truly belong to it in the REFERENCE data.']],
  aid: 'Learning aid: “Rows = Results (map), Columns = Correct (reference)”, as in this lecture’s matrices.'
});

topic({
  id: 'L11-uapa', lec: 'L11', title: 'User’s and producer’s accuracy; commission and omission', p: [12, 13, 14, 15, 16, 20],
  summary: 'User’s accuracy answers “how much of what the map calls X really is X?” (row-based, error of commission). Producer’s accuracy answers “how much of the real X did the map label as X?” (column-based, error of omission).',
  keys: ['l11.ua', 'l11.commission', 'l11.pa', 'l11.omission'],
  blocks: [
    ['table', ['', 'User’s accuracy', 'Producer’s accuracy'], [
      ['Corresponds to', 'Error of COMMISSION (inclusion)', 'Error of OMISSION (exclusion)'],
      ['Perspective', 'The USER of the classified map: for a given class, how many of the pixels on the map are actually what they say they are?', 'The MAKER of the classified map: for a given reference class, how many of the reference pixels are labeled correctly on the map?'],
      ['Calculated as', 'Number correctly identified in a given MAP class ÷ number CLAIMED to be in that map class', 'Number correctly identified in reference plots of a given class ÷ number ACTUALLY in that reference class'],
      ['In the lecture matrix (rows = map)', 'Diagonal ÷ ROW total', 'Diagonal ÷ COLUMN total'],
      ['Built-up example', '65 / 115 × 100 = 57%', '65 / 75 × 100 = 87%']], 'Slides 14–17.'],
    ['formula', 'f-ua'], ['formula', 'f-pa'],
    ['table', ['Class', 'User’s accuracy', 'Producer’s accuracy'], [['Built-up', '57%', '87%'], ['Forest', '81%', '79%'], ['Vegetation', '74%', '74%'], ['Bare soil', '87%', '64%'], ['Total accuracy', '74%', '']], 'Summary so far (slide 18).'],
    ['note', 'n11-commission-eg'], ['note', 'n11-omission-eg'],
    ['p', 'Each type of accuracy estimate yields different information. Focusing on one gives an **erroneous sense of accuracy**: total accuracy was 74%, but user’s accuracy for built-up was only 57% (slide 22).']
  ],
  confused: [['Commission error', 'Omission error', 'Commission = INCLUDED wrongly in a map class (extra plots in the ROW). Omission = EXCLUDED wrongly from the correct class (missing plots in the COLUMN). Commission error = 100% − user’s accuracy; omission error = 100% − producer’s accuracy.'],
    ['User’s accuracy', 'Producer’s accuracy', 'User asks “Can I trust this map label?” Producer asks “Did I capture all of the real class?” Built-up: the map rarely misses built-up (PA 87%) but labels many non-built-up plots as built-up (UA 57%).']],
  aid: 'Learning aid: “U-R-C”: User → Row → Commission. “P-C-O”: Producer → Column → Omission (with the lecture’s rows = map orientation).'
});

topic({
  id: 'L11-kappa', lec: 'L11', title: 'The Kappa statistic (KHAT)', p: [17, 18, 19],
  summary: 'Kappa measures how much better the classification agrees with the reference data than a random classifier would. For the lecture matrix, K̂ = 0.65.',
  keys: ['l11.kappa', 'l11.observed', 'l11.chance'],
  blocks: [
    ['ul', ['A measure of the difference between the **actual agreement** (reference data vs classification) and the **chance agreement** (reference data vs a random classifier).',
      'Observed accuracy is determined by the diagonal of the error matrix. Chance agreement incorporates the off-diagonal (through the marginal totals). It considers both omission and commission errors.']],
    ['formula', 'f-kappa-simple'], ['formula', 'f-khat'],
    ['h', 'Worked example: the lecture matrix (slide 21 class exercise)'],
    ['steps', ['Diagonal sum Σ X_{ii} = 65 + 81 + 85 + 90 = **321**; N = **434**',
      'N · Σ X_{ii} = 434 × 321 = **139,314**',
      'Σ (X_{i+} · X_{+i}) = 115×75 + 100×103 + 115×115 + 104×141 = 8,625 + 10,300 + 13,225 + 14,664 = **46,814**',
      'N² = 434² = **188,356**',
      'K̂ = (139,314 − 46,814) / (188,356 − 46,814) = 92,500 / 141,542 = **0.6535 ≈ 0.65**',
      'Check with the simple form: observed = 321/434 = 0.7396; chance = 46,814/188,356 = 0.2485; (0.7396 − 0.2485)/(1 − 0.2485) = 0.6535']],
    ['note', 'n11-kapparange']
  ],
  confused: [['Observed accuracy', 'Chance agreement', 'Observed = diagonal sum ÷ N (the overall accuracy, 0.74). Chance = Σ(row total × column total) ÷ N², the agreement expected from a random classifier with the same marginals (0.25).'],
    ['Kappa', 'Overall accuracy', 'Overall accuracy ignores chance. Kappa removes the chance agreement, so it is lower (0.65 vs 0.74 here).']],
  aid: 'Learning aid: Kappa = “how far above luck, out of how far above luck is possible.”'
});

topic({
  id: 'L11-report', lec: 'L11', title: 'Reporting, sources of error and improving classification', p: [20, 21, 22, 23, 24],
  summary: 'Report the full error matrix, user’s, producer’s and total accuracy, and kappa. Low accuracy can come from reference-data errors or classified-map errors, and each problem has a suggested remedy.',
  keys: ['l11.fullreport', 'l11.positional', 'l11.interperr', 'l11.refmedium', 'l11.landuse', 'l11.insep', 'l11.atmos', 'l11.scalemis', 'l11.addspectral', 'l11.grain'],
  blocks: [
    ['h', 'What to report? (slide 23)'],
    ['ul', ['Depends on the audience and the objective of the study.', 'Most references suggest **full reporting** of: error matrix, user’s accuracy, producer’s accuracy, total accuracy, Kappa statistic.']],
    ['h', 'Why might accuracy be low? (slide 24)'],
    ['table', ['Source', 'Specific errors'], [
      ['Errors in reference data', 'Positional error (better rectification of the image may help); interpreter’s error; reference medium inappropriate for the classification'],
      ['Errors in classified map', 'Remotely-sensed data cannot capture the classes: classes are land use, not land cover; classes not spectrally separable; atmospheric effects mask subtle differences; spatial scale of the RS instrument does not match the classification scheme']], null],
    ['h', 'Improving classification (slide 25)'],
    ['table', ['Problem', 'Suggested solution'], [
      ['Land use / land cover', 'Incorporate other data: elevation, temperature, ownership, distance from streams, etc.; context'],
      ['Spectral inseparability', 'Add spectral data: hyperspectral; multiple dates'],
      ['Atmospheric effects', 'Atmospheric correction may help'],
      ['Scale', 'Change grain of spectral data: different sensor; aggregate pixels']], null],
    ['h', 'Summary (slide 26)'],
    ['ul', ['Choice of reference data is important: consider the interaction between the sensor and the desired classification scheme.', 'The error matrix is the foundation of accuracy assessment.', 'All forms of accuracy assessment should be reported to the user.', 'Interpreting accuracy in classes can yield ideas for improving the classification.']]
  ],
  confused: [['Land use', 'Land cover', 'Land cover is the physical material on the surface (grass, concrete), which sensors see directly. Land use is the human activity (park, golf course), which spectra alone often cannot capture, so other data are needed.'],
    ['Spectral inseparability fix', 'Scale problem fix', 'Inseparability: ADD spectral data (hyperspectral, more dates). Scale: CHANGE GRAIN (different sensor or aggregate pixels).']],
  aid: 'Learning aid: “Use Other data, Add Spectra, Correct Atmosphere, Change Grain” matches the four problems in the slide 25 table, in order.'
});

// ───────────────────────── CONCEPTS ─────────────────────────
C('L11', 'L11-intro', 'l11.aa', 'Accuracy assessment', ['accuracy assessment of classification', 'map accuracy assessment', 'validation'], 'Comparison of classes in the reference data with classes on the classified map, done to judge how well a classification worked and how useful someone else’s classification is.', [1, 2], { x: ['L10:14', 'L9:40'] });
C('L11', 'L11-intro', 'l11.pretty', 'Pretty picture', ['a pretty picture', 'just a pretty picture'], 'What the lecture says a classified map becomes when it has no accuracy assessment.', [1]);
C('L11', 'L11-reference', 'l11.reference', 'Reference data', ['reference', 'reference source', 'ground reference data'], 'Data taken as the “truth” for checking a classified map, from sources such as aerial photo interpretation, GPS ground surveys or GIS layers.', [2, 3]);
C('L11', 'L11-reference', 'l11.groundtruth', 'Ground truth (with GPS)', ['ground truth', 'ground truthing', 'gps ground truth', 'gps-derived ground data', 'field data'], 'Reference source collected on the ground at GPS-located plots; needed when, for example, the species of grass cannot be seen in aerial photos.', [3, 4]);
C('L11', 'L11-reference', 'l11.refplot', 'Reference plot', ['reference plots', 'sample plot', 'reference site'], 'Sampled location whose class from the reference source is compared with the class claimed on the classified map.', [3, 5, 8]);
C('L11', 'L11-reference', 'l11.scalematch', 'Matching spatial scale', ['match spatial scale', 'scale matching', 'spatial scale matching', 'match spatial scale reference vs rs data'], 'Plot-size consideration: 5 × 5 m GPS plots do not suit 1 × 1 km RS cells, so aerial photos or other satellite images are preferred.', [5]);
C('L11', 'L11-reference', 'l11.spatfreq', 'Spatial frequency of the image', ['spatial frequency', 'spatial frequencies', 'image spatial frequency'], 'How often cover types change across an image: low means homogeneous, high means heterogeneous. It affects how large reference plots (e.g., 3 × 3 pixels) should be.', [5]);
C('L11', 'L11-reference', 'l11.posacc', 'Positional accuracy (image vs reference)', ['positional accuracy', 'accuracy of position', 'position accuracy', 'registration accuracy'], 'How well image and reference locations coincide, e.g., an image accurate to ±1 pixel; errors matter most in heterogeneous images.', [5, 22]);
C('L11', 'L11-sampling', 'l11.simplerandom', 'Simple random sampling', ['simple random', 'random sampling', 'random'], 'Sampling design in which observations are randomly placed over the whole area.', [6, 7]);
C('L11', 'L11-sampling', 'l11.stratrandom', 'Stratified random sampling', ['stratified random', 'stratified sampling'], 'Sampling design in which a minimum number of observations are randomly placed in each category.', [6, 7]);
C('L11', 'L11-sampling', 'l11.systematic', 'Systematic sampling', ['systematic'], 'Sampling design in which observations are placed at equal intervals according to a strategy.', [6, 7]);
C('L11', 'L11-sampling', 'l11.nonaligned', 'Systematic non-aligned sampling', ['systematic non-aligned', 'systematic nonaligned', 'stratified systematic unaligned sampling', 'systematic unaligned'], 'Sampling design in which a grid provides an even distribution of randomly placed observations.', [7]);
C('L11', 'L11-sampling', 'l11.cluster', 'Cluster sampling', ['cluster'], 'Sampling design in which randomly placed “centroids” serve as the base for several nearby observations.', [7]);
C('L11', 'L11-sampling', 'l11.fifty', '50 samples per class (rule of thumb)', ['50 per class', '50', 'fifty per class', '50 samples per class'], 'Rule-of-thumb sample size for reference data cited from Lillesand & Kiefer (2015).', [6]);
C('L11', 'L11-matrix', 'l11.matrix', 'Error matrix (confusion matrix)', ['error matrix', 'confusion matrix', 'contingency table', 'error matrix confusion matrix'], 'Table that summarizes plot-by-plot comparisons, with classified data as rows and reference data as columns in the lecture; the foundation of accuracy assessment.', [9, 24]);
C('L11', 'L11-matrix', 'l11.diagonal', 'Diagonal (of the error matrix)', ['diagonal', 'diagonals', 'main diagonal', 'diagonal cells', 'diagonal elements'], 'Cells of the error matrix representing sites classified correctly according to the reference data.', [10, 18]);
C('L11', 'L11-matrix', 'l11.offdiag', 'Off-diagonal cells', ['off-diagonal', 'off diagonal', 'off-diagonals', 'off diagonal elements'], 'Cells of the error matrix representing misclassified sites.', [10, 18]);
C('L11', 'L11-matrix', 'l11.marginal', 'Marginal totals', ['marginal total', 'marginals', 'row and column totals', 'row totals and column totals'], 'Row totals (Xi+, to the right of the matrix) and column totals (X+i, at the bottom) used for user’s/producer’s accuracy and chance agreement.', [18]);
C('L11', 'L11-matrix', 'l11.oa', 'Total (overall) accuracy', ['overall accuracy', 'total accuracy', 'oa'], 'Number of correct plots divided by the total number of plots: the sum of the diagonal over N (74% in the lecture).', [10, 11, 16, 20]);
C('L11', 'L11-uapa', 'l11.ua', 'User’s accuracy', ['users accuracy', 'user accuracy', 'ua', 'reliability'], 'Correct plots in a given map class divided by the number claimed to be in that map class; tells the map user how many pixels really are what the map says.', [12, 13, 16]);
C('L11', 'L11-uapa', 'l11.commission', 'Error of commission (inclusion)', ['commission error', 'error of commission', 'commission', 'inclusion error', 'error of inclusion'], 'Error of including sites in a map class to which they do not belong; it corresponds to the map-user’s view (row-based in the lecture).', [12]);
C('L11', 'L11-uapa', 'l11.pa', 'Producer’s accuracy', ['producers accuracy', 'producer accuracy', 'pa'], 'Correct plots of a reference class divided by the number actually in that reference class; tells the map maker how well each real class was labeled.', [14, 15, 16]);
C('L11', 'L11-uapa', 'l11.omission', 'Error of omission (exclusion)', ['omission error', 'error of omission', 'omission', 'exclusion error', 'error of exclusion'], 'Error of leaving sites out of the class they truly belong to; it corresponds to the map-maker’s view (column-based in the lecture).', [14]);
C('L11', 'L11-kappa', 'l11.kappa', 'Kappa statistic (KHAT, K̂)', ['kappa', 'khat', 'kappa coefficient', 'k hat', 'kappa statistic', 'cohens kappa'], 'Measure of the difference between actual agreement (reference vs classification) and chance agreement (reference vs a random classifier); 0.65 for the lecture matrix.', [17, 18, 19]);
C('L11', 'L11-kappa', 'l11.observed', 'Observed accuracy (observed agreement)', ['observed accuracy', 'observed agreement', 'actual agreement', 'po'], 'Agreement taken from the diagonal of the error matrix (diagonal sum ÷ N); the first term in the numerator of K̂.', [17, 18]);
C('L11', 'L11-kappa', 'l11.chance', 'Chance agreement', ['chance', 'expected agreement', 'agreement by chance', 'pe', 'random agreement'], 'Agreement expected between the reference data and a random classifier; computed from the marginal totals, so it incorporates the off-diagonal.', [17, 18]);
C('L11', 'L11-report', 'l11.fullreport', 'Full reporting', ['full reporting of accuracy', 'report all accuracy measures'], 'Recommended practice of reporting the error matrix, user’s, producer’s and total accuracy, and the Kappa statistic.', [21, 24]);
C('L11', 'L11-report', 'l11.positional', 'Positional error', ['position error', 'misregistration', 'registration error'], 'Reference-data error in which locations do not coincide with the image; better rectification of the image may help.', [22]);
C('L11', 'L11-report', 'l11.interperr', 'Interpreter’s error', ['interpreter error', 'interpreters error', 'interpretation error'], 'Reference-data error made by the person labeling the reference source.', [22]);
C('L11', 'L11-report', 'l11.refmedium', 'Inappropriate reference medium', ['reference medium inappropriate for classification', 'inappropriate reference source', 'wrong reference medium'], 'Reference-data error in which the chosen source cannot show the classes required by the scheme.', [22, 4]);
C('L11', 'L11-report', 'l11.landuse', 'Land use vs land cover problem', ['classes are land use not land cover', 'land use', 'land use land cover', 'land use/land cover'], 'Classified-map error source in which classes describe human activity rather than physical cover; remedy: incorporate other data and context.', [22, 23]);
C('L11', 'L11-report', 'l11.insep', 'Spectral inseparability', ['spectrally inseparable', 'classes not spectrally separable', 'spectral confusion'], 'Problem in which classes are not spectrally separable; remedy: add spectral data (hyperspectral, multiple dates).', [22, 23]);
C('L11', 'L11-report', 'l11.atmos', 'Atmospheric effects', ['atmospheric effect', 'atmosphere', 'atmospheric effects mask subtle differences'], 'Problem in which the atmosphere masks subtle differences between classes; remedy: atmospheric correction may help.', [22, 23]);
C('L11', 'L11-report', 'l11.scalemis', 'Scale mismatch', ['scale', 'spatial scale mismatch', 'spatial scale does not match classification scheme'], 'Problem in which the spatial scale of the RS instrument does not match the classification scheme; remedy: change grain of spectral data.', [22, 23]);
C('L11', 'L11-report', 'l11.addspectral', 'Add spectral data', ['adding spectral data', 'hyperspectral and multiple dates', 'add more bands'], 'Suggested solution for spectral inseparability: use hyperspectral data or multiple dates.', [23]);
C('L11', 'L11-report', 'l11.grain', 'Change grain of spectral data', ['change grain', 'change the grain', 'aggregate pixels', 'different sensor'], 'Suggested solution for a scale problem: use a different sensor or aggregate pixels.', [23]);

// ───────────────────────── IDENTIFICATION (incl. calculations) ─────────────────────────
const MX = 'Lecture matrix (rows = CLASSIFIED data, columns = REFERENCE data; order Built-up, Forest, Vegetation, Bare soil): Built-up 65 4 22 24 | 115; Forest 6 81 5 8 | 100; Vegetation 0 11 85 19 | 115; Bare soil 4 7 3 90 | 104; column totals 75 103 115 141 | N = 434.';
I('L11-I01', 'L11', 'L11-matrix', 2, 'calc', MX + ' Compute the TOTAL (overall) accuracy in %, to the nearest whole number.', '74', ['74%'], '(65 + 81 + 85 + 90) / 434 × 100 = 321 / 434 × 100 = 73.96% ≈ 74% (slide 12).', [10], 'l11.oa', { num: { v: 73.96, tol: 0.6, pct: true }, matrix: true });
I('L11-I02', 'L11', 'L11-uapa', 2, 'calc', MX + ' Compute the USER’S accuracy for built-up (%).', '57', ['57%', '56.5'], 'User’s = diagonal ÷ ROW total (rows = map) = 65 / 115 × 100 = 56.5% ≈ 57% (slide 15).', [13], 'l11.ua', { num: { v: 56.52, tol: 0.6, pct: true }, matrix: true });
I('L11-I03', 'L11', 'L11-uapa', 2, 'calc', MX + ' Compute the PRODUCER’S accuracy for built-up (%).', '87', ['87%', '86.7'], 'Producer’s = diagonal ÷ COLUMN total (columns = reference) = 65 / 75 × 100 = 86.7% ≈ 87% (slide 17).', [15], 'l11.pa', { num: { v: 86.67, tol: 0.6, pct: true }, matrix: true });
I('L11-I04', 'L11', 'L11-uapa', 3, 'calc', MX + ' Compute the PRODUCER’S accuracy for forest (%).', '79', ['79%', '78.6'], '81 / 103 × 100 = 78.6% ≈ 79% (slide 18).', [16], 'l11.pa', { num: { v: 78.64, tol: 0.6, pct: true }, matrix: true });
I('L11-I05', 'L11', 'L11-uapa', 3, 'calc', MX + ' Compute the PRODUCER’S accuracy for bare soil (%).', '64', ['64%', '63.8'], '90 / 141 × 100 = 63.8% ≈ 64%. Bare soil has the most omission: 51 bare-soil reference plots were mapped as other classes.', [16], 'l11.pa', { num: { v: 63.83, tol: 0.6, pct: true }, matrix: true });
I('L11-I06', 'L11', 'L11-uapa', 3, 'calc', MX + ' Compute the USER’S accuracy for bare soil (%).', '87', ['87%', '86.5'], '90 / 104 × 100 = 86.5% ≈ 87% (slide 18).', [16], 'l11.ua', { num: { v: 86.54, tol: 0.6, pct: true }, matrix: true });
I('L11-I07', 'L11', 'L11-uapa', 3, 'calc', MX + ' What is the COMMISSION error for built-up (%)?', '43', ['43%', '43.5'], 'Commission error = 100% − user’s accuracy = (4 + 22 + 24) / 115 = 50 / 115 = 43.5%.', [12, 13], 'l11.commission', { num: { v: 43.48, tol: 0.6, pct: true }, matrix: true });
I('L11-I08', 'L11', 'L11-uapa', 3, 'calc', MX + ' What is the OMISSION error for built-up (%)?', '13', ['13%', '13.3'], 'Omission error = 100% − producer’s accuracy = (6 + 0 + 4) / 75 = 10 / 75 = 13.3%.', [14, 15], 'l11.omission', { num: { v: 13.33, tol: 0.6, pct: true }, matrix: true });
I('L11-I09', 'L11', 'L11-kappa', 3, 'calc', MX + ' Compute K̂ (two decimals).', '0.65', ['0,65', '.65'], 'K̂ = (N·ΣXii − Σ Xi+X+i) / (N² − Σ Xi+X+i) = (434·321 − 46,814) / (188,356 − 46,814) = 92,500 / 141,542 = 0.65 (slide 21).', [18, 19], 'l11.kappa', { num: { v: 0.6535, tol: 0.006 }, matrix: true });
I('L11-I10', 'L11', 'L11-kappa', 3, 'calc', MX + ' Compute Σ(Xi+ · X+i), the sum of row-total × column-total products.', '46814', ['46,814', '46 814'], '115×75 + 100×103 + 115×115 + 104×141 = 8,625 + 10,300 + 13,225 + 14,664 = 46,814.', [18], 'l11.chance', { num: { v: 46814, tol: 0.5 }, matrix: true });
I('L11-I11', 'L11', 'L11-kappa', 3, 'calc', MX + ' Compute the CHANCE agreement Σ(Xi+·X+i) / N² (two decimals).', '0.25', ['0,25', '.25', '0.249'], '46,814 / 188,356 = 0.2485 ≈ 0.25.', [17, 18], 'l11.chance', { num: { v: 0.2485, tol: 0.006 }, matrix: true });
I('L11-I12', 'L11', 'L11-kappa', 2, 'def', 'In the KHAT formula, what does X_{i+} denote?', 'Marginal total of row i', ['row total', 'row i total', 'marginal total of row i (to the right of the matrix)', 'row marginal total'], 'Slide 20: Xi+ = marginal total of row i (to the right of the matrix). X+i = marginal total of column i (bottom).', [18], 'l11.marginal', { kw: [['row']] });
I('L11-I13', 'L11', 'L11-kappa', 2, 'def', 'In the KHAT formula, what does X_{+i} denote?', 'Marginal total of column i', ['column total', 'column i total', 'col total', 'marginal total of column i (bottom of the matrix)', 'column marginal total'], 'Slide 20: X+i = marginal total of col i (bottom of the matrix).', [18], 'l11.marginal', { kw: [['col']] });
I('L11-I14', 'L11', 'L11-kappa', 2, 'def', 'In the KHAT formula, what does r denote?', 'Number of rows in the confusion matrix', ['number of rows', 'rows', 'number of classes', 'number of rows in the matrix'], 'Slide 20.', [18], 'l11.kappa', { kw: [['row', 'class']] });
I('L11-I15', 'L11', 'L11-kappa', 2, 'formula', 'K̂ = (observed accuracy − chance agreement) / ( ? ). What goes in the denominator?', '1 − chance agreement', ['1 - chance agreement', 'one minus chance agreement', '1-chance agreement'], 'Slide 19.', [17], 'l11.kappa', { kw: [['1', 'one'], ['chance']] });
I('L11-I16', 'L11', 'L11-kappa', 2, 'scenario', 'A study reports K̂ = 0.85. By the lecture’s interpretation, how much better is the agreement than chance alone (%)?', '85', ['85%', '85 percent'], 'Slide 19: “Kappa of 0.85 means there is 85% better agreement than by chance alone.”', [17], 'l11.kappa', { num: { v: 85, tol: 0.5, pct: true } });
I('L11-I17', 'L11', 'L11-sampling', 1, 'calc', 'Rule-of-thumb number of reference samples PER CLASS (Lillesand & Kiefer, 2015).', '50', ['fifty', '50 per class'], 'Slide 8.', [6], 'l11.fifty', { num: { v: 50, tol: 0 } });
I('L11-I18', 'L11', 'L11-sampling', 2, 'visual', 'One random point is placed inside each cell of a regular grid, so points are evenly spread but do not line up. Which sampling design?', 'Systematic non-aligned sampling', ['systematic non-aligned', 'systematic nonaligned', 'systematic unaligned'], 'Slide 9: a grid provides even distribution of randomly placed observations.', [7], 'l11.nonaligned', { fig: 'q-nonaligned' });
I('L11-I19', 'L11', 'L11-sampling', 2, 'visual', 'A few random “centroids” are placed, and several observations are taken near each one. Which sampling design?', 'Cluster sampling', ['cluster'], 'Slide 9.', [7], 'l11.cluster', { fig: 'q-cluster' });
I('L11-I20', 'L11', 'L11-sampling', 2, 'visual', 'A minimum number of random observations is placed within EACH land cover category. Which sampling design?', 'Stratified random sampling', ['stratified random', 'stratified sampling'], 'Slide 9.', [7], 'l11.stratrandom', { fig: 'q-stratified' });
I('L11-I21', 'L11', 'L11-sampling', 2, 'visual', 'Observations are placed at equal intervals in perfectly aligned rows and columns. Which sampling design?', 'Systematic sampling', ['systematic'], 'Slide 9.', [7], 'l11.systematic', { fig: 'q-systematic' });
I('L11-I22', 'L11', 'L11-reference', 2, 'scenario', 'GPS ground plots are 5 × 5 m but the classified RS cells are 1 × 1 km. Which reference sources does the lecture prefer in this case?', 'Aerial photos or other satellite images', ['aerial photos', 'aerial photographs', 'other satellite images', 'aerial photos or even other satellite images'], 'Slide 7: match spatial scale; aerial photos or even other satellite images are preferred.', [5], 'l11.scalematch', { kw: [['aerial', 'satellite']] });
I('L11-I23', 'L11', 'L11-reference', 2, 'scenario', 'An aerial photo cannot show the species of grass needed by the classification scheme. Which of the three reference-data issues does this illustrate?', 'Choosing the reference source', ['choosing reference source', 'issue 1', 'reference source', 'choice of reference source'], 'Slide 6, Issue 1: make sure you can accurately extract from the reference source the information you need.', [4], 'l11.reference', { kw: [['source']] });
I('L11-I24', 'L11', 'L11-uapa', 2, 'def', 'Accuracy type answering “From the perspective of the MAKER of the classified map, how accurate is the map?”', 'Producer’s accuracy', ['producers accuracy', 'producer accuracy'], 'Slide 16.', [14], 'l11.pa');
I('L11-I25', 'L11', 'L11-uapa', 2, 'def', 'Accuracy type answering “For a given class, how many of the pixels on the map are actually what they say they are?”', 'User’s accuracy', ['users accuracy', 'user accuracy'], 'Slide 14.', [12], 'l11.ua');
I('L11-I26', 'L11', 'L11-report', 2, 'scenario', 'Golf courses and city parks are both “grass” spectrally, but the scheme separates them by use. Which classified-map error is this, and what is the remedy?', 'Classes are land use, not land cover; incorporate other data', ['land use not land cover', 'land use', 'incorporate other data', 'land use land cover'], 'Slides 24–25: problem land use/land cover → incorporate other data (elevation, temperature, ownership, distance from streams, context).', [22, 23], 'l11.landuse', { kw: [['land use', 'other data', 'context']] });
I('L11-I27', 'L11', 'L11-report', 2, 'scenario', 'Two crop types have identical spectra on a single date. Which lecture remedy applies?', 'Add spectral data (hyperspectral, multiple dates)', ['add spectral data', 'multiple dates', 'hyperspectral', 'multitemporal data'], 'Slide 25: spectral inseparability → add spectral data.', [23], 'l11.addspectral', { kw: [['spectral', 'hyperspectral', 'multiple date', 'multitemporal', 'dates']] });
I('L11-I28', 'L11', 'L11-report', 2, 'scenario', 'The RS instrument’s pixel size does not match the classification scheme. Which lecture remedy applies?', 'Change grain of spectral data (different sensor, aggregate pixels)', ['change grain', 'change grain of spectral data', 'aggregate pixels', 'different sensor'], 'Slide 25: scale → change grain of spectral data.', [23], 'l11.grain', { kw: [['grain', 'aggregat', 'different sensor']] });
I('L11-I29', 'L11', 'L11-report', 2, 'scenario', 'Reference error in which plot coordinates and image pixels do not coincide. The lecture says better rectification may help. Name the error.', 'Positional error', ['position error', 'positional'], 'Slide 24.', [22], 'l11.positional');
I('L11-I30', 'L11', 'L11-matrix', 1, 'def', 'Two other names the lecture gives for the error matrix.', 'Confusion matrix or contingency table', ['confusion matrix', 'contingency table', 'confusion matrix and contingency table'], 'Slide 11: ERROR MATRIX (confusion matrix or contingency table).', [9], 'l11.matrix', { kw: [['confusion', 'contingency']] });
I('L11-I31', 'L11', 'L11-uapa', 3, 'calc', MX + ' Compute the USER’S accuracy for forest (%).', '81', ['81%'], '81 / 100 × 100 = 81%.', [16], 'l11.ua', { num: { v: 81, tol: 0.6, pct: true }, matrix: true });
I('L11-I32', 'L11', 'L11-uapa', 3, 'calc', MX + ' How many reference VEGETATION plots were omitted from the vegetation class? (count plots)', '30', ['thirty'], 'Vegetation COLUMN off-diagonals: 22 (mapped built-up) + 5 (forest) + 3 (bare soil) = 30, so PA = 85/115 = 74%.', [14, 16], 'l11.omission', { num: { v: 30, tol: 0 }, matrix: true });

// ───────────────────────── MULTIPLE CHOICE ─────────────────────────
M('L11-M01', 'L11', 'L11-intro', 1, 'According to the lecture, “classified map − accuracy assessment =”…', [
  ['a pretty picture', 'Slide 3.'],
  ['a reference map', 'Reference data are used FOR assessment.'],
  ['a confusion matrix', 'The matrix is part of the assessment.'],
  ['ground truth', 'Ground truth is one reference source.']], [1], 'l11.pretty');
M('L11-M02', 'L11', 'L11-reference', 1, 'Which is NOT listed as a possible source of reference data?', [
  ['The classified map itself', 'Using the map to check itself is circular. It is not a source on slide 5.'],
  ['Aerial photo interpretation', 'Listed.'],
  ['Ground truth with GPS', 'Listed.'],
  ['GIS layers', 'Listed.']], [3], 'l11.reference');
M('L11-M03', 'L11', 'L11-reference', 3, 'Why does positional accuracy of ±1 pixel matter more in a high-spatial-frequency (heterogeneous) image?', [
  ['A one-pixel shift is more likely to land on a different class', 'Slide 7 contrasts low vs high spatial frequency.'],
  ['Heterogeneous images have larger pixels', 'Spatial frequency is not pixel size.'],
  ['Heterogeneous images cannot be rectified', 'Not stated.'],
  ['It does not matter; position is irrelevant to accuracy', 'Positional error is listed as a source of low accuracy.']], [5], 'l11.posacc');
M('L11-M04', 'L11', 'L11-sampling', 2, 'Which sampling design GUARANTEES that rare classes get at least some samples?', [
  ['Stratified random', 'A minimum number of observations is randomly placed in EACH category (slide 9).'],
  ['Simple random', 'Rare classes may get few or no samples.'],
  ['Systematic', 'Equal intervals ignore class membership.'],
  ['Cluster', 'Clusters are placed by random centroids, not by class.']], [7], 'l11.stratrandom');
M('L11-M05', 'L11', 'L11-sampling', 2, 'Which statement about the number of reference plots matches the lecture?', [
  ['More plots are better; one can estimate the number statistically, but in reality one can never get enough (rule of thumb 50 per class)', 'Slide 8.'],
  ['Exactly 10 plots per map are sufficient', 'Not stated.'],
  ['Sample size does not affect accuracy estimates', 'Contradicts the slide.'],
  ['Only one plot per class is required for kappa', 'Not stated.']], [6], 'l11.fifty');
M('L11-M06', 'L11', 'L11-matrix', 2, 'In the lecture’s error matrix, the ROWS represent…', [
  ['the classified data (map)', 'Slide 11: “Classified Data” labels the rows; “Reference Data” labels the columns.'],
  ['the reference data', 'Reference data are the columns in this lecture.'],
  ['the sampling methods', 'No.'],
  ['the user’s accuracy only', 'UA is computed from rows but is not what rows represent.']], [9], 'l11.matrix');
M('L11-M07', 'L11', 'L11-matrix', 1, 'In an error matrix, the diagonal cells represent…', [
  ['sites classified correctly according to the reference data', 'Slide 12.'],
  ['misclassified sites', 'Those are off-diagonal.'],
  ['marginal totals', 'Those are row/column totals.'],
  ['chance agreement', 'Chance comes from the marginals.']], [10], 'l11.diagonal');
M('L11-M08', 'L11', 'L11-matrix', 2, 'Why is total accuracy alone insufficient?', [
  ['It is an average that does not reveal whether error was evenly distributed between classes', 'Slide 13.'],
  ['It is always higher than 90%', 'Not true (74% here).'],
  ['It ignores the diagonal', 'It is computed FROM the diagonal.'],
  ['It cannot be computed without kappa', 'It is computed directly.']], [11], 'l11.oa');
M('L11-M09', 'L11', 'L11-uapa', 2, 'User’s accuracy corresponds to which error?', [
  ['Error of commission (inclusion)', 'Slide 14.'],
  ['Error of omission (exclusion)', 'That is producer’s accuracy.'],
  ['Positional error', 'A reference-data error.'],
  ['Chance agreement', 'Part of kappa.']], [12], 'l11.commission');
M('L11-M10', 'L11', 'L11-uapa', 2, 'With rows = classified and columns = reference, producer’s accuracy for class i is…', [
  ['X_{ii} ÷ column total X_{+i}', 'Number correct ÷ number actually in that reference class (the column).'],
  ['X_{ii} ÷ row total X_{i+}', 'That is user’s accuracy.'],
  ['Σ diagonal ÷ N', 'That is total accuracy.'],
  ['row total ÷ column total', 'Not an accuracy measure.']], [14, 15], 'l11.pa');
M('L11-M11', 'L11', 'L11-uapa', 3, 'In the lecture matrix, built-up has PA = 87% but UA = 57%. What does this mean in practice?', [
  ['Most real built-up plots were mapped as built-up, but many plots the map labels built-up are actually other classes', 'High PA (low omission), low UA (high commission: 50 of 115 built-up map plots are wrong).'],
  ['The map misses most real built-up areas', 'That would be low PA.'],
  ['Built-up is the most trustworthy map class', 'With UA 57%, it is the LEAST trustworthy for users.'],
  ['The matrix must contain an arithmetic error', 'UA and PA naturally differ.']], [13, 15, 16, 20], 'l11.ua');
M('L11-M12', 'L11', 'L11-uapa', 3, 'Using the lecture matrix, which class has the LOWEST producer’s accuracy?', [
  ['Bare soil (64%)', '90/141. Many bare-soil reference plots were mapped as built-up (24) or vegetation (19).'],
  ['Built-up (87%)', 'Highest PA.'],
  ['Forest (79%)', '81/103.'],
  ['Vegetation (74%)', '85/115.']], [16], 'l11.pa');
M('L11-M13', 'L11', 'L11-uapa', 3, 'Twenty-four bare-soil reference plots appear in the BUILT-UP ROW of the lecture matrix. For built-up these are errors of ____, and for bare soil errors of ____.', [
  ['commission; omission', 'They are wrongly included in built-up (commission) and wrongly left out of bare soil (omission).'],
  ['omission; commission', 'Reversed.'],
  ['commission; commission', 'For bare soil they are omitted.'],
  ['omission; omission', 'For built-up they are included.']], [12, 14], 'l11.commission');
M('L11-M14', 'L11', 'L11-kappa', 2, 'Kappa measures the difference between…', [
  ['actual agreement (reference vs classification) and chance agreement (reference vs a random classifier)', 'Slide 19.'],
  ['user’s and producer’s accuracy', 'Not the definition.'],
  ['the largest and smallest class', 'No.'],
  ['positional and interpreter error', 'No.']], [17], 'l11.kappa');
M('L11-M15', 'L11', 'L11-kappa', 2, 'In kappa, “chance agreement” is computed using…', [
  ['the marginal totals (row total × column total products), so it incorporates the off-diagonal', 'Slide 20.'],
  ['only the diagonal cells', 'That is observed accuracy.'],
  ['the number of bands', 'No.'],
  ['the reference plot size', 'No.']], [18], 'l11.chance');
M('L11-M16', 'L11', 'L11-kappa', 3, 'For the lecture matrix, which is correct?', [
  ['Observed 0.74, chance ≈ 0.25, K̂ ≈ 0.65', '(0.7396 − 0.2485)/(1 − 0.2485) = 0.6535.'],
  ['Observed 0.65, chance 0.74, K̂ 0.25', 'Values scrambled.'],
  ['Observed 0.74, chance 0, K̂ 0.74', 'Chance agreement is not zero.'],
  ['Observed 0.57, chance 0.87, K̂ 0.65', 'Those are UA/PA for built-up.']], [17, 18, 19], 'l11.kappa');
M('L11-M17', 'L11', 'L11-kappa', 2, 'Kappa “considers both omission and commission errors.” Why?', [
  ['Its chance term uses both the row totals (map) and the column totals (reference)', 'Slide 20.'],
  ['It averages UA and PA', 'Not how it is computed.'],
  ['It ignores the off-diagonal', 'It incorporates the off-diagonal through the marginals.'],
  ['It only uses the diagonal', 'No.']], [18], 'l11.kappa');
M('L11-M18', 'L11', 'L11-report', 1, 'Which set do most references suggest for full reporting?', [
  ['Error matrix, user’s accuracy, producer’s accuracy, total accuracy and Kappa', 'Slide 23.'],
  ['Only total accuracy', 'Insufficient (slide 22).'],
  ['Only kappa', 'Insufficient.'],
  ['Only the classified map', 'A “pretty picture.”']], [21], 'l11.fullreport');
M('L11-M19', 'L11', 'L11-report', 2, 'Which is an error in the REFERENCE data (not the classified map)?', [
  ['Interpreter’s error', 'Slide 24 lists positional error, interpreter’s error and an inappropriate reference medium.'],
  ['Classes not spectrally separable', 'Classified-map error.'],
  ['Atmospheric effects masking subtle differences', 'Classified-map error.'],
  ['Sensor scale not matching the scheme', 'Classified-map error.']], [22], 'l11.interperr');
M('L11-M20', 'L11', 'L11-report', 2, 'Haze masks subtle differences between classes. The lecture’s suggested solution is…', [
  ['Atmospheric correction may help', 'Slide 25.'],
  ['Aggregate pixels', 'That is the scale remedy.'],
  ['Incorporate ownership data', 'That is the land-use remedy.'],
  ['Use fewer reference plots', 'Never suggested.']], [23], 'l11.atmos');
M('L11-M21', 'L11', 'L11-report', 2, 'The lecture summary calls which element the FOUNDATION of accuracy assessment?', [
  ['The error matrix', 'Slide 26.'],
  ['The kappa statistic', 'Kappa is derived from the matrix.'],
  ['Total accuracy', 'Derived from the matrix.'],
  ['The MMU', 'Lecture 10.']], [24], 'l11.matrix');
M('L11-M22', 'L11', 'L11-uapa', 2, 'Total accuracy is 74% but built-up user’s accuracy is only 57%. The lecture uses this to show that…', [
  ['focusing on one accuracy estimate gives an erroneous sense of accuracy', 'Slide 22.'],
  ['total accuracy is always wrong', 'It is correct, just incomplete.'],
  ['user’s accuracy should never be reported', 'It should be reported.'],
  ['kappa must equal user’s accuracy', 'No relation.']], [20], 'l11.ua');
M('L11-M23', 'L11', 'L11-reference', 2, 'Photo reference plots that cover 3 × 3 pixels are discussed under which plot-size consideration?', [
  ['Spatial frequencies of the image', 'Slide 7.'],
  ['Choosing the reference source', 'Issue 1.'],
  ['Number of samples', 'Issue 3.'],
  ['Kappa calculation', 'Unrelated.']], [5], 'l11.spatfreq');
M('L11-M24', 'L11', 'L11-matrix', 2, 'In the comparing-data table, plot 2 is forest in the reference but vegetation on the map. In the error matrix (rows = map), this plot is counted in…', [
  ['the vegetation ROW, forest COLUMN', 'Row = map class (vegetation); column = reference class (forest).'],
  ['the forest ROW, vegetation COLUMN', 'That is the transpose orientation.'],
  ['the diagonal', 'It disagrees, so it is off-diagonal.'],
  ['the totals row only', 'Every plot falls in exactly one cell.']], [8, 9], 'l11.matrix');

// ───────────────────────── RECALL ─────────────────────────
R('L11-R01', 'L11', 'L11-uapa', 'diff', 'Explain the difference between user’s and producer’s accuracy, including the error type and the denominator (lecture orientation).', 'User’s: map-user perspective; correct in a MAP class ÷ number claimed in that map class (ROW total); error of commission (inclusion). Producer’s: map-maker perspective; correct in a REFERENCE class ÷ number actually in that class (COLUMN total); error of omission (exclusion). Rows = classified, columns = reference.', [12, 14], 'l11.ua');
R('L11-R02', 'L11', 'L11-kappa', 'formula', 'Write the KHAT formula and define each symbol.', 'K̂ = (N Σ X_ii − Σ X_i+ X_+i) / (N² − Σ X_i+ X_+i), sums over i = 1…r. r = number of rows; X_ii = observations in row i column i; X_i+ = row i marginal total (right); X_+i = column i marginal total (bottom); N = total samples.', [18], 'l11.kappa');
R('L11-R03', 'L11', 'L11-sampling', 'explain', 'Describe the five sampling methods.', 'Simple random: randomly placed. Stratified random: minimum number randomly placed in each category. Systematic: equal intervals by a strategy. Systematic non-aligned: grid gives even spread of randomly placed points. Cluster: random centroids each with several nearby observations.', [7], 'l11.stratrandom');
R('L11-R04', 'L11', 'L11-report', 'explain', 'Give the four problem → solution pairs for improving classification.', 'Land use/land cover → incorporate other data (elevation, temperature, ownership, distance from streams, context). Spectral inseparability → add spectral data (hyperspectral, multiple dates). Atmospheric effects → atmospheric correction may help. Scale → change grain (different sensor, aggregate pixels).', [23], 'l11.landuse');
R('L11-R05', 'L11', 'L11-reference', 'steps', 'List the three issues in collecting reference data and the plot-size considerations.', '1 Choosing the reference source (can you extract the needed info?). 2 Size of reference plots: match spatial scale; spatial frequency of image (e.g., 3×3 pixel plots); positional accuracy (e.g., ±1 pixel). 3 Position and number of samples (sampling scheme; ~50 per class).', [3, 4, 5, 6], 'l11.reference');
R('L11-R06', 'L11', 'L11-kappa', 'steps', 'Walk through computing kappa for the lecture matrix.', 'ΣXii = 321, N = 434 → N·ΣXii = 139,314. ΣXi+X+i = 8,625 + 10,300 + 13,225 + 14,664 = 46,814. N² = 188,356. K̂ = (139,314 − 46,814)/(188,356 − 46,814) = 92,500/141,542 = 0.65.', [18, 19], 'l11.kappa');
R('L11-R07', 'L11', 'L11-report', 'diff', 'Contrast errors in reference data with errors in the classified map.', 'Reference data: positional error (better rectification), interpreter’s error, inappropriate reference medium. Classified map: RS data cannot capture the classes — land use not land cover, not spectrally separable, atmospheric effects, sensor scale mismatch.', [22], 'l11.positional');

// ───────────────────────── FORMULAS ─────────────────────────
F({ id: 'f-oa', lec: 'L11', topic: 'L11-matrix', name: 'Total (overall) accuracy', expr: 'Accuracy_{Total} = (Σ diagonal) / N × 100', vars: [['Σ diagonal', 'sum of correctly classified plots (diagonal cells)'], ['N', 'total number of plots']], units: '%', example: '(65 + 81 + 85 + 90) / 434 × 100 = 74%', assume: 'Counts are reference plots, not pixels of the whole map.', p: [10] });
F({ id: 'f-ua', lec: 'L11', topic: 'L11-uapa', name: 'User’s accuracy (class i)', expr: 'UA_{i} = X_{ii} / X_{i+} × 100', vars: [['X_{ii}', 'correct plots of class i (diagonal)'], ['X_{i+}', 'ROW total = plots the map claims for class i (lecture orientation)']], units: '%', example: 'Built-up: 65 / 115 × 100 = 57%', assume: 'Rows = classified data. If a matrix is transposed, use its column total instead.', p: [12, 13] });
F({ id: 'f-pa', lec: 'L11', topic: 'L11-uapa', name: 'Producer’s accuracy (class i)', expr: 'PA_{i} = X_{ii} / X_{+i} × 100', vars: [['X_{ii}', 'correct plots of class i'], ['X_{+i}', 'COLUMN total = plots actually in reference class i (lecture orientation)']], units: '%', example: 'Built-up: 65 / 75 × 100 = 87%', assume: 'Columns = reference data.', p: [14, 15] });
F({ id: 'f-err', lec: 'L11', topic: 'L11-uapa', name: 'Commission and omission error', expr: 'Commission_{i} = 100% − UA_{i};  Omission_{i} = 100% − PA_{i}', vars: [['UA_{i}', 'user’s accuracy'], ['PA_{i}', 'producer’s accuracy']], units: '%', example: 'Built-up: commission 43.5%, omission 13.3%', assume: 'Derived relation (standard), consistent with slides 14 and 16.', p: [12, 14] });
F({ id: 'f-kappa-simple', lec: 'L11', topic: 'L11-kappa', name: 'Kappa (concept form)', expr: 'K̂ = (observed accuracy − chance agreement) / (1 − chance agreement)', vars: [['observed accuracy', 'Σ diagonal / N'], ['chance agreement', 'Σ (X_{i+}·X_{+i}) / N²']], units: 'dimensionless', example: '(0.7396 − 0.2485) / (1 − 0.2485) = 0.65', assume: 'Lecture states range 0–1 (see clarification).', p: [17] });
F({ id: 'f-khat', lec: 'L11', topic: 'L11-kappa', name: 'KHAT (computational form)', expr: 'K̂ = [N Σ_{i=1}^{r} X_{ii} − Σ_{i=1}^{r} (X_{i+}·X_{+i})] / [N² − Σ_{i=1}^{r} (X_{i+}·X_{+i})]', vars: [['r', 'number of rows in the confusion matrix'], ['X_{ii}', 'observations in row i, column i'], ['X_{i+}', 'marginal total of row i (right of matrix)'], ['X_{+i}', 'marginal total of column i (bottom of matrix)'], ['N', 'total number of samples in the matrix']], units: 'dimensionless', example: '(434·321 − 46,814) / (434² − 46,814) = 92,500 / 141,542 = 0.65', assume: '', p: [18, 19] });
DATA.matrixText = MX;

// ── Additional items linking every substantive page to practice
I('L11-I33', 'L11', 'L11-intro', 1, 'scenario', 'Accuracy assessment compares, location by location, the class in the ______ with the class on the classified map.', 'Reference data', ['reference', 'reference source', 'ground truth'], 'Slide 4: Class (Reference Data) ? Class (Classified Map).', [2], 'l11.reference');
