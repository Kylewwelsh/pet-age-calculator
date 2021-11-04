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
      bunnyAge = '-'
    }

    document.querySelector('.bunny-calculation-text').innerHTML = 'As of today, ' + bunnyName + ' is ' + bunnyAge + ' in human years!'; 
  }
);