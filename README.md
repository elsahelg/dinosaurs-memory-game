# Dinosaurs Memory Game
Dinosaurs Memory Game is a game to help children improve there memory along with having fun. The memory cards is also provided with information about the names of the different dinosaurs with the aim to educate children while playing the game. The memory board provides 12 cards containing dublettes of 6 different dinosaurs. The goal with the game is to find the dinosaur twins and pair them together.
<img src="assets/images/responsive-memory.png">

## Features

### Existing features 

- Header
  - Featured on top of the page to inidicate what type of game the user can expect.
  - Featured with a clear contrast to the background color and with a playful font in order to be inviting for children to play the game.
<br><img src="assets/images/header-dino.png">

- Short description of the memory game 
  - The description provides the user with information about the memory game and which cards to pair togheter. 
 <br><img src="assets/images/game-short.png"><br>

- Initial move
  - A button is provided for the user to shuffle the memory cards.
  - Following with a text that tells the user to pick cards.
  - A score board is presented for the user that indicate that 0/6 twins are yet matched together.
 <br><img src="assets/images/initial-move.png"><br>

- It's a match!
  - If the user picked matching cards, the user is informed by a text alert featured above the score board.
  - The chosen cards stays flipped to further indicate that the cards chosen are a match.
  - The score board is updated in coherence with the number of found twins, allowing the user to keep scores.
 <br><img src="assets/images/cards-match.png"><br>

- It's not a match!
  - If the user picked no matching cards, the user is informed by a text alert featured above the score board.
  - The chosen cards are flipped back to further inidcate that the chosen cards are not i match.
  - The score board stays the same, allowing the user to keep the right scores.
 <br><img src="assets/images/cards-no-match.png"><br>

- All twins found!
  - If the user matched all the dinosaurs twins, the user is informed by a text alert featured abouve the score board.
  - All the cards are visible for the user to allow the user to learn the names of the different dinosaurs.
  - The score board are is updated in coherence with the number of found twins 6/6.
 <br><img src="assets/images/all-match.png"><br>

- Restart the game
  - When the user is ready, the button to shuffle the cards is always ready to allow the user to restart the game.
 <br><img src="assets/images/button-shuffle.png"><br>

- Footer
  - The footer features the games rules to provide for the user while playing the memory game.
 <br><img src="assets/images/footer-rules.png"><br>

### Features left to implement 

- 

## Testing

- I tested playing the game in different browsers: Chrome, Safari and Firefox.
- If the game is played correctly, I confirm that the result is correct.
- I confirm that all the text are readable and easy to understand.
- I confirm that this memory game is responsive to all standards screens using the DevTools Device toolbar.
- I confirm that the fonts and colors are easy to read and accessible by running it through DevTools lighthouse:
 <br><img src="assets/images/lighthouse-memory.png"><br>

### Validator testing
- HTML official W3C validator
  - Passed through validation without error.
- CSS offical (Jigsaw) validator
  - Passed through validation without error.

### Bugs
- Running through DevTools lighthouse I desovered that the images did not contain an alt attribute. I fixed this bug by adding the code setAttribute to the images in the javascript file. 

## Deplyment 
The site was deployed to GitHub pages by following the steps listed below:

1. I navigated to 'My Repositories' in GitHub and selected the 'Bella_Art_Gallery' Repository
2. From the tab bar I opened 'Settings' and navigated to 'Pages' from the leftside menu
3. I selected 'Deploy from branch' from the 'Source' drop-down meny
4. Below I selected the 'Main' branch and saved by clicking the 'Save' button

The deployment was successful! [Visit the deployed site here](https://elsahelg.github.io/dinosaurs-memory-game/)