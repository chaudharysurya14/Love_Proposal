const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click',() => {
alert("I Love you too My Jaan😘😘😘");    
})

function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomX + 'px';
}

target.addEventListener('mouseenter',function(){
    moveTarget();
})