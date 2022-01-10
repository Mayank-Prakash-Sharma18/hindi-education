---
author: Mragank Shandilya
title: गणित में श्रेढियाँ क्या होती हैं? (What are Progressions in Maths?)
date: "2022-01-08"
description: गणित में श्रेढियाँ क्या होती हैं? (What are Progressions in Maths?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["progressions"]
categories: ["statistics"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/statistics/progressions.png" # Sets featured image on blog post.
thumbnail: "images/statistics/progressions.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What are Progressions?, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basics-of-statistics" title="Statistics" class="mak-link">सांख्यिकी क्या है?</a> 
* <a href="../what-are-measures-of-central-tendency-in-statistics" title="Statistics" class="mak-link">सांख्यिकी में केन्द्रीय प्रवृत्ति के माप क्या हैं?</a> 
* <a href="../what-are-progressions-in-maths" title="Statistics" class="mak-link">गणित में श्रेढियाँ क्या होती हैं?</a> 
</div>

श्रेढ़ी (Progression) संख्याओं की एक सूची है जो एक विशेष पैटर्न का पालन करती है, जिसे एक सूत्र के माध्यम से दर्शाया जा सकता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

संख्याओं के किसी भी अन्य सामान्य अनुक्रम के विपरीत, श्रेढ़ी के मामले में हम सूत्र का उपयोग करके nवाँ पद ज्ञात कर सकते हैं। यही वह है जो संख्याओं के सामान्य अनुक्रम से श्रेढ़ी को अलग करता है।
</div>

## श्रेढियों के प्रकार (Types of Progressions)

गणित में आपको तीन तरह की श्रेढियों का सामना करना पड़ेगा। ये हैं:
* समान्तर श्रेढ़ी (Arithmetic Progression, AP)
* गुणोत्तर श्रेढ़ी (Geometric Progression, GP)
* हरात्मक श्रेणी (Harmonic Progression, HP)

आइए उनका अधिक विस्तार से अध्ययन करें।

## समान्तर श्रेढ़ी (Arithmetic Progression) क्या होती है?

समान्तर श्रेढ़ी संख्याओं का एक क्रम है, जिसमें किन्हीं दो आसन्न पदों के बीच समान अंतर होता है।

मान लीजिए किसी समांतर श्रेणी का पहला पद 'a' है, और सार्व अंतर 'd' है। अतः, समांतर श्रेणी होगी: <br>
a, a + d, a + 2d, a + 3d, .....

दूसरे शब्दों में, किसी समान्तर श्रेणी में प्रत्येक क्रमागत पद, अपने पिछले पद और एक निश्चित संख्या का योग होता है (जिसे सार्व अंतर, common difference कहते हैं)।

उदाहरण के लिए, निम्नलिखित एक समान्तर श्रेढ़ी है जिसका पहला पद 2 है, और सार्व अंतर 3 है। <br>
2, 5, 8, 11, 14, 17 .....

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

समान्तर श्रेढ़ी का पहला पद और सार्व अंतर, धनात्मक, ऋणात्मक या शून्य हो सकते हैं।
</div>

### समान्तर श्रेढ़ी सूत्र (Arithmetic Progression Formulae)

#### सार्व अंतर (Common difference)

<p> यदि हमारे पास यह समान्तर श्रेढ़ी है: \(a_1, a_2, a_3, ..... a_{n - 1}, a_n\) </p>

<p> तो, समान्तर श्रेढ़ी का सार्व अंतर, <br>
d = \(a_2 – a_1 = a_3 - a_2 = ..... = a_n - a_{n - 1}\) </p>

* यदि सार्व अंतर धनात्मक है, तो अंकगणितीय श्रृंखला का प्रत्येक अनुवर्ती पद पिछले वाले से अधिक होगा।
* यदि सार्व अंतर ऋणात्मक है, तो अंकगणितीय श्रृंखला का प्रत्येक बाद का पद पिछले वाले से छोटा होगा। 

#### समान्तर श्रेढ़ी का nth पद (nth Term of Arithmetic Progression)

<p> मान लीजिए किसी समांतर श्रेणी का पहला पद 'a' है, nवाँ पद '\(a_n\)' है, और सार्व अंतर 'd' है। </p>

<p> तो nवाँ पद, \(a_n\) = a + (n - 1) d </p>

##### प्र. इस AP का 10वाँ पद ज्ञात कीजिए: 1, 2, 3, 4, 5 ......

व्याख्या:<br>
<div class="Exp">

दी गयी AP: 1, 2, 3, 4, 5 .....

तो, a = 1, n = 10, और d = 2 - 1 = 1

<p> हम जानते हैं कि, nवाँ पद, \(a_n\) = a + (n - 1) d <br>
तो, 10वां पद, \(a_{10}\) = 1 + (10 - 1) 1 = 1 + 9 = 10 </p>
</div> <br>

#### समान्तर श्रेढ़ी के पदों का योग (Sum of the terms of an Arithmetic Progression)

##### सूत्र 1

यदि किसी समान्तर श्रेणी का पहला पद 'a' है, सार्व अंतर 'd' है, और पदों की संख्या 'n' है, तो:

<p> समांतर श्रेणी के n पदों का योग = \(\frac{n}{2}\) [2a + (n − 1) × d] </p>

##### सूत्र 2

यदि किसी समान्तर श्रेणी का पहला पद 'a' है, और अंतिम पद 'l' है, तो:

<p> समांतर श्रेणी के n पदों का योग = \(\frac{n}{2}\) (प्रथम पद + अंतिम पद) = \(\frac{n}{2}\) (a + l) </p>

##### प्रश्न. निम्नलिखित श्रृंखला के तत्वों का योग ज्ञात कीजिए: 8, 9, 10, 11, 12, 13, 14

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: सूत्र 1 का उपयोग करके <br><br>

दिया गया है, a = 8, d = 9 - 8 = 1 और n = 7

<p> हम जानते हैं कि, एक समान्तर श्रेणी के n पदों का योग = \(\frac{n}{2}\) [2a + (n − 1) × d] </p>

<p> या S = \(\frac{7}{2}\) [2 × 8 + (7 - 1) 1] = \(\frac{7}{2}\) [16 + 6] = \(\frac{7}{2}\) [22] = 7 × 11 = 77 </p>
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: सूत्र 2 का उपयोग करके <br><br>

दिया गया है, a = 8, l = 14 और n = 7

<p> समान्तर श्रेणी के n पदों का योग = \(\frac{n}{2}\) (a + l) </p>

<p> या S = \(\frac{7}{2}\) [8 + 14] = \(\frac{7}{2}\) [22] = 7 × 11 = 77 </p>
</div><br>

#### अंकगणित माध्य (Arithmetic Mean)

अंकगणित माध्य = AP में सभी पदों का योग / AP में पदों की संख्या


## गुणोत्तर श्रेढ़ी (Geometric Progression) क्या होती है?

गुणोत्तर श्रेढ़ी संख्याओं का एक क्रम है, जिसमें किन्हीं दो आसन्न पदों के बीच समान अनुपात होता है।

मान लीजिए किसी गुणोत्तर श्रेणी का प्रथम पद 'a' है, और उभयनिष्ठ अनुपात 'r' है। तो, गुणोत्तर श्रेढ़ी होगी: <br>
<p> a, ar, a\(r^2\), a\(r^3\), ..... </p>

दूसरे शब्दों में, किसी गुणोत्तर श्रेणी में प्रत्येक क्रमिक पद, अपने पिछले पद और एक निश्चित संख्या का गुणन होता है (जिसे सामान्य अनुपात, common ratio कहा जाता है)।

उदाहरण के लिए, निम्नलिखित एक गुणोत्तर श्रेणी दी गयी है, जिसका पहला पद 2 है, और सामान्य अनुपात 3 है। <br>
2, 6, 18, 54, 162, ..... 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

गुणोत्तर श्रेणी का पहला पद और सामान्य अनुपात, धनात्मक या ऋणात्मक हो सकता है।
</div>

### गुणोत्तर श्रेणी सूत्र (Geometric Progression Formulae)

#### गुणोत्तर श्रेणी का nth पद (nth Term of Geometric Progression)

<p> मान लीजिए एक गुणोत्तर श्रेणी का पहला पद 'a' है, nवाँ पद '\(a_n\)' है, और उभयनिष्ठ अनुपात 'r' है। </p>

<p> तो nवाँ पद, \(a_n = a r^{n - 1}\) </p>

#### गुणोत्तर श्रेणी के पदों का योग (Sum of the terms of a Geometric Progression)

##### सूत्र 1

यदि किसी गुणोत्तर श्रेणी का पहला पद 'a' है, तो उभयनिष्ठ अनुपात 'r' है और पदों की संख्या 'n' है, तो:

<p> गुणोत्तर श्रेणी के n पदों का योग (यदि r > 1) = \(\frac{a (r^n – 1)}{r – 1}\) </p>

<p> गुणोत्तर श्रेणी के n पदों का योग (यदि r < 1) = \(\frac{a (1 – r^n)}{1 – r}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

उपरोक्त सूत्र तभी मान्य होंगे जब r ≠ 1.
</div>

##### सूत्र 2

यदि किसी गुणोत्तर श्रेणी में अनंत पद हैं, और r > 1 हैं, तो श्रृंखला में प्रत्येक अनुवर्ती पद का मान पिछले पद से बड़ा होगा। अत: ऐसी श्रेणी के पदों का योग भी अपरिमित होगा।

हालांकि, यदि किसी गुणोत्तर श्रेणी के अनंत पद हैं, और -1 < r < 1, तो ऐसी श्रृंखला के पदों का योग सीमित होगा। इसे हम निम्न सूत्र द्वारा ज्ञात कर सकते हैं।

<p> किसी गुणोत्तर श्रेणी के अनंत पदों का योग (यदि −1 < r < 1) = \(\frac{a}{1 – r}\) </p>

##### प्रश्न. गुणोत्तर श्रेणी 64, 32, 16, 8, 4, ..... का अनंत तक योग ज्ञात कीजिए।

व्याख्या:<br>
<div class="Exp">

पहला पद, a = 32 <br>
उभयनिष्ठ अनुपात, r = 32/64 = 0.5

<p> हम जानते हैं कि, गुणोत्तर श्रेणी के अनंत पदों का योग (यदि r < 1) = \(\frac{a}{1 – r} = \frac{64}{1 – 0.5}\) = 64 / 0.5 = 128 </p>
</div> <br>

#### गुणोत्तर माध्य (Geometric Mean)

गुणोत्तर माध्य = ज्यामितीय प्रगति में n पदों के गुणनफल का nवाँ मूल (nth root of the product of n terms in the Geometric Progression)


## हरात्मक श्रेणी (Harmonic Progression) क्या होती है?

किसी समान्तर श्रेणी के पदों के व्युत्क्रम को लेकर हरात्मक श्रेणी प्राप्त की जाती है।

उदाहरण के लिए, निम्नलिखित एक समान्तर श्रेणी है:
2, 5, 8, 11, 14, 17 ..... (पहले पद 2, और सार्व अंतर 3 के साथ)

तो, हरात्मक श्रेणी होगी: <br>
1/2, 1/5, 1/8, 1/11, 1/14, 1/17, .....

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

दूसरे शब्दों में, हरात्मक श्रेणी में पदों का व्युत्क्रम एक समान्तर श्रेणी बनाता है।
</div>

### हरात्मक श्रेणी सूत्र (Harmonic Progression Formulae)

#### हरात्मक श्रेणी का nth पद (nth Term of Harmonic Progression)

<p> मान लीजिए कि किसी हरात्मक श्रेणी का पहला पद 'a' है, nवाँ पद '\(a_n\)' है, और सार्व अंतर 'd' है। </p>

<p> तो nवाँ पद, \(a_n = \frac{1}{[a + (n - 1) d]}\) </p>

#### हरात्मक माध्य (Harmonic Mean)

<p> दो पदों 'a' और 'b' के लिए, हरात्मक माध्य = \(\frac{2 ab}{a + b}\) </p>

