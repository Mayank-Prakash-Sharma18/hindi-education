---
author: Mragank Shandilya
title: को-प्राइम क्या होते हैं? (What are Co-primes?)
date: "2022-01-03"
description: को-प्राइम क्या होते हैं? (What are Co-primes?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/number-system6.png" # Sets featured image on blog post.
thumbnail: "images/number-system/number-system6.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What are Co-primes?, in Hindi</strong>

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

सह-अभाज्य संख्याएँ (को-प्राइम, Co-prime) सापेक्ष रूप से अभाज्य संख्याएँ (Relatively prime numbers) भी कहलाती हैं।

## सह-अभाज्य संख्याएँ क्या होती हैं? (What are Co-prime numbers?)

वे दो प्राकर्तिक संख्याएँ (natural numbers) होती हैं, जिनका 1 के अलावा कोई उभयनिष्ठ गुणनखंड (common factor) नहीं है, अर्थात उनका H.C.F. 1 है <br>
जैसे की, (8 and 9), (4 and 5).

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

* दो संख्याएँ सह-अभाज्य हो सकती हैं, भले ही उनमें से कोई भी व्यक्तिगत रूप से अभाज्य न हो। जैसे की, 4 और 9.

* 1 अन्य सभी प्राकृत संख्याओं के लिए अपेक्षाकृत अभाज्य (relatively prime) है।
</div>


## सह-अभाज्य संख्याओं के गुण (Properties of Co-primes)

### गुण 1: क्रमित संख्याएं  (Consecutive numbers)

* दो क्रमागत विषम संख्याएँ सदैव सह-अभाज्य संख्याएँ होती हैं। <br>
जैसे की, (9 और 11), (15 और 17) आदि।

* तीन क्रमागत विषम संख्याएँ सदैव सह-अभाज्य संख्याएँ होती हैं। <br>
जैसे की, (3, 5 और 7), (21, 23 और 25)

### गुण 2: कारकों के रूप में (As factors)

<strong>कैसे पता करें कि कोई संख्या A, किसी अन्य संख्या B से विभाज्य है या नहीं?</strong>

हमें दो सह-अभाज्य संख्याएँ, x और y इस प्रकार ज्ञात करनी हैं कि B = x × y

यदि A, x और y दोनों से विभाज्य है, तो वह B से विभाज्य है।

उदाहरण: क्या 120, 24 से विभाज्य है? <br>
अब, 24 = 8 × 3 (8 और 3 सह-अभाज्य हैं) <br>
जैसे 120, 8 और 3 दोनों से विभाज्य है, इसलिए इसे 24 से भी विभाज्य होना चाहिए।

दूसरे शब्दों में, यदि कोई संख्या दो सह-अभाज्य संख्याओं से विभाज्य है, तो वह संख्या उनके गुणनफल से भी विभाज्य होती है।

हम इस नियम को 2 से अधिक सह-अभाज्य संख्याओं तक भी बढ़ा सकते हैं।

इसलिए, यदि कोई संख्या दो से अधिक सह-अभाज्य संख्याओं से विभाज्य है, तो वह संख्या उनके गुणनफल से भी विभाज्य होती है।

उदाहरण: क्या 960, 60 से विभाज्य है? <br>
अब, 60 = 5 × 4 × 3 (5, 4 और 3 सह-अभाज्य हैं) <br>
चूंकि 960, 5, 4 और 3 से विभाज्य है, इसलिए इसे 60 से भी विभाज्य होना चाहिए।

### गुण 3: Euler's function

<p> Euler's function, ϕ(N) = N के सभी सह-अभाज्य संख्याओं की संख्या, जो N से कम हैं। <br>
अगर N = \(a^p b^q c^r\) ..... <br>
ϕ(N) = N [1 − \(\frac{1}{a}\)] [1 − \(\frac{1}{b}\)] [1 − \(\frac{1}{c}\)] ..... </p>

##### प्र. 36 तक सह-अभाज्य संख्या ज्ञात कीजिए, जो 36 से कम हैं। या <br> यदि p, 36 से अपेक्षाकृत अभाज्य है और p < 36, तो p के लिए संभावित मानों की संख्या ज्ञात कीजिए?

व्याख्या:<br>
<div class="Exp">

<p> 36 = \(2^2 × 3^2\) <br>
ϕ(36) = 36 [1 − \(\frac{1}{2}\)] [1 − \(\frac{1}{3}\)] = 36 × (1/2) × (2/3) = 12 </p>
तो, p के लिए 12 संभावित मान हैं: <br>
-1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35.
</div> <br>
 
### गुण 4

<p> N के सभी सह-अभाज्यों का योग जो N से कम हैं = \(\frac{N^2}{2}\) [1 − \(\frac{1}{a}\)] [1 − \(\frac{1}{b}\)] [1 − \(\frac{1}{c}\)] ..... = (\(\frac{N}{2}\)) ϕ(N) </p>

##### प्र. 18 तक सभी सह-अभाज्यों का योग ज्ञात कीजिए, जो 18 से कम हैं।

व्याख्या:<br>
<div class="Exp">

<p> योग = \(\frac{18^2}{2}\) [1 − \(\frac{1}{2}\)] [1 − \(\frac{1}{3}\)] = 54 </p>
</div> <br>

