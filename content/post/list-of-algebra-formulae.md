---
author: Mragank Shandilya
title: बीजगणित क्या होता है? (What is Algebra?)
date: "2022-01-02"
description: बीजगणित क्या होता है? (What is Algebra?) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["algebra"]
categories: ["algebra"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/algebra/algebra1.png" # Sets featured image on blog post.
thumbnail: "images/algebra/algebra1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>What is Algebra?, in Hindi</strong>

बीजगणित गणित का एक ऐसा हिस्सा है जहां हम समीकरण/सूत्र/असमानता (equation/formula/inequality) में संख्याओं को निरूपित करने के लिए अक्षरों/प्रतीकों का उपयोग करते हैं, और फिर कुछ नियमों का उपयोग करके उनमें हेरफेर करते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>सममित और असममित व्यंजक (Symmetrical and Unsymmetrical expression)</b><br>

* असममित व्यंजक (Unsymmetrical expression): यह एक ऐसा व्यंजक है जिसमें सभी चरों (जैसे a, b, c ...) का भार समान नहीं होता है। <br><br>
<p> उदाहरण के लिए, \(a + b + c^2, a^2 + b^2 - c^2, a^3 + b^3 + c^2\) आदि </p>

* सममित व्यंजक (Symmetrical expression): यह एक ऐसा व्यंजक है जिसमें सभी चरों (variables) का भार बराबर होता है। <br><br>
<p> उदाहरण के लिए, a + b + c, 3a + 3b + 3c, \(a^2 + b^2 + c^2, a^3 + b^3 + c^3\), ab + bc + ca आदि। <br ><br>
इसलिए, किसी सममित व्यंजक में हम चरों की स्थिति को आपस में बदल सकते हैं। </p>
</div>


## बीजगणित सूत्र (Algebra Formulae)

अब, आइए कुछ बुनियादी सूत्रों पर एक नजर डालते हैं जिनका उपयोग हम इस अध्याय में करने जा रहे हैं।

### वर्ग सूत्र (Square Formulae)

#### वर्ग सूत्र प्रकार 1: दो चर (Two Variables)

<p> \((x + y)^2 = x^2 + y^2 + 2xy = (x – y)^2 + 4xy\) <br>
\((x – y)^2 = x^2 + y^2 – 2xy = (x + y)^2 - 4xy\) </p>

<p> \(x^2 – y^2 = (x + y)(x – y)\) <br>
\(x^2 + y^2 = (x + y)^2 – 2xy = (x – y)^2 + 2xy\) </p>

<p> \((x + y)^2 + (x – y)^2 = 2(x^2 + y^2)\) <br>
\((x + y)^2 – (x – y)^2 = 4xy\) </p>

#### वर्ग सूत्र प्रकार 2: तीन चर (Three Variables)

<p> \((x +y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx)\) <br>
\((x – y + z)^2 = x^2 + y^2 + z^2 + 2(–xy – yz + zx)\) <br>
\((x - y – z)^2 = x^2 + y^2 + z^2 + 2(-xy + yz – zx)\) </p>

#### वर्ग सूत्र प्रकार 3

<p> यदि \((x – a)^2 + (y – b)^2 + (z – c)^2\) = 0, तो x – a = 0, y – b = 0 & z – c = 0 <br>
यानी, अगर \(A^2 + B^2 + C^2\) = 0, तो A = B = C = 0 </p>

<p> \(A^2 + B^2 + C^2 – AB – BC – CA\) = 0, तो A = B = C <p>


### घन सूत्र (Cubic Formulae)

#### घन सूत्र प्रकार 1: दो चर (Two Variables)

<p> \((x + y)^3 = x^3 + y^3 + 3xy (x + y)\) <br>
\((x – y)^3 = x^3 – y^3 – 3xy(x – y)\) </p>

<p> \((x + y)^3 + (x – y)^3 = 2x(x^2 + 3y^2)\) <br>
\((x + y)^3 – (x – y)^3 = 2y(3x^2 + y^2)\) </p>

<p> \(x^3 + y^3 = (x + y) (x^2 + y^2 – xy) = (x + y)^3 – 3xy (x + y)\) <br>
\(x^3 – y^3 = (x – y) (x^2 + y^2 + xy) = (x – y)^3 + 3xy (x – y)\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> \(x^n – y^n = (x – y) (x^{n - 1} + x^{n - 2}.y + x^{n - 3}.y^2 + ... + y^{n - 1})\) </p>
</div>

#### घन सूत्र प्रकार 2: तीन चर (Three Variables)

<p> \((x + y + z)^3 = x^3 + y^3 + z^3 + 3(x + y) (y + z) (z + x)\) </p>

<p> \(x^3 + y^3 + z^3 – 3 xyz = (x + y + z) (x^2 + y^2 + z^2 – xy – yz – zx)\) <br>
= \((x + y + z) × \frac{1}{2} [(x - y)^2 + (y - z)^2 + (z - x)^2]\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> जब x + y + z = 0, तो \(x^3 + y^3 + z^3 = 3xyz\) </p>
</div>

### फलन और प्रतिलोम फलन सूत्र (Function and Inverse Function Formulae)

<p><b> प्रकार 1: \(x + \frac{1}{x}\) </b></p>

<p> यदि \(x + \frac{1}{x}\) = a, तो: </p>

* <p> \(x - \frac{1}{x} = \sqrt{a^2 - 4}\) </p>

* <p> \(x^2 + \frac{1}{x^2} = a^2 - 2\) </p>

* <p> \(x^3 + \frac{1}{x^3} = a^3 - 3a\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

<p> यदि \(x + \frac{1}{x}\) = 1, तो \(x^3\) = –1. <br>
यदि \(x + \frac{1}{x}\) = -1, तो \(x^3\) = 1 </p>

<p> यदि \(x + \frac{1}{x}\) = 2, तो x = 1 <br>
यदि \(x + \frac{1}{x}\) = -2, तो x = – 1 </p>

<p> यदि \(x + \frac{1}{x} = \sqrt{3}\), तो \(x^6\) = –1 </p>
</div>


<p><b> प्रकार 2: \(x - \frac{1}{x}\) </b></p>

<p> यदि \(x - \frac{1}{x}\) = a, तो: </p>

* <p> \(x + \frac{1}{x} = \sqrt{a^2 + 4}\) </p>

* <p> \(x^2 + \frac{1}{x^2} = a^2 + 2\) </p>

* <p> \(x^3 - \frac{1}{x^3} = a^3 + 3a\) </p>

<p><b> प्रकार 3: \(x^2 + \frac{1}{x^2}\) </b></p>


<p> यदि \(x^2 + \frac{1}{x^2}\) = a, तो: </p>

* <p> \(x + \frac{1}{x} = \sqrt{a + 2}\) </p>

* <p> \(x - \frac{1}{x} = \sqrt{a - 2}\) </p>

<p> यदि \(x^2 + \frac{1}{x^2}\) = 1, तो: </p>

* <p> \(x^3 + \frac{1}{x^3}\) = 0 and \(x^6\) = –1 </p>

#### प्रकार 4: उच्च सम घातें (Higher Even Powers)

<p> \(x^4 + \frac{1}{x^4} = (x^2 + \frac{1}{x^2})^2 - 2 = [(x - \frac{1}{x})^2 + 2]^2 - 2\) </p>

<p> \(x^6 + \frac{1}{x^6} = (x^3 + \frac{1}{x^3})^2 - 2 = (x^2 + \frac{1}{x^2})^3 - 3(x^2 + \frac{1}{x^2})\) </p>

#### प्रकार 5: उच्च विषम घातें (Higher Odd Powers)

<p> \(x^5 + \frac{1}{x^5} = (x^2 + \frac{1}{x^2}) (x^3 + \frac{1}{x^3}) - (x + \frac{1}{x})\) <br><br>
\(x^7 + \frac{1}{x^7} = (x^4 + \frac{1}{x^4}) (x^3 + \frac{1}{x^3}) - (x + \frac{1}{x})\) </p>

<p>\(x^5 - \frac{1}{x^5} = (x^2 + \frac{1}{x^2}) (x^3 - \frac{1}{x^3}) - (x - \frac{1}{x})\) <br><br>
\(x^7 - \frac{1}{x^7} = (x^4 + \frac{1}{x^4}) (x^3 - \frac{1}{x^3}) + (x - \frac{1}{x})\) </p>


## बीजगणित के गुण (Algebra Properties)

### गुण 1: बंटन नियम (Distributive law)

x (y + z) = xy + xz 


### गुण 2: योगांतरानुपात नियम (Componendo and Dividendo)

<p> यदि \(\frac{a}{b} = \frac{x}{y}\), तो \(\frac{a + b}{a - b} = \frac{x + y}{x - y}\) </p>

<p> यदि \(\frac{x + y}{x - y}\) = z, तो , \(\frac{x}{y} = \frac{z + 1}{z - 1}\) </p>
