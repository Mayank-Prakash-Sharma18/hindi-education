---
author: Mragank Shandilya
title: किसी विशेष तिथि पर पड़ने वाला दिन जानना (Finding day on a particular date)
date: "2021-12-01"
description: किसी विशेष तिथि पर पड़ने वाला दिन जानना (Finding day on a particular date) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["finding-calendar-day"]
categories: ["calendar"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/calendar-day.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/calendar-day.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Finding day on a particular date, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कैलेंडर से सम्बंधित और लेख आप यहाँ पढ़ सकते हैं :
* <a href="../concept-of-calendar-in-reasoning" title="Calendar" class="mak-link">कैलेंडर के मूल सिद्धांत</a> 
* <a href="../calendar-repetition-in-reasoning" title="Calendar" class="mak-link">कैलेंडर कैसे दोहराते हैं ?</a>
</div>

आम तौर पर एक संदर्भ दिन दिया जाता है, और हमें किसी अन्य तारीख के दिन का पता लगाना होता है।

चरण I: संदर्भ तिथि और उस तिथि के बीच विषम दिनों की कुल संख्या ज्ञात करें, जिसके लिए दिन निकाला जाना है। <br>
(विषम दिनों की कुल संख्या ज्ञात करने के लिए, संदर्भ दिन शामिल करें लेकिन अंतिम दिन को न गिनें। इसके विपरीत भी सही है। यानि पहले और अंतिम दिन में से सिर्फ एक को ही गिनना होता है|)

चरण II: अंतिम तिथि पर सप्ताह का दिन ढूँढना <br><br>
यदि अंतिम तिथि संदर्भ तिथि के बाद की है: <br>
अंतिम तिथि पर सप्ताह का दिन = संदर्भ तिथि पर दिन + विषम दिनों की संख्या। (तो, यहाँ हम विषम दिन जोड़ेंगे) <br>

यदि अंतिम तिथि संदर्भ तिथि से पहले की है: <br>
अंतिम तिथि पर सप्ताह का दिन = संदर्भ तिथि पर दिन - विषम दिनों की संख्या। (इसलिए, यहां हम विषम दिनों को घटाएंगे)

##### प्र. यदि 15 अगस्त, 2011 को सोमवार था, तो 17 सितंबर, 2011 को सप्ताह का कौन-सा दिन था?
<pre>(a) शनिवार (b) रविवार (c) शुक्रवार (d) गुरुवार </pre>
व्याख्या:<br>
<div class="Exp">
चरण I: दो तिथियों (15 अगस्त, 2011 और 17 सितंबर, 2011) के बीच विषम दिनों की गणना करें<br><br>

यहाँ, अगस्त, 2011 में कुल दिन = 31 – 14 = 17 (संदर्भ दिवस, यानी 15 अगस्त शामिल करें) <br>
सितंबर, 2011 में कुल दिन (पहली से 16 तारीख) = 16 (अंतिम दिन को छोड़कर, यानी 17 सितंबर को गिने बिना) <br>
कुल दिन = 17 + 16 = 33

विषम दिनों की संख्या = शेष {33/7} = 5

चरण II: अंतिम तिथि पर सप्ताह के दिन का पता लगाना

यहां अंतिम तिथि (17 सितंबर, 2011) संदर्भ तिथि (15 अगस्त, 2011) के बाद की है। इसलिए, हम विषम दिनों को जोड़ेंगे। <br><br>
अंतिम तिथि पर सप्ताह का दिन = संदर्भ तिथि पर दिन + विषम दिनों की संख्या। <br>
अत: अभीष्ट दिन = सोमवार + 5 = शनिवार

उत्तर: (a)
</div> <br><br>


##### प्र. यदि 5 जनवरी, 1991 को शनिवार था, तो 4 मार्च 1992 को सप्ताह का कौन सा दिन था?
<pre>(a) सोमवार (b) बुधवार (c) शुक्रवार (d) रविवार</pre>
व्याख्या:<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-3', this, 'tablink-group1', 'tabcontent-group1')">3</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
विधि 1: <br><br>
चरण I: दो तिथियों (5 जनवरी, 1991 और 4 मार्च 1992) के बीच विषम दिनों की गणना करें<br><br>

1991 में दिनों की संख्या = 365–4 = 361 (संदर्भ दिवस, यानी 5 जनवरी शामिल करें)<br>
जनवरी 1992 में दिनों की संख्या = 31<br>
फरवरी 1992 में दिनों की संख्या = 29 (1992 एक लीप वर्ष है)<br>
1 से 4 मार्च 1992 तक दिनों की संख्या = 3 (अंतिम दिन को छोड़कर, यानी 4 मार्च 1992 को गिने बिना)<br><br>
कुल दिन = 361 + 31 + 29 + 3 = 424 <br>
विषम दिनों की संख्या = शेष {424/7} = 4

चरण II: अंतिम तिथि पर सप्ताह के दिन का पता लगाना <br>

यहां अंतिम तिथि (4 मार्च 1992) संदर्भ तिथि (5 जनवरी, 1991) के बाद की है।<br>
अंतिम तिथि पर सप्ताह का दिन = संदर्भ तिथि पर दिन + विषम दिनों की संख्या। <br>
तो, अभीष्ट दिन = शनिवार + 4 = बुधवार<br>

उत्तर: (b)
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
विधि 2: प्रत्येक खंड के लिए विषम दिनों का पता लगाना<br><br>
1991 में विषम दिनों की संख्या = 365 – 4 = 361 = 51 × 7 + 4 = 4<br>
जनवरी 1992 में विषम दिनों की संख्या = 31 = 28 + 3 = 3<br>
फरवरी 1992 में विषम दिनों की संख्या = 29 = 28 + 1 = 1 (लीप वर्ष)<br>
1 से 3 मार्च 1992 तक विषम दिनों की संख्या = 3<br>
कुल विषम दिन = 4 + 3 + 1 + 3 = 11 = 7 + 4 = 4 विषम दिन<br><br>

अत: अभीष्ट दिन = शनिवार + 4 = बुधवार

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हम अपनी सुविधा के अनुसार दोनों विधियों (विधि 1 और 2) को मिला भी सकते हैं। 
</div>

उत्तर: (b)
</div><br>

<div id="1Exp-3" class="Exp-3 mak-tabcontent tabcontent-group1">
विधि 3: <br><br>
5 जनवरी 1991 को शनिवार था।<br>
अतः 5 जनवरी 1992 को रविवार होगा।

5 जनवरी 1992 और 4 मार्च 1992 के बीच विषम दिनों की संख्या = (31 - 4) + 29 + 3 = 59 = 3

अत: 4 मार्च 1992 = रविवार + 3 = बुधवार

उत्तर: (b)
</div><br>

