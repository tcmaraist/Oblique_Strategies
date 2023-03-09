function getStrategy() {
  fetch('./strategies.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let random =
        data.Strategies[Math.floor(Math.random() * data.Strategies.length)];
      quotes.innerText = `"${random}"`;
      console.log(random);
    });
}

getStrategy();

document.querySelector('button').addEventListener('click', getStrategy);
