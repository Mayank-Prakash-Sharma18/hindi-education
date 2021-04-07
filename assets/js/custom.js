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
// Source - https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard 
// This function will work only for one text element per page, because it uses id. If you want to add more than one copy to clipboard buttons on a page then you will have to add similar functions with different ids (or do some R&D and find a method that uses class, rather than id)
document.getElementById("cp_btn").addEventListener("click", makCopyToClipboard);

function makCopyToClipboard() {

    var copyText = document.getElementById("cp_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

