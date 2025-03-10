let isOpen = false; 

function Nav() {
  if (isOpen) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  isOpen = !isOpen; 
}



let DropisOpen = true;
let DropisOpen2 = true;
let DropisOpen3 = true;
let themeState = true;

function Drop() {
  if (DropisOpen) {
    document.getElementById("dropdown-personal").style.display = "block";
    dropHeight = document.getElementById("dropdown-personal");
    spaceHeight = document.getElementById("space");
    newHeight = dropHeight.clientHeight + spaceHeight.clientHeight;
    document.getElementById("space").style.height = newHeight;
  } else {
    document.getElementById("dropdown-personal").style.display = "none";
    document.getElementById("space").style.height = "auto";
  }
  
  DropisOpen = !DropisOpen;
}

function Drop2() {
  if (DropisOpen2) {
    document.getElementById("dropdown-contacts").style.display = "block";
  } else {
    document.getElementById("dropdown-contacts").style.display = "none";
  }
  
  DropisOpen2 = !DropisOpen2; 
}

function Drop3() {
  if (DropisOpen3) {
    document.getElementById("moreDrop").style.display = "block";
  } else {
    document.getElementById("moreDrop").style.display = "none";
  }
  
  DropisOpen3 = !DropisOpen3; 
}

function theme() {
  if (themeState) {
    document.getElementById("theme").href = "style.css";
  } else {
    document.getElementById("theme").href = "light.css";
  }
}