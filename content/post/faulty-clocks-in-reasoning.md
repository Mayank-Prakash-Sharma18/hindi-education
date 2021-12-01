---
author: Mragank Shandilya
title: दोषपूर्ण घड़ियों की अवधारणा (Concept of Faulty Clocks)
date: "2021-12-01"
description: दोषपूर्ण घड़ियों की अवधारणा (Concept of Faulty Clocks) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["faulty-clocks"]
categories: ["clocks"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/faulty-clocks.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/faulty-clocks.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Concept of Faulty Clocks, in Hindi</strong>

इस विषय पर तैयार किए गए प्रश्न, आम तौर पर आपको निम्नलिखित में से कुछ खोजने के लिए कहेंगे:
* वह समय जब गलत घड़ी सही समय दिखाएगी।
* एक गलत घड़ी द्वारा प्राप्त (gained) या खोया (lost) कुल समय।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

घड़ी से सम्बंधित एक और लेख आप यहाँ पढ़ सकते हैं :
* <a href="../concept-of-clocks-in-reasoning" title="Clocks" class="mak-link">घड़ी के मूल सिद्धांत</a> 
</div>

## दोषपूर्ण घडी की परिभाषा (Definition of Faulty Clock)

दोषपूर्ण घड़ी - वह घड़ी जो समय प्राप्त करती या खोती है।

यदि कोई घड़ी वास्तविक समय से अधिक इंगित करती है, तो घड़ी को तेज या समय प्राप्त करने वाली कहा जाता है। <br>
उदाहरण के लिए, अगर एक घड़ी 10:15 इंगित करती है जबकि सही समय 10 है, तो यह 15 मिनट तेज है।

यदि कोई घड़ी वास्तविक समय से कम का संकेत देती है, तो घड़ी धीमी या समय गंवाने वाली कहलाती है। <br>
उदाहरण के लिए, यदि कोई घड़ी 09:45 इंगित करती है, जबकि सही समय 10 है, तो इसे 15 मिनट धीमा कहा जायेगा। 

## घडी के हाथों के मिलने की अवधारणा (Coinciding time)

<p> जब भी कोई घड़ी बहुत तेज या बहुत धीमी होती है, तो घड़ी की दोनों सुइयां 66 \(\frac{5}{11}\) मिनट के अंतराल पर नहीं मिलेंगी| </p>

<p> यदि संयोग समय > 65 \(\frac{5}{11}\) है, तो घड़ी सामान्य से धीमी चल रही है (अर्थात घड़ी समय खो रही है) </p>

<p> और अगर संयोग समय < 65 \(\frac{5}{11}\) है, तो घड़ी सामान्य से तेज चल रही है (अर्थात घड़ी समय प्राप्त कर रही है) </p>

##### प्र. एक घड़ी 11 घंटे में कितना समय प्राप्त करती या खोती है, यदि घड़ी की मिनट और घंटे की सूइयां हर 66 मिनट में मिलती हैं?
<p> (a) 6 \(\frac{5}{11}\) मिनट <br>   
(b) 5 \(\frac{5}{11}\) मिनट <br>
(c) 5 \(\frac{9}{11}\) मिनट <br>  
(d) 6 \(\frac{5}{7}\) मिनट </p>

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: <br><br>

<p> जब घड़ी सही तरह से काम कर रही हो, तो घड़ी की दोनों सूइयां हर 65 \(\frac{5}{11}\) मिनट में ओवरलैप करती हैं।<br><br>
लेकिन विचाराधीन घड़ी की मिनट और घंटे की सूइयां हर 66 मिनट में ओवरलैप हो रही हैं। <br><br>
इस प्रकार 66 मिनट में, खोया हुआ समय = 66 - 65 \(\frac{5}{11} मिनट = \frac{6}{11}\) मिनट। </p><br>

<p> अर्थार्थ, 1 मिनट में खोया समय = \(\frac{6}{11}\) x \(\frac{1}{66} = \frac{1}{121}\) मिनट <br><br>
तो, 60 मिनट (यानी 1 घंटे में) में खोया हुआ समय = 60 x \(\frac{1}{121} = \frac{60}{121}\) मिनट <br><br>
और 11 घंटे में खोया समय = 11 x \(\frac{1}{121} = \frac{60}{11} = 5\frac{5}{11}\) मिनट </p>

उत्तर: (b)
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: सूत्र विधि का उपयोग करके <br><br>

<p> यदि घड़ी की मिनट की सुई, सही समय के x मिनट में घंटे की सुई से आगे निकल जाती है, तो इसका मतलब है की घड़ी एक दिन में (5x ± t) \(\frac{12}{11}\) मिनट खोती है या प्राप्त करती है। </p>
यदि परिणाम (+ ve) है, तो घड़ी समय प्राप्त करती है, और यदि परिणाम (-ve) है, तो घड़ी समय खोती है।

दिए गए प्रश्न में x = 66 मिनट 

सूत्र के अनुसार: <br>
<p> एक दिन में खोया हुआ समय = (\(\frac{720}{11} - 66) (60 × \frac{24}{66}) = (-\frac{6}{11}) (\frac{240}{11}\)) मिनट <br><br>
तो, 11 घंटे में खोया हुआ समय = (-\(\frac{6}{11}) (\frac{240}{11}) (\frac{11}{24}) = -\frac{60}{11} = - 5\frac{5}{11}\) मिनट <br>
(ऋण चिह्न दर्शाता है कि घड़ी समय गंवाती है) </p>

उत्तर: (b)
</div><br>

