const body = document.body;
const firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'container');
const secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'grid');
firstDiv.appendChild(secondDiv);
body.appendChild(firstDiv);


const numberLength=15;
function gameBoard(){
    for (let i = 1; i <= 15; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', `number${i}`);
        button.innerHTML =i;
        secondDiv.append(button);
    }  
    let emptyButton = document.createElement('button');
    emptyButton.setAttribute('class', 'emptyButton');
    secondDiv.append(emptyButton);
}

const footer = document.createElement('div');
footer.setAttribute('class', 'footer');
let playButton = document.createElement('button');
playButton.textContent = 'Play';
const spanMoves = document.createElement('span');
spanMoves.textContent = 'Moves: 50';
const spanTime = document.createElement('span');
spanTime.textContent = 'Time:100';
footer.append(playButton,spanMoves,spanTime);
firstDiv.appendChild(footer);