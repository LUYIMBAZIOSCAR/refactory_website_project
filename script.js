// image slider

// getting the element with class hero from the DOM
const hero=document.querySelector('.hero')

// defining the local paths to the images
const images=[

    "images/image5.jpg",
    "images/image6.jpeg",
    "images/image4.jpeg",
    "images/image8.jpeg",
    
]

let index=0

function changeBackground(){
    // updating the url of the image
    hero.style.backgroundImage=`url('${images[index]}')`

    //  Increment index, then use Remainder (%) to loop back to 0
    index=(index + 1) % images.length;
}
// change background every 4 seconds
setInterval(changeBackground,4000)
changeBackground()

/* hamburger menu */
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links')

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active')

})

