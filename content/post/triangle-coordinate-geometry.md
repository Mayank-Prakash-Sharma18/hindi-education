---
author: Mragank Shandilya
title: निर्देशांक ज्यामिति - त्रिभुज (Coordinate Geometry - Triangle)
date: "2022-01-08"
description: निर्देशांक ज्यामिति - त्रिभुज (Coordinate Geometry - Triangle) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["coordinate-geometry"]
categories: ["coordinate-geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/coordinate-geometry/triangle-1.png" # Sets featured image on blog post.
thumbnail: "images/coordinate-geometry/triangle-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Triangle, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-coordinate-geometry" title="Coordinate Geometry" class="mak-link">निर्देशांक ज्यामिति क्या होती है?</a> 
* <a href="../finding-position-of-points-in-coordinate-geometry" title="Coordinate Geometry" class="mak-link">निर्देशांक ज्यामिति में निर्देशांक और बिंदुओं की स्थिति ढूँढना</a> 
* <a href="../line-equations-coordinate-geometry" title="Coordinate Geometry" class="mak-link">रेखाओं का समीकरण</a> 
* <a href="../two-lines-coordinate-geometry" title="Coordinate Geometry" class="mak-link">निर्देशांक ज्यामिति - दो रेखाएं</a> 
* <a href="../triangle-coordinate-geometry" title="Coordinate Geometry" class="mak-link">त्रिभुज</a> 
* <a href="../quadrilateral-coordinate-geometry" title="Coordinate Geometry" class="mak-link">चतुर्भुज</a> 
* <a href="../circle-coordinate-geometry" title="Coordinate Geometry" class="mak-link">वृत्त का समीकरण</a> 
* <a href="../reflection-of-a-point-in-coordinate-geometry" title="Coordinate Geometry" class="mak-link">बिंदु का प्रतिबिंब</a> 
</div>

इस लेख में, हम त्रिभुजों से संबंधित निर्देशांक ज्यामिति की मूल अवधारणाओं और सूत्रों के बारे में जानने जा रहे हैं।

## त्रिभुज का क्षेत्रफल (Area of a Triangle)

हम त्रिभुज का क्षेत्रफल ज्ञात कर सकते हैं यदि हम इसके शीर्षों (vertices) के निर्देशांक जानते हैं। आइए देखें कैसे।

<p> यदि ABC के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)) और C (\(x_3\), \(y_3\)) हैं, तो: </p> 

आरेख: <br>
<img src="../../../images/coordinate-geometry/triangle-1.png" alt="Coordinate Geometry" style="width:63%;height:63%;">

<p> त्रिभुज का क्षेत्रफल, ∆ = \(\frac{1}{2} \begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
x_3 & y_3 & 1 
\end{vmatrix} = \frac{1}{2} |x_1 (y_2 – y_3) + x_2 (y_3 – y_1) + x_3 (y_1 – y_2)| = \frac{1}{2} |(x_1 y_2 – x_2 y_1) + (x_2 y_3 – x_3 y_2) + (x_3 y_1 – x_1 y_3)|\) </p> 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हमने उपरोक्त सूत्र में मापांक चिह्न (modulus signs) रखे हैं, क्योंकि त्रिभुज का क्षेत्रफल (या किसी अन्य आकृति का) कभी भी ऋणात्मक नहीं हो सकता है।

वास्तव में, हम किसी भी बहुभुज के लिए उपरोक्त सूत्र का सामान्यीकरण कर सकते हैं।

<p> यदि हमारे पास एक बहुभुज (polygon) है, जिसके शीर्ष हैं (\(x_1\), \(y_1\)), (\(x_2\), \(y_2\)), (\(x_3\), \(y_3\)) .... (\(x_n\), \(y_n\) ), तो: </p> 

<p> बहुभुज का क्षेत्रफल = \(\frac{1}{2} |(x_1 y_2 – x_2 y_1) + (x_2 y_3 – x_3 y_2) + (x_3 y_4 – x_4 y_3) + .... + (x_{n - 1} y_n – x_n y_{n - 1}) + (x_n y_1 – x_1 y_n)|\) </p> 
</div>


## त्रिभुज में महत्वपूर्ण बिंदुओं के निर्देशांक (Coordinates of Important Points in a Triangle)

### केन्द्रक के निर्देशांक (Coordinates of Centroid)

<p> यदि ABC के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)) और C (\(x_3\), \(y_3\)) हैं, तो: <br>
इसके केन्द्रक के निर्देशांक = \((\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3})\) </p> 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

**केन्द्रक (Centroid)** (G), त्रिभुज की माध्यिकाओं (medians) का प्रतिच्छेदन बिंदु है। <br>
<img src="../../../images/geometry/triangle-lines-points-5.png" alt="Geometry" style="width:90%;height:90%;">

**माध्यमिका (Median)** एक रेखाखंड है, जो त्रिभुज के किसी भी शीर्ष को उसकी विपरीत भुजा के मध्य-बिंदु से मिलाती है।
</div>

### अन्तःकेन्द्र के निर्देशांक (Coordinates of Incentre)

<p> यदि ABC के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)) और C (\(x_3\), \(y_3\)) हैं, और उनके विपरीत भुजाओं की लंबाई a, b और c है, तो: <br>
इसके अन्तःकेन्द्र के निर्देशांक = \((\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \frac{ay_1 + by_2 + cy_3}{a + b + c})\) </p> 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

**अन्तःकेन्द्र (Incentre)** त्रिभुज के कोणों के आंतरिक समद्विभाजकों (internal bisectors) का प्रतिच्छेदन बिंदु है। <br>
<img src="../../../images/geometry/triangle-lines-points-27.png" alt="Geometry" style="width:90%;height:90%;">
</div>

### परिकेन्द्र के निर्देशांक (Coordinates of Circumcenter)

<p> यदि ABC के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)) और C (\(x_3\), \(y_3\)) हैं, तो: <br>
इसके परिकेन्द्र के निर्देशांक = \((\frac{x_1 \hspace{1ex} sin 2A \hspace{1ex} + \hspace{1ex} x_2 \hspace{1ex} sin 2B \hspace{1ex} + \hspace{1ex} x_3 \hspace{1ex} sin 2C}{sin 2A + sin 2B + sin 2C}, \frac{y_1 \hspace{1ex} sin 2A \hspace{1ex} + \hspace{1ex} y_2 \hspace{1ex} sin 2B \hspace{1ex} + \hspace{1ex} y_3 \hspace{1ex} sin 2C}{sin 2A + sin 2B + sin 2C})\) </p> 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

**परिकेन्द्र (Circumcenter)** किसी त्रिभुज की भुजाओं के लंब समद्विभाजकों (perpendicular bisectors of the sides) का प्रतिच्छेदन बिंदु है। <br>
<img src="../../../images/geometry/triangle-lines-points-36.png" alt="Geometry" style="width:90%;height:90%;">
</div>

### लम्ब केंद्र के निर्देशांक (Coordinates of Orthocenter)

<p> यदि ABC के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)) और C (\(x_3\), \(y_3\)) हैं, तो: <br>
इसके लम्ब केंद्र के निर्देशांक = \((\frac{x_1 \hspace{1ex} tan A \hspace{1ex} + \hspace{1ex} x_2 \hspace{1ex} tan B \hspace{1ex} + \hspace{1ex} x_3 \hspace{1ex} tan C}{tan A + tan B + tan C}, \frac{y_1 \hspace{1ex} tan A \hspace{1ex} + \hspace{1ex} y_2 \hspace{1ex} tan B \hspace{1ex} + \hspace{1ex} y_3 \hspace{1ex} tan C}{tan A + tan B + tan C})\) </p> 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

**लम्ब केंद्र (Orthocenter)** किसी त्रिभुज के शीर्ष-लंबों (altitudes) का प्रतिच्छेदन बिंदु है। <br>
<img src="../../../images/geometry/triangle-lines-points-16.png" alt="Geometry" style="width:72%;height:72%;">
</div>

