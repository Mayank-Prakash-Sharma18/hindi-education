---
author: Mragank Shandilya
title: औसत क्या होता है? (What is Average?)
date: "2021-12-17"
description: औसत क्या होता है? (What is Average?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["average-and-mixtures"]
categories: ["average-and-mixtures"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/mixtures/average2.png" # Sets featured image on blog post.
thumbnail: "images/mixtures/average2.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Average?, in Hindi</strong>

एक ही प्रकार की n राशियों का औसत, उन सभी राशियों के योग को उन राशियों की संख्या से विभाजित करने पर प्राप्त होता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../how-to-find-average-of-numbers-in-ap" title="Average, Mixtures and Alligation" class="mak-link">समान्तर श्रेढ़ी का औसत कैसे ज्ञात करें?</a> 
* <a href="../what-is-weighted-average" title="Average, Mixtures and Alligation" class="mak-link">Weighted Average क्या होता है?</a> 
* <a href="../mixtures-and-alligation-in-maths" title="Average, Mixtures and Alligation" class="mak-link">मिश्रण और एलीगेशन की अवधारणा</a> 
* <a href="../replacement-of-part-of-solution-in-maths" title="Average, Mixtures and Alligation" class="mak-link">घोल के एक हिस्से को बदलना</a> 
</div>

## औसत कैसे ज्ञात करें? (How to find Average?)

### फॉर्मूला विधि (Formula Method)

<p> औसत = \(\frac{राशियों \hspace{1ex} का \hspace{1ex} योग}{राशियों \hspace{1ex} की \hspace{1ex} संख्या \hspace{1ex} (n)}\) </p>

### डिविएशन्स की विधि (Method of deviations)

सूत्र का उपयोग करने के बजाय, हम अपनी गणना को आसान बनाने के लिए डिविएशन्स की विधि का उपयोग कर सकते हैं।

<p> उदाहरण के लिए, हमें इन n मात्राओं का औसत ज्ञात करना है - \(x_1, x_2, ..... x_n\) </p>

इस विधि में:
* हम किसी भी संख्या (A) को औसत मान लेते हैं।
* <p> उसके बाद हम बीजगणितीय रूप से A की तुलना में सभी मात्राओं के विचलन/डिविएशन/अंतर को जोड़ते हैं, अर्थात (\(x_1 - A) ± (x_2 - A) ± ..... ± (x_n\) - A)। </p>
* <p> इसके बाद हम इन अंतरों का औसत लेते हैं। अर्थात्, \(\frac{1}{n} \sum_{i=1}^{n} (x_i − 𝐴)\) </p>
* फिर हम अपना उत्तर प्राप्त करने के लिए बीजगणितीय रूप से इस औसत को A में जोड़ते हैं।

<p> तो, इन n वस्तुओं का औसत = A ± \(\frac{1}{n} \sum_{i=1}^{n} (x_i − 𝐴)\) </p>

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>चेतावनी</b><br>

बीजगणितीय रूप से जोड़ने का अर्थ है कि हम संकेतों को भी ध्यान में रखते हैं। अर्थार्थ, कोई संख्या घनात्मक है या नकारात्मक| 
</div>

***आइए एक उदाहरण पर विचार करें:***

एक छात्र ने पांच विषयों में निम्नलिखित अंक प्राप्त किए: 38, 58, 44, 54 और 61

अब, मान लीजिए कि कोई संख्या (A) इन अंकों का औसत है, जैसे की 50
* 50 से अंकों का विचलन हैं: -12, +8, -6, +4 और +11
* इन विचलनों का बीजगणितीय योग +5 है।
* अत: विद्यार्थी के अंकों का औसत = 50 + 5/5 = 51

यदि हम A = 55 लेते हैं।
* 55 से अंकों के विचलन हैं: -17, +3, -11, -1 और +6
* इन विचलनों का बीजगणितीय योग -20 है।
* अत: विद्यार्थी के अंकों का औसत = 55 - 20/5 = 55 - 4 = 51

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह विधि गणना को किस हद तक सरल करेगी, यह माने गएऔसत A के चयन पर निर्भर करेगा। इसे इस तरह से चुना जाना चाहिए, कि घनात्मक और नकारात्मक विचलन एक दूसरे को जितना संभव हो सके रद्द कर दें। तब विभाजन के लिए बचा हुआ अंतिम आंकड़ा अपेक्षाकृत छोटा होगा।
</div>

##### प्र. यदि एक क्रिकेटर ने अपनी छह पारियों में 98, 82, 66, 76, 80 और 90 रन बनाए हैं, तो उसका औसत स्कोर क्या है?

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: फॉर्मूला विधि <br><br>

<p> औसत = \(\frac{राशियों \hspace{1ex} का \hspace{1ex} योग}{राशियों \hspace{1ex} की \hspace{1ex} संख्या \hspace{1ex} (n)}\) = (98 + 82 + 66 + 76 + 80 + 90)/6 = 492/6 = 82 runs </p>
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: डिविएशन्स की विधि <br><br>

आइए हम 80 को माध्य मान लें।

विचलनों का बीजीय योग = 18 + 2 - 14 - 4 + 0 + 10 = 12

अत: क्रिकेटर का औसत स्कोर = 80 + 12/6 = 82 रन
</div><br>

## औसत के गुण (Properties of Averages)

### योग (Addition)

यदि सभी संख्याओं में a की वृद्धि की जाती है, तो उनके औसत में भी a से वृद्धि हो जाएगी। <br>
जैसे की, यदि लोगों के समूह की औसत आयु x वर्ष है, तो n वर्ष के बाद उनकी औसत आयु (x + n) होगी। ऐसा इसलिए है क्योंकि प्रत्येक गुजरते वर्ष के साथ, प्रत्येक व्यक्ति की आयु में 1 की वृद्धि होती है।

### घटाव (Subtraction)

यदि सभी संख्याएँ a से कम की जाती हैं, तो उनका औसत भी a से कम हो जायेगा। <br>
जैसे की, यदि लोगों के समूह की औसत आयु x वर्ष है, तो n वर्ष पूर्व उनकी औसत आयु (x - n) रही होगी।

### गुणा/भाग (Multiplication/Division)

यदि सभी संख्याओं को a से गुणा किया जाता है, तो उनका औसत भी a से गुणा हो जायेगा। <br>
यदि सभी संख्याओं को a से विभाजित किया जाता है, तो उनका औसत भी a से विभाजित हो जायेगा। (a ≠ 0)

### किसी संख्या के गुणज (Multiples of a number)

<p> किसी भी संख्या के n गुणकों का औसत = \(\frac{संख्या × (n+1)}{2}\) </p>

<br><hr>

## समूह परिवर्तन का औसत पर प्रभाव (Impact of Group change on Average)

किसी व्यक्ति के समूह छोड़ने या उसमें शामिल होने पर औसत बढ़ / घट सकता है। इस खंड में हम इसी पर ध्यान केंद्रित करने जा रहे हैं।

यहाँ तीन संभावित मामले हमारे सामने पेश हो सकते हैं।

### एक नया आइटम जोड़ना (Addition of a new item)

n मात्राओं का औसत X के बराबर है और समूह में एक नई इकाई/मात्रा जोड़ने पर औसत Y हो जाता है (अर्थात समूह में चीज़ों की संख्या 1 से बढ़ जाती है), फिर:

नई इकाई का मान = Y + (Y - X)n या X + (Y - X) (n + 1)

##### प्र. 8 लड़कों के समूह की औसत आयु 12 वर्ष है। इसके बाद एक नया लड़का समूह में शामिल हो जाता है और उनकी औसत आयु बढ़कर 13 वर्ष हो जाती है। नए लड़के की उम्र क्या है?

व्याख्या :<br>
<button class="mak-tablink tablink-group2 default-tab" onclick="openTab('2Exp-1', this, 'tablink-group2', 'tabcontent-group2')">1</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-2', this, 'tablink-group2', 'tabcontent-group2')">2</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-3', this, 'tablink-group2', 'tabcontent-group2')">3</button>

<div id="2Exp-1" class="Exp-1 mak-tabcontent tabcontent-group2">
व्याख्या 1: पारंपरिक विधि <br><br>

औसत = आयु का योग / लड़कों की संख्या

या आयु का योग = औसत × लड़कों की संख्या = 12 × 8 = 96 वर्ष

आयु का नया योग = नया औसत × लड़कों की नई संख्या = 13 × 9 = 117

अत: नए लड़के की आयु = 117 - 96 = 21 वर्ष
</div>

<div id="2Exp-2" class="Exp-2 mak-tabcontent tabcontent-group2">
व्याख्या 2: सूत्र विधि <br><br>

n मात्राओं का औसत X के बराबर है, और समूह में एक नई इकाई/मात्रा जोड़ने पर औसत Y हो जाता है (अर्थात समूह में चीज़ों की संख्या 1 से बढ़ जाती है), फिर:

नई इकाई का मान = Y + (Y - X)n या X + (Y - X) (n + 1)

अतः नए लड़के की आयु = Y + (Y - X)n = 13 + (13 - 12)8 = 13 + 8 = 21 वर्ष
</div>

<div id="2Exp-3" class="Exp-3 mak-tabcontent tabcontent-group2">
व्याख्या 3: शॉर्ट ट्रिक विधि <br><br>

समूह का औसत 12 से बढ़कर 13 हो गया।

तो, नए लड़के की उम्र कम से कम 13 तो होगी ही, और इतनी भी की वो बाकी लड़कों के औसत को बढ़ा सके।

यानी नए लड़के की उम्र = नया औसत + बाकी लड़कों का औसत बढ़ाने के लिए आवश्यक राशि <br>
= नया औसत + औसत में अंतर × लड़कों की मूल संख्या <br>
= 13 + (13 - 12) × 8 = 13 + 8 = 21 वर्ष
</div><br>

### किसी मौजूदा आइटम को हटाना (Removal of an existing item)

n मात्राओं का औसत X के बराबर है, और समूह से एक इकाई/मात्रा को हटाने पर औसत Y हो जाता है (अर्थात समूह में चीज़ों की संख्या 1 से घट जाती है), फिर:

हटाए गयी इकाई का मान = Y + (X - Y)n या X + (X - Y) (n - 1)

### मौजूदा आइटम को नए से बदलना (Replacement of an existing item with a new one)

n मात्राओं का औसत X के बराबर है। जब मान P की एक मात्रा को Q मान वाली एक नई मात्रा से प्रतिस्थापित (replaced) किया जाता है, तो मात्राओं का औसत Y हो जाता है (अर्थात समूह में चीज़ों की संख्या समान रहती है), फिर

नई इकाई का मान, Q = P + (Y - X)n

##### प्र. 13 लड़कियों और 9 लड़कों वाले एक समूह के पास रु. 750 औसत राशि है| जब लड़कों में से एक को, जिसके पास रु. 540 हैं, किसी लड़की के साथ प्रतिस्थापित कर दिया जाता है, तो समूह के पास औसत राशि बढ़कर रु. 790 हो गयी| नई लड़की और बदले गए लड़के के पास रखी राशि में कितना अंतर है?
<pre>(a) रुपये 800   (b) रुपये 880    (c) रुपये 1,120   (d) रुपये 1,200</pre>

व्याख्या :<br>
<button class="mak-tablink tablink-group3 default-tab" onclick="openTab('3Exp-1', this, 'tablink-group3', 'tabcontent-group3')">1</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-2', this, 'tablink-group3', 'tabcontent-group3')">2</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-3', this, 'tablink-group3', 'tabcontent-group3')">3</button>

<div id="3Exp-1" class="Exp-1 mak-tabcontent tabcontent-group3">
व्याख्या 1: पारंपरिक विधि <br><br>

समूह में लोगों की संख्या = 13 लड़कियां + 9 लड़के = 22 <br>

औसत राशि = रु. 750 <br>
कुल राशि = औसत राशि × लोगों की संख्या = रु. 750 × 22

प्रतिस्थापन के बाद, औसत राशि बढ़कर रु. 790 हो गयी <br>
अत: दूसरे मामले में कुल राशि = रु. 790 × 22

नई लड़की और बदले जाने वाले लड़के द्वारा धारित राशि में अंतर = दूसरे मामले में कुल राशि - पहले मामले में कुल राशि = 790 × 22 - 750 × 22 = (790 - 750) × 22 = 40 × 22 = रु. 880

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

क्यूंकि लड़के को लड़की से बदलने के बाद समूह का औसत बढ़ गया, इसलिए लड़की के पास लड़के से रु. 880 अधिक होने चाहियें, अर्थात 540 + 880 = रु. 1,420
</div>

उत्तर: (b)
</div>

<div id="3Exp-2" class="Exp-2 mak-tabcontent tabcontent-group3">
व्याख्या 2: सूत्र विधि <br><br>

n मात्राओं का औसत X के बराबर है। जब मान P की एक मात्रा को Q मान वाली एक नई मात्रा से प्रतिस्थापित किया जाता है, तो मात्राओं का औसत Y हो जाता है (अर्थात समूह में चीज़ों की संख्या समान रहती है), फिर

नई इकाई का मान, Q = P + (Y - X)n

तो, नई लड़की के साथ राशि = P + (Y - X)n = 540 + (790 - 750)22 = 540 + (40 × 22) = रु. 1,420

तो, अभीष्ट अंतर = 1420 - 540 = रु. 880

उत्तर: (b)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

अंतर = (Y - X)n
</div>
</div>

<div id="3Exp-3" class="Exp-3 mak-tabcontent tabcontent-group3">
व्याख्या 3: शॉर्ट ट्रिक विधि <br><br>

समूह का औसत 750 से बढ़कर 790 हो गया।

तो, नई लड़की के साथ राशि कम से कम रु. 540 + बाकी समूह के औसत को बढ़ाने के लिए आवश्यक राशि।

यानी नई लड़की के साथ राशि = बदले गए लड़के के पास जो राशि थी + समूह के सभी सदस्यों का औसत बढ़ाने के लिए आवश्यक राशि <br>
= बदले गए लड़के के पास जो राशि थी + औसत में अंतर × समूह के सदस्यों की कुल संख्या <br>
= 540 + (790 - 750)22 = 540 + (40 × 22) = रु. 1,420

तो, अभीष्ट अंतर = 1420 - 540 = रु. 880

उत्तर: (b)
</div><br>

