window.addEventListener("load",starting);
function starting() {
    let body = document.querySelector("body");
    let p = document.createElement("div");
    p.setAttribute("class", "opening");
    body.appendChild(p);
    p.innerHTML =`<img src="./img/game.gif"/>`
    p.style.display = 'block';
    setTimeout(() =>p.style.display = 'none',3000);
}
    let correctCards = [];
    let moves = 15;
    let timeRemaining = 40;
    let firstClick = false;
    
    const clownsArr = () => [
        {
            name: 'clown1',
            img: '../img/clown.png'
        },
        {
            name: 'clown2',
            img: './img/clown2.png'
        },
        {
            name: 'clown3',
            img: './img/clown3.png'
        },
        {
            name: 'clown4',
            img: './img/clown4.jpg'
        },
        {
            name: 'clown5',
            img: '../img/clown5.jpg'
        },
        {
            name: 'clown6',
            img: './img/clown6.jpg'
        },
        {
            name: 'clown7',
            img: './img/clown7.jpg'
        },
        {
            name: 'clown8',
            img: './img/clown8.jpg'
        },
        {
            name: 'clown1',
            img: '../img/clown.png'
        },
        {
            name: 'clown2',
            img: './img/clown2.png'
        },
        {
            name: 'clown3',
            img: './img/clown3.png'
        },
        {
            name: 'clown4',
            img: './img/clown4.jpg'
        },
        {
            name: 'clown5',
            img: '../img/clown5.jpg'
        },
        {
            name: 'clown6',
            img: './img/clown6.jpg'
        },
        {
            name: 'clown7',
            img: './img/clown7.jpg'
        },
        {
            name: 'clown8',
            img: './img/clown8.jpg'
        }
    ];
    
    const container = document.createElement('div');
    container.className = 'container';
    const claps = document.createElement('span');
    claps.setAttribute('class', 'claps');
    document.body.appendChild(claps);
    const div = document.createElement('div');
    div.setAttribute('class', 'grid');
    document.body.appendChild(div);

    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    const spanMoves = document.createElement('span');
    spanMoves.textContent = `Moves: ${moves}`;
    const spanTime = document.createElement('span');
    spanTime.textContent = `Time: ${timeRemaining}`;
    
    footer.append(spanMoves,spanTime);
    document.body.appendChild(footer);
    

    //randomize the cards
    const shuffleCards = () => {
        const allDataCard = clownsArr();
        allDataCard.sort(() =>0.5 - Math.random());
        return allDataCard;
    };

    //timer
    let timeAction;
    const startCountDown = () => {
        timeAction = setInterval(() => {
            timeRemaining--;
            spanTime.textContent = `Time: ${timeRemaining}`;
            if(timeRemaining === 0 || moves === 0){
                stopCountdown();
                claps.innerHTML =`<img src="./img/saw.gif"/>`
                claps.style.display = 'block';
                setTimeout(() =>claps.style.display = 'none',2500);
                restart();
            } 
        }, 1000);
    }

    
    const generatingCards = () => {
        const allDataCard = shuffleCards();
        //console.log(allDataCard);
        let i=0;
        for (let elem of allDataCard) {
            // console.log(elem)
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            let cardFace = document.createElement('img');
            cardFace.setAttribute('class', 'cardFace');
            cardFace.src = elem.img;
            card.setAttribute('name', elem.name);
            let cardQuestionMark = document.createElement('img');
            cardQuestionMark.setAttribute('class', 'cardQuestionMark');
            cardQuestionMark.setAttribute('src', './img/question.jpg');
            card.append(cardFace, cardQuestionMark);
            div.append(card);
            card.addEventListener('click', flipACard);
            function flipACard(e) {
                // console.log(e)
                if(!firstClick){
                    firstClick = true;
                    startCountDown();
                }
                card.classList.toggle('cardFlipped');
                checkCard(e);
            };
    };
};
    const checkCard = (e) =>{
        const allDataCard = clownsArr();
        let clickedCard = e.target;
        clickedCard.classList.add('flipped');
        console.log(clickedCard);
        let cardFlipped = document.querySelectorAll('.flipped');
        // console.log(cardFlipped);
        if(cardFlipped.length === 2){
            if(cardFlipped[0].getAttribute('name') === cardFlipped[1].getAttribute('name')){
                //console.log('It's a match')
                
                for( let elem of cardFlipped){
                    elem.style.pointerEvents = 'none';//when you click it wont flipp back.
                    correctCards.push(elem.getAttribute('name'));
                    //console.log(correctCards);
                    elem.classList.remove('flipped');
                    if(correctCards.length === allDataCard.length){
                        console.log('winnnnn')
                        
                        claps.innerHTML =`<img src="./img/dance.gif"/>`
                        claps.style.display = 'block';
                        setTimeout(() =>claps.style.display = 'none',10000);
                        stopCountdown();
                        setTimeout(() =>restart()
                        ,4000)
                    }
                    else if(correctCards.length < allDataCard.length){
                        claps.innerHTML =`<img src="./img/claps.gif"/>`
                        claps.style.display = 'block';
                        setTimeout(() =>claps.style.display = 'none',2000);
                    }
                }
            }else{
                // console.log('wrong')
                for( let elem of cardFlipped){
                    setTimeout(() => elem.classList.remove('cardFlipped'),1000);
                    elem.classList.remove('flipped');
                }
            }
            moves--;
            //console.log(moves);
            setTimeout(() => spanMoves.textContent = `Moves: ${moves}`,1000);
        }
        
    }
    
    function stopCountdown(){
        clearInterval(timeAction);
    }

    const restart = () => {
        firstClick = false;
        correctCards = [];
        timeRemaining = 40;
        spanTime.textContent = `Time: ${timeRemaining}`;
        moves = 15;
        spanMoves.textContent = `Moves: ${moves}`
        let allDataCard = shuffleCards();
        let card = document.querySelectorAll('.card');
        let cardFace = document.querySelectorAll('.cardFace');
        for(let i=0; i < allDataCard.length; i++){
            card[i].style.pointerEvents = "all";
            card[i].classList.remove('cardFlipped');
            card[i].setAttribute("name", allDataCard[i].name);
            cardFace[i].src = allDataCard[i].img;
        }
    }
    generatingCards();

