---
author: Mragank Shandilya
title: गणित में ब्याज की अवधारणा (Concept of Interest in Maths)
date: "2021-12-25"
description: गणित में ब्याज की अवधारणा (Concept of Interest in Maths) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["si-ci"]
categories: ["interest"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/interest/interest1.png" # Sets featured image on blog post.
thumbnail: "images/interest/interest1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Interest, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-simple-interest" title="Interest" class="mak-link">साधारण ब्याज क्या होता है?</a> 
* <a href="../what-is-compound-interest" title="Interest" class="mak-link">गणित में चक्रवृद्धि ब्याज की अवधारणा</a> 
</div>

पैसे उधार लेने में हमारा पैसा खर्च होता है। क्या यह बात आपको समझ आयी? 

जब कोई व्यक्ति कुछ पैसे उधार लेता है, तो उसे कर्जदार कहा जाता है। उसे चुकौती (repayment) के दौरान कुछ अतिरिक्त पैसे देने होंगे। चुकौती के दौरान उस अतिरिक्त धन को ही ब्याज कहा जाता है।

उदाहरण के लिए: यदि A, B से 1000 रुपये लेता है। उसके बाद, A, B को 1100 रुपये लौटाता है। इसका मतलब है कि, A ने ब्याज के रूप में (1100 - 1000) = रु. 100 का भुगतान किया ।


## ब्याज से संबंधित शब्दावली (Terms related to Interest)

आइए, आगे बढ़ने से पहले निम्नलिखित परिभाषाओं पर विचार करें।

* Principal (प्रिंसिपल, मूलधन, P) - एक निश्चित समय के लिए उधार लिया या जमा किया गया धन।

* Amount (अमाउंट, A) - मूलधन (principal) और ब्याज (interest) का योग। <br>
यानी, Amount = मूलधन (Principal) + साधारण ब्याज (Simple Interest)

* ब्याज दर (Rate of Interest, R) - वह दर जिस पर मूलधन पर ब्याज लगाया जाता है (हमेशा प्रतिशत में निर्दिष्ट किया जाता है)।

* समय-अवधि (Time-period, T or N) - वह अवधि जिसके लिए पैसा उधार लिया या जमा किया गया है।


## ब्याजों के प्रकार (Types of Interests)

ब्याज की गणना दो तरह से की जा सकती है: साधारण ब्याज (Simple Interest, S.I.) और चक्रवृद्धि ब्याज (Compound Interest, C.I.)

आइए देखें कि S.I. और C.I. क्या हैं ?

* साधारण ब्याज (Simple Interest): इसकी गणना हमेशा निवेश किए गए प्रारंभिक मूलधन (P) के प्रतिशत के रूप में की जाती है (किसी भी समयावधि के लिए)। <br> <br>
किसी भी वर्ष में साधारण ब्याज हमेशा स्थिर रहता है (अर्थात P का r%)। तो, मूलधन प्रति टर्म एक स्थिर राशि से बढ़ता है।

* चक्रवृद्धि ब्याज (Compound Interest): इसकी गणना समय अवधि की शुरुआत में बकाया राशि के प्रतिशत के रूप में की जाती है (प्रारंभिक मूलधन के प्रतिशत के रूप में नहीं)। <br> <br>
इसलिए, पहले की समयावधि में अर्जित ब्याज प्रारंभिक मूलधन में जुड़ता रहता है, और इस नई राशि को पुनर्निवेश माना जाता है और इसी नई राशि पर ब्याज की गणना की जाती है।


## साधारण ब्याज और चक्रवृद्धि ब्याज के बीच संबंध (Relation between Simple Interest and Compound Interest)

आइए, साधारण और चक्रवृद्धि ब्याजों के बीच संबंध, उनके सामान्य बिंदुओं और अंतरों का अध्ययन करें। यह हमें इन दोनों अवधारणाओं, विशेष रूप से चक्रवृद्धि ब्याज की अवधारणा को समझने में और मदद करेगा।

नीचे दी गई तुलना तालिका पर एक नजर डालें:

<table>
  <tr>
    <th>साधारण ब्याज (Simple Interest)</th>
    <th>चक्रवृद्धि ब्याज (Compound Interest)</th>
  </tr>
  <tr>
    <td>मूलधन (Principal) हर साल वही रहता है।</td>
    <td>किसी वर्ष के अंत में बनने वाला अमाउंट (Amount), अगले वर्ष के लिए मूलधन (Principal) होता है|</td>
  </tr>
  <tr>
    <td>हर साल लिया जाने वाला ब्याज समान रहता है (P का r%)</td>
    <td>विभिन्न वर्षों के लिए ब्याज समान नहीं होता है। यह बढ़ता रहता है।  </td>
  </tr>
</table>

यदि चक्रवृद्धि (compounding) वार्षिक आधार पर की जाती है, तो पहले वर्ष का चक्रवृद्धि ब्याज (compound interest) किसी भी एक वर्ष के साधारण ब्याज (simple interest) के समान होता है।

चक्रवृद्धि ब्याज पर प्रत्येक वर्ष अर्जित ब्याज राशि में वृद्धि, पिछले वर्ष अर्जित ब्याज के r% के बराबर होती है।

##### उदाहरण

उदाहरण के लिए, उस मामले पर विचार करें जिसमें रु. 1000, 10% पर उधार लिया जाता है। <br>
<img src="../../../images/interest/si-vs-ci.png" alt="simple interest vs. compound interest" style="width:99%;height:99%;">

### अवधारणा 1

<p> 2 वर्षों के लिए CI और SI के बीच का अंतर (D) = P (\(\frac{r}{100})^2\) or \(\frac{(SI × 𝑟)}{200}\) </p>

<p> 3 वर्षों के लिए CI और SI के बीच का अंतर (D) = P (\(\frac{r}{100})^2\) (\(\frac{r}{100}\) + 3) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

याद रखें, एक ही राशि और समान दर पर, एक वर्ष के लिए साधारण ब्याज और चक्रवृद्धि ब्याज समान होते हैं।
</div>

उन लोगों के लिए, जो चीजों को रटने पर ज्यादा यकीन रखते हैं, यहां एक तालिका दी गयी है, जो गणना प्रक्रिया को कई गुना तेज कर सकती है।

यदि प्रारंभिक मूलधन रु. 1 है, तो SI, CI और उनका अंतर निम्नलिखित होगा: <br>
<img src="../../../images/interest/ci-si.png" alt="compound interest minus simple interest" style="width:99%;height:99%;">

### अवधारणा 2

यदि r% की वार्षिक दर से, 2 वर्षों के लिए एक निश्चित राशि का साधारण ब्याज SI है, तो

<p> चक्रवृद्धि ब्याज (CI) = SI (1 + \(\frac{r}{200}\)) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह फॉर्मूला केवल 2 साल के लिए लागू होता है।
</div>

<p> \(\frac{पहले \hspace{1ex} दो \hspace{1ex} सालों \hspace{1ex} का \hspace{1ex} कुल \hspace{1ex} SI}{पहले \hspace{1ex} दो \hspace{1ex} सालों \hspace{1ex} का \hspace{1ex} कुल \hspace{1ex} CI} = \frac{SI}{SI (1 + \frac{r}{200})}\) </p>

<p> = \(\frac{2}{(2 + \frac{r}{100})}\) = 2 / (2 + r%) </p>

##### प्र. यदि एक निश्चित राशि पर 2 वर्ष के लिए, 6% प्रति वर्ष की दर से साधारण और चक्रवृद्धि ब्याज के बीच का अंतर रु. 90 है, तो दी गई मूल राशि ज्ञात कीजिए।

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-3', this, 'tablink-group1', 'tabcontent-group1')">3</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: फॉर्मूला विधि <br><br>

<p> 2 वर्षों के लिए CI और SI के बीच का अंतर (D) = P (\(\frac{r}{100})^2\) <br>
या 90 = P (\(\frac{6}{100})^2\) <br>
या P = \(50^2\) × 10 = Rs. 25000 <br> </p>
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: प्रभावी ब्याज दर विधि (Effective Interest Rate Method) <br><br>

दर = 6%

दो साल के लिए CI - दो साल के लिए SI = (6 × 6)/100 = 0.36%

0.36% = 90 <br>
तो, 100% = 90 × (100/0.36) = रु. 25000

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> यह विधि लगभग सूत्र P (\(\frac{r}{100})^2\) को लागू करने के समान है| </p>
</div>
</div>

<div id="1Exp-3" class="Exp-3 mak-tabcontent tabcontent-group1">
व्याख्या 3: प्रतिशत विधि <br><br>

माना प्रारंभिक राशि रु. 100 है| 

तो, पहले वर्ष के लिए SI/CI = 100 का 6% = रु. 6 (पहले वर्ष के लिए SI = CI) <br>
अत: दो वर्षों का साधारण ब्याज = 6 + 6 = रु. 12

अब, दूसरे वर्ष के लिए CI = पहले वर्ष के लिए SI + पहले वर्ष के SI पर ब्याज = 6 + 6 का 6% = 6 + 0.36 = रु. 6.36 <br>
तो, दो साल के लिए CI = 6 + 6.36 = रु. 12.36

तो, दो साल के चक्रवृद्धि ब्याज और साधारण ब्याज के बीच का अंतर 0.36 रुपये है, यदि प्रारंभिक योग रु. 100 हो| <br>
यदि अंतर रु. 90 है, तो प्रारंभिक राशि = 100 × (90/0.36) = रु. 25000
</div><br>
