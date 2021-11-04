---
author: Mragank Shandilya
title: सम्मिश्र संख्याओं का परिचय (Complex Numbers in Hindi)
date: "2021-11-04"
description: Complex Numbers in Hindi # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["complex-numbers"]
categories: ["complex-numbers"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/higher-maths/complex-numbers.svg" # Sets featured image on blog post.
thumbnail: "images/higher-maths/complex-numbers.svg" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में, हम गणित के एक महत्वपूर्ण अध्याय - सम्मिश्र संख्याओं (Complex Numbers, कॉम्प्लेक्स नंबर्स), के मूल सिद्धांतों को समझने की कोशिश करेंगे।

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Complex Numbers, in Hindi</strong>

## सम्मिश्र संख्या क्या हैं? (Complex Numbers kya hein?)

एक सम्मिश्र संख्या वास्तविक और काल्पनिक संख्याओं का एक संयोजन है। इसे इस प्रकार दर्शाया जाता है: a + ib <br>
<img src="../../../images/higher-maths/complex-number-1.png" alt="Complex Numbers" style="width:72%;height:72%;">

यहाँ 'a' और 'b' वास्तविक संख्याएँ हैं और 'i' (Iota) एक काल्पनिक संख्या है। i का मान -1 होता है।

इसलिए, यह समझने के लिए कि सम्मिश्र संख्याएँ क्या हैं, हमें वास्तविक संख्याओं और काल्पनिक संख्याओं को समझना चाहिए।

वास्तविक संख्याएँ (Re) वे संख्याएँ हैं जिनसे हम अपने दैनिक जीवन में दो-चार होते रहते हैं, जैसे की शून्य, धनात्मक संख्याएँ (1, 2, 5…), ऋणात्मक संख्याएँ (-1, -4, -134…), भिन्न (1/2, 3/5, 5/3…)। अर्थात्, वे सभी परिमेय और अपरिमेय संख्याओं (rational and irrational numbers) को अपने अंदर समाहित करते हैं। इन्हें एक संख्या रेखा पर निरूपित किया जा सकता है। किसी भी वास्तविक संख्या का वर्ग एक धनात्मक संख्या होती है।

इसके विपरीत, किसी संख्या रेखा पर काल्पनिक संख्याओं (Im) को प्रदर्शित नहीं किया जा सकता है। क्यों?

क्योंकि वे काल्पनिक हैं - उनका कोई मूर्त मूल्य नहीं है। कोई भी काल्पनिक संख्या किसी ऋणात्मक संख्या का वर्गमूल होती है, जैसे की √-3, √-5, आदि। दूसरे शब्दों में, यदि हम एक काल्पनिक संख्या का वर्ग करते हैं, तो परिणाम के रूप में हमें एक ऋणात्मक संख्या प्राप्त होगी।

एक सम्मिश्र संख्या, वास्तविक संख्याओं और काल्पनिक संख्याओं को मिलाकर बनती है, जैसे की 4 + √-5, 3 + √-2, आदि। हम इन्हें निम्न प्रकार से भी निरूपित कर सकते हैं:
* 4 + √-5 = 4 + i5
* 3 + √-2 = 3 + i2
* और इसी तरह आगे भी ...

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

वास्तविक संख्याएँ और काल्पनिक संख्याएँ भी सम्मिश्र संख्याएँ ही होती हैं।
* यदि सम्मिश्र संख्या a + ib में, b शून्य है, तो यह एक शुद्ध वास्तविक संख्या होगी। उदाहरण के लिए, 7 + 0i, -2 + 0i, आदि।
* यदि सम्मिश्र संख्या a + ib में, a शून्य है, तो यह एक शुद्ध काल्पनिक संख्या होगी। उदाहरण के लिए, 0 + 2i, 0 - 7i, आदि।
* शून्य भी एक सम्मिश्र संख्या है। इसे 0 + 0i के रूप में दर्शाया जा सकता है
</div>

### सम्मिश्र संख्याओं के गुण

#### गुण 1

यदि a, और b वास्तविक संख्याएँ हैं और a + bi = 0 है, तो इसका अर्थ है कि:
* a = 0, और
* b = 0

#### गुण 2

यदि a, b, c, और d वास्तविक संख्याएँ हैं और a + bi = c + di, तो इसका अर्थ है कि:
* a = c, और 
* b = d

### सम्मिश्र संख्याओं का आरेखीय निरूपण 

ग्राफ़ पर एक सम्मिश्र संख्या को निरूपित करने के लिए, हम वास्तविक संख्याओं को X-अक्ष (तथाकथित वास्तविक अक्ष) और काल्पनिक संख्याओं को Y-अक्ष (तथाकथित काल्पनिक अक्ष) पर रखते हैं।

उदाहरण के लिए, हम सम्मिश्र संख्या 2 + 4i को निम्नानुसार निरूपित कर सकते हैं: <br>
<img src="../../../images/higher-maths/complex-number-2.png" alt="Complex Numbers" style="width:81%;height:81%;">

सम्मिश्र संख्याओं वाले तल को Argand (या सम्मिश्र) तल कहते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

सामान्य निर्देशांक बिंदुओं (coordinate points) की तरह, हम सम्मिश्र संख्याओं को ध्रुवीय रूप (polar form) में भी निरूपित कर सकते हैं।

ध्रुवीय रूप में, सम्मिश्र संख्या को r और θ के रूप में दर्शाया जाता है। यहाँ, r उस सदिश की लंबाई है जो मूल (origin) से सम्मिश्र संख्या के बिंदु को जोड़ता है, और θ ऐसे सदिश द्वारा वास्तविक अक्ष के साथ बनाया गया कोण है।
</div>

### आयोटा (i) के घातांक - Power of Iota

<p>
हम पहले से ही जानते हैं कि i का मान √-1 है। यानी, \(i^2\) = -1. 
</p>

<p>
यदि k एक पूर्णांक है, तो: <br>
\(i^{4k + 1} = i\) <br>
\(i^{4k + 2} = i^2 = -1\)<br>
\(i^{4k + 3} = i^3 = (-1)i = -i\) <br>
\(i^{4k + 4} = i^4 = 1\)
</p>

हम i के नकारात्मक घाताकों को भी ज्ञात कर सकते हैं। <br>
<p>
उदाहरण के लिए, \(i^{-1} = 1/i = (1/i) × (i/i) = i/i^2 = i/(-1) = -i\)
</p>

### सम्मिश्र संख्याओं का निरपेक्ष मान (Absolute Value of Complex Numbers)

किसी वास्तविक संख्या का निरपेक्ष मान उस संख्या का धनात्मक मान होता है। इसे मापांक (modulus) द्वारा निरूपित किया जाता है।

उदाहरण के लिए, 5 का निरपेक्ष मान, अर्थात |5| = 5 <br>
-5 का निरपेक्ष मान, अर्थात |-5| = 5

सम्मिश्र संख्याओं के मामले में, हम निरपेक्ष मान की गणना कुछ अलग तरीके से करते हैं। यदि z = a + ib एक सम्मिश्र संख्या है, तो:

<p>
z का निरपेक्ष मान = |z| = |a + ib| = \(√(a^2 + b^2)\)
</p>

<p>
उदाहरण के लिए, 3 + 4i का निरपेक्ष मान = |3 + 4i| = \(√(3^2 + 4^2) = √(9 + 16) = √25\) = 5
</p>

<p>
यदि \(z_1\) और \(z_2\) दो सम्मिश्र संख्याएँ हैं, तो: <br>
\(|z_1 + z_2| ≤ |z_1|+|z_2|\)
</p>

आइए कुछ उदाहरण देखें।

<p>
अगर \(z_1\) = 3 + 4i, और \(z_2\) = 6 + 8i, तो: <br>
\(z_1 + z_2\) = (3 + 4i) + (6 + 8i) = 9 + 12i <br>
\(|z_1| = √(3^2 + 4^2)\) = 5 <br>
\(|z_2| = √(6^2 + 8^2)\) = 10 <br>
\(|z_1 + z_2| = √(9^2 + 12^2) = √225\) = 15  <br>
अब, 15 = 5 + 10
</p>

<p>
अगर \(z_1\) = 1 - 2i, और \(z_2\) = 3 + 5i, तो: <br>
\(z_1 + z_2\) = (1 - 2i) + (3 + 5i) = 4 + 3i <br>
\(|z_1| = √(1^2 + 2^2) = √5\) <br>
\(|z_2| = √(3^2 + 5^2) = √34\) <br>
\(|z_1 + z_2| = √(4^2 + 3^2)\) = 5 <br>
अब, 5 < √5 + √34
</p>

### सम्मिश्र संख्याओं का संयुग्म (Conjugate of Complex Numbers)

यदि हमारे पास एक सम्मिश्र संख्या z = a + ib है, तो इसका संयुग्म z̄ = a – ib होगा। एक सम्मिश्र संख्या z के संयुग्म को सम्मिश्र संख्या, अर्थात z̄ के ऊपर एक दंड द्वारा निरूपित किया जाता है।

दो संयुग्मित सम्मिश्र संख्याओं के योग और गुणा से एक वास्तविक संख्या प्राप्त होती है। दूसरे शब्दों में, यदि दो सम्मिश्र संख्याओं का योग और गुणनफल वास्तविक है, तो उन दो सम्मिश्र संख्याओं को एक दूसरे से संयुग्मित होना चाहिए।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आप सम्मिश्र संख्याओं के लिए निम्नलिखित ग्राफ-निर्माता सॉफ्टवेयर का उपयोग कर सकते हैं। यह किसी सम्मिश्र संख्या के संयुग्म को भी दर्शाता है।

<div><a href="https://planetcalc.com/7854/" data-lang="en" data-code="" data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004" data-v="4038">सम्मिश्र संख्याएं और उनके संयुग्म (Complex numbers & their Conjugates)</a><script src="https://embed.planetcalc.com/widget.js?v=4038"></script></div>
</div>


## सम्मिश्र संख्याओं पर बीजगणितीय संक्रियाएँ (Algebraic Operations on Complex Numbers)

वास्तविक संख्याओं की तरह, हम सम्मिश्र संख्याओं पर भी जोड़, घटाव, गुणा और भाग की संक्रियाएँ कर सकते हैं।

### सम्मिश्र संख्याओं का जोड़ और घटाव

सम्मिश्र संख्याओं को जोड़ते या घटाते समय, हम वास्तविक भागों और काल्पनिक भागों को अलग-अलग जोड़ते / घटाते हैं।

(a + ib) + (x +iy) = (a + x) + i(b + y) <br>
(a + ib) - (x +iy) = (a - x) + i(b - y)

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p>
सम्मिश्र संख्याएँ योग के क्रमविनिमेय नियम (commutative law of addition) का पालन करती हैं, अर्थात् \(z_1 + z_2 = z_2 + z_1\) <br>
सम्मिश्र संख्याएँ योग के साहचर्य नियम (associative law of addition) का भी पालन करती हैं, अर्थात् \((z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)\)
</p>
</div>

### सम्मिश्र संख्याओं का गुणन

सम्मिश्र संख्याओं के गुणन में, हम दो द्विपदों (binomials) को गुणा करने की प्रक्रिया के समान प्रक्रिया का पालन करते हैं, अर्थात वितरण गुणन (distributive multiplication)।

<p>
\((a + ib) . (x + iy) = ax + i^2 by + iay + ibx = (ax - by) + i(ay + bx)\) <br>
(क्यूंकि \(i^2\) = -1)
</p>

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>चेतावनी</b><br>

जहाँ तक काल्पनिक संख्याओं के गुणन का संबंध है, निम्नलिखित बातों का ध्यान रखें।
काल्पनिक संख्याओं के मामले में √p × √q, pq के बराबर नहीं होता है।

<p>
उदाहरण के लिए, i × i = √-1 × √-1 = √(-1  × -1) = √1 = 1  (गलत) <br>
हम जानते हैं कि, \(i^2\) = -1 (1 नहीं)
</p>
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p>
सम्मिश्र संख्याएँ गुणन के क्रमविनिमेय नियम (commutative law of multiplication) का पालन करती हैं, अर्थात् \(z_1 . z_2 = z_2 . z_1\) <br>
सम्मिश्र संख्याएँ गुणन के साहचर्य नियम (associative law of multiplication) का भी पालन करती हैं, अर्थात् \((z_1 . z_2) . z_3 = z_1 . (z_2 . z_3)\) <br>
सम्मिश्र संख्याएँ वितरण नियम (distributive law) का भी पालन करती हैं, अर्थात् \(z_1 . (z_2 + z_3) = z_1 . z_2 + z_1 . z_3\)
</p>
</div>

### सम्मिश्र संख्याओं का विभाजन

दो सम्मिश्र संख्याओं का विभाजन करते समय, हम हर में स्तिथ सम्मिश्र संख्या के संयुग्म (conjugate of the complex number in the denominator) के साथ अंश और हर दोनों को गुणा करते हैं। फिर हम इसे सरल करते हैं।

<p>
\(\frac{a + ib}{x + iy} = \frac{(a + ib) . (x - iy)}{(x + iy) . (x - iy)} = \frac{ax + by + i(bx - ay)}{x^2 + y^2} = \frac{(ax + by)}{(x^2 + y^2)} + i \frac{(bx - ay)}{(x^2 + y^2)}\)
</p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

सम्मिश्र संख्याओं के लिए आप निम्नलिखित ग्राफ कैलकुलेटर का उपयोग कर सकते हैं।

<div><a href="https://planetcalc.com/7936/" data-lang="en" data-code="" data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004" data-v="4043">Complex number elementary operations</a><script src="https://embed.planetcalc.com/widget.js?v=4043"></script></div>
</div>


## सम्मिश्र संख्या सर्वसमिकाएँ (Complex Number Identities)

### वर्ग (Squares)

<p>
\((z_1 + z_2)^2 = (z_1)^2 + (z_2)^2 + 2 z_1 × z_2\) <br>
\((z_1 – z_2)^2 = (z_1)^2 + (z_2)^2 – 2 z_1 × z_2\) <br>
\((z_1)^2 – (z_2)^2 = (z_1 + z_2)(z_1 – z_2)\)
</p>

### घन (Cubes)

<p>
\((z_1 + z_2)^3 = (z_1)^3 + 3(z_1)^2 z_2 + 3(z_2)^2 z_1 + (z_2)^3\) <br>
\((z_1 – z_2)^3 = (z_1)^3 – 3(z_1)^2 z_2 + 3(z_2)^2 z_1 – (z_2)^3\)
</p>
