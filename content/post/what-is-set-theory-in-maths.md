---
author: Mragank Shandilya
title: समुच्चय सिद्धान्त की मूल अवधारणाएं (Basics of Set Theory)
date: "2022-01-04"
description: समुच्चय सिद्धान्त की मूल अवधारणाएं (Basics of Set Theory) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["set-theory"]
categories: ["set-theory"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/functions/set-theory-7.png" # Sets featured image on blog post.
thumbnail: "images/functions/set-theory-7.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Basics of Set Theory, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-set-theory-in-maths" title="Set Theory" class="mak-link">समुच्चय सिद्धान्त की मूल अवधारणाएं</a> 
* <a href="../union-and-intersection-formulae-and-keywords" title="Set Theory" class="mak-link">संघ और प्रतिच्छेदन सूत्र और अवधारणाएँ</a> 
* <a href="../what-are-functions-in-maths" title="Functions" class="mak-link">फलनों की मूल अवधारणाएं</a> 
</div>

जर्मन गणितज्ञ और तर्कशास्त्री जॉर्ज कैंटर (Georg Cantor) द्वारा विकसित, ***समुच्चय सिद्धान्त (सेट थ्योरी, Set Theory)*** के गणित की विभिन्न शाखाओं में बड़े पैमाने पर अनुप्रयोग हैं, जैसे कि फलन (functions), संबंध (relations), संभाव्यता (probability), आदि में।

इस लेख में, हम समुच्चय सिद्धान्त की सभी बुनियादी अवधारणाओं को कवर करने का प्रयास करेंगे।


## समुच्चय क्या होता है? (What is a Set?)

सेट या समुच्चय, संख्याओं, व्यक्तियों या वस्तुओं का एक सुपरिभाषित संग्रह है, जो इसके सदस्य या तत्व (members or elements) कहलाते हैं।

हम आम तौर पर समुच्चय को दर्शाने के लिए एक बड़े अक्षर का उपयोग करते हैं, जैसे की A, B, S, आदि। समुच्चय के तत्व को निरूपित करने के लिए, हम छोटे अक्षरों का उपयोग करते हैं, जैसे की a, b, s, आदि| 

यदि कोई तत्व, मान लीजिए a, किसी निश्चित समुच्चय से संबंधित है, मान लीजिए A, तो हम इसे इस प्रकार निरूपित करते हैं: a ∈ A <br>
यदि कोई तत्व, मान लीजिए a, किसी निश्चित समुच्चय से संबंधित नहीं है, मान लीजिए A, तो हम इसे इस प्रकार निरूपित करते हैं: a ∉ A

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

कुछ प्रसिद्ध समुच्चय/सेट और अक्षर, जो उन्हें निरूपित करने के लिए उपयोग किए जाते हैं, निम्नलिखित हैं: <br>
* N : सभी प्राकृत संख्याओं (natural numbers) का समुच्चय, अर्थात 1, 2, 3...
* W : सभी पूर्ण संख्याओं (whole numbers) का समुच्चय, अर्थात 0, 1, 2, 3 ...
* Z : सभी पूर्णांकों (integers) का समुच्चय
* <p> \(Z^+\) : धनात्मक पूर्णांकों (positive integers) का समुच्चय </p>
* Q : सभी परिमेय संख्याओं (rational numbers) का समुच्चय
* <p> \(Q^+\) : धनात्मक परिमेय संख्याओं (positive rational numbers) का समुच्चय </p>
* R : वास्तविक संख्याओं (real numbers ) का समुच्चय
* <p> \(R^+\) : सकारात्मक वास्तविक संख्याओं (positive real numbers) का समुच्चय </p>
</div>


## समुच्चय को निरूपित करने के तरीके (Ways of representation of a Set)

ऐसे दो तरीके हैं जिनके माध्यम से हम किसी समुच्चय को निरूपित कर सकते हैं।

### रोस्टर या टेबुलर फॉर्म (Roster or Tabular form)

निरूपण के इस रूप में, हम समुच्चय के सभी तत्वों को घुंघराले कोष्ठक { } के भीतर लिखते हैं (अल्पविराम से अलग करके)।

उदाहरण के लिए:
* {2, 4, 6, ....} - सम संख्याओं का समुच्चय। इस समुच्चय में अनंत तत्व हैं।
* {a, e, i, o, u} - अंग्रेजी वर्णमाला के स्वरों का समूह। इस समुच्चय में तत्वों की संख्या परिमित (finite) है, अर्थात् 5.

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

तत्वों को आम तौर पर दोहराया नहीं जाता है, यानी सभी अलग-अलग तत्वों को लिया जाता है। उदाहरण के लिए, 'JAVA' शब्द बनाने वाले अक्षरों का समुच्चय {J, A, V} है।

साथ ही, तत्वों का क्रम प्रासंगिक नहीं होता है। अतः, हम {J, A, V} को {A, J, V}, या {J, V, A} आदि के रूप में भी लिख सकते हैं। ये सभी एक ही समुच्चय को निरूपित कर रहे हैं।
</div>


### सेट-बिल्डर फॉर्म (Set-builder form)

हम बहुत बड़े समुच्चयों के लिए रोस्टर फॉर्म का उपयोग नहीं कर सकते हैं। इसलिए, गणितज्ञ समुच्चय को निरूपित करने की एक अन्य विधि ईजाद किये।

सेट-बिल्डर फॉर्म में, हम किसी ***एक उभय-निष्ठ गुण (single common property)*** का निरूपण करते हैं, जो निम्नलिखित के पास होता है:
* उस समुच्चय के सभी तत्वों के पास, और
* केवल उस समुच्चय के तत्वों के पास (उस समुच्चय के बाहर, किसी अन्य तत्व के पास नहीं)।

A(x) = {x: x में xyz गुण है} <br>

उदाहरण के लिए:
* A(x) = {x: x एक सम संख्या है} - इसका अर्थ है कि A सभी सम संख्याओं का समुच्चय है।
* A(x) = {x: x अंग्रेजी वर्णमाला में एक स्वर है} - इसका अर्थ है कि A, a, e, i, o, u का समुच्चय है।


## समुच्चयों के प्रकार (Types of Sets)

विभिन्न प्रकार के समुच्चय हैं जिनसे आपको अवगत होना चाहिए।

### परिमित और अपरिमित समुच्चय (Finite and Infinite Sets)

किसी परिमित समुच्चय (finite set) में तत्वों की एक निश्चित संख्या होती है। उदाहरण के लिए, {2, 4, 5}

दूसरी ओर, किसी अपरिमित समुच्चय (infinite set) में तत्वों की अनिश्चित संख्या होती है। उदाहरण के लिए, एक वृत्त के भीतर के बिंदुओं का समुच्चय।

### रिक्त समुच्चय (Empty Set)

रिक्त समुच्चय (या शून्य समुच्चय, empty set, null set, या void set) एक ऐसा समुच्चय है जिसमें कोई तत्व नहीं होता है। इसे प्रतीक ∅ या केवल खाली कर्ली कोष्ठक { } द्वारा दर्शाया जाता है।

उदाहरण के लिए, A = {x: x एक अभाज्य संख्या है जो 13 से बड़ी लेकिन 17 से छोटी है}। चूँकि 13 और 17 के बीच कोई अभाज्य संख्या नहीं है, इसलिए A एक रिक्त समुच्चय है।

### उपसमुच्चय और घात समुच्चय (Subsets and Power Set)

एक समुच्चय दूसरे समुच्चय का उपसमुच्चय (subset) होता है, यदि उसके सभी अवयव दूसरे समुच्चय में भी उपस्थित हों। अर्थात्, यदि a ∈ A ⇒ a ∈ B, तो इसका अर्थ A ⊂ B है।

उदाहरण के लिए, यदि A = {1, 2, 3} और B = {1, 2, 3, 4}, तो A, B का उपसमुच्चय है। हम यहां देख सकते हैं कि समुच्चय A के सभी तत्व समुच्चय B में भी मौजूद हैं| 

किसी समुच्चय का घात समुच्चय, उसके सभी उपसमुच्चय का संग्रह होता है (रिक्त समुच्चय सहित)। इसे P से निरूपित करते हैं।

उदाहरण के लिए, यदि हमारे पास एक समुच्चय A = {H, T} है, तो उसका घात समुच्चय P(A) = {∅, {H}, {T}, {H, T}}

### सार्वसमुच्चय (Universal Set)

सार्वसमुच्चय या सार्वत्रिक समुच्चय में किसी दिए गए संदर्भ के सभी तत्व होते हैं (जो अन्य समुच्चय का हिस्सा हो सकते हैं, या नहीं भी)। इसे U द्वारा निरूपित किया जाता है।

उदाहरण के लिए, जब हम एक पासा घुमाते हैं, तो हमें 1 से 6 तक की कोई भी संख्या प्राप्त हो सकती है। इसलिए, समुच्चय {1, 2, 3, 4, 5, 6} इस संदर्भ में सार्वत्रिक समुच्चय है।

अन्य सभी समुच्चय इसके उपसमुच्चय होंगे। उदाहरण के लिए, A = {x: x पासे पर एक विषम संख्या है}, अर्थात {1, 3, 5} सार्वत्रिक समुच्चय {1, 2, 3, 4, 5, 6} का उपसमुच्चय है।


## समुच्चयों के बीच संबंध (Relationship between Sets)

हम दो या दो से अधिक समुच्चयों के बीच संबंध दिखाने के लिए वेन आरेखों (Venn diagrams) का उपयोग करते हैं।

### असंयुक्त समुच्चय (Disjoint Sets)

दो समुच्चयों को असंयुक्त समुच्चय (disjoint sets) कहा जा सकता है, यदि उनमें कोई उभयनिष्ठ अवयव न हो। हम उन्हें वेन आरेख का उपयोग करके निम्नानुसार प्रदर्शित कर सकते हैं: <br>
<img src="../../../images/functions/set-theory-1.png" alt="Set Theory" style="width:54%;height:54%;">


### अतिछादी समुच्चय (Overlapping Sets)

यदि सेट A और B में कुछ सामान्य तत्व हैं, तो उनके वेन आरेख अतिछादी/ओवरलैप होंगे, और हम उनके संबंध को निम्नानुसार प्रदर्शित कर सकते हैं: <br>
<img src="../../../images/functions/set-theory-2.png" alt="Set Theory" style="width:45%;height:45%;">


### समान समुच्चय (Equal Sets)

दो समुच्चयों को एक दूसरे के बराबर/समान कहा जाता है, यदि उनमें बिल्कुल समान तत्व हों। अर्थात् जब दो समुच्चय समान हों।

इन्हें = चिन्ह से दर्शाया जाता है। उदाहरण के लिए, यदि सेट A सेट B के समान है, तो हम A = B लिख सकते हैं।

वेन आरेख के संदर्भ में, हम कह सकते हैं कि उनके वेन आरेख पूरी तरह से अतिछादी/ओवरलैप होंगे। <br>
<img src="../../../images/functions/set-theory-3.png" alt="Set Theory" style="width:27%;height:27%;">


## समुच्चयों पर संचालन (Operations on Sets)

हम समुच्चयों पर कुछ ऑपरेशन कर सकते हैं। आइए उनमें से कुछ को यहां देखें।

### समुच्चयों का संघ (Union of Sets)

दो समुच्चयों के संघ (सम्मिलन, Union) में दोनों समुच्चयों के अवयव होते हैं। अर्थात्, A ∪ B = {x | x ∈ A ***या*** x ∈ B}

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

'या/or' शब्द संघ की अवधारणा से निकटता से संबंधित है।
</div>

यह ∪ प्रतीक द्वारा निरूपित किया जाता है। तो, A ∪ B का मतलब A union B है।

निम्नलिखित वेन आरेख में छायांकित भाग दो समुच्चयों, A और B के संघ को दर्शाता है। <br>
<img src="../../../images/functions/set-theory-4.png" alt="Set Theory" style="width:54%;height:54%;">

#### संघ के गुण (Properties of Union operation)

##### गुण 1: क्रम विनिमेय नियम (Commutative Law)

समुच्चयों का क्रम मायने नहीं रखता, यानी A ∪ B = B ∪ A

##### गुण 2: साहचर्य नियम

(A ∪ B) ∪ C = A ∪ (B ∪ C) 

##### गुण 3: वितरण नियम (Distributive Law)

A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)

##### गुण 4

* रिक्त समुच्चय (empty set) से किसी समुच्चय का संघ, वह समुच्चय ही होता है, अर्थात् A ∪ φ = A
* किसी समुच्चय का स्वयं से संघ, वह समुच्चय ही होता है, अर्थात A ∪ A = A
* सार्वत्रिक समुच्चय (universal set) से किसी समुच्चय का संघ, वह सार्वत्रिक समुच्चय होता है, अर्थात A ∪ U = U


### समुच्चयों का प्रतिच्छेदन (Intersection of Sets)

दो समुच्चयों के प्रतिच्छेदन (Intersection) में वे अवयव होते हैं, जो दोनों समुच्चयों में उभयनिष्ठ होते हैं। अर्थात्, A ∩ B = {x | x ∈ A ***और*** x ∈ B}

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

'और/and' शब्द प्रतिच्छेदन की अवधारणा से निकटता से संबंधित है।
</div>

यह ∩ प्रतीक द्वारा निरूपित किया जाता है। अत: A ∩ B का अर्थ है A intersection B

निम्नलिखित वेन आरेख में छायांकित भाग दो समुच्चयों, A और B के प्रतिच्छेदन को दर्शाता है। <br>
<img src="../../../images/functions/set-theory-5.png" alt="Set Theory" style="width:54%;height:54%;">


#### प्रतिच्छेदन के गुण (Properties of Intersection operation)

##### गुण 1: क्रम विनिमेय नियम (Commutative Law)

समुच्चयों का क्रम मायने नहीं रखता, यानी A ∩ B = B ∩ A 

##### गुण 2: साहचर्य नियम

(A ∩ B) ∩ C = A ∩ (B ∩ C) 

##### गुण 3: वितरण नियम (Distributive Law) 

A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

##### गुण 4

* रिक्त समुच्चय (empty set) से किसी समुच्चय का प्रतिच्छेदन, रिक्त समुच्चय ही होता है, अर्थात् A ∩ φ = φ
* किसी समुच्चय का स्वयं से प्रतिच्छेदन, वह समुच्चय ही होता है, अर्थात A ∩ A = A
* सार्वत्रिक समुच्चय (universal set) से किसी समुच्चय का प्रतिच्छेदन, वह समुच्चय ही होता है, अर्थात A ∩ U = A


### समुच्चयों का अंतर (Difference of Sets)

दो समुच्चयों के अंतर को - चिन्ह द्वारा प्रदर्शित किया जाता है। अत: समुच्चय A और B के अंतर को A - B के रूप में दर्शाया जाएगा।

A-B में समुच्चय A के सभी अवयव होंगे, जो समुच्चय B में नहीं हैं। अर्थात A - B = {x | x ∈ A और x ∉ B}

निम्नलिखित वेन आरेख में छायांकित भाग A - B को दर्शाता है। <br>
<img src="../../../images/functions/set-theory-6.png" alt="Set Theory" style="width:54%;height:54%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

A - B ≠ B - A
</div>

### पूरक समुच्चय (Complement of a Set)

समुच्चय के पूरक को निरूपित करने के लिए, हम समुच्चय के नाम के आगे ' जोड़ते हैं। उदाहरण के लिए, समुच्चय A का पूरक A' होगा।

मान लीजिए A सार्वत्रिक समुच्चय U के भीतर एक समुच्चय है। तब A' में सार्वभौम समुच्चय के सभी अवयव होंगे, सिवाय उन तत्वों को छोड़कर जो समुच्चय A में हैं। अर्थात् A' = {x | x ∈ U और x ∉ A}, या A′ = U – A

निम्नलिखित वेन आरेख में छायांकित भाग समुच्चय A के पूरक, अर्थात A' को निरूपित करता है। <br>
<img src="../../../images/functions/set-theory-7.png" alt="Set Theory" style="width:54%;height:54%;">

#### समुच्चय के पूरक के गुण (Properties of Complement of Sets)

##### गुण 1

सार्वत्रिक समुच्चय (universal set) का पूरक रिक्त समुच्चय होता है, और इसका विपरीत भी सही है। यानी U′ = φ और φ′ = U

##### गुण 2

* A ∪ A′ = U 
* A ∩ A′ = φ

##### गुण 3: De Morgan’s law

दो समुच्चयों के संघ का पूरक = उनके पूरकों का प्रतिच्छेदन, अर्थात् (A ∪ B)′ = A′ ∩ B′

दो समुच्चयों के प्रतिच्छेदन का पूरक = उनके पूरकों का संघ, अर्थात् (A ∩ B)′ = A′ ∪ B′

##### गुण 4: दोहरे पूरकता का नियम (Law of Double Complementation)

(A′)′ = A 

