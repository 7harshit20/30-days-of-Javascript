document.addEventListener('keydown',playSound);

function playSound(e){
    console.log(e.keyCode);
    const key=document.querySelector(`.btn-${e.keyCode}`);
    if(key!==null){
        key.id='playing';
        const audio=document.querySelector(`.aud-${e.keyCode}`);
        audio.currentTime=0;
        audio.play();
    }
    if(key!==null)setTimeout(()=>key.id='',200);
}