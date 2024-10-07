
let menuButton = document.getElementById('menu');
let menuOverlay = document.getElementById('menu-overlay');
let menuContainer = document.getElementById('menu-container');
let aboutSection = document.getElementById('about-me');
let myImg = document.getElementById('img-slide');

let test = document.getElementById('click-test');
let aboutMeP = document.getElementById('about-me-p');
let introText = document.getElementById('intro-text');

let allLayers = document.getElementById('all-layers');

let theme = document.getElementById('mode');
let subBut = document.getElementById('sub-button');

let themeIndicator = document.getElementById('theme-ind');
let themeIndP = document.getElementById('theme-ind-p');

let themeTimeOut;
let ShowInd = () => {
    themeIndicator.style.opacity = "100%";
    if(themeTimeOut) clearTimeout(themeTimeOut);
    themeTimeOut =  setTimeout(() => {
        themeIndicator.style.opacity = "0%";        
    }, 2000);
}




const root = document.documentElement;



theme.addEventListener('click', changeTheme);

isDark = true;

primaryForeColor = getComputedStyle(root).getPropertyValue('--primary-fore-color');
primaryBackColor = getComputedStyle(root).getPropertyValue('--primary-back-color');

function changeTheme(){
    if(isDark){
        myImg.src = "img/webPikaGre1.png";
        // myImg.src = "img/ik.png";
        root.style.setProperty('--primary-back-color', '#E8F5E9');
        root.style.setProperty('--primary-fore-color', '#004D40');
        root.style.setProperty('--font-color', 'black');
        theme.className = "bx bxs-moon"
        isDark = false;
        primaryForeColor = getComputedStyle(root).getPropertyValue('--primary-fore-color');
        primaryBackColor = getComputedStyle(root).getPropertyValue('--primary-back-color');
        changeLayerColor();
        themeIndP.innerHTML = "Theme Switched to <Span>Elegent Green</span>";
        ShowInd();

    } else {
        myImg.src = "img/webPikaPur.png";
        // myImg.src = "img/ff.png";
        root.style.setProperty('--primary-back-color', '#000011');
        root.style.setProperty('--primary-fore-color', '#b55de9');
        root.style.setProperty('--font-color', '#fff');
        theme.className = "bx bx-moon";
        isDark = true;
        primaryForeColor = getComputedStyle(root).getPropertyValue('--primary-fore-color');
        primaryBackColor = getComputedStyle(root).getPropertyValue('--primary-back-color');

        changeLayerColor();
        themeIndP.innerHTML = "Theme Switched to <Span>Purple Moon</span>";

        ShowInd();


    }

}

allLayers.addEventListener('click', showAllLayer);
let layersEnabled = false;

function showAllLayer(){

    if(!layersEnabled){

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
        })
        

        allLayers.style.backgroundColor = primaryForeColor;
        allLayers.style.color = primaryBackColor;
        console.log("test color is set to - ", primaryForeColor);
        allLayers.style.transform = "rotate(180deg)";

        layersEnabled = true;
    } else {
 

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })


        allLayers.style.backgroundColor = 'transparent';
        console.log("test backcolor is set to - transparent");
        allLayers.style.color = primaryForeColor;
        console.log("test color is set to - ", primaryForeColor);
        allLayers.style.transform = "rotate(0deg)";
        layersEnabled = false;

    }

}

function changeLayerColor(){
    if(!layersEnabled){
        allLayers.style.backgroundColor = 'transparent';
        allLayers.style.color = primaryForeColor;
    } else {

        allLayers.style.backgroundColor = primaryForeColor;
        allLayers.style.color = primaryBackColor;
        
    }
}


const foregroundColors = [
    "#000000",
    "#333333", 
    "#003366",
    "#004D40",
    "#f30867",
    "#b55de9",
    "#0709f2"
  ];

  const backgroundColors = [
    "#FFFFFF",
    "#F2F2F2",
    "#E6F7FF",
    "#E8F5E9",
    "#2a0713",
    "#000011",
    "#090828"
  ];



fetch('docs/introText.txt')
            .then(response => response.text())
            .then(data => {
                introText.innerHTML =  data;
                
            })
            .catch(error => console.error('Error fetching text file:', error)); 

fetch('docs/aboutTxt.txt')
            .then(response => response.text())
            .then(data => {
                aboutMeP.innerHTML =  data;
                
            })
            .catch(error => console.error('Error fetching text file:', error)); 


let ptests = document.querySelectorAll('.p-test');




isclicked = false;
function showP(ptest){
    if(!isclicked){
        ptest.style.display = '';
       
        ptest.style.maxHeight = '300px';
      
        ptest.style.transform = 'scale(100%)';
        isclicked = true;


        
    } else {
        ptest.style.maxHeight = '0px';
 
        ptest.style.transform = 'scale(90%)';


        isclicked = false;

    }
}

menuButton.addEventListener("click", showMenuContainer);

console.log("working")

function showMenuContainer() {

    if(menuOverlay.style.display != 'flex'){

        console.log("Working from inside");
        menuOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        let tx = 100;
        let clearSTMC;
        console.log("Working from loop");
        clearSTMC = setInterval(() => {
            console.log("Working from ST");
        if(tx <= 0)
        clearInterval(clearSTMC);
        menuContainer.style.transform = `translate(-${tx}%)`;
        tx-=5;
        },5) ;
    }
} 

menuOverlay.addEventListener('click', hideMenuOverlay);

function hideMenuOverlay(event){

    if(!menuContainer.contains(event.target)){
        let tx = 0;
        let clearSTMC;
        console.log("Working from loop");
        clearSTMC = setInterval(() => {
        console.log("Working from ST");
        if(tx >= 100)
            clearInterval(clearSTMC);
        menuContainer.style.transform = `translate(-${tx}%)`;
        tx+=5;
        },5) ;

        menuOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';

    }
}



function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });

    menuOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
}



function detectDevice() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        console.log("User is on a mobile device");
    } else {
        console.log("User is on a desktop device");
    }
}
detectDevice();

let myForm = document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const status = document.getElementById('status');
    const formData = new FormData(this);
    subBut.textContent = "Please Wait🚀";

    const emailParams = {
        first_name: formData.get('first-name'),
        last_name: formData.get('last-name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    emailjs.send('service_kx2oni7', 'template_2da9aeu', emailParams)
        .then(function() {
            status.innerHTML = "Message sent successfully!";
            status.style.color = primaryForeColor;
            subBut.textContent = "Send Message";
        }, function(error) {
            status.innerHTML = "Failed to send message. Please try again.";
            status.style.color = "red";
            subBut.textContent = "Send Message";

        });
        
        this.reset();        
});




//============== testing was succesfull===================================================

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {

                    allLayers.style.backgroundColor = 'transparent';
        
                    allLayers.style.color = primaryForeColor;

                    allLayers.style.transform = "rotate(0deg)";
                    layersEnabled = false;

                    checkboxes.forEach((cb) => {
                        if (cb !== this) cb.checked = false;
                    });
                }
            });
        });



        isSome = false;
        let fm2 = 0;
        
        document.querySelectorAll('.stick').forEach((p) => {  
            
            let newtest = document.createElement('p');
            newtest.classList.add('new-test');
        
            fetch(`docs/mytxt${fm2}.txt`)
                    .then(response => response.text())
                    .then(data => {
                        newtest.textContent =  data;
                        
                    })
                    .catch(error => console.error('Error fetching text file:', error));    
        
            p.insertAdjacentElement('afterend',newtest);    
            fm2++;
        });


// added both the repositories
