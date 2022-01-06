---
author: Mragank Shandilya
title: क्रमागत संख्याएं क्या होती हैं? (What are Consecutive Numbers?)
date: "2022-01-03"
description: क्रमागत संख्याएं क्या होती हैं? (What are Consecutive Numbers?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system5.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system5.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What are Consecutive Numbers?, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../types-of-numbers-in-maths" title="Number System" class="mak-link">गणित में संख्याओं के प्रकार</a> 
* <a href="../what-are-consecutive-numbers" title="Number System" class="mak-link">क्रमागत संख्याएं क्या होती हैं?</a> 
* <a href="../what-are-fractions" title="Number System" class="mak-link">भिन्न क्या होता है?</a> 
* <a href="../what-are-co-primes" title="Number System" class="mak-link">को-प्राइम क्या होते हैं?</a> 
* <a href="../what-is-factorial" title="Number System" class="mak-link">क्रमगुणित की अवधारणा</a> 
* <a href="../what-are-factors-and-multiples" title="Number System" class="mak-link">गुणनखंड और गुणज क्या होते हैं?</a> 
* <a href="../what-is-cyclicity-method" title="Number System" class="mak-link">चक्रीयता विधि क्या होती है?</a> 
* <a href="../remainder-theorems-in-number-system" title="Number System" class="mak-link">शेष प्रमेय</a> 
* <a href="../remainders-of-multiple-numbers" title="Number System" class="mak-link">कई संख्याओं के शेष</a> 
* <a href="../various-divisibility-rules-in-number-system" title="Number System" class="mak-link">विभाज्यता की अवधारणा</a> 
* <a href="../what-are-lcm-and-hcf" title="Number System" class="mak-link">LCM और HCF की अवधारणा</a> 
</div>

क्रमागत संख्याएं (Consecutive Numbers) - वे संख्याओं की एक श्रृंखला है, जिसमें प्रत्येक संख्या पूर्ववर्ती संख्या से 1 अधिक होती है। इन्हें क्रमानुगत संख्याएं या अभिसरण संख्याएं भी कहा जाता है| 

जैसे की, 8, 9, 10, 11,...

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हम यह भी कह सकते हैं कि, वे मूल रूप से एक समान्तर श्रेणी (Arithmetic Progression, A.P.) हैं, जिसमें 1 का सामान्य अंतर है।
</div>


## क्रमागत संख्याओं के गुण (Properties of Consecutive Numbers)

### गुण 1: क्रमागत संख्याओं की संख्या (Number of Consecutive numbers)

यदि {a, a + 1, a + 2, ..., b} क्रमागत पूर्णांकों (consecutive integers) का समुच्चय है, तो <br>
समुच्चय में तत्वों की संख्या = b - a + 1

##### प्रश्न. 12 से 96 तक की क्रमागत प्राकृत संख्याओं के समुच्चय में तत्वों की संख्या ज्ञात कीजिए।

व्याख्या:<br>
<div class="Exp">

तत्वों की संख्या = b – a + 1 = 96 – 12 + 1 = 85 
</div> <br>

### गुण 2

यदि क्रमागत पूर्णांकों के समुच्चय में मदों की संख्या विषम है, तो: <br>
सभी पूर्णांकों का योग हमेशा समुच्चय में मौजूद कुल मदों से विभाज्य होता है

उदाहरण: तीन क्रमागत संख्याओं के समुच्चय में: 7, 8, 9. <br>
योग = 7 + 8 + 9 = 24 (यह 3 से विभाज्य है)

उदाहरण: पांच क्रमागत संख्याओं के सेट में: 9, 10, 11, 12, 13. <br>
योग = 9 + 10 + 11 + 12 + 13 = 55 (यह 5 से विभाज्य है)

### गुण 3

यदि क्रमागत पूर्णांकों के समुच्चय में मदों की संख्या सम है, तो: <br>
सभी पूर्णांकों का योग कभी भी समुच्चय में उपस्थित कुल मदों से विभाज्य नहीं होता है

उदाहरण: चार क्रमागत संख्याओं के सेट में: 7, 8, 9, 10. <br>
योग = 7 + 8 + 9 + 10 = 34 (यह 4 से विभाज्य नहीं है)

उदाहरण: छह क्रमागत संख्याओं के सेट में: 9, 10, 11, 12, 13, 14. <br>
योग = 9 + 10 + 11 + 12 + 13 + 14 = 69 (यह 6 से विभाज्य नहीं है)

### गुण 4

किन्हीं दो क्रमागत पूर्णांकों का गुणनफल हमेशा सम होता है (अर्थात 2 से विभाज्य)।

ऐसा इसलिए है क्योंकि उनमें से एक सम (और दूसरा विषम) होना चाहिए, जैसे की, (3, 4), (12, 13)

दो क्रमागत पूर्णांकों को इस प्रकार लिखा जा सकता है: <br>
n और n - 1 या <br>
n और n + 1

इसलिए, n(n-1) या n(n + 1) के रूप वाली कोई भी संख्या हमेशा सम होगी।

### गुण 5

किन्हीं तीन क्रमागत पूर्णांकों का गुणनफल हमेशा 6 से विभाज्य होता है।

ऐसा इसलिए है क्योंकि उनमें से एक सम होना चाहिए, और उनमें से एक को 3 से विभाज्य होना चाहिए, जैसे की, (3, 4, 5), (12, 13, 14)

तीन क्रमागत पूर्णांकों को इस प्रकार लिखा जा सकता है: n-1, n और n + 1

<p> इसलिए, (n - 1)n(n + 1) या n(\(n^2\) - 1) या (\(n^3\) - n) के रूप की कोई भी संख्या, हमेशा 6 से विभाज्य होगी। </p>

### गुण 6

किसी भी n क्रमागत पूर्णांकों में से, ठीक एक संख्या n से विभाज्य होगी।

उदाहरण: <br>
लगातार चार पूर्णांक: 14, 15, 16, 17 <br>
केवल 16, 4 से विभाज्य है।

### गुण 7

n क्रमागत पूर्णांकों का गुणनफल n! से विभाज्य होगा!

उदाहरण: <br>
लगातार चार पूर्णांक: 14, 15, 16, 17 <br>
(14 × 15 × 16 × 17), 4! से विभाज्य है| 
