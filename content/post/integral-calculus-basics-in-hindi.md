---
author: Mragank Shandilya
title: इंटीग्रल कैलकुलस की मूल अवधारणाएं (Basics of Integral Calculus) 
date: "2022-01-15"
description: इंटीग्रल कैलकुलस की मूल अवधारणाएं (Basics of Integral Calculus)  # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["calculus"]
categories: ["calculus"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/calculus/integral-calculus-3.png" # Sets featured image on blog post.
thumbnail: "images/calculus/integral-calculus-3.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basics of Integral Calculus, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../differential-calculus-basics-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../differential-calculus-rules-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस नियम</a> 
* <a href="../integral-calculus-basics-in-hindi" title="Calculus" class="mak-link">इंटीग्रल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../integral-calculus-rules-in-hindi" title="Calculus" class="mak-link">इंटीग्रेशन के नियम</a> 
</div>

इस लेख में, हम डिफरेंशियल कैलकुलस (या समाकलन, या Integral Calculus) की मूल अवधारणाओं और नियमों के बारे में अध्ययन करेंगे। लेकिन ऐसा करने से पहले, आइए समझते हैं कि आखिर कैलकुलस (या कलन, या Calculus) क्या होता है।


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


## इंटीग्रल कैलकुलस क्या होता है? (What is Integral Calculus?)

Integration (समाकलन) एक प्रक्रिया है जिसके माध्यम से हम पूरे के मूल्य को खोजने के लिए, छोटे भागों (जिन्हें आमतौर पर slices, स्लाइस कहा जाता है) को जोड़ते हैं।

यह पूरी चीज़ क्षेत्रफल, आयतन, आदि हो सकता है। लेकिन आम तौर पर, हम एक फलन के वक्र (curve of a function) और x-अक्ष के बीच के क्षेत्रफल का पता लगाएंगे। <br> 
<img src="../../../images/calculus/integral-calculus-1.png" alt="Calculus" style="width:72%;height:72%;">

आइए देखें कि हम एक फलन के वक्र और x-अक्ष के बीच के क्षेत्रफल को खोजने के लिए Integration की प्रक्रिया का उपयोग कैसे करेंगे।

हम गणना किए जाने वाले क्षेत्र को आयताकार भागों (rectangular slices) में विभाजित कर सकते हैं। फिर हम इनमें से प्रत्येक आयताकार भाग के क्षेत्रफल की गणना करेंगे और उन्हें जोड़ देंगे। <br>
<img src="../../../images/calculus/integral-calculus-2.png" alt="Calculus" style="width:72%;height:72%;">
हालांकि, जैसा कि आप ऊपर दिए गए ग्राफ में देख सकते हैं, हो सकता है कि परिकलित क्षेत्रफल बहुत सटीक न हो।

अधिक सटीक उत्तर प्राप्त करने के लिए, हमें प्रत्येक भाग की चौड़ाई कम करने की आवश्यकता है (और इस प्रकार के भागों की संख्या में वृद्धि करने की)। जैसे-जैसे ये भाग चौड़ाई में शून्य (और इसलिए संख्या में अनंत) तक पहुंचेंगे, क्षेत्रफल का परिकलित मान (calculated value) सही उत्तर तक पहुँचता जायेगा। <br>
<img src="../../../images/calculus/integral-calculus-3.png" alt="Calculus" style="width:72%;height:72%;">

हालांकि, यह कहना आसान है, और करना मुश्किल। हम इतने सारे टुकड़ों का क्षेत्रफल जोड़ कैसे सकते हैं?

यहीं integration की प्रक्रिया हमारे काम आती है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

integration की प्रक्रिया, differenciation की प्रक्रिया के विपरीत है।

<p> यानि, जहाँ हम Differential Calculus में फलनों के derivatives का पता लगाते हैं। उदाहरण के लिए, \(x^2\) का derivative 2x है। </p>

<p> Integral Calculus में हम इसके derivatives से मूल फलन का पता लगाते हैं। उदाहरण के लिए, 2x का integral \(x^2\) + c है, जहां c एक स्थिरांक है। </p>
</div>


## Integration को निरूपित कैसे करते हैं? (Representing Integration)

इससे पहले कि हम आगे बढ़ें, आइए देखें कि हम Integration को निरूपित कैसे करते हैं।

Integration के लिए हम जिस प्रतीक का उपयोग करते हैं वह है: ∫ 

आपने देखा होगा कि यह 'S' जैसा दिखता है, क्योंकि यह स्लाइस/भागों के योग (Sum) के विचार का प्रतिनिधित्व करता है।

यदि हम किसी फलन f(x) का integral (समाकल) ज्ञात करना चाहते हैं, तो हम इसे निम्न रूप से निरूपित करेंगे: <br>
∫ f(x) dx

dx का मतलब है कि स्लाइस/भागों को x-अक्ष की दिशा में जोड़ा जाना है, और यह भी कि उनकी चौड़ाई करीब-करीब शून्य है।

<p> उदाहरण के लिए, ∫ 2x dx = \(x^2\) + c <br>
(जहाँ c एक अचर है, जिसे 'Constant of Integration' कहा जाता है) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>हम इंटीग्रल मान में एक स्थिरांक क्यों लिखते हैं? (Why do we write a constant in the integral value?)</b><br>

हम पहले से ही जानते हैं कि integration की प्रक्रिया, differentiation की प्रक्रिया के विपरीत है।

<p> \(\frac{d}{dx} x^2\) = 2x </p>

<p> साथ ही, \(\frac{d}{dx} (x^2 + c)\) = 2x </p>

<p> ऐसा इसलिए है, क्योंकि एक स्थिरांक (constant) का derivative (अवकलज) हमेशा 0 होता है, अर्थात् \(\frac{d}{dx} c\) = 0. </p>

इसलिए, इस प्रक्रिया को उलटते समय, हम यह नहीं बता सकते हैं कि मूल फ़लक में एक स्थिरांक था या नहीं। इसलिए, इस संभावना को कवर करने के लिए हम integral मूल्य में एक स्थिरांक जोड़ते हैं। c कुछ भी हो सकता है, जैसे 0, -2, 3, 5, 333, आदि।
</div>


## कुछ सामान्य फलनों का Integral (Integral of some common functions)

यहां कुछ सामान्य फलनों के integrals की सूची दी गई है, जिनका हम अक्सर सामना करेंगे।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

चूँकि derivatives (अवकलज) और integrals (समाकल) एक दूसरे के विपरीत होते हैं, यदि फलन जिसका integral (समाकलन) हम खोजने का प्रयास कर रहे हैं, किसी derivative (अवकलज) के परिणाम पक्ष पर है, तो हमें अपना उत्तर तुरंत मिल जाएगा।

<p> उदाहरण के लिए, हम जानते हैं कि \(\frac{d}{dx} tan x = sec^2 x\) <br>
तो, ∫ \(sec^2 x\) dx = tan x + c </p>
</div>

### स्थिरांक का Integral (Integral of a Constant)

∫ a dx = ax + c <br>
(जहाँ a और c स्थिरांक हैं)

### चर के Integral (Integral of Variables)

<p> ∫ x dx = \(\frac{x^2}{2}\) + c </p>

### वर्गों, घनों, मूलों, आदि के Integral (Integrals of Squares, Cubes, Roots, etc.)

<p> ∫ \(x^n\) dx = \(\frac{x^{n + 1}}{n + 1}\) + c <br>
(यहाँ n, -1 के बराबर नहीं होना चाहिए) </p>

तो, आइए उपरोक्त नियम के आधार पर कुछ फलनों के Integral देखें।

<p> ∫ \(x^2\) dx = \(\frac{x^3}{3}\) + c </p>

<p> ∫ \(x^3\) dx = \(\frac{x^4}{4}\) + c </p>

### Reciprocal का Integral

<p> ∫ \(x^{-1}\) dx = ln |x| + c </p>

### घातांक और लघुगणक के Integral (Integrals of Exponentials and Logarithms)

<p> ∫ \(e^x\) dx = \(e^x\) + c </p>

<p> ∫ \(a^x\) dx = \(\frac{a^x}{ln \hspace{1ex} a}\) + c </p>

∫ ln x dx = x ln x - x + c

### त्रिकोणमिति फलनों के Integral (Integrals of Trigonometry functions)

∫ cos x dx = sin x + c

∫ sin x dx = - cos x + c

<p> ∫ \(sec^2 x\) x dx = tan x + c </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

x रेडियन (radians) में होना चाहिए।
</div>

