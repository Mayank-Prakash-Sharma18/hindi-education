---
author: Mragank Shandilya
title: क्रमचय और संचय क्या होते हैं ? (Introduction to Permutation and Combination)
date: "2021-11-10"
description: Permutation and Combination in Hindi # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["p-and-c"]
categories: ["permutation-and-combination"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/higher-maths/permutation-and-combination.jpg" # Sets featured image on blog post.
thumbnail: "images/higher-maths/permutation-and-combination.jpg" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Permutation and Combination, in Hindi</strong>

इस लेख में हम क्रमचय और संचय की मूल अवधारणाओं को जानेंगे| 

## गणना के मूल सिद्धांत (Fundamental Principles Of Counting)

क्रमचय और संचय मूल रूप से ऐसी विधियां हैं जो हमें तेजी से गिनने में सक्षम बनाती हैं।

यह दो गणना सिद्धांतों पर आधारित हैं:
* गुणन का मूल सिद्धांत (Fundamental Principle Of Multiplication)
* जोड़ का मूल सिद्धांत (Fundamental Principle Of Addition)

### गुणन का मूल सिद्धांत (Fundamental Principle Of Multiplication)

गुणन का मूल सिद्धांत - यदि दो कार्य ऐसे हैं, कि उनमें से एक को m तरीके से पूरा किया जा सकता है और जब यह पूरा हो जाता है (m तरीकों में से किसी भी एक तरीके से), तो दूसरा कार्य n तरीकों से पूरा किया जा सकता है; तो दोनों कार्यों को m × n तरीकों से पूरा किया जा सकता है। <br>
<img src="../../../images/higher-maths/principal-of-multiplication.png" alt="permutation and combination" style="width:81%;height:81%;">
ध्यान दें कि दूसरे कार्य का पूरा होना पहले कार्य के पूरा होने पर निर्भर है। <br>

यहाँ ध्यान देने योग्य शब्द ***और*** है - हमें पहले कार्य और उसके बाद दूसरे कार्य को खत्म करने की जरूरत है, अर्थार्थ दोनों को।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

क्रमचय (Permutation) में गुणन के मूल सिद्धांत का प्रयोग किया जाता है। 
</div>

##### प्र. शहरों A और B को जोड़ने वाली 2 सड़कें हैं, और शहरों B और C को जोड़ने वाली 3 सड़कें हैं। शहर A से C तक कितने तरीकों से यात्रा कर सकते हैं? 
(a) 8 (b) 6 (c) 12 (d) 14 <br>
<img src="../../../images/higher-maths/principal-of-multiplication1.png" alt="permutation and combination" style="width:81%;height:81%;">

व्याख्या:<br>
<div class="Exp">
व्यक्ति को शहर B और फिर शहर C की यात्रा करने की आवश्यकता है| 

शहर A से शहर B तक जाने वाले रास्तों की संख्या = 2 <br>
शहर B से शहर C तक जाने वाले रास्तों की संख्या = 3

तो, शहर A से शहर C तक जाने के तरीकों की कुल संख्या = 2 × 3 = 6 तरीके <br>
उत्तर: (b)
</div> <br>

### जोड़ का मूल सिद्धांत (Fundamental Principle Of Addition)

जोड़ का मूल सिद्धांत - यदि दो कार्य ऐसे हैं कि उन्हें क्रमशः m और n तरीकों से स्वतंत्र रूप से किया जा सकता है, तो दोनों में से कोई भी कार्य (m + n) तरीकों से किया जा सकता है। <br>
<img src="../../../images/higher-maths/principal-of-addition.png" alt="permutation and combination" style="width:81%;height:81%;">
ध्यान दें कि दो कार्यों में से एक का पूरा होना दूसरे कार्य के पूरा होने से प्रभावित नहीं होता है। <br>

यहाँ ध्यान देने योग्य शब्द ***या*** है - हमें पहले कार्य या दूसरे कार्य को खत्म करने की जरूरत है, दोनों को नहीं। 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

जोड़ के मौलिक सिद्धांत का उपयोग संचय (Combination) में किया जाता है।
</div>

##### प्र. शहरों A और B को जोड़ने वाली 2 सड़कें हैं, और शहरों A और C को जोड़ने वाली 3 सड़कें हैं। शहर A से शहर B या C तक कितने तरीकों से यात्रा कर सकते हैं?
(a) 8 (b) 10 (c) 5 (d) 7 <br>
<img src="../../../images/higher-maths/principal-of-multiplication2.png" alt="permutation and combination" style="width:81%;height:81%;">

व्याख्या:<br>
<div class="Exp">
व्यक्ति शहर B या शहर C जा सकता है| 

शहर A से शहर B तक जाने वाले रास्तों की संख्या = 2 <br>
शहर A से शहर C तक जाने वाले रास्तों की संख्या = 3

तो, शहर A से शहर B या C तक जाने के तरीकों की कुल संख्या = 2 + 3 = 5 तरीके <br> 
उत्तर: (c)
</div> <br>

##### प्र. निचे दिया गया चित्र चार शहरों A, B, C और D के बीच विभिन्न एकतरफा मार्गों को दिखाता है। शहर A से शहर C तक यात्रा करने के लिए कितने मार्ग संभव हैं? <br>
(a)  7       (b) 8        (c) 12        (d) 11 <br>
<img src="../../../images/higher-maths/principal-of-multiplication3.jpg" alt="permutation and combination" style="width:81%;height:81%;">

व्याख्या:<br>
<div class="Exp">
A से C तक जाने के तरीकों की संख्या = A से B से C तक जाने के तरीकों की संख्या + A  से D से C तक जाने के तरीकों की संख्या = (3 × 1) + (2 × 2) = 3 + 4 = 7 तरीके

उत्तर: (a)
</div> <br>

##### प्र. एक कार्यालय में 6 पुरुष और 9 महिलाएं हैं। मालूम करिये की :
1. एक व्यक्ति को कितने तरीकों से चुना जा सकता है?
2. एक पुरुष और एक महिला की टीम को कितने तरीकों से चुना जा सकता है?

व्याख्या:<br>
<div class="Exp">
एक आदमी का चयन करने के तरीकों की संख्या = 6 <br>
एक महिला का चयन करने के तरीकों की संख्या = 9

तो, एक पुरुष या एक महिला का चयन करने के तरीकों की संख्या = 6 + 9 <br>
(याद रखें की "या" के मामले में हम जोड़ते हैं)

एक पुरुष और एक महिला का चयन करने के तरीकों की संख्या = 6 × 9 = 54 <br>
(याद रखें की "और " के मामले में हम गुणा करते हैं) <br>
</div> <br>

<hr>

## फैक्टोरियल की अवधारणा (Concept of Factorial)

n! या ∟n प्रथम n प्राकृत संख्याओं का गुणनफल दर्शाता है (अर्थात 1 से n तक की सभी प्राकृत संख्याओं का गुणनफल)। 

n! = 1 × 2 × 3 × . . . × (n – 1) × n 

n! 'एन फैक्टोरियल' कहा जाता है।

1 ! = 1 <br>
2 ! = 1 × 2  <br>
3 ! = 1 × 2 × 3 <br>
4 ! = 1 × 2 × 3 × 4 इत्यादि.

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

ध्यान दें, 0 ! = 1
</div>

### रिकर्सिव फैक्टोरियल फॉर्मूला (Recursive factorial formula)

यदि हम जानते हैं कि (n - 1)! क्या है, तो हम आसानी से n! की गणना कर सकते हैं।

n! = n × (n−1)!     (Recursive factorial formula)

हम जानते हैं कि, 4 ! = 1 × 2 × 3 × 4 = 24 <br>
तो, 5! = 5 × 4! = 5 × 24 = 120 <br>
6! = 6 × 5! = 6 × 120 = 720
