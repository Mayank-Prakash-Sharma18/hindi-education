---
author: Mragank Shandilya
title: वृत्त प्रमेय (Circle Theorems)
date: "2022-01-14"
description: वृत्त प्रमेय (Circle Theorems) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/circle-31.png" # Sets featured image on blog post.
thumbnail: "images/geometry/circle-31.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Circle Theorems, in Hindi</strong>

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

इस लेख में, हम वृतों से संबंधित विभिन्न गुणों और प्रमेयों पर एक नज़र डालेंगे।


## वृत्त से सम्बंधित सूत्र (Formulae related to Circle)

यदि 'r' एक वृत्त की त्रिज्या (radius) है, तो:

### वृत्त का क्षेत्रफल (Area of Circle)

<p> वृत्त का क्षेत्रफल = π \(r^2\) </p>

आरेख: <br>
<img src="../../../images/geometry/circle-31.png" alt="Geometry" style="width:63%;height:63%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> उस त्रिज्यखंड (sector) का क्षेत्रफल जो केंद्र पर θ कोण बनाता है = \(\frac{θ}{360°} × πr^2\) </p> 

आरेख:<br>
<img src="../../../images/geometry/circle-33.png" alt="Geometry" style="width:45%;height:45%;">
θ डिग्री में है।
</div>

वलय (Ring) दो संकेंद्रित वृत्तों के बीच का स्थान है। <br>
<img src="../../../images/geometry/circle-32.png" alt="Geometry" style="width:54%;height:54%;">
<p> वलय का क्षेत्रफल = बड़े वृत्त का क्षेत्रफल - छोटे वृत्त का क्षेत्रफल  = π \(R^2 - πr^2 = π(R^2 - r^2)\) </p>

### वृत्त की परिधि (Circumference of Circle)

वृत्त की परिधि = 2πr

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> उस चाप (arc) की लंबाई जो केंद्र पर θ कोण बनाती है = \(\frac{θ}{360°}\) × 2πr </p> <br>
<img src="../../../images/geometry/circle-33.png" alt="Geometry" style="width:45%;height:45%;">
θ डिग्री में है।
</div>

वलय दो संकेंद्रित वृत्तों के बीच का स्थान है। <br>
<img src="../../../images/geometry/circle-32.png" alt="Geometry" style="width:54%;height:54%;">
वलय का परिमाप = बड़े वृत्त का परिमाप + छोटे वृत्त का परिमाप = 2πR + 2πr = 2π (R + r)


## वृतों से संबंधित गुण (Properties related to Circles)

### गुण 1

एक और केवल एक वृत्त दिए गए किन्हीं तीन असंरेख (non-collinear) बिंदुओं से होकर गुजरता है।

### गुण 2: समान जीवा (Equal chords)

#### गुण 2a

एक वृत्त की समान जीवाएँ (chords) केंद्र पर समान कोण अंतरित करती हैं। <br>
<img src="../../../images/geometry/circle-12.png" alt="Geometry" style="width:54%;height:54%;">
ऊपर दी गई आकृति में जीवाएँ AB और CD बराबर हैं, अर्थात AB = CD <br>
अत:, ∠AOB = ∠COD

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

दूसरे शब्दों में, यदि किसी वृत्त की दो जीवाओं द्वारा केंद्र पर अंतरित कोण बराबर हों, तो वे दो जीवाएँ समान होनी चाहियें।
</div>

यदि किसी वृत्त की दो जीवाएँ समान हों, तो उनके संगत चाप (arcs) भी बराबर (अर्थात् सर्वांगसम, congruent) होते हैं। इसके विपरीत, यदि दो चाप बराबर (अर्थात सर्वांगसम) हों, तो उनकी संगत जीवाएँ समान होती हैं।

अतः संक्षेप में कहें तो, वृत्त के समान चाप या समान जीवाएँ केंद्र पर समान कोण अंतरित करती हैं।

#### गुण 2b

एक वृत्त (या सर्वांगसम वृत्तों की) की समान जीवाएँ केंद्र से समान दूरी पर होती हैं। <br>
<img src="../../../images/geometry/circle-14.png" alt="Geometry" style="width:54%;height:54%;">
ऊपर दी गई आकृति में जीवाएँ AB और CD बराबर हैं, अर्थात AB = CD <br>
तो, OM = ON

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

दूसरे शब्दों में, वृत्त के केंद्र से समान दूरी पर स्थित जीवाओं की लंबाई बराबर होती है।
</div>

### गुण 3

एक वृत्त के केंद्र से एक जीवा पर लम्ब उस जीवा को समद्विभाजित करता है। <br>
<img src="../../../images/geometry/circle-13.png" alt="Geometry" style="width:54%;height:54%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

दूसरे शब्दों में, एक वृत्त के केंद्र से एक जीवा को समद्विभाजित करने के लिए खींची गई रेखा उस जीवा पर लंबवत (perpendicular) होती है।
</div>

### गुण 4: स्पर्शरेखा (Tangent)

#### गुण 4a

वृत्त के किसी भी बिंदु पर स्पर्श रेखा (tangent), उनके संपर्क बिंदु से जाने वाली त्रिज्या पर लंबवत होती है। <br>
<img src="../../../images/geometry/circle-15.png" alt="Geometry" style="width:45%;height:45%;">

#### गुण 4b

किसी बाहरी बिंदु से वृत्त पर खींची गई स्पर्श रेखाओं की लंबाई बराबर होती है। <br>
<img src="../../../images/geometry/circle-16.png" alt="Geometry" style="width:45%;height:45%;">

उपरोक्त आकृति में, PR = PQ

#### गुण 4c

एक बाहरी बिंदु पर दो स्पर्शरेखाओं के मिलने से बनने वाले कोण को, वृत्त के केंद्र को उस बाहरी बिंदु से मिलाने वाली एक सीधी रेखा द्वारा द्विभाजित किया जाता है। <br>
<img src="../../../images/geometry/circle-17.png" alt="Geometry" style="width:45%;height:45%;">

उपरोक्त आकृति में, PO ∠QPR को समद्विभाजित करती है, अर्थात ∠QPO = ∠RPO <br>
साथ ही, चूंकि त्रिभुज ∆PQO और ∆PRO के दो कोण बराबर हैं, इसलिए उनके तीसरे कोण भी बराबर होने चाहियें, अर्थात ∠POQ = POR

#### गुण 4d

एक बाहरी बिंदु से आ रही दो स्पर्शरेखाओं (एक वृत्त की) के संपर्क बिंदुओं को मिलाने से बनी जीवा (chord), वृत्त के केंद्र को उस बाहरी बिंदु से जोड़ने वाली एक सीधी रेखा द्वारा लंबवत रूप से द्विभाजित (bisected perpendicularly) होती है। <br>
<img src="../../../images/geometry/circle-18.png" alt="Geometry" style="width:54%;height:54%;">

उपरोक्त आकृति में, QR बिंदु P से आ रही दो स्पर्शरेखाओं के संपर्क बिंदुओं को मिलाने से बनने वाली जीवा है। <br>
तो, जीवा QR को PO द्वारा लंबवत रूप से विभाजित किया जाता है, यानी QM = RM, और PO ⟂ QR.

### गुण 5

एक चाप (या एक जीवा) द्वारा केंद्र पर बनाया गया कोण, वृत्त के शेष भाग पर किसी भी बिंदु पर इसके द्वारा बनाए गए कोण का दोगुना होता है। <br>
<img src="../../../images/geometry/circle-19.png" alt="Geometry" style="width:45%;height:45%;">

उपरोक्त आकृति में, ∠AOB = 2 ∠AMB

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जाहिर है, वृत्त के एक ही खंड (segment) में एक जीवा/चाप द्वारा अंतरित कोण बराबर होंगे। <br>
<img src="../../../images/geometry/circle-20.png" alt="Geometry" style="width:45%;height:45%;">
</div>

### गुण 6: एकान्तर खंड प्रमेय (Alternate Segment Theorem)

किसी जीवा (chord), और उस जीवा के किसी एक अंतिम बिंदु से गुजरने वाली स्पर्श रेखा के बीच का कोण = जीवा द्वारा एकांतर खंड (alternate segment) पर बनने वाला कोण <br>
<img src="../../../images/geometry/circle-21.png" alt="Geometry" style="width:63%;height:63%;">

उपरोक्त आकृति में, AB एक जीवा है और स्पर्श रेखा PQ उस जीवा के किसी एक अंतिम बिंदु से होकर गुजरती है। <br>
अत: ∠ABP = ∠AMB

इसी प्रकार, जीवा BM के मामले में, ∠MBQ = ∠MAB

### गुण 7

यदि एक वृत्त की दो जीवाएँ (जैसे AB और CD) उस वृत्त के अंदर या उस वृत्त के बाहर (जब वे बाहर की ओर बढ़ाई जाती हैं), किसी बिंदु M पर प्रतिच्छेद करती हैं, तो: <br>
MB × MA = MD × MC. <br>
<img src="../../../images/geometry/circle-22.png" alt="Geometry" style="width:90%;height:90%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस प्रमेय का एक विशेष मामला तब उत्पन्न होता है, जब कोई एक रेखा जीवा (chord) के बजाय एक स्पर्शरेखा (tangent) होती है।

<p> जब एक जीवा AB को बाहरी बिंदु M पर स्पर्शरेखा TM से मिलने के लिए बढ़ाया जाता है, तो: <br>
MB × MA = \(MT^2\) </p> <br>
<img src="../../../images/geometry/circle-23.png" alt="Geometry" style="width:63%;height:63%;">
</div>

### गुण 8: उभयनिष्ठ स्पर्श रेखाओं की लंबाई (Length of Common Tangents)

<p> यदि d - दो वृत्तों के केंद्रों के बीच की दूरी; \(r_1\) और \(r_2\) - दो वृतों की त्रिज्या </p>

#### प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा (Direct common tangent) की लंबाई ढूँढना

##### केस 1: दो वृत्त, जो एक दूसरे को स्पर्श न कर रहे हों

<p> प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा की लंबाई = \(\sqrt{d^2 - (r_1 - r_2)^2}\) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-26.png" alt="Geometry" style="width:90%;height:90%;">

##### केस 2: बाहरी रूप से स्पर्श करने वाले दो वृत 

<p> प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा की लंबाई = 2 \(\sqrt{r_1 r_2}\) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-27.png" alt="Geometry" style="width:90%;height:90%;">

##### केस 3: दो वृत्त जो एक दूसरे को दो बिंदुओं पर काटते हैं

<p> प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा की लंबाई = \(\sqrt{d^2 - (r_1 - r_2)^2}\) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-28.png" alt="Geometry" style="width:90%;height:90%;">

#### अनुप्रस्थ उभयनिष्ठ स्पर्शरेखाओं (Transverse Common Tangents) की लंबाई ज्ञात करना

हम अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा की लंबाई केवल तभी ज्ञात कर सकते हैं, जब दो वृत्त एक दूसरे को स्पर्श नहीं कर रहे हों।

<p> अनुप्रस्थ उभयनिष्ठ स्पर्शरेखा की लंबाई = \(\sqrt{d^2 - (r_1 + r_2)^2}\) </p> 

आरेख: <br>
<img src="../../../images/geometry/circle-26.png" alt="Geometry" style="width:90%;height:90%;">

