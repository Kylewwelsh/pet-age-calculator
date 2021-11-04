// Const
const mainSection = document.querySelector('.main-section')
const begin = document.querySelector('.begin-button')
const petSelection = document.querySelector('.pet-selection')
const dogButton = document.querySelector('.dog-button')
const catButton = document.querySelector('.cat-button')
const bunnyButton = document.querySelector('.bunny-button')
const hamsterButton = document.querySelector('.hamster-button')
const parrotButton = document.querySelector('.parrot-button')

// Reloads
const refreshDog = document.querySelector('.dog-choose-new')
const refreshCat = document.querySelector('.cat-choose-new')
const refreshBunny = document.querySelector('.bunny-choose-new')
const refreshHamster = document.querySelector('.hamster-choose-new')
const refreshParrot = document.querySelector('.parrot-choose-new')

// Options
const dogOption = document.querySelector('.dog-option')
const catOption = document.querySelector('.cat-option')
const bunnyOption = document.querySelector('.bunny-option')
const hamsterOption = document.querySelector('.hamster-option')
const parrotOption = document.querySelector('.parrot-option')

// Begin
begin.addEventListener (
  'click', () => {
    mainSection.classList.add('hide')
    petSelection.classList.remove('hide')
  }
)

// Dog Selected
dogButton.addEventListener (
  'click', () => {
    petSelection.classList.add('hide')
    dogOption.classList.remove('hide')
  }
)

// Cat Selected
catButton.addEventListener (
  'click', () => {
    petSelection.classList.add('hide')
    catOption.classList.remove('hide')
  }
)

// Bunny Selected
bunnyButton.addEventListener (
  'click', () => {
    petSelection.classList.add('hide')
    bunnyOption.classList.remove('hide')
  }
)

// Hamster Selected
hamsterButton.addEventListener (
  'click', () => {
    petSelection.classList.add('hide')
    hamsterOption.classList.remove('hide')
  }
)

// Parrot Selection
parrotButton.addEventListener (
  'click', () => {
    petSelection.classList.add('hide')
    parrotOption.classList.remove('hide')
  }
)

// Dog Calculator
const dogCalculation = document.querySelector('.dog-submit');

dogCalculation.addEventListener (
  'click', () => {
    let dogName = document.querySelector('.dog-name').value;
    let currentDogAge = document.querySelector('.current-dog-age').value;
    let dogAge = currentDogAge * 7;

    document.querySelector('.dog-calculation-text').innerHTML = 'As of today, ' + dogName + ' is ' + dogAge + ' in human years!';  
  }
);

// Cat Calculator
const catCalculation = document.querySelector('.cat-submit');

catCalculation.addEventListener (
  'click', () => {
    let catName = document.querySelector('.cat-name').value;
    let currentCatAge = document.querySelector('.current-cat-age').value;
    let catAge;

    if (currentCatAge > 1) {
      catAge = (15 + 9 + (currentCatAge - 2) * 4);
    } else {
      catAge = 15;
    }

    document.querySelector('.cat-calculation-text').innerHTML = 'As of today, ' + catName + ' is ' + catAge + ' in human years!'; 
  }
);

// bunny Calculator - unable to find concrete mathematical formula, manually inputting for 1-10 year old bunnies off a vet chart
const bunnyCalculation = document.querySelector('.bunny-submit');

bunnyCalculation.addEventListener (
  'click', () => {
    let bunnyName = document.querySelector('.bunny-name').value;
    let currentBunnyAge = document.querySelector('.current-bunny-age').value;
    let bunnyAge;

    if (currentBunnyAge == 1) {
      bunnyAge = 21
    }

    else if (currentBunnyAge == 2) {
      bunnyAge = 27
    }

    else if (currentBunnyAge == 3) {
      bunnyAge = 33
    }

    else if (currentBunnyAge == 4) {
      bunnyAge = 39
    }

    else if (currentBunnyAge == 5) {
      bunnyAge = 45
    }

    else if (currentBunnyAge == 6) {
      bunnyAge = 51
    }

    else if (currentBunnyAge == 7) {
      bunnyAge = 57
    }

    else if (currentBunnyAge == 8) {
      bunnyAge = 63
    }

    else if (currentBunnyAge == 9) {
      bunnyAge = 69
    }

    else if (currentBunnyAge == 10) {
      bunnyAge = 75
    }

    else {
      bunnyAge = 'passed average lifespan for animal'
    }

    document.querySelector('.bunny-calculation-text').innerHTML = 'As of today, ' + bunnyName + ' is ' + bunnyAge + ' in human years!'; 
  }
);

// Hamster Calculation, same as bunny, no concrete formula, only 3 year lifespan can be found
const hamsterCalculation = document.querySelector('.hamster-submit');

hamsterCalculation.addEventListener (
  'click', () => {
    let hamsterName = document.querySelector('.hamster-name').value;
    let currentHamsterAge = document.querySelector('.current-hamster-age').value;
    let hamsterAge;

    if (currentHamsterAge == 1) {
      hamsterAge = 58
    }

    else if (currentHamsterAge == 2) {
      hamsterAge = 70
    }

    else if (currentHamsterAge == 3) {
      hamsterAge = 100
    }

    else {
      hamsterAge = 'passed average lifespan for animal'
    }

    document.querySelector('.hamster-calculation-text').innerHTML = 'As of today, ' + hamsterName + ' is ' + hamsterAge + ' in human years!'; 
  }
);

// Parrot Calculator
const parrotCalculation = document.querySelector('.parrot-submit');

parrotCalculation.addEventListener (
  'click', () => {
    let parrotName = document.querySelector('.parrot-name').value;
    let currentParrotAge = document.querySelector('.current-parrot-age').value;
    let parrotAge;

    if (currentParrotAge <= 9) {
      parrotAge = currentParrotAge * 9
    } else {
      parrotAge = 'passed average lifespan for animal'
    }

    document.querySelector('.parrot-calculation-text').innerHTML = 'As of today, ' + parrotName + ' is ' + parrotAge + ' in human years!';  
  }
);

// Refresh
refreshDog.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

refreshCat.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

refreshBunny.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

refreshHamster.addEventListener (
  'click', () => {
    window.location.reload()
  }
)

refreshParrot.addEventListener (
  'click', () => {
    window.location.reload()
  }
)