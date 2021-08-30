---
author: Mragank Shandilya
title: Static Site Generator (SSG) क्या होता है? 
date: "2021-08-29"
description: Static Site Generator (SSG) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["static-site-generator"]
categories: ["website-creation"]
series: ["web-development"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/web-design/static-site-generator-1.png" # Sets featured image on blog post.
thumbnail: "images/web-design/static-site-generator-1.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम जानेंगे - <strong>What is a Static Site Generator (SSG), in Hindi</strong>

## स्टेटिक साइट जेनरेटर (SSG) क्या होते हैं ? (Static Site Generator kya hota hai?)

स्टेटिक साइट जेनरेटर (Static Site Generator) ऐसे सूचना प्रौद्योगिकी उपकरण (tools) हैं जिनका उपयोग कुछ इनपुट फाइलों के आधार पर स्टेटिक वेबसाइट बनाने के लिए किया जाता है। वे JAMstack architecture का एक अनिवार्य हिस्सा हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>JAMstack</b><br>

JAMstack का मतलब है JavaScript, APIs और Markup। यह प्रौद्योगिकियों का एक उभरता हुआ गुट है, जो सर्वर-साइड प्रोसेसिंग (server-side processing) की जरूरत को ख़त्म कर देता है।

समय के साथ, जैसे-जैसे JavaScript बेहतर होती जा रही है, अब कई व्यावसायिक तर्क (business logics) क्लाइंट-साइड पर ही रखे जा सकते हैं। उन्हें server-side पर रखने की जरूरत नहीं है| 

इसके अलावा, साइट की अतिरिक्त कार्यक्षमता और गतिशीलता के लिए हम विभिन्न APIs का उपयोग कर सकते हैं, जो एक दशक पहले उपलब्ध नहीं थे, पर अब हैं।
</div>

लेकिन इससे पहले कि हम स्टेटिक साइट जेनरेटर (SSG) को गहराई से जानें, हमें यह समझने की जरूरत है कि स्टेटिक वेबसाइट (Static Website) आखिर होती क्या है?


## एक स्टेटिक वेबसाइट / ब्लॉग क्या होता है? (Static Website kya hoti hai?)

एक स्टेटिक वेबसाइट में, स्टेटिक HTML पृष्ठ अंतिम-उपयोगकर्ता के वेब ब्राउज़र पर वैसे ही पंहुचा दिए जाते हैं जैसे वह हैं। यानी ठीक उसी रूप में जैसे वे डेटाबेस (database) में स्टोर हैं।


## स्टेटिक और डायनामिक साइट के बीच अंतर? (Static aur Dynamic websites ke beech antar)

### स्टेटिक वेबसाइटें (Static websites)

स्टेटिक वेबसाइटों में, सर्वर-साइड प्रोसेसिंग नहीं की जाती है। ऐसा होने के लिए, वेबसाइट के सभी पृष्ठ जिनका अंतिम-उपयोगकर्ता द्वारा अनुरोध किया जा सकता है, पहले से निर्मित होते हैं और डेटाबेस (database) में पहले से संग्रहीत होते हैं। जब किसी उपयोगकर्ता द्वारा किसी पृष्ठ का अनुरोध किया जाता है, तो उसे बस वह परोस दिया जाता है।

उदाहरण के लिए, आप जो लेख इस समय पढ़ रहे हैं वह एक स्टेटिक HTML पृष्ठ है। यह मेरे होस्टिंग प्रदाता के डेटाबेस में पहले से मौजूद था। जब आप संबंधित URL पर क्लिक करते हैं तो यह केवल आपको परोस दिया जाता है।  

### डायनामिक वेबसाइटें (Dynamic websites)

स्टेटिक वेबसाइटों के विपरीत, एक डायनामिक साइट में एक सर्वर (server) होता है जो अनुरोधित पृष्ठों को तुरंत उत्पन्न करता है। HTML पृष्ठ पहले से ही डेटाबेस में संग्रहीत नहीं होते हैं। केवल डेटा संग्रहीत रहता है, डेटाबेस टेबल्स (database tables) में। सर्वर डेटाबेस से डेटा उठाता है, उस डेटा को प्रोसेस करता है और फिर निम्न में से कोई एक काम करता है:

* ***सर्वर-साइड रेंडरिंग (Server-side rendering)***: यहां सर्वर, सर्वर साइड पर ही संसाधित डेटा के साथ HTML टेम्प्लेट (HTML templates) भरता है, और फिर उस HTML टेम्प्लेट को अंतिम-उपयोगकर्ता के वेब ब्राउज़र पर भेजता है। यह कुछ वैसा ही ऐसा लग सकता है जैसे स्टेटिक साइट करती हैं, लेकिन ऐसा नहीं है। याद रखें, स्टेटिक साइट में कोई सर्वर होता ही नहीं है, जो हमारे HTML टेम्प्लेट को भरे। वहां हमारे स्टेटिक HTML पृष्ठ पहले से ही बने रखे होते हैं।

* ***क्लाइंट-साइड रेंडरिंग (Client-side rendering)***: यहां सर्वर, क्लाइंट-साइड वेब ब्राउजर को किसी न किसी रूप में डेटा भेजता है (जैसे JSON फाइल के रूप में), और फिर क्लाइंट साइड पर JavaScript कोड डेटा के साथ टेम्प्लेट (template) भरता है। Angular, React, Vue का प्रयोग करके बनायी गयीं सिंगल-पेज ऍप्लिकेशन्स (single-page applications) येही करती हैं। इस तरीके के कई फायदे हैं, लेकिन इसका सबसे बड़ा नुक्सान यह है कि यह SEO (Search Engine Optimization) के लिए बहुत खराब है। SEO पेज / पोस्ट URL पर बहुत अधिक निर्भर होता है, और जब JavaScript को समझने की बात आती है तो Google crawlers उतने अच्छे नहीं होते हैं। इसलिए मैं कभी भी Angular का उपयोग करके अपने ब्लॉग नहीं बनाता। Angular, React, Vue मोबाइल ऍप बनाने के लिए काफी अच्छे हैं, पर ब्लॉग बनाने के लिए नहीं| अगर मुझे इनका प्रयोग करना ही है, तो मैं सर्वर-साइड रेंडरिंग को चुनूंगा, क्लाइंट-साइड रेंडरिंग कभी नहीं। 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Single Page Applications (SPAs) और केवल एक पेज वाली वेबसाइट/ब्लॉग में अंतर</b><br>

Single Page Applications (SPAs) और केवल एक पेज वाली वेबसाइट/ब्लॉग में अंतर है। मैंने कई नए लोगों को दोनों के बीच भ्रमित होते देखा है।

SPA उपयोगकर्ता के लिए केवल एक पृष्ठ लोड करता है और फिर उस पृष्ठ को सर्वर से अलग-अलग डेटा लाकर भरता रहता है। उपयोगकर्ता को लगता है की पृष्ठ बदल रहा है, पर वह असलियत में बदलता नहीं है| केवल उसका डाटा बदलता है| अर्थार्थ, SPA में पेज केवल एक बार लोड होता है। कोई पुनः लोडिंग नहीं होती है। यह समय बचाता है और वेबसाइट या ऐप को तेज़ बनाता है। 

(इसके विपरीत, सर्वर साइड रेंडरिंग या स्टैटिक साइट के मामले में, जब भी उपयोगकर्ता किसी नए पेज/पोस्ट लिंक पर क्लिक करता है, तो उसके लिए एक नया पेज फिर से लोड किया जाता है।)

जहाँ तक एक पेज वाली वेबसाइटों का सवाल है, यह बस वो वेबसाइटें हैं जिसमें केवल एक होम पेज होता है। उदाहरण के लिए, कई रियल एस्टेट एजेंटों की वेबसाइटें, resume वेबसाइटें, आदि। इनका SPAs से कोई लेना-देना नहीं है।
</div>

ठीक है, अब तक आप समझ गए होंगे की स्टैटिक साइटें क्या होती हैं| अब हम मुख्य विषय पर वापस आते हैं - स्टैटिक साइट जनरेटर क्या हैं, वे कैसे काम करते हैं और क्या हमें उनका उपयोग करके अपनी वेबसाइट / ब्लॉग बनाना चाहिए?


## स्टैटिक साइट जनरेटर कैसे काम करता है? (Static Site Generator kaise kaam karta hai?)

स्टेटिक साइट जेनरेटर टेम्प्लेट में डेटा और कंटेंट भरते हैं। लेकिन वे ऐसा build time के दौरान करते हैं न कि real time में।

उदाहरण के लिए, यदि आप HUGO स्टेटिक साइट जनरेटर का उपयोग कर रहे हैं, तो आप अपने पोस्ट और पेज मार्कअप फाइल्स (markup files) के रूप में लिखेंगे, खुद अपने कंप्यूटर में। जब आप अपनी वेबसाइट को होस्टिंग प्रदाता, Netlify पर डालेंगे, तो वह HUGO साइट बिल्डिंग कमांड चलाएगा और आपकी पूरी वेबसाइट का निर्माण करेगा। यह आपकी सभी मार्कअप फाइलों को HTML फाइलों में बदल देगा और इसे अपने डेटाबेस में जमा कर देगा। <br>
<img src="../../../images/web-design/static-site-generator.png" alt="static site generator functioning" style="width:99%;height:99%;">

अब, यदि कोई उपयोगकर्ता किसी पृष्ठ का अनुरोध करता है, तो वह उपयोगकर्ता के सामने उस बने-बनाये HTML पृष्ठ को प्रस्तुत कर देगा।

जबकि डायनेमिक वेबसाइटों के मामले में, पेज/पोस्ट डेटा और कंटेंट से तभी भरे जाते हैं जब उपयोगकर्ता उस पेज/पोस्ट के लिए अनुरोध करता है। HTML पृष्ठ पहले से डेटाबेस में जमा नहीं होते हैं| उन्हें सर्वर तब बनाता है, जब कोई उनकी मांग करता है| और यह जाहिर सी बात है की HTML पृष्ठ बनाने में थोड़ा समय तो लगेगा ही| 

यही कारण है कि स्टैटिक वेबसाइटें बहुत प्रसिद्ध हो रही हैं, क्यूंकि वो डायनेमिक वेबसाइटों की तुलना में बहुत तीव्र होती हैं।


## सबसे अच्छे स्टेटिक साइट जेनरेटर (Sabse acche Static Site Generator)

आप यहां <a href="https://www.staticgen.com/" target="_blank" class="mak-link">इस वेबसाइट</a> पर सभी उपलब्ध स्टेटिक वेबसाइट जेनरेटर देख सकते हैं| 

कुछ बेहतरीन स्टेटिक साइट जनरेटर की हमारी सूची निम्नलिखित है:

* HUGO - यह Google द्वारा Go भाषा में बनाया गया एक ओपन-सोर्स (open-source) स्टैटिक साइट जनरेटर है। यह लंबे समय से बाजार में है और इसे अच्छा सामुदायिक समर्थन प्राप्त है। <br><br>
आप इसे Netlify या स्टैटिक साइटों को host करने वाली किसी अन्य होस्टिंग सेवा में होस्ट कर सकते हैं। इसके अलावा, यदि आपके पास एक ऐसी टीम है जो GUI (ग्राफिकल यूजर इंटरफेस) के साथ काम करने में अधिक सहज है, तो आप Forestry या NetliflyCMS जैसे CMS (Content Management System) का उपयोग कर सकते हैं। <br><br>
व्यक्तिगत रूप से, मैं किसी भी CMS का उपयोग करने के बजाय अपने कंप्यूटर पर VS Code में काम करना पसंद करता हूं। HUGO का उपयोग करने का एकमात्र नकारात्मक पहलू Go भाषा है जो इतनी लोकप्रिय नहीं है, लेकिन फिर भी में HUGO का उपयोग अपनी अधिकांश वेबसाइटों के लिए करता हूं।

* Scully - यह एक विकसित होता हुआ स्टैटिक साइट जनरेटर है, जो Angular पर आधारित है। क्यूंकि में Angular काफी प्रयोग करता हूं, यही मेरी पहली पसंद होती। लेकिन यह स्टैटिक साइट जनरेटर अपेक्षाकृत नया है और मैं इसके थोड़ा और विकसित होने का इंतजार कर रहा हूं। यदि आप अपने Angular Single Page App (SPA) को स्टैटिक वेबसाइट के रूप में प्रस्तुत करना चाहते हैं तो यह एक अच्छा विकल्प हो सकता है। <br><br>
Scully के बारे में अधिक पढ़ने के लिए आप उनकी <a href="https://scully.io/" target="_blank" class="mak-link"> वेबसाइट </a> पर जा सकते हैं, या उनका <a href="https://github.com/scullyio/scully" target="_blank" class="mak-link"> github page </a> देख सकते हैं। 

* Gatsby - Gatsby, HUGO की तरह ही लोकप्रिय है। यह उन लोगों के लिए भी एक बढ़िया विकल्प है जो पहले से ही React से परिचित हैं। मुझ पर विश्वास करिये! React से संबंधित किसी भी चीज़ के साथ आपको एक बेहतरीन सामुदायिक समर्थन (community support) मिलेगा।

कुछ अन्य अच्छे स्टैटिक साइट जनरेटर Eleventy and Jekyll हैं। Eleventy को JavaScriptका उपयोग करके बनाया गया है, और Jekyll सबसे पुराने SSGs में से एक है।


## उपसंहार 

स्टेटिक साइट जेनरेटर का उपयोग करके वेबसाइट बनाना अभी चलन में है, और यह भविष्य में और बढ़ने वाला है। ऐसा इसलिए है क्योंकि यह हमारे दोनों हाथों में लड्डू देता है - स्टेटिक साइटें तेज़ होती हैं, और सुरक्षित भी। 

अगर आप Wordpress का इस्तेमाल कर रहे हैं, तो आपको अपनी साइट को सुरक्षित और तेज बनाने के लिए काफी मेहनत करनी पड़ेगी। Wordpress में आपकी साइट की सुरक्षा करने, नियमित रूप से बैकअप लेने और cache (कैशे) का उपयोग करके इसे तेज़ बनाने के लिए कई plugins (प्लगइन्स) हैं। लेकिन उनमें से कोई भी पूरी तरह से सुरक्षित, या बिना खामी वाला नहीं है। खासकर, अगर आपने Wordpress में cache plugins का इस्तेमाल किया है, तो आपको पता चल जाएगा कि वे कितने बड़े सिरदर्द पैदा करते हैं।

स्टेटिक वेबसाइटें स्वाभाविक रूप से तेज़ होती हैं, क्योंकि हम पूरी वेबसाइट को content delivery network (CDN) पर होस्ट कर सकते हैं। और क्यूंकि इसमें कोई सर्वर शामिल नहीं होता है, और वेबसाइट के स्टैटिक पृष्ठ केवल होस्टिंग में जमा रहते हैं, इसलिए स्टेटिक वेबसाइटें बहुत सुरक्षित होती हैं - इन्हें आराम से कोई हैकर ख़राब या इनपे कब्ज़ा नहीं कर सकता। इसके अलावा, स्टेटिक वेबसाइटों के लिए होस्टिंग निःशुल्क होती है! Netlify मुफ्त SSL प्रमाणपत्र (SSL certificate) भी प्रदान करता है।

यदि आपको लगता है कि एक स्टेटिक वेबसाइट जनरेटर का उपयोग करके एक स्टेटिक वेबसाइट बनाने के लिए आपको एक सुपर कोडर या तकनीकी विशेषज्ञ होने की आवश्यकता है, तो आप पूरी तरह से गलत हैं। मैं ज्यादातर HUGO का इस्तेमाल करता हूं जो Go भाषा में बना है, जिसे मैं अच्छे से जानता भी नहीं। इसलिए, जिस तरह आपको Wordpress ब्लॉग सेटअप करने के लिए PHP जानने की आवश्यकता नहीं है, वैसे ही आपको स्टेटिक साइट जनरेटर का उपयोग करने के लिए Go, HTML, CSS या JavaScript जानने की आवश्यकता नहीं है। लेकिन अगर आप कुछ HTML, CSS और JavaScript जानते हैं, तो इससे आपको अतिरिक्त मदद मिलेगी।

मैं इस बात से इनकार नहीं करूंगा कि यह सब सीखने में कुछ समय तो लगेगा, जैसा कि Wordpress के मामले में भी होता ही है। आपको कमांड लाइन, कुछ बुनियादी मार्क-अप (mark-up), आदि के बारे में जानने की आवश्यकता होगी। लेकिन आप इसे आसानी से एक या दो महीने में कर सकते हैं। आप मेरे HUGO स्टैटिक साइट जेनरेटर से सम्बंधित लेख पढ़ सकते हैं, जहां मैंने अपने ब्लॉग को सेटअप करने के लिए इंस्टालेशन से लेकर थीम के कस्टमाइज़ेशन तक सभी चीजें लिखी हैं।

एक बार जब आप अपनी स्टैटिक वेबसाइट बना लेते हैं, तो आपको केवल Visual Studio Code (VS Code) का उपयोग करके अपने कंप्यूटर पर काम करना होता है और फिर बस 3 कमांडो का उपयोग करके Github में अपनी वेबसइट को चढ़ा देना होता है। बस इतना ही!

आपको अपनी वेबसाइट की सुरक्षा, तकनीकी SEO (जो मुख्य रूप से आपके पृष्ठों/पोस्ट के लोड समय को कम करने के लिए किया जाता है) या साइट के नियमित बैकअप के बारे में चिंता करने की आवश्यकता नहीं है। आप चकित होंगे कि यह सेटअप कितना सुचारू रूप से चलता है। 

इसे आज़माएं और हमें कमेंट सेक्शन में बताएं कि आप इस सब के बारे में क्या सोचते हैं।
