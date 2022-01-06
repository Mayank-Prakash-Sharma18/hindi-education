---
author: Mragank Shandilya
title: गुणनखंड और गुणज क्या होते हैं? (What are Factors and Multiples?)
date: "2022-01-03"
description: गुणनखंड और गुणज क्या होते हैं? (What are Factors and Multiples?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system4.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system4.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What are Factors and Multiples?, in Hindi</strong>

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

इस लेख में, हम गुणनखंडों (Factors) और गुणकों (Multiples) के बारे में अध्ययन करने जा रहे हैं।

## गुणनखंडों और गुणकों की अवधारणा (Concept of Factors and Multiples)

मान लीजिए कि A और B कोई दो प्राकृत संख्याएँ हैं।

यदि A/B एक प्राकृत संख्या है, तो इसका अर्थ है कि:
* A, B का गुणज (multiple) है
* B, A का गुणनखंड (factor) है

दूसरे शब्दों में, हम कह सकते हैं कि किसी संख्या के गुणनखंड वे सभी संख्याएँ हैं, जो दी गई संख्या को पूर्ण रूप से विभाजित करती हैं, अर्थात वे जो कोई शेष नहीं छोड़ती हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

1 सभी संख्याओं का एक गुणनखंड है क्योंकि यह सभी संख्याओं को पूर्णतः विभाजित करता है।
</div>

किसी संख्या का गुणनखंड (factor), संख्या से बड़ा नहीं हो सकता (वास्तव में सबसे बड़ा गुणनखंड खुद वह संख्या ही होगी)। इस प्रकार किसी भी संख्या के गुणनखंड 1 और स्वयं उस संख्या (दोनों सम्मिलित) के बीच होंगे - अर्थार्त उसकी संख्या सीमित होती है। <br>
जैसे की, 6 के गुणनखंड हैं: 1, 2, 3 और 6।

किसी संख्या का सबसे छोटा गुणज (multiple), स्वयं वह संख्या होगी - अर्थार्थ गुणकों की संख्या अनंत होती है।
जैसे की, 6 के गुणज हैं: 6, 12, 18 ... इत्यादि।

##### प्र. क्या आप 6 के गुणजों की संख्या ज्ञात कर सकते हैं, जो 62 से कम हैं?

व्याख्या:<br>
<div class="Exp">

जब हम 62 को 6 से विभाजित करेंगे, तो हमें केवल भागफल (quotient) का पता लगाने की आवश्यकता होगी (हम शेष, remainder को अनदेखा करेंगे)।
तो, 62/6 = 10 <br>
अत: 62 से कम, 6 के 10 गुणज (multiples) हैं। <br>
हम इन सभी गुणकों को लिखकर इसकी जांच कर सकते हैं: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60
</div> <br>


## गुणनखंडन: अभाज्य गुणनखंड (Prime Factors)

* किसी संख्या के गुणनखंड (Factors): जैसा कि हम पहले ही देख चुके हैं, किसी संख्या के गुणनखंड उन सभी संख्याओं को कहते हैं, जो उस संख्या को पूर्ण रूप से विभाजित करती हैं (अर्थात कोई शेष नहीं छोड़ती हैं)। <br>
जैसे की, ये 12 के गुणनखंड हैं: 1, 2, 3, 4, 6, 12 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

गुणनखंडों (Factors) को भाजक (divisors) भी कहा जाता है।
</div>

संख्या अपने गुणनखंडों/भाजक का गुणज (multiple) होती है।

* अभाज्य गुणनखंड (Prime factors): वे गुणनखंड जो अभाज्य संख्याएँ हैं। <br>
जैसे की, ये 12 के अभाज्य गुणनखंड हैं: 2, 3 

### अभाज्य गुणनखंडन क्या होता है? (What is Prime factorization?)

किसी संख्या का अभाज्य गुणनखंडन (Prime factorization), उसके अभाज्य गुणनखंडों (prime factors) के गुणनफल के रूप में उस संख्या का व्यंजक (expression) है।

<p> N = \(p^a q^b r^c\) </p>

जहाँ, p, q और r संख्या के अभाज्य गुणनखंड हैं; तथा a, b और c गैर-ऋणात्मक घात हैं।

<p> उदाहरण के लिए, 12 का गुणनखंडित रूप (factorized form) निम्नलिखित है (मूल अभाज्य गुणनखंडों के रूप में): <br>
12 = \(2^2 × 3^1\) </p>

### गुणनखंडों की संख्या ज्ञात करना (Finding Number of factors)

<p> यदि N = \(p^a q^b r^c\) </p>
(जहां, p, q और r संख्या के अभाज्य गुणनखंड हैं; तथा a, b और c गैर-ऋणात्मक घात हैं।) <br>
तो, N के गुणनखंडों की संख्या = (a + 1) (b + 1) (c + 1) <br>
(1 और N सहित) 

<p> जैसे की, 60 = \(2^2 × 3^1 × 5^1\) </p>

तो, 2 की संभावित घातें: (0, 1, 2) <br>
3 की संभावित घातें: (0, 1) <br>
5 की संभावित घातें: (0, 1) <br>
इन घातों का प्रत्येक अनूठा संयोजन एक अलग गुणनखंड देता है। <br>
संभावित संचयों (combinations) की संख्या = 3 × 2 × 2 = 12 <br>
चूँकि 2, 3 और 5 की घातों के 12 अलग-अलग संचय (combinations) हैं, इसलिए 60 के 12 अलग-अलग गुणनखंड हैं। <br>
अगर हम ऊपर दिए गए सूत्र को लागू करेंगे, तो भी हमें यही जवाब मिलेगा।

### विषम गुणनखंडों की संख्या ज्ञात करना (Finding Number of odd factors)

विषम गुणनखंडों की संख्या ज्ञात करने के लिए, हमें सम अभाज्य गुणनखंड (अर्थात 2) की घात को अनदेखा करना चाहिए।

<p> जैसे की, 60 = \(2^2 × 3^1 × 5^1\) </p>

हम 2 की घात की उपेक्षा करेंगे।

अत: 60 के विषम गुणनखंडों की संख्या = (1 + 1) (1 + 1) = 4 <br>
ये हैं: 1, 3, 5, 15

### सम गुणनखंडों की संख्या ज्ञात करना (Finding number of even factors)

सम गुणनखंडों की संख्या = गुणनखंडों की कुल संख्या - विषम गुणनखंडों की संख्या

<p> जैसे की, 60 = \(2^2 × 3^1 × 5^1\) </p>

अतः, 60 के सम गुणनखंडों की संख्या = 12 - 4 = 8 <br>
ये हैं: 2, 4, 6, 10, 12, 20, 30, 60


## सभी गुणनखंडों का योग और गुणनफल (Sum and Product of all factors)

### सभी गुणनखंडों का गुणनफल (Product of all factors)

<p> N के गुणनखंडों (factors) का गुणनफल = \(N^\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या}{2}\) </p>

(1 और स्वयं उस संख्या सहित)

<p> उदाहरण के लिए: <br>
12 = \(2^2 × 3^1\) </p>

12 के गुणनखंडों की संख्या = (2 + 1) (1 + 1) = 3 × 2 = 6 

<p> 12 के गुणनखंडों का गुणनफल = \(12^\frac{6}{2} = 12^3\) </p>

<p> आइए इसे दोबारा जांचें: <br>
12 के गुणनखंडों का गुणनफल = 1 × 2 × 3 × 4 × 6 × 12 = \(12^3\) </p>

### सभी गुणनखंडों का योग (Sum of all factors)

<p> गुणनखंडों का योग (Sum of factors) = \((p^0 + p^1 + ... + p^a) (q^0 + q^1 + ... + q^b) (r^0 + r^1 + ... + r^c)\) ... <br>
= \(\frac{(p^{a + 1} − 1)}{(p − 1)} \frac{(q^{b + 1} − 1)}{(q − 1)} \frac{(r^{c + 1} − 1)}{(r − 1)}\) ... </p>

(1 और स्वयं उस संख्या सहित) 

<p> उदाहरण के लिए: <br>
12 = \(2^2 × 3^1\) </p>

<p> 12 के गुणनखंडों का योग = \(\frac{(2^{2 + 1} − 1)}{(2 − 1)} \frac{(3^{1 + 1} − 1)}{(3 − 1)}\) = (7 × 8) / (1 × 2) = 28 </p>

आइए इसे दोबारा जांचें: <br>
12 के गुणनखंडों का योग = 1 + 2 + 3 + 4 + 6 + 12 = 28  

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>परफेक्ट नंबर (Perfect numbers)</b><br>

यदि किसी संख्या के सभी गुणनखंडों (उस संख्या को छोड़कर) का योग, स्वयं उस संख्या के बराबर हो, तो उसे परफेक्ट नंबर कहते हैं| 

जैसे की, 6 को छोड़कर 6 के गुणनखंड यह हैं: 1, 2, 3 <br>
उपरोक्त गुणनखंडों का योग = 1 + 2 + 3 = 6 <br>

पहली 1000 प्राकृत संख्याओं में 28 और 496 अन्य परफेक्ट नंबर (Perfect numbers) हैं।
</div>


## किसी संख्या को दो गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या (Number of ways to express a number as the product of two factors)

दो संभावित मामले हो सकते हैं:

* संख्या एक परफेक्ट वर्ग नहीं (non-perfect square) है

* संख्या एक परफेक्ट वर्ग (perfect square) है

### संख्या एक परफेक्ट वर्ग नहीं है (Number is a non-perfect square)

ऐसी संख्या के लिए, गुणनखंडों की संख्या सम होनी चाहिए।

<p> ऐसी संख्या को दो गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या}{2}\) </p>

<p> उदाहरण के लिए: <br>
24 = \(2^3 × 3^1\) <br>
24 के गुणनखंडों की संख्या = (3 + 1) (1 + 1) = 8 <br>
तो, इसे दो गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या}{2}\) = 8/2 = 4 </p><br>
आइए इसे दोबारा जांचें। <br>
संख्या 24 को दो गुणनखंडों के गुणनफल के रूप में निम्नलिखित तरीकों से व्यक्त किया जा सकता है: 1 × 24, 2 × 12, 3 × 8, 4 × 6. (अर्थात 4 तरीके)

### संख्या एक परफेक्ट वर्ग है (Number is a perfect square)

ऐसी संख्या के लिए, गुणनखंडों की संख्या विषम होनी चाहिए।

<p> फिर इस तरह की संख्या को किन्हीं दो गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या + 1}{2}\)   (√Number x √Number सहित) </p>

<p> और संख्या को दो अलग-अलग गुणनखंडों (two distinct factors) के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या - 1}{2}\)    (√Number x √Number को छोड़कर) </p>

<p> उदाहरण के लिए: <br>
25 = \(5^2\) <br>
25 के गुणनखंडों की संख्या = (2 + 1) = 3 <br>
तो, इसे दो गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या + 1}{2}\) = (3 + 1)/2 = 2 <br>
और संख्या को दो अलग-अलग गुणनखंडों (two distinct factors) के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(\frac{गुणनखंडों \hspace{1ex} की \hspace{1ex} संख्या - 1}{2}\) = (3 - 1)/2 = 1 </p><br>
आइए इसे दोबारा जांचें। <br>
संख्या 25 को दो गुणनखंडों के गुणनफल के रूप में निम्नलिखित तरीकों से व्यक्त किया जा सकता है: 1 × 25, 5 × 5। (अर्थात 2 तरीके, जिनमें से एक अलग-अलग गुणनखंडों का गुणन है)


## किसी संख्या को दो अपेक्षाकृत अभाज्य गुणनखंडों के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या (Number of ways to express a number as the product of two relatively prime factors)

<p> दो सह-अभाज्य संख्याओं (two co-primes) के गुणनफल के रूप में किसी संख्या को व्यक्त करने के तरीकों की संख्या = \(2^{n-1}\) </p>
(जहाँ n संख्या के विशिष्ट अभाज्य गुणनखंडों की संख्या है)

<p> उदाहरण के लिए: <br>
24 = \(2^3 × 3^1\) <br>
24 के विशिष्ट अभाज्य गुणनखंडों (distinct prime factors) की संख्या, n = 2 (अर्थात 2 और 3) <br>
तो, 24 को दो सह-अभाज्यों (two co-primes) के गुणनफल के रूप में व्यक्त करने के तरीकों की संख्या = \(2^{n - 1} = 2^{2 - 1}\) = 2 </p>
ये दो तरीके हैं: 1 × 24, 3 × 8

## गुणनखंडों के गुण (Properties of Factors)

### गुण 1: अभाज्य संख्याओं के गुणनखंड (Factors of Prime Numbers)

किसी भी अभाज्य संख्या (prime number) के पूर्ण वर्ग (perfect square) में ठीक 3 गुणनखंड होते हैं। <br>
जैसे की, 25 के गुणनखंड: 1, 5 और 25

### गुण 2: पूर्ण वर्गों के गुणनखंड (Factors of Perfect Squares)

सभी पूर्ण वर्गों (perfect squares) में विषम (odd) संख्या में गुणनखंड होते हैं। <br>
जैसे की, 16 के गुणनखंड: 1, 2, 4, 8 और 16, अर्थात 5 गुणनखंड

सभी गैर-पूर्ण वर्गों (non-perfect squares) में सम (even) संख्या में गुणनखंड होते हैं।  <br>
जैसे की, 15 के गुणनखंड: 1, 3, 5, 15, यानि 4 गुणनखंड

### गुण 3: गुणनखंड के गुणनखंडों द्वारा विभाज्यता (Divisibility by factors of a factor)

यदि कोई संख्या किसी अन्य संख्या से विभाज्य होती है, तो वह उस संख्या के सभी गुणनखंडों से भी विभाज्य होती है।

उदाहरण: 108, 36 से विभाज्य है <br>
36 के गुणनखंड हैं 1, 2, 3, 4, 6, 9, 12, 18, 36 <br>
इसलिए, 108 इनसे भी विभाज्य होगा: 1, 2, 3, 4, 6, 9, 12, 18, 36

