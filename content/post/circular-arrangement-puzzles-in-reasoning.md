---
author: Mragank Shandilya
title: वृत्ताकार बैठक व्यवस्था पजल (Circular Arrangement Puzzles)
date: "2021-12-18"
description: वृत्ताकार बैठक व्यवस्था पजल (Circular Arrangement Puzzles) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["puzzle-approach"]
categories: ["puzzles"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/puzzles/seating-arrangement-3.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/puzzles/seating-arrangement-3.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Circular Arrangement Puzzles, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basic-approach-to-puzzles-in-reasoning" title="Puzzles" class="mak-link">पजल कैसे हल करें?</a> 
* <a href="../comparison-and-ranking-puzzles-in-reasoning" title="Puzzles" class="mak-link">तुलना और रैंकिंग पजल क्या होती हैं?</a> 
* <a href="../position-test-in-reasoning" title="Puzzles" class="mak-link">स्थिति पजल</a> 
* <a href="../sequence-and-ordering-puzzles-in-reasoning" title="Puzzles" class="mak-link">अनुक्रम और क्रम पजल</a> 
* <a href="../seating-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">बैठक व्यवस्था पजल कैसे हल करें?</a> 
* <a href="../linear-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">रैखिक व्यवस्था पजल</a> 
</div>

## वृत्ताकार बैठक व्यवस्था क्या होती है? (What is Circular Arrangement?)

इस प्रकार की व्यवस्था में, वस्तुओं/व्यक्तियों को एक वृत्त के चारों ओर रखा जाता है:

* या तो केंद्र की ओर मुख करके। <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-3.png" alt="Seating arrangement" style="width:36%;height:36%;">

* या केंद्र की विपरीत दिशा में, यानि बाहर की तरफ मुँह करके| <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-4.png" alt="Seating arrangement" style="width:36%;height:36%;">

आइए, अब वृत्तीय व्यवस्था से संबंधित कुछ अवधारणाओं को समझते हैं।

निम्नलिखित वृत्ताकार बैठक व्यवस्था (circular sitting arrangement) पर विचार करें: <br>
<img src="../../../images/reasoning/puzzles/seating-arrangement-8.png" alt="Seating arrangement" style="width:45%;height:45%;">

### अवधारणा 1

प्रश्न. F के सामने कौन बैठा है?

उत्तर: B

### अवधारणा 2

प्रश्न. C के ठीक दायें कौन बैठा है?

उत्तर: A <br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

वृत्ताकार बैठक व्यवस्था में दाएं/बाएं का अर्थ तत्काल/ठीक दाएं/बाएं ही होता है।
</div>

अब इस विषय को एक उदाहरण की सहायता से और गहराई से समझते हैं।

##### प्र. निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन करें, और दिए गए प्रश्न का उत्तर दें।

चार महिलाएं A, B, C और D और चार सज्जन E, F, G और H एक मेज के चारों ओर एक-दूसरे की ओर मुख करके एक घेरे में बैठे हैं।

I. कोई भी दो महिलाएं या दो सज्जन एक साथ नहीं बैठे हैं। <br>
II. C, जो G और E के बीच में बैठा है, D की ओर उन्मुख है। <br>
III. F, D और A के बीच में है और G की ओर उन्मुख है। <br>
IV. H, B के दायीं ओर है।

E का मुख किसकी ओर है?

<pre>(a) F  (b) B  (c) G  (d) H</pre>

व्याख्या:<br>
<div class="Exp">

कथन III: F, D और A के बीच में है और G की ओर उन्मुख है।

दो मामले संभव हैं: <br>
<img src="../../../images/reasoning/puzzles/circular-arrangement-1.png" alt="Circular arrangement" style="width:81%;height:81%;">

कथन II: C, जो G और E के बीच में बैठा है, D की ओर उन्मुख है। <br>
<img src="../../../images/reasoning/puzzles/circular-arrangement-2.png" alt="Circular arrangement" style="width:81%;height:81%;">

कथन IV: H, B के दायीं ओर है। <br>
<img src="../../../images/reasoning/puzzles/circular-arrangement-3.png" alt="Circular arrangement" style="width:81%;height:81%;">

कथन I: कोई भी दो महिलाएं या दो सज्जन एक साथ नहीं बैठे हैं।

केस II को खारिज किया जा सकता है, क्यूंकि यहाँ B और D, साथ ही G और H एक साथ बैठे हैं। केस I ठीक है। <br>
<img src="../../../images/reasoning/puzzles/circular-arrangement-4.png" alt="Circular arrangement" style="width:45%;height:45%;">

अत: E, H की ओर उन्मुख है।

उत्तर: (d)
</div> <br>

<br><hr><br>

## बहुभुज बैठक व्यवस्था क्या होती है? (What is Polygonal Arrangement?)

बहुभुज (polygon) एक बंद आकृति है, जो तीन या अधिक भुजाओं से बनी होती है।

इस प्रकार के प्रश्नों में त्रिभुज, चतुर्भुज, पंचभुज, षट्भुज, सप्तभुज, अष्टभुज, आदि के चारों ओर वस्तुओं/व्यक्तियों की व्यवस्था की जाती है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जिस तरह से हम इन सवालों को हल करते हैं, वह वृत्ताकार बैठक व्यवस्था (Circular Arrangement) के समान ही होता है।
</div>

