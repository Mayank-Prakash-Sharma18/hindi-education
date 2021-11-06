---
author: Mragank Shandilya
title: HTML दस्तावेज़ संरचना (HTML Document Structure)
date: "2021-11-05"
description: Learn the basics of HTML Document Structure # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["html"]
categories: ["html-basics"]
series: ["html-css"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/html-css/html-structure.png" # Sets featured image on blog post.
thumbnail: "images/html-css/html-structure.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम जानेंगे - <strong>What is HTML Document Structure?, in Hindi</strong>

सभी HTML दस्तावेज़ों में एक परिभाषित संरचना होती है जिसमें ये तत्व शामिल होते हैं:

`<!DOCTYPE html>, <html>, <head>, <body>`

### दस्तावेज़ के प्रकार की घोषणा (document type declaration)

यह वेब ब्राउज़र को सूचित करता है कि HTML के किस संस्करण का उपयोग किया जा रहा है। इसे HTML दस्तावेज़ की शुरुआत में रखा जाता है। इस वेबसाइट का हमारा पाठ्यक्रम HTML के नवीनतम संस्करण - HTML5 मानक का अनुसरण करता है।
अतः, हमारे दस्तावेज़ प्रकार की घोषणा (document type declaration) `<!DOCTYPE html>` है <br>
<img src="../../../images/html-css/html-document-structure-1.png" alt="html document structure" style="max-width:100%;">

### `<html>` तत्व
यह HTML पृष्ठ का मूल तत्व है। HTML दस्तावेज़ `<html>` से शुरू होता है और `</html>` पर समाप्त होता है।

### `<head>` तत्व
* यह `<html>` तत्व के अंदर रखा जाता है| 
* दस्तावेज़ के शीर्ष की पहचान करता है। इसमें HTML पृष्ठ के बारे में मेटा जानकारी शामिल होती है।
* `<head>` तत्व के अंदर की सामग्री वेब पेज पर प्रदर्शित नहीं होती है।

### `<body>` तत्व
* यह `<html>` तत्व के अंदर रखा जाता है| 
* दस्तावेज़ के मुख्य भाग की पहचान करता है।
* वेब पेज के भीतर सभी दृश्यमान सामग्री `<body>` तत्व के भीतर ही रखी जाती है।

## नेस्टेड तत्व (Nested Elements)

HTML तत्वों को नेस्ट किया जा सकता है - अर्थात HTML तत्वों के अंदर अन्य HTML तत्व भी रखे जा सकते हैं| 

```
<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
     <title>Hindi Education</title>
  </head>
  <body>
     <h1>नया शीर्षक (New Heading)</h1>
     <p>नया अनुच्छेद (New Paragraph)</p>
  </body>
</html>
```
जब आप तत्वों को नेस्ट (nest) करते हैं, तो आप उन्हें सही से इंडेंट (indent) भी करें, ताकि दस्तावेज़ संरचना सुव्यवस्थित और सुपाठ्य रहे। इससे किसी और को, या आपको ही भविष्य में उस HTML कोड को पढ़ने में आसानी होगी| 

## HTML और CSS टिप्पणियाँ (HTML & CSS Comments)

HTML टिप्पणियाँ `<!--` से शुरू होती हैं और `-->` . के साथ समाप्त होती हैं

CSS टिप्पणियाँ `/*` से शुरू होती हैं और `*/` के साथ समाप्त होती हैं

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

VS Code में किसी भी लाइन या एकाधिक लाइनों को टिप्पणी में परिवर्तित करने के लिए, इसका प्रयोग करें: ctrl + /
</div>

