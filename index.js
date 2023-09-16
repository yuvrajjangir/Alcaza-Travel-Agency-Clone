let productSearch = JSON.parse(localStorage.getItem("productSearch"));

let search = document.querySelector("#search_item");
let searchButton = document.querySelector("#submit_button");

let url = "https://api-wvaq.onrender.com/hotels";
searchButton.addEventListener("click", () => {
  let value = search.value;

  let newLink = `${url}?name_like=${value}`;
  console.log(newLink);
  getData(newLink);
});

async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    localStorage.setItem("productSearch", JSON.stringify(data));
    // window.location=
  } catch (error) {
    console.log(error);
  }
}
