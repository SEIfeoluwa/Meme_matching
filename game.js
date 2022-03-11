// Global Variables

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
const reset = document.querySelector('.reset');

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
        const backImg = document.createElement("img");
        let sec = document.querySelector("section")
        card.classList = "card";
        face.classList = "face"; 
        back.classList = "back";
        face.src = items.imgSrc;
        backImg.src = 'https://s7.gifyu.com/images/troll.png'
        // connect to html
        sec.appendChild(card);
        card.appendChild(face);
        card.appendChild(back); 
        back.appendChild(backImg);

        back.addEventListener('click', (e)=> {
            back.classList.toggle('toggleBack');    
        })
    });
};

cardLayout();
// Function to test
const test = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
}

// Function to reset the game
reset.addEventListener('click', () => {
    const back = document.querySelector(".back")
    back.classList.toggle('toggleBack');
    return randomize();
})


