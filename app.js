//variable
const shareIcon = document.querySelector('.share-icon');
const desktopDisplay = document.querySelector('.parent-desktop-display');
const mediaQuery = window.matchMedia('(min-width:900px)');
const mobileDisplay = document.querySelector('.mobile-display')
const parentMobileDisplay = document.querySelector('.parent-mobile-display')
const mobileShareIcon = document.getElementById('mobile-share-icon');
const containerOfHighestProfileContainer = document.querySelector('.container-of-highest-profile-container');


shareIcon.addEventListener('click', function() {
    if(mediaQuery.matches) {
        
        
            if(desktopDisplay.style.display === 'none') {
                
                desktopDisplay.style.display = "block";
            } else if (desktopDisplay.style.display ="block") {
                desktopDisplay.style.display = "none";
            }
    } else {
       containerOfHighestProfileContainer.style.display = "none";
       parentMobileDisplay.style.display = "block";
        
    }
});

mobileShareIcon.addEventListener('click', function() {
    parentMobileDisplay.style.display = "none";
    containerOfHighestProfileContainer.style.display ="block";
    
});




















