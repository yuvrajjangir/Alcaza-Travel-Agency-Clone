let INFORMATION=JSON.parse(localStorage.getItem("ID"));
const priceTag = document.querySelector("#payment-price");
let arr=[];
arr.push(INFORMATION);
console.log(arr);

let {cost} = INFORMATION;
let totalPrice = Math.floor(cost);
let priceString = totalPrice + "";
priceString = priceString.split("");

priceString.splice(2, 0, ",");
priceString = priceString.join("");

priceTag.textContent = "Rs " + priceString;
console.log(totalPrice);

var options = {
    "key": "rzp_test_CzE4s2TVByUU0s", // Enter the Key ID generated from the Dashboard
    "amount": totalPrice * 100,
    "currency": "INR",
    "description": "Acme Corp",
    "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    "prefill":
    {
      "email": "gaurav.kumar@example.com",
      "contact": +919900000000,
    },
    "handler": function (response) {

     window.location.href = "booking.html";
    }

    }

    
  var rzp1 = new Razorpay(options);
  document.getElementById('rzp-button1').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}


