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