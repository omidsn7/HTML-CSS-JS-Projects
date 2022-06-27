const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl =>{
    counterEl.innerText = "0";
    incrementobject();
    function incrementobject(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)
        if(currentNum < dataCeil){
           counterEl.innerText = currentNum
            setTimeout(incrementobject , 70)
        }
        else{
            counterEl.innerText = dataCeil;
        }
    }
});