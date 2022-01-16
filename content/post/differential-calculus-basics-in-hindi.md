---
author: Mragank Shandilya
title: डिफरेंशियल कैलकुलस की मूल अवधारणाएं (Basics of Differential Calculus)
date: "2022-01-15"
description: डिफरेंशियल कैलकुलस की मूल अवधारणाएं (Basics of Differential Calculus) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["calculus"]
categories: ["calculus"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/calculus/differential-calculus-2.png" # Sets featured image on blog post.
thumbnail: "images/calculus/differential-calculus-2.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basics of Differential Calculus, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../differential-calculus-basics-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../differential-calculus-rules-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस नियम</a> 
* <a href="../integral-calculus-basics-in-hindi" title="Calculus" class="mak-link">इंटीग्रल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../integral-calculus-rules-in-hindi" title="Calculus" class="mak-link">इंटीग्रेशन के नियम</a> 
</div>

इस लेख में, हम डिफरेंशियल कैलकुलस (या अवकलन, या Differential Calculus) की मूल अवधारणाओं और नियमों के बारे में अध्ययन करेंगे। लेकिन ऐसा करने से पहले, आइए समझते हैं कि आखिर कैलकुलस (या कलन, या Calculus) क्या होता है।


## कैलकुलस क्या होता है? (What is Calculus?)

कैलकुलस (या कलन, या Calculus) एक लैटिन शब्द है जिसका अर्थ है "कंकड़"। यह गणित की एक शाखा है, जो किसी बड़ी घटना को उसके छोटे-छोटे हिस्सों को देखकर समझने की कोशिश करती है।

यहां हम मूल रूप से बहुत छोटे अंतरों के योग (summation of infinitesimal differences) पर आधारित विधियों द्वारा, फलनों (functions) के डेरिवेटिव (derivatives) और इंटीग्रल (integrals) ज्ञात करते हैं।


## कैलकुलस के प्रकार (Types of Calculus)

कैलकुलस की दो मुख्य शाखाएँ होती हैं:

***डिफरेंशियल कैलकुलस / Differential Calculus (डेरिवेटिव, Derivatives)*** - इसका उपयोग किसी चीज को छोटे टुकड़ों में काटने के लिए किया जाता है, ताकि यह पता लगाया जा सके कि यह कैसे बदलती है। किसी फलन का डेरिवेटिव, उस फलन की "परिवर्तन की दर" है, जिसे उस फलन की ढलान (slope) के द्वारा दर्शाया जाता है।

***इंटीग्रल कैलकुलस / Integral Calculus (इंटीग्रल, Integration)*** - इसका उपयोग छोटे टुकड़ों को एक साथ जोड़ने (यानी एकीकृत) करने के लिए किया जाता है, ताकि कुल मात्रा का पता लगाया जा सके, जैसे कि क्षेत्रफल, आयतन, केंद्रीय बिंदु, आदि।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

डिफरेंशियल इक्वेशन (Differential Equation) एक समीकरण होती है, जिसमें एक फलन और उसके एक या अधिक डेरिवेटिव (derivatives) शामिल होते हैं।
</div>


## डिफरेंशियल कैलकुलस क्या होता है? (What is Differential Calculus?)

कभी-कभी हम किसी दिए गए फलन के ***परिवर्तन की दर*** जानने में रुचि रखते हैं। यह एक वक्र पर दो बिंदुओं को मिलाने वाली रेखा का ढलान (slope) ज्ञात करके किया जा सकता है। <br>
<img src="../../../images/calculus/differential-calculus-1.png" alt="Calculus" style="width:18%;height:18%;">

<p> ढलान (Slope) = \(\frac{Y \hspace{1ex} में \hspace{1ex} परिवर्तन}{X \hspace{1ex} में \hspace{1ex} परिवर्तन} = \frac{y_1 - y_2}{x_1 - x_2}\) </p>

दो बिंदु जितने करीब होंगे, हमें उतना ही सटीक परिणाम मिलेगा। यदि दो बिंदुओं के बीच की दूरी को अनंत रूप से कम (अर्थात लगभग शून्य) कर दिया जाता है, तो हम किसी एक निश्चित बिंदु पर फलन की परिवर्तन की तात्कालिक दर (instantaneous rate of change) पा सकते हैं। <br>
<img src="../../../images/calculus/differential-calculus-2.png" alt="Calculus" style="width:27%;height:27%;">

फलन के डेरिवेटिव (अवकलज, derivative) को ढूंढकर हम यही करते हैं। अर्थात्, ***किसी फलन का डेरिवेटिव एक निश्चित बिंदु पर उस फलन की परिवर्तन की तात्कालिक दर (या ढलान) होता है।***

फलनों के डेरिवेटिव खोजने के लिए, हम differentiation की विधि का उपयोग करते हैं। इसे डिफरेंशियल कैलकुलस (Differential Calculus) कहा जाता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> किसी फलन f(x) का Derivative f'(x) या \(\frac{d}{dx}\) द्वारा निरूपित किया जाता है| </p>

तो, f(x) का Derivative f'(x) के बराबर होता है, या f(x) का d dx, f'(x) के बराबर होता है।
</div>

आइए, इस प्रक्रिया को गणितीय रूप से और कुछ उदाहरणों का उपयोग करके समझने का प्रयास करें।


## किसी फलन का derivative कैसे खोजें? (How to find derivative of a function?)

यदि हमारे पास एक फलन, y = f(x) है, तो इनपुट को x से (x + x) में बदलने पर, आउटपुट f(x) या y से f(x + Δx) या (y + Δy) में बदल जाता है। .

<p> ढलान (Slope) = \(\frac{Y \hspace{1ex} में \hspace{1ex} परिवर्तन}{X \hspace{1ex} में \hspace{1ex} परिवर्तन} = \frac{Δy}{Δx} = \frac{f(x + Δx) - f(x)}{Δx}\) </p>

जैसे-जैसे Δx शून्य के करीब जाता है, हमें एक निश्चित बिंदु पर फलन की तात्कालिक परिवर्तन दर प्राप्त होगी। फलन के derivatives खोजने के दौरान हम यही करते हैं।

<p> अर्थात्, एक फलन f(x) का derivative होगा: <br>
f'(x) = \(\lim_{Δx\to 0} \frac{f(x + Δx) - f(x)}{Δx}\) </p>

आइए, एक उदाहरण देखें।

<p><b> प्रश्न. फलन f(x) = \(x^2\) का अवकलज (derivative) ज्ञात कीजिए| </b> </p>

व्याख्या:<br>
<div class="Exp">

<p> हम जानते हैं कि, f(x) = \(x^2\) </p>

<p> तो, f(x + Δx) = \((x + Δx)^2 = x^2 + 2xΔx + (Δx)^2\) </p>

<p> अब, ढलान (Slope) = \(\frac{Δy}{Δx} = \frac{f(x + Δx) - f(x)}{Δx} = \frac{x^2 + 2xΔx + (Δx)^2 - x^2}{Δx} = \frac{2xΔx + (Δx)^2}{Δx} = 2x + Δx\) </p>

<p> जैसे-जैसे, Δx 0 की ओर जाता है, (2x + Δx) का मान 2x की ओर बढ़ेगा। यानी, \(\lim_{Δx\to 0} (2x + Δx)\) = 2x </p>

<p> तो, फलन f(x) = \(x^2\) का derivative, \(\frac{d}{dx} x^2\) = 2x. </p>

दूसरे शब्दों में, किसी दिए गए बिंदु पर इस फलन का ढाल 2x होगा। चूंकि x एक चर (variable) है, वक्र का ढलान विभिन्न बिंदुओं पर भिन्न होगा।
</div> <br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> अधिकांश वक्रों के ढलान में स्थिर और परिवर्तनशील दोनों घटक होते हैं, जैसे की 2x, 3\(x^2\), आदि। इसलिए, वक्र का ढलान भिन्न-भिन्न होता है - यह इस बात पर निर्भर करता है कि हम इसे वक्र पर कहाँ माप रहे हैं। </p>

इसके विपरीत, सभी सीधी रेखाओं का ढलान स्थिर होता है, जैसे की 2, 5, -3, आदि। इसलिए, एक सीधी रेखा का ढलान स्थिर रहता है, चाहे हम उसे रेखा पर कहीं भी माप रहे हों।

आइए देखें कैसे। हम सरल रेखा y = 3x का derivative (अवकलज) ज्ञात करेंगे।

<p> हम जानते हैं कि, ढाल (Slope) = \(\frac{Δy}{Δx} = \frac{f(x + Δx) - f(x)}{Δx} = \frac{3(x + Δx) - 3x}{Δx} = \frac{3Δx}{Δx}\) = 3 </p>

तो, 3x का derivative 3 के बराबर है (अर्थात एक स्थिरांक है)
</div>

<p> हालांकि, हमें परीक्षा में प्रत्येक फलन के derivative को निकालने का पर्याप्त समय नहीं मिलता है। इसलिए, हमें कुछ सबसे सामान्य फलनों (जैसे कि \(x^2\), \(x^3\), sin x, cos x, आदि) के derivatives को याद रखना चाहिए। </p>


## कुछ सामान्य फलनों के Derivatives (Derivatives of some common functions)

यहां कुछ सामान्य फलनों के Derivatives की सूची दी गई है जिनका हम सामना करेंगे। हालाँकि हम इनको ठीक उसी तरह निकाल सकते हैं, जैसे हमने ऊपर कुछ फलनों के मामले में किया था। परन्तु, परीक्षा में हमारी गति को तेज करने के लिए इनको याद कर लेना एक अच्छा विचार होगा।

### स्थिरांक का Derivative (Derivative of a Constant)

किसी स्थिरांक का Derivative हमेशा शून्य होता है।

<p> \(\frac{d}{dx} c\) = 0 </p><br>
(जहाँ c एक स्थिरांक है)

### सीधी रेखाओं के Derivative (Derivatives of Straight Lines)

किसी सीधी रेखा का derivative हमेशा एक अचल (स्थिरांक, constant) होता है।

<p> \(\frac{d}{dx} x\) = 1 </p>

<p> \(\frac{d}{dx} cx\) = c </p><br>
(जहाँ c एक स्थिरांक है)

### वर्गों, घनों, मूलों, आदि का Derivative (Derivative of Squares, Cubes, Roots, etc.)

<p> \(\frac{d}{dx} x^n = n x^{n - 1}\) </p>

तो, आइए उपरोक्त नियम के आधार पर कुछ फलनों के derivatives देखें।

<p> \(\frac{d}{dx} x^2\) = 2x <br><br>
\(\frac{d}{dx} x^3 = 3 x^2\) <br><br>
\(\frac{d}{dx} x^{1/2} = (1/2) x^{-1/2}\) <br><br>
\(\frac{d}{dx} x^{-1} = -x^{-2}\) <br><br>
\(\frac{d}{dx} x^{-2} = -2x^{-3}\) </p>

### घातांक और लघुगणक का Derivative (Derivative of Exponentials and Logarithms)

<p> \(\frac{d}{dx} e^x = e^x\) <br><br>
\(\frac{d}{dx} a^x = ln(a) \hspace{1ex} a^x\) </p>

<p> \(\frac{d}{dx} ln(x) = \frac{1}{x}\) <br><br>
\(\frac{d}{dx} log_a(x) = \frac{1}{x \hspace{1ex} ln(a)}\) </p>

### त्रिकोणमिति फलनों का Derivative (Derivative of Trigonometry functions)

<p> \(\frac{d}{dx} sin x = cos x\) <br><br>
\(\frac{d}{dx} cos x = - sin x\) <br><br>
\(\frac{d}{dx} tan x = sec^2 x\) </p>

<p> \(\frac{d}{dx} sin^{-1} x = \frac{1}{\sqrt{1 - x^2}}\) <br><br>
\(\frac{d}{dx} cos^{-1} x = - \frac{1}{\sqrt{1 - x^2}}\) <br><br>
\(\frac{d}{dx} tan^{-1} x = \frac{1}{1 + x^2}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

x रेडियन (radians) में होना चाहिए।
</div>

