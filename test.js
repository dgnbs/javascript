const btns = document.querySelectorAll('.btn');

function handleClick(){
    alert("Hello my friends")
}

btns.forEach(btn =>{
    btn.addEventListener('click', handleClick);
});