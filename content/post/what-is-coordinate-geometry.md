---
author: Mragank Shandilya
title: निर्देशांक ज्यामिति क्या होती है? (What is Coordinate Geometry?)
date: "2022-01-08"
description: निर्देशांक ज्यामिति क्या होती है? (What is Coordinate Geometry?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["coordinate-geometry"]
categories: ["coordinate-geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/coordinate-geometry/coordinates-1.png" # Sets featured image on blog post.
thumbnail: "images/coordinate-geometry/coordinates-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Coordinate Geometry?, in Hindi</strong>

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

निर्देशांक ज्यामिति, ज्यामिति की एक प्रणाली है जहाँ हम समतल पर बिंदुओं की स्थिति का वर्णन करने के लिए क्रमित संख्याओं के युग्म (ordered pair) का उपयोग करते हैं। क्रमित संख्याओं के युग्म उस बिंदु के निर्देशांक (coordinates) कहलाते हैं। <br>
<img src="../../../images/coordinate-geometry/coordinates-1.png" alt="Coordinate Geometry" style="width:72%;height:72%;">

इस प्रणाली को एक फ्रांसीसी गणितज्ञ, रेने डेसकार्टेस, René Descartes (1596 - 1650) द्वारा विकसित किया गया था। इसलिए हम निर्देशांकों को कार्तीय निर्देशांक (Cartesian coordinates) भी कहते हैं।

इसके अलावा, रेने डेसकार्टेस ने प्रस्तावित किया कि इस तकनीक का उपयोग करके, समीकरणों द्वारा भी रेखाओं और वक्रों का वर्णन किया जा सकता है।

अब, आइए ज्यामिति की इस प्रणाली का विस्तार से अध्ययन करें।


## कार्तीय निर्देशांक प्रणाली (Cartesian Co-ordinate System)

कार्तीय निर्देशांक प्रणाली का उपयोग किसी समतल पर किसी बिंदु की सटीक स्थिति को दर्शाने के लिए किया जाता है। इसके लिए हम अक्षों (axes) और चतुर्थांशों (quadrants) की अवधारणाओं का उपयोग करते हैं।

### अक्ष (Co-ordinates Axes)

किसी समतल पर एक बिंदु से गुजरने वाली दो परस्पर लंबवत रेखाएं निर्देशांक अक्ष (Co-ordinates Axes) कहलाती हैं। <br>
<img src="../../../images/coordinate-geometry/coordinates-2.svg" alt="Coordinate Geometry" style="width:81%;height:81%;">

* दो अक्षों के प्रतिच्छेदन बिंदु को ***मूल निर्देशांक (Origin)*** कहते हैं।
* क्षैतिज रेखा को ***X-अक्ष*** या भुज अक्ष (abscissa) कहा जाता है।
* ऊर्ध्वाधर रेखा को ***Y-अक्ष*** या कोटि अक्ष (ordinate) कहा जाता है।

### चतुर्थांश (Quadrants)

दो लंबवत अक्ष 2-D समतल को चार क्षेत्रों में विभाजित करते हैं। इन क्षेत्रों को चतुर्थांश (Quadrants) कहा जाता है, और इन्हें x और y के चिह्न के अनुसार नामित किया गया है। <br>
<img src="../../../images/coordinate-geometry/coordinates-3.png" alt="Coordinate Geometry" style="width:81%;height:81%;"> <br>
<img src="../../../images/coordinate-geometry/coordinates-4.png" alt="Coordinate Geometry" style="width:90%;height:90%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

* (+, +) प्रकार का बिंदु पहले चतुर्थांश में स्थित होता है। उदा. (2, 3)
    
* (-, +) प्रकार का बिंदु दूसरे चतुर्थांश में स्थित होता है। उदा. (-2, 3)
  
* (-, -) प्रकार का बिंदु तीसरे चतुर्थांश में स्थित होता है। उदा. (-2, -3)
   
* (+, -) प्रकार का बिंदु चौथे चतुर्थांश में स्थित होता है। उदा. (2, -3)
</div>

### किसी बिंदु के निर्देशांक (Coordinates of a Point)

जैसा कि पहले ही उल्लेख किया गया है, किसी बिंदु के निर्देशांक संख्याओं की एक जोड़ी है, जो द्वि-आयामी समतल पर इसके सटीक स्थान को परिभाषित करती है।

* दो अक्षों के संदर्भ में एक बिंदु की स्थिति बताने के लिए, हम केवल सामान्य निर्देशांक (normal coordinates) का उपयोग करते हैं।
* मूल बिंदु के संदर्भ में किसी बिंदु की स्थिति बताने के लिए, हम ध्रुवीय निर्देशांक (polar coordinates) का उपयोग करते हैं।

आइए, उनका अधिक विस्तार से अध्ययन करें।

#### क्रमित युग्म (Ordered Pair)

हम किसी बिंदु के निर्देशांकों को क्रमित युग्म के रूप में लिखते हैं। उदाहरण के लिए, (3, 7), (-4, 2), (2.5, -1), आदि।

* क्रमित युग्म में पहली संख्या X-अक्ष के सापेक्ष बिंदु की स्थिति को दर्शाती है।

* क्रमित युग्म में दूसरी संख्या Y-अक्ष के सापेक्ष बिंदु की स्थिति को दर्शाती है।

उदाहरण के लिए, बिंदु P (3, 5) है: <br>
<img src="../../../images/coordinate-geometry/coordinates-3.png" alt="Coordinate Geometry" style="width:81%;height:81%;">

* Y-अक्ष से 3 इकाई की दूरी पर, X-अक्ष के धनात्मक पक्ष की दिशा में।
* X-अक्ष से 5 इकाई की दूरी पर Y-अक्ष के धनात्मक पक्ष की दिशा में।

#### धुवीय निर्देशांक (Polar Coordinates)

मूल बिंदु के सापेक्ष (अक्षों के बजाय) किसी बिंदु की स्थिति को दर्शाने के लिए, हम ध्रुवीय निर्देशांक का उपयोग करते हैं।

एक बिंदु की स्थिति को इंगित करने के लिए, ध्रुवीय निर्देशांक उपयोग करते हैं:
* मूल बिंदु से उस बिंदु की दूरी (r द्वारा निरूपित), और
* वह कोण, जो मूल निर्देशांक और बिंदु को मिलाने वाली रेखा, X-अक्ष से बनाती है (θ या Φ द्वारा निरूपित) <br>
<img src="../../../images/coordinate-geometry/coordinates-5.svg" alt="Coordinate Geometry" style="width:72%;height:72%;">

बिंदु P के ध्रुवीय निर्देशांक हैं: (r cos Φ, r sin Φ)

#### सामान्य निर्देशांक को ध्रुवीय निर्देशांक में बदलना (Converting normal coordinates into polar coordinates)

<P> यदि हमारे पास एक बिंदु P (x, y) है, तो हम इसके ध्रुवीय निर्देशांक आसानी से पा सकते हैं। आइए बिंदु P (\(\sqrt{3}\), 1) का उदाहरण लेते हैं। </p>

<p> मूल निर्देशांक से किसी बिंदु P (x, y) की दूरी, r = \(\sqrt{x^2 + y^2}
 = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = \sqrt{4}\) = 2 units </p>

<p> tan Φ = \(\frac{y}{x} = \frac{1}{\sqrt{3}}\) </p>
इसका अर्थ है, Φ = 30°

तो, x = r cos Φ = 2 cos 30° <br>
y = r sin Φ = 2 sin 30°

<p> बिंदु P (\(\sqrt{3}\), 1) के ध्रुवीय निर्देशांक हैं: (2 cos 30°, 2 sin 30°) </p>

