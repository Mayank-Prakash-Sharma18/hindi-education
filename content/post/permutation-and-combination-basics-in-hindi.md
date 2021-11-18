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

हम क्रमचय और संयोजन (P and C) की मूल अवधारणाओं को समझेंगे, और दोनों के बीच अंतर करना भी सीखेंगे।

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

<hr>

## P और C की अवधारणा

***संचय (Combination)*** - प्रत्येक <strong>चयन (selection)</strong> जो कुछ या सभी वस्तुओं को लेकर किया जा सकता है।

संचय का अर्थ है 'चयन' - जिस क्रम में वस्तुओं को लिया जाता है, उसका कोई महत्व नहीं।

***क्रमचय (Permutation)*** - प्रत्येक <strong>व्यवस्था (arrangement)</strong> जिसे कुछ या सभी वस्तुओं को लेकर किया जा सकता है।

क्रमचय का अर्थ है 'व्यवस्था' - यहाँ 'वस्तुओं का क्रम' महत्वपूर्ण है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>ध्यान देने योग्य बात</b><br>

अलग-अलग चीज़ों को व्यवस्थित (arrange) करने की प्रक्रिया में, चयनित वस्तुओं को व्यवस्थित करने के कार्य से पहले चयन (selection) का कार्य होता है। 

यानी हम पहले चयन (select) करेंगे और उसके बाद ही उन्हें व्यवस्थित (arrange) करेंगे।
</div>

***चयन (Selection)***:<br>
मान लीजिए कि 3 किताबें हैं: A, B और C। हमें इनमें से 2 किताबों का चयन करना है। यह 3 तरीकों से किया जा सकता है। यानी (A और B), (B और C), (C और A)। - Aऔर B का चयन B और A के चयन के समान है, आदि।<br>
जब हम किसी चीज का चयन करते हैं, तो हम 'संचय (Combination, कॉम्बिनेशन)' शब्द का प्रयोग करते हैं, जिसे C द्वारा दर्शाया जाता है।

***व्यवस्था (Arrangement)***:<br>
अगर हमें सबसे अच्छी और दूसरी सबसे अच्छी किताब चुननी है, तो ऐसा करने के 6 तरीके होंगे, यानी (A, B), (B, A), (B, C), (C, B), (C, A), (A, C)। <br>
यहां (A, B) और (B, A) अलग हैं क्योंकि पहले परिदृश्य में A सबसे अच्छी किताब है, जबकि दूसरे परिदृश्य में यह दूसरी सबसे अच्छी किताब है। <br>
जब हम कुछ व्यवस्थित करते हैं, तो हम क्रमचय (Permutation) शब्द का उपयोग करते हैं, जिसे P द्वारा दर्शाया जाता है।


## प्रश्न की पहचान करना (Identifying the Problem)

जब आप P and C से सम्बंधित किसी प्रश्न का सामना करते हैं, तो आपको सबसे पहले यह पता लगाना चाहिए कि क्या यह संचय (Combination) पर आधारित है, या क्रमचय (Permutation) पर। 

* कभी-कभी प्रश्न इसे स्पष्ट रूप से बताता है:<br><br>
क्रमचय के लिए, "कितने क्रमचय (permutations) किए जा सकते हैं..." या "उन व्यवस्थाओं (arrangements) की संख्या ज्ञात करें जिन्हें किया जा सकता है..." या "उन तरीकों की संख्या ज्ञात करें जिनसे आप व्यवस्था (arrangement) कर सकते हैं... ।" (कीवर्ड क्रमचय और व्यवस्था के उपयोग पर ध्यान दें)<br><br>
संचय के लिए, "बनाए जा सकने वाले संचय (combinations) की संख्या ज्ञात करें....." या "उन चयनों (selections) की संख्या ज्ञात करें जिन्हें किया जा सकता है..." या "उन तरीकों की संख्या ज्ञात करें जिनसे आप चयन (select) कर सकते हैं.. ..." (कीवर्ड संचय और चयन के उपयोग पर ध्यान दें)

* कभी-कभी प्रश्न इसे उतने स्पष्ट रूप से नहीं बताता है:<br><br>
'प्रत्येक अंक का एक बार प्रयोग करके 1, 3, 6, 7 और 9 अंकों से पांच अंकों की कितनी संख्याएं बनाई जा सकती हैं?'<br>
यहां, अंकों का क्रम मायने रखता है, क्योंकि अलग-अलग क्रम अलग-अलग नंबर बनाएंगे। तो, यह व्यवस्था/क्रमचय का प्रश्न है।<br><br>
'छह दोस्तों के समूह में से, मुझे दो को दोपहर के भोजन के लिए आमंत्रित करना है। इसे कितने अलग-अलग तरीकों से किया जा सकता है?'<br>
यहां, वस्तुओं का क्रम महत्वपूर्ण नहीं है। उदाहरण के लिए, अगर मैं मित्र 3 और मित्र 5 को आमंत्रित करता हूँ, तो बस यह चयन करना ही काफी है। इससे कोई फर्क नहीं पड़ता कि मैं पहले दोस्त 3 को आमंत्रित करता हूँ, या दोस्त 5 को। तो, यह चयन/संचय का प्रश्न है। <br><br>

<hr>

## C और P के सूत्र 

n विभिन्न वस्तुओं में से r वस्तुओं का चयन निम्नलिखित द्वारा दर्शाया जाता है:

<p>\(C^n_r = \frac{n!}{r!(n-r)!}\) </p>

n अलग-अलग चीजों में से r चीजों का चयन करना, और फिर इन r चीजों को व्यवस्थित करना निम्नलिखित द्वारा दर्शाया जाता है:

<p>\(P^n_r = \frac{n!}{(n-r)!}\)</p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>P के सूत्र को समझना</b><br>

जबकि संचय में केवल चयन शामिल होता है, क्रमचय में हमें चयन करने और फिर व्यवस्थित करने की आवश्यकता होती है।

अत: क्रमचय = चयन (Selection) + व्यवस्था (Arrangement)

<p>
* n अलग-अलग चीज़ों में से r चीज़ों की व्यवस्था ≡ पहले n चीज़ों में से r चीज़ों का चयन करना (\(C^n_r\)) और फिर इन r चीज़ों को व्यवस्थित करना (r!)।<br>
\(P^n_r = C^n_r\) × r! <br>
(जो और कुछ नहीं बल्कि यह है \(\frac{n!}{r!(n-r)!} × r! = \frac{n!}{(n-r)!} \)) 
</p>

* सभी अलग-अलग n चीजों की व्यवस्था करना:<br>
<p>\(P^n_n = C^n_n\) × n! = n! </p><br>
</div>

प्र. क्रमचयों और संचयों की संख्या ज्ञात कीजिए यदि n = 6 और r = 2 है।

व्याख्या:<br>
<div class="Exp">

<p>\(C^n_r = \frac{n!}{r!(n-r)!} = \frac{6!}{2!(6-2)!} = \frac{6!}{2! 4!} = \frac{6 × 5}{2} = 15\)</p>  

<p>\(P^n_r = \frac{n!}{(n-r)!} = \frac{6!}{(6-2)!} = \frac{6!}{4!} = 6 × 5 = 30\)</p>
</div> <br>

### गुण 1

<p>\(C^n_0 = \frac{n!}{0!(n-0)!} = \frac{n!}{n!}\) = 1</p>

<p>\(C^n_n = \frac{n!}{n!(n-n)!} = \frac{n!}{n!}\) = 1</p>

### गुण 2

<p>\(C^n_r = C^n_{n-r}\)</p>
(0 ≤ r ≤ n के लिए) <br><br>

<p> प्र. \(C^9_7\) का मान ज्ञात कीजिए। </p>

व्याख्या:<br>
<div class="Exp">

<p>\(C^9_7 = C^9_2 = \frac{9!}{2!(9-2)!} = \frac{9!}{2! 7!} = \frac{9 × 8}{2} = 36\) </p>
</div> <br>

### गुण 3

<p>
अगर x और y गैर-ऋणात्मक पूर्णांक (non-negative integers) हैं जैसे कि \(C^n_x = C^n_y\), तो:</p><br>
x = y या x + y = n <br><br>

<p> प्र. यदि \(C^n_8 = C^n_{15}\), तो n का मान क्या है? </p>

व्याख्या:<br>
<div class="exp">
<p>यदि \(C^n_x = C^n_y\), तो x = y या x + y = n </p><br>
तो, n = 8 + 15 = 23
</div> <br>

### गुण 4

<p>\(C^n_{r-1} + C^n_r = C^{n+1}_r\)</p>

(n और r गैर-ऋणात्मक पूर्णांक हैं जैसे कि r ≤ n)

<p>उदाहरण के लिए, \(C^5_2 + C^5_3 = C^{5+1}_3 = C^6_3\)</p>

### गुण 5

<p>\(C^n_0 + C^n_1 + C^n_2 + ……+ C^n_n = 2^n\)</p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

#### गणना युक्तियाँ (Calculation Tips)

<p>
* \(C^n_r = \frac{n!}{r!(n-r)!}\) <br><br>
तो, \(C^6_3 = \frac{6!}{3!(6-3)!}\) - यह थोड़ा समय लेने वाली गणना है <br><br>
बेहतर तरीका:<br>
\(C^6_3 = \frac{6×5×4}{3×2×1}\)
</p>

<p>
* \(P^n_r = \frac{n!}{(n-r)!}\) <br><br>
तो, \(P^6_3 = \frac{6!}{(6-3)!}\) - यह थोड़ा समय लेने वाली गणना है <br><br>
बेहतर तरीका:<br>
\(P^6_3\) = 6 × 5 × 4
</p>
</div>

