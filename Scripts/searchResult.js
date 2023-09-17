let productSearch = JSON.parse(localStorage.getItem("productSearch"));
let card_container = document.querySelector("#card_container");
let main_container = document.querySelector("#main_container");

if (productSearch.length > 0) {
  updateDome(productSearch);
} else {
  card_container.innerHTML = "";
  let card = document.createElement("div");
  card.className = "cardEmpty";

  let img = document.createElement("img");
  img.src = "./images/noResult.gif";

  card.append(img);
  main_container.append(card);
}

function updateDome(arr) {
  card_container.innerHTML = "";
  arr.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let imgCard = document.createElement("div");
    imgCard.className = "image-card";

    let img = document.createElement("img");
    img.src = ele.url;

    let namePrice = document.createElement("div");
    namePrice.className = "name-price";

    let name = document.createElement("h4");
    name.innerText = ele.name;

    let price = document.createElement("h4");
    price.innerText = "₹" + ele.cost;

    let desc = document.createElement("p");
    desc.innerText = ele.description;

    imgCard.append(img);
    namePrice.append(name, price);
    card.append(imgCard, namePrice, desc);
    card_container.append(card);
  });
}
