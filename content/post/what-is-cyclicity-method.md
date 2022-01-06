---
author: Mragank Shandilya
title: चक्रीयता विधि क्या होती है? (What is Cyclicity Method?)
date: "2022-01-03"
description: चक्रीयता विधि क्या होती है? (What is Cyclicity Method?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["number-system"]
categories: ["number-system"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/number-system/cyclicity-table.png" # Sets featured image on blog post.
thumbnail: "images/number-system/cyclicity-table.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Cyclicity Method?, in Hindi</strong>

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

इस लेख में, हम संख्या प्रणाली (Number Systems) में लोकप्रिय तरीकों में से एक, चक्रीयता विधि (Cyclicity Method) पर कुछ प्रकाश डालेंगे।


## गुणनफल में चक्रीयता की अवधारणा (Concept of Cyclicity in Product)

यदि हम किन्हीं 2 संख्याओं को गुणा करें, तो गुणनफल का अंतिम अंक इन दोनों संख्याओं के अंतिम अंक पर निर्भर करेगा।

जैसे की, यदि हम 23 और 47 को गुणा करते हैं, तो इस गुणनफल का अंतिम अंक 3 x 7 के अंतिम अंक के समान होगा, अर्थात 1


## संख्याओं के घातों में चक्रीयता की अवधारणा (Concept of Cyclicity in Powers of numbers)

हम इस अवधारणा को अन्य क्षेत्रों में भी विस्तारित कर सकते हैं, जैसे की, संख्याओं की घात (exponents of numbers)

<p> जैसे की, 3 का अंतिम अंक = 3 <br>
\(3^2\) (अर्थात 3 × 3) का अंतिम अंक = 9 <br>
\(3^3\) (अर्थात 3 × 3 × 3) का अंतिम अंक = 7 <br>
\(3^4\) (अर्थात 3 × 3 × 3 × 3) का अंतिम अंक = 1 <br>
\(3^5\) (अर्थात 3 × 3 × 3 × 3 × 3) का अंतिम अंक = 3 </p>

जैसा कि हम देख सकते हैं, 3 के घातांक (exponents) का अंतिम अंक एक दोहराव पैटर्न का अनुसरण करता है: 3, 9, 7, 1

वास्तव में, सभी संख्याओं के घातकों के अंतिम अंकों का एक चक्र होता है। यानी किसी भी संख्या की घातों के अंतिम अंक, निश्चित चरणों के बाद दोहराते हैं। यदि हम यह पता लगा लें कि किसी संख्या की घातों का अंतिम अंक कितने चरणों में दोहराया जाता है, तो हम किसी भी संख्या की किसी भी घात का अंतिम अंक ज्ञात कर सकते हैं।

<p> ऊपर के उदाहरण में, 3 की चक्रीयता 4 थी, अर्थात \(3^1\) का अंतिम अंक \(3^5\) के समान है, \(3^2\) का अंतिम अंक \(3^6\) के समान है, और इसी तरह आगे भी। </p>

आइए 2 की घातों को देखें।

<p> \(2^1\) का अंतिम अंक 2 है <br>
\(2^2\) का अंतिम अंक 4 है <br>
\(2^3\) का अंतिम अंक 8 है <br>
\(2^4\) का अंतिम अंक 6 है <br>
\(2^5\) का अंतिम अंक 2 है </p>

जैसा कि हम देख सकते हैं, 2 के घातांक का अंतिम अंक एक दोहराव पैटर्न का अनुसरण करता है: 2, 4, 8, 6

<p> तो, 2 की चक्रीयता 4 है, यानी 2 की घातों के लिए अंतिम अंक हर 4 चरणों के बाद दोहराते हैं। \(2^1\) का अंतिम अंक \(2^5\) के समान है, \(2^2\) का वही अंतिम अंक है जो \(2^6\) का है, और इसी तरह आगे भी। </p>
<img src="../../../images/number-system/cyclicity-table.png" alt="Cyclicity Table" style="width:99%;height:99%;">

<p><b> प्र. \(2^{39}\) का अंतिम अंक ज्ञात करें। </b></p>

व्याख्या:<br>
<div class="Exp">

2 की चक्रीयता 4 है।

4 का सबसे बड़ा गुणज (multiple), जो 39 से कम या उसके बराबर है, 36 है।

<p> तो, \(2^{37}\) का अंतिम अंक \(2^1\) के अंतिम अंक के समान होगा <br>
\(2^{38}\) का अंतिम अंक \(2^2\) के अंतिम अंक के समान होगा <br>
\(2^{39}\) का अंतिम अंक \(2^3\) के अंतिम अंक के समान होगा, अर्थात 8. </p>
</div> <br>
