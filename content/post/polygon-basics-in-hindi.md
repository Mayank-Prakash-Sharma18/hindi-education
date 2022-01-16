---
author: Mragank Shandilya
title: बहुभुज और उसके गुण (Polygon and its properties)
date: "2022-01-14"
description: बहुभुज और उसके गुण (Polygon and its properties) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/polygon-3.png" # Sets featured image on blog post.
thumbnail: "images/geometry/polygon-3.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Polygon and its properties, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-geometry" title="Geometry" class="mak-link">ज्यामिति क्या होती है?</a> 
* <a href="../lines-and-angles-in-geometry" title="Geometry" class="mak-link">ज्यामिति में रेखाएं और कोण</a> 
* <a href="../triangle-basics-in-hindi" title="Geometry" class="mak-link">ज्यामिति में त्रिभुज</a> 
* <a href="../important-lines-and-points-in-triangles" title="Geometry" class="mak-link">त्रिभुज से संबंधित महत्वपूर्ण रेखाएं और बिंदु</a> 
* <a href="../important-theorems-related-to-triangles" title="Geometry" class="mak-link">त्रिभुज से सम्बंधित महत्वपूर्ण प्रमेय और नियम</a> 
* <a href="../similarity-theorems-of-triangles-and-their-applications" title="Geometry" class="mak-link">समरूपता प्रमेय और उनके अनुप्रयोग</a> 
* <a href="../triangles-congruency-and-similarity-in-hindi" title="Geometry" class="mak-link">त्रिभुजों की सर्वांगसमता और समरूपता क्या होती हैं?</a> 
* <a href="../triangle-area-in-hindi" title="Geometry" class="mak-link">त्रिभुज के क्षेत्रफल से सम्बंधित सूत्र और गुण</a> 
* <a href="../quadrilaterals-basics-in-hindi" title="Geometry" class="mak-link">चतुर्भुज और उसके गुण</a> 
* <a href="../quadrilaterals-area-in-hindi" title="Geometry" class="mak-link">चतुर्भुज के क्षेत्रफल से सम्बंधित सूत्र और गुण</a> 
* <a href="../what-is-parallelogram" title="Geometry" class="mak-link">समांतर चतुर्भुज और उसके गुण</a> 
* <a href="../what-is-trapezium" title="Geometry" class="mak-link">समलंब चतुर्भुज और उसके गुण</a>
* <a href="../polygon-basics-in-hindi" title="Geometry" class="mak-link">बहुभुज और उसके गुण</a> 
* <a href="../circle-basics-in-hindi" title="Geometry" class="mak-link">वृत्त और उसके गुण</a> 
* <a href="../circle-theorems-in-hindi" title="Geometry" class="mak-link">वृत्त प्रमेय</a> 
</div>

इस लेख में हम बहुभुज और उसके गुणों के बारे में अध्ययन करेंगे।


## बहुभुज क्या होता है? (What is a Polygon?)

बहुभुज एक 2 D ज्यामितीय आकृति है, जो एक सीमित संख्या में रेखाखंडों से घिरा होता है। बहुभुज बनाने के लिए, हमें कम से कम तीन रेखाखंडों की आवश्यकता होती है।


## बहुभुज के प्रकार (Types of Polygons)

विभिन्न प्रकार के बहुभुज हैं। हम उन्हें इसके आधार पर वर्गीकृत करते हैं:
* उनकी भुजाओं की संख्या, या
* उनके पास किस प्रकार की भुजाएँ और कोण हैं।

आइए इन दोनों वर्गीकरणों पर एक नजर डालते हैं। 

### भुजाओं की संख्या के आधार पर बहुभुजों के प्रकार (Types of Polygons based on Number of Sides)

यहां विभिन्न बहुभुजों की एक सूची दी गई है, उनके भुजाओं की संख्या के आधार पर। <br>
<img src="../../../images/geometry/polygon-1.png" alt="Polygon" style="width:63%;height:63%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हम पिछले लेखों में त्रिभुजों और चतुर्भुजों का बहुत विस्तार से अध्ययन कर चुके हैं। ये दो प्रकार के बहुभुज प्रवेश परीक्षा के दृष्टिकोण से सबसे महत्वपूर्ण हैं।

यहां, हम सामान्य रूप से बहुभुज पर ध्यान केंद्रित करेंगे।
</div>

### भुजाओं और कोणों के प्रकार पर आधारित बहुभुजों के प्रकार (Types of Polygons based on Type of Sides and Angles)

#### उत्तल और अवतल बहुभुज (Convex and Concave Polygons)

* एक उत्तल बहुभुज (Convex Polygon) में, प्रत्येक कोण 180° से कम होता है।

* एक अवतल बहुभुज (Concave Polygon) में, कम से कम एक कोण 180° से अधिक होता है।

उदाहरण के लिए, निम्नलिखित आरेखों पर एक नज़र डालें: <br>
<img src="../../../images/geometry/polygon-2.png" alt="Polygon" style="width:81%;height:81%;">

#### नियमित और गैर-नियमित बहुभुज (Regular and Non-regular Polygon)

* एक नियमित बहुभुज (Regular Polygon) में, सभी भुजाएँ और सभी कोण समान होते हैं।

* एक गैर-नियमित बहुभुज (Non-Regular Polygon) में, कम से कम दो पक्ष होते हैं जो एक दूसरे के बराबर नहीं होते हैं (और इसलिए कम से कम दो कोण होंगे जो एक दूसरे के बराबर नहीं होंगे)।

उदाहरण के लिए, निम्नलिखित आरेखों पर एक नज़र डालें: <br>
<img src="../../../images/geometry/polygon-3.png" alt="Polygon" style="width:99%;height:99%;">


## बहुभुज से संबंधित सूत्र (Formulae related to Polygons)

अब, आइए उन विभिन्न सूत्रों पर एक नज़र डालें जिनका हम बहुभुजों पर आधारित प्रश्नों को हल करते समय व्यापक रूप से उपयोग करने जा रहे हैं। उनमें से कुछ किसी भी प्रकार के बहुभुज पर लागू होंगे, जबकि कुछ अन्य केवल नियमित बहुभुजों पर लागू हो सकते हैं।

### किसी भी बहुभुज पर लागू होने वाले सूत्र (Formulae applicable to Any Polygon)

ये सूत्र किसी भी प्रकार के बहुभुज के मामले में लागू किए जा सकते हैं।

#### सूत्र 1: कोणों का योग (Sum of Angles)

* एक बहुभुज के सभी आंतरिक कोणों (interior angles) का योग = (n - 2) x 180°

* एक बहुभुज के सभी बहिष्कोणों (exterior angles) का योग = 360°

* बहुभुज के किसी भी शीर्ष पर अंतः कोण और बहिष्कोण का योग = 180°

* n भुजा वाले तारे के आकार के बहुभुज के शीर्ष कोणों का योग = (n - 4) x 180°

#### सूत्र 2: विकर्णों की संख्या (Number of diagonals)

<p> बहुभुज के विकर्णों की संख्या = \(C^n_2 – n = \frac{n (n-3)}{2}\) </p>


### सूत्र जो केवल नियमित बहुभुजों पर लागू होते हैं (Formulae applicable to Only Regular Polygons)

ये सूत्र केवल नियमित बहुभुजों (regular polygons) के मामले में ही लागू किए जा सकते हैं।

#### सूत्र 1: कोणों का माप (Measure of Angles)

* <p> एक नियमित बहुभुज के प्रत्येक आंतरिक कोण का माप = \(\frac{(n - 2) × 180°}{n}\) </p>

* <p> एक नियमित बहुभुज के प्रत्येक बाहरी कोण का माप = \(\frac{360°}{n}\) </p>

#### सूत्र 2: क्षेत्रफल (Area)

<p> एक नियमित बहुभुज का क्षेत्रफल = \(\frac{1}{2}\) × परिमाप × नियमित बहुभुज के केंद्र से किसी भी भुजा की लंबवत दूरी </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह बहुभुज बनाने वाले त्रिभुजों के क्षेत्रफलों को जोड़ने के समान है।
</div>

आइए कुछ उदाहरण देखें।

* <p> समबाहु त्रिभुज (equilateral triangle) का क्षेत्रफल = \(\frac{\sqrt{3}}{4} a^2\) </p>

* <p> वर्ग (square) का क्षेत्रफल = \(a^2\) </p>

* <p> एक नियमित षट्भुज (regular hexagon) का क्षेत्रफल = \(\frac{3 \sqrt{3}}{2} a^2\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

नियमित षट्भुज का क्षेत्रफल = 6 × समबाहु त्रिभुज का क्षेत्रफल
</div>

* <p> एक नियमित अष्टभुज (regular octagon) का क्षेत्रफल = 2(√2 + 1) \(a^2\) </p>


## बहुभुज के गुण (Properties of Polygons)

### गुण 1: आंतरिक और बाहरी कोणों के बीच संबंध (Relation between Interior and Exterior angles)

<p> त्रिभुज के मामले में, आंतरिक कोणों का योग = \(\frac{1}{2}\) × बाहरी कोणों का योग = 180° </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

एक बहुभुज के बहिष्कोणों का योग हमेशा 360° होता है। 
</div>

आयत के मामले में, आंतरिक कोणों का योग = बाहरी कोणों का योग = 360°

किसी भी अन्य प्रकार के बहुभुज में (अर्थात त्रिभुज और चतुर्भुज को छोड़कर): <br>
आंतरिक कोणों का योग > बाह्य कोणों का योग (360°)

