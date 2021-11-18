---
author: Mragank Shandilya
title: विभिन्न प्रकार के संचय प्रश्न (Types of Combination Questions)
date: "2021-11-18"
description: Combination Questions in Hindi # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["p-and-c"]
categories: ["permutation-and-combination"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/higher-maths/permutation-and-combination-1.png" # Sets featured image on blog post.
thumbnail: "images/higher-maths/permutation-and-combination-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Types of Combination Questions, in Hindi</strong> 

इस लेख में, हम उन विभिन्न तरह के प्रश्नों पर एक नज़र डालेंगे जो ***संचय (Combination)*** की अवधारणा पर बनते हैं।

## n विशिष्ट चीज़ें (n distinct items)

### r चीज़ों का चयन (Selecting r items)

<p>n विशिष्ट चीज़ों में से r वस्तुओं का चयन करने के तरीकों की संख्या = \(C^n_r\)</p>

<p>सभी अलग-अलग चीज़ों को चुनने के तरीकों की संख्या = \(C^n_n = C^n_0\) = 1 (केवल एक संभव तरीका)</p>

##### प्र. एक टीम में 9 सदस्यों में से 3 को मॉड्यूल लीड के रूप में चुना जाना है। इसे कितने तरीकों से किया जा सकता है?

व्याख्या:<br>
<div class="Exp">
<p>
9 अलग-अलग सदस्यों में से 3 सदस्यों को चुनने के तरीकों की संख्या = \(C^n_r\) <br>
= \(C^9_3 = \frac{9×8×7}{3×2×1}\) = 84
</p>
</div> <br>

### 0, 1 या अधिक चीज़ों का चयन (Selecting 0, 1 or more items)

<p>
n चीज़ों में से, 0 चीज़ों को \(C^n_0\) तरीकों से चुना जा सकता है; 1 चीज़ को \(C^n_1\) तरीकों से चुना जा सकता है; 2 चीज़ों को \(C^n_2\) तरीकों से चुन सकते हैं; तीन चीज़ों को \(C^n_3\) तरीकों से चुन सकते हैं, और इसी तरह आगे भी।
</p>

<p>तो, n विशिष्ट चीज़ों से 0 या अधिक चीज़ों का चयन करने के तरीकों की संख्या = \(C^n_0 + C^n_1 + C^n_2 + … + C^n_n = 2^n\) </p> 

<p>n विशिष्ट (अलग-अलग) चीज़ों से 1 या अधिक चीज़ चुनने के तरीकों की संख्या = \(C^n_1 + C^n_2 + … + C^n_n = 2^n\) - 1 </p>    <br><br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>इसे देखने का दूसरा तरीका भी है</b><br>

चयन करते हुए प्रत्येक चीज़ के साथ दो बातें हो सकती हैं; इसे या तो चुना जाता है या खारिज कर दिया जाता है।

<p>तो, n विशिष्ट वस्तुओं से 0 या अधिक वस्तुओं का चयन करने के तरीकों की संख्या = \(2^n\)</p>

<p>लेकिन, इन \(2^n\) तरीकों में वह मामला भी शामिल है जब सभी वस्तु अस्वीकार कर दी जाती हैं।
इसलिए, n विशिष्ट वस्तुओं से 1 या अधिक वस्तुओं का चयन करने के तरीकों की संख्या = \(2^n\) - 1</p>
</div>

##### प्र. एक व्यक्ति अपने जन्मदिन की पार्टी में अपने 5 दोस्तों में से एक या अधिक को कितने तरीकों से आमंत्रित कर सकता है?

व्याख्या:<br>
<div class="Exp">
व्यक्ति को 5 विशिष्ट मित्रों में से एक या अधिक का चयन करने की आवश्यकता है। <br>
<p>तो, आवश्यक तरीकों की संख्या = \(2^n - 1 = 2^5\) - 1 = 32 – 1 = 31</p>
</div> <br>

<hr>

## n समान चीज़ें (n identical items)

सभी चीज़ें चुनने के तरीकों की संख्या - केवल एक संभव तरीका

n समान वस्तुओं में से r वस्तु चुनने के तरीकों की संख्या = 1 <br>
(आप जिन भी r चीज़ों को चुनेंगे, वे सब समान ही लगेंगे)

n समान वस्तुओं में से 0 या अधिक वस्तुओं का चयन करने के तरीकों की संख्या = n + 1

n समान वस्तुओं में से 1 या अधिक वस्तुओं का चयन करने के तरीकों की संख्या = n

उन तरीकों की कुल संख्या जिनमें p + q + r + ....... चीजों में से कुछ या सभी को लेकर चयन किया जा सकता है (जहां p एक प्रकार के समान हैं, q दूसरे प्रकार के समान हैं, r तीसरे प्रकार के समान हैं, और इसी तरह) = [(p + 1)(q + 1)(r + 1) ...] - 1

<hr>

## समान और विशिष्ट वस्तुओं का मिश्रण (Mix of identical and distinct items)

<p>अगर p एक प्रकार की समान चीज़ें हैं, q दूसरी तरह की समान चीज़ें हैं, r तीसरी तरह की समान चीज़ें हैं, और n भिन्न वस्तुएँ हैं, तो उनमें से एक या अधिक वस्तुओं को चुनने के तरीकों की कुल संख्या = [(p + 1)(q + 1)(r + 1)]\(2^n\) - 1 </p>

