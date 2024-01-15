const beep = new Audio("door.mp3");



document.addEventListener('keydown', (e)=>{
    beep.play();
    //update keyname in code 
    const keyName = document.querySelector("div > h1 > span");
    keyName.innerText = e.key;


   // update keyNo

   const keyNo = document.querySelector("#key-no");
   keyNo.innerText = e.keyCode;
})