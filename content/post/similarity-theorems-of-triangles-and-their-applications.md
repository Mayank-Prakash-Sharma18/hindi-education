---
author: Mragank Shandilya
title: समरूपता प्रमेय और उनके अनुप्रयोग (Similarity Theorems and their applications)
date: "2022-01-14"
description: समरूपता प्रमेय और उनके अनुप्रयोग (Similarity Theorems and their applications) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["geometry"]
categories: ["geometry"]
series: ["higher-maths"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/geometry/similarity-5.png" # Sets featured image on blog post.
thumbnail: "images/geometry/similarity-5.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम गणित के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Similarity Theorems and their applications, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित, अन्य विषयों के बारे में जानने के लिए आप हमारे निम्नलिखित लेख पढ़ सकते हैं: 

* <a href="../what-is-geometry" title="Geometry" class="mak-link">ज्यामिति क्या होती है?</a> 
* <a href="../lines-and-angles-in-geometry" title="Geometry" class="mak-link">ज्यामिति में रेखाएं और कोण</a> 
* <a href="../triangle-basics-in-hindi" title="Geometry" class="mak-link">ज्यामिति में त्रिभुज</a> 
* <a href="../important-lines-and-points-in-triangles" title="Geometry" class="mak-link">त्रिभुज से संबंधित महत्वपूर्ण रेखाएं और बिंदु</a> 
* <a href="../important-theorems-related-to-triangles" title="Geometry" class="mak-link">त्रिभुज से सम्बंधित महत्वपूर्ण प्रमेय और नियम</a> 
* <a href="../similarity-theorems-of-triangles-and-their-applications" title="Geometry" class="mak-link">समरूपता प्रमेय और उनके अनुप्रयोग</a> 
* <a href="../triangles-congruency-and-similarity-in-hindi" title="Geometry" class="mak-link">त्रिभुजों की सर्वांगसमता और समरूपता क्या होती हैं?</a> 
* <a href="../triangle-area-in-hindi" title="Geometry" class="mak-link">त्रिभुज के क्षेत्रफल से सम्बंधित सूत्र और गुण</a> 
* <a href="../quadrilaterals-basics-in-hindi" title="Geometry" class="mak-link">चतुर्भुज और उसके गुण</a> 
* <a href="../quadrilaterals-area-in-hindi" title="Geometry" class="mak-link">चतुर्भुज के क्षेत्रफल से सम्बंधित सूत्र और गुण</a> 
* <a href="../what-is-parallelogram" title="Geometry" class="mak-link">समांतर चतुर्भुज और उसके गुण</a> 
* <a href="../what-is-trapezium" title="Geometry" class="mak-link">समलंब चतुर्भुज और उसके गुण</a>
* <a href="../polygon-basics-in-hindi" title="Geometry" class="mak-link">बहुभुज और उसके गुण</a> 
* <a href="../circle-basics-in-hindi" title="Geometry" class="mak-link">वृत्त और उसके गुण</a> 
* <a href="../circle-theorems-in-hindi" title="Geometry" class="mak-link">वृत्त प्रमेय</a> 
</div>

अब, जैसा कि हम पहले ही त्रिभुजों की समरूपता की अवधारणा को समझ चुके हैं, आइए इसके अनुप्रयोगों और इस पर आधारित कुछ प्रमेयों/अवधारणाओं को देखें।

## प्रमेय 1: Thales theorem

थेल्स प्रमेय (Thales theorem) को ***मूल आनुपातिकता प्रमेय (Basic proportionality theorem)*** के रूप में भी जाना जाता है।

एक रेखा खंड, जो त्रिभुज की किसी भुजा के समानांतर होता है, उस त्रिभुज की अन्य दो भुजाओं को उसी अनुपात में काटता है, और यह मूल त्रिभुज के समरूप (similar) एक नया त्रिभुज बनाता है। <br>
<img src="../../../images/geometry/similarity-5.png" alt="Geometry" style="width:45%;height:45%;"> 

उपरोक्त आकृति में, AB ∥ PQ. <br>
क्यूंकि ∠C = ∠C, ∠A = ∠P, ∠B = ∠Q, इसलिए ∆ABC ~ ∆PQR

<p> और क्यूंकि ∆ABC ~ ∆PQR, इसलिए \(\frac{AB}{PQ} = \frac{BC}{QC} = \frac{AC}{PC}\) </p>

<p> साथ ही, \(\frac{AP}{PC} = \frac{BQ}{QC}\) <br><br>
\(\frac{AC}{AP} = \frac{BC}{BQ}\) </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इसका उलटा भी सच है। यदि एक रेखाखंड त्रिभुज की दो भुजाओं को समान अनुपात में विभाजित करता है, तो यह रेखाखंड तीसरी भुजा के समानांतर होना चाहिए।

<p> अर्थात्, यदि \(\frac{AP}{PC} = \frac{BQ}{QC}\), तो इसका अर्थ है कि PQ ∥ AB </p>
</div>

आइए, अब थेल्स प्रमेय के कुछ विशेष मामले और कुछ संबंधित नियमों को देखें।

### Thales theorem का विशेष मामला

किसी त्रिभुज की दो भुजाओं के मध्य-बिंदुओं को मिलाने वाला रेखाखंड, उस त्रिभुज की तीसरी भुजा के समानांतर और उसकी लंबाई का आधा होता है। <br>
<img src="../../../images/geometry/similarity-6.png" alt="Geometry" style="width:45%;height:45%;"> 

<p> यदि P और Q, AC और BC के मध्य-बिंदु हैं, तो PQ ∥ AB, और PQ = \(\frac{1}{2}\) AB </p>

<p> अत: ∆PQC का क्षेत्रफल = \(\frac{1}{4}\) ∆ABC <br><br>
और, ∆PQC का क्षेत्रफल = \(\frac{1}{3}\) □ABQP </p>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

दूसरे शब्दों में, यदि त्रिभुज की एक भुजा के समांतर रेखा दूसरी भुजा को समद्विभाजित करती है, तो वह तीसरी भुजा को भी समद्विभाजित करेगी।

यदि PQ ∥ AB और P, AC का मध्यबिंदु है, तो Q भी BC का मध्यबिंदु होगा।
</div>

### संबंधित नियम (Related rule)

त्रिभुज की दो भुजाओं के मध्य बिन्दुओं को मिलाने वाला रेखाखंड, शीर्ष को तीसरी भुजा से मिलाने वाली रेखा को भी समद्विभाजित करेगा। <br>
<img src="../../../images/geometry/similarity-7.png" alt="Geometry" style="width:54%;height:54%;"> 

उपरोक्त आकृति में, चूंकि P और Q क्रमशः AC और BC भुजाओं के मध्यबिंदु हैं, इसलिए CZ = XZ


## प्रमेय 2

समकोण त्रिभुज में, समकोण के शीर्ष से कर्ण तक खींचा गया लंबवत त्रिभुज को दो भागों में विभाजित करता है, और एक दूसरे के समरूप (similar) और मूल त्रिभुज के समरूप (similar) दो छोटे त्रिभुज बनाता है। <br>
<img src="../../../images/geometry/similarity-8.png" alt="Geometry" style="width:45%;height:45%;"> 

उपरोक्त आकृति में, ∆ABC ~ ∆DAB ~ ∆DAC

* <p> \(AC^2\) = CB × CD   ... (1) </p>
* <p> \(AB^2\) = BC × BD   ... (2) </p>
* <p> \(AD^2\) = DC × DB   ... (3) </p>

इन तीनों से हम तीन और समीकरण बना सकते हैं।

<p> समीकरण 1 और 2 का प्रयोग करते हुए, हम प्राप्त करते हैं: <br>
\(\frac{AC^2}{AB^2} = \frac{CD}{BD}\) </p>

<p> समीकरण 2 और 3 का प्रयोग करते हुए, हम प्राप्त करते हैं: <br>
\(\frac{AB^2}{AD^2} = \frac{BC}{DC}\) </p>

<p> समीकरण 1 और 3 का प्रयोग करते हुए, हम प्राप्त करते हैं: <br>
\(\frac{AC^2}{AD^2} = \frac{CB}{DB}\) </p>

* <p> \(\frac{1}{AD^2} = \frac{1}{AC^2} + \frac{1}{AB^2}\) </p>
<p> या AD = \(\frac{AC × AB}{BC}\) </p>


## प्रमेय 3: समलंब चतुर्भुज से संबंधित (Related to Trapezium)

समलम्ब चतुर्भुज (AB ∥ CD) के विकर्ण, इसे चार त्रिभुजों में विभाजित करते हैं। <br>
<img src="../../../images/geometry/similarity-9.png" alt="Geometry" style="width:54%;height:54%;"> 

* समांतर भुजा (parallel sides) के अनुदिश दो त्रिभुज समरूप (similar) हैं, अर्थात DOC ~ ∆AOB
* गैर-समानांतर भुजाओं (non-parallel sides) के अनुदिश दो त्रिभुज क्षेत्रफल में बराबर हैं, अर्थात ∆AOD का क्षेत्रफल = ∆BOC का क्षेत्रफल

