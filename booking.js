let INFORMATION=JSON.parse(localStorage.getItem("ID"));
let array=[];
array.push(INFORMATION);
console.log(array);
console.log(array.length);
const obj=INFORMATION;
const id=obj.id;
console.log(id);
let baseUrl=`https://api-wvaq.onrender.com/hotels`;



document.querySelector("#btnradio2").addEventListener("click", function () {
    if (array.length == 0) {
      document.querySelector("#content").innerHTML = `<h2>No Past Bookings <h2/>`;
    } else {
      var pastBookings = array.filter((res) => {
        return res.bookedTill < Date.now();
      });
      if (pastBookings.length == 0) {
        document.querySelector(
          "#content"
        ).innerHTML = `<h2>No Past Bookings <h2/>`;
      } 
      else {
        updateDisplay(pastBookings, "past");
        var r = document.querySelectorAll(".cancel");
        r.forEach(function (element) {
          element.style.display = "none";
        });
      }
    }
});

async function Data(url){
  try{
    let res=await fetch (url);
    let data=await res.json();
  
    updateDisplay(array);
  }
  catch(error){
    console.log(error);
  }
}


var main = document.querySelector("#content");
function updateDisplay(arr) {
  main.innerHTML = "";
  arr.forEach((element,index) => {
    //console.log(element);
    var card = document.createElement("div");
    card.setAttribute("class", "cr");

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("card-image");

    var img = document.createElement("img");
    img.setAttribute("src", element.url);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    imageDiv.appendChild(img);
    var name = document.createElement("h3");
    name.innerText = element.name;
    var bt_div = document.createElement("div");
    bt_div.setAttribute("class", "bt-div");
    var details = document.createElement("button");

    details.setAttribute("class", "b");
    details.setAttribute("id", "openModalBtn");
    details.setAttribute("data-bs-toggle", "offcanvas");
    details.setAttribute("data-bs-target", "#offcanvasRight");
    details.innerText = "Details";
    var cancel = document.createElement("button");
    cancel.innerText = "Cancel";
    cancel.setAttribute("class", "cancel");
    bt_div.append(details, cancel);
    var price = document.createElement("h4");
    let priceString = element.cost + "";
    priceString = priceString.split("");
    console.log(priceString);
    priceString.splice(2, 0, ",");
    priceString = priceString.join("");
    console.log(priceString);
    price.innerText = "Price :- Rs  " + priceString;
    cancel.addEventListener("click", function () {
      console.log("hio");
      arr.splice(index, 1);
      updateDisplay(arr);
    });

    details.addEventListener("click", function () {
      console.log(element);

      window.location.href="product_details.html"
    });

    var bodyHr = document.createElement("hr");
    bodyHr.classList.add("body-hr");

    cardBody.append(name, price);
    card.append(imageDiv, cardBody, bodyHr, bt_div);
    main.append(card);

  });

}

var getStarted=document.querySelector(".get-started-button").addEventListener("click",function(){
    window.location.href="index.html";
})

Data(`${baseUrl}`);