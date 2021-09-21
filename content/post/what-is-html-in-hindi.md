---
author: Mragank Shandilya
title: HTML का परिचय और इसकी मूल अवधारणाएं (Introduction to HTML and its Basic Concepts)
date: "2021-09-19"
description: Learn the basics of HTML - HyperText Markup Language # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["html"]
categories: ["html-basics"]
series: ["html-css"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/html-css/html-introduction.png" # Sets featured image on blog post.
thumbnail: "images/html-css/html-introduction.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम जानेंगे - <strong>What is HTML?, in Hindi</strong>

## HTML क्या है? (HTML kya hai?)

HTML (HyperText Markup Language) वेबपेज बनाने के लिए मार्कअप भाषा (Markup language) है - यह वेब पेज की संरचना का वर्णन करती है। <br>
संरचना को elements की एक श्रृंखला का उपयोग करके परिभाषित किया जाता है, जो ब्राउज़र (browser) को कंटेंट को प्रदर्शित करने का तरीका बताता है। जैसे की यह ब्राउज़र को बताता है कि पृष्ठ पर कौन सा element शीर्षक (heading), अनुच्छेद (paragraph), छवि (image), इत्यादि है।

```
<h1> Heading (शीर्षक) </h1>
<p> Paragraph (पैराग्राफ) </p>
```

HTML कोई प्रोग्रामिंग भाषा (programming language) नहीं है। यह बस एक ऐसी भाषा है जिसे ब्राउज़र समझ सकते हैं!
<img src="../../../images/html-css/html-without-css.png" alt="HTML without CSS" style="width:63%;height:63%;"><br>
CSS के बिना HTML बदसूरत दिखता है, जैसे बिना पेंट वाली कार! 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>CSS (Cascading Style Sheets)</b><br>

CSS प्रस्तुति या शैली भाषा (Presentation or Styling Language) है - यह HTML elements को स्टाइल करने के लिए प्रयुक्त होती है| जैसे फोंट (fonts), रंग (colors), संरेखण (alignment), आदि के लिए।
<img src="../../../images/html-css/html-with-css.png" alt="HTML with CSS" style="width:63%;height:63%;">

```
<h1 style="color:DodgerBlue;"> Heading (शीर्षक) </h1>
<p style="color:Tomato;"> Paragraph (पैराग्राफ) </p>
```
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>विभिन्न प्रकार की कंप्यूटर भाषाएँ (Computer languages)</b><br>

वेबसाइट, ब्लॉग, अथवा ऍप बनाने में कई तरह की कंप्यूटर भाषाओँ का प्रयोग किया जाता है, जैसे की: 
* HTML - कंटेंट प्रदर्शन/संरचना के लिए मार्कअप भाषा (Markup Language)
* CSS - डिजाइन के लिए स्टाइलिंग भाषा (Styling Language)
* JavaScript - डायनामिक फ्रंटएंड प्रोग्रामिंग (Dynamic Frontend Programming) के लिए प्रोग्रामिंग भाषा (Programming Language)
* JavaScript, PHP, Python - बैकएंड प्रोग्रामिंग (Backend Programming) के लिए प्रोग्रामिंग भाषा (Programming Language)
* MySQL, MongoDB - डेटाबेस/स्टोरेज (Database/Storage) के लिए 
</div>

किसी भी वेब-प्रौद्योगिकी में HTML और CSS का प्रयोग होता ही है, क्योंकि किसी भी वेबसाइट का दृश्य भाग इनका उपयोग करके ही बनाया जाता है। 

केवल HTML और CSS का उपयोग करके भी वेबसाइट बनाई जा सकती है| ऐसी साइट स्टैटिक वेबसाइट (static website) होगी, क्यूंकि वो ज्यादा कार्य नहीं करेगी। उपयोगकर्ता सिर्फ उसको पढ़ पायेगा, और कुछ ज्यादा नहीं कर पायेगा, जैसे की बटन दबाना, फॉर्म जमा करना, इत्यादि| 

इन सब कामों के लिए डायनामिक वेबसाइट (dynamic website) चाहिए होती है, जिसके लिए कोई न कोई प्रोग्रामिंग भाषा (Programming Language) का प्रयोग अवश्यम्भावी है, जैसे की JavaScript, PHP, Python, इत्यादि| 


## HTML Elements और Tags क्या हैं ? (HTML Elements aur Tags kya hein?)

***Elements*** वो मार्कअप हैं जो किसी पृष्ठ के भीतर कंटेंट की संरचना करते हैं। <br>
जैसे, Heading elements - h1, h2, आदि <br>
Paragraph element - p <br>
<img src="../../../images/html-css/tag-and-element.png" alt="Tag and Element" style="width:27%;height:27%;">

किसी element के आस-पास कोण कोष्ठक (angle brackets - <, >) का उपयोग करने से ***tag*** (टैग) बनता है। <br>
जैसे, Heading tags – `<h1>, <h2>`, आदि <br>
Paragraph tag - `<p>`

Tags आमतौर पर ओपनिंग और क्लोजिंग टैग (opening and closing tags) के जोड़े में होते हैं। जैसे की, ```<table> ..... </table>``` <br>
<img src="../../../images/html-css/opening-and-closing-tag.png" alt="opening and closing tag" style="width:63%;height:63%;">
Opening tag किसी element की शुरुआत को चिह्नित करता है। जैसे की, ```<table>``` <br>
Closing tag उस element के अंत को चिह्नित करता है। जैसे की, ```</table>``` <br>
Opening and Closing tags के बीच आने वाली सभी चीज़ें उस element का कंटेंट हैं।

### सेल्फ क्लोजिंग टैग (Self Closing Tags)

सभी elements के opening and closing tags नहीं होते हैं। कुछ elements केवल एक tag के भीतर रखे जाते हैं| (ऐसा XHTML में होता था)

ऐसे HTML elements में कोई कंटेंट नहीं होता है। अतः इन elements को empty elements (रिक्त elements) कहा जाता है। 

कुछ प्रसिद्ध Self Closing Tags:
<table style="width:100%">
  <tr>
    <th> br </th>
    <th> link </th>
    <th> hr </th>
    <th> img </th>
    <th> meta </th>
  </tr>
</table>

### Attributes

Attributes वे गुण हैं, जिनका उपयोग किसी element के बारे में अतिरिक्त जानकारी प्रदान करने के लिए किया जाता है।

element के नाम के बाद, प्रारंभिक tag के भीतर ही attributes को परिभाषित किया जाता है। <br>
प्रारूप: attribute name = attribute value

उदाहरण के लिए: <br>
<img src="../../../images/html-css/attribute.png" alt="attribute" style="max-width:100%;">

सबसे आम attributes में शामिल हैं:
* id attribute, जो किसी element की पहचान करता है
* class attribute, जो किसी element को वर्गीकृत करता है
* src attribute, जो एम्बेड (embed) करने योग्य कंटेंट के लिए स्रोत निर्दिष्ट करता है, जैसे की `<img>` tag में किसी इमेज का स्रोत 
* href attribute, जो लिंक किए गए संसाधन के लिए हाइपरलिंक संदर्भ (hyperlink reference) प्रदान करता है, जैसे की `<a>` टैग में।

### महत्वपूर्ण टिप्स

* जहां आवश्यक हो वहां End Tag लगाना न भूलें। वर्ना अप्रत्याशित परिणाम और त्रुटियां हो सकती हैं।
* HTML केस संवेदी नहीं है (HTML is not case sensitive)। लेकिन जहां तक ​​संभव हो हमेशा लोअरकेस टैग (lowercase tag) नामों का प्रयोग करें।


## HTML में ब्लॉक-स्तरीय और इनलाइन elements (HTML mein Block-level aur Inline Elements)

प्रत्येक HTML element का एक डिफ़ॉल्ट प्रदर्शन मान (default display value) होता है - ब्लॉक और इनलाइन (block and inline)

### ब्लॉक-स्तरीय elements (Block-level Elements)

* हमेशा एक नई लाइन से शुरु होते हैं 
* पंक्ति में उपलब्ध पूरी चौड़ाई लेते हैं 

### इनलाइन elements (Inline Elements)

* नई लाइन से शुरू नहीं होते हैं 
* पंक्ति में केवल उतनी ही जगह (चौड़ाई में) लेते हैं जितनी आवश्यकता होती है

किसी block element में inline element हो सकता है। लेकिन किसी inline element में block element नहीं हो सकता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हम CSS display property का उपयोग करके किसी element की प्रस्तुति को बदल सकते हैं, जैसे कि display का मान "inline" से "block" में बदलकर। लेकिन यह element की मूल प्रकृति को नहीं बदलेगा - जैसे की, हम अभी भी ऐसे inline element के अंदर कोई block element नहीं डाल पाएंगे।
</div>

HTML elements को हमेशा "block-स्तरीय" elements या "inline-स्तरीय" elements के रूप में वर्गीकृत किया जाता रहा है। लेकिन चूंकि यह एक प्रस्तुतिकरण विशेषता (presentational characteristic) है, इसलिए आजकल इसे CSS द्वारा निर्दिष्ट किया जाता है।


## विकास पर्यावरण (Development Environment)

HTML और CSS में कोडिंग करने के लिए हमे निम्न सॉफ्टवेयर की आवश्यकता होगी: 

* **वेब ब्राउज़र (Web Browser)** - हम HTML, CSS और JavaScript पाठ्यक्रम के लिए Google Chrome का उपयोग करेंगे। यहाँ आप अपने काम को देख पाएंगे, ठीक वैसे ही जैसे आपकी वेबसाइट को उपयोगकर्ता देखेगा| 
* **पाठ संपादक (Text Editor)** - HTML, CSS और JavaScript में कोडिंग करने के लिए हमें एक Text Editor चाहिए होता है| हम VSS Code का उपयोग करेंगे। वेब डेवलपमेंट करने वाले ज्यादातर लोग इसी का इस्तेमाल करते हैं| 

<div class="alert alert-note">
  <div>
    यह HTML पाठ्यक्रम नवीनतम HTML5 मानक का अनुसरण करता है।
  </div>
</div>

