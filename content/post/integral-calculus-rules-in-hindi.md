---
author: Mragank Shandilya
title: इंटीग्रेशन के नियम (Integration Rules)
date: "2022-01-15"
description: इंटीग्रेशन के नियम (Integration Rules) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["calculus"]
categories: ["calculus"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/calculus/integration-rules.png" # Sets featured image on blog post.
thumbnail: "images/calculus/integration-rules.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Integration Rules, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../differential-calculus-basics-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../differential-calculus-rules-in-hindi" title="Calculus" class="mak-link">डिफरेंशियल कैलकुलस नियम</a> 
* <a href="../integral-calculus-basics-in-hindi" title="Calculus" class="mak-link">इंटीग्रल कैलकुलस की मूल अवधारणाएं</a> 
* <a href="../integral-calculus-rules-in-hindi" title="Calculus" class="mak-link">इंटीग्रेशन के नियम</a> 
</div>

हम पहले ही समझ चुके हैं कि हम कुछ सरल फलनों के integrals (समाकलों) की गणना कैसे करते हैं। हालाँकि, परीक्षा में जिन अधिकांश प्रश्नों का हम सामना करेंगे, उनमें शायद चीजें इतनी सरल नहीं होंगी।

कई बार हमें जटिल फलनों के integrals (समाकलों) की गणना करनी पड़ती है, जो विभिन्न तरीकों से सरल फलनों को मिलाकर बनाए जाते हैं।

ऐसे जटिल व्यंजकों के integrals (समाकल) ज्ञात करने के लिए हमें Integral Calculus (समाकलन) के कुछ नियमों का पालन करना होगा। आइए, जानते हैं ऐसे ही कुछ नियमों के बारे में।


## इंटीग्रल कैलकुलस के नियम (Rules of Integral Calculus)

हम फलन f(x) और g(x) को f और g के रूप में निरूपित करेंगे। और उनके derivatives f'(x) और g'(x) को f' और g' के रूप में।

### स्थिरांक से गुणा के नियम (Multiplication by constant Rule)

∫c f(x) dx	= c ∫f(x) dx <br>
(जहाँ c एक स्थिरांक है)

<p> <b> प्र. ∫ 3 \(x^3\) क्या होगा? </b> </p>

व्याख्या:<br>
<div class="Exp">

<p> ∫ 3 \(x^3\) = 3 ∫ \(x^3\) = 3 \(\frac{x^4}{4}\) </p>
</div> <br>


### योग और अंतर नियम (Sum and Difference Rule)

∫(f + g) dx	= ∫f dx + ∫g dx

∫(f - g) dx	= ∫f dx - ∫g dx

##### प्र. ∫ (x + cos x) क्या होगा?

व्याख्या:<br>
<div class="Exp">

<p> ∫ (x + cos x) = ∫ x + ∫ cos x = \(\frac{x^2}{2}\) + sin x </p>
</div> <br>


### हिस्सों में Integration (Integration by Parts)

हम इस नियम का उपयोग दो फलनों के गुणनफल को integrate करने के लिए करते हैं।

∫ f . g dx	= f ∫g dx - ∫f' (∫g dx) dx

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यहां, हमें यह चुनने की जरूरत है कि कौन सा फलन f के स्थान पर आएगा और कौन सा फलन g के स्थान पर आएगा। हमारा उद्देश्य यह सुनिश्चित करना होना चाहिए कि हमारी गणना कम से कम जटिल हो।

तो, f एक ऐसा फलन होना चाहिए जो differentiation के बाद सरल हो जाए, और g एक ऐसा फलन होना चाहिए जो integration के बाद आसान हो जाए।

सामान्य तौर पर, हमें f के स्थान पर (यानी differentiation के लिए) निम्नलिखित फलनों को चुनना चाहिए (इसी क्रम में):
* <p> उलटा त्रिकोणमितीय फलन (Inverse trigonometric functions): \(sin{-1}x, cos{-1}x, tan{-1}x\) </p>
* लघुगणकीय फलन (Logarithmic functions): ln x, log x
* <p> बीजीय फलन (Algebraic functions): \(x^2, x^3, x^4\) </p>
* त्रिकोणमितीय फलन (Trigonometric functions): sin x, cos x, tan x
* <p> घातीय फलन (Exponential functions): \(e^x, 2^x\) </p>

<p> इसलिए, अगर हमें \(x^2\) sin x को integrate करना है, तो \(x^2\) को differenciate करें, और sin x को integrate करें। </p>
</div>

##### प्र. ∫ x  cos x क्या होगा?

व्याख्या:<br>
<div class="Exp">

सबसे पहले हमें यह चुनना चाहिए कि कौन सा फलन f होगा और कौन सा फलन g का स्थान लेगा।

मान लीजिए f = x <br>
और g = cos x

<p> अब, f' = \(\frac{d}{dx} x = 1\) <br>
∫g dx = ∫cos x dx = sin x </p>

<p> ∫ f . g dx	= f ∫g dx - ∫f' (∫g dx) dx <br>
तो, ∫ x  cos x = \(x sin x - ∫ sin x \hspace{1ex} dx = x sin x + cos x + c\) </p>
</div> <br>


### प्रतिस्थापन द्वारा Integration (Integration by Substitution)

हम जटिल फलनों (functions) को सरल चरों (simpler variables) के साथ प्रतिस्थापित करके, integration की प्रक्रिया को सरल बना सकते हैं। आइए देखें कैसे।

ऐसा करने के लिए, integrated किए जाने वाले फलन निम्नलिखित रूप में होने चाहियें: <br>
∫ f (g(x)) g'(x) dx <br>
तब u = g(x) रखने पर, हमें ∫ f (u) u' dx, या ∫ f (u) du प्राप्त होता है।

<p> उदाहरण के लिए, ∫ cos (\(x^3) . 3 x^2\) dx <br>
यहां, \(\frac{d}{dx} x^3 = 3 x^2\) </p>

<p> तो, हम उपरोक्त व्यंजक को सरल बना सकते हैं। <br>
∫ cos (\(x^3) . 3 x^2\) dx = ∫ cos (u) . u' dx = ∫ cos (u) du <br>
(जहां u = \(x^3\)) </p>

अब यह बहुत ही सरल व्यंजक है। एक बार जब हमें उपरोक्त व्यंजक का integral मिल जाता है, तो हम बाद में u के मान को प्रतिस्थापित कर सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह विधि केवल कुछ व्यंजकों पर ही कार्य करेगी। कई बार, व्यंजक इस रूप में नहीं दिया जायेगा। आपको यह पहचानना होगा कि क्या यह पैटर्न मौजूद है, और कुछ पुनर्व्यवस्था करनी पड़ेगी।
</div>

