---
author: Mragank Shandilya
title: घन की मूल अवधारणा (Basic Concept of Cubes)
date: "2021-11-29"
description: घन की मूल अवधारणा (Basic Concept of Cubes) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["cubes"]
categories: ["cubes"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/cube.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/cube.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basic Concept of Cubes, in Hindi</strong>

घन एक त्रि-आयामी ठोस वस्तु होती है, जो छह वर्गाकार फलकों या सतहों (faces) से घिरी होती है। <br>
<img src="../../../images/reasoning/cube.png" alt="cubes" style="width:63%;height:63%;">
एक घन में 8 कोने (corner) और 12 किनारे (edge) होते हैं। <br>
एक घन में, लंबाई = चौड़ाई = ऊँचाई (घनाभ में ये भिन्न होते हैं)<br><br>

प्रत्येक घन के छह फलक होते हैं, जिनमें से एक बार में अधिकतम 3 फलक दिखाई देते हैं।<br>
प्रत्येक फलक के चार आसन्न फलक और एक विपरीत फलक होता है। दो आसन्न फलक एक किनारे पर मिलते हैं, और एक दूसरे से सटे तीन फलक एक ही कोने पर मिलते हैं।<br>

## विभिन्न प्रकार के प्रश्न

* एक घन / घनाभ को काटना
* एक बड़ा घन/घनाभ पेंट किया जाता है और काट दिया जाता है, या इसके विपरीत
* एक ब्लॉक में घनों की गिनती


## छोटे घनों की संख्या (Number of smaller cubes)

यहाँ हम सीखेंगे, कि बड़े घन या घनाभ को काटने पर छोटे घनों की संख्या कैसे ज्ञात करें| 

क्या आप बता सकते हैं, कि जब हम किसी छड़ को एक बार काटते हैं तो वह कितने भागों में बँट जाती है? <br>
जब हम किसी छड़ को एक बार काटते हैं तो वह दो बराबर भागों में बँट जाती है। <br>
<img src="../../../images/reasoning/rod-cut-in-two.png" alt="dices" style="width:45%;height:45%;">

इसी प्रकार, यदि हम एक छड़ को दो बार काटते हैं, तो वह तीन बराबर भागों में विभाजित हो जाती है। <br>
<img src="../../../images/reasoning/rod-cut-in-three.png" alt="dices" style="width:45%;height:45%;">
और इसी तरह आगे भी ...

अर्थार्थ, यदि कटों की संख्या = (n -1), तो उन भागों की संख्या जिनमें एक छड़ या रेखा विभाजित हो जाती है = n

एक घन को भी किसी छड़/छड़ी/रेखा की तरह काटा जा सकता है। <br>
यदि X सेमी लंबी भुजाओं वाले घन को Y सेमी भुजाओं के बराबर छोटे घनों में काटा जाता है, तो n = X/Y <br>
(n प्रत्येक किनारे पर छोटे घनों की संख्या है।)

यदि इन कटों को तीनों विमाओं, अर्थात् लंबाई, चौड़ाई और ऊँचाई के साथ-साथ किया जाए, तो हमें समान आकार के छोटे-छोटे घन प्राप्त होंगे।

<p>ऐसे छोटे घनों की कुल संख्या = \(n^3\)</p>

##### प्र. यदि एक घन का किनारा 10 सेमी है, और इसे 2 सेमी के किनारे वाले छोटे घनों में काटा जाना है, तो:
1. घन के प्रत्येक किनारे को कितनी बार काटना पड़ेगा ?
2. पूरे घन को कितनी बार काटना पड़ेगा ?
3. इस प्रकार प्राप्त छोटे घनों की संख्या कितनी होगी ?

व्याख्या:<br>
<div class="Exp">
प्रत्येक किनारे पर छोटे घनों की संख्या, n = X/Y = 10/2 = 5, यानी प्रत्येक किनारे को 5 भागों में विभाजित करना होगा। (यहाँ X = 10 और Y = 2)। 

और पाँच भागों में बाँटने के लिए प्रत्येक किनारे को 5 - 1 = 4 बार काटना होगा <br>
<img src="../../../images/reasoning/125-small-cubes.png" alt="125 cubes" style="width:63%;height:63%;">
इसलिए, घन को काटना होगा = 4×3 = 12 बार <br>
<p>छोटे घनों की संख्या = \(n^3 = 5^3\) = 125</p>
(मूल रूप से, यह लंबाई × चौड़ाई × ऊंचाई है)
</div><br>

क्या होगा अगर यह एक घनाभ (Cuboid) हो ? <br>
क्या हम अब भी छोटे घनों की संख्या गिन सकते हैं? <br>
जब एक घनाभ को समान आयतन के छोटे घनों में काटा जाता है, तो:<br>
<p> घनों की कुल संख्या = \( \frac{घनाभ \hspace{1ex} का \hspace{1ex} आयतन}{छोटे \hspace{1ex} घनों \hspace{1ex} का \hspace{1ex} आयतन}  
= \frac{घनाभ \hspace{1ex} की \hspace{1ex} लंबाई × चौड़ाई × ऊँचाई}{(छोटे \hspace{1ex} घनों \hspace{1ex} की \hspace{1ex} भुजा)^3} \) </p>

आइए, एक उदाहरण पर विचार करें।

##### प्र. यदि एक घनाभ जिसकी लंबाई = 10 सेमी, चौड़ाई = 8 सेमी और ऊंचाई = 6 सेमी है, को 2 सेमी किनारे वाले छोटे घनों में काटा जाता है, तो छोटे घनों की संख्या ज्ञात कीजिए।
<pre> (a) 72  (b) 42  (c) 48  (d) 60 </pre>

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: <br>
<p> घनों की कुल संख्या = \(\frac{घनाभ \hspace{1ex} की \hspace{1ex} लंबाई × चौड़ाई × ऊँचाई}{(छोटे \hspace{1ex} घनों \hspace{1ex} की \hspace{1ex} भुजा)^3} = \frac{10 × 8 × 6}{2^3} \) = 60 </p>
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: <br>
घनों की कुल संख्या = लंबाई में घनों की संख्या × चौड़ाई में घनों की संख्या × ऊंचाई में घनों की संख्या = (10/2) × (8/2) × (6/2) = 5 × 4 × 3 = 60 
</div>

##### Q. इस घनाभ में कितने घन हैं?
आरेख:<br>
<img src="../../../images/reasoning/cuboid.png" alt="cuboid" style="width:54%;height:54%;">

व्याख्या:<br>
<div class="Exp">
घनों की संख्या = ऊंचाई में घनों की संख्या × लंबाई में घनों की संख्या × चौड़ाई में घनों की संख्या = 5 × 3 × 3 = 45
</div> <br><br>


## छोटे घनों के प्रकार (Types of smaller cubes)

एक घन को काटने के बाद, निम्नलिखित चार प्रकार के छोटे घन प्राप्त होते हैं:<br>
(हम एक घन का उदाहरण ले रहे हैं, जिसके प्रत्येक किनारे पर 3 घन हैं, अर्थात n = 3)

### कोने वाले घन (Corner cubes)

आरेख:<br>
<img src="../../../images/reasoning/corner-cubes.png" alt="types of small cubes" style="width:54%;height:54%;">
कोने के घनों की संख्या = 8 (हमेशा)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि एक घन को सभी फलकों पर रंगा जाता है, और फिर काटा जाता है, तो इन छोटे घनों में से जो कोने वाले (Corner cubes) थे, उनमें तीन फलक रंगे होंगे (क्योंकि उनके तीन फलक खुले थे)। 

सामान्य परिस्थितियों में, किसी भी छोटे घन में तीन से अधिक रंगे फलक नहीं हो सकते।
</div>

### प्रत्येक किनारे के बीच में घन (Cubes at the middle of each edge)

मध्य घनों की संख्या = 12 (n - 2) <br>
या<br>
मध्य घनों की संख्या = प्रत्येक किनारे पर मध्य घनों की संख्या × 12   (क्योंकि घन में 12 किनारे होते हैं) आरेख:<br>
<img src="../../../images/reasoning/edge-cubes.png" alt="types of small cubes" style="width:54%;height:54%;">
इस स्थिति में, मध्य घनों की संख्या = 12 (n - 2) = 12 (3 - 2) = 12

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि किसी घन को सभी फलकों पर रंगा जाता है, और फिर काटा जाता है, तो इन मध्य छोटे घनों (middle smaller cubes) के दो फलक रंगे होंगे (क्योंकि उनके दो फलक खुले थे)।
</div>

### प्रत्येक फलक के केंद्र वाले घन (Cubes at the centre of each face)

<p> ऐसे घनों की संख्या = 6 \((n – 2)^2\) </p>

या 

ऐसे घनों की संख्या = प्रत्येक फलक में मध्य घनों की संख्या × 6 (क्योंकि एक घन में 6 फलक होते हैं) <br>
<img src="../../../images/reasoning/face-cubes.png" alt="types of small cubes" style="width:54%;height:54%;">
<p> इस स्थिति में, ऐसे घन = 6 \((3 - 2)^2\) = 6 </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि किसी घन को सभी फलकों पर रंगा जाता है और फिर काटा जाता है, तो इन छोटे घनों का एक फलक ही रंगा होगा (क्योंकि उनका एक ही फलक खुला हुआ था)।
</div>

### भीतरी घन जो छिपे हुए हैं (Inner cubes that are hidden)

<p> आंतरिक घनों की संख्या = \((n - 2)^3\) <br>
हमारे उदाहरण में, ऐसे घन = \((n - 2)^3 = (3 - 2)^3\) = 1 </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि किसी घन के सभी फलकों को रंगा जाता है और फिर काटा जाता है, तो इन भीतरी छोटे घनों (inner smaller cubes) का कोई फलक रंगा नहीं मिलेगा (क्योंकि उनका कोई फलक खुला नहीं था)।
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

छोटे घनों की कुल संख्या = कोने के घन + किनारे के मध्य के घन + फलक के केंद्र के घन + भीतरी घन <br>
<p> या \(n^3 = 8 + 12 (n - 2) + 6 (n - 2)^2 + (n - 2)^3\) </p><br>
हमारे उदाहरण में:<br>
<p> \(3^3\) = 8 + 12 + 6 + 1 </p>
या 27 = 27 <br>
इस प्रकार, हमने सभी प्रकार के छोटे घनों का हिसाब लगा लिया है।
</div>

##### प्र. यदि 8 सेमी किनारे वाले एक बड़े घन को समान आयतन के छोटे घनों में काटा जाता है, जिनमें से प्रत्येक का किनारा 2 सेमी है, तो:
छोटे घनों की संख्या = ?<br>
कोने के घनों की संख्या = ?<br>
किनारों के केंद्र के घनों की संख्या = ?<br>
फलकों के केंद्र के घनों की संख्या = ?<br>
आंतरिक घनों की संख्या (N) = ?

व्याख्या:<br>
<div class="Exp">
n = 8/2 = 4<br>
<p> छोटे घनों की संख्या = \(n^3 = 4^3\) = 64<br>
कोने के घनों की संख्या = 8 (हमेशा)<br>
किनारों के केंद्र के घनों की संख्या = 12 (n - 2) = 12 (4 - 2) = 24<br>
फलकों के केंद्र के घनों की संख्या = 6 \((n - 2)^2 = 6 (4 - 2)^2\) = 24<br>
आंतरिक घनों की संख्या = \((n - 2)^3 = (4 - 2)^3\) = 8 </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि हम जाँच करें, तो घनों की कुल संख्या = 8 + 24 + 24 + 8 = 64
</div>
</div> <br><br>

##### प्र. 4 सेमी भुजा वाले एक घन को उसकी सभी सतहों पर नीले रंग से रंगा जाता है, और फिर 1 सेमी भुजा वाले विभिन्न छोटे घनों में विभाजित किया जाता है। ऐसे घनों की संख्या ज्ञात कीजिए जिनके एक, दो और तीन फलक रंगे नहीं हैं।

व्याख्या:<br>
<div class="Exp">
n = 4/1 = 4<br>
तीन रंगे फलकों वाले छोटे घन = कोने वाले घनों की संख्या = 8 (हमेशा)<br>
दो रंगे फलकों वाले छोटे घन = किनारों के केंद्र के घनों की संख्या = 12 (n - 2) = 12 (4 - 2) = 24<br>
<p> एक रंगे फलक वाले छोटे घन = फलकों के केंद्र के घनों की संख्या = 6 \((n - 2)^2 = 6 (4 - 2)^2\) = 24
बिना रंगे फलक वाले छोटे घन = आंतरिक घनों की संख्या = \((n - 2)^3 = (4 - 2)^3\) = 8</p>
</div> <br><br>

<br><hr><br>

## घन गिनना (Counting Blocks)

एक आकृति में कई घन (या घनाभ) दिखाए जाते हैं, और हमें उन्हें गिनना होता है।

आइए, कुछ उदाहरण देखें।

### सभी घनों को ढूँढना (Finding all the cubes)

##### प्र. दी गई आकृति में घनों की संख्या गिनें।
आरेख:<br>
<img src="../../../images/reasoning/cube-blocks.png" alt="blocks of cubes" style="width:45%;height:45%;">
<pre>(a) 3   (b) 4   (c) 5   (d) 6 </pre>

व्याख्या:<br>
<div class="Exp">
एक कॉलम में 2 घन, और दो कॉलम में 1 घन हैं। <br>
तो, कुल घन = (2 × 1) + (1 × 2) = 4 <br>
उत्तर: (b)
</div>

##### प्र. समूह में कितने घन हैं?
आरेख:<br>
<img src="../../../images/reasoning/cube-blocks1.png" alt="blocks of cubes" style="width:54%;height:54%;">
<pre>(a) 10   (b) 16   (c) 18   (d) 20 </pre>

व्याख्या:<br>
<div class="Exp">
एक कॉलम में 4 घन हैं; दो कॉलम में 3 घन; तीन कॉलम में 2 घन, और चार कॉलम में 1 घन हैं। <br>
घनों की कुल संख्या = 4 × 1 + 3 × 2 + 2 × 3 + 1 × 4 = 20 <br>
उत्तर: (a)
</div>

### अनदेखे घनों को ढूँढना (Finding unseen cubes)

देखे नहीं जा सकने वाले घन = कुल घन - दिखाई देने वाले घन

##### प्र. निचे दर्शाए गए चित्र में कितने घन अदृश्य हैं?
आरेख:<br>
<img src="../../../images/reasoning/cube-blocks2.png" alt="blocks of cubes" style="width:54%;height:54%;">
<pre>(a) 10   (b) 16   (c) 18   (d) 20 </pre>

व्याख्या:<br>
<div class="Exp">
चार कॉलम में 4 घन हैं; चार कॉलम में 3 घन, और दो कॉलम में 2 घन। <br>
घनों की कुल संख्या = (4 × 4) + (3 × 4) + (2 × 2) = 32 <br>
दृश्यमान घनों की कुल संख्या = 16 + 6 = 22 <br>
तो, अनदेखे घनों की कुल संख्या = कुल घन - दिखाई देने वाले घन = 32 - 22 = 10 <br>
उत्तर: (d)
</div>

