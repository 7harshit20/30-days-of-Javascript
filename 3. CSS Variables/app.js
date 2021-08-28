document.querySelectorAll('.inputs').forEach(input=>{
    input.addEventListener('change',updateChanges);
    input.addEventListener('mousemove',updateChanges);
});

function updateChanges(e){
    let suffix=e.target.dataset.suffix;
    console.log(e.target.value+suffix);
    document.querySelector(':root').style.setProperty(`--${e.target.id}`,e.target.value+suffix);
}