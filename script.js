/* skills, experience, education */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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

document.getElementById("openLink1").addEventListener("click", function() {
    window.open("https://xd.adobe.com/view/c9d0ab64-7538-4f9d-997c-7221e2ca895e-9c83/", "_blank");
});

document.getElementById("openLink2").addEventListener("click", function() {
    window.open("https://xd.adobe.com/view/e0a06703-6b69-4ba4-9577-716122d6838e-b5f3/", "_blank");
});

document.getElementById("openLink3").addEventListener("click", function() {
    window.open("https://xd.adobe.com/view/5c08ff33-8d80-43b7-acbf-f1f0f33580e9-095b/", "_blank");
});

document.getElementById("openLink4").addEventListener("click", function() {
    window.open("https://aczyg.github.io/mech/", "_blank");
});