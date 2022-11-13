/*----------------------javacsript about(tabs) ----------------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*---------------------- JS sidemenu(mobile) ----------------------*/
var sidemenu = document.getElementById("sidemenu");
        
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

/*---------------------- JS contact form data send on my Google sheets  ----------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbyo2Kd_AQ3qxMwYB0ihOK1Ve0rBwlq4OIU1Kr8VjLV53NWIEkr1LadmceQ_40ZmuiZnlg/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message was sent successfully" // message displayed after submit
        setTimeout(function(){
             msg.innerHTML = ""
        }, 5000)
         form.reset()
     })
    .catch(error => console.error('Error!', error.message))
 })
           
    