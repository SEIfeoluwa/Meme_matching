// Global Variables
// let image1 = document.querySelector('.image1')
// let image2 = document.querySelector('.image2')
// let image3 = document.querySelector('.image3')
// let image4 = document.querySelector('.image4')
// let image5 = document.querySelector('.image5')
// let image6 = document.querySelector('.image6')
// let image7 = document.querySelector('.image7')
// let image8 = document.querySelector('.image8')
// let image9 = document.querySelector('.image9')
// let image10 = document.querySelector('.image10')
// let image11 = document.querySelector('.image11')
// let image12 = document.querySelector('.image12')
// let image13 = document.querySelector('.image13')
// let image14 = document.querySelector('.image14')
// let image15 = document.querySelector('.image15')
// let image16 = document.querySelector('.image16')
const boxes = document.querySelectorAll('.box');


//Function for Game Logic
boxes.forEach(function(box){
    box.addEventListener('click', (e) =>{
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'green';
    })
})
    

// example
// flipCard() => {

// }
