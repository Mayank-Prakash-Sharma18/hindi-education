---
author: Mragank Shandilya
title: निर्देशांक ज्यामिति में निर्देशांक और बिंदुओं की स्थिति ढूँढना (Finding Coordinates and Position of points in Coordinate Geometry)
date: "2022-01-08"
description: निर्देशांक ज्यामिति में निर्देशांक और बिंदुओं की स्थिति ढूँढना (Finding Coordinates and Position of points in Coordinate Geometry) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["coordinate-geometry"]
categories: ["coordinate-geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/coordinate-geometry/coordinates-6.png" # Sets featured image on blog post.
thumbnail: "images/coordinate-geometry/coordinates-6.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Finding Coordinates and Position of points in Coordinate Geometry, in Hindi</strong>

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

इस लेख में, हम सीखेंगे कि बिंदुओं के मामले में निर्देशांक ज्यामिति की अवधारणाओं का उपयोग कैसे किया जाता है।


## एक रेखा के सापेक्ष किसी बिंदु की स्थिति (Position of a point with respect to a line)

हम आसानी से पता लगा सकते हैं कि दिए गए दो बिंदु एक रेखा के एक ही तरफ हैं या विपरीत दिशा में। आइए देखें कैसे।

<p> यदि A (\(x_1\), \(y_1\)) और B (\(x_2\), \(y_2\)) दो बिंदु हैं, और किसी रेखा का समीकरण ax + by + c = 0 है, तो: </p>

वे दो बिंदु रेखा के एक ही तरफ होंगे, यदि: <br>
<img src="../../../images/coordinate-geometry/coordinates-10.png" alt="Coordinate Geometry" style="width:72%;height:72%;">
<p> \((ax_1 + by_1 + c)\) और \((ax_2 + by_2 + c)\) के चिह्न समान हैं। </p>

वे दो बिंदु रेखा के विपरीत दिशा में होंगे (यानि एक बिंदु रेखा के एक तरफ, और दूसरा दूसरी तरफ), यदि: <br>
<img src="../../../images/coordinate-geometry/coordinates-11.png" alt="Coordinate Geometry" style="width:72%;height:72%;">
<p> \((ax_1 + by_1 + c)\) और \((ax_2 + by_2 + c)\) के चिह्न विपरीत हैं। </p>


## रेखा को विभाजित करने वाले बिंदु के निर्देशांक ढूँढना (Finding Coordinates of a point dividing a line)

यदि हम उस अनुपात को जानते हैं जिसमें कोई बिंदु किसी रेखा को आंतरिक या बाह्य रूप से विभाजित करता है, तो हम उस बिंदु का निर्देशांक ज्ञात कर सकते हैं।

### रेखा खंड का आंतरिक विभाजन (Internal division of a line segment)

<p> यदि कोई बिंदु A (x, y), दो बिंदुओं P (\(x_1\), \(y_1\)) और Q (\(x_2\), \(y_2\)) को मिलाने वाली रेखा को m:n के अनुपात में आंतरिक रूप से विभाजित करता है, तो: </p> 

आरेख: <br>
<img src="../../../images/coordinate-geometry/coordinates-7.png" alt="Coordinate Geometry" style="width:72%;height:72%;">

<p> x = \(\frac{m x_2 + n x_1}{m + n}\) </p>

<p> y = \(\frac{m y_2 + n y_1}{m + n}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

#### विशेष मामला

एक रेखाखंड के मध्य-बिंदु के मामले में, m:n = 1:1

<p> तो, दो बिंदुओं P (\(x_1\), \(y_1\)) और Q (\(x_2\), \(y_2\)) को मिलाने वाले रेखा खंड के मध्य-बिंदु के निर्देशांक होंगे: </p>

<p> x = \(\frac{x_2 + x_1}{2}\) </p>

<p> y = \(\frac{y_2 + y_1}{2}\) </p>
</div>

### रेखा खंड का बाहरी विभाजन (External division of a line segment)

<p> यदि कोई बिंदु A (x, y), दो बिंदुओं P (\(x_1\), \(y_1\)) और Q (\(x_2\), \(y_2\)) को मिलाने वाली रेखा को m:n के अनुपात में बाहरी रूप से बाँटता है, तो: </p> 

आरेख: <br>
<img src="../../../images/coordinate-geometry/coordinates-8.png" alt="Coordinate Geometry" style="width:72%;height:72%;">

<p> x = \(\frac{m x_2 - n x_1}{m - n}\) </p>

<p> y = \(\frac{m y_2 - n y_1}{m - n}\) </p>


## दो निर्देशांकों के बीच की दूरी (Distance between two Coordinates)

यदि हम उनके निर्देशांकों को जानते हैं, तो हम दो बिंदुओं के बीच की दूरी ज्ञात कर सकते हैं।

<p> यदि कार्तीय तल (Cartesian plane) पर हमारे दो बिंदु हैं, P (\(x_1\), \(y_1\)) और Q (\(x_2\), \(y_2\)), तो: </p> 

आरेख: <br>
<img src="../../../images/coordinate-geometry/coordinates-6.png" alt="Coordinate Geometry" style="width:81%;height:81%;">

<p> P और Q के बीच की दूरी, d = \(\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

#### विशेष मामला 

<p> किसी बिंदु P (x, y) और मूल निर्देशांक (0, 0) के बीच की दूरी = \(\sqrt{(x - 0)^2 + (y - 0)^2} = \sqrt{x^2 + y^2}\) </p>
</div>


## सीधी रेखा से किसी बिंदु की न्यूनतम दूरी (Minimum distance of a point from a straight line)

एक सीधी रेखा से किसी बिंदु की न्यूनतम दूरी = उस रेखा पर उस बिंदु से गिराए गए लंब की लंबाई। <br>
<img src="../../../images/coordinate-geometry/coordinates-9.png" alt="Coordinate Geometry" style="width:90%;height:90%;">

<p> किसी दिए गए बिंदु (\(x_1, y_1\)) से एक रेखा ax + by + c = 0 पर लंब (perpendicular) की लंबाई की गणना निम्न सूत्र का उपयोग करके की जा सकती है: </p>

<p> d = \(\frac{|a x_1 + b y_1 + c|}{\sqrt{a^2 + b^2}}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

मूल निर्देशांक (0, 0) से रेखा ax + by + c = 0 पर लंब की लंबाई निम्नलिखित सूत्र द्वारा दी जाती है:

<p> d = \(\frac{|c|}{\sqrt{a^2 + b^2}}\) </p>
</div>


## समरेख बिंदु ज्ञात करना (Finding Collinear points)

तीन दिए गए बिंदु (जैसे A, B और C) संरेख हैं (अर्थात वे एक ही सीधी रेखा पर स्थित हैं), यदि निम्नलिखित में से कोई भी शर्त पूरी होती है:

* ∆ABC का क्षेत्रफल शून्य है।
* किन्हीं दो बिंदुओं को मिलाने वाली रेखाओं का ढाल (Slope) समान है। अर्थात् AB का ढाल = BC का ढाल = CA का ढाल।
* यदि किन्हीं दो रेखाखंडों की लंबाइयों का योग तीसरी रेखाखंड के बराबर है। मान लीजिए, यदि AB + BC = AC

