---
author: Mragank Shandilya
title: क्षेत्रमिति - प्रिज्म (Mensuration - Prism)
date: "2022-01-09"
description: क्षेत्रमिति - प्रिज्म (Mensuration - Prism) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["mensuration"]
categories: ["mensuration"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/mensuration/prism-1.png" # Sets featured image on blog post.
thumbnail: "images/mensuration/prism-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Prism, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति क्या होती है?</a> 
* <a href="../what-are-cube-and-cuboids-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - घन और घनाभ</a> 
* <a href="../what-are-sphere-and-hemisphere-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - गोला</a> 
* <a href="../what-is-cylinder-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - बेलन</a> 
* <a href="../what-is-cone-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - शंकु</a> 
* <a href="../what-is-prism-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - प्रिज्म</a> 
* <a href="../what-is-pyramid-in-mensuration" title="Mensuration" class="mak-link">क्षेत्रमिति - पिरामिड</a> 
</div>

इस लेख में, हम क्षेत्रमिति के एक महत्वपूर्ण विषय, प्रिज्म (संक्षेत्र या क्रकच आयत) से संबंधित अवधारणाओं और सूत्रों के बारे में जानने जा रहे हैं।


## प्रिज्म क्या होता है? (What is a Prism?)

प्रिज्म एक त्रिविमीय बहुफलक (three dimensional polyhedron) है, जिसके:
* दो आधार समरूप, समान और समांतर बहुभुज होते हैं (उनकी भुजाएं कितनी भी हो सकती हैं), और
* अन्य फलक समांतर चतुर्भुज (parallelograms) होते हैं, जो दो आधारों की संगत भुजाओं को मिलाते हैं। <br>
<img src="../../../images/mensuration/prism-1.png" alt="Mensuration" style="width:99%;height:99%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

पार्श्व फलक (Lateral Faces) - ये प्रिज्म के आधारों के अलावा अन्य फलक होते हैं।

पार्श्व किनारे (Lateral Edges) - ये प्रिज्म के पार्श्व फलकों के प्रतिच्छेदन की रेखाएँ हैं।

प्रिज्म की धुरी (Axis of a Prism) - यह एक प्रिज्म के दो आधारों के केंद्रों को मिलाने वाली सीधी रेखा है। चूंकि दो आधार बिल्कुल समान हैं और एक दूसरे के समानांतर हैं, अक्ष दोनों आधारों के लंबवत होगा। अक्ष की लंबाई को प्रिज्म की ऊंचाई कहते हैं। 
</div>

n-पक्षीय आधार (n-sided bases) वाले प्रिज्म में 2n शीर्ष (vertices), n + 2 फलक (faces) और 3n किनारे (edges) होते हैं। <br>
उदाहरण के लिए, उपरोक्त आकृति में आधारों की 5 भुजाएँ हैं, और इसलिए प्रिज्म में 10 शीर्ष, 7 फलक और 15 किनारे हैं।

***लम्ब प्रिजम (Right Prism)***: यह एक ऐसा प्रिज्म है जिसके पार्श्व किनारे (lateral edges) इसके आधारों के लंबवत होते हैं। <br>
<img src="../../../images/mensuration/prism-2.png" alt="Mensuration" style="width:90%;height:90%;">

***समभुज आधार प्रिजम (नियमित प्रिज्म, Regular Prism)***: यह एक ऐसा प्रिज्म है जिसके आधार नियमित आकृति (regular figures) होते हैं, अर्थात इसके दोनों आधारों की सभी भुजाएं बराबर होती हैं। <br>
<img src="../../../images/mensuration/prism-3.png" alt="Mensuration" style="width:72%;height:72%;">


### प्रिज्म से संबंधित सूत्र (Formulae related to Prisms)

#### सूत्र 1: आयतन (Volume)

प्रिज्म का आयतन = आधार क्षेत्रफल × ऊँचाई

#### सूत्र 2: पृष्ठीय क्षेत्रफल (Surface Area)

पार्श्व पृष्ठीय क्षेत्रफल (अर्थात भुजाओं का क्षेत्रफल, Lateral surface area) = आधार का परिमाप (Perimeter) × ऊँचाई

कुल पृष्ठीय क्षेत्रफल (Total surface area) = पार्श्व पृष्ठीय क्षेत्रफल + 2 × आधार का क्षेत्रफल


## आधार के अनुसार प्रिज्म के प्रकार (Types of Prisms as per their Bases)

हम पहले से ही जानते हैं कि प्रिज्म के आधार कितनी भी भुजाओं वाले बहुभुज हो सकते हैं।

अत: आधारों के प्रकार के आधार पर हमें विभिन्न प्रकार के प्रिज्म मिलते हैं।
* त्रिकोणीय प्रिज्म (Triangular prism) - इसमें 3 भुजाओं वाले त्रिभुजाकार आधार होते हैं।
* आयताकार या वर्गाकार प्रिज्म (Rectangular or Square prism) - इसमें 4 भुजाओं वाले वर्गाकार/आयताकार आधार होते हैं।
* पंचकोणीय प्रिज्म (Pentagonal prism) - इसमें 5 भुजाओं वाले पंचकोणीय आधार होते हैं।
* षट्कोणीय प्रिज्म (Hexagonal prism) - इसमें 6 भुजाओं वाले षट्कोणीय आधार होते हैं।
* और इसी तरह आगे भी ..... <br>
<img src="../../../images/mensuration/prism-4.png" alt="Mensuration" style="width:99%;height:99%;">

इनमें से कुछ प्रिज्मों का हम आगे अधिक विस्तार से अध्ययन करेंगे।

<br><hr><br>

## लंब समबाहु त्रिभुज प्रिज्म क्या होता है? (What is Right Equilateral Triangular Prism?)

त्रिकोणीय प्रिज्म (Triangular prism) - इसमें 3 भुजाओं वाले त्रिभुजाकार आधार होते हैं।

लंब समबाहु त्रिभुजाकार प्रिज्म (Right Equilateral Triangular prism) के आधार समबाहु त्रिभुज (equilateral triangles) होते हैं।


### लंब समबाहु त्रिभुज प्रिज्म से संबंधित सूत्र (Formulae related to Right Equilateral Triangular Prisms)

#### सूत्र 1: आयतन (Volume)

<p> लंब समबाहु त्रिभुजाकार प्रिज्म का आयतन = आधार क्षेत्रफल × ऊँचाई = \(\frac{\sqrt{3}}{4} × a^2 × h\) </p>

#### सूत्र 2: पृष्ठीय क्षेत्रफल (Surface Area)

पार्श्व पृष्ठीय क्षेत्रफल (अर्थात भुजाओं का क्षेत्रफल, Lateral surface area) = आधार का परिमाप (Perimeter) × ऊँचाई = 3a × h

<p> कुल पृष्ठीय क्षेत्र (Total surface area) = पार्श्व पृष्ठीय क्षेत्र + 2 × आधार का क्षेत्रफल = 3ah + 2 × \(\frac{\sqrt{3}}{4} × a^2\) </p>

<br>

## वर्गाकार प्रिज्म क्या होता है? (What is Square Prism?)

आयताकार या वर्गाकार प्रिज्म (Rectangular or Square prism) - इसमें 4 भुजाओं वाले वर्गाकार/आयताकार आधार होते हैं।

वर्गाकार प्रिज्म (Square Prism) के आधार के रूप में वर्ग (squares) होते हैं।


### वर्गाकार प्रिज्म से संबंधित सूत्र (Formulae related to Square Prisms)

#### सूत्र 1: आयतन (Volume)

<p> वर्गाकार प्रिज्म का आयतन = आधार क्षेत्रफल × ऊँचाई = \(a^2\) × h </p>

#### सूत्र 2: पृष्ठीय क्षेत्रफल (Surface Area)

पार्श्व पृष्ठीय क्षेत्रफल (अर्थात भुजाओं का क्षेत्रफल, Lateral surface area) = आधार का परिमाप (Perimeter) × ऊँचाई = 4a × h

<p> कुल पृष्ठीय क्षेत्र (Total surface area) = पार्श्व पृष्ठीय क्षेत्र + 2 × आधार का क्षेत्रफल = 4ah + 2 × \(a^2\) </p>

<br>

## षट्कोणीय प्रिज्म क्या होते है? (What is Hexagonal Prism?)

षट्कोणीय प्रिज्म - इसमें 6 भुजाओं वाले षट्कोणीय आधार होते हैं।


### षट्कोणीय प्रिज्म से संबंधित सूत्र (Formulae related to Hexagonal Prisms)

#### सूत्र 1: आयतन (Volume)

<p> षट्कोणीय प्रिज्म का आयतन = आधार क्षेत्रफल × ऊँचाई = \(\frac{3\sqrt{3}}{2} × a^2 × h\) </p>

#### सूत्र 2: पृष्ठीय क्षेत्रफल (Surface Area)

पार्श्व पृष्ठीय क्षेत्रफल (अर्थात भुजाओं का क्षेत्रफल, Lateral surface area) = आधार का परिमाप (Perimeter) × ऊँचाई = 6a × h

<p> कुल पृष्ठीय क्षेत्र (Total surface area) = पार्श्व पृष्ठीय क्षेत्र + 2 × आधार का क्षेत्रफल = 6ah + 2 × \(\frac{6\sqrt{3}}{4} × a^2\) </p>
