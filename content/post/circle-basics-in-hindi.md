---
author: Mragank Shandilya
title: वृत्त और उसके गुण (Circle and its properties)
date: "2022-01-14"
description: वृत्त और उसके गुण (Circle and its properties) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/circle-2.png" # Sets featured image on blog post.
thumbnail: "images/geometry/circle-2.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Circle and its properties, in Hindi</strong>

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

इस लेख में हम वृत्त और उसके गुणों के बारे में अध्ययन करेंगे।


## वृत्त क्या होता है? (What is a Circle?)

यह उन सभी बिन्दुओं का समुच्चय है, जो एक ही तल के दूसरे बिन्दु से एक निश्चित दूरी पर हैं। <br>
<img src="../../../images/geometry/circle-1.png" alt="Geometry" style="width:63%;height:63%;">


## वृत्त से संबंधित बुनियादी शब्दावली (Basic Terms related to Circle)

### केंद्र और त्रिज्या (Centre and Radius)

किसी वृत्त के अंदर का वह स्थिर बिंदु जो उस वृत्त के सभी बिंदुओं से समान दूरी पर होता है, उस वृत्त का ***केंद्र (Centre)*** कहलाता है।

वृत्त के किसी बिंदु को उसके केंद्र से मिलाने वाले रेखाखंड को ***त्रिज्या (Radius)*** कहते हैं। <br>
<img src="../../../images/geometry/circle-2.png" alt="Geometry" style="width:63%;height:63%;">

### जीवा और व्यास (Chord and Diameter)

वृत्त पर किन्हीं दो बिंदुओं को मिलाने वाला रेखाखंड उस वृत्त की ***जीवा (Chord)*** कहलाता है। <br>
<img src="../../../images/geometry/circle-3.png" alt="Geometry" style="width:54%;height:54%;">

एक वृत्त के केंद्र से गुजरने वाली जीवा उस वृत्त का ***व्यास (Diameter)*** होती है। यह निरपवाद रूप से वृत्त की सबसे बड़ी जीवा होती है। <br>
<img src="../../../images/geometry/circle-4.png" alt="Geometry" style="width:63%;height:63%;">

एक वृत्त के व्यास की लंबाई = 2 × एक वृत्त की त्रिज्या की लंबाई

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

एक वृत्त के सभी व्यासों की लंबाई समान होती है।
</div>

### चाप और अर्धवृत्त (Arc and Semi-circle)

दो बिंदुओं के बीच वृत्त के एक टुकड़े को ***चाप (Arc)*** कहा जाता है। <br>
<img src="../../../images/geometry/circle-5.png" alt="Geometry" style="width:63%;height:63%;">

बड़े चाप को दीर्घ चाप (Major arc) कहा जाता है, जबकि छोटे चाप को लघु चाप (Minor arc) कहा जाता है। <br>
<img src="../../../images/geometry/circle-6.png" alt="Geometry" style="width:63%;height:63%;">

व्यास के विपरीत बिन्दुओं को मिलाने वाला चाप अर्धवृत्त (Semi-circle) कहलाता है। ऐसे मामले में कोई छोटा या बड़ा चाप नहीं होता है; केवल दो समान अर्धवृत्त होते हैं। <br>
<img src="../../../images/geometry/circle-7.png" alt="Geometry" style="width:63%;height:63%;">

### खंड और त्रिज्यखंड (Segment and Sectors)

खंड (Segment), एक जीवा (chord) और एक वृत्त के चाप (arc) के बीच का क्षेत्र है।

दीर्घ चाप से बने खण्ड को दीर्घ खण्ड (major segment) कहते हैं। जबकि लघु चाप से बने खंड को लघु खंड (minor segment) कहते हैं। <br>
<img src="../../../images/geometry/circle-8.png" alt="Geometry" style="width:63%;height:63%;">

त्रिज्यखंड (Sector), एक चाप और दो त्रिज्याओं के बीच का क्षेत्र होता है।

दीर्घ चाप से बने त्रिज्यखंड को दीर्घ त्रिज्यखंड (major sector) कहते हैं। जबकि लघु चाप से बने त्रिज्यखंड को लघु त्रिज्यखंड (minor sector) कहते हैं। <br>
<img src="../../../images/geometry/circle-9.png" alt="Geometry" style="width:63%;height:63%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जब दो चाप बराबर होते हैं, तो दोनों खंड और दोनों त्रिज्यखंड एक ही हो जाते हैं, और उन्हें अर्धवृत्ताकार क्षेत्र के रूप में जाना जाता है।
</div>

### छेदिका और स्पर्शरेखा (Secant and Tangent)

छेदिका (Secant या छेदन रेखा) वह रेखा है, जो वृत्त को दो बिंदुओं पर प्रतिच्छेदित करती है।

वृत्त की स्पर्शरेखा (Tangent) वह रेखा होती है, जो वृत्त को केवल एक बिंदु पर स्पर्श करती है। <br>
<img src="../../../images/geometry/circle-10.png" alt="Geometry" style="width:72%;height:72%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

वृत्त की स्पर्श रेखा, छेदिका का एक विशेष मामला होता है।
</div>

वह बिंदु जहाँ स्पर्श रेखा वृत्त को स्पर्श करती है ***उभयनिष्ठ बिंदु (common point)*** कहलाता है। वृत्त पर दिए गए किसी एक बिंदु को केवल एक स्पर्शरेखा स्पर्श कर सकती है।

### संकेंद्रित वृत्त (Concentric circles)

संकेंद्रित वृत्त (Concentric circles) दो या दो से अधिक वृत्त होते हैं जो:
* एक ही तल पर हैं, और
*  जिनका एक ही केंद्र है। <br>
<img src="../../../images/geometry/circle-11.png" alt="Geometry" style="width:36%;height:36%;">

### उभयनिष्ठ स्पर्शरेखा (Common Tangents)

दो वृत्तों को स्पर्श करने वाली स्पर्श रेखा उभयनिष्ठ स्पर्श रेखा कहलाती है।

उभयनिष्ठ स्पर्शरेखा दो प्रकार की हो सकती हैं:
* प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा (Direct common tangent) - एक प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा दो वृत्तों के केंद्रों से गुजरने वाली रेखा को उनकी त्रिज्या के अनुपात में बाहरी रूप से विभाजित करती है। <br>
<img src="../../../images/geometry/circle-24.png" alt="Geometry" style="width:99%;height:99%;">

* अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा (Transverse common tangent) - एक अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा दो वृत्तों के केंद्रों से गुजरने वाली रेखा को उनकी त्रिज्या के अनुपात में आंतरिक रूप से विभाजित करती है। <br>
<img src="../../../images/geometry/circle-25.png" alt="Geometry" style="width:72%;height:72%;">

दो वृत्त की:
* अधिकतम 4 स्पर्शरेखाएँ (tangents) हो सकती हैं 
* न्यूनतम 0 स्पर्शरेखाएँ हो सकती हैं 

तो, कुल 5 मामले संभव हैं। आइए देखते हैं इन मामलों को।

#### केस 1: 4 उभयनिष्ठ स्पर्शरेखाएँ (Common tangents)

दो वृत्त, जो एक दूसरे को स्पर्श नहीं करते हैं:
* उनकी 2 प्रत्यक्ष उभयनिष्ठ स्पर्शरेखाएँ होती हैं 
* 2 अनुप्रस्थ उभयनिष्ठ स्पर्शरेखाएँ होती हैं 

<p> यहाँ, दो वृत्तों के केंद्रों के बीच की दूरी > उनकी त्रिज्याओं का योग (अर्थात \(r_1 + r_2\)) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-26.png" alt="Geometry" style="width:90%;height:90%;">

#### केस 2: 3 उभयनिष्ठ स्पर्शरेखाएँ (Common tangents)

दो वृत्त, जो एक दूसरे को बाह्य रूप से स्पर्श करते हैं:
* उनकी 2 प्रत्यक्ष उभयनिष्ठ स्पर्शरेखाएँ होती हैं 
* 1 अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा होती है

<p> यहाँ, दो वृत्तों के केंद्रों के बीच की दूरी = उनकी त्रिज्याओं का योग (अर्थात \(r_1 + r_2\)) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-27.png" alt="Geometry" style="width:90%;height:90%;">

#### केस 3: 2 उभयनिष्ठ स्पर्शरेखाएँ (Common tangents)

दो वृत्त, जो एक दूसरे को दो बिंदुओं पर काटते हैं:
* उनकी 2 प्रत्यक्ष उभयनिष्ठ स्पर्शरेखाएँ होती हैं 
* कोई भी अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा नहीं होती है

<p> यहाँ, उनकी त्रिज्याओं का अंतर (अर्थात \(|r_1 - r_2|\)) < दो वृत्तों के केंद्रों के बीच की दूरी < उनकी त्रिज्याओं का योग (अर्थात \(r_1 + r_2\)) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-28.png" alt="Geometry" style="width:90%;height:90%;">

#### केस 4: 1 उभयनिष्ठ स्पर्शरेखा (Common tangent)

एक दूसरे को आंतरिक रूप से स्पर्श करने वाले दो वृत्तों में केवल 1 उभयनिष्ठ स्पर्श रेखा होती है।

<p> यहाँ, दो वृत्तों के केंद्रों के बीच की दूरी = उनकी त्रिज्याओं का अंतर (अर्थात \(|r_1 - r_2|\)) <p> 

आरेख: <br>
<img src="../../../images/geometry/circle-29.png" alt="Geometry" style="width:90%;height:90%;">

#### केस 5: कोई उभयनिष्ठ स्पर्शरेखा नहीं  (No Common tangents)

दो वृत्त, जो एक दूसरे के अंदर हों लेकिन स्पर्श न कर रहे हों, उनकी कोई भी उभयनिष्ठ स्पर्श रेखा नहीं होती है।

<p> यहाँ, दो वृत्तों के केन्द्रों के बीच की दूरी < उनकी त्रिज्याओं का अंतर (अर्थात \(|r_1 - r_2|\)) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-30.png" alt="Geometry" style="width:45%;height:45%;">

