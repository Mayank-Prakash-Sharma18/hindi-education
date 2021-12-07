---
author: Mragank Shandilya
title: आनुक्रमिक प्रतिशत परिवर्तन की अवधारणा (Concept of Successive Percent Change)
date: "2021-12-07"
description: आनुक्रमिक प्रतिशत परिवर्तन की अवधारणा (Concept of Successive Percent Change) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["successive-percentage-change"]
categories: ["percent"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/percent/successive-percentage-change.png" # Sets featured image on blog post.
thumbnail: "images/percent/successive-percentage-change.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Successive Percent Change, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basic-concepts-of-percentage-in-hindi" title="Percent" class="mak-link">Percent Basics</a> 
* <a href="../concept-of-percent-change-in-hindi" title="Percent Change" class="mak-link">Percent Change</a> 
</div>

## आनुक्रमिक प्रतिशत परिवर्तन की अवधारणा

मान लीजिए कि एक संख्या x में a% और फिर b% का प्रतिशत परिवर्तन होता है, तो:

कुल प्रतिशत परिवर्तन ≠ (a + b)% 

क्या आप अनुमान लगा सकते हैं, की ऐसा क्यों है ?

कुल प्रतिशत परिवर्तन दो प्रतिशत परिवर्तनों का साधारण जोड़ नहीं होता है, क्योंकि पहले परिवर्तन के बाद आधार बदल जाता है।

<p> a% परिवर्तन के बाद नया नंबर = x × (1 + \(\frac{a}{100}\))  </p>
यह नया आधार है, यानी आधार बदल गया है।

<p> तो, b% परिवर्तन के बाद नया नंबर = [x × (1 + \(\frac{a}{100})] × (1 + \frac{b}{100}\)) </p>

<p> तो, आनुक्रमिक a% और b% परिवर्तन के बाद नई संख्या = x × (\(\frac{a}{100}) × (\frac{b}{100}) = x × [1 + \frac{𝑎 + 𝑏 + \frac{ab}{100}}{100}\)] </p>

<p> तो, कुल प्रतिशत परिवर्तन = <strong><span class="mak-text-color">𝑎 + 𝑏 + \(\frac{ab}{100}\)</span></strong> </p>

परिवर्तन (Net Change) वृद्धि है या कमी है, यह अंतिम परिणाम के संकेत से ज्ञात होगा| यदि अंतिम परिणाम घनात्मक (positive) है, तो इसका मतलब है की वृद्धि हुई है, मगर अगर अंतिम परिणाम नकारात्मक (negative) है, तो इसका मतलब है की कमी हुई है।

यदि 2 से अधिक लगातार प्रतिशत परिवर्तन होते हैं, तो हम दो-दो की जोड़ी में क्रमिक रूप से प्रतिशत परिवर्तन सूत्र लागू कर सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

क्रमिक प्रतिशत वृद्धि / कमी में, प्रतिशत का क्रम मायने नहीं रखता। आप किसी को भी पहले लगा सकते हैं, जवाब वही मिलेगा।

<p> क्यूंकि, x × (1 + \(\frac{a}{100}) × (1 + \frac{b}{100}) = x × (1 + \frac{b}{100}) × (1 + \frac{a}{100}\)) </p>
</div>

##### प्र. यदि मृगांक का वेतन पहले वर्ष 20% और अगले वर्ष 10% बढ़ जाता है, तो इन 2 वर्षों में उसके वेतन में कुल प्रतिशत वृद्धि क्या होगी?

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-3', this, 'tablink-group1', 'tabcontent-group1')">3</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-4', this, 'tablink-group1', 'tabcontent-group1')">4</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-5', this, 'tablink-group1', 'tabcontent-group1')">5</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: पारंपरिक पद्धति का उपयोग करके <br><br>

माना मृगांक का वेतन x है 

प्रथम वर्ष के बाद मृगांक का वेतन = x × (120/100) = 1.2x

दूसरे वर्ष के बाद मृगांक का वेतन = 1.2x × (110/100) = 1.2x × 1.1 = 1.32x

तो, कुल प्रतिशत वृद्धि = [(1.32x - x)/x] × 100 = (0.32x/x) × 100 = 0.32 × 100 = 32%
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: गुणन कारकों की अवधारणा का उपयोग करके <br><br>

पहला गुणन कारक = 1.2<br>
दूसरा गुणन कारक = 1.1<br>
कुल गुणन कारक = 1.2 × 1.1 = 1.32<br>
तो, कुल प्रतिशत वृद्धि = 32%
</div><br>

<div id="1Exp-3" class="Exp-3 mak-tabcontent tabcontent-group1">
व्याख्या 3: सूत्र विधि <br><br>

कुल प्रतिशत परिवर्तन ≠ (a + b)% 

<p> कुल प्रतिशत वृद्धि = (𝑎 + 𝑏 + \(\frac{ab}{100})% = (20 + 10 + \frac{20 × 10}{100}\))% = (30 + 2)% = 32% </p>
</div>

<div id="1Exp-4" class="Exp-4 mak-tabcontent tabcontent-group1">
व्याख्या 4: प्रतिशत विधि <br><br>

मान लीजिये कि मृगांक का शुरुआती वेतन 100 रुपये है

20% वृद्धि के बाद वेतन = 100 + 20 = रु 120 <br>
10% और वृद्धि के बाद वेतन = 120 + 12 = रु 132<br>
तो, कुल प्रतिशत वृद्धि = 32%
</div><br>

<div id="1Exp-5" class="Exp-5 mak-tabcontent tabcontent-group1">
व्याख्या 5: भिन्नों का उपयोग करके <br><br>

20% ≡ 1/5 <br>
प्रथम वर्ष के बाद नया वेतन = 5 + 1 = 6 <br>
प्रथम वर्ष के बाद वेतन, का मूल वेतन के साथ अनुपात = 6/5

10% ≡ 1/10 <br>
दूसरे वर्ष के बाद नया वेतन = 10 + 1 = 11 <br>
दूसरे वर्ष के बाद वेतन, का पहले वर्ष के बाद वेतन से अनुपात = 11/10

दूसरे वर्ष के बाद वेतन, का मूल वेतन से अनुपात = (11/10) × (6/5) = 33/25

तो, कुल प्रतिशत वृद्धि = [(33 - 25)/25] × 100 = (8/25) × 100 = 32%
</div>

##### प्र. एक व्यक्ति ने एक शेयर में एक निश्चित राशि का निवेश किया था। शेयर एक दिन में 100% बढ़ा, और अगले दिन 50% गिर गया। व्यक्ति द्वारा प्राप्त किए गए लाभ/हानि का प्रतिशत कितना है?
(a) 50% लाभ <br>				
(b) 0% लाभ <br>	
(c) 50% हानि <br>			
(d) निर्धारित नहीं किया जा सकता

व्याख्या:<br>
<div class="Exp">

यदि किसी संख्या में 100% की वृद्धि की जाती है, तो वह दुगनी हो जाती है। इसी तरह 50% कम होने पर यह आधा हो जाती है।

इसलिए, उसके पास जो अंतिम राशि थी, वह मूल राशि के समान ही होगी। अर्थार्थ, कोई लाभ नहीं, कोई नुकसान नहीं।

उत्तर: (b)
</div> <br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

सुझाव:

<strong><span class="mak-text-color">कुल प्रतिशत परिवर्तन सूत्र पद्धति</span></strong> का उपयोग तब करें, यदि दिया गया प्रतिशत डेटा पूर्णांकों में हो, लेकिन वो पूर्णांक अजीब से हों, जैसे की 17% की वृद्धि, 19% की वृद्धि - इस प्रकार के डेटा में प्रतिशत विधि या भिन्न विधि का उपयोग करना कठिन होगा| 

यदि दिया गया प्रतिशत डेटा ऐसे पूर्णांकों में है जो आसान हों (जैसे 20% वृद्धि, 15% वृद्धि), तो <strong><span class="mak-text-color">प्रतिशत विधि</span></strong> का उपयोग करें - इस प्रकार के डेटा में आप या तो सूत्र विधि या भिन्न विधि का उपयोग कर सकते हैं, लेकिन प्रतिशत विधि सबसे तेज़ साबित होगी| 

<strong><span class="mak-text-color">भिन्न विधि</span></strong> का उपयोग करें यदि दिया गया प्रतिशत डेटा ऐसे दशमलव में हो, जिन्हें भिन्नों में परिवर्तित करना आसान हो (जैसे 16.67% की वृद्धि, 12.5% ​​की वृद्धि) - इस प्रकार के डेटा में प्रतिशत विधि या सूत्र विधि का उपयोग करना कठिन होगा| 
</div>

##### प्र. यदि किसी पुस्तक की कीमत में 22.22% की कमी की जाती है, और फिर 50% की वृद्धि की जाती है, तो उसके मूल्य में कुल प्रतिशत परिवर्तन कितना हुआ होगा ?

व्याख्या: भिन्नों का उपयोग करके <br>
<div class="Exp">
22.22% ≡ 2/9 <br>
नई कीमत = 9 - 2 = 7 <br>
नई कीमत/मूल कीमत का अनुपात = 7/9

50% ≡ 1/2 <br>
नई कीमत = 2 + 1 = 3 <br>
नई कीमत/मूल कीमत का अनुपात = 3/2

अंतिम मूल्य / मूल मूल्य का अनुपात = (7/9) × (3/2) = 7/6 <br>
तो, कुल प्रतिशत वृद्धि = [(7 - 6)/6] × 100 = (1/6) × 100 = 16.67%
</div> <br>

## विशेष मामला (Special case)

जब हम कुल प्रतिशत परिवर्तन सूत्र का उपयोग करते हैं, तो हमें कभी-कभी एक विशेष स्थिति का सामना करना पड़ता है।

* यदि किसी संख्या में पहले a% की वृद्धि की जाती है, और फिर उसमें a% की कमी की जाती है, तो कुल प्रभाव हमेशा कमी होने वाला होता है : <br>
<p> a – a – \(\frac{a^2}{100} = - \frac{a^2}{100}\)% </p>

* यह कुल प्रतिशत परिवर्तन समान रहेगा, भले ही उस संख्या को पहले a% घटाया जाए और फिर इसे a% बढ़ा दिया जाए। <br>
<p> -a + a – \(\frac{a^2}{100} = - \frac{a^2}{100}\)% </p>

<p> तो, दोनों ही मामलों में उत्तर एक ही है, यानी <strong><span class="mak-text-color">- \(\frac{a^2}{100}\)%</span></strong> </p>

##### प्र. यदि एक जूट बैग की कीमत में 20% की वृद्धि की जाती है, और फिर 20% की कमी की जाती है, तो इसकी कीमत में कुल प्रतिशत परिवर्तन क्या होगा?

व्याख्या :<br>
<button class="mak-tablink tablink-group2 default-tab" onclick="openTab('2Exp-1', this, 'tablink-group2', 'tabcontent-group2')">1</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-2', this, 'tablink-group2', 'tabcontent-group2')">2</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-3', this, 'tablink-group2', 'tabcontent-group2')">3</button>

<div id="2Exp-1" class="Exp-1 mak-tabcontent tabcontent-group2">
व्याख्या 1: सूत्र विधि <br><br>

<p> कुल प्रतिशत वृद्धि = - \(\frac{a^2}{100}% = - \frac{20^2}{100}% = - \frac{400}{100}\)% = -4% </p>
</div>

<div id="2Exp-2" class="Exp-2 mak-tabcontent tabcontent-group2">
व्याख्या 2: प्रतिशत विधि <br><br>

मान लेते हैं, कि जूट बैग की शुरुआती कीमत 100 रुपये है <br>
20% वृद्धि के बाद मूल्य = 100 + 20 = 120 रुपये<br>
इसके बाद, 20% की कमी के बाद कीमत = 120 - 24 = रु 96<br>
तो, कुल प्रतिशत कमी = -4%
</div>

<div id="2Exp-3" class="Exp-3 mak-tabcontent tabcontent-group2">
व्याख्या 3: भिन्न विधि <br><br>

20% की वृद्धि ≡ 1/5 <br>
नई कीमत = 5 + 1 = 6 <br>
नई कीमत/मूल कीमत का अनुपात = 6/5

20% की कमी ≡ 1/5 <br>
नई कीमत = 5 - 1 = 4 <br>
नई कीमत/मूल कीमत का अनुपात = 4/5

अंतिम मूल्य / मूल मूल्य का अनुपात = (6/5) × (4/5) = 24/25 <br>
तो, कुल प्रतिशत कमी = [(25 - 24)/25] × 100 = (1/25) × 100 = 4%
</div><br>

<br><hr><br>

## z = x × y 

मान लीजिए कि दो मात्राएँ x और y हैं, जो गुणा करके एक मात्रा z बनाती हैं। हम कह सकते हैं: <br>
z = x × y

मान लें कि x को a% बदल दिया जाता है, और y को b% बदल दिया जाता है, तो:<br>
<p> z = x (1 + \(\frac{a}{100}) × y (1 + \frac{b}{100}) = x y × [1 + \frac{𝑎 + 𝑏 + \frac{ab}{100}}{100}
] = z × [1 + \frac{𝑎 + 𝑏 + \frac{ab}{100}}{100}\)] </p>

तो x और y को क्रमशः a% और b% से बदलने का मतलब है, कि z इतना बदल जायेगा : <br>
<p> 𝑎 + 𝑏 + \(\frac{ab}{100}\) </p>

तो, प्रश्न मूल रूप से यह रह जाता है:<br>
यदि z को क्रमिक रूप से a% और फिर b% से बदला जाता है, तो कुल प्रतिशत परिवर्तन क्या है?

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

अर्थात्, x को a% और y को b% से बदलना ≡ z को क्रमिक रूप से a% और b% से बदलना

</div>

आइए, कुछ उदाहरण देखें:

##### प्र. यदि एक आयत की लंबाई 40% बढ़ जाती है, और चौड़ाई 20% घट जाती है, तो क्षेत्रफल में कुल परिवर्तन कितना होगा ?

व्याख्या :<br>
<button class="mak-tablink tablink-group3 default-tab" onclick="openTab('3Exp-1', this, 'tablink-group3', 'tabcontent-group3')">1</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-2', this, 'tablink-group3', 'tabcontent-group3')">2</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-3', this, 'tablink-group3', 'tabcontent-group3')">3</button>
<button class="mak-tablink tablink-group3" onclick="openTab('3Exp-4', this, 'tablink-group3', 'tabcontent-group3')">4</button>

<div id="3Exp-1" class="Exp-1 mak-tabcontent tabcontent-group3">
व्याख्या 1: सूत्र विधि <br><br>

<p> कुल प्रतिशत परिवर्तन = (𝑎 + 𝑏 + \(\frac{ab}{100})% = (40 - 20 - \frac{40 × 20}{100}\))% = (20 − 8)% = 12% </p>

</div>

<div id="3Exp-2" class="Exp-2 mak-tabcontent tabcontent-group3">
व्याख्या 2: गुणन कारकों की अवधारणा का उपयोग करके <br><br>

प्रथम गुणन कारक = 1.40 <br>
दूसरा गुणन कारक = 0.80 <br>
कुल गुणन कारक = 1.4 × 0.8 = 1.12 <br>

तो, कुल प्रतिशत वृद्धि = 12%
</div>

<div id="3Exp-3" class="Exp-3 mak-tabcontent tabcontent-group3">
व्याख्या 3: प्रतिशत विधि <br><br>

माना आयत का प्रारंभिक क्षेत्रफल 100 है <br> 
लंबाई में 40% वृद्धि के बाद क्षेत्रफल = 100 + 40 = 140 <br>
चौड़ाई में 20% कमी के बाद क्षेत्रफल = 140 - 28 = 112 <br>

तो, कुल प्रतिशत वृद्धि = 12%
</div>

<div id="3Exp-4" class="Exp-4 mak-tabcontent tabcontent-group3">
व्याख्या 4: भिन्न विधि <br><br>

40% वृद्धि ≡ 2/5 <br>
नई लंबाई = 5 + 2 = 7 <br>
नई लंबाई/मूल लंबाई का अनुपात = 7/5

20% की कमी ≡ 1/5 <br>
नई चौड़ाई = 5 - 1 = 4 <br>
नई चौड़ाई / मूल चौड़ाई का अनुपात = 4/5

अंतिम क्षेत्रफल/मूल क्षेत्रफल का अनुपात = (7/5) × (4/5) = 28/25 <br>

तो, कुल प्रतिशत वृद्धि = [(28 - 25)/25] × 100 = (3/25) × 100 = 12%
</div><br>

##### प्रश्न. एक घनाभ की लंबाई और चौड़ाई में क्रमशः 10% और 20% की वृद्धि की जाती है, जबकि इसकी ऊंचाई में 30% की कमी की जाती है। घनाभ के आयतन में कुल कितने प्रतिशत वृद्धि/कमी होनी चाहिए?

व्याख्या :<br>
<button class="mak-tablink tablink-group4 default-tab" onclick="openTab('4Exp-1', this, 'tablink-group4', 'tabcontent-group4')">1</button>
<button class="mak-tablink tablink-group4" onclick="openTab('4Exp-2', this, 'tablink-group4', 'tabcontent-group4')">2</button>
<button class="mak-tablink tablink-group4" onclick="openTab('4Exp-3', this, 'tablink-group4', 'tabcontent-group4')">3</button>

<div id="4Exp-1" class="Exp-1 mak-tabcontent tabcontent-group4">
व्याख्या 1: सूत्र विधि <br><br>

घनाभ का आयतन = l × b × h

चूंकि यहां 3 चर शामिल हैं, इसलिए हमें सूत्र का दो बार उपयोग करना होगा।

<p> l और b की शुद्ध प्रतिशत वृद्धि = (𝑎 + 𝑏 + \(\frac{ab}{100})% = (10 + 20 + \frac{10 × 20}{100}\))% = (30+2)% = 32% </p>

<p> (l और b) और h की शुद्ध प्रतिशत वृद्धि = (𝑎 + 𝑏 + \(\frac{ab}{100})% = (32 - 30 - \frac{32 × 30}{100}\))% = (2 − 9.6)% = -7.6% </p>

अत: घनाभ के आयतन में प्रतिशत कमी = 7.6%
</div>

<div id="4Exp-2" class="Exp-2 mak-tabcontent tabcontent-group4">
व्याख्या 2: प्रतिशत विधि <br><br>

मान लीजिए प्रारंभिक आयतन 100 है। <br>
10% वृद्धि के बाद, आयतन = 100 + 100 का 10% = 100 + 10 = 110 <br>
इसके बाद, 20% वृद्धि के बाद, आयतन = 110 + 110 का 20% = 110 + 22 = 132 <br>
इसके बाद, 30% की कमी के बाद, आयतन = 132 - 30% of 132 = 132 – (3 × 13.2) = 132 – 39.6 = 92.4

अत: घनाभ के आयतन में प्रतिशत कमी = 100 – 92.4 = 7.6%
</div>

<div id="4Exp-3" class="Exp-3 mak-tabcontent tabcontent-group4">
व्याख्या 3: भिन्न विधि <br><br>

10% वृद्धि ≡ 1/10 <br>
20% की वृद्धि ≡ 1/5 <br>
30% की कमी ≡ 3/10

अंतिम आयतन / मूल आयतन का अनुपात = (11/10) × (6/5) × (7/10) = 462/500

तो, कुल प्रतिशत कमी = [(500 - 462)/500] × 100 = (38/500) × 100 = 7.6%
</div><br>

<br><hr><br>

## तीन या अधिक वर्षों के लिए क्रमिक प्रतिशत परिवर्तन (Successive Percent Change for three or more years)

### अगर विकास दर सतत है (Constant Growth Rate)

यदि किसी शहर की जनसंख्या P है, और इसे प्रति वर्ष r% की दर से बढ़ाया जाता है (अर्थात विकास दर साल-दर-साल स्थिर है), तो

<p> (a) n वर्षों के बाद जनसंख्या, \(P_n = P (1 + \frac{r}{100})^n\) </p>

<p> (b) n वर्षों पहले की जनसंख्या, P = \(\frac{P_n}{(1 + \frac{r}{100})^n}\) </p>

### अगर विकास दर बदल रही है (Variable Growth Rate)

<p> यदि किसी शहर की जनसंख्या P है, और पहले वर्ष में \(r_1%\), दूसरे वर्ष में \(r_2%\), और तीसरे वर्ष में \(r_3%\) की दर से बढ़ती है (अर्थात विकास दर हर साल भिन्न होती है), तो </p>

<p> (a) 3 वर्षों के बाद जनसंख्या, \(P_3 = P (1 + \frac{r_1}{100}) (1 + \frac{r_2}{100}) (1 + \frac{r_3}{100})\) </p>

<p> (b) 3 वर्षों पहले की जनसंख्या, P = \(\frac{P_3}{(1 + \frac{r_1}{100}) (1 + \frac{r_2}{100}) (1 + \frac{r_3}{100})}\) </p>   

<br>

<p> यदि किसी मशीन का वर्तमान मूल्य P है, और उसकी मूल्यह्रास दर (depreciation rates) \(r_1%\), \(r_2%\), और \(r_3%\) वार्षिक है (अर्थात मूल्यह्रास कास दर हर साल भिन्न होती है), तो </p>

<p> (a) 3 साल बाद मशीन का मूल्य, \(P_3 = P (1 - \frac{r_1}{100}) (1 - \frac{r_2}{100}) (1 - \frac{r_3}{100})\) </p>

<p> (b) 3 साल पहले मशीन का मूल्य, P = \(\frac{P_3}{(1 - \frac{r_1}{100}) (1 - \frac{r_2}{100}) (1 - \frac{r_3}{100})}\) </p> 

<br><hr><br>

## प्रतिशत का प्रतिशत (Percent of a Percent)

<p> y का x% =  \(\frac{x}{100}\) × y </p>

<p> y के x% का z% = \(\frac{z}{100} × \frac{x}{100}\) × y </p>

और इसी तरह आगे भी।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आप यह देख सकते हैं, कि जिस क्रम में हम इन प्रतिशतों को लागू करते हैं वह महत्वपूर्ण नहीं है:

<p> y के x% का z% = \(\frac{z}{100} × \frac{x}{100}\) × y </p>

<p> y के z% का x% = \(\frac{x}{100} × \frac{z}{100}\) × y </p>

तो, y के x% का z% = y के z% का x%
</div>

##### प्र. 90 के 50% का 20% क्या है?

व्याख्या :<br>
<button class="mak-tablink tablink-group5 default-tab" onclick="openTab('5Exp-1', this, 'tablink-group5', 'tabcontent-group5')">1</button>
<button class="mak-tablink tablink-group5" onclick="openTab('5Exp-2', this, 'tablink-group5', 'tabcontent-group5')">2</button>

<div id="5Exp-1" class="Exp-1 mak-tabcontent tabcontent-group5">
व्याख्या 1:  <br><br>

<p> 90 का 50% = \(\frac{50}{100}\) × 90 = 45 </p>

<p> 45 का 20% = \(\frac{20}{100}\) × 45 = 9 </p>
</div>

<div id="5Exp-2" class="Exp-2 mak-tabcontent tabcontent-group5">
व्याख्या 2: गुणन कारकों की अवधारणा का उपयोग करके <br><br>

90 के 50% का 20% = 0.2 × 0.5 × 90 = 9
</div><br>

