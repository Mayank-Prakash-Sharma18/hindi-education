---
author: Mragank Shandilya
title: घोल के एक हिस्से को बदलना (Replacement of a part of solution)
date: "2021-12-17"
description: घोल के एक हिस्से को बदलना (Replacement of a part of solution) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["average-and-mixtures"]
categories: ["average-and-mixtures"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/mixtures/mixtures.png" # Sets featured image on blog post.
thumbnail: "images/mixtures/mixtures.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Replacement of a part of solution, in Hindi</strong>

यदि हमारे पास अल्कोहल और पानी का घोल है, और हम उसका x% हिस्सा हटा देते हैं, तो इसका अर्थ है की हम मौजूद अल्कोहल की मात्रा का x% और मौजूद पानी की मात्रा का x% निकाल रहे हैं।

जैसे की, अगर हम 80 लीटर 3:5 अल्कोहल और पानी के घोल से 32 लीटर निकालते हैं। <br>
तो, अल्कोहल और पानी का अनुपात 3:5 ही रहेगा - 32 लीटर निकाले गए घोल और शेष घोल दोनों में ही, क्योंकि हम उस घोल की संरचना नहीं बदल रहे हैं। <br>
<img src="../../../images/mixtures/replacement-solution.png" alt="Replacement of a part of solution" style="width:99%;height:99%;">

हमारे सामने आने वाले अधिकांश प्रश्नों में, हम न केवल घोल का एक हिस्सा निकालेंगे, बल्कि मिश्रण के कुछ हिस्से को शुद्ध घटक से बदल भी देंगे। जैस की, हम हटाए गए घोल को पानी से बदल सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-average" title="Average, Mixtures and Alligation" class="mak-link">औसत क्या होता है?</a> 
* <a href="../how-to-find-average-of-numbers-in-ap" title="Average, Mixtures and Alligation" class="mak-link">समान्तर श्रेढ़ी का औसत कैसे ज्ञात करें?</a> 
* <a href="../what-is-weighted-average" title="Average, Mixtures and Alligation" class="mak-link">Weighted Average क्या होता है?</a> 
* <a href="../mixtures-and-alligation-in-maths" title="Average, Mixtures and Alligation" class="mak-link">मिश्रण और एलीगेशन की अवधारणा</a> 
</div>

## घोल प्रतिस्थापन प्रश्नों को हल करने के लिए दिशानिर्देश (Guidelines to solve Solution Replacement Questions)

ये कुछ दिशानिर्देश हैं, जिनका पालन करके हम अपने काम को आसान बना सकते हैं:

* हम उस विलेय (solute) पर ध्यान देंगे जो प्रतिस्थापित नहीं हो रहा है - यह हमारे मामले में शराब है (क्योंकि उस विलेय पर काम करना आसान है, जिसे केवल हटाया जा रहा है, वापस डाला नहीं जा रहा है)।
* हम अपनी गणना को आसान बनाने के लिए प्रतिशत (percentages) के बजाय भिन्न (fractions) में काम करना पसंद करेंगे।

***आइए एक उदाहरण पर विचार करें:***

हम 100 लीटर 2:3 शराब और पानी के घोल से 20 लीटर निकालते हैं। इसके बाद हम उसमें 20 लीटर पानी डाल देते हैं।

हम केवल उस विलेय पर ध्यान केंद्रित करेंगे जिसे प्रतिस्थापित नहीं किया जा रहा है, अर्थात शराब पर। <br> 
<img src="../../../images/mixtures/replacement-solution1.png" alt="Replacement of a part of solution" style="width:99%;height:99%;">

अब, हम 100 लीटर घोल में से 20 लीटर फिर से निकालते हैं। इसके बाद हम उसमें 20 लीटर पानी फिर से डाल देते हैं। <br>
<img src="../../../images/mixtures/replacement-solution2.png" alt="Replacement of a part of solution" style="width:99%;height:99%;">

<p> \(3^{rd}\) ऑपरेशन के बाद बची हुई शराब = 40 × (4/5) × (4/5) × (4/5) लीटर <br>
\(4^{th}\) ऑपरेशन के बाद बची हुई शराब = 40 × (4/5) × (4/5) × (4/5) × (4/5) लीटर </p>

<p> आइए, इसे एक सूत्र के रूप में प्रदर्शित करें। <br>
\(n^{th}\) ऑपरेशन के बाद बची हुई शराब = 40 × (4/5) × (4/5) × (4/5) ..... n times = 40 × (\(\frac{4}{5})^n\) </p> 


## विलेय की अंतिम मात्रा के लिए सूत्र (Formulae for Final Amount of Solute)

इसलिए, जैसा कि आप देख सकते हैं, ऐसे प्रश्नों को हल करने में दो चरण शामिल होते हैं:

* चरण 1: यदि शुद्ध द्रव के स्थान पर कोई विलयन (solution) है, तो विलयन में विलेय की मात्रा (जो प्रतिस्थापित नहीं हो रहा है) ज्ञात कीजिए। <br><br>
मान लीजिए कि हमारे पास m:n के अनुपात में अल्कोहल और पानी का एक x लीटर घोल है। <br>
<p> तो, अल्कोहल की प्रारंभिक मात्रा = [\(\frac{m}{(m + n)}\)] × x </p>
हमारे मामले में, शराब की प्रारंभिक मात्रा = 40 लीटर <br>

* चरण 2: यदि x लीटर में से y लीटर निकालकर शुद्ध तरल (हमारे उदाहरण में पानी) से बदल दिया जाता है, तो n संचालन के बाद, विलेय (जो प्रतिस्थापित नहीं हो रहा है, हमारे मामले में यह अल्कोहल है) की मात्रा होगी:<br><br>
<p> अल्कोहल की प्रारंभिक मात्रा × (1 - \(\frac{y}{x})^n\) <br>
हमारे मामले में, यह 40 × (1 - \(\frac{1}{5})^n = 40 × (\frac{4}{5})^n\) है </p>

<div class="toc-mak"> <br>
तो, विलेय की अंतिम मात्रा के लिए हमारे पास ये सूत्र हैं: <br><br>

### विलेय की अंतिम निरपेक्ष मात्रा के लिए (For final Absolute Amount of solute)

<p> n संचालन के बाद, विलेय की मात्रा (जो प्रतिस्थापित नहीं हो रही है) = विलेय का प्रारंभिक आयतन × (1 - \(\frac{y}{x})^n\) <br><br>
= विलेय का प्रारंभिक आयतन × (\(\frac{कुछ \hspace{1ex} हिस्सा \hspace{1ex} निकालने \hspace{1ex} के \hspace{1ex} बाद \hspace{1ex} घोल \hspace{1ex} का \hspace{1ex} आयतन}{हिस्सा \hspace{1ex} डालने \hspace{1ex} के \hspace{1ex} बाद \hspace{1ex} घोल \hspace{1ex} का \hspace{1ex} आयतन})^n\) </p>

### विलेय के अंतिम अनुपात के लिए (For final Ratio of solute)

उपरोक्त सूत्र न केवल निरपेक्ष राशियों के लिए, बल्कि अनुपातों के लिए भी सही है। <br><br>
<p> विलेय का अंतिम अनुपात = प्रारंभिक अनुपात × (1 - \(\frac{y}{x})^n\) <br><br>
= प्रारंभिक अनुपात × (\(\frac{कुछ \hspace{1ex} हिस्सा \hspace{1ex} निकालने \hspace{1ex} के \hspace{1ex} बाद \hspace{1ex} घोल \hspace{1ex} का \hspace{1ex} आयतन}{हिस्सा \hspace{1ex} डालने \hspace{1ex} के \hspace{1ex} बाद \hspace{1ex} घोल \hspace{1ex} का \hspace{1ex} आयतन})^n\) </p>
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि आप उपरोक्त सूत्र को ध्यान से देखते हैं, तो आप देखेंगे कि घोल के एक हिस्से को जब शुद्ध घटक के साथ बार-बार बदला जाये, तो वह चक्रवृद्धि ब्याज (compound interest) के समान होता है, जहाँ ब्याज की दर नकारात्मक है।

ब्याज की दर, बदले जा रहे घोल के अंश पर निर्भर करती है, अर्थात y/x के मान पर।
</div>


## विलेय की अंतिम सांद्रता के लिए सूत्र (Formulae for Final Concentration of Solute)

हम जानते हैं कि, n ऑपरेशन के बाद, विलेय (जो प्रतिस्थापित नहीं हो रही है, हमारे मामले में यह अल्कोहल है) की मात्रा होगी : <br>
<p> अल्कोहल की प्रारंभिक मात्रा × (1 - \(\frac{y}{x})^n\) </p> 

<p> तो n संचालन के बाद, विलेय की सांद्रता = \(\frac{विलेय \hspace{1ex} का \hspace{1ex} आयतन}{घोल \hspace{1ex} का \hspace{1ex} प्रारंभिक \hspace{1ex} आयतन} = \frac{अल्कोहल \hspace{1ex} का \hspace{1ex} प्रारंभिक \hspace{1ex} आयतन × (1 - \frac{y}{x})^n}{अल्कोहल \hspace{1ex} का \hspace{1ex} प्रारंभिक \hspace{1ex} आयतन} = (1 - \frac{y}{x})^n\) </p>  

<p> यदि सांद्रता को प्रतिशत के रूप में व्यक्त करना है, तो यह 100 (1 - \(\frac{y}{x})^n\) के बराबर होगी। </p>

