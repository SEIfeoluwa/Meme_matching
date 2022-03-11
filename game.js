// Global Variables

// const boxes = document.querySelectorAll('.box');
// const images = document.querySelectorAll('#img')
const getData = [
    { imgSrc: "https://s7.gifyu.com/images/camera.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/crying.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/lebron.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/Lisa-Simpson.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/milly-rock.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/Ohhhhh.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/prof-Umar.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/tom.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/camera.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/crying.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/lebron.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/Lisa-Simpson.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/milly-rock.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/Ohhhhh.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/prof-Umar.jpg"},
    { imgSrc: "https://s7.gifyu.com/images/tom.jpg"},    
];
//Function for Game Logic

// function to randomize the cards
const randomize = () => {
    getData.sort(() => 0.5 - Math.random())
    return getData
};

// Card layout
const cardLayout = () => {
    const cardData = randomize();
    cardData.forEach((items) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face"; 
        back.classList = "back";
        face.src = items.imgSrc;
        // connect to html
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back); 
    });
};

cardLayout();
// Function to flip the card
function flipCards() {

}


// images.forEach(function(box){
//     box.addEventListener('click', (e) =>{
//         console.log(e.target);
//         e.target.src=memeArray[index]; 
//         // document.getElementById('img').src=memeArray[7]; 
//     })
// })
