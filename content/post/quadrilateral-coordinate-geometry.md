---
author: Mragank Shandilya
title: निर्देशांक ज्यामिति - चतुर्भुज (Coordinate Geometry - Quadrilateral)
date: "2022-01-08"
description: निर्देशांक ज्यामिति - चतुर्भुज (Coordinate Geometry - Quadrilateral) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["coordinate-geometry"]
categories: ["coordinate-geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/coordinate-geometry/quadrilateral-1.png" # Sets featured image on blog post.
thumbnail: "images/coordinate-geometry/quadrilateral-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Quadrilaterals, in Hindi</strong>

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

## चतुर्भुज का क्षेत्रफल (Area of a Quadrilateral)

हम एक चतुर्भुज (अर्थात समचतुर्भुज/Rhombus, आयत/Rectangle, वर्ग/Square, समांतर चतुर्भुज/Parallelogram, पतंग/Kite, समलंब/Trapezium, आदि) का क्षेत्रफल ज्ञात कर सकते हैं यदि हम इसके शीर्षों के निर्देशांक जानते हैं। आइए देखें कैसे।

<p> यदि एक चतुर्भुज ABCD के शीर्ष A (\(x_1\), \(y_1\)), B (\(x_2\), \(y_2\)), C (\(x_3\), \(y_3\)), और D (\(x_4\), \(y_4\)) हैं, तो: </p> 

आरेख: <br>
<img src="../../../images/coordinate-geometry/quadrilateral-1.png" alt="Coordinate Geometry" style="width:72%;height:72%;">

<p> चतुर्भुज का क्षेत्रफल = \(\frac{1}{2} |(x_1 y_2 – x_2 y_1) + (x_2 y_3 – x_3 y_2) + (x_3 y_4 – x_4 y_3) + (x_4 y_1 – x_1 y_4)|\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हमने उपरोक्त सूत्र में मापांक चिह्न (modulus signs) रखे हैं, क्योंकि एक चतुर्भुज का (या किसी अन्य आकृति का) क्षेत्रफल कभी भी ऋणात्मक नहीं हो सकता है।

वास्तव में, हम किसी भी बहुभुज के लिए उपरोक्त सूत्र का सामान्यीकरण कर सकते हैं।

<p> यदि हमारे पास एक बहुभुज (polygon) है, जिसके शीर्ष हैं (\(x_1\), \(y_1\)), (\(x_2\), \(y_2\)), (\(x_3\), \(y_3\)) .... (\(x_n\), \(y_n\)), तो: </p>

<p> बहुभुज का क्षेत्रफल = \(\frac{1}{2} |(x_1 y_2 – x_2 y_1) + (x_2 y_3 – x_3 y_2) + (x_3 y_4 – x_4 y_3) + .... + (x_{n - 1} y_n – x_n y_{n - 1}) + (x_n y_1 – x_1 y_n)|\) </p>
</div>

