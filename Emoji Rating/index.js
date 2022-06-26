const StarsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red" , "orange" , "lightblue" 
,"lightgreen" , "green"];

UpdateRating(0);

StarsEl.forEach((StarsEl, index) => {
    StarsEl.addEventListener("click" , ()=>{
        UpdateRating(index);
    });
});

function UpdateRating(index){
    StarsEl.forEach((StarsEl , idx)=>{
        if(idx < index + 1){
            StarsEl.classList.add("active");
        }else{
            StarsEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl)=>{
    emojiEl.style.transform = 
    `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index]
    });
}