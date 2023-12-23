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
/* projects */
var projectstablinks = document.getElementsByClassName("projects-tab-links");
var projectstabcontents = document.getElementsByClassName("projects-tab-contents");

function opentab2(projectstabname){
    for(projectstablink of projectstablinks){
        projectstablink.classList.remove("active-link");
    }
    for(projectstabcontent of projectstabcontents){
        projectstabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(projectstabname).classList.add("active-tab");
}