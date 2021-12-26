const info = document.querySelector('.info');
const logo = document.querySelector('.logo');
logo.addEventListener("mouseover",information);
logo.addEventListener("mouseleave",infoHidden);
function information() {
    info.style.display = 'block';
}
function infoHidden() {
    info.style.display = 'none';
}
