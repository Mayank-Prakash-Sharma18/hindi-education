---
title: "Contact Us"
# description
description: "This is meta description"
draft: false
---

## We would Love To Hear From You....

Do write your name and email with your message. 

<!-- HTML Code downloaded from https://formspree.io/library/simple-contact-form/ ; Just add your form's endpoint, i.e. its id down below, in the action field of the very first line, e.g. action="https://formspree.io/f/xwkylaey" ... xwkylaey is the id of this form-->

<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xwkylaey" method="post"> 
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="" class="mak-input">
    <br><br>
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" class="mak-input">
    <br><br>
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Enter your message here." required="" class="mak-input" width="100%"></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <br><br>
  <input type="submit" value="Submit" class="mak-button">
</form>

<br><br>

<!-- Added some SASS property to textarea element (in _custom.sass file) to properly format my textarea element in this Contact Us form; basically to make its width 100%. Source: https://stackoverflow.com/questions/271067/how-can-i-make-a-textarea-100-width-without-overflowing-when-padding-is-present; https://davidwalsh.name/textarea-width; Used https://jsonformatter.org/css-to-sass to convert CSS into SASS.  -->

