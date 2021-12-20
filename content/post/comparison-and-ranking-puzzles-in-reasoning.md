---
author: Mragank Shandilya
title: तुलना और रैंकिंग पजल क्या होती हैं? (What are Comparison and Ranking Puzzles?)
date: "2021-12-18"
description: तुलना और रैंकिंग पजल क्या होती हैं? (What are Comparison and Ranking Puzzles?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["puzzle-approach"]
categories: ["puzzles"]
series: ["reasoning"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/reasoning/puzzles/comparison-and-ranking-2.png" # Sets featured image on blog post.
thumbnail: "images/reasoning/puzzles/comparison-and-ranking-2.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम रीजनिंग के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What are Comparison and Ranking Puzzles?, in Hindi</strong>

रैंकिंग में उम्र, ऊंचाई, अंक, वेतन, वजन, लंबाई, आकार, आदि जैसे मापदंडों के आधार पर दो या दो से अधिक व्यक्तियों / चीजों की तुलना और अनुक्रमिक क्रम शामिल होता है।

रैंकिंग पर आधारित प्रश्न आम तौर पर अव्यवस्थित सूचनाओं के एक सेट के रूप में दिए जाते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../basic-approach-to-puzzles-in-reasoning" title="Puzzles" class="mak-link">पजल कैसे हल करें?</a> 
* <a href="../position-test-in-reasoning" title="Puzzles" class="mak-link">स्थिति पजल</a> 
* <a href="../sequence-and-ordering-puzzles-in-reasoning" title="Puzzles" class="mak-link">अनुक्रम और क्रम पजल</a> 
* <a href="../seating-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">बैठक व्यवस्था पजल कैसे हल करें?</a> 
* <a href="../linear-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">रैखिक व्यवस्था पजल</a> 
* <a href="../circular-arrangement-puzzles-in-reasoning" title="Puzzles" class="mak-link">वृत्ताकार बैठक व्यवस्था पजल</a> 
</div>

## रैंकिंग पजल के लिए डेटा निरूपण (Data Representation for Ranking Puzzles)

आप दिए गए कथनों को बार-बार पढ़कर परीक्षा में अपना समय बर्बाद नहीं कर सकते। इसलिए हमें उस जानकारी को किसी ऐसे तरीके से प्रस्तुत करना चाहिए, जिससे पढ़ना और तुलना करना आसान हो।

ऐसा करने के दो तरीके हैं।

### डेटा निरूपण विधि I (Data Representation Method I)

हम चीजों, वस्तुओं और व्यक्तियों की तुलना, से बड़ा (>), से छोटा (<), बराबर (=), से बड़ा या बराबर (≥), से कम या बराबर (≤), आदि चिन्हों का उपयोग करके करते हैं।

उदाहरण के लिए:

* A, B से अधिक बड़ा/भारी/लंबा है: <br>
A > B  

* A, B से छोटा/हल्का/छोटा/निचला/कम है: <br>
A < B

आरोही (Ascending) और अवरोही (Descending) क्रम:

* A < B < C < D (आरोही अनुक्रम, Ascending order Sequence)

* A > B > C > D (अवरोही अनुक्रम, Descending order Sequence)

### डेटा निरूपण विधि II (Data Representation Method II)

इन चिन्हों के बजाय, हम इस जानकारी (अर्थार्थ A > B > C > D) का निरूपण करने के लिए निम्न विधि का उपयोग कर सकते हैं: <br>
<img src="../../../images/reasoning/puzzles/comparison-and-ranking-1.png" alt="Comparison and Ranking" style="width:11%;height:11%;">

इस निरूपण में जो वस्तु/व्यक्ति जितना ऊपर रखा जायेगा, उतना ही बड़ा/भारी/लंबा वह होगा। मेरी राय में, डेटा प्रतिनिधित्व का यह रूप समझने में आसान होता है, और परीक्षा में त्रुटि करने की हमारी संभावना को कम करता है। मैं परीक्षा में यही करता था, और इससे मेरी गति, और साथ ही सटीकता में भी वृद्धि हुई।

अब, आइए हम उन चरणों को देखें, जो हमें ऐसी तुलना और रैंकिंग पजल (Comparison and Ranking puzzles) को हल करने के लिए उठाने होते हैं।


## रैंकिंग पजल को हल करने के लिए चरण (Steps for solving Ranking Puzzles)

* चरण I: इसमें शामिल व्यक्तियों/वस्तुओं की संख्या ज्ञात कीजिए। जितने अधिक लोग होंगे, कठिनाई का स्तर उतना ही अधिक होगा।
* चरण II: उन बयानों में उल्लिखित व्यक्तियों/वस्तुओं को रैंक करने के लिए विभिन्न कथनों का उपयोग करें। समय बचाने के लिए नामों के समरूप (acronyms) का प्रयोग करें।
* चरण III: लिंक जानकारी का उपयोग करके विभिन्न कथनों से प्राप्त जानकारी को मिलाएं।

आइए एक उदाहरण पर विचार करें, और उपरोक्त सिद्धांत को कार्य में लेकर देखें।

##### प्र. विशाल आकाश से बड़ा है लेकिन शुभी से छोटा है, यक्ष दीपक से छोटा है लेकिन आकाश से बड़ा है। यदि शुभी, दीपक से छोटी है, तो सबसे बड़ा कौन है?
<pre>(a) आकाश (b) विशाल (c) सुभी (d) दीपक</pre>

व्याख्या:<br>
<div class="Exp">

###### चरण I

व्यक्तियों की संख्या: 5

###### चरण II: व्यक्तियों/वस्तुओं को रैंक करने के लिए विभिन्न कथनों का उपयोग करें

हम समय बचाने के लिए नामों के समरूपों (acronyms) का उपयोग करेंगे।

विशाल, आकाश से बड़ा है लेकिन सुभी से छोटा है। ... I <br>
यक्ष, दीपक से छोटा है लेकिन आकाश से बड़ा है। ... II <br>
शुभी, दीपक से छोटी है। ... III <br>
<img src="../../../images/reasoning/puzzles/comparison-and-ranking-2.png" alt="Comparison and Ranking" style="width:45%;height:45%;">

###### चरण III: लिंक जानकारी का उपयोग करके विभिन्न कथनों से प्राप्त जानकारी को मिलाएं

हम उपरोक्त आकृति में देख सकते हैं कि D और S लिंक हैं।

कथन II और III का उपयोग करते हुए, हम देख सकते हैं कि S, D से छोटा है।

अब, कथन I का उपयोग करके, हम देख सकते हैं कि V, S से छोटा है, और इसलिए D से भी।

तो, D उन सभी में सबसे बड़ा है।
</div> <br>
