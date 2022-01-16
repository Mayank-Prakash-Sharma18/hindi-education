---
author: Mragank Shandilya
title: ज्यामिति क्या होती है? (What is Geometry?)
date: "2022-01-14"
description: ज्यामिति क्या होती है? (What is Geometry?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/point-1.png" # Sets featured image on blog post.
thumbnail: "images/geometry/point-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Geometry?, in Hindi</strong>

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

'geometry' शब्द दो ग्रीक शब्दों से बना है:
* geo - इसका अर्थ है 'पृथ्वी'
* metron - इसका अर्थ है 'माप'

यह गणित की एक शाखा है, जो विभिन्न ज्यामितीय आकृतियों, जैसे बिंदुओं, रेखाओं, कोणों, सतह (जैसे त्रिभुज, वृत्त, बहुभुज) और ठोस (जैसे घन, गोले, शंकु) के माप, गुणों और संबंधों से संबंधित है।


## ज्यामिति का वर्गीकरण (Classification of Geometry)

इसे मोटे तौर पर दो भागों में वर्गीकृत किया जा सकता है:

* ***<span class="mak-text-color">समतल ज्यामिति (Plane Geometry)</span>***: समतल ज्यामिति द्वी-आयामी आकृतियों, जैसे रेखा, त्रिभुज, वर्ग, आयत और वृत्त, आदि से संबंधित है। इन आकृतियों को आसानी से कागज पर बनाया जा सकता है। वर्तमान मॉड्यूल में, हम केवल समतल ज्यामिति पर ही चर्चा करेंगे| 

* ***<span class="mak-text-color">ठोस ज्यामिति (Solid Geometry)</span>***: ठोस ज्यामिति घन, गोला, शंकु, प्रिज्म, आदि जैसी तीन आयामी वस्तुओं के बारे में होती है। हम इसे क्षेत्रमिति नामक दूसरे मॉड्यूल में पढ़ेंगे| 

इनके अलावा, गणित की कुछ शाखाएँ हैं जो या तो ज्यामिति से निकटता से संबंधित हैं, या जहाँ हम ज्यामिति की अवधारणाओं को लागू करते हैं।
* ऊँचाई और दूरी (Height and Distance) - यहाँ हम ज्यामिति, साथ ही त्रिकोणमिति की अवधारणाओं का उपयोग करते हैं| 
* निर्देशांक ज्यामिति (Co-ordinate Geometry)


## समतल ज्यामिति से संबंधित अवधारणाएं (Concepts Related to Plane Geometry)

ज्यामिति में हम निम्नलिखित विषयों के बारे में अध्ययन करेंगे:

* बिंदु (Point)
* रेखाएं और कोण (Lines and Angles)
* त्रिकोण (Triangle)
* वृत्त (Circle)
* चतुर्भुज (Quadrilaterals)
* बहुभुज (Polygons)


## बिंदु (Point)

### बिंदु क्या होता है? (What is a Point?)

बिंदु की परिभाषा : जिस आकृति की लंबाई, चौड़ाई और ऊंचाई को मापा नहीं जा सकता, उसे बिंदु कहते हैं। यह अतिसूक्ष्म होता है। दूसरे शब्दों में, हम कह सकते हैं कि इसका कोई आयाम नहीं होता है।

### बिंदु के गुण (Properties of a Point)

#### गुण 1

एक बिंदु से होती हुई अनंत रेखाएँ खींची जा सकती हैं। <br>
<img src="../../../images/geometry/point-1.png" alt="Geometry" style="width:63%;height:63%;">

#### गुण 2

हम दो भिन्न बिंदुओं से होकर केवल एक ही रेखा खींच सकते हैं। <br>
<img src="../../../images/geometry/point-2.png" alt="Geometry" style="width:81%;height:81%;">

दिए गए किन्हीं दो बिंदुओं को एक रेखा से जोड़ा जा सकता है, अर्थात् दिए गए कोई भी दो बिंदु हमेशा समरेख (संरेख, collinear) होते हैं।

#### गुण 3: समरेख बिंदु (Collinear Points)

तीन या तीन से अधिक बिंदुओं को समरेखी केवल तभी कहा जाता है, जब कोई रेखा खंड उनसे होता हुआ गुजर सकता है। अन्यथा, वे असंरेख (non-collinear) बिंदु कहलाते हैं। <br>
<img src="../../../images/geometry/point-3.png" alt="Geometry" style="width:81%;height:81%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जैसा कि हम पहले से ही जानते हैं, दिए गए कोई भी दो बिंदु तो हमेशा संरेख होते ही हैं।
</div>

#### गुण 4

दिए गए तीन असंरेख बिंदुओं (non-collinear) से होकर गुजरने वाला एक और केवल एक वृत्त होता है। साथ ही, तीन असंरेख बिंदु सदैव एकवृत्तीय (concyclic) होते हैं। <br>
<img src="../../../images/geometry/point-4.png" alt="Geometry" style="width:36%;height:36%;">

#### गुण 5: एकवृत्तीय बिंदु (Concyclic Points)

चार या चार से अधिक बिंदुओं को एकवृत्तीय (concyclic) कहा जाता है, यदि कोई वृत्त उनसे होकर गुजर सकता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जैसा कि हम पहले से ही जानते हैं कि कोई भी तीन असंरेख (non-collinear) बिंदु तो सदैव एकवृत्तीय होते ही हैं।
</div>

