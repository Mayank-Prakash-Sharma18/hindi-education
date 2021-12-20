---
author: Mragank Shandilya
title: स्थिति पजल (Position Puzzles in Reasoning)
date: "2021-12-18"
description: स्थिति पजल (Position Puzzles in Reasoning) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["puzzle-approach"]
categories: ["puzzles"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/puzzles/sequence-and-ordering-4.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/puzzles/sequence-and-ordering-4.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Position Puzzles in Reasoning, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basic-approach-to-puzzles-in-reasoning" title="Puzzles" class="mak-link">पजल कैसे हल करें?</a> 
* <a href="../comparison-and-ranking-puzzles-in-reasoning" title="Puzzles" class="mak-link">तुलना और रैंकिंग पजल क्या होती हैं?</a> 
* <a href="../sequence-and-ordering-puzzles-in-reasoning" title="Puzzles" class="mak-link">अनुक्रम और क्रम पजल</a> 
* <a href="../seating-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">बैठक व्यवस्था पजल कैसे हल करें?</a> 
* <a href="../linear-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">रैखिक व्यवस्था पजल</a> 
* <a href="../circular-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">वृत्ताकार बैठक व्यवस्था पजल</a> 
</div>

## गिनती वाली पजल क्या होती हैं? (What are Counting puzzles?)

गिनती वाली पजल में हमें केवल गिनना होता है।

गिनती वाली पजल के सबसे आम प्रकार हैं:

- अनुक्रम और क्रम पजल (Sequence and Ordering)

- स्थिति पजल (Position Puzzles)

इस लेख में, हम स्थिति पजल के उप-विषय को समझेंगे।


## स्थिति पजल क्या होती हैं? (What are Position Puzzles?)

इस प्रकार के प्रश्नों में, एक पंक्ति/कतार के दोनों सिरों में से किसी व्यक्ति (व्यक्तियों) की रैंक/स्थिति दी जाती है और हमें निर्धारित करना होता है:

* या तो समूह में व्यक्तियों की कुल संख्या
* या किसी विशेष व्यक्ति के बाएँ/दाएँ व्यक्तियों की संख्या
* या दो दिए गए व्यक्तियों के बीच व्यक्तियों की संख्या

कभी-कभी ऐसे प्रश्न थोड़े घुमा-फिरा के दिए जाते हैं, जिनमें दो या दो से अधिक व्यक्तियों द्वारा सीटों की अदला-बदली शामिल होती है।

<div class="toc-mak"> <br>

किसी व्यक्ति/वस्तु की बाएँ या दाएँ से रैंक:

बाएं छोर से स्थिति (या रैंक) = (व्यक्तियों की कुल संख्या + 1) - दाएं छोर से रैंक

दाएं छोर से स्थिति (या रैंक) = (व्यक्तियों की कुल संख्या + 1) - बाएं छोर से रैंक
</div>


## स्थिति पजल के प्रकार (Types of Position Puzzles)

### दूसरे छोर से स्थिति ढूँढना (Finding position from other end)

##### प्रश्न. अगर 45 छात्रों की कक्षा में मृगांक की रैंक ऊपर से 15वीं है, तो नीचे से मृगांक की रैंक क्या होगी?
<pre>(a) 30         (b) 31          (c) 32          (d) 33</pre>

व्याख्या:<br>
<div class="Exp">

आरेख: <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-4.png" alt="Sequence and Ordering" style="width:54%;height:54%;">

नीचे से मृगांक की रैंक = (कुल छात्रों की संख्या + 1) — ऊपर से मृगांक की रैंक <br>
= (45 + 1) - 15 = 46 – 15 = 31

उत्तर: (b)
</div> <br>


### दिए गए दो व्यक्तियों के बीच व्यक्तियों की संख्या ज्ञात करना (Finding the number of persons between two given persons)

आइए कुछ ऐसे प्रश्न देखें, जिनमें दिए गए दो व्यक्तियों के बीच व्यक्तियों की संख्या ज्ञात की जानी है। निम्नलिखित दो प्रश्नों को पढ़िए और उनकी तुलना कीजिए।

##### प्रश्न. 45 छात्रों की कक्षा में मृगांक की रैंक ऊपर से 15वीं है, और आन्या की रैंक ऊपर से 22वीं है| दोनों के बीच कितने विद्यार्थी होंगे?
<pre>(a) 5 (b) 6 (c) 8 (d) निर्धारित नहीं किया जा सकता</pre>

व्याख्या:<br>
<div class="Exp">

हमें एक ही तरफ से (यानी ऊपर से) मृगांक और आन्या का स्थान दिया गया है। तो, हमारा काम आसान है।

(यदि उनकी स्थिति अलग-अलग पक्षों से दी गई होती, तो हम पहले एक तरफ से उनकी स्थिति का पता लगाते।)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

ध्यान दें कि डेटा, कि कक्षा में 45 छात्र थे, की उपयोग नहीं किया गया है। ऐसा इसलिए है क्योंकि हम पहले से ही एक ही तरफ से दोनों व्यक्तियों की स्थिति जानते हैं। अगर हमें अलग-अलग छोर से उनकी स्थिति दी जाती, तो हम इस डेटा का इस्तेमाल करते।
</div>

आरेख: <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-7.png" alt="Sequence and Ordering" style="width:72%;height:72%;"> <br>
मृगांक और आन्या के बीच विद्यार्थियों की संख्या = (22 - 15) - 1 = 7 - 1 = 6

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>वैकल्पिक विधि</b><br>

मृगांक और आन्या के बीच विद्यार्थियों की संख्या = 21 - 15 = 6

अगर हम 22 - 15 = 7 करते हैं, तो इसमें आन्या भी शामिल होगी। यह गलत होगा, क्योंकि हमें मृगांक और आन्या दोनों को छोड़कर ***मृगांक और आन्या*** के बीच छात्रों की संख्या का पता लगाना है।
</div>

उत्तर: (b)
</div> <br>

##### प्र. 45 छात्रों की कक्षा में मृगांक की रैंक ऊपर से 15वीं है, और आन्या की रैंक नीचे से 22वीं है| दोनों के बीच कितने विद्यार्थी होंगे?
<pre>(a) 5 (b) 6 (c) 8 (d) निर्धारित नहीं किया जा सकता</pre>

व्याख्या:<br>
<div class="Exp">

अलग-अलग तरफ से उनकी स्तिथि दी गयी है। इसलिए, हम पहले एक तरफ से उनकी स्थिति का पता लगाएंगे (या तो ऊपर से उनकी रैंक, या नीचे से उनकी रैंक)।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

ध्यान दें कि डेटा, कि कक्षा में 45 छात्र थे, की उपयोग यहां किया जाएगा। ऐसा इसलिए है क्योंकि हमें अलग-अलग छोर से उनकी स्थिति दी गई है। 
</div>

मृगांक की रैंक = ऊपर से 15वीं

आन्या की रैंक = नीचे से 22वीं

तो, ऊपर से आन्या की रैंक = (कुल छात्रों की संख्या + 1) - नीचे से रैंक = (45 + 1) - 22 = 24 <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-8.png" alt="Sequence and Ordering" style="width:72%;height:72%;">

मृगांक और आन्या के बीच विद्यार्थियों की संख्या = (24 - 15) - 1 = 9 - 1 = 8

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>वैकल्पिक विधि</b><br>

मृगांक और आन्या के बीच विद्यार्थियों की संख्या = 23 - 15 = 8

अगर हम 24 - 15 = 9 करते हैं, तो इसमें आन्या भी शामिल होगी। यह गलत होगा, क्योंकि हमें मृगांक और आन्या दोनों को छोड़कर ***मृगांक और आन्या*** के बीच छात्रों की संख्या का पता लगाना है।
</div>

उत्तर: (c)
</div> <br>


#### पंक्ति में व्यक्तियों की कुल संख्या ज्ञात करना (Finding the total number of persons in the row)

अब, आइए एक प्रश्न देखें जिसमें पंक्ति में कुल लोगों की संख्या ज्ञात की जानी है।

ऐसे प्रश्नों में, हमारा लक्ष्य दोनों छोरों से एक निश्चित व्यक्ति की स्थिति का पता लगाना होता है।

##### प्रश्न. एक कक्षा में, मृगांक ऊपर से 25वें और नीचे से 32वें स्थान पर है, तो कक्षा में छात्रों की कुल संख्या क्या होगी?
<pre>(a) 55         (b) 57          (c) 56          (d) 58</pre>

व्याख्या:<br>
<div class="Exp">

यहाँ दोनों सिरों से मृगांक की स्थिति पहले ही दी जा चुकी है। तो, हमारा काम आसान है। <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-6.png" alt="Sequence and Ordering" style="width:45%;height:45%;">

कक्षा में कुल छात्र = (ऊपर से मृगांक की रैंक + नीचे से मृगांक की रैंक) — 1 <br>
= (25 + 32) — 1 <br>
= 57 — 1 = 56

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>वैकल्पिक विधि</b><br>

मृगांक ऊपर से 25वें और नीचे से 32वें स्थान पर हैं।

एक कक्षा में कुल छात्र = (मृगांक से पहले छात्रों की कुल संख्या + मृगांक के बाद छात्रों की कुल संख्या) + 1 <br>
= 24 + 31 + 1 <br>
= 55 + 1 = 56
</div>

उत्तर: (c)
</div> <br>


### ऐसे प्रश्न जहां लोग अपनी स्थिति बदलते हैं (Questions where people change their positions)

अब, एक बार जब हम ऐसे प्रश्नों की मूल बातें समझ गए हैं, तो आइए कुछ ऐसे प्रश्न देखें जिनमें लोग अपनी स्थिति बदलते हैं।

##### प्रश्न. 40 लड़कियों की एक पंक्ति में, जब अलका को 4 स्थान बायीं ओर स्थानांतरित किया जाता है, तो पंक्ति के बाएं छोर से उसका स्थान 10वां हो जाता है। पंक्ति के दायें छोर से आन्या का स्थान क्या है , यदि आन्या, अलका के मूल स्थान से तीन स्थान दायीं ओर थी?
<pre>(a) 24         (b) 23          (c) 22          (d) 25</pre>

व्याख्या:<br>
<div class="Exp">

4 स्थान बायीं ओर खिसकाने पर, अलका का स्थान बायें छोर से = 10 वाँ स्थान है।

अत: अलका की मूल स्थिति बायें छोर से = 10 + 4 = 14 वाँ स्थान है।

आन्या, अलका के मूल स्थान के 3 स्थान दायीं और है = बायें छोर से 17वां स्थान। <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-5.png" alt="Sequence and Ordering" style="width:99%;height:99%;">

<p> अब, दायें से आन्या का स्थान = (लड़कियों की कुल संख्या + 1) — बायें से आन्या का स्थान = (40 + 1) — 17 = 41 - 17 = \(24^{th}\) </p> 

उत्तर: (a)
</div> <br>


### कई केस वाले प्रश्न (Questions with multiple cases)

ऐसे प्रश्नों में, कई केस सामने आ सकते हैं (आमतौर पर दो केस)। प्रश्नों का उत्तर देते समय हमें दोनों केस को ध्यान में रखना होगा।

##### प्र. यदि एक पंक्ति में रोहन बायें से 10वें और मुकेश दायें से 13वें स्थान पर है, और रोहन और मुकेश के बीच में चार व्यक्ति हैं, तो पंक्ति में व्यक्तियों की अधिकतम और न्यूनतम संख्या ज्ञात कीजिए।
<pre>(a) 27, 18         (b) 30, 15          (c) 27, 17          (d) 30, 19</pre>

व्याख्या:<br>
<div class="Exp">

इस प्रश्न में रोहन और मुकेश की सापेक्ष स्थिति के आधार पर दो केस सामने आ सकते हैं।

***केस I: व्यक्तियों की अधिकतम संख्या के लिए*** <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-9.png" alt="Sequence and Ordering" style="width:99%;height:99%;">

व्यक्तियों की कुल संख्या = दोनों व्यक्तियों की स्तिथिओं का योग + मध्य में व्यक्तियों की संख्या <br>
= 10 + 13 + 4 = 27

***केस II: व्यक्तियों की न्यूनतम संख्या के लिए*** <br>
<img src="../../../images/reasoning/puzzles/sequence-and-ordering-10.png" alt="Sequence and Ordering" style="width:99%;height:99%;">

Total number of persons = दोनों व्यक्तियों की स्तिथिओं का योग — मध्य में व्यक्तियों की संख्या, मुकेश और रोहन सहित (जिन्हें दो बार गिना गया है) <br>
= (10 + 13) — (4 + 2) = 23 – 6 = 17

उत्तर: (c)
</div> <br>
