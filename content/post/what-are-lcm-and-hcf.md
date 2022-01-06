---
author: Mragank Shandilya
title: LCM और HCF की अवधारणा (Concept of LCM and HCF)
date: "2022-01-03"
description: LCM और HCF की अवधारणा (Concept of LCM and HCF) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system2.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system2.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of LCM and HCF, in Hindi</strong>

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

इस लेख में, हम LCM और HCF की अवधारणाओं का अध्ययन करेंगे।

## HCF क्या होता है? (What is HCF?)

HCF (उच्चतम सामान्य कारक, Highest common factor, महत्तम समापवर्तक) या GCD (सबसे बड़ा सामान्य भाजक, Greatest common divisor) वह सबसे बड़ी संख्या है, जो सेट में दी गई प्रत्येक संख्या को पूरी तरह से विभाजित कर सकती है।

अर्थात्, यह दी गई संख्याओं के समुच्चय का सबसे बड़ा संभावित गुणनखंड (largest possible factor) है।

यदि संख्याओं के समुच्चय का HCF h है, तो संख्याएँ होंगी: <br>
ha, hb, hc, ..... <br>
(a, b, c, ... सह-अभाज्य संख्याएं, co-prime numbers हैं)

##### प्र. यदि संख्याओं के एक युग्म का HCF 25 है और उनका योग 200 है, तो ऐसे कितने युग्म संभव हैं?
<pre>(a) एक (b) दो (c) तीन (d) तीन से अधिक</pre>

व्याख्या:<br>
<div class="Exp">

ऐसे किसी भी युग्म का HCF 25 है। तो मान लीजिए कि ऐसी जोड़ी में संख्याएँ 25x और 25y हैं, जहाँ x और y परस्पर अभाज्य या सह अभाज्य हैं, जिसका अर्थ है कि वे 1 को छोड़कर कोई उभयनिष्ठ गुणनखंड साझा नहीं करते हैं।

अब, 25x + 25y = 200 <br>
या x + y = 8

अब हमें x और y के सभी संभावित युग्मों को खोजने की आवश्यकता है, जिनका योग 32 है और जो सह-अभाज्य भी हैं।
ऐसे जोड़े हैं (8, 7), (8, 5), (8, 3), (7, 6) ... इत्यादि।

तो स्पष्ट है कि ऐसे जोड़ों की संख्या तीन से अधिक है।

उत्तर: (d)
</div> <br>

## LCM क्या होता है? (What is LCM?)

LCM (लघुत्तम समापवर्त्य, Least common multiple) वह छोटी से छोटी संभावित संख्या है, जो समुच्चय में दी गई प्रत्येक संख्या से विभाज्य होती है (अर्थात कोई शेष बचता)।

अर्थात्, यह दी गई प्रत्येक संख्या का सबसे छोटा संभव गुणज (multiple) है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

HCF समुच्चय की सबसे छोटी संख्याओं से कम या उसके बराबर होगा। <br>
LCM समुच्चय की सबसे बड़ी संख्याओं से बड़ा या उसके बराबर होगा।
</div>


## LCM और HCF ज्ञात करना (Finding LCM and HCF)

LCM और HCF खोजने के लिए हम दो विधियों का उपयोग कर सकते हैं। आइए जानें उन दोनों को। आपको जो भी अधिक अच्छी लगे, आप उसका उपयोग कर सकते हैं।


### अभाज्य गुणनखंडन विधि (Prime factorization method)

अभाज्य गुणनखंडन विधि (Prime factorization method) में, हम सबसे पहले दी गई संख्याओं के अभाज्य गुणनखंड ज्ञात करते हैं।

LCM = दी गई किसी भी संख्या (ANY of the given numbers) में मौजूद, अधिकतम घात वाले अभाज्य गुणनखंडों का गुणन।

HCF = दी गई सभी संख्याओं (ALL of the given numbers) में मौजूद, न्यूनतम घात वाले अभाज्य गुणनखंडों का गुणन।

##### Q. 99, 108 और 135 का LCM और HCF खोजें।

व्याख्या:<br>
<div class="Exp">

<p> 99 = \(3^2\) × 11 <br>
108 = \(2^2 × 3^3\) <br>
135 = \(3^3\) × 5 </p>

<p> ∴ LCM = दी गई किसी भी संख्या (ANY of the given numbers) में मौजूद, अधिकतम घात वाले अभाज्य गुणनखंडों का गुणन = \(2^2 × 3^3\) × 5 × 11 </p>

<p> ∴ HCF = दी गई सभी संख्याओं (ALL of the given numbers) में मौजूद, न्यूनतम घात वाले अभाज्य गुणनखंडों का गुणन = \(3^2\) = 9 </p>
</div> <br>


### विभाजन विधि (Division method)

#### HCF खोजने के लिए विभाजन विधि का उपयोग करना (Using Division method to find HCF)

* चरण 1: हम इसे एक बार में दो नंबरों पर लागू करेंगे। उदाहरण के लिए, सेट 99, 108 और 135 में, हम 99 और 108 को चुन सकते हैं।

* चरण 2: हम दिए गए समुच्चय में से दो संख्याएँ चुनेंगे और बड़े को छोटे से भाग देंगे। 108 को 99 से भाग देने पर भागफल 1 और शेषफल 9 प्राप्त होता है।

* चरण 3: अब हम भाजक को शेषफल से भाग देते हैं, अर्थात 99 को 9 से, हमें शेषफल 0 मिलता है। <br><br>
हम पिछली संख्या को शेषफल (अर्थात चरण 3) से विभाजित करने की इस प्रक्रिया को तब तक दोहराएंगे जब तक कि हमें शेषफल शून्य न मिल जाए।

* चरण 4: अंतिम भाजक अभीष्ट H.C.F. होगा, अर्थात 9. अतः, H.C.F. (99, 108) = 9

* चरण 5 : अब हम पिछले चरण में मिले H.C.F. और सेट में अगले नंबर को लेंगे (यानी 9 और 135), और चरण 1-4 का पालन करके उनका H.C.F. निकालेंगे, और इसी तरह आगे भी। <br>
135 को 9 से भाग देने पर शून्य शेषफल प्राप्त होता है। तो, H.C.F. (9, 135) = 9 <br>
इसलिए, H.C.F. (99, 108, 135) = 9

#### LCM खोजने के लिए विभाजन विधि का उपयोग करना (Using Division method to find LCM)

आइए 99, 108 और 135 की संख्याओं का एक सेट लें।

* चरण 1: वह संख्या ज्ञात कीजिए जो समुच्चय में कम से कम 2 संख्याओं को विभाजित करती है (मान लीजिए 3), और इससे समुच्चय की सभी संख्याओं को विभाजित करें। इसलिए, हम 99, 108 और 135 को 3 से भाग देंगे।

* चरण 2: भागफल (Quotient) और गैर-विभाज्य संख्याएँ यथावत आगे बढ़ेंगी। 3 से भाग देने के बाद, हमारे पास शेष बचे हैं: 33, 36, 45

* चरण 3: हम चरण 1-2 को तब तक दोहराते रहेंगे, जब तक हमें संख्याओं का एक ऐसा समूह नहीं मिल जाता, जिसमें कोई भी दो संख्याएँ किसी अन्य संख्या से विभाज्य न हों (1 को छोड़कर) <br>
33, 36, 45 को 3 से फिर से विभाजित करने पर, हमें मिलता है: 11, 12, 15 <br>
11, 12, 15 को फिर से 3 से विभाजित करने पर, हमें मिलता है: 11, 4, 5

* चरण 4: अब तक के सभी भाजक (अर्थात प्रत्येक चरण में) और सभी अविभाजित संख्याओं का गुणनफल आवश्यक L.C.M. होगा। <br>
<p> इसलिए, L.C.M. (99, 108, 135) = 3 × 3 × 3 × 11 × 4 × 5 = \(2^2 × 3^3\) × 5 × 11 </p>

<br><hr><br>

## भिन्नों का LCM और HCF (LCM and HCF of fractions)

भिन्नों का LCM और HCF ज्ञात करने के चरण:

* चरण 1: प्रत्येक भिन्न को उसके सरलतम रूप में लिखें (अर्थात, हर और अंश के बीच किसी भी सामान्य कारक को रद्द करें)

* चरण 2: HCF या LCM के लिए उपयुक्त सूत्र लागू करें।

<p> भिन्नों का LCM = \(\frac{अंशों \hspace{1ex} का \hspace{1ex} LCM}{हरों \hspace{1ex} का \hspace{1ex} HCF}\) <br><br>
जैसे की, 2/3, 4/5 और 5/8 का LCM = \(\frac{LCM \hspace{1ex} (2, 4, 5)}{HCF \hspace{1ex} (3, 5, 8)}\) = 20/1 = 20 </p>

<p> भिन्नों का HCF = \(\frac{अंशों \hspace{1ex} का \hspace{1ex} HCF}{हरों \hspace{1ex} का \hspace{1ex} LCM}\) <br><br>
जैसे की, 2/3, 4/5 और 5/8 का HCF = \(\frac{HCF \hspace{1ex} (2, 4, 5)}{LCM \hspace{1ex} (3, 5, 8)}\) = 1/120 </p>


## LCM और HCF के गुण

### गुण 1: LCM, HCF का गुणज होता है (LCM is a multiple of HCF)

माना दो संख्याओं (x और y) के LCM और HCF क्रमशः L और H हैं। <br>
फिर, x = Hp और y = Hq, जहाँ p और q दो अपेक्षाकृत अभाज्य संख्याएँ हैं।

LCM (x, y), L = Hpq

अत:, LCM, HCF का गुणज है| 

आइए हम दो संख्याओं 12 और 27 पर विचार करें। <br>
HCF (12, 27), H = 3 <br>
x = 4 x 3, y = 9 x 3 (4 और 9 अपेक्षाकृत अभाज्य संख्याएँ हैं) <br>
LCM (12, 27), L = 3 x 4 x 9 = 108 <br>
हम देख सकते हैं कि 108, 3 का गुणज है।

### गुण 2: a x b = LCM (a,b) x HCF (a,b)

किन्हीं दो संख्याओं का गुणनफल = उनके LCM और HCF का गुणनफल

आइए हम दो संख्याओं 12 और 27 पर विचार करें। <br>
इन दो संख्याओं का गुणनफल = 12 × 27 = 324 <br>
और, LCM (12, 27) = 108 और HCF (12, 27) = 3 <br>
LCM (12, 27) x HCF (12, 27) = 108 x 3 = 324

### गुण 3: HCF (a,b), a-b का एक कारक है

किन्हीं दो संख्याओं का HCF, उन संख्याओं के अंतर का गुणनखंड होता है।

आइए हम दो संख्याओं 12 और 27 पर विचार करें। <br>
HCF (12, 27) = 3 <br>
संख्याओं में अंतर = 27 - 12 = 15 <br>
हम देख सकते हैं कि 3, 15 का गुणनखंड है।

