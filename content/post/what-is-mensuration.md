---
author: Mragank Shandilya
title: क्षेत्रमिति क्या होती है? (What is Mensuration?)
date: "2022-01-09"
description: क्षेत्रमिति क्या होती है? (What is Mensuration?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["mensuration"]
categories: ["mensuration"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/mensuration/mensuration.png" # Sets featured image on blog post.
thumbnail: "images/mensuration/mensuration.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Mensuration?, in Hindi</strong>

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

क्षेत्रमिति, ज्यामिति का एक हिस्सा है जो क्षेत्र (area) और आयतन (volume) को खोजने से संबंधित है।

इसलिए, हम अक्सर क्षेत्रमिति को दो शाखाओं में विभाजित करते हैं:
* 2 D क्षेत्रमिति - 2 D आकृतियों का क्षेत्रफल ज्ञात करना, जैसे कि एक त्रिभुज, वृत्त आदि।
* 3 D क्षेत्रमिति - घन, शंकु, गोले आदि जैसी 3 D आकृतियों का आयतन और पृष्ठीय-क्षेत्रफल (surface area) ज्ञात करना।

हम ज्यामिति मॉड्यूल में 2D क्षेत्रमिति भाग को पहले ही अन्य लेखों में कवर कर चुके हैं। यहां हम पूरी तरह से 3D क्षेत्रमिति पर ध्यान केंद्रित करेंगे।

यहां उन सभी 3D ठोस आकृतियों को दर्शाया गया है, जिनसे हम निपटने जा रहे हैं: <br>
<img src="../../../images/mensuration/mensuration-1.png" alt="Mensuration" style="width:72%;height:72%;">

आइए, अब हम आयतन, पार्श्व पृष्ठीय क्षेत्रफल (Lateral Surface Area), आदि जैसे शब्दों को समझते हैं।


## क्षेत्रमिति में महत्वपूर्ण शब्दावली (Important Terms in Mensuration)

### आयतन क्या होता है? (What is Volume?)

3-D (तीन आयामी) वस्तु का आयतन उसके द्वारा घेरे गए स्थान की मात्रा है।

किसी भी ठोस का आयतन ज्ञात करने के लिए, हम आम तौर पर उसके आधार के क्षेत्रफल को उसकी ऊँचाई से गुणा करते हैं।

<p> हम ठोस का आयतन दर्शाने के लिए घन इकाइयों का उपयोग करते हैं, जैसे की घन सेंटीमीटर (cubic centimeter, \(cm^3\)), घन मिलीमीटर (cubic millimeter, \(mm^3\)), आदि। </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

किसी द्रव के आयतन को मापने या इंगित करने के लिए, हम आम तौर पर ***लीटर (litre)***, ***मिली लीटर (millilitre)***, आदि की इकाई का उपयोग करते हैं।
</div>

#### आयतन की इकाइयों के बीच रूपांतरण (Conversion between units of Volume)

<p> 1 cubic millimeter (\(mm^3\)) = 1 mm × 1 mm × 1 mm </p>

<p> 1 cubic centimeter (\(cm^3\)) = 1 cm × 1 cm × 1 cm = 10 mm × 10 mm × 10 mm = 1000 \(mm^3\) </p>

<p> 1 cubic decimeter (\(dm^3\)) = 1 dm × 1 dm × 1 dm = 10 cm × 10 cm × 10 cm = 1000 \(cm^3\) </p>

<p> 1 cubic meter (\(m^3\)) = 1 m × 1 m × 1 m = 10 dm × 10 dm × 10 dm = 1000 \(dm^3\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> 1 cubic millimeter = 1 microliter = \(10^{-6}\) litre<br>
1 cubic centimeter = 1 millilitre = \(10^{-3}\) litre<br> 
1 cubic decimeter = 1 litre <br>
1 cubic meter = 1 kilolitre = \(10^3\) liters </p>
</div>

### पार्श्व पृष्ठीय क्षेत्रफल क्या होता है? (What is Lateral Surface Area?)

किसी ठोस वस्तु का पार्श्व पृष्ठीय क्षेत्रफल (या वक्र पृष्ठीय क्षेत्रफल) उसके आधार और शीर्ष के क्षेत्र को छोड़कर, संपूर्ण वस्तु का क्षेत्रफल होता है।

किसी भी ठोस का पार्श्व पृष्ठीय क्षेत्रफल ज्ञात करने के लिए, हम आम तौर पर उसके आधार के परिमाप (perimeter) को उसकी ऊँचाई से गुणा करते हैं।

### कुल पृष्ठीय क्षेत्र क्या होता है? (What is Total Surface Area?)

जैसा कि नाम से पता चलता है, एक ठोस वस्तु का कुल पृष्ठीय क्षेत्र पूरे वस्तु का क्षेत्रफल है (इसके आधार और शीर्ष सहित)।
