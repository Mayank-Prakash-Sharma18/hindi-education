---
author: Mragank Shandilya
title: कई संख्याओं के शेष (Remainders of a set of multiple numbers)
date: "2022-01-03"
description: कई संख्याओं के शेष (Remainders of a set of multiple numbers) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system7.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system7.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Remainders of a set of multiple numbers, in Hindi</strong>

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

कभी-कभी हमें एक शेषफल (remainder) दिया जाता है जो प्राप्त होता है:
* विभिन्न संख्याओं के समुच्चय को एक ही भाजक (divisor) से विभाजित करने पर।
* एक ही संख्या को विभिन्न भाजक (divisors) से विभाजित करने पर।

आइए, देखें कुछ ऐसे ही मामले और उनसे कैसे निबटा जाए।


## केस 1: सामान्य शेष - लाभांश समान है, भाजक भिन्न हैं (Common remainder - dividend is same, divisors vary)

आइए हम उस मामले पर विचार करें जहां विभाजित होने वाली संख्या समान है, लेकिन भाजक (divisors) भिन्न हैं।

यदि हमें वही शेषफल r प्राप्त होता है, जब एक संख्या को विभिन्न भाजक (जैसे x, y या z) से विभाजित किया जाता है, तो:

संख्या इस रूप की है: <br>
k (x, y और z का LCM) + r <br>
(जहाँ k कोई पूर्ण संख्या, whole number है)

जब k = 0 होता है, तो संख्या ही शेषफल होती है (और भाजक से कम होती है)। यह ऐसी संख्या का न्यूनतम संभव मान होगा।

##### प्रश्न. दो अंकों की वह सबसे बड़ी संख्या ज्ञात कीजिए, जिसे 6 या 9 से भाग देने पर शेषफल 3 बचता है?

व्याख्या:<br>
<div class="Exp">

संख्या इस रूप की होगी: k (6 और 9 का LCM) + 3 = 18k + 3

अगर k = 0; 18k + 3 = 3 <br>
अगर k = 1; 18k + 3 = 21 <br>
अगर k = 2; 18k + 3 = 39 <br>
अगर k = 3; 18k + 3 = 57 <br>
अगर k = 4; 18k + 3 = 75 <br>
अगर k = 5; 18k + 3 = 93 <br>
अगर k = 6; 18k + 3 = 111

अतः अभीष्ट दो अंकों की संख्या = 93
</div> <br>

##### प्र. किसी संख्या को 4, 5, 6 और 7 से विभाजित करने पर 3 शेष बचता है, लेकिन 9 से विभाजित करने पर कोई शेष नहीं बचता है। ऐसी सबसे छोटी संभव संख्या के अंकों का योग क्या है?
<pre>(a) 12         (b) 9          (c) 6          (d) 15</pre>

व्याख्या:<br>
<div class="Exp">

आवश्यक संख्या 4, 5, 6, और 7 से विभाजित करने पर शेष 3 छोड़ती है। <br>
अतः, संख्या इस रूप की होगी = k (4, 5, 6 और 7 का LCM) + 3, जहां k कोई पूर्णांक है।

(4, 5, 6 और 7) का LCM = 420 <br>
अत: अभीष्ट संख्या = 420k + 3

हम जानते हैं कि यह संख्या 9 से विभाज्य है। चूँकि हमें न्यूनतम संभव संख्या की आवश्यकता है, इसलिए हमें k का न्यूनतम मान ज्ञात करना चाहिए। <br>
अब k = 1 के लिए अभीष्ट संख्या = 423 है, जो 9 से विभाज्य है। इसलिए, यह अभीष्ट संख्या है।

इसके अंकों का योग = 4 + 2 + 3 = 9

उत्तर: (b)
</div> <br>


## केस 2: सामान्य नकारात्मक शेष - लाभांश समान है, भाजक अलग-अलग हैं (Common Negative Remainder - dividend is same, divisors vary)

यहाँ फिर से, विभाजित होने वाली संख्या समान है, लेकिन भाजक भिन्न हैं।

यदि किसी संख्या को विभिन्न भाजक (जैसे x, y या z) से विभाजित करने पर हमें समान ऋणात्मक शेषफल -r प्राप्त होता है, तो:

संख्या इस रूप की है: <br>
k (x, y और z का LCM) - r <br>
(जहाँ k कोई प्राकृत संख्या है)

जब k = 1 होता है, तो हमें ऐसी संख्या का न्यूनतम संभव मान प्राप्त होता है।

##### प्रश्न. दो अंकों की वह सबसे बड़ी संख्या ज्ञात कीजिए, जिसे क्रमश: 6 और 9 से भाग देने पर 3 और 6 शेष बचता है?

व्याख्या:<br>
<div class="Exp">

ऋणात्मक शेष = भाजक - धनात्मक शेष = 6 - 3 (या 9 - 6) = 3

संख्या इस रूप की होगी: k (6 और 9 का LCM) - 3 = 18k - 3

अगर k = 1; 18k - 3 = 15 <br>
अगर k = 2; 18k - 3 = 33 <br>
अगर k = 3; 18k - 3 = 51 <br>
अगर k = 4; 18k - 3 = 69 <br>
अगर k = 5; 18k - 3 = 87 <br>
अगर k = 6; 18k - 3 = 105

अतः अभीष्ट दो अंकों की संख्या = 87 
</div> <br>


## केस 3: अलग-अलग शेष - लाभांश समान है, भाजक अलग-अलग हैं (Different remainders - dividend is same, divisors vary)

आइए उन मामलों को देखें जहां भाजक, साथ ही शेष (सकारात्मक या नकारात्मक) भिन्न हैं, लेकिन विभाजित होने वाली संख्या समान है।

##### प्रश्न. सबसे छोटी एकल अंक और दो अंकों की संख्या ज्ञात कीजिए, जिसे क्रमशः 5 और 9 से विभाजित करने पर 3 और 8 शेष बचता है।

व्याख्या:<br>
<div class="Exp">

मान लीजिए कि संख्या 'N' है। <br>
शेष (N/5) = 3 और शेष (N/9) = 8 <br>
इसलिए, हम संख्या को N = 5q + 3 या N = 9p + 8 के रूप में लिख सकते हैं <br> 
(जहाँ 'q' और 'p' भागफल (quotients) और पूर्ण संख्याएँ हैं)।

तो, 5q + 3 = 9p + 8 <br>
या 5q = 9p + 5 <br>

समीकरण का LHS (अर्थात 5q) 'q' के किसी भी प्राकृत संख्या मान के लिए 5 का गुणज है। तो, RHS भी 5 का गुणज होना चाहिए।

जब p = 0, 9p + 5 = 5, जो कि 5 का गुणज है (यह उपरोक्त शर्त को पूरा करता है।) <br>
अतः, अभीष्ट सबसे छोटी एकल अंक की संख्या, N = 9p + 8 = (9 × 0) + 8 = 8

जब p = 5, 9p + 5 = 50, जो कि 5 का गुणज है (यह उपरोक्त शर्त को पूरा करता है।) <br>
तो, आवश्यक सबसे छोटी दो अंकों की संख्या, N = 9p + 8 = (9 × 5) + 8 = 53
</div> <br>


## केस 4: सामान्य शेषफल - लाभांश भिन्न है, भाजक समान है (Common remainder - dividends vary, divisor is same)

इस मामले में, विभाजित की जाने वाली संख्याएँ अलग-अलग होंगी, लेकिन भाजक वही होगा।

यदि विभिन्न संख्याओं (जैसे x, y या z) को एक ही भाजक से विभाजित करने पर हमें वही शेषफल r प्राप्त होता है, तो:

सबसे बड़ा संभावित भाजक = HCF [(x - y) (y - z) (z - x)] या HCF [(x - y) (y - z)]

##### प्र. 43, 78 और 92 को विभाजित करने वाला सबसे बड़ा भाजक ज्ञात कीजिए, जिससे प्रत्येक भाग में समान शेष बचे।

व्याख्या:<br>
<div class="Exp">

आवश्यक भाजक (divisor) = HCF [92 − 78, 78 − 43] = HCF [14, 35] = 7

<p> हम जाँच सकते हैं, कि शेष [\(\frac{43}{7}\)] = शेष [\(\frac{78}{7}\)] = शेष [\(\frac{92}{7}\)] = 1 </p>
</div> <br>


## केस 5: विभिन्न शेषफल - लाभांश भिन्न है, भाजक समान है (Different remainders - dividends vary, divisor is same)

यहाँ फिर से, विभाजित होने वाली संख्याएँ अलग-अलग होंगी, लेकिन भाजक वही होगा।

यदि अलग-अलग संख्याओं (मान लीजिए x, y या z) को एक ही भाजक से विभाजित करने पर शेषफल (जैसे a, b और c) प्राप्त होते हैं, तो:

सबसे बड़ा संभव भाजक = HCF [(x - a) (y - b) (z - c)] 

##### प्रश्न. सबसे बड़ा भाजक ज्ञात कीजिए जो 43, 78 और 99 को विभाजित करने पर, क्रमशः 5, 2 और 4 शेषफल छोड़ता है।

व्याख्या:<br>
<div class="Exp">

आवश्यक भाजक (divisor) = HCF [43 − 5, 78 − 2, 99 - 4] = HCF [38, 76, 95] = 19

<p> हम जाँच सकते हैं कि शेष [\(\frac{43}{19}\)] = 5 <br><br>
शेष [\(\frac{78}{19}\)] = 2 <br><br>
शेष [\(\frac{99}{19}\)] = 4 </p>
</div> <br>

