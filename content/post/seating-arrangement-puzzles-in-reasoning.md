---
author: Mragank Shandilya
title: बैठक व्यवस्था पजल कैसे हल करें? (Approach to Seating Arrangement Puzzles)
date: "2021-12-18"
description: बैठक व्यवस्था पजल कैसे हल करें? (Approach to Seating Arrangement Puzzles) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["puzzle-approach"]
categories: ["puzzles"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/puzzles/seating-arrangement-1.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/puzzles/seating-arrangement-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Approach to Seating Arrangement Puzzles, in Hindi</strong>

बैठक व्यवस्था (Seating arrangement) एप्टीट्यूड आधारित प्रतियोगी परीक्षाओं के महत्वपूर्ण, और आसान विषयों में से एक है। आपको बस जानकारी को जल्दी से समझने, कल्पना करने, और छूटे हुए हिस्सों को भरने की आवश्यकता होती है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basic-approach-to-puzzles-in-reasoning" title="Puzzles" class="mak-link">पजल कैसे हल करें?</a> 
* <a href="../comparison-and-ranking-puzzles-in-reasoning" title="Puzzles" class="mak-link">तुलना और रैंकिंग पजल क्या होती हैं?</a> 
* <a href="../position-test-in-reasoning" title="Puzzles" class="mak-link">स्थिति पजल</a> 
* <a href="../sequence-and-ordering-puzzles-in-reasoning" title="Puzzles" class="mak-link">अनुक्रम और क्रम पजल</a> 
* <a href="../linear-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">रैखिक व्यवस्था पजल</a> 
* <a href="../circular-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">वृत्ताकार बैठक व्यवस्था पजल</a> 
</div>

बैठक व्यवस्था पर आधारित विभिन्न प्रकार के प्रश्न, जो हमारे सामने आते हैं, वे निम्नलिखित हैं:

* रैखिक व्यवस्था (एकल पंक्ति व्यवस्था, Linear arrangement)
* दोहरी पंक्ति व्यवस्था (Double row arrangement)
* आयताकार व्यवस्था (Rectangular arrangement)
* वृत्ताकार/बहुभुज व्यवस्था (Circular/Polygonal arrangement)


## बैठक व्यवस्था पजल को हल करने के चरण (Steps to solve Seating arrangement Puzzle)

यद्यपि उपरोक्त प्रत्येक प्रकार के प्रश्नों की अपनी विशिष्ट विशेषताएं हैं, पर उनमें से प्रत्येक पर निम्नलिखित नियम लागू हो सकते हैं:

### शामिल आयामों का पता लगाएं (Find out the Dimensions involved)

पूरी पजल को पढ़िए और दिए गए कथनों को ठीक से समझिए। प्रश्न में शामिल आयामों की संख्या जानने का प्रयास करें। इससे आपको प्रश्न सेट के कठिनाई स्तर का अंदाजा हो जाएगा। कोई भी बैठक व्यवस्था सेट एक या अधिक आयामों पर आधारित हो सकता है, जैसे की बैठने की व्यवस्था का क्रम, लोगों के बीच संबंध, लोगों के पेशे, आदि।

आम तौर पर जितने अधिक आयाम शामिल होते हैं, उस सेट को हल करना उतना ही कठिन होता है।

### डायग्राम बनाएं (Construct a diagram)

प्रश्न सेट में दी गई जानकारी को निरूपित करने के लिए एक आरेख बनाइए। ऐसा करते समय आयामों को स्पष्ट रूप से पहचानना आवश्यक है।

एक पंक्ति में बैठे व्यक्तियों के मामले में, जहाँ सभी एक ही दिशा की ओर उन्मुख हैं, आरेख निम्नानुसार बनाया जा सकता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-1.png" alt="Seating arrangement" style="width:81%;height:81%;">

दो पंक्तियों में बैठे व्यक्ति अगर एक-दूसरे के आमने-सामने हों, तो आरेख निम्नानुसार बनाया जा सकता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-2.png" alt="Seating arrangement" style="width:81%;height:81%;">

एक वृत्त/आयत/वर्ग के चारों ओर केंद्र की ओर मुख करके बैठे व्यक्तियों के मामले में, आरेख निम्नानुसार बनाया जा सकता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-3.png" alt="Seating arrangement" style="width:45%;height:45%;">

ऐसे मामलों में, यदि कथन कहता है कि A, B के बाईं ओर बैठा है, तो इसका अर्थ है कि B से A तक जाने के लिए व्यक्ति को दक्षिणावर्त (clockwise) दिशा में चलना होगा। इसी तरह, यदि कथन कहता है कि A, B के दाईं ओर बैठा है, तो इसका अर्थ है कि B से A तक जाने के लिए व्यक्ति को घड़ी की विपरीत दिशा (anti-clockwise) में चलना होगा।

एक वृत्त/आयत/वर्ग के चारों ओर, बाहर की तरफ मुख करके बैठे व्यक्तियों के मामले में, आरेख निम्नानुसार बनाया जा सकता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-4.png" alt="Seating arrangement" style="width:45%;height:45%;">

अब, यदि कथन कहता है कि A, B के बाईं ओर बैठा है, तो इसका अर्थ है कि B से A तक जाने के लिए व्यक्ति को घड़ी की विपरीत दिशा में चलना होगा। इसी प्रकार, यदि कथन कहता है कि A, B के दाहिनी ओर बैठा है, तो इसका अर्थ है कि B से A तक जाने के लिए व्यक्ति को दक्षिणावर्त दिशा में चलना होगा।

### आरेख में डेटा भरें (Fill-in the data in the diagrams)

अब, अगला कदम प्रश्न में दी गई जानकारी का उपयोग करके आरेख को पूरा करना होगा।

बैठक व्यवस्था पजल में आपको तीन प्रकार के डेटा मिलेंगे (वैसे किसी भी प्रकार की पजल में येही तीन प्रकार के डेटा होते हैं):

* पूर्ण जानकारी (absolute information)
* निश्चित-सापेक्ष जानकारी (definite-relative information)
* अनिश्चित-सापेक्ष जानकारी (indefinite-relative information)

उन कथनों की पहचान करें जो ***अनिश्चित-सापेक्ष*** जानकारी के बजाय ***निश्चित-सापेक्ष*** या ***पूर्ण जानकारी*** देते हैं।

आइए, कुछ उदाहरणों का उपयोग करके इसे और स्पष्ट करें।

#### अनिश्चित-सापेक्ष जानकारी (Indefinite-relative information)

कथन 1: A, B के दायीं ओर है।

उपरोक्त कथन में दी गई जानकारी निश्चित-सापेक्ष या absolute के बजाय ***अनिश्चित-सापेक्ष*** है। कथन केवल यह कहता है कि A, B के दाईं ओर है, लेकिन यह निर्दिष्ट नहीं करता है कि A, B से कितनी दूर है। वह B के ठीक बगल में हो सकता है या उनके बीच अन्य लोग भी हो सकते हैं।

अनिश्चित-सापेक्ष कथन का एक अन्य उदाहरण इस प्रकार हो सकता है:

B, A और C के बीच में है।

हालांकि यह बिल्कुल स्पष्ट है कि B, A और C के बीच बैठा है, लेकिन A और C की सापेक्ष स्थिति स्पष्ट नहीं है। तो, उन्हें ABC या CBA के रूप में बैठाया जा सकता है।

इस तरह के कथन किसी प्रश्न को हल करने के प्रारंभिक चरणों में बहुत उपयोगी नहीं होते हैं, लेकिन बाद के चरणों में कुछ संभावित मामलों/केस को खत्म करने के लिए उपयोगी हो सकते हैं।

#### निश्चित-सापेक्ष जानकारी (Definite-relative information)

कथन 2: A, B के दायें से तीसरे स्थान पर है।

उपरोक्त कथन में दी गई जानकारी ***निश्चित-सापेक्ष*** है क्योंकि यह स्पष्ट रूप से बताती है कि A को B के दायें से तीसरे स्थान पर रखा गया है। हालाँकि यह अभी भी absolute नहीं है, क्योंकि बैठक व्यवस्था में B की स्थिति ज्ञात नहीं है।

#### पूर्ण जानकारी (Absolute information)

कथन 3: A पंक्ति के आखिर में दायें छोर पर बैठा है।

उपरोक्त कथन में दी गई जानकारी absolute है, क्योंकि यह किसी अन्य व्यक्ति से संबंधित नहीं है।

छात्र को सबसे पहले प्रश्न में ऐसे ही कथनों को खोजने का प्रयास करना चाहिए। यह हमारे प्रारंभिक बिंदु होते हैं| 

### कनेक्टिंग जानकारी ज्ञात करें (Find connecting information)

कनेक्टिंग जानकारी खोजें। एक बार जब आप एक या अधिक absolute कथनों से जानकारी का उपयोग कर लेते हैं, तो वहां से आगे बढ़ने का प्रयास करें।

निश्चित-सापेक्ष और अनिश्चित-सापेक्ष कथनों में दी गई जानकारी को पहले से ज्ञात और आरेख में दर्शाई गई जानकारी से जोड़कर उपयोग करें।

आइए, अब उपरोक्त अवधारणाओं को और स्पष्ट करने के लिए एक उदाहरण पर विचार करें।

#### उदाहरण 

A, B, C, D, E. F, G और H एक वृत्त के चारों ओर, केंद्र की ओर मुख करके बैठे हैं।

1. B, G और D के बीच बैठा है।
2. H, B के बायें से तीसरे स्थान पर और A के दायें से दूसरे स्थान पर है।
3. C, A और G के बीच बैठा है।
4. B और E एक दूसरे के विपरीत नहीं बैठे हैं।

##### F के सामने कौन बैठा है?
<pre>(a) A   (b) B  (c) C  (d) G</pre>   

##### व्याख्या 

हमें सबसे पहले absolute, या कम से कम निश्चित-सापेक्ष जानकारी की खोज करनी चाहिए।

यहां, कथन 2 निश्चित-सापेक्ष जानकारी प्रदान करता है। इसलिए, हम इससे ही शुरुआत करेंगे। इसमें दी गई जानकारी को आरेख के रूप में निम्नानुसार दर्शाया जा सकता है: <br> 
<img src="../../../images/reasoning/puzzles/seating-arrangement-5.png" alt="Seating arrangement" style="width:54%;height:54%;">

अब हम अन्य कथनों में दी गई जानकारी का उपयोग उपरोक्त आरेख के छूटे हुए हिस्सों को भरने के लिए कर सकते हैं। हम कथन 1 और 3 में दी गई अनिश्चित-सापेक्ष जानकारी का उपयोग करेंगे।

हम कथन 3 से जानते हैं कि बैठक व्यवस्था में ACG या GCA साथ होने चाहियें। इससे हमें निम्नलिखित आरेख मिलता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-6.png" alt="Seating arrangement" style="width:54%;height:54%;">

अब कथन 1 के अनुसार, GBD या DBG साथ होने चाहियें। इससे हमें निम्नलिखित आरेख मिलता है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-7.png" alt="Seating arrangement" style="width:54%;height:54%;">

अब हम चित्र को पूरा करने के लिए कथन 4 में दी गई जानकारी का उपयोग कर सकते हैं। चूंकि B और E एक-दूसरे के विपरीत नहीं बैठे हैं, यह F ही होना चाहिए जो B के सामने बैठा है। E को C के सामने बैठना चाहिए, जैसा कि नीचे दिखाया गया है: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-8.png" alt="Seating arrangement" style="width:54%;height:54%;">

थोड़े से अभ्यास से आप ऐसे बैठक व्यवस्था (seating arrangement) के सेट को तुलनात्मक आसानी से और उचित समय के भीतर हल करने में सक्षम हो सकते हैं। सफलता की कुंजी उपयुक्त जानकारी को चुनना और फिर व्यवस्थित रूप से आगे बढ़ना है। और हां, सावधान रहें कि ऐसा करते समय कोई भी मूर्खतापूर्ण गलती न करें। ऐसे प्रश्नों को हल करते समय की गई किसी भी गलती का पता लगाने और उसे ठीक करने में अत्यधिक समय लग सकता है।

बैठक व्यवस्था (seating arrangement) पर आधारित प्रश्न, किसी भी एप्टीट्यूड परीक्षा को पास करने के इच्छुक गंभीर उम्मीदवार के मजबूत पक्ष होने चाहियें। वे लगभग हर प्रवेश परीक्षा में पूछे ही जाते हैं और उन्हें आपको हल करना ही चाहिए।
