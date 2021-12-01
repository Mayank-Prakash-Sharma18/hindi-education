---
author: Mragank Shandilya
title: कैलेंडर दोहराव की मूल अवधारणाएं (Basics of Calendar Repetition)
date: "2021-11-29"
description: कैलेंडर दोहराव की मूल अवधारणाएं (Basics of Calendar Repetition) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["calendar-repetition"]
categories: ["calendar"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/calendar-repetition.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/calendar-repetition.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basics of Calendar Repetition, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कैलेंडर से सम्बंधित और लेख आप यहाँ पढ़ सकते हैं :
* <a href="../concept-of-calendar-in-reasoning" title="Calendar" class="mak-link">कैलेंडर के मूल सिद्धांत</a> 
* <a href="../finding-day-on-a-date-in-reasoning" title="Calendar" class="mak-link">किसी तारीख पर पड़ने वाला दिन ज्ञात करना</a> 
</div>

## कैलेंडर कब दोहराता है ? 

दो सालों का एक ही कैलेंडर होता है जब:

* दोनों वर्षों की पहली जनवरी एक ही दिन पड़ती है, अर्थात वर्षों के बीच विषम दिनों का योग शून्य होता है, और
* दोनों वर्ष एक ही प्रकार के होते हैं, अर्थात दोनों लीप वर्ष होते हैं या दोनों गैर-लीप वर्ष होते हैं।

आइए कुछ उदाहरण देखें:

2001 और 2007 के बीच विषम दिनों की कुल संख्या = 1 + 1 + 1 + 2 + 1 + 1 = 7 = 0 विषम दिन। <br>
तो, 2007 का कैलेंडर 2001 के कैलेंडर जैसा ही होगा। <br>
(वर्ष 2001, 2002, 2003, 2005 और 2006 गैर-लीप वर्ष हैं और इसलिए 1 विषम दिन है; 2004 एक लीप वर्ष है, इसलिए इसमें 2 विषम दिन हैं)<br>

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>चेतावनी</b><br>

जब हम 2001 और 2007 के बीच विषम दिन कहते हैं, तो हमारा मतलब 1 जनवरी, 2001 और 1 जनवरी, 2007 के बीच के विषम दिनों से है। हम 1 जनवरी, 2001 या 1 जनवरी, 2007 की गणना करेंगे, दोनों नहीं। <br><br>
हमारे पाठ्यक्रम में हम हमेशा पहले दिन को गिनते हैं न कि आखिरी दिन। <br><br>
इसलिए, यहां हमने 1 जनवरी, 2001 से 31 दिसंबर, 2006 तक के सभी दिनों की गणना की है, यानी 2001 से 2006 तक पूरे वर्ष।
</div>

इसी प्रकार, 2002 और 2013 के बीच विषम दिनों की कुल संख्या = 1 + 1 + 2 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 = 14 = 0 विषम दिन। <br>
तो, 2013 का कैलेंडर 2002 जैसा ही होगा। <br>
(वर्ष 2002, 2003, 2005, 2006, 2007, 2009, 2010, 2011 गैर-लीप वर्ष हैं और इसलिए उनमें से प्रत्येक के पास एक विषम दिन है; 2004, 2008 और 2012 लीप वर्ष हैं, इसलिए उनके पास 2 विषम दिन हैं)<br><br >


## कुछ सुझाव

* एक लीप वर्ष कैलेंडर 28 वर्षों में दोहराता है, जबकि एक सामान्य वर्ष का कैलेंडर 6 या 11 वर्षों के बाद दोहराता है।

* लीप वर्ष के ठीक बाद (जैसे 2001) गैर-लीप वर्ष का कैलेंडर 6 वर्षों में दोहराया जाएगा। अगले दो गैर-लीप वर्षों (जैसे 2002 और 2003) के लिए पुनरावृत्ति 11 वर्षों में होगी।

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>अपवाद</b><br>

यदि एक शताब्दी गैर-लीप वर्ष (जैसे 1700, 1800, 1900) बीच में आता है, तो 40 या 12 वर्षों के बाद लीप वर्ष का कैलेंडर दोहराया जाएगा। <br><br>
1880 का कैलेंडर 1920 में, 1872 में और 1912 में दोहराया जाएगा। <br>
1892 और 1896 का कैलेंडर क्रमशः 1904 और 1908 में दोहराया गया। <br><br>
लेकिन एप्टीट्यूड परीक्षा में आपकी इस हद तक परीक्षा नहीं होगी।
</div>

##### प्र. दिए गए वर्षों में से किसका कैलेंडर वर्ष 2003 के कैलेंडर के समान होगा?
<pre>(a) 2013         (b) 2014          (c) 2015          (d) 2016</pre>
Explanations :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: विषम दिनों की विधि का उपयोग करके <br><br>
2003 एक गैर-लीप वर्ष है। <br><br>

अत: 2008 तक विषम दिनों की संख्या = 1 + 2 + 1 + 1 + 1 + 2 = 8 = (1) (इस 1 को आगे बढ़ाया जाएगा) <br>
2009 से 2013 तक विषम दिनों की संख्या = (1) + 1 + 1 + 1 + 2 + 1 = 7 = 0 <br><br>

2014 एक गैर-लीप वर्ष है। तो 2003 का कैलेंडर 2014 में दोहराएगा। <br><br>
उत्तर: (b)
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: शॉर्ट ट्रिक का उपयोग करके <br><br>

चूंकि 2003 एक गैर-लीप वर्ष है। <br>
तो, 2003 + 6 = 2009 और 2003 + 11 = 2014 (जैसा कि हम जानते हैं कि, एक गैर-लीप वर्ष 6 साल या 11 साल बाद खुद को दोहराता है) <br><br>

विकल्पों को देखते हुए, हम यह कह सकते हैं कि वर्ष 2014 में 2003 के समान कैलेंडर होगा। <br><br>
उत्तर: (b)
</div> <br>

##### प्र. किस वर्ष का कैलेंडर 2012 के कैलेंडर के समान होगा?
<pre>(a) 2020         (b) 2040          (c) 2025          (d) 2031</pre>
व्याख्या :<br>
<button class="mak-tablink tablink-group2 default-tab" onclick="openTab('2Exp-1', this, 'tablink-group2', 'tabcontent-group2')">1</button>
<button class="mak-tablink tablink-group2" onclick="openTab('2Exp-2', this, 'tablink-group2', 'tabcontent-group2')">2</button>

<div id="2Exp-1" class="Exp-1 mak-tabcontent tabcontent-group2">
व्याख्या 1: विषम दिनों की विधि का उपयोग करके <br><br>
2012 के समान कैलेंडर होने के लिए, हमारे पास 2012 और आवश्यक वर्ष के बीच 0 विषम दिन होने चाहियें। साथ ही, वह वर्ष एक लीप वर्ष होना चाहिए।<br><br>

2012 लीप ईयर है। <br>

तो, 1 जनवरी 2012 से 31 दिसंबर 2016 तक विषम दिनों की संख्या = 2 + 1 + 1 + 1 + 2 = 7 = 0 (लेकिन 2017 एक लीप वर्ष नहीं है) <br>
1 जनवरी 2017 से 31 दिसंबर 2022 तक विषम दिनों की संख्या = 1 + 1 + 1 + 2 + 1 + 1 = 7 = 0 (लेकिन 2023 एक लीप वर्ष नहीं है) <br>
1 जनवरी 2023 से 31 दिसंबर 2028 तक विषम दिनों की संख्या = 1 + 2 + 1 + 1 + 1 + 2 = 8 = 7 + 1 = 1 (एक विषम दिन शेष) <br>
1 जनवरी 2029 से 31 दिसंबर 2033 तक विषम दिनों की संख्या = 1 + 1 + 1 + 1 + 2 + 1 = 7 = 0 (लेकिन 2034 एक लीप वर्ष नहीं है) <br>
1 जनवरी 2034 से 31 दिसंबर 2039 तक विषम दिनों की संख्या = 1 + 1 + 2 + 1 + 1 + 1 = 7 = 0 <br>

अब 2040 भी लीप ईयर है। तो 2012 का कैलेंडर 2040 में दोहराएगा। <br><br>
उत्तर: (b)
</div>

<div id="2Exp-2" class="Exp-2 mak-tabcontent tabcontent-group2">
व्याख्या 2: शॉर्ट ट्रिक का उपयोग करके <br><br>
चूंकि 2012 लीप ईयर है। <br><br>
तो, 2012 + 28 = 2040 (जैसा कि हम जानते हैं कि, एक लीप वर्ष 28 साल बाद खुद को दोहराता है)<br><br>
तो, वर्ष 2040 में 2012 के समान कैलेंडर होगा।<br><br>
उत्तर: (b)
</div><br>

