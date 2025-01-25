//navigation menu resposive toggle functionality -------------
var hamburgerMenu  = document.getElementById("hamburger-menu");
var navOverlay = document.getElementById("navigation-overlay");
var overlayLinks = document.querySelectorAll("#overlay-links ul li a");

//when the hamburger menu is clicked, visibility of the overlay changes and the hamburger icon itself
hamburgerMenu.onclick = function(){

    //implement the chnage class for the hamburger icon
    hamburgerMenu.classList.toggle("change");

    //show overlay visbility
    if(navOverlay.style.display == "flex"){
        navOverlay.style.display = "none";
    }else{
        navOverlay.style.display = "flex";
    }
};

//close the overlay when a link is clicked in the overlay 
for (let i=0; i < overlayLinks.length; i++){
    overlayLinks[i].onclick = function () {
        //remove the nav overlay when the window is clicked
        navOverlay.style.display ="none";
        //reset the hamburger icon 
        hamburgerMenu.classList.remove("change");
    };
}

//menu modal box functionality ------------------------------
//fetch the modal 
var dinnerModal = document.getElementById("dinner-modal");

var dinnerButton = document.getElementById("dinner-button");
var span = document.getElementById("close-modal");

//when button is clicked, open the modal box
dinnerButton.onclick = function(){
    dinnerModal.style.display = "flex";
}

//when the fa icon is pressed, close the modal box
span.onclick = function(){
    dinnerModal.style.display = "none";
}

//if the user clicks anywhere outside of the pdf box, close the modal box
window.onclick = function (event) {
    if (event.target == dinnerModal) {
        dinnerModal.style.display = "none";
    }
};