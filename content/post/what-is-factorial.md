---
author: Mragank Shandilya
title: क्रमगुणित की अवधारणा (Concept of Factorial)
date: "2022-01-03"
description: क्रमगुणित की अवधारणा (Concept of Factorial) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system1.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Factorial, in Hindi</strong>

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

इस लेख में, हम आपका क्रमगुणित (Factorial) की अवधारणा से परिचय कराएंगे।


## क्रमगुणित क्या होता है? (What is a Factorial?)

यह 1 से शुरू होने वाली कुछ प्राकृतिक संख्याओं का गुणनफल है।

किसी क्रमगुणित को निरूपित करने के लिए, हम प्रतीक '!' (विस्मयादिबोधक चिह्न) का उपयोग करते हैं| 

n! = 1 × 2 × 3 ×....× (n−2) × (n−1) × n

जैसे की, 5! = 1 × 2 × 3 × 4 × 5 = 120

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

0! = 1 और 1! = 1
</div>


## N! में किसी अभाज्य संख्या की सबसे बड़ी घात (Largest power of a prime in N!)

N! में अभाज्य संख्या की सबसे बड़ी घात खोजने के लिए, हम दो तरीकों का उपयोग कर सकते हैं!

* गुणनखंडन विधि (Factorization method)

* विस्तृत विभाजन विधि (Long division method)

### गुणनखंडन विधि (Factorization method)

हम एक क्रमगुणित (factorial) का विस्तार कर सकते हैं, और उसमें किसी अभाज्य संख्या (prime number) की उच्चतम घात ज्ञात कर सकते हैं।

<p> उदाहरण: 6! में 2 की सबसे बड़ी घात ज्ञात कीजिए? <br>
6! = 1 × 2 × 3 × 4 × 5 × 6 = \(2^4 × 3^2\) × 5 <br>
अतः 6! में 2 की सबसे बड़ी घात 4 है। </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह विधि छोटे क्रमगुणित (factorial) के लिए ठीक काम करती है। बड़े क्रमगुणितों (factorials) के लिए, इस पद्धति को लागू करना आसान नहीं है। इसलिए हम एक वैकल्पिक विधि का उपयोग करते हैं - विस्तृत विभाजन विधि (Long division method)
</div>

### विस्तृत विभाजन विधि (Long division method)

यहां हम निर्दिष्ट अभाज्य गुणनखंड का उपयोग करके संख्या का विस्तृत विभाजन (Long division) करते हैं। अर्थात्, हम दी गई संख्या को दी गई अभाज्य संख्या से विभाजित करेंगे, और सभी चरणों में प्राप्त हुए सभी भागफलों (quotients) को जोड़ेंगे।

आइए एक उदाहरण का उपयोग करके समझते हैं। <br>
24 में 3 की सबसे बड़ी घात ज्ञात कीजिए! <br>
* चरण 1: भागफल (24/3) = 8
* चरण 2: भागफल (8/3) = 2 <br>

24! में 3 की सबसे बड़ी घात = सभी चरणों में प्राप्त हुए सभी भागफलों का योग = 8 + 2 = 10

आइए इसे दोबारा जांचें। <br>
24! में 3 की घातें, 24! के इन गुणनखंडों में पायी जा सकती हैं <br>
3, 6, 9, 12, 15, 18, 21, 24 (9 और 18, प्रत्येक में 3 की 2 घातें हैं)


## N! में किसी समग्र संख्या की सबसे बड़ी घात (Largest power of a composite number in N!)

N! में किसी समग्र संख्या की सबसे बड़ी घात को खोजने के लिए, हमें इसका अभाज्य गुणनखंडों (prime factors) में गुणनखंडन (factorize) करना होगा| और फिर उस अभाज्य गुणनखंड की सबसे बड़ी घात का पता लगाना होगा जो सबसे कम आपूर्ति में हो (आमतौर पर सबसे बड़ा अभाज्य गुणनखंड सबसे कम आपूर्ति में होता है)।

आइए, इसे एक उदाहरण से समझते हैं।

24! में 6 की सबसे बड़ी घात ज्ञात कीजिए <br>
6 = 3 × 2; <br><br>
24! में 2 की सबसे बड़ी घात = 12 + 6 + 3 + 1 = 22 <br>
24! में 3 की सबसे बड़ी घात = 8 + 2 = 10 <br><br>
जैसा कि हमें पता है, 6 बनाने के लिए हमें 3 और 2 दोनों की आवश्यकता होती है| यहाँ 3 की घात कम आपूर्ति में है, इसलिए 24! में 6 की सबसे बड़ी घात, 24! में 3 की सबसे बड़ी घात पर निर्भर करेगी| <br>
तो 24! में 6 की सबसे बड़ी घात 10 है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आम तौर पर, सबसे बड़ा अभाज्य गुणनखंड (prime factor) कम आपूर्ति में होता है (उदाहरण के लिए उपरोक्त उदाहरण में 3), लेकिन हमेशा ऐसा नहीं होता है।
</div>

<br><hr><br>

## N! के अंत में शून्य की संख्या (Number of Zeroes at the end of N!)

N! मूल रूप से प्रथम 'n' प्राकृत संख्याओं का गुणनफल है।

अंत में एक 'शून्य' 2 और 5 के संयोजन से उत्पन्न होगा। किसी भी क्रमगुणित (factorial) में, 5 की संख्या हमेशा 2 की संख्या से कम होगी और इसलिए 5 की संख्या शून्य की संख्या निर्धारित करेगी।

26! के अंत में कितने शून्य होंगे ? <br>
26! में 5 की सबसे बड़ी घात = 5 + 1 = 6 <br>
तो, 26! के अंत में 6 शून्य होंगे| 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कुछ जटिल क्रमगुणित व्यंजकों (factorial expressions) में 2 की संख्या, 5 की संख्या से कम हो सकती है। ऐसी स्थिति में 2 की संख्या अंत में आने वाले शून्यों की संख्या निर्धारित करेगी।

तो, हमें निम्नलिखित बातों का ध्यान रखना चाहिए:

* किसी क्रमगुणित (factorial) में: <br>
किसी भी क्रमगुणित (factorial) मान में, 5 की संख्या हमेशा 2 की संख्या से कम होगी। इसलिए, हमें केवल 5 की संख्या गिनने की आवश्यकता है।

* किसी गुणन (product) में: <br>
गुणा की जा रही संख्याओं में, 2 या 5 में से कोई भी कम हो सकता है। इनमें से जो भी कम होगा, वह गुणनफल के अंत में शून्यों की संख्या निर्धारित करेगा।
</div>

