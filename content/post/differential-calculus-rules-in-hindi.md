---
author: Mragank Shandilya
title: डिफरेंशियल कैलकुलस के नियम (Differential Calculus Rules)
date: "2022-01-15"
description: डिफरेंशियल कैलकुलस के नियम (Differential Calculus Rules) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["calculus"]
categories: ["calculus"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/calculus/differential-calculus-rules.png" # Sets featured image on blog post.
thumbnail: "images/calculus/differential-calculus-rules.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Differential Calculus Rules, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../differential-calculus-basics-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../differential-calculus-rules-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस नियम</a> 
* <a href="../integral-calculus-basics-in-hindi" title="Calculus" class="mak-link">इंटीग्रल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../integral-calculus-rules-in-hindi" title="Calculus" class="mak-link">इंटीग्रेशन के नियम</a> 
</div>

हम पहले ही समझ चुके हैं कि हम कुछ सरल फलनों के derivatives (अवकलजों) की गणना कैसे करते हैं। हालाँकि, परीक्षा में जिन अधिकांश प्रश्नों का हम सामना करेंगे, उनमें शायद चीजें इतनी सरल नहीं होंगी।

कई बार हमें जटिल फलनों के derivatives (अवकलजों) की गणना करनी पड़ती है, जो विभिन्न तरीकों से सरल फलनों को मिलाकर बनाए जाते हैं।

<p> उदाहरण के लिए, हम जानते हैं कि: <br><br>
\(\frac{d}{dx} sin x = cos x\) <br><br>
\(\frac{d}{dx} cos x = - sin x\) </p>

<p> हालांकि, \(\frac{d}{dx} sin x \hspace{1ex} cos x ≠ cos x (- sin x)\) </p>

ऐसे जटिल व्यंजकों के derivatives ज्ञात करने के लिए हमें Differential Calculus (अवकलन) के कुछ नियमों का पालन करना होगा। आइए, जानते हैं ऐसे ही कुछ नियमों के बारे में।


## डिफरेंशियल कैलकुलस के नियम (Rules of Differential Calculus)

हम फलन f(x) और g(x) को f और g के रूप में निरूपित करेंगे। और उनके derivative f'(x) और g'(x) को f' और g' के रूप में।

### अचर से गुणा का नियम (Multiplication by constant Rule)

<p> \(\frac{d}{dx} c f = c f'\) </p>

<p> <b> प्र. \(\frac{d}{dx} 5x^2\) क्या होगा </b> </p>

व्याख्या:<br>
<div class="Exp">

<p>\(\frac{d}{dx} 5x^2 = 5 \frac{d}{dx} x^2\) = 5 (2x) = 10x </p>
</div> <br>


### योग और अंतर नियम (Sum and Difference Rule)

<p>\(\frac{d}{dx} [f + g] = f' + g'\) <br><br>
\(\frac{d}{dx} [f - g] = f' - g'\) </p>

<p> <b> प्र. \(\frac{d}{dx} (x^2 + sin x)\) क्या होगा </b> </p>

व्याख्या:<br>
<div class="Exp">

<p> \(\frac{d}{dx} (x^2 + sin x) = \frac{d}{dx} x^2 + \frac{d}{dx} sin x\) = 2x + cos x </p>
</div> <br>


### गुणा और विभाजन नियम (Product and Division Rule)

<p> \(\frac{d}{dx} [f . g] = f' . g + f . g'\) <br><br>
\(\frac{d}{dx} [f / g] = \frac{f' . g - f . g'}{g^2}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>विशेष मामला:</b><br>

<p> \(\frac{d}{dx} [1 / f] = \frac{- f'}{f^2}\) </p>
</div>

<p> <b> प्र. \(\frac{d}{dx} x sin x\) क्या होगा </b> </p>

व्याख्या:<br>
<div class="Exp">

<p>\(\frac{d}{dx} x sin x = x \frac{d}{dx} sin x + sin x \frac{d}{dx} x\) = x cos x + sin x </p>
</div> <br>


### फलनों की संरचना सम्बंधित नियम (Composition of Functions Rule)

<p>\(\frac{d}{dx} fºg = (f'ºg) . g'\) <br>
या \(\frac{d}{dx} f(g) = f'(g) . g'\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

उपरोक्त को हम निम्न प्रकार से भी निरूपित कर सकते हैं।

<p>\(\frac{dy}{dx} = \frac{dy}{du} . \frac{du}{dx}\) </p>
</div>

<p><b> प्र. \(\frac{d}{dx} sin x^3\) क्या होगा </b> </p>

व्याख्या:<br>
<div class="Exp">

<p> यहाँ, g = \(x^3\), और इसलिए f(g) = sin g </p>

<p> तो, f'(g) = cos g = cos \(x^3\) <br>
g' = \(\frac{d}{dx} g = \frac{d}{dx} x^3 = 3x^2\) </p>

<p> \(\frac{d}{dx} sin x^3 = f'(g) . g' = 3x^2 . cos x^3\) </p>
</div> <br>

