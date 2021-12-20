---
author: Mragank Shandilya
title: गणित में बेईमान व्यापारी की अवधारणा (Concept of Dishonest Trader in Maths)
date: "2021-12-19"
description: गणित में बेईमान व्यापारी की अवधारणा (Concept of Dishonest Trader in Maths) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["profit-loss"]
categories: ["profit-and-loss"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/profit-and-loss/dishonest-trader.png" # Sets featured image on blog post.
thumbnail: "images/profit-and-loss/dishonest-trader.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Dishonest Trader, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-profit-loss-and-margin-in-arithmetic" title="Profit and Loss" class="mak-link">अंकगणित में लाभ, हानि और मार्जिन की अवधारणा</a> 
* <a href="../what-is-discount-in-maths" title="Profit and Loss" class="mak-link">छूट की अवधारणा क्या है?</a> 
* <a href="../concept-of-variable-and-fixed-cost-in-maths" title="Profit and Loss" class="mak-link">परिवर्तनीय, अर्ध-परिवर्तनीय और निश्चित लागत</a> 
</div>

## अवधारणा 1: मूल सूत्र (Basic Formulae)

यदि कोई बेईमान व्यापारी अपने माल को लागत मूल्य पर बेचने का दावा करता है, लेकिन गलत वजन का उपयोग करता है, तो: <br><br>

<p> लाभ प्रतिशत = \(\frac{(सही \hspace{1ex} वजन − गलत \hspace{1ex} वजन)}{(गलत \hspace{1ex} वजन)}\) × 100% </p>

या

<p> लाभ प्रतिशत = \(\frac{Error}{(True \hspace{1ex} value − Error)}\) × 100% </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि उपरोक्त सूत्र ऋणात्मक मान देता है, तो इसका अर्थ है कि हानि हुई है।
</div>

* गुणन कारक (Multiplying factor) के संदर्भ में: <br>
<p> धोखाधड़ी के कारण गुणन कारक = \(\frac{दिखाई \hspace{1ex} गयी \hspace{1ex} मात्रा}{असल \hspace{1ex} में \hspace{1ex} बेची \hspace{1ex} गयी \hspace{1ex} मात्रा}\) </p>
(दिखाई गयी मात्रा = वजन पैमाने पर जो मान प्रदर्शित होता है)

##### प्र. एक दुकानदार ने किसी वस्तु को क्रय मूल्य पर बेचा, लेकिन वह 1 किलो के स्थान पर 900 ग्राम वजन का उपयोग करता है। उसका लाभ प्रतिशत कितना रहा होगा ?

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-3', this, 'tablink-group1', 'tabcontent-group1')">3</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-4', this, 'tablink-group1', 'tabcontent-group1')">4</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-5', this, 'tablink-group1', 'tabcontent-group1')">5</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: पारंपरिक विधि <br><br>

मान लें, कि 1000 रुपये में उस चीज़ की 1 किलो मात्रा खरीदी गयी है। 

दुकानदार ने वस्तु को क्रय मूल्य पर बेच दिया। लेकिन चूंकि उसने केवल 900 ग्राम बेचा, इसलिए जो 100 ग्राम उसने बचाया वह उसका लाभ होगा।

तो, C.P. = रु. 900 और S.P. = रु. 1000

लाभ = S.P. - C.P. = 1000 - 900 = रु. 100

तो, लाभ प्रतिशत = (लाभ / C.P.) × 100 = (100 / 900) × 100 = (1 / 9) × 100 = 11.11% 
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: प्रतिशत विधि <br><br>

दुकानदार 1 किलो के स्थान पर 900 ग्राम वजन का उपयोग करता है, यानी 10% की कमी।

अब, हमें 100 पर वापस जाने की जरूरत है। अंतर वही रहता है, यानी 10, लेकिन अब आधार 90 होगा।

संबंधित लाभ प्रतिशत = (10/90) × 100 = 11.11% 
</div>

<div id="1Exp-3" class="Exp-3 mak-tabcontent tabcontent-group1">
व्याख्या 3: भिन्न विधि <br><br>

दुकानदार 1 किलो के स्थान पर 900 ग्राम वजन का उपयोग करता है, यानी 10% की कमी।

10% = 1/10

अंतर वही रहता है, लेकिन नया आधार = 10 - 1 = 9

अत: लाभ प्रतिशत = (1/9) × 100 = 11.11% 
</div>

<div id="1Exp-4" class="Exp-4 mak-tabcontent tabcontent-group1">
व्याख्या 4: फॉर्मूला विधि <br><br>

यदि एक बेईमान व्यापारी अपने माल को लागत मूल्य पर बेचने का दावा करता है, लेकिन गलत वजन का उपयोग करता है, तो:

<p> लाभ प्रतिशत = \(\frac{(सही \hspace{1ex} वजन − गलत \hspace{1ex} वजन)}{(गलत \hspace{1ex} वजन)}\) × 100% = (1000 −900)/900 × 100% = 100/900 × 100% = 11.11% </p>
</div>

<div id="1Exp-5" class="Exp-5 mak-tabcontent tabcontent-group1">
व्याख्या 5: गुणन करक विधि <br><br>

मान लीजिए खरीदी गई मात्रा 1 किग्रा है।

लेकिन चूंकि उसने केवल 900 ग्राम बेचा, इसलिए जो 100 ग्राम उसने बचाया वह उसका लाभ होगा।

<p> धोखाधड़ी के कारण गुणन कारक = \(\frac{दिखाई \hspace{1ex} गयी \hspace{1ex} मात्रा}{असल \hspace{1ex} में \hspace{1ex} बेची \hspace{1ex} गयी \hspace{1ex} मात्रा}\) = 1000 / 900 = 10/9 = 1.1111 </p>

अत: लाभ प्रतिशत = (1.1111 – 1) × 100  =  11.11% 
</div><br>


## अवधारणा 2 

यदि एक बेईमान व्यापारी अपने माल को x% लाभ या हानि पर बेचता है, और y% कम वजन का उपयोग करता है, तो उसका लाभ प्रतिशत या हानि प्रतिशत निम्नलिखित होगा:

<p> \(\frac{(𝑦±𝑥)}{(100−𝑦)}\) × 100% </p>

(यदि सामान x% लाभ पर बेचा जाता है तो + चिह्न का प्रयोग करें, और यदि वे x% हानि पर बेचा जाता है तो - चिह्न लगाएं।)

## अवधारणा 3 

यदि एक बेईमान व्यापारी r इकाइयों के बजाय w इकाइयों के दोषपूर्ण वजन का उपयोग करता है, और p% का लाभ कमाने का दावा करता है, तो:

<p> वास्तविक कुल लाभ प्रतिशत = \(\frac{100 (r - w) + rp}{w}\) </p>

(यदि व्यापारी हानि होने का दावा करता है, तो हम p के लिए - चिह्न का उपयोग करेंगे)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि उपरोक्त सूत्र में ऋणात्मक मान आता है, तो इसका अर्थ है कि हानि हुई है।
</div>

##### प्र. एक दुकानदार एक वस्तु को 25% के लाभ पर बेचता हुआ प्रतीत होता है। लेकिन, वह एक ऐसे वजन का उपयोग करता है जो वास्तव में उस पर बताए गए वजन से 20% कम है। उसका वास्तविक लाभ प्रतिशत कितना होगा ?

व्याख्या :<br>
<button class="mak-tablink tablink-group2 default-tab" onclick="openTab('2Exp-1', this, 'tablink-group2', 'tabcontent-group2')">1</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-2', this, 'tablink-group2', 'tabcontent-group2')">2</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-3', this, 'tablink-group2', 'tabcontent-group2')">3</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-4', this, 'tablink-group2', 'tabcontent-group2')">4</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-5', this, 'tablink-group2', 'tabcontent-group2')">5</button>

<div id="2Exp-1" class="Exp-1 mak-tabcontent tabcontent-group2">
व्याख्या 1: पारंपरिक विधि <br><br>

मान लें, कि 1000 रुपये में उस चीज़ की 1 किलो मात्रा खरीदी गयी है। 

लेकिन चूँकि उसने केवल 800 ग्राम बेचा था, इसलिए उसने जो 200 ग्राम बचाया वह उसका लाभ होगा।

तो, C.P. = रु. 800, और S.P. = रु. 1000

लाभ = S.P. - C.P. = 1000 - 800 = रु. 200

तो, लाभ प्रतिशत = (लाभ / C.P.) × 100 = (200/800) × 100 = (1/4) × 100 = 25%

अभीष्ट लाभ प्रतिशत = 25 + 25 + (25 × 25)/100 = 50 + 6.25 = 56.25% (यहाँ हमने क्रमिक-प्रतिशत का सूत्र ही प्रयोग किया है) 
</div>

<div id="2Exp-2" class="Exp-2 mak-tabcontent tabcontent-group2">
व्याख्या 2: प्रतिशत विधि और भिन्न विधि <br><br>

* प्रतिशत विधि 

दुकानदार एक वस्तु को 25% के लाभ पर बेचते हुए प्रतीत होता है। (यह पहला लाभ है)

लेकिन, वह एक ऐसे वजन का उपयोग करता है जो वास्तव में उस पर बताए गए वजन से 20% कम है।

अब, हमें 100 पर वापस जाने की जरूरत है। अंतर वही रहता है, यानी 20, लेकिन अब आधार 80 होगा।

संबंधित लाभ प्रतिशत = (20/80) × 100 = 25%

तो, 20% कम वजन 25% लाभ के बराबर है। (यह दूसरा लाभ है)

अभीष्ट लाभ प्रतिशत = दो लाभों का परिणाम = 25 + 25 + (25 × 25)/100 = 50 + 6.25 = 56.25% <br>
(यहाँ हमने अभी-अभी क्रमिक प्रतिशतों का सूत्र ही प्रयोग किया है)

* भिन्न विधि 

दुकानदार एक वस्तु को 25% के लाभ पर बेचते हुए प्रतीत होता है। (यह पहला लाभ है)

लेकिन, वह एक ऐसे वजन का उपयोग करता है जो वास्तव में उस पर बताए गए वजन से 20% कम है।

20% = 1/5

अंतर वही रहता है, लेकिन नया आधार = 5 - 1 = 4

तो, लाभ प्रतिशत = (1/4) × 100 = 25% (यह दूसरा लाभ है)

अभीष्ट लाभ प्रतिशत = दो लाभों का परिणाम = 25 + 25 + (25 × 25)/100 = 50 + 6.25 = 56.25% <br>
(यहाँ हमने अभी-अभी क्रमिक प्रतिशतों का सूत्र ही प्रयोग किया है)
</div>

<div id="2Exp-3" class="Exp-3 mak-tabcontent tabcontent-group2">
व्याख्या 3: सूत्र विधि <br><br>

* सूत्र 1 का उपयोग करके

<p> यदि एक बेईमान व्यापारी अपने माल को x% लाभ या हानि पर बेचता है, और y% कम वजन का उपयोग करता है, तो उसका लाभ प्रतिशत या हानि प्रतिशत होगा =  \(\frac{(𝑦±𝑥)}{(100−𝑦)}\) × 100% </p>

= ((20 + 25))/((100 −20)) × 100% = 45/80 × 100% = 9/16 × 100% = 56.25%

* सूत्र 2 का उपयोग करके

यदि एक बेईमान व्यापारी r इकाइयों के बजाय w इकाइयों के दोषपूर्ण वजन का उपयोग करता है, और p% का लाभ कमाने का दावा करता है, तो:

<p> वास्तविक कुल लाभ प्रतिशत = \(\frac{100 (r - w) + rp}{w}\) </p> 

= [100 (100 - 80) + 100 × 25] / 80 = [2000 + 2500] / 80 = 4500/80 = 450/8 = 56.25%
</div>

<div id="2Exp-4" class="Exp-4 mak-tabcontent tabcontent-group2">
व्याख्या 4: गुणन कारक विधि <br><br>

मान लें, कि 1000 रुपये में उस चीज़ की 1 किलो मात्रा खरीदी गयी है। 

लेकिन चूँकि उसने केवल 800 ग्राम बेचा था, इसलिए जो 200 ग्राम उसने बचाया वह उसका लाभ होगा।

800 ग्राम का C.P. = रु. 800, और S.P. = 1000 + 1000 का 25% = 1000 + 250 = रु. 1250

बेची गयी मात्रा में धोखा देने के कारण, गुणन कारक = S.P./C.P. = 1250 / 800 = 125/80 = 1.5625

अत: लाभ प्रतिशत = (1.5625 – 1) × 100  =  56.25% 
</div>

<div id="2Exp-5" class="Exp-5 mak-tabcontent tabcontent-group2">
व्याख्या 5: शॉर्ट ट्रिक विधि <br><br>

मान लेते हैं कि, C.P. = Rs. 100 <br>
<img src="../../../images/profit-and-loss/dishonest-trader1.png" alt="dishonest trader - trick method" style="width:45%;height:45%;">

लाभ प्रतिशत = [(125 - 80) / 80] × 100% = (45/80) × 100% = 56.25%
</div><br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस लेख में चर्चा किए गए दृष्टिकोण और अवधारणाएं, केवल दोषपूर्ण वजन से सम्बंधित समस्याओं तक ही सीमित नहीं हैं, बल्कि ऐसी किसी भी समस्या पर लागू की जा सकती हैं, जहां बेची गई असल मात्रा और जिस मात्रा के लिए शुल्क लिया गया है, वो अलग-अलग हैं।
</div>
