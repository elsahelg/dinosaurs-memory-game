document.addEventListener('DOMContentLoaded', () => {

    //images for cards
    const cardArray = [
        {
            name: 'acanthopholis',
            img: 'assets/images/acanthopholis.jpg'
        },
        {
            name: 'acanthopholis',
            img: 'assets/images/acanthopholis.jpg'
        },
        {
            name: 'parasaurolophus',
            img: 'assets/images/parasaurolophus.jpg'
        },
        {
            name: 'parasaurolophus',
            img: 'assets/images/parasaurolophus.jpg'
        },
        {
            name: 'pterodactyl',
            img: 'assets/images/pterodactyl.jpg'
        },
        {
            name: 'pterodactyl',
            img: 'assets/images/pterodactyl.jpg'
        },
        {
            name: 'stegosaurus',
            img: 'assets/images/stegosaurus.jpg'
        },
        {
            name: 'stegosaurus',
            img: 'assets/images/stegosaurus.jpg'
        },
        {
            name: 'triceratops',
            img: 'assets/images/triceratops.jpg'
        },
        {
            name: 'triceratops',
            img: 'assets/images/triceratops.jpg'
        },
        {
            name: 'tyrannosaurusrex',
            img: 'assets/images/tyrannosaurusrex.jpg'
        },
        {
            name: 'tyrannosaurusrex',
            img: 'assets/images/tyrannosaurusrex.jpg'
        }
    ]

    const grid = document.querySelector('.grid')

    //generate memory board
    function generateBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/card.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //flip cards   
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 600)
        }
    }
  
    //check chosen cards for match     function cardsMatch()


    generateBoard() 

})