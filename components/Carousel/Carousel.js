/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg",

]

function Carousel(item){
  // create-class-content-structure
  const carouselCont = document.createElement('div');
  const leftButton = document.createElement('img');
  const imgMnt = document.createElement('img');
  const imgComp = document.createElement('img');
  const imgTrees = document.createElement('img');
  const imgTurntable = document.createElement('img');
  const rightButton = document.createElement('div');

  carouselCont.classList('carousel')
  leftButton.classList('left-button')
  rightButton.classList('right-button')
  rightButton.textContent = ">" 
  leftButton.textContent = "<"
  imgMnt.src = item
  imgComp.src = item
  imgTrees.src = item
  imgTurntable.src = item

  carouselCont.append(leftButton, imgMnt, imgComp, imgTrees, imgTurntable, rightButton)

  return carouselCont;
}

let carouselEntry = document.querySelector('.carousel-container');
images.forEach(item =>{
  let newImg = Carousel(item)
  carouselEntry.appendChild(newImg)
})

