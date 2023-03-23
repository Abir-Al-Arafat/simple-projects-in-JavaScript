document.getElementById('gray').onclick = switchGray;
document.getElementById('white').onclick = switchWhite;
document.getElementById('lavender').onclick = switchLavender;
document.getElementById('pink').onclick = switchPink;
document.querySelector('.btn').onclick = resetColor;

function switchGray(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchLavender(){
    document.getElementsByTagName('body')[0].style.backgroundColor = '#734F96';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchPink(){
    document.getElementsByTagName('body')[0].style.backgroundColor = '#ffa4b6';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function resetColor(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'antiquewhite';
    document.getElementsByTagName('body')[0].style.color = 'black';
}