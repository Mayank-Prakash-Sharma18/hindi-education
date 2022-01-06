---
author: Mragank Shandilya
title: लघुगणक क्या होते है? (What is Logarithm?)
date: "2022-01-03"
description: लघुगणक क्या होते है? (What is Logarithm?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["simplification"]
categories: ["simplification"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/simplification/simplification1.png" # Sets featured image on blog post.
thumbnail: "images/simplification/simplification1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Logarithm?, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../fast-multiplication-tricks" title="Simplification" class="mak-link">तेज गुणा करने के तरीके</a> 
* <a href="../how-to-find-squares-and-cubes" title="Simplification" class="mak-link">वर्ग और घन ढूँढना</a> 
* <a href="../how-to-find-square-roots-and-cube-roots" title="Simplification" class="mak-link">वर्गमूल और घनमूल कैसे ज्ञात करें</a> 
* <a href="../types-of-simplification-questions" title="Simplification" class="mak-link">सरलीकरण सम्बंधित अवधारणाएं, तरीके और तरकीबें</a> 
* <a href="../what-are-indices-in-maths" title="Simplification" class="mak-link">घातांक क्या होते हैं?</a> 
* <a href="../what-are-surds" title="Simplification" class="mak-link">करणी क्या होते हैं?</a> 
* <a href="../what-is-log-in-maths" title="Simplification" class="mak-link">लघुगणक क्या होते है?</a> 
</div>

लघुगणक घातांक (exponents/powers/indices) की अवधारणा से संबंधित हैं। वास्तव में, यह घातांक लिखने का एक और तरीका है।

<p> हम लघुगणक (logarithm) को संक्षेप में log के रूप में लिखते हैं। इसे \(log_b\) a के रूप में दर्शाया जाता है। </p>


## घातांक और लघुगणक के बीच संबंध (Relationship between exponents and logarithms)

<p> सामान्य शब्दों में, \(log_b\) a = p को a = \(b^p\) के रूप में भी लिखा जा सकता है। यहाँ b आधार (base) है, p घात (power) है, और a को argument कहा जाता है। </p>
 
हम इनमें से किसी भी समीकरण का उपयोग करके b, a और p के बीच संबंध का निरूपण कर सकते हैं। समीकरण के एक रूप को दूसरे रूप में बदलते समय, याद रखें कि लघुगणक का आधार, घातांक व्यंजक (exponent expression) के आधार के समान होता है।

<p> उदाहरण के लिए, हम जानते हैं कि \(2^3\) = 8, यानी जब हम 2 को 3 की घात लगाते हैं, तो हमें 8 मिलता है। </p>

<p> दूसरे शब्दों में, हम कह सकते हैं कि हम 2 में से 8 प्राप्त कर सकते हैं, यदि हम इसे 3 बार गुणा करते हैं, अर्थात \(log_2\) 8 = 3. तो, यह इस प्रश्न का उत्तर देता है - "8 प्राप्त करने के लिए हमें किस घात से 2 को बढ़ाना चाहिए?". लघुगणक को हल करने पर हमें जो उत्तर मिलता है वह घात (power) ही होता है। </p>

<p> आइए, एक और उदाहरण देखें, \(log_3\) 27 = ? </p>

<p> हमें मूल रूप से यह पता लगाने की आवश्यकता है, कि "27 प्राप्त करने के लिए हमें किस घात से 3 को बढ़ाना चाहिए?", या "27 प्राप्त करने के लिए हमें कितनी बार 3 को खुदसे गुणा करना चाहिए?" हम देख सकते हैं कि 3 × 3 × 3 = 27. इसलिए, हमें खुद से 3 को तीन बार गुना गुणा करना होगा। तो, \(log_3\) 27 = 3. </p>


## लघुगणक चर के मूल्यों पर कुछ पाबंदियाँ (Some restrictions on the values of log variables)

<p> एक लघुगणक में, मान लीजिए \(log_b\) a, चर a और b सभी संभावित मान प्राप्त नहीं कर सकते हैं। कुछ प्रतिबंध हैं जिन्हें हमें ध्यान में रखना चाहिए। आइए उन्हें एक-एक करके देखें। </p>

### लघुगणक के आधार के मान पर प्रतिबंध (Restriction on value of base of log)

log का आधार भी धनात्मक होना चाहिए, लेकिन 1 के बराबर नहीं होना चाहिए।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>लघुगणक के आधार का मान 1 के बराबर क्यों नहीं हो सकता है?</b><br>

<p> आइए एक उदाहरण लेते हैं, जहां b = 1. <br>
मान लीजिए \(log_1\) 5 = p <br>
इसे 5 = \(1^p\) के रूप में भी लिखा जा सकता है। लेकिन कोई फर्क नहीं पड़ता कि p का मान क्या है, \(1^p\) कभी भी 5 के बराबर नहीं हो सकता। </p>
</div>


### लघुगणक के argument के मान पर प्रतिबंध (Restriction on value of argument of log)

log का argument सकारात्मक होना चाहिए। ऋणात्मक संख्याओं के लघुगणक परिभाषित नहीं हैं।

<p> \(log_b\) a = p, को a = \(b^p\) के रूप में भी लिखा जा सकता है। हम पहले से ही जानते हैं कि 'b' सकारात्मक होना चाहिए। तो, इसका मतलब है कि a भी निश्चित रूप से सकारात्मक होगा। </p>

### लघुगणक के मान पर कोई प्रतिबंध नहीं (No restrictions on the value of a log)

<p> यदि \(log_b\) a = p, तो p कोई भी मान प्राप्त कर सकता है - धनात्मक, ऋणात्मक या दशमलव। </p>

<p> उदाहरण के लिए, \(log_2\) 16 = 4, \(log_{10}\) 0.5 = -0.3, \(log_{10}\) 20 = 1.3 </p>


## विशेष लघुगणक (Special Logarithms)

लघुगणक का आधार कोई भी मान प्राप्त कर सकता है (1 को छोड़कर)। लेकिन अधिकांश प्रश्नों में, आप दो आधार मूल्यों (base values) को दूसरों की तुलना में अधिक बार देखेंगे।

10 और e: ये दो मान इतने सामान्य हैं कि अधिकांश कैलकुलेटर में उनके लिए समर्पित बटन होते हैं।

### सामान्य लघुगणक (Common Logarithm)

<p> जब किसी लघुगणक का आधार 10 होता है, तब हम उसे सामान्य लघुगणक (common logarithm) कहते हैं। उदाहरण के लिए, \(log_{10}\) 5. </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> यह आधार मान इतना सामान्य है कि यदि आधार का स्पष्ट रूप से उल्लेख नहीं किया गया है, तो इसे डिफ़ॉल्ट आधार मान के रूप में लिया जाता है। यानी, log a का मतलब \(log_{10}\) a ही माना जाता है| </p>
</div>

<p> इसका उपयोग हम किसी भी संख्या में अंकों की संख्या ज्ञात करने के लिए कर सकते हैं। हम जानते हैं कि, \(10^p\) में d अंक होते हैं, जहाँ p < d ≤ (p + 1), और d एक पूर्ण संख्या (whole number) है। <br>
उदाहरण के लिए, \(10^{18.5}\) में दशमलव से पहले 19 अंक हैं। </p>

<p> इसलिए, यदि हम किसी संख्या के सामान्य लघुगणक का मान जानते हैं, तो हम बता सकते हैं कि दशमलव से पहले उसके कितने अंक हैं। \(10^p\) का log होगा: <br>
\(log_{10}\) \(10^p\) = p \(log_{10}\) 10 = p. इसका मतलब है कि \(10^p\) में d अंक हैं, जहाँ p < d ≤ (p + 1), और d एक पूर्ण संख्या (whole number) है।<br>
उदाहरण के लिए, \(log_{10}\) \(10^{18.5}\) = 18.5. इसका मतलब है कि \(10^{18.5}\) में 19 अंक हैं। </p>

### प्राकृतिक लघुगणक (Natural Logarithm)

<p> जब किसी लघुगणक का आधार e होता है, तब हम इसे प्राकृतिक लघुगणक कहते हैं। उदाहरण के लिए, \(log_e\) 5.
e को Euler's Number कहा जाता है, और इसका मान लगभग 2.71828 है </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> \(log_e\) को संक्षेप में ln भी लिखा जाता है। तो, आप अक्सर \(log_e\) को ln a के रूप में लिखा हुआ पाएंगे। </p>
</div>


## लघुगणक के गुण (Properties of Logarithm)

### गुण 1

<p> \(log_b\) a = \(\frac{log \hspace{1ex} a}{log \hspace{1ex} b}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> \(log_b\) b = log b/log b = 1. <br>
उदाहरण के लिए, \(log_{10}\) 10 = 1, \(log_e\) e = 1, \(log_2\) 2 = 1, आदि </p>

<p> \(log_b\) 1 = log 1/log b = 0/log b = 0. (\(b^0\) = 1) </p>
</div>

<p> तो, \(log_b\) a = \(\frac{1}{log_a \hspace{1ex} b}\) </p>

<p> साथ ही, \(log_b\) a = log a/log b = (log a/log m) × (log m/log b) = \(\frac{log_m \hspace{1ex} a}{log_m \hspace{1ex} b}\) </p>

### गुण 2

<p> \(log_b\) (ac) = \(log_b\) a + \(log_b\) c </p>

<p> \(log_b (\frac{a}{c})\) = \(log_b\) a - \(log_b\) c </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> हालांकि, निम्नलिखित गलत होंगे: <br>
\(log_b\) (a + c) = \(log_b\) a + \(log_b\) c  (गलत) <br>
\(log_b\) (a + c) = \(log_b\) a × \(log_b\) c  (गलत) </p>
</div>

### गुण 3: argumnet में घात (Power in argumnet)

<p> \(log_b \hspace{1ex} a^n\) = n \(log_b\) a </p>

<p> \(log_b \hspace{1ex} \sqrt[n]{a} = log_b \hspace{1ex} (a)^{1/n} = \frac{1}{n} log_b\) a </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> \(b^{log_b \hspace{1ex} a}\) = a </p>
</div>

### गुण 4: आधार में घात (Power in base)

<p> \(log_{b^n}\) a = \(\frac{1}{n} log_b\) a </p>

<p> \(log_{b^{1/n}}\) a = n \(log_b\) a </p>

