---
author: Mragank Shandilya
title: गणित में चक्रवृद्धि ब्याज की अवधारणा (Concept of Compound Interest in Maths)
date: "2021-12-25"
description: गणित में चक्रवृद्धि ब्याज की अवधारणा (Concept of Compound Interest in Maths) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["si-ci"]
categories: ["interest"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/interest/interest3.png" # Sets featured image on blog post.
thumbnail: "images/interest/interest3.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Compound Interest, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../concept-of-interest-in-maths" title="Interest" class="mak-link">गणित में ब्याज की अवधारणा</a> 
* <a href="../what-is-simple-interest" title="Interest" class="mak-link">साधारण ब्याज क्या होता है?</a> 
</div>

## चक्रवृद्धि ब्याज (C.I.) क्या होता है?

* साधारण ब्याज (SI) - यदि केवल मूलधन पर ब्याज उपार्जित है, अर्थार्थ केवल मूलधन पर ब्याज लगता है।

* चक्रवृद्धि ब्याज (CI) - जब मूलधन पर ब्याज के साथ-साथ, मूलधन के लिए देय ब्याज पर भी ब्याज अर्जित किया जाता है।

***आइए एक उदाहरण पर विचार करें:***

मृगांक ने @ 10% ब्याज दर पर 1,000 रुपये उधार लिए। <br>
तो उसे एक वर्ष में भुगतान की जाने वाली राशि = मूलधन + SI = 1000 + 1000 का 10% = 1000 + 100 = रु. 1100 <br>
(साधारण ब्याज और चक्रवृद्धि ब्याज दोनों के मामले में पहले वर्ष में ब्याज समान ही होता है)

दूसरे वर्ष में: <br>
यदि हम मूलधन को रु. 1000 मानें, तो इसका मतलब है कि हम SI की गणना कर रहे हैं। <br>
लेकिन, अगर हम 1100 रुपये को मूलधन के रूप में लेते हैं, तो इसका मतलब है कि हम CI की गणना कर रहे हैं (यानी हम कंपाउंडिंग कर रहे हैं)। <br>

CI के मामले में हम पहली अवधि के लिए ब्याज का पता लगाते हैं, इसे कुल में जोड़ते हैं, और फिर अगली अवधि के लिए ब्याज की गणना करते हैं, और इसी तरह आगे भी (यानी हम ब्याज पर ब्याज का भुगतान करते हैं)। एक वर्ष के बाद मृगांक पर रु. 100 ब्याज लगा, जिसे एक और ऋण माना गया और उस पर भी ब्याज लिया गया (यानी CI में हम पिछले साल अर्जित ब्याज पर भी ब्याज लेते हैं)।

***एक अन्य उदाहरण पर विचार करें:***

रु. 2000, 10% ब्याज पर 3 साल के लिए

प्रथम वर्ष: SI = CI = 2000 का 20% = रु. 200 <br>
दूसरा वर्ष: SI = 200; CI = 200 + 200 का 10% = रु. 220 <br>
तीसरा वर्ष: SI = 200; CI = 200 + (200 + 220) का 10% = 200 + 42 = रु. 242

तो, 3 वर्षों में कुल साधारण ब्याज (SI) = 200 + 200 + 200 = रु. 600 <br>
3 वर्षों में कुल चक्रवृद्धि ब्याज (CI) = 200 + 220 + 242 = रु. 662 <br>

<div class="toc-mak">
<b> आइए इसका सूत्र बनाएं: </b> <br><br>

माना मूलधन P को r% प्रति वर्ष के चक्रवृद्धि ब्याज पर उधार दिया गया था।

<p> पहले वर्ष में अर्जित ब्याज = P का r% = \(\frac{Pr}{100}\) (P पहले वर्ष की शुरुआत में राशि है) </p>

<p> दूसरे वर्ष के लिए: <br><br>
दूसरे वर्ष की शुरुआत में बकाया राशि = P + \(\frac{Pr}{100} = P(1 + \frac{r}{100}\)) <br><br>
दूसरे वर्ष में अर्जित ब्याज = P (1 + \(\frac{r}{100}\)) का r% <br><br>
तो, 2 साल बाद की राशि (Amount) = P(1 + \(\frac{r}{100}) + P (1 + \frac{r}{100}\)) का r% = P(1 + \(\frac{r}{100}) (1 + \frac{r}{100}) = P(1 + \frac{r}{100})^2\) <br><br> </p>

<p> इसी तरह, 3 साल बाद की राशि (Amount) = P(1 + \(\frac{r}{100})^3\), इत्यादि। </p>
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

तो, चक्रवृद्धि ब्याज के तहत, पहले वर्ष के अंत में राशि दूसरे वर्ष के लिए मूलधन बन जाएगी; दूसरे वर्ष के अंत में राशि तीसरे वर्ष के लिए मूलधन बन जाएगी, इत्यादि।
</div>


## समान दर पर चक्रवृद्धि ब्याज (C.I.)

### सूत्र 1

अतः, यदि मूलधन (principal) = P; दर (rate) = r% प्रति वर्ष; और समय (time) = n वर्ष, और ब्याज वार्षिक रूप से संयोजित (compounded annually) होता है, तो

<p> n वर्ष के अंत में राशि = P (1 + \(\frac{r}{100})^n\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह सूत्र r% की क्रमिक वृद्धि के अलावा और कुछ नहीं है। तो, चक्रवृद्धि ब्याज और कुछ नहीं बल्कि क्रमिक प्रतिशत वृद्धि (successive percentage increase) का मामला है।
</div>

<p> चक्रवृद्धि ब्याज (Compound interest) = राशि (Amount) - मूलधन (Principal) = P [(1 + \(\frac{r}{100})^n\) − 1] </p>

##### प्र. 6000 रुपये की राशि को 5% प्रति वर्ष की वार्षिक चक्रवृद्धि दर से उधार लिया गया था। 2 साल बाद कितनी राशि का भुगतान करना होगा?

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-3', this, 'tablink-group1', 'tabcontent-group1')">3</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: सूत्र विधि <br><br>

<p> n वर्षों के अंत में राशि = P (1 + \(\frac{r}{100})^n = 6000(1 + \frac{5}{100})^2 = 6000 (\frac{21}{20})^2\) = रु. 6615 </p>

</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: प्रतिशत विधि <br><br>

प्रथम वर्ष के लिए चक्रवृद्धि ब्याज = 6000 का 5% = रु. 300

दूसरे वर्ष के लिए CI = (मूलधन + पहले वर्ष में अर्जित ब्याज) का 5% = (6000 + 300) का 5% = रु. 315

तो, दो वर्षों में अर्जित कुल चक्रवृद्धि ब्याज = 300 + 315 = रु. 615

इसलिए, 2 साल बाद भुगतान की जाने वाली राशि = मूलधन + कुल CI = 6000 + 615 = रु. 6615
</div>

<div id="1Exp-3" class="Exp-3 mak-tabcontent tabcontent-group1">
व्याख्या 3: प्रतिशत विधि <br><br>

CI = 5%

दो वर्षों के लिए प्रभावी ब्याज = 5 + 5 + (5×5)/100 = 10 + 0.25 = 10.25%

तो, राशि (Amount) = 6000 + 6000 का 10.25% = 6000 + 615 = रु. 6615
</div><br>


### सूत्र 2

<p> यदि ब्याज वार्षिक रूप से संयोजित (compounded annually) होता है, लेकिन समय अंश में दिया जाता है (मान लीजिए समय = n \(\frac{a}{b}\) वर्ष), तो </p>

<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n × (1 + \frac{ (\frac{a}{b}) r}{100}\)) </p>

<p><b> प्र. 10000 रुपये का ऋण 10% सालाना कंपाउंडेड की दर से दिया गया था। 2 \(\frac{2}{5}\) वर्षों के बाद राशि क्या होगी? </b></p>

व्याख्या :<br>
<button class="mak-tablink tablink-group2 default-tab" onclick="openTab('2Exp-1', this, 'tablink-group2', 'tabcontent-group2')">1</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-2', this, 'tablink-group2', 'tabcontent-group2')">2</button>

<div id="2Exp-1" class="Exp-1 mak-tabcontent tabcontent-group2">
व्याख्या 1: सूत्र विधि <br><br>

<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n × (1 + \frac{ (\frac{a}{b}) r}{100}\)) </p>

<p> अतः, राशि (Amount) = 10000 (1 + \(\frac{10}{100})^2 × (1 + \frac{ (\frac{2}{5}) 10}{100}\)) </p>

<p> = 10000 (\(\frac{11}{10})^2 × (1 + \frac{4}{100}) = 100 × 11^2 × (\frac{26}{25}\)) = Rs. 12,584 </p>
</div>

<div id="2Exp-2" class="Exp-2 mak-tabcontent tabcontent-group2">
व्याख्या 2: प्रतिशत विधि <br><br>

प्रथम वर्ष के लिए चक्रवृद्धि ब्याज = 10000 का 10% = रु. 1000

दूसरे वर्ष के लिए CI = (मूलधन + पहले वर्ष में अर्जित ब्याज) का 10% = (10000 + 1000) का 10% = रु. 1100

अगले 2/5 वर्षों के लिए चक्रवृद्धि ब्याज = (मूलधन + पहले दो वर्षों में अर्जित ब्याज) का 10% × 2/5 = (10000 + 2100) का 10% × (2/5) = रु. 1210 × (2/5) = रु. 484

<p> तो, 2\(\frac{2}{5}\) वर्षों में अर्जित कुल CI = 1000 + 1100 + 484 = रु. 2584 </p>

इसलिए, 2 साल बाद भुगतान की जाने वाली राशि = मूलधन + कुल CI = 10000 + 2584 = रु. 12584
</div><br>

<br><hr>

## चक्रवृद्धि अवधि (एकसमान दर पर)

प्रति वर्ष गणना के अलावा, चक्रवृद्धि ब्याज की गणना प्रति माह, प्रति दिन, आदि भी की जा सकती है। यदि ऐसा है, तो प्रश्न स्पष्ट रूप से यह बताएगा।

<div class="toc-mak">
<b>गैर-वार्षिक कंपाउंडिंग (Non-Annual Compounding) : </b> <br><br>

<p> यदि ब्याज प्रति वर्ष n बार संयोजित (compounded) होता है, तो दर = \(\frac{r}{n}\) और समय = nt </p>

<p> राशि (Amount) = P (1 + \(\frac{r}{𝑛×100})^{n𝑡}\) </p>
</div>

आइए विभिन्न दृष्टिकोणों का उपयोग करके इस सूत्र को समझने का प्रयास करें।

### दृष्टिकोण संख्या 1

<p> यदि ब्याज अर्ध-वार्षिक रूप से संयोजित (compounded half-yearly) किया जाता है, तो दर = \(\frac{r}{2}\) और समय = 2n </p>
 
<p> राशि (Amount) = P (1 + \(\frac{r}{2×100})^{2n}\) </p>

<p> यदि ब्याज त्रैमासिक रूप से संयोजित (compounded quarterly) होता है, तो दर = \(\frac{r}{4}\) और समय = 4n </p>

<p> राशि (Amount) = P (1 + \(\frac{r}{4×100})^{4n}\) </p>

### दृष्टिकोण संख्या 2

हम उपरोक्त सूत्र को इस प्रकार भी लिख सकते हैं:

<p> n वर्ष के अंत में राशि (Amount) = P (1 + \(\frac{r}{100})^{n𝑡}\), जहां </p>

* r - प्रति अवधि ब्याज दर (rate of interest per period) <br>
यदि वार्षिक कंपाउंडिंग है तो अवधि एक वर्ष होगी, यदि अर्ध-वार्षिक कंपाउंडिंग है तो 6 महीने, या मासिक कंपाउंडिंग होने पर 1 महीने, आदि।

* n - समय अवधि की संख्या (the number of time periods).

उदाहरण के लिए: <br>
यदि चक्रवृद्धि कंपाउंडिंग प्रत्येक तिमाही में होती है, और धन 8% प्रति वर्ष की दर से 3 साल के लिए निवेश किया जाता है, तो <br>
* r = 8/4 = 2% प्रति तिमाही और <br>
* n = 3 × 4 = 12 तिमाही <br>
(ये r और n के मान हैं, जिनका उपयोग हम CI सूत्र में करेंगे) <br>

मासिक रूप से कम्पाउंडेड (compounded monthly) चक्रवृद्धि धन के निम्नलिखित दो मामलों की तुलना करें:

* केस 1: यदि 12 महीने के लिए 2% प्रति माह की दर से ऋण लिया जाता है, तो r = 2% और n = 12 (एक महीने की 12 समय-अवधियाँ)

* केस 2: यदि मासिक चक्रवृद्धि के साथ 24% ब्याज की दर से 12 महीने के लिए ऋण लिया जाता है, तो भी r = 24/12 = 2% और n = 12 (एक महीने की 12 समय-अवधियाँ)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कंपाउंडिंग की आवृत्ति जितनी अधिक होगी, पैसा उतनी ही तेजी से बढ़ेगा।
</div>

### दृष्टिकोण संख्या 3

यदि हम सूत्र का उपयोग नहीं करना चाहते हैं, तो हम प्रभावी ब्याज दर (effective rate of interest) का पता लगा सकते हैं और फिर अंतिम राशि (amount) या ब्याज का पता लगा सकते हैं।

उदाहरण के लिए:

यदि दर 20% प्रति वर्ष है, और यह अर्ध-वार्षिक संयोजित (compounded half-yearly) है, तो अर्ध-वार्षिक दर, r = 20/2 = 10%

अब, हम इसे या तो CI सूत्र में उपयोग कर सकते हैं या वार्षिक ब्याज की प्रभावी दर ज्ञात कर सकते हैं।

<p> वार्षिक ब्याज की प्रभावी दर, R = r + r + \(\frac{r^2}{100} = 10 + 10 + \frac{10^2}{100}\) = 21% </p>

राशि (Amount) = मूलधन (Principal) + मूलधन (Principal) का R%

वह तरीका चुनें जिसमें आसान गणना शामिल हो।

##### प्र. 2 साल में 8% प्रति वर्ष की दर से रु. 15,000 की राशि कितनी हो जाएगी, यदि ब्याज हर 6 महीने में संयोजित होता है?

व्याख्या :<br>
<button class="mak-tablink tablink-group3 default-tab" onclick="openTab('3Exp-1', this, 'tablink-group3', 'tabcontent-group3')">1</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-2', this, 'tablink-group3', 'tabcontent-group3')">2</button>

<div id="3Exp-1" class="Exp-1 mak-tabcontent tabcontent-group3">
व्याख्या 1: सूत्र विधि <br><br>

<p> यदि ब्याज अर्ध-वार्षिक रूप से संयोजित (compounded half-yearly) किया जाता है, तो दर = \(\frac{r}{2}\) और समय = 2n </p>
 
<p> राशि (Amount) = P (1 + \(\frac{r}{2×100})^{2𝑛} = 15000(1 + \frac{8}{2×100})^{2×2}\) </p>

<p> = 15000(1 + \(\frac{1}{25})^4 = 15000(\frac{26}{25})^4\) </p>

= रु. 17,548 (approx)

</div>

<div id="3Exp-2" class="Exp-2 mak-tabcontent tabcontent-group3">
व्याख्या 2: प्रतिशत विधि <br><br>

यदि ब्याज अर्धवार्षिक रूप से संयोजित (compounded half-yearly) किया जाता है, तो अर्धवार्षिक दर = 8/2 = 4% <br>
<p> 1 वर्ष के लिए वार्षिक ब्याज की प्रभावी दर = x + y + \(\frac{xy}{100}\) = 4 + 4 + 16/100 = 8.16% <br>
2 वर्षों के लिए वार्षिक ब्याज की प्रभावी दर = x + y + \(\frac{xy}{100}\) = 8.16 + 8.16 + (8.16)(8.16)/100 = 16.99% (यानी लगभग 17%) <br></p>

तो, राशि (Amount) = P + P का 17% = 15000 + 15000 का 17% = 15000 + 2550 = रु. 17,550 (लगभग)
</div><br>

##### प्र. एक राशि को 50% वार्षिक चक्रवृद्धि ब्याज पर उधार दिया जाता है, जो अर्धवार्षिक रूप से संयोजित होता है। कितने वर्षों के बाद (लगभग) देय राशि मूलधन की दोगुनी होगी?
<pre>(a) 3   (b) 4    (c) 2.5   (d) 1.5</pre>

व्याख्या :<br>
<button class="mak-tablink tablink-group6 default-tab" onclick="openTab('6Exp-1', this, 'tablink-group6', 'tabcontent-group6')">1</button>
<button class="mak-tablink tablink-group6" onclick="openTab('6Exp-2', this, 'tablink-group6', 'tabcontent-group6')">2</button>

<div id="6Exp-1" class="Exp-1 mak-tabcontent tabcontent-group6">
व्याख्या 1: सूत्र विधि <br><br>

माना वर्षों की संख्या n है।

<p> देय राशि, 2P = P \([1 + (50/200)]^{2n}\) <br>
या \([1 + 0.25]^{2n}\) = 2 <br>
या \((1.25)^{2n}\) = 2 </p>

2n का अनुमानित मान जो उपरोक्त समीकरण को संतुष्ट करता है, 3 है। <br>
अत: n = 3/2 = 1.5 वर्ष

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

प्रति वर्ष 50% चक्रवृद्धि ब्याज, जो अर्धवार्षिक रूप से संयोजित (compounded half yearly) होता है ≡ 25% चक्रवृद्धि ब्याज प्रति 6 महीने
</div>
</div>

<div id="6Exp-2" class="Exp-2 mak-tabcontent tabcontent-group6">
व्याख्या 2: विकल्पों का उपयोग करके <br><br>

आइए मान लें कि साधारण ब्याज देय है। S.I. के तहत भी 50% की दर से, राशि 2 वर्षों में दोगुनी हो जाएगी।

इसलिए, यह स्पष्ट है कि यदि चक्रवृद्धि ब्याज लगाया जाता है, तो राशि इससे भी जल्दी दोगुनी हो जाएगी। दिए गए विकल्पों में से केवल 1.5 वर्ष ही इस हिसाब से उपयुक्त बैठता हैं।
</div><br>

<br><hr>

## अलग-अलग दरों के लिए चक्रवृद्धि ब्याज (C.I.)

<p> यदि ब्याज की दरें \(1^{st}\), \(2^{nd}\) और \(3^{rd}\) वर्ष के लिए क्रमशः \(r_1\)%, \(r_2\)% और \(r_3\)% हैं, तो </p>

<p> राशि (Amount) = P (1 + \(\frac{r_1}{100}) (1 + \frac{r_2}{100}) (1 + \frac{r_3}{100}\)) </p>

##### प्र. 5000 रुपये की राशि, 3 साल के लिए चक्रवृद्धि ब्याज पर, ऋण पर दी गयी थी। यदि प्रथम, द्वितीय और तृतीय वर्ष में दर क्रमशः 4%, 10% और 5% थीं, तो अंतिम राशि क्या होनी चाहिए?

व्याख्या: सूत्र विधि <br>
<div class="Exp">
<p> राशि (Amount) = P (1 + \(\frac{r_1}{100}) (1 + \frac{r_2}{100}) (1 + \frac{r_3}{100}\)) <br><br>
= 5000 (1 + \(\frac{4}{100}) (1 + \frac{10}{100}) (1 + \frac{5}{100}\)) <br><br>
= 5000 (\(\frac{26}{25}) (\frac{11}{10}) (\frac{21}{20}\)) = रु. 6006 </p>
</div> <br>

<br><hr>

## पैसा n गुना हो जाता है (CI के मामले में)

### सूत्र 1

<div class="toc-mak"> <br>
एक निश्चित राशि n वर्षों में 'k' गुना हो जाती है। <br> <br>

<p> चक्रवृद्धि ब्याज की दर, r = 100 [(\(\frac{A}{P})^{\frac{1}{n}} – 1] = 100(k^\frac{1}{n}\) – 1) </p>
</div>

हम इस फॉर्मूले को इस प्रकार भी लिख सकते हैं:

<p> यदि कोई राशि \(n_1\) वर्षों में '\(A_1\)' और \(n_2\) वर्षों में '\(A_2\)' हो जाती है। </p>

<p> तो, k = \(A_2 / A_1\) और समय, n = (\(n_2 - n_1\)) वर्ष </p>

<p> चक्रवृद्धि ब्याज की दर, r = 100 [(\(\frac{A_2}{A_1})^{\frac{1}{(n_2 - n_1)}}\) – 1] </p>

#### शॉर्टकट विधि

CI @ r% प्रति वर्ष की दर से, किसी राशि को दोगुना होने में लिए गए वर्षों की संख्या निम्नलिखित होती है:

* 72/r वर्ष। (हमें अनुमानित उत्तर मिलेगा)

* (69/r) + 0.35 (यह थोड़ा और सटीक उत्तर देगा)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

सटीक उत्तर इन अनुमानों से बड़ा होगा। उत्तर में त्रुटि अत्यधिक बढ़ जाती है यदि r < 5%
</div>

##### प्र. एक राशि, जो वार्षिक रूप से संयोजित होती है, 3 वर्षों में स्वयं की 8 गुना हो जाती है। ब्याज दर ज्ञात कीजिए।

व्याख्या :<br>
<button class="mak-tablink tablink-group4 default-tab" onclick="openTab('4Exp-1', this, 'tablink-group4', 'tabcontent-group4')">1</button>
<button class="mak-tablink tablink-group4" onclick="openTab('4Exp-2', this, 'tablink-group4', 'tabcontent-group4')">2</button>

<div id="4Exp-1" class="Exp-1 mak-tabcontent tabcontent-group4">
व्याख्या 1: सूत्र विधि <br><br>

<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n\) <br><br>
Or 8P = P (1 + \(\frac{r}{100})^3\) <br><br>
Or (1 + \(\frac{r}{100})^3\) = 8 <br><br>
Or (1 + \(\frac{r}{100}\)) = 2 <br><br>
Or \(\frac{r}{100}\) = 1 <br><br>
Or r = 100% </p>
</div>

<div id="4Exp-2" class="Exp-2 mak-tabcontent tabcontent-group4">
व्याख्या 2: प्रतिशत विधि <br><br>

एक निश्चित राशि n वर्षों में 'k' गुना हो जाती है।

<p> चक्रवृद्धि ब्याज की दर, r = 100 (\(k^\frac{1}{n} – 1) = 100 (8^\frac{1}{3}\) – 1) = 100 (2 - 1) = 100% </p>
</div><br>

##### प्र. What are the least number of years in which a sum of money will become 1.21 times itself at a compound rate of 10%? 

व्याख्या: सूत्र विधि <br>
<div class="Exp">
<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n\) <br><br>
Or 1.21 P = P (1 + \(\frac{10}{100})^n\) <br><br>
Or (\(\frac{11}{10})^n\) = 1.21 <br><br>
Or \((1.1)^n\) = 1.21 <br><br>
So, n = 2 वर्ष </p>
</div> <br>

##### प्र. कम से कम कितने वर्षों में कोई राशि 10% की चक्रवृद्धि दर से दो गुना हो जाएगी?

व्याख्या: शॉर्ट ट्रिक विधि <br>
<div class="Exp">
CI @ r% प्रति वर्ष की दर से, किसी राशि को दोगुना होने में लिए गए वर्षों की संख्या = 72/r = 72/10 = 7.2 years

या

CI @ r% प्रति वर्ष की दर से, किसी राशि को दोगुना होने में लिए गए वर्षों की संख्या = (69/r) + 0.35 = (69/10) + 0.35 = 6.9 + 0.35 = 7.25 years
</div> <br>

### सूत्र 2

<p> यदि चक्रवृद्धि ब्याज पर एक निश्चित राशि \(n_1\) वर्षों में \(k_1\) गुना, और \(n_2\) वर्षों में \(k_2\) गुना हो जाती है, तो </p>

<p> \(k_1^{\frac{1}{n_1}} = k_2^{\frac{1}{n_2}}\) </p>

<p> या \(k_1^{n_2} = k_2^{n_1}\) </p>

<p> यदि एक निश्चित राशि चक्रवृद्धि ब्याज पर n वर्षों में k गुना हो जाती है, तो वही राशि mn वर्षों में \(k^m\) गुना हो जाएगी। </p>

<p> उदाहरण के लिए, यदि कोई राशि 3 वर्षों में 2 गुना हो जाती है, तो वही राशि 4×3 = 12 वर्षों में \(2^4\) (=16) गुना हो जाएगी| </p>

##### प्र. एक राशि चक्रवृद्धि ब्याज के तहत 3 वर्षों में तिगुनी हो जाती है। समान ब्याज दर पर राशि कितने वर्षों में 9 गुना हो जाएगी?

व्याख्या :<br>
<button class="mak-tablink tablink-group5 default-tab" onclick="openTab('5Exp-1', this, 'tablink-group5', 'tabcontent-group5')">1</button>
<button class="mak-tablink tablink-group5" onclick="openTab('5Exp-2', this, 'tablink-group5', 'tabcontent-group5')">2</button>
<button class="mak-tablink tablink-group5" onclick="openTab('5Exp-3', this, 'tablink-group5', 'tabcontent-group5')">3</button>

<div id="5Exp-1" class="Exp-1 mak-tabcontent tabcontent-group5">
व्याख्या 1: पारंपरिक विधि <br><br>

<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n\) <br><br>
या 3 P = P (1 + \(\frac{r}{100})^3\) <br><br>
या (1 + \(\frac{r}{100})^3\) = 3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ... (समीकरण i)<br><br> </p>

<p> अब, 9 P = P (1 + \(\frac{r}{100})^n\) <br><br>
या (1 + \(\frac{r}{100})^n\) = 9 <br><br>
या (1 + \(\frac{r}{100})^n = 3^2\) <br><br>
या (1 + \(\frac{r}{100})^n = (1 + \frac{r}{100})^6\)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ... (समीकरण i से)<br><br>
अतः, n = 6 वर्ष </p>
</div>

<div id="5Exp-2" class="Exp-2 mak-tabcontent tabcontent-group5">
व्याख्या 2: सूत्र विधि <br><br>

<p> \(k_1^{n_2} = k_2^{n_1}\) <br>
या \(3^{n} = 9^{3}\) <br>
या \(3^{n} = 3^{6}\) <br>
या n = 6 साल <br> </p>
</div>

<div id="5Exp-3" class="Exp-3 mak-tabcontent tabcontent-group5">
व्याख्या 3: सामान्य बुध्दि विधि (Common Sense Method) <br><br>

एक राशि 3 साल में तीन गुना हो जाती है।

तो, अगले 3 वर्षों में यह फिर से तिगुना हो जाएगी, यानी यह 3 × 3 = 9 गुना हो जाएगी

अतः, राशि के 9 गुना होने में लगने वाला समय = 3 + 3 = 6 वर्ष
</div><br>

<br><hr><br>

## विविध चक्रवृद्धि ब्याज सूत्र (Miscellaneous Compound Interest Formulae)

### सूत्र 1

<p> यदि CI में n वर्षों के बाद P राशि \(A_1\) हो जाती है, और CI में ही वही समान राशि (n + 1) वर्षों के बाद \(A_2\) हो जाती है, तो </p>

<p> r = \(\frac{(A_2 – A_1)}{A_1}\) x 100 </p>

##### प्र. यदि कोई राशि 2 साल में रु. 2420, और 3 वर्षों में रु. 2662 हो जाती है, तो मूल उधार राशि क्या थी (चक्रवृद्धि ब्याज मान लें)?

व्याख्या :<br>
<button class="mak-tablink tablink-group7 default-tab" onclick="openTab('7Exp-1', this, 'tablink-group7', 'tabcontent-group7')">1</button>
<button class="mak-tablink tablink-group7" onclick="openTab('7Exp-2', this, 'tablink-group7', 'tabcontent-group7')">2</button>

<div id="7Exp-1" class="Exp-1 mak-tabcontent tabcontent-group7">
व्याख्या 1: सूत्र विधि <br><br>

<p> यदि CI में n वर्षों के बाद P राशि \(A_1\) हो जाती है, और CI में ही वही समान राशि (n + 1) वर्षों के बाद \(A_2\) हो जाती है, तो </p>

<p> r = \(\frac{(A_2 – A_1)}{A_1} x 100 = \frac{(2662 – 2420)}{2420} x 100 = \frac{242}{2420}\) x 100 = 10% </p>

<p> तो P, 2 साल में 10% की दर से, रु. 2420 हो जाती है। <br><br>
राशि (Amount) = P (1 + \(\frac{r}{100})^n\) <br><br>
या 2420 = P (1 + \(\frac{10}{100})^2\) <br><br>
या P = 2420 x (\(\frac{10}{11})^2\) = रु. 2000 </p>
</div>

<div id="7Exp-2" class="Exp-2 mak-tabcontent tabcontent-group7">
व्याख्या 2: <br><br>

3 साल बाद की राशि - 2 साल बाद की राशि = 2662 - 2420 = रु. 242 <br>
यह अंतर पिछले वर्ष की राशि पर अर्जित ब्याज है, यानी 2420 रुपये पर। 

तो, P = रु. 2420, साधारण ब्याज = रु. 242 और n = 1 वर्ष

अब, SI = Prn/100 (हम यहाँ SI सूत्र को लागू कर सकते हैं, क्यूंकि n = 1 और एक वर्ष के लिए CI = SI) <br>
या r = (SI x 100) / Pn = (242 x 100) / (2420 x 1) = 10%

तो P, 2 साल में 10% की दर से, रु. 2420 हो जाती है। <br><br>

<p> राशि (Amount) = P (1 + \(\frac{r}{100})^n\) <br><br>
या 2420 = P (1 + \(\frac{10}{100})^2\) <br><br>
या P = 2420 x (\(\frac{10}{11})^2\) = रु. 2000 </p>
</div><br>

<br><hr><br>

## चक्रवृद्धि ब्याज सूत्रों के अनुप्रयोग (Applications of Compound Interest formulae)

जनसंख्या, मूल्य परिवर्तन, आदि के लिए CI सूत्र लागू किए जा सकते हैं।

### जनसंख्या के मामले में चक्रवृद्धि ब्याज सूत्रों के अनुप्रयोग

यदि किसी शहर की जनसंख्या P है और यह r% प्रति वर्ष की दर से बढ़ती है, तो

<p> (i) n वर्षों के बाद जनसंख्या = P (1 + \(\frac{r}{100})^n\) </p>

<p> (ii)	जनसंख्या n साल पहले = \(\frac{P}{(1 + \frac{r}{100})^n}\) </p>

<p> (iii)	यदि प्रति वर्ष विकास दर \(r_1%, r_2%, r_3%,......r_n\)% है, तो
n वर्षों के बाद जनसंख्या =  P (1 + \(\frac{r_1}{100}) (1 + \frac{r_2}{100}) (1 + \frac{r_3}{100})......(1 + \frac{r_n}{100}\)) </p>

(किसी वस्तु के मूल्य में वृद्धि/कमी होने पर भी इस सूत्र का प्रयोग किया जा सकता है)।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि जनसंख्या r% की दर से घटती है, तो उपरोक्त सूत्र में (+) के स्थान पर (-) चिन्ह का प्रयोग किया जाएगा।
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जनसंख्या वृद्धि या संपत्ति के मूल्यवृद्धि/मूल्यह्रास से संबंधित प्रश्नों में, हम चक्रवृद्धि ब्याज मानेंगे (जब तक अन्यथा न कहा गया हो)।

अन्य सभी मामलों में (जैसे बैंक ऋण, आदि), यदि कुछ भी उल्लेखित नहीं है, तो हम साधारण ब्याज मानेंगे।
</div>
