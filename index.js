const foxImage = document.querySelector(".fox-image");

const getFoxes = () => {
  fetch("https://randomfox.ca/floof/?ref=apilist.fun")
  .then((response) => response.json())
  .then((data) => showFox(data))
}

function showFox(fox) {
  console.log(fox)
  foxImage.src = fox.image
  foxImage.alt = fox.link
  console.log(foxImage)
}

const foxButton = document.querySelector(".fox-button");
foxButton.addEventListener('click', getFoxes);
