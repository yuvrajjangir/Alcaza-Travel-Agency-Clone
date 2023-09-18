// let logo1 = document.getElementById("maxty");
// logo1.addEventListener("click", function (event) {
//   // Check if the click target is the logo element with id "maxty"
//   if (event.target === logo1) {
//     window.location.href = "./index.html";
//   }
// });

// let emailinp = document.getElementById("email");
// let passwordinp = document.getElementById("password");

// let okbtn = document.getElementById("done");
// let userls = JSON.parse(localStorage.getItem("userdata")) || [];

// let popup = document.getElementById("popup");

// okbtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (emailinp.value == "" || passwordinp.value == "") {
//     displayPopup("Please fill in all the fields.");
//   } else {
//     let flag = false;
//     for (let i = 0; i < userls.length; i++) {
//       if (
//         userls[i].email.toLowerCase() == emailinp.value.toLowerCase() &&
//         userls[i].password.toLowerCase() == passwordinp.value.toLowerCase()
//       ) {
//         flag = true;
//         userls[i].present = true;
//         break;
//       }
//     }
//     if (flag) {
//       displayPopup("Login successful.");
//       emailinp.value = "";
//       passwordinp.value = "";
//       localStorage.setItem("userdata", JSON.stringify(userls));
//       setTimeout(function () {
//         window.location.href = "HOMEPAGE.HTML";
//       }, 2000);
//     } else {
//       let isNewUser = true;
//       for (let i = 0; i < userls.length; i++) {
//         if (
//           userls[i].email.toLowerCase() == emailinp.value.toLowerCase() &&
//           userls[i].password.toLowerCase() != passwordinp.value.toLowerCase()
//         ) {
//           isNewUser = false;
//           break;
//         }
//       }
//       if (!isNewUser) {
//         passwordinp.value = "";
//         displayPopup("Incorrect password. Please enter the correct password.");
//       } else {
//         emailinp.value = "";
//         passwordinp.value = "";
//         displayPopup(
//           "You are a new user. Please register by clicking on 'Register Here!'"
//         );
//       }
//     }
//   }
// });

// function displayPopup(message) {
//   let popup = document.getElementById("popup");
//   let popupText = document.getElementById("popup-text");

//   // Set the message
//   popupText.innerText = message;

//   // Display the popup at the top of the screen
//   popup.style.display = "block";
//   popup.style.top = "0";

//   // Hide the popup after 3 seconds
//   setTimeout(function () {
//     popup.style.display = "none";
//   }, 3000);
// }

// // Close the popup when the user clicks anywhere on the screen
// window.addEventListener("click", function (event) {
//   let popup = document.getElementById("popup");
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// });

