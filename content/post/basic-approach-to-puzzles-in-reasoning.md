---
author: Mragank Shandilya
title: पजल कैसे हल करें? (Puzzles kaise solve karein?)
date: "2021-12-18"
description: पजल कैसे हल करें? (Puzzles kaise solve karein?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["puzzle-approach"]
categories: ["puzzles"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/puzzles/puzzle-1.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/puzzles/puzzle-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basic Approach to Puzzles, in Hindi</strong>

पजल अनुभाग सभी योग्यता परीक्षाओं (CAT, GRE, GMAT, SSC, बैंकिंग, आदि) का एक महत्वपूर्ण खंड है, और अक्सर कई लोगों के लिए सबसे चुनौतीपूर्ण होता है। हालाँकि, एक बार जब कोई व्यक्ति उपयुक्त तकनीकों का उपयोग करके निरंतर अभ्यास के माध्यम से इसपर पकड़ विकसित कर लेता है, तो यह सबसे अधिक स्कोरिंग वर्गों में से एक बन सकता है।

कुछ विषय जिन्हें पज़ल का हिस्सा माना जाता है, वे हैं बैठकी व्यवस्थीकरण (Seating Arrangement) - रैखिक व्यवस्थीकरण (Linear Arrangement) और वृतीय व्यवस्थीकरण (Circular Arrangement), द्वि-पंक्ति बैठकी व्यवस्था (Double Row Arrangement), आयताकार व्यवस्था (Rectangular Arrangement); तुलना (Comparison), समय सारणी (Scheduling), चयन (Selection), आदि। यह आम तौर पर 4-5 प्रश्नों के सेट के रूप में दिया जाता है। (हालांकि SSC Tier I में अधिकांश पजल प्रश्न बहुत ही सरल होते हैं, और समूह में नहीं दिए जाते हैं।)

पज़ल सेट को जल्दी से हल करने से, आप 4-5 प्रश्नों को एक साथ हल कर सकते हैं। दूसरी ओर, यदि आप फंस जाते हैं, तो आप न केवल उस सेट को दिए गए अंकों को खो देंगे, बल्कि उस कीमती समय को भी बर्बाद कर देंगे जिसका उपयोग अन्य प्रश्नों को हल करने में किया जा सकता था।

इसलिए, पज़ल खंड को हल करने के लिए एक बहुत ही व्यवस्थित कार्यप्रणाली (systematic approach) अपनाने की आवश्यकता होती है। नीचे वर्णित कार्यप्रणाली किसी भी प्रकार के पज़ल सेट पर लागू होती है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../comparison-and-ranking-puzzles-in-reasoning" title="Puzzles" class="mak-link">तुलना और रैंकिंग पजल क्या होती हैं?</a> 
* <a href="../position-test-in-reasoning" title="Puzzles" class="mak-link">स्थिति पजल</a> 
* <a href="../sequence-and-ordering-puzzles-in-reasoning" title="Puzzles" class="mak-link">अनुक्रम और क्रम पजल</a> 
* <a href="../seating-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">बैठक व्यवस्था पजल कैसे हल करें?</a> 
* <a href="../linear-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">रैखिक व्यवस्था पजल</a> 
* <a href="../circular-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">वृत्ताकार बैठक व्यवस्था पजल</a> 
</div>

## पहेली सेट को हल करने के तरीके

### शामिल आयामों का पता लगाना

कोई भी पज़ल सेट, एक या अधिक आयामों पर आधारित होता है, जैसे की, बैठने की व्यवस्था, लोगों के बीच संबंध, पेशा, आदि। आम तौर पर जितने अधिक आयाम शामिल होते हैं, उस सेट को हल करना उतना ही कठिन होता जाता है। निम्नलिखित उदाहरणों पर एक नज़र डालें:

#### सेट 1

P, T से लंबा और S से छोटा है। R, Q से लंबा है, जो T से छोटा है। R, S से छोटा है और P से लंबा है। उन्हें अवरोही ऊंचाई के क्रम में व्यवस्थित करें।

**सेट 1 का विश्लेषण**: यहां 5 लोग हैं जिनकी तुलना ऊंचाई के एक आयाम पर की गई है।

#### सेट 2

बैठक व्यवस्था में एक अभिनेता, निर्देशक, अभिनेत्री, निर्माता और संगीतकार हैं। उनके नाम G, H, J, K, L हैं, जरूरी नहीं कि इसी क्रम में हों। यह भी दिया गया है कि:

I. अभिनेता को बीच में बैठना चाहिए <br>
II. निर्माता, संगीतकार के बगल में नहीं बैठना चाहता <br>
III. L निर्देशक हैं <br>
IV. अभिनेत्री और निर्माता, अभिनेता के दोनों ओर बैठना चाहते हैं <br>
V. H अभिनेता नहीं है <br>
VI. अभिनेता, J या L के बगल में नहीं बैठना चाहता <br>
VII. G, जो निर्माता है, अपनी लकी नंबर सीट 4 पर बैठना चाहता है <br>
VIII. H, K और J के बीच बैठना चाहता है

**सेट 2 का विश्लेषण**: सेट 2 में भी 5 लोग हैं, जैसे सेट 1 थे। परन्तु, इसमें दो आयाम शामिल हैं, यानी बैठने का क्रम और उनके पेशे। इसलिए, जहां तक ​​कठिनाई स्तर का संबंध है, सेट 2 सेट 1 से ज्यादा कठिन होगा।

किसी भी उम्मीदवार को किसी पजल सेट को हल करने का प्रयास करने से पहले, 10-12 सेकंड के भीतर उस पजल सेट में शामिल आयामों का पता लगाने का प्रयास करना चाहिए।

यह आपको सेट के कठिनाई स्तर और इसे हल करने में लगने वाले अनुमानित समय के बारे में एक अंदाज़ा देगा। ऐसे सेट को हल करना अधिक व्यावहारिक होगा जिसे जल्दी और आसानी से हल किया जा सकता है। 

हालाँकि, किसी पजल सेट को चुनते या छोड़ते समय एक और मानदंड को ध्यान में रखा जाना चाहिए - उस सेट से जुड़े प्रश्नों की संख्या। आम तौर पर, जब एक बार किसी पजल सेट को हल कर दिया जाता है, तो इसपर आधारित प्रश्नों को हल करने में ज्यादा समय नहीं लगता है। तो, अगर किसी पजल सेट में कई प्रश्न हैं, तो उसे हल करना फायदे का सौदा हो सकता है| 

चुनने की यह कला अभ्यास से ही विकसित होगी।

हालांकि, आदर्श रूप से हमारा लक्ष्य रीजनिंग सेक्शन के सभी प्रश्नों को हल करना होना चाहिए। लेकिन कुछ परीक्षाओं जैसे बैंक मेन्स, MBA परीक्षाओं, आदि में यह संभव नहीं होता है।

### सही सारणी या आरेख चुनना (Choosing the right table or diagram)

पजल सेट में दी गई जानकारी को निरूपित करने के लिए हमेशा एक टेबल या आरेख बनाने की सलाह दी जाती है। हालाँकि, जिस प्रकार की सारणियाँ चुनी जानी हैं, या बनाए जाने वाले आरेख, इस तरह के होने चाहियें कि अधिकांश जानकारी आसानी से प्रदर्शित हो जाए और डेटा से जानकारी निकालना सुविधाजनक हो।

एक या दो आयामों को शुरुआती बिंदुओं के रूप में चुना जा सकता है, जिसके आधार पर टेबल/आरेख तैयार किए जा सकते हैं। उदाहरण के लिए, किसी वृतीय व्यवस्थीकरण (Circular Arrangement) पजल में, हम एक वृत्त आरेख बना सकते हैं और लोगों को उनके स्थानों पर रख सकते हैं। अर्थात्, यहां विभिन्न लोगों की स्थिति शुरुआती बिंदु के रूप में कार्य करेगी, और फिर हम इस आरेख में अन्य पहलुओं को जोड़ेंगे, जैसे उनके पेशे, उनकी कमीज का रंग, आदि।

इस सबका अध्ययन हम बाद के लेखों में विस्तृत रूप से करेंगे, जहाँ हम प्रत्येक प्रकार के पजल के लिए उपयुक्त डेटा निरूपण देखेंगे। इसे सिखाने और सीखने का सबसे अच्छा तरीका उदाहरणों के माध्यम से ही है।

### तालिकाओं को डेटा से भरना (Filling the tables with data)

शुरूआती बिंदु से संबंधित सभी जानकारी तालिकाओं/आरेखों में भरी जानी चाहिए। जो जानकारी उपयोग की जा चुकी है उसका ध्यान रखें।

### छुपी हुई जानकारी निकालना (Read between the lines)

शुरूआती बिंदु से संबंधित सभी जानकारी तालिकाओं/आरेखों में भरने के बाद, आपको छुपी हुई जानकारी निकालने पर ध्यान देना चाहिए|  

हालाँकि, कभी-कभी दिया गया डेटा तालिका (या तालिकाओं) को पूरी तरह से भरने के लिए पर्याप्त नहीं होता है। इस तरह के पजल सेट में प्रश्नों को इस तरह से तैयार किया जाता है, कि या तो उत्तर पाने के लिए अनुपस्थित डेटा की आवश्यकता नहीं होती है, या आगे पूछे गए प्रश्न स्वयं हमें उनको हल करने में सक्षम बनाने के लिए कुछ और डेटा प्रदान करते हैं। इसलिए, सेट में पूछे गए प्रश्नों पर एक नज़र डालना हमेशा बुद्धिमानी भरा काम होता है।

ऊपर सुझाए गए तौर-तरीके कुछ उदाहरणों के उपयोग से स्पष्ट हो जाएंगे। आइए, ऊपर दिए गए सेट 2 को हल करके इसकी शुरुआत करते हैं।

#### उदाहरण 1 

बैठने की व्यवस्था में एक अभिनेता, निर्देशक, अभिनेत्री, निर्माता और संगीतकार हैं। उनके नाम G, H, J, K, L हैं, जरूरी नहीं कि इसी क्रम में हों। यह भी दिया गया है कि:

I. अभिनेता को बीच में बैठना चाहिए <br>
II. निर्माता, संगीतकार के बगल में नहीं बैठना चाहता <br>
III. L निर्देशक हैं <br>
IV. अभिनेत्री और निर्माता, अभिनेता के दोनों ओर बैठना चाहते हैं <br>
V. H अभिनेता नहीं है <br>
VI. अभिनेता J या L के बगल में नहीं बैठना चाहता <br>
VII. G, जो निर्माता है, अपनी लकी नंबर सीट 4 पर बैठना चाहता है <br>
VIII. H, K और J के बीच बैठना चाहता है

##### अभिनेता कौन है?
<pre>(a) G  (b) H  (c) K  (d) L</pre>

##### निर्देशक कहाँ बैठते हैं?
<pre>(a) पहला स्थान (b) दूसरा स्थान (c) तीसरा स्थान (d) पाँचवा स्थान</pre>


##### उदाहरण 1 के लिए स्पष्टीकरण

हम पहले ही चर्चा कर चुके हैं कि इस सेट में 2 आयाम शामिल हैं, अर्थात् बैठने का क्रम और उनके पेशे। अब हम लोगों के पेशे को दर्शाने वाली एक टेबल बनाएंगे, और उन 5 लोगों के बैठने की व्यवस्था को दर्शाने वाली एक आकृति बनाएंगे।

एक बार जब हमने टेबल / डायग्राम बनाने का फैसला कर लिया, तो हम उन्हें संबंधित जानकारी से भरना शुरू कर देंगे।

कथन I, III, IV, V, VI और VII का उपयोग करते हुए, हमें निम्नलिखित चित्र प्राप्त होता है: <br>
<img src="../../../images/reasoning/puzzles/puzzle-1.png" alt="puzzles" style="width:81%;height:81%;"> <br>
<img src="../../../images/reasoning/puzzles/puzzle-2.png" alt="puzzles" style="width:90%;height:90%;">

पाठक ध्यान दें कि हमने पहले दौर में कथन II और VIII में दी गई जानकारी को छोड़ दिया है। आइए समझते हैं क्यों?

कथन II कहता है कि निर्माता, संगीतकार के बगल में नहीं बैठना चाहता। यह दो व्यवसायों के बीच संबंध दे रहा है। परन्तु, हमारा चित्र बैठने की व्यवस्था और लोगों और व्यवसायों के साथ इसके संबंध पर आधारित है। इसी प्रकार हमारे द्वारा तैयार की गई तालिका व्यक्तियों और व्यवसायों के बीच के संबंध को दर्शाती है।

कथन VIII एक व्यक्ति H के अन्य लोगों K और J के साथ संबंध के बारे में जानकारी देता है। इसलिए इस जानकारी को पहले दौर में हमारे द्वारा तैयार की गई तालिका या आकृति में नहीं रखा जा सकता है।

हालांकि, एक बार जब हमने संबंधित जानकारी के साथ तालिकाओं/आंकड़ों को भर दिया है, तो शेष आंकड़े/तालिका को भरने के लिए छुपी हुई जानकारी को ढूंढने का समय आ गया है। हम इसे कथन II और VIII में लिखी जानकारी का उपयोग करके करेंगे।

कथन V और VIII का उपयोग करते हुए, हम यह अनुमान लगा सकते हैं कि H एक अभिनेता नहीं है, इसलिए वह बीच की स्थिति में बैठा नहीं हो सकता है। अब, हम पहले से ही जानते हैं कि J/L अंतिम छोर पर बैठा है और G चौथे स्थान पर बैठा है। इसलिए, H को K और J के बीच दूसरे स्थान पर बैठा होना चाहिए। इसलिए, J को पहले स्थान पर और L को 5वें स्थान पर बैठा होना चाहिए। साथ ही, जैसा कि हम तालिका से जानते हैं कि G निर्माता है। इसलिए, H अवश्य ही अभिनेत्री होगी।

कथन II से, हम यह निष्कर्ष निकाल सकते हैं कि L संगीतकार नहीं हो सकता। इसलिए, वह निदेशक होना चाहिए और J संगीतकार होना चाहिए। <br>
<img src="../../../images/reasoning/puzzles/puzzle-3.png" alt="puzzles" style="width:81%;height:81%;"> <br>
<img src="../../../images/reasoning/puzzles/puzzle-4.png" alt="puzzles" style="width:90%;height:90%;">

इसलिए, K अभिनेता है, और निर्देशक 5वें स्थान पर बैठता है।

आइए, एक और उदाहरण पर चर्चा करें:

#### उदाहरण 2

एक बाइक रैली में विभिन्न कंपनियों - A, B, C, D, E, F और G की सात बाइकें खड़ी हैं। यह ज्ञात है कि:

I. A, G के ठीक दायीं ओर है। <br>
II. G, C के दायें और चौथा है। <br>
III. D, B और F के बीच में है। <br>
IV. C, जो B के बायें से तीसरे स्थान पर है, एक छोर पर है।

##### निम्नलिखित में से कौन सी E की सही स्थिति है?
(a) A के ठीक बाईं ओर <br>
(b) F के ठीक बाईं ओर <br>
(c) F और G के बीच <br>
(d) D के दायें और चौथा स्थान

##### उदाहरण 2 के लिए स्पष्टीकरण

इस सेट में केवल एक आयाम शामिल है, यानी बाइक की खड़े होने की व्यवस्था। इसलिए, यह तुलनात्मक रूप से एक आसान सेट होना चाहिए। हम सात बाइकों के खड़े होने की व्यवस्था के आधार पर एक आरेख बनाएंगे (अर्थात बैठने की व्यवस्था हमारा शुरूआती बिंदु होगा)।

पहले तीन कथन विभिन्न बाइकों की सापेक्ष स्थिति के बीच संबंध देते हैं। इसलिए, हम पहले दौर में अपने आरेख को भरने के लिए उनका उपयोग नहीं कर सकते हैं।

हालाँकि, कथन IV में कहा गया है कि C एक छोर पर है। चूंकि यह बाइक की असल स्थिति देता है, हम इसका उपयोग कर सकते हैं। अब, चूंकि यह B के बाएं से तीसरे स्थान पर है, इसलिए इसे सबसे बाएं स्थान पर होना चाहिए। हमें निम्नलिखित चित्र मिलता है: <br>
<img src="../../../images/reasoning/puzzles/puzzle-5.png" alt="puzzles" style="width:99%;height:99%;">

अब हम चरण I, II और III कथनों का उपयोग करके, प्रसंस्करण के दूसरे स्तर को शुरू करने के लिए तैयार है।

कथन II के अनुसार, G, C के दायें से चौथे स्थान पर है, अर्थात बायें से 5वें स्थान पर है। कथन I का उपयोग करके, हम यह अनुमान लगा सकते हैं कि A को छठे स्थान पर होना चाहिए। कथन III का उपयोग करते हुए, हम देख सकते हैं कि D को तीसरे स्थान पर होना चाहिए। उभरने वाले अंतिम परिदृश्य को निम्नानुसार दर्शाया जा सकता है: <br>
<img src="../../../images/reasoning/puzzles/puzzle-6.png" alt="puzzles" style="width:99%;height:99%;">

इस प्रकार, E, D के दायें से चौथा है।

