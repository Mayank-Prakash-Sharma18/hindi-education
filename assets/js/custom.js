// add custom js in this file

// Disable right click (https://stackoverflow.com/questions/737022/how-do-i-disable-right-click-on-my-web-page)
document.addEventListener('contextmenu', event => event.preventDefault());


// JS code for Explanation tabs
function openTab(tabName,elmnt,tablinkgroup,tabcontentgroup) {
    var i, tabcontent, tablinks;

    // Get all tabcontent elements with class name stored inside the variable tabcontentgroup, which has been passed to this function, and hide them (all the explanations of a particular question will share the same tabcontentgroup class)
    tabcontent = document.getElementsByClassName(tabcontentgroup);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all tablink elements with class name stored inside the variable tablinkgroup, which has been passed to this function, and set their background color to default (all the explanations of a particular question will share the same tablinkgroup class)
    tablinks = document.getElementsByClassName(tablinkgroup);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Show the current tab
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = "teal";
  }

// Get all the elements with class="default-tab" and click on it. So, as soon as the page loads, the content of all the tabs which have the class of default-tab will be displayed by default.
var buttons = document.getElementsByClassName('default-tab');
for(var i = 0; i < buttons.length; i++)  
    buttons[i].click();


// Copy to Clipboard functionality added by me / Mak / Mayank. 
// Source - https://stackoverflow.com/questions/57253006/two-copy-text-buttons 
// This can work even if we have multiple items to copy on a page. 

function makCopyFunction(elem) {
  var targetElementID = elem.getAttribute("data-target");
  var copyText = document.getElementById(targetElementID);
  copyText.select();
  document.execCommand("copy");
}

// We use the following HTML code in our pages/post, along with the above JS code (for bigger text, to be put in textarea HTML element)
/* <textarea id="myInput1" class="mak-input" style="width:99%;height:150px;">Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</textarea>
<button onclick="myFunction(this)" data-target="myInput1" class="mak-button">Copy to Clipboard</button> <br> */

// We use the following HTML code in our pages/post, along with the above JS code (for one line smaller text, to be put in text input HTML element). 'Width' of the input text must be atleast double than the text within it, otherwise full text is not shown completely in mobile view. 
/* <input type="text" value="choco install hugo -confirm" id="myInput2" class="mak-input" style="width:72%;">
<button onclick="myFunction(this)" data-target="myInput2" class="mak-button">Copy to Clipboard</button> <br> */

