---
author: Mragank Shandilya
title: गणित में पाइप और सिस्टर्न की अवधारणा (Concept of Pipe and Cisterns in Maths)
date: "2021-12-03"
description: गणित में पाइप और सिस्टर्न की अवधारणा (Concept of Pipe and Cisterns in Maths) # Description used for search engine.
featured: true # Sets if post is a featured post, making it appear on the sidebar. A featured post won't be listed on the sidebar if it's the current page
draft: false # Sets whether to render this page. Draft of true will not be rendered.
toc: true # Controls if a table of contents should be generated for first-level links automatically.
tags: ["pipe-and-cisterns"]
categories: ["time-and-work"]
series: ["arithmetic"]
# aliases: ["migrate-from-jekyl", "demo alias"]
math: true
featureImage: "/images/work-and-time/pipe-and-cisterns.png" # Sets featured image on blog post.
thumbnail: "images/work-and-time/pipe-and-cisterns.png" # Sets thumbnail image appearing inside card on homepage. I will keep it the same as featureImage.
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
# codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
# codeLineNumbers: false # Override global value for showing of line numbers within code block.
# figurePositionShow: true # Override global value for showing the figure label.
---

इस लेख में हम क्वांटिटेटिव एप्टीटुड (गणित) के एक महत्त्वपूर्ण अध्याय के बारे में जानेंगे - <strong>Pipe and Cisterns, in Hindi</strong>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

इस अध्याय से सम्बंधित एक और विषय, समय और कार्य (Time and Work) के बारे में जानने के लिए आप <a href="../work-and-time-in-maths" title="Time and Work" class="mak-link">हमारा यह लेख पढ़ सकते हैं|</a> 
</div>

पाइप/नल का उपयोग टैंकों/टैंकों को तरल से भरने (और खाली करने) के लिए किया जाता है।

* इनलेट (Inlet) - एक ऐसा पाइप जो किसी टैंक या किसी हौज या जलाशय को भरता है। यह 'प्लस/पॉजिटिव/घनात्मक' प्रकार का काम करता है।

* आउटलेट (Outlet) - एक ऐसा पाइप जो किसी टैंक या किसी हौज या जलाशय को खाली करता है। यह 'माइनस/नेगेटिव/नकारात्मक' प्रकार का काम करता है।

कुल किया गया कार्य = इनलेट द्वारा किए गए कार्य का योग - आउटलेट द्वारा किए गए कार्य का योग

## पाइप द्वारा किया गया कार्य (Work done by a pipe)

यदि एक पाइप टैंक को x घंटे मैं भर या खाली कर सकता है, तो

1 घंटे में भरे या खाली किए गए टैंक का हिस्सा = 1/x (यह पाइप द्वारा किया गया कार्य है)

## दो पाइपों द्वारा किया गया संयुक्त कार्य (Combined work done by two pipes)

यहां कई मामले सामने आ सकते हैं, जो इस बात पर निर्भर करता है कि दिए गए पाइप इनलेट या आउटलेट पाइप हैं।

आइए दो सामान्य मामलों पर विचार करें।

### केस 1: दो इनलेट पाइप (Two inlet pipes)

यदि एक पाइप, एक टैंक को x घंटे में भर सकता है, और दूसरा पाइप उसी टैंक को y घंटे में भर सकता है (जहाँ y > x), तो

पाइपों द्वारा प्रति घंटा किया गया कार्य (अर्थात उनकी दक्षता) 1/x और 1/y होगा

उनकी संयुक्त दक्षता = 1/x + 1/y = (x + y)/xy

यानि टैंक का इतना भाग 1 घंटे में भर जायेगा, यदि दोनों पाइपों को एक साथ खोल दिया जाए| 

तो, टैंक को भरने में लगने वाला समय जब दोनों पाइप इसे भर रहे हों = xy/(x + y)

### केस 2: एक इनलेट और एक आउटलेट पाइप (One inlet and One outlet pipe)

यदि एक पाइप, एक टैंक को x घंटे में भर सकता है और दूसरा पाइप उसी टैंक को y घंटे में खाली कर सकता है, तो दोनों पाइपों को खोलने पर,

1 घंटे में भरा गया भाग = 1/x – 1/y = (y - x)/xy <br>
(जहाँ y > x) <br>
तो, टैंक को भरने में लगने वाला समय जब दोनों पाइप काम कर रहे हों = xy/(y - x)

1 घंटे में खाली हुआ भाग = 1/y – 1/x = (x - y)/xy <br>
(जहाँ x > y) <br>
तो, टैंक को खाली करने में लगने वाला समय जब दोनों पाइप काम कर रहे हों = xy/(x - y)

##### प्रश्न. पाइप A और B एक टैंक को क्रमशः 12 और 18 मिनट में भर सकते हैं। यदि दोनों पाइपों को एक साथ खोल दिया जाए, तो टैंक को भरने में कितना समय लगेगा?

व्याख्या :<br>
<button class="mak-tablink tablink-group1 default-tab" onclick="openTab('1Exp-1', this, 'tablink-group1', 'tabcontent-group1')">1</button>
<button class="mak-tablink tablink-group1" onclick="openTab('1Exp-2', this, 'tablink-group1', 'tabcontent-group1')">2</button>

<div id="1Exp-1" class="Exp-1 mak-tabcontent tabcontent-group1">
व्याख्या 1: पारंपरिक या सूत्र विधि <br><br>

यदि दोनों पाइपों को खोल दिया जाए, तो टैंक को भरने में लगने वाला समय = xy/(x + y) <br>
= (12 × 18)/(12 + 18) = (12 × 18)/30 = 36/5 = 7.2 मिनट <br>
(यानी 7 मिनट और 12 सेकंड)
</div>

<div id="1Exp-2" class="Exp-2 mak-tabcontent tabcontent-group1">
व्याख्या 2: LCM विधि <br><br>

माना टैंक की क्षमता = LCM (12, 18) = 36 units

तो, पाइप A की दक्षता (अर्थात पाइप A द्वारा 1 मिनट में भरी गई मात्रा) = 36/12 = 3 यूनिट/मिनट <br>
और पाइप B की दक्षता (अर्थात पाइप B द्वारा 1 मिनट में भरी गई मात्रा) = 36/18 = 2 यूनिट/मिनट

उनकी संयुक्त दक्षता (अर्थात 1 मिनट में भरी गई मात्रा) = 3 + 2 = 5 यूनिट/मिनट

तो, एक साथ काम करने पर उनके द्वारा लिया गया समय = कुल कार्य / संयुक्त दक्षता <br>
= 36/5 = 7.2 मिनट <br>
(यानी 7 मिनट और 12 सेकंड)
</div><br>

