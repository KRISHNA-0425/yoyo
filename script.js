// const click = document.querySelector('.click');
// const giftBox = document.querySelector('.gift-box')
// const shadow = document.querySelector('.shadow')
// const giftContainer = document.querySelector('.gift-container')
// const heart = document.querySelector('.heart')

// click.addEventListener('click' , () =>{
//     if(click.className === "click"){
//         click.classList.add('active');
//         giftBox.classList.add('active');
//         shadow.classList.add('active');
//         giftContainer.classList.add('active');
//         heart.classList.add('active');
//         heart.classList.remove('active2');

//     }
//     else{
//         click.classList.remove('active');
//         giftBox.classList.remove('active');
//         shadow.classList.remove('active');
//         giftContainer.classList.remove('active');
//         heart.classList.remove('active');
//         heart.classList.add('active2');
//     }
// });


const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const heart = document.querySelector('.heart');

click.addEventListener('click', () => {
    if (click.classList.contains('active')) {
        // Already active → now closing
        click.classList.remove('active');
        giftBox.classList.remove('active');
        shadow.classList.remove('active');
        giftContainer.classList.remove('active');
        heart.classList.remove('active');
        heart.classList.add('active2');
        heart.innerText = ""; // clear heart text on close
    } else {
        // Opening animation
        click.classList.add('active');
        giftBox.classList.add('active');
        shadow.classList.add('active');
        giftContainer.classList.add('active');
        heart.classList.add('active');
        heart.classList.remove('active2');

        // Keep asking for name until "shaguniya" is entered
        let name;
        do {
            name = prompt("What do I call you?");
            if (!name || name.trim().toLowerCase() !== "shaguniya") {
                alert("Sorry, this gift is only for __________! Please try again.");
            }
        } while (!name || name.trim().toLowerCase() !== "shaguniya");

        // If we get here, we know the name is "shaguniya"
        heart.innerText = "I LOVE YOU SHAGUNIYAA 😘❤️";
    }
});
