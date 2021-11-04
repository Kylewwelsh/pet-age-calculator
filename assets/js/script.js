// Dog Calculator
const dogCalculation = document.querySelector('.dog-submit');

dogCalculation.addEventListener (
  'click', () => {
    let dogName = document.querySelector('.dog-name').value;
    let currentDogAge = document.querySelector('.current-dog-age').value;
    let dogAge = currentDogAge * 7;

    document.querySelector('.dog-calculation-text').innerHTML = 'As of today, ' + dogName + ' is ' + dogAge + ' years old in human years!';  
  }
)