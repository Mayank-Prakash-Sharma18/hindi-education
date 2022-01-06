---
author: Mragank Shandilya
title: फलनों की मूल अवधारणाएं (Basics of Functions)
date: "2022-01-04"
description: फलनों की मूल अवधारणाएं (Basics of Functions) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["functions"]
categories: ["functions"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/functions/functions-1.png" # Sets featured image on blog post.
thumbnail: "images/functions/functions-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basics of Functions, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-set-theory-in-maths" title="Set Theory" class="mak-link">समुच्चय सिद्धान्त की मूल अवधारणाएं</a> 
* <a href="../union-and-intersection-formulae-and-keywords" title="Set Theory" class="mak-link">संघ और प्रतिच्छेदन सूत्र और अवधारणाएँ</a> 
* <a href="../what-are-functions-in-maths" title="Functions" class="mak-link">फलनों की मूल अवधारणाएं</a> 
</div>

इस लेख में, हम फलनों (Functions) और उनकी अवधारणाओं के बारे में विस्तार से अध्ययन करेंगे।


## फलन क्या होता है? (What is a Function?)

फलन (function) एक व्यंजक होता है, जो एक इनपुट और आउटपुट के बीच एक ***संबंध (relation)*** प्रदर्शित करता है।

इसे अक्सर f(x) द्वारा दर्शाया जाता है। कोष्ठक के अंदर रखे गए इनपुट को 'x' द्वारा दर्शाया जाता है। फ़ंक्शन उस इनपुट के साथ क्या करता है, इसे '=' चिह्न के दाईं ओर के व्यंजक द्वारा दर्शाया जाता है।

उदाहरण के लिए, f(x) = x + 3. यहाँ, x इनपुट है और x + 3 आउटपुट होगा। <br>
<img src="../../../images/functions/functions-1.png" alt="Functions" style="width:81%;height:81%;">

मान लीजिए, x = 2 (अर्थात इनपुट), तो फलन (function) 'f' उस इनपुट में 3 जोड़ देगा और हमें आउटपुट प्रदान करेगा। तो, f(x) = 2 + 3 = 5 (यानी आउटपुट)

तो, एक फलन (function) के तीन मुख्य भाग होते हैं:
* इनपुट, जैसे x
* संबंध, जैसे + 3
* आउटपुट

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हालाँकि, परंपरा के अनुसार, हम आम तौर पर किसी फलन (function) को दर्शाने के लिए 'f' अक्षर का उपयोग करते हैं। परन्तु, हम इसे 'g' या कुछ और भी नाम दे सकते हैं। उदाहरण के लिए, g(x) = x + 3

हमें किसी फलन (function) नाम का उपयोग करने की भी आवश्यकता नहीं है। हम केवल y = x + 3 लिख सकते हैं। यहाँ, 'x' इनपुट है, और 'y' आउटपुट है।

इसी तरह, 'x' भी सिर्फ प्लेसहोल्डर (placeholder) के रूप में काम करता है। अतः हम 'x' के स्थान पर किसी अन्य अक्षर का भी प्रयोग कर सकते हैं। उदाहरण के लिए, f(a) = a + 3. यह केवल हमें यह बताने के उद्देश्य से कार्य करता है कि मूल्यों को कहाँ रखा जाए।
</div>


## फलन और समुच्चय (Functions and Sets)

जब हम फलनों (Functions) के साथ काम करते हैं, तो हम दो समुच्चयों से दो-चार होते हैं:
* इनपुट मानों का समुच्चय, उदा. 1, 2, 3, 4 आदि।
* <p> आउटपुट मानों का समुच्चय, जो फलन, f(x) = \(x^2\) उपरोक्त इनपुट मानों के ऐवज में उत्पन्न करेगा: 1, 4, 9, 16 आदि। </p>

आरेख: <br>
<img src="../../../images/functions/functions-2.png" alt="Functions" style="width:72%;height:72%;">

हम किसी फलन के इनपुट और आउटपुट को एक क्रमित युग्म (ordered pair) के रूप में प्रस्तुत कर सकते हैं, जहाँ इनपुट पहले लिखा जाता है, और उसके बाद आउटपुट, यानी (x, f(x))

<p> तो, किसी फलन को क्रमित युग्म (ordered pair) के रूप में भी देखा जा सकता है। उदाहरण के लिए, उपरोक्त फलन f(x) = \(x^2\) को इस प्रकार भी दर्शाया जा सकता है: (1, 1), (2, 4), (3, 9), आदि। ये x और y निर्देशांक बिंदु (coordinate points) हैं जो आसानी से किसी ग्राफ पर बनाये जा सकते हैं। </p>

### डोमेन, कोडोमैन और रेंज (Domain, Codomain and Range)

फलन/फंक्शन के अध्याय में आप अक्सर इन शब्दों का सामना करेंगे - डोमेन (Domain), कोडोमेन (Codomain), रेंज (Range), आदि । आइए, इन शब्दों को समझने की कोशिश करते हैं।

इनपुट समुच्चय और आउटपुट समुच्चय के बीच संबंध दिखाते हुए फलन के निम्नलिखित निरूपण पर एक नज़र डालें। <br>
<img src="../../../images/functions/functions-3.png" alt="Functions" style="width:72%;height:72%;">

* इनपुट मानों के समुच्चय (1, 2, 3, 4….), यानी X को ***डोमेन (Domain)*** कहा जाता है।
* <p> आउटपुट मानों का समुच्चय (1, 4, 9, 16 ...), जो फलन, f(x) = \(x^2\) उपरोक्त इनपुट मानों के लिए उत्पन्न करेगा, को <b>रेंज (Range)</b> कहा जाता है। </p>
* समुच्चय Y जिसमें सभी आउटपुट मान (1, 4, 9, 16 ...) और कुछ अन्य मान (7, 11 ...) हों, ***को-डोमेन (Co-Domain)*** कहलाता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

फलन के अध्याय में, हमारे पास एक ही चीज़ के लिए बहुत सारे नाम होते हैं।

तो, इनपुट/input को डोमेन (domain), या डोमेन तत्व (domain element), स्वतंत्र चर (independent variable) या argument भी कहा जाता है।

इसी तरह, आउटपुट/output को रेंज (range), या रेंज तत्व (range element), image, निर्भर चर (dependent variable), फलन का मान (value of a function) भी कहा जा सकता है। 
</div>


## नियम जो फलनों को पालन करने चाहियें (Rules that Functions must fulfil)

कुछ नियम हैं जिनका किसी भी फलन को पालन करना होता है।

* किसी फलन को दिए गए किसी भी इनपुट मान के लिए काम करना चाहिए, यानी हर संभव इनपुट मान के लिए आउटपुट मान होना चाहिए। (One to One relation की अनुमति है) <br>
<img src="../../../images/functions/functions-4.png" alt="Functions" style="width:72%;height:72%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

किसी फलन में दर्ज किए जाने पर प्रत्येक इनपुट मान को आउटपुट मान का उत्पादन करना चाहिए, यानी इनपुट समुच्चय का प्रत्येक तत्व आउटपुट समुच्चय के एक तत्व से संबंधित होता है।

हालाँकि, यह हो सकता है कि आउटपुट समुच्चय में कुछ ऐसे तत्व हों, जो इनपुट सेट के किसी भी तत्व से संबंधित नहीं हैं। 
</div>

* किसी फलन में प्रत्येक इनपुट मान के लिए केवल एक संबंध होना चाहिए, अर्थात प्रत्येक इनपुट मान के लिए केवल एक आउटपुट मान होना चाहिए। (One to Many relation की अनुमति नहीं है) <br>
<img src="../../../images/functions/functions-5.png" alt="Functions" style="width:72%;height:72%;">

संक्षेप में, प्रत्येक इनपुट मान जब किसी फ़ंक्शन में डाला जाता है, तो हमें ***केवल एक आउटपुट मान*** प्राप्त होना चाहिए। शून्य नहीं, दो नहीं, केवल एक।

<p> उदाहरण के लिए, जब x = 1, तो हमें मिलता है f(x) = \(x^2 = 1^2\) = 1 <br> 
जब x = 2, हमें मिलता है f(x) = \(x^2 = 2^2\) = 4 <br> 
जब x = 3, हमें मिलता है f(x) = \(x^2 = 3^2\) = 9 </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हालाँकि, दो इनपुट मानों के समान आउटपुट मान हो सकते हैं। (Many to One relation की अनुमति है) <br>
<img src="../../../images/functions/functions-6.png" alt="Functions" style="width:72%;height:72%;">

<p> उदाहरण के लिए, जब x = 1, हमें मिलता है f(x) = \(x^2 = 1^2\) = 1 <br> 
जब x = -1, हम प्राप्त करते हैं f(x) = \(x^2 = (-1)^2\) = 1 </p>
</div>

इसलिए, हम किसी फलन को निम्नानुसार भी परिभाषित कर सकते हैं: <br>
फलन एक ऐसा व्यंजक (expression) है, जो इनपुट समुच्चय के प्रत्येक तत्व का आउटपुट समुच्चय के किसी एक तत्व के साथ ***संबंध (relation)*** प्रदर्शित करता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इनपुट और आउटपुट समुच्चय के तत्व समान भी हो सकते हैं। उदाहरण के लिए, फलन f(x) = x के मामले में।
</div>

यदि उपरोक्त नियमों का पालन नहीं किया जाता है, तो दो समुच्चयों के बीच के संबंध (relationship) को फलन (function) नहीं कहा जा सकता है। इसे सिर्फ एक रिश्ता (relationship) कहा जाएगा।

उदाहरण के लिए, दो समुच्चयों X और Y के तत्वों के बीच संबंधों का निरूपण करने वाले नीचे दिए गए आरेखों पर विचार करें।

संबंध 1: <br>
<img src="../../../images/functions/functions-7.png" alt="Functions" style="width:72%;height:72%;">

समुच्चय X का तत्व 'a', समुच्चय Y के किसी भी तत्व से संबंधित नहीं है। इसलिए, यह संबंध फलन नहीं है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

समुच्चय Y के तत्व 'w' का समुच्चय X के किसी भी तत्त्व से कोई संबंध नहीं है, पर इससे कोई फर्क नहीं पड़ता।
</div>

संबंध 2: <br>
<img src="../../../images/functions/functions-8.png" alt="Functions" style="width:72%;height:72%;">

समुच्चय X का तत्व 'b', समुच्चय Y के एक से अधिक तत्वों से संबंधित है (w और x). अतः, यह संबंध फलन नहीं है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह सब याद रखने का एक आसान तरीका है दर्पण की कल्पना करना।

* दर्पण के सामने खड़े किसी भी व्यक्ति का प्रतिबिंब होना चाहिए (अर्थात domain के प्रत्येक तत्व का co-domain में एक संबंधित तत्व होना चाहिए।)

* दर्पण के सामने खड़े व्यक्ति का एक ही प्रतिबिंब होना चाहिए। उसके पास एकाधिक प्रतिबिंब नहीं हो सकते हैं (यानी domain के प्रत्येक तत्व का co-domain में केवल एक संबंधित तत्व होना चाहिए।)

* दर्पण के सामने खड़े दो व्यक्ति एक जैसे दिख सकते हैं (उदाहरण के लिए यदि वे जुड़वां हैं) (अर्थात domain में दो या दो से अधिक तत्वों का co-domain में एक ही संबंधित तत्व हो सकता है।)
</div>

### लंबवत रेखा परीक्षण (Vertical Line Test)

यह जांचने का एक और तरीका है कि कोई व्यंजक फलन है या नहीं - उनके ग्राफ़ पर एक नज़र डालिये।
चूंकि कोई भी फलन प्रत्येक इनपुट के लिए केवल एक ही आउटपुट प्रदान करता है, इसलिए इसका मतलब है कि x-अक्ष से गुजरने वाली एक लंबवत रेखा उस फलन के वक्र (curve) को एक ही स्थान पर काटेगी।

फलन, f(x) = x + 3 के निम्नलिखित ग्राफ़ पर एक नज़र डालें: <br>
<img src="../../../images/functions/functions-9.png" alt="Functions" style="width:63%;height:63%;">

यदि X-अक्ष से गुजरने वाली एक ऊर्ध्वाधर रेखा व्यंजक के वक्र को प्रतिच्छेदित करती है:
* एक से अधिक बिंदुओं पर (इसका अर्थ है एक इनपुट के लिए एक से अधिक आउटपुट हैं), या
* किसी भी बिंदु पर नहीं (इसका मतलब इनपुट के लिए कोई आउटपुट नहीं है),
तब वह व्यंजक एक फलन नहीं हो सकता।

उदाहरण के लिए, निम्न ग्राफ़ पर एक नज़र डालें: <br>
<img src="../../../images/functions/functions-10.png" alt="Functions" style="width:63%;height:63%;">

चूंकि x-अक्ष से गुजरने वाली एक लंबवत रेखा, वक्र को एक से अधिक बिंदुओं पर काटती है, यह व्यंजक (जिसका वक्र प्लॉट किया गया है) फलन नहीं हो सकता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कुछ फलनों के मामले में और भी सख्त नियम हो सकते हैं, जैसे की Injective, Surjective and Bijective. हम उनके बारे में एक अलग लेख में अध्ययन करेंगे।
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>फलन के बारे में जानने योग्य कुछ और बातें</b><br>

* किसी फलन के वक्र का निरंतर वक्र (continuous curve) होना आवश्यक नहीं है। यह टूटा हुआ हो सकता है। एकमात्र शर्त यह है, कि यह प्रत्येक इनपुट के लिए ठीक एक आउटपुट का उत्पादन करे।

* <p> आप आम तौर पर स्पष्ट फलनों (explicit functions) का सामना करेंगे, यानी जहां यह स्पष्ट है कि आउटपुट मूल्य कैसे प्राप्त करें। उदाहरण के लिए, y = \(x^2\) - 5. परन्तु, कभी-कभी आपके सामने अस्पष्ट फलन (implicit functions) भी आ सकते हैं, यानी जहां यह बहुत स्पष्ट नहीं है कि इनपुट से आउटपुट कैसे खोजा जाए। उदाहरण के लिए, \(x^3 + 2y - x^2\) = 0. </p>
</div>
