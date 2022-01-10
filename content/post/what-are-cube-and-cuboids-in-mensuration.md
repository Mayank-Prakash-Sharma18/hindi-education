---
author: Mragank Shandilya
title: क्षेत्रमिति - घन और घनाभ (Mensuration - Cubes and Cuboids)
date: "2022-01-09"
description: क्षेत्रमिति - घन और घनाभ (Mensuration - Cubes and Cuboids) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["mensuration"]
categories: ["mensuration"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/mensuration/cube-1.png" # Sets featured image on blog post.
thumbnail: "images/mensuration/cube-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Cubes and Cuboids, in Hindi</strong>

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

इस लेख में, हम क्षेत्रमिति के एक महत्वपूर्ण विषय, घन और घनाभ से संबंधित अवधारणाओं और सूत्रों के बारे में जानने जा रहे हैं।

## घन क्या होता है? (What is a Cube?)

घन एक त्रिविमीय ठोस संरचना है, जो किनारों के साथ जुड़े हुए छह समान वर्गाकार (square) फलकों से बनती है। <br>
<img src="../../../images/mensuration/cube-1.png" alt="Mensuration" style="width:36%;height:36%;">

एक घन में निम्नलिखित होते हैं:
* समान आकार और समान क्षेत्रफल के 6 वर्गाकार फलक (faces)
* समान लंबाई के 12 किनारे (edges)
* 8 कोने (vertices)

घनाभ (Cuboid) के मामले में, कम से कम कुछ किनारों की लंबाई अलग-अलग होती है। और इसलिए, इसके फलकों का क्षेत्र भिन्न हो सकता है। तो, हम इसे इस प्रकार परिभाषित करते हैं।

घनाभ एक त्रिविमीय ठोस संरचना होती है जो किनारों के साथ जुड़े हुए छह आयताकार (rectangular) फलकों से बनी होती है। <br>
<img src="../../../images/mensuration/cuboid-1.png" alt="Mensuration" style="width:45%;height:45%;">

आइए, घनों और घनाभों से संबंधित इन शब्दों को समझते हैं।


## घन और घनाभ से संबंधित बुनियादी शब्दावली (Basic Terms related to Cubes and Cuboids)

### फलक, किनारा और शीर्ष (Face, Edge and Vertex)

***किसी घन का फलक (Face or Facet)*** उसकी बाहरी सपाट सतह होती है।

एक घन के 6 फलक होते हैं जो सभी वर्ग होते हैं, अर्थात उनमें से प्रत्येक की चार बराबर भुजाएँ होती हैं। दूसरी ओर, घनाभ के फलक वर्ग या आयत हो सकते हैं।

वह रेखा खंड जहाँ दो फलक मिलते हैं ***किनारे (Edge)*** कहलाते हैं। एक घन/घनाभ में 12 किनारे होते हैं।

जिस बिंदु पर तीन किनारे मिलते हैं उसे ***शीर्ष/कोने (Vertex)*** कहा जाता है। एक घन/घनाभ में 8 शीर्ष होते हैं। <br>
<img src="../../../images/reasoning/cube.png" alt="cubes" style="width:63%;height:63%;">

### विकर्ण (Diagonal)

घन और घनाभ के मामले में हम दो प्रकार के विकर्णों को देखते हैं।

#### फलक विकर्ण (Face diagonals)

ये एक ही फलक के दो विपरीत कोनों को जोड़ने वाले रेखाखंड हैं।

एक घन/घनाभ के 6 फलक होते हैं और प्रत्येक फलक पर दो फलक विकर्ण होते हैं। तो, एक घन/घनाभ में 12 फलक विकर्ण होते हैं। <br>
<img src="../../../images/mensuration/cube-2.png" alt="Mensuration" style="width:81%;height:81%;">

#### अंतरिक्ष विकर्ण या पिण्ड विकर्ण (Space Diagonal or Body Diagonal)

यह ऐसे दो कोनों को जोड़ने वाला एक रेखाखंड है, जो घन/घनाभ के एक ही फलक पर नहीं होते हैं।


## घन और घनाभ से संबंधित सूत्र (Formulae related to Cubes and Cuboids)

* यदि 'a' एक घन की भुजा है, और
* l, b और h एक घनाभ की लंबाई, चौड़ाई और ऊंचाई हैं, तो:

### सूत्र 1: आयतन (Volume)

***घनों (Cubes)*** के मामले में:

* <p> घन का आयतन = आधार का क्षेत्रफल × ऊँचाई = \(a^2 × a = a^3\) cubic units </p>

* <p> खोखले घन का आयतन = सामग्री का आयतन = पूरे घन का आयतन - भीतरी खाली जगह का आयतन = \(a^3 - (a - 2x)^3\) </p>
(जहाँ x घन के प्रत्येक फलक की मोटाई है)

***घनाभों (Cuboids)*** के मामले में:

* घनाभ का आयतन = आधार का क्षेत्रफल × ऊँचाई = lb × h = lbh cubic units 

* खोखले घनाभ का आयतन = पदार्थ का आयतन = पूरे घनाभ का आयतन - भीतरी खाली स्थान का आयतन <br>
= lbh - (l - 2x) (b - 2x) (h - 2x) <br>
(जहाँ x घनाभ के प्रत्येक फलक की मोटाई है)

### सूत्र 2: पृष्ठीय क्षेत्रफल (Surface Area)

***घनों (Cubes)*** के मामले में:

<p> घन का पार्श्व पृष्ठीय क्षेत्रफल (Lateral surface area) = आधार का परिमाप/Perimeter × ऊँचाई = 4a × a = 4 \(a^2\) square units </p>

<p> घन का कुल पृष्ठीय क्षेत्रफल (Total surface area) = 6 \(a^2\) square units </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> घन का आयतन = \((\sqrt{\frac{कुल \hspace{1ex} पृष्ठीय \hspace{1ex} क्षेत्रफल}{6}})^3\) cubic units </p>
</div>

***घनाभों (Cuboids)*** के मामले में:

घनाभ का पार्श्व पृष्ठीय क्षेत्रफल (Lateral surface area) = आधार का परिमाप/Perimeter × ऊँचाई = 2 (l + b) h square units

घनाभ का कुल पृष्ठीय क्षेत्रफल (Total surface area) = 2 (lb + bh + lh) square units

### सूत्र 3: विकर्ण (Diagonal)

***घनों (Cubes)*** के मामले में: <br>
<img src="../../../images/mensuration/cube-2.png" alt="Mensuration" style="width:81%;height:81%;">

<p> घन का फलक विकर्ण (Face Diagonal) = \(\sqrt{2}\) a units </p>

<p> घन का अंतरिक्ष विकर्ण (Space Diagonal) = \(\sqrt{3}\) a units </p>

***घनाभों (Cuboids)*** के मामले में: <br>
<img src="../../../images/mensuration/cuboid-2.png" alt="Mensuration" style="width:99%;height:99%;">

<p> एक घनाभ के तीन भिन्न फलक विकर्ण होते हैं, \(\sqrt{l^2 + b^2}\), \(\sqrt{l^2 + h^2}\) and \(\sqrt{b^2 + h^2}\) units </p>

<p> घनाभ का अंतरिक्ष विकर्ण (Space Diagonal) = \(\sqrt{l^2 + b^2 + h^2}\) units </p>

