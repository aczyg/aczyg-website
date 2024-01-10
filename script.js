/* skills, experience, education */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemeu = document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* sidemenu */
function openmenu(){
    sidemeu.style.right = "0px";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}