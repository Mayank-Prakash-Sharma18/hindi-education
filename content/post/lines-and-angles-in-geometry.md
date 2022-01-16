---
author: Mragank Shandilya
title: ज्यामिति में रेखाएं और कोण (Lines and Angles in Geometry)
date: "2022-01-14"
description: ज्यामिति में रेखाएं और कोण (Lines and Angles in Geometry) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/angle-1.png" # Sets featured image on blog post.
thumbnail: "images/geometry/angle-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Lines and Angles in Geometry, in Hindi</strong>

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

इस लेख में, हम रेखाओं और कोणों की मूल अवधारणाओं और गुणों का अध्ययन करेंगे।


## रेखा क्या होती है? (What is a Line?)

क्या आप जानते हैं कि रेखा (line) क्या होती है, या शायद रेखाखंड (line segment) या किरण (ray)?

* रेखा एक आयामी (one-dimensional) आकृति है जो दोनों तरफ (अर्थात दोनों दिशाओं में) असीम रूप से फैली हुई होती है। यानी किसी रेखा की केवल लंबाई होती है (कोई चौड़ाई नहीं, कोई ऊंचाई नहीं) और इसका कोई अंत बिंदु भी नहीं होता है। <br>
<img src="../../../images/geometry/line-1.png" alt="Geometry" style="width:54%;height:54%;">

* यदि किसी रेखा का एक अंत बिंदु हो, तो वह किरण (Ray) कहलाती है। तो, किरण एक एक-आयामी आकृति है, जो एक दिशा में असीम रूप से फैली हुई होती है। <br>
<img src="../../../images/geometry/line-2.png" alt="Geometry" style="width:54%;height:54%;">

* रेखा खंड (Line segment) मूल रूप से दो अंत बिंदुओं वाली रेखा का एक भाग होता है। तो, रेखा खंड एक एक-आयामी आकृति है, जिसका दोनों ओर एक अंत बिंदु होता है। <br>
<img src="../../../images/geometry/line-3.png" alt="Geometry" style="width:54%;height:54%;">
उपरोक्त आकृति में, AB या BA एक रेखाखंड है।

हमें उम्मीद है, अब आप रेखा, रेखाखंड और किरण के बीच अंतर बता सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

सामान्य शब्दों में, जब हम ज्यामिति के प्रश्नों में 'रेखा (line)' कहते हैं, तो हम अक्सर केवल 'रेखाखंड (line segment)' की बात कर रहे होते हैं। इसलिए, यदि कोई प्रश्न रेखा PQ कहता है, तो इसका मूल रूप से अर्थ रेखाखंड PQ ही होता है।
</div>


## कोण क्या होता है? (What is an Angle?)

कोण (Angle) दो रेखाओं के बीच की कोणीय दूरी है। इसे डिग्री (degrees) या रेडियन (radians) में मापा जाता है।

जब दो रेखाएं/रेखा-खंड/किरणें एक बिंदु पर मिलती हैं, तो एक कोण बनता है। किसी कोण को ∠ प्रतीक द्वारा निरूपित किया जाता है| <br>
<img src="../../../images/geometry/angle-1.png" alt="Geometry" style="width:72%;height:72%;">

उपरोक्त आकृति में, कोण को ∠BAC या ∠CAB के रूप में दर्शाया जा सकता है।

* कोण की भुजाएँ (Arms of an angle) - कोण बनाने वाली दो रेखाएँ/रेखा-खंड/किरणें।
* कोण का शीर्ष (Vertex of an angle) - वह उभयनिष्ठ बिंदु जहां दो रेखाएं/रेखा-खंड/किरणें मिलती हैं (जो उपरोक्त आकृति में A है)।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>डिग्री और रेडियन के बीच संबंध (Relation between Degree and Radian)</b><br>

कोणों को अक्सर डिग्री या रेडियन में मापा जाता है।

<p> 180° = रेडियन <br>
1° = \(\frac{π}{180°}\) रेडियन <br>
तो, x° = \(\frac{πx}{180°}\) रेडियन </p>
</div>

आइए, सबसे पहले विभिन्न प्रकार की रेखाओं और कोणों को देखें। इसके बाद उनके गुणों का भी जायजा लिया जाएगा।


## रेखाओं के प्रकार (Types of Lines)

* समानांतर रेखाएँ (Parallel lines) - एक समतल पर दो रेखाएँ समानांतर होती हैं यदि वे ***कभी नहीं मिलती हैं***, भले ही वे दोनों तरफ असीम रूप से विस्तारित करि जाएं। हम उन्हें प्रतीक ∥ का उपयोग करके निरूपित करते हैं| <br>
<img src="../../../images/geometry/line-6.png" alt="Geometry" style="width:54%;height:54%;">
उपरोक्त आकृति में, रेखाएँ AB और CD समानांतर हैं। अतः, हम उन्हें इस प्रकार निरूपित कर सकते हैं: AB ∥ CD

* लंबवत रेखाएँ (Perpendicular lines) - दो रेखाएँ एक-दूसरे के लंबवत होती हैं, यदि वे ***एक दूसरे के साथ 90° का कोण*** बनाती हैं। हम उन्हें प्रतीक ⊥ का उपयोग करके निरूपित करते हैं| <br>
<img src="../../../images/geometry/line-7.png" alt="Geometry" style="width:54%;height:54%;">
उपरोक्त आकृति में, रेखाएँ AB और CD लंबवत हैं। अतः, हम उन्हें इस प्रकार निरूपित कर सकते हैं: AB ⊥ CD

* तिर्यक रेखा (Transversal line) - वह रेखा जो दी गई दो या दो से अधिक रेखाओं को अलग-अलग बिंदुओं पर काटती है। <br>
<img src="../../../images/geometry/line-10.png" alt="Geometry" style="width:54%;height:54%;">
उपरोक्त आकृति में, XY एक तिर्यक रेखा है।


## कोणों के प्रकार (Types of Angles)

कोण के मापन के अनुसार हमारे पास निम्न प्रकार के कोण होते हैं।

* न्यून कोण (Acute Angle) - एक ऐसा कोण जिसकी माप ***90° से कम*** है। <br>
<img src="../../../images/geometry/angle-2.png" alt="Geometry" style="width:72%;height:72%;">

* समकोण (Right Angle) - एक ऐसा कोण जिसकी माप ***ठीक 90°*** है। <br>
<img src="../../../images/geometry/angle-3.png" alt="Geometry" style="width:72%;height:72%;"> 
As you can see, the arms of a right angle are perpendicular to each others.

* अधिक कोण (Obtuse Angle) - एक ऐसा कोण जिसकी माप ***90° से अधिक है, लेकिन 180° से कम है***। <br>
<img src="../../../images/geometry/angle-4.png" alt="Geometry" style="width:72%;height:72%;">

* सीधा कोण (Straight Angle) - एक ऐसा कोण जिसकी माप ***ठीक 180°*** है। <br>
<img src="../../../images/geometry/angle-5.png" alt="Geometry" style="width:72%;height:72%;">

* रिफ्लेक्स एंगल (Reflex Angle) - एक ऐसा कोण जिसकी माप ***180° से अधिक है, लेकिन 360° से कम है***। <br>
<img src="../../../images/geometry/angle-6.png" alt="Geometry" style="width:72%;height:72%;">

* पूर्ण कोण (Complete Angle) - एक ऐसा कोण जिसकी माप ***ठीक 360°*** है। <br>
<img src="../../../images/geometry/angle-7.png" alt="Geometry" style="width:72%;height:72%;">


## कोण-जोड़े (Angle-Pairs)

कुछ कोण-जोड़े हैं जिनसे आपको अवगत होना चाहिए।

* पूरक कोण (Complementary Angles) - यदि दो कोणों का योग 90° हो, तो वे पूरक कोण कहलाते हैं।

* संपूरक कोण (Supplementary Angles) - यदि दो कोणों का योग 180° हो, तो वे संपूरक कोण कहलाते हैं।

* आसन्न कोण (Adjacent Angles) - यदि दो कोणों में एक उभयनिष्ठ शीर्ष और एक उभयनिष्ठ भुजा हो (दो अन्य भुजाओं के बीच), तो वे आसन्न कोण कहलाते हैं। <br> 
<img src="../../../images/geometry/angle-8.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, ∠AVB और ∠BVC आसन्न कोण हैं।

* रैखिक युग्म कोण (Linear Pair Angles) - आसन्न कोणों का एक युग्म एक रैखिक युग्म बनाएगा, यदि उनकी बाहरी भुजाएँ एक सीधी रेखा पर स्थित हों। <br>
<img src="../../../images/geometry/angle-9.png" alt="Geometry" style="width:72%;height:72%;">
अत: रैखिक युग्म कोणों का योग 180° होगा। (∠AVB + ∠BVC = 180°)

* उर्ध्वाधर सम्मुख कोण (लंबवत विपरीत कोण, Vertically Opposite Angles) - दो रेखाओं के प्रतिच्छेदन से बनने वाले उभयनिष्ठ बिंदु पर विचार करें। यहाँ बिना उभयनिष्ठ भुजा वाले कोणों के युग्म को उर्ध्वाधर सम्मुख कोण कहते हैं। वे एक दूसरे के विपरीत दिखाई देते हैं। <br>
<img src="../../../images/geometry/angle-10.png" alt="Geometry" style="width:63%;height:63%;">
उर्ध्वाधर सम्मुख कोण हमेशा एक दूसरे के बराबर होते हैं। उदाहरण के लिए, ऊपर की आकृति में उर्ध्वाधर सम्मुख कोण के दो जोड़े हैं: <br>
I. ∠AVC और ∠BVD उर्ध्वाधर सम्मुख कोणों का पहला युग्म बनाते हैं। अत: ∠AVC = ∠BVD <br>
II. ∠AVD और ∠BVC उर्ध्वाधर सम्मुख कोणों का दूसरा युग्म बनाते हैं। अत: ∠AVD = ∠BVC

<br><hr><br>

## रेखाओं के गुण (Properties of Lines)

### लंब रेखाओं से संबंधित गुण (Properties related to Perpendicular lines)

#### गुण 1: लंब समद्विभाजक (Perpendicular Bisector)

यदि कोई रेखा (मान लीजिए CD) किसी रेखाखंड (जैसे AB) के मध्य-बिंदु से होकर गुजरती है और उस पर लंबवत है, तो वह रेखा उस रेखाखंड का लंब समद्विभाजक कहलाती है। <br>
<img src="../../../images/geometry/line-8.png" alt="Geometry" style="width:54%;height:54%;">

उपरोक्त आकृति में, CD, AB का लंब समद्विभाजक है, अर्थात्:
* CD, AB पर लंबवत है (CD ⊥ AB) और
* CD, AB को दो बराबर भागों में समद्विभाजित करती है (AD = BD)

लंब समद्विभाजक पर पड़ने वाला प्रत्येक बिंदु, रेखा के दोनों सिरों से समान दूरी पर होता है। <br>
<img src="../../../images/geometry/line-9.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, AQ = QB, और AP = PB


### कोणों से संबंधित गुण (Properties related to Angles)

#### गुण 1: कोण समद्विभाजक (Angle Bisector)

कोण समद्विभाजक (Angle Bisector) वह रेखा है जो किसी कोण को समद्विभाजित करती है। <br>
<img src="../../../images/geometry/angle-11.png" alt="Geometry" style="width:72%;height:72%;">
उपरोक्त आकृति में, रेखा AD कोण ∠BAC को समद्विभाजित करती है। अत: ∠BAD = ∠CAD

किसी कोण के समद्विभाजक का प्रत्येक बिंदु उस कोण की दोनों भुजाओं से समान दूरी पर होता है, जिसे वह समद्विभाजित करता है। <br>
<img src="../../../images/geometry/angle-12.png" alt="Geometry" style="width:72%;height:72%;">
उपरोक्त आकृति में, QW = QY, और PX = PZ


### समानांतर रेखाओं से संबंधित गुण (Properties related to Parallel lines)

#### गुण 1: समानांतर रेखाएं हमेशा समान दूरी पर रहती हैं (Parallel lines are always equidistant)

दो समानांतर रेखाओं के बीच लंबवत दूरी हमेशा समान रहती है, चाहे हम इसे कहीं भी मापें। उदाहरण के लिए, निम्नलिखित आकृति में, AB ∥ CD <br>
<img src="../../../images/geometry/line-4.png" alt="Geometry" style="width:54%;height:54%;">

#### गुण 2

यदि कोई रेखा कुछ रेखाओं (या तलों) से समान कोण बनाती है, तो वे रेखाएँ (या तल) एक-दूसरे के समानांतर होनी चाहिए। उदाहरण के लिए, निम्नलिखित आकृति में, AB ∥ CD <br>
<img src="../../../images/geometry/line-5.png" alt="Geometry" style="width:54%;height:54%;">

#### गुण 3: संगत कोण (Corresponding angles)

संगत कोण बराबर होते हैं।

निम्नलिखित आकृति में, AB ∥ CD और XY एक तिर्यक रेखा (transversal line) है। <br>
<img src="../../../images/geometry/line-11.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, संगत कोण हैं:
* ∠कोण 1 = ∠कोण 5 = x°
* ∠कोण 2 = ∠कोण 6 = y°
* ∠कोण 3 = ∠कोण 7 = x°
* ∠कोण 4 = ∠कोण 8 = y°

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इससे उल्टा भी सच है। यदि दो रेखाएँ एक तिर्यक रेखा द्वारा प्रतिच्छेद की जाती हैं और उपरोक्त कोण बराबर होते हैं, तो दोनों रेखाएँ एक दूसरे के समानांतर होनी चाहिए।
</div>

#### गुण 4: एकान्तर कोण (Alternate angles)

एकांतर (आंतरिक या बाहरी) कोणों के जोड़े बराबर होते हैं। <br>
<img src="../../../images/geometry/line-11.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, एकांतर कोण हैं:
* ∠कोण 3 = ∠कोण 5 = x° (आंतरिक एकांतर कोण, interior alternate angles)
* ∠कोण 4 = ∠कोण 6 = y° (आंतरिक एकांतर कोण, interior alternate angles)
* ∠कोण 2 = ∠कोण 8 = y° (बाहरी एकांतर कोण, exterior alternate angles)
* ∠कोण 1 = ∠कोण 7 = x° (बाहरी एकांतर कोण, exterior alternate angles)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इससे उल्टा भी सच है। यदि दो रेखाएँ एक तिर्यक रेखा द्वारा प्रतिच्छेद की जाती हैं और उपरोक्त कोण बराबर होते हैं, तो दोनों रेखाएँ एक दूसरे के समानांतर होनी चाहिए।
</div>

#### गुण 5

तिर्यक रेखा (transversal line) के एक ही तरफ के अंतः कोणों (interior angles) या बहिष्कोणों (exterior angles) का योग 180° के बराबर होता है। <br>
<img src="../../../images/geometry/line-11.png" alt="Geometry" style="width:63%;height:63%;">
ऊपर दिए गए चित्र में: <br>
∠कोण 3 + ∠कोण 6 = ∠कोण 4 + ∠कोण 5 = ∠कोण 2 + ∠कोण 7 = ∠कोण 1 + ∠कोण 8 = 180°

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इससे उल्टा भी सच है। यदि दो रेखाएँ एक तिर्यक रेखा द्वारा प्रतिच्छेद की जाती हैं और उपरोक्त कोणों का योग 180° होता है, तो दोनों रेखाएँ एक-दूसरे के समानांतर होनी चाहिए।
</div>

#### गुण 6

आंतरिक कोणों (interior angles) के समद्विभाजक 90° पर प्रतिच्छेद करते हैं। <br>
<img src="../../../images/geometry/line-12.png" alt="Geometry" style="width:63%;height:63%;">

##### गुण 6a

आंतरिक कोणों (interior angles) के समद्विभाजक एक आयत (rectangle) बनाते हैं। <br>
<img src="../../../images/geometry/line-13.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, PQRS एक आयत है।

##### गुण 6b

यदि तिर्यक रेखा (transversal line) दो समानांतर रेखाओं के लंबवत है, तो इसके आंतरिक कोण (interior angle) के समद्विभाजक एक वर्ग (square) बनाते हैं। <br>
<img src="../../../images/geometry/line-14.png" alt="Geometry" style="width:63%;height:63%;">
उपरोक्त आकृति में, PQRS एक वर्ग है।
