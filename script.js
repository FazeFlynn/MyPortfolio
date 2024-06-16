
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



const root = document.documentElement;



theme.addEventListener('click', changeTheme);

isDark = true;

function changeTheme(){
    if(isDark){
        root.style.setProperty('--primary-back-color', '#E8F5E9');
        root.style.setProperty('--primary-fore-color', '#004D40');
        root.style.setProperty('--font-color', 'black');
        theme.className = "bx bxs-moon"
        isDark = false;
    } else {
        root.style.setProperty('--primary-back-color', '#000011');
        root.style.setProperty('--primary-fore-color', '#b55de9');
        root.style.setProperty('--font-color', '#fff');
        theme.className = "bx bx-moon"
        isDark = true;
    }

}


allLayers.addEventListener('click', showAllLayer);

let layersEnabled = false;

function showAllLayer(){

    if(!layersEnabled){
        ptests.forEach((divs) => {
            divs.classList.add('expanded');
        });
        // allLayers.style.backgroundColor = 'red';
        allLayers.style.backgroundColor = 'blue';
        layersEnabled = true;
    } else {
        ptests.forEach((divs) => {
            divs.classList.remove('expanded');
        });
        allLayers.style.backgroundColor = 'transparent';
        layersEnabled = false;

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



// const root = document.documentElement;
// const num = Math.floor(Math.random() * foregroundColors.length);
  // Change CSS variables 
// root.style.setProperty('--primary-fore-color', foregroundColors[num]);
// root.style.setProperty('--font-color', foregroundColors[num]);
// root.style.setProperty('--primary-back-color', backgroundColors[num]);

// console.log('color index : ', num)

// root.style.setProperty('--font-size', '20px');
// root.style.setProperty('--border-width', '3px');




fetch('docs/introText.txt')
            .then(response => response.text())
            .then(data => {
                // Insert the content into the div
                introText.innerHTML =  data;
                
            })
            .catch(error => console.error('Error fetching text file:', error)); 

fetch('docs/aboutTxt.txt')
            .then(response => response.text())
            .then(data => {
                // Insert the content into the div
                aboutMeP.innerHTML =  data;
                
            })
            .catch(error => console.error('Error fetching text file:', error)); 


// let ptest2 = document.getElementById('p-test2');

isSome = false;

document.querySelectorAll('.clicked').forEach((a) => {  
    
    let ptest = document.createElement('p');
    ptest.classList.add('p-test');

    fetch('docs/mytxt.txt')
            .then(response => response.text())
            .then(data => {
                // Insert the content into the div
                ptest.textContent =  data;
                
            })
            .catch(error => console.error('Error fetching text file:', error));    

    // ptest.textContent = pText;
    a.insertAdjacentElement('afterend',ptest);    
});



let ptests = document.querySelectorAll('.p-test');

document.querySelectorAll('.clicked').forEach((a, index) => {
    console.log('is it workign');
    a.addEventListener('click', (event) => {
        // isSome = true;


        

        

        const clickedDiv = event.currentTarget; // The div that was clicked

        console.log('Clicked div content:', clickedDiv.textContent);
        console.log('Clicked div index:', index);

        let mptest = a.nextElementSibling;

        

        // showP(ptest);
        // isSome = false;
        showAllp(mptest,a);
        // showAllp(ptest);

        
        
        // Example action: Change background color of clicked div
        // clickedDiv.style.backgroundColor = 'lightblue';
    });
});

function showAllp(mptest,a){
    // ptest.classList.add('expanded');

    ptests.forEach((divs) => {
        divs.classList.remove('expanded');
    });


    if(!isSome){
        mptest.classList.add('expanded');
        allLayers.style.backgroundColor = 'transparent';
        layersEnabled = false;
        isSome = true;
    } else {
        mptest.classList.remove('expanded');
        isSome = false;
        allLayers.style.backgroundColor = 'transparent';
        layersEnabled = false;


    }

}






isclicked = false;
function showP(ptest){
    if(!isclicked){
        ptest.style.display = '';
        // ptest.style.height = 'auto';
        // ptest.style.padding = '3px';
        ptest.style.maxHeight = '300px';
        ptest.style.width = '100%';
        ptest.style.transform = 'scale(100%)';
        isclicked = true;


        // ptest2.style.display = '';
        // ptest2.style.height = '150px';
        // ptest2.style.width = '100%';
        
    } else {
        // ptest.style.display = 'none';
        ptest.style.maxHeight = '0px';
        // ptest.style.padding = '0px';
        // ptest.style.width = '0px';
        ptest.style.transform = 'scale(90%)';


        isclicked = false;

        // ptest2.style.height = '0px';
    }
}

// test.addEventListener('click', showP);

// document.addEventListener('click', (event) => {
//     if(!test.contains(event.target && !ptest.contains(event.target))){
//         showP();
//     }
// })




let imgArray = [1,2];

function imageSlideShow(){
    let clearImgInterval;

    clearImgInterval = setInterval(() => {
        



    },5000)

    

}



menuButton.addEventListener("click", showMenuContainer);

console.log("working")

function showMenuContainer() {

    if(menuOverlay.style.display != 'flex'){

        console.log("Working from inside");
        menuOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        // menuContainer.style.display = 'flex';
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