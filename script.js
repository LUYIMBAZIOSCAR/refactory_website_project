// image slider

// getting the element with class hero from the DOM
const hero=document.querySelector('.hero')

// defining the local paths to the images
const images=[
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpg",
    "images/image4.jpeg",
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

