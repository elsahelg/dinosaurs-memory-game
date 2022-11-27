document.addEventListener('DOMContentLoaded', () => {

    //images for cards
    const cardArray = [{
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

    cardArray.sort (() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('.score')
    var cardsClicked = []
    var cardsClickedId = []
    var cardsMatch = []

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
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsClicked.push(cardArray[cardId].name)
        cardsClickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsClicked.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    //check chosen cards for match     
    function checkMatch() {
        var cards = document.querySelectorAll('img')
        const firstPickId = cardsClickedId[0]
        const secondPickId = cardsClickedId[1]
        if (cardsClicked[0] === cardsClicked[1]) {
            alert('The twins match!')
            cards[firstPickId].setAttribute('src', 'assets/images/placeholder.png')
            cards[secondPickId].setAttribute('src', 'assets/images/placeholder.png')
            cardsMatch.push(cardsClicked)
        } else {
            alert('Twins do not match, try again!')
            cards[firstPickId].setAttribute('src', 'assets/images/card.jpeg')
            cards[secondPickId].setAttribute('src', 'assets/images/card.jpeg')
        }
        cardsClicked = []
        cardsClickedId = []
        scoreDisplay.textContent = cardsMatch.length
        if (cardsMatch.length === 6) {
            scoreDisplay.textContent = 'Congratulations! All twins found!'
        }
    }


    generateBoard()

})