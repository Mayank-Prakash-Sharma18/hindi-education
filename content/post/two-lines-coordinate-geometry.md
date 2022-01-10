---
author: Mragank Shandilya
title: निर्देशांक ज्यामिति - दो रेखाएं (Coordinate Geometry - Two Lines)
date: "2022-01-08"
description: निर्देशांक ज्यामिति - दो रेखाएं (Coordinate Geometry - Two Lines) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["coordinate-geometry"]
categories: ["coordinate-geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/coordinate-geometry/two-lines.png" # Sets featured image on blog post.
thumbnail: "images/coordinate-geometry/two-lines.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Coordinate Geometry - Two Lines, in Hindi</strong>

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

इस लेख में, हम दो रेखाओं (एक ही तल पर) से संबंधित कुछ अवधारणाओं पर चर्चा करेंगे - प्रतिच्छेद (intersecting) या समानांतर (parallel)


## कैसे पता करें कि दो रेखाएं समानांतर हैं या नहीं? (How to find whether two lines are parallel or not?)

एक ही तल पर दो रेखाएँ समानांतर होती हैं यदि उनके ढलान समान हों। अन्यथा, वे किसी बिंदु पर प्रतिच्छेद करेंगे।

<p> यदि दो रेखाएं y = \(m_1x + c_1\) और y = \(m_2x + c_2\) हैं, तो: <br>
वे समानांतर होंगे यदि \(m_1 = m_2\) <br>
\(m_1\) और \(m_2\) रेखाओं के ढलान हैं। </p>

<p> यदि दो रेखाएं \(a_1x + b_1y + c_1\) = 0 और \(a_2x + b_2y + c_2\) = 0 हैं, तो: <br>
वे समानांतर होंगे यदि \(\frac{a_1}{a_2} = \frac{b_1}{b_2}\), या \(a_1 b_2 - a_2 b_1\) = 0 </p>


## कैसे पता करें कि दो रेखाएँ लंबवत हैं या नहीं? (How to find whether two lines are perpendicular or not?)

एक ही तल पर दो रेखाएँ लंबवत होती हैं यदि उनके ढलानों का गुणनफल -1 हो।

<p> यदि दो रेखाएं y = \(m_1x + c_1\) और y = \(m_2x + c_2\) हैं, तो: <br>
वे लंबवत होंगी यदि \(m_1 × m_2\) = -1 <br>
\(m_1\) और \(m_2\) रेखाओं के ढलान हैं। </p>

<p> यदि दो रेखाएं \(a_1x + b_1y + c_1\) = 0 और \(a_2x + b_2y + c_2\) = 0 हैं, तो: <br>
वे लंबवत होंगे यदि \(\frac{a_1}{b_1} = -\frac{b_2}{a_2}\), या \(a_1 a_2 + b_1 b_2\) = 0 </p>


## समानांतर रेखाओं के बीच की दूरी (Distance between Parallel lines)

समानांतर रेखाओं के बीच की दूरी हमेशा समान रहती है। इसे खोजने के लिए हम निम्नलिखित सूत्र का उपयोग कर सकते हैं।

<p> दो समानांतर रेखाओं \(ax + by + c_1\) = 0 और \(ax + by + c_2\) = 0 के बीच की दूरी है: <br>
d = \(\frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}\) </p>


## दो रेखाओं का प्रतिच्छेदन बिंदु (Point of intersection of two lines)

<p> यदि हमारे पास दो रेखाएं \(a_1x + b_1y + c_1\) = 0 और \(a_2x + b_2y + c_2\) = 0 हैं, तो: </p>

<p> \(\frac{x}{b_1 c_2 – b_2 c_1} = \frac{y}{c_1 a_2 – c_2 a_1} = \frac{1}{a_1 b_2 – a_2 b_1}\) </p>

<p> इस प्रकार, इन दो रेखाओं का प्रतिच्छेदन बिंदु = \(\frac{b_1 c_2 – b_2 c_1}{a_1 b_2 – a_2 b_1}, \frac{c_1 a_2 – c_2 a_1}{a_1 b_2 – a_2 b_1}\) <br>
Where \(a_1 b_2 – a_2 b_1\) ≠ 0 </p>


## दो रेखाओं के बीच का कोण (Angle between two lines)

<p> यदि θ दो रेखाओं y = \(m_1x + c_1\) और y = \(m_2x + c_2\) के बीच का कोण है, तो: <br>
tan θ = \(|\frac{m_2 - m_1}{1 + m_2 m_1}|\) or \(|\frac{m_1 - m_2}{1 + m_1 m_2}|\) </p>

<p> यदि θ दो रेखाओं \(a_1x + b_1y + c_1\) = 0 और \(a_2x + b_2y + c_2\) = 0 के बीच का कोण है, तो: <br>
tan θ = \(\frac{a_2 b_1 – a_1 b_2}{a_1 a_2 + b_1 b_2}\) </p>


## तीन रेखाओं के संगामिति की शर्त (Condition of concurrency of three lines)

यदि तीन रेखाएँ एक ही उभयनिष्ठ बिंदु पर मिलती हैं, तो वे तीन रेखाएँ समवर्ती (concurrent) कहलाती हैं।

<p> तीन रेखाएँ \(a_1x + b_1y + c_1\) = 0, \(a_2x + b_2y + c_2\) = 0, और \(a_3x + b_3y + c_3\) = 0, समवर्ती हैं यदि: <br>
\(\begin{vmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{vmatrix}\) = 0 </p>

<p> या \(a_1 (b_2 c_3 – b_3 c_2) – b_1 (a_2 c_3 – a_3 c_2) + c_1 (a_2 b_3 – a_3 b_2)\) = 0 </p>


## सारांश 

<p> यदि हमारे पास दो रेखाएँ \(a_1x + b_1y + c_1\) = 0 और \(a_2x + b_2y + c_2\) = 0 हैं, तो: </p>

* <p> वे <b>संपाती (Coincident)</b> होंगी यदि उपरोक्त दो समीकरणों के अनंत हल हैं। ऐसा तब होगा जब: \(\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}\) </p>

* <p> यदि उपरोक्त दो समीकरणों का कोई हल नहीं है तो वे <b>समानांतर (Parallel)</b> होंगी। ऐसा तब होगा जब: \(\frac{a_1}{a_2} = \frac{b_1}{b_2} ≠ \frac{c_1}{c_2}\) </p>

* <p> यदि उपरोक्त दो समीकरणों के अद्वितीय समाधान (unique solutions) हैं, तो वे <b>लंबवत (Perpendicular)</b> होंगी, और \(\frac{a_1}{b_1} = -\frac{b_2}{a_2}\) </p>

* <p> यदि उपरोक्त दो समीकरणों के अद्वितीय समाधान (unique solutions) हैं, और \(\frac{a_1}{a_2} ≠ \frac{b_1}{b_2}\) तो वे <b>अंतर्विभाजक (Intersecting, परस्पर-छेदन करती हुई)</b> होंगी। </p>

