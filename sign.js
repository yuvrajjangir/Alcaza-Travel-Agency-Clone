// let logo1 = document.getElementById("maxty");
// logo1.addEventListener("click", function (event) {
//   // Check if the click target is the logo element with id "maxty"
//   if (event.target === logo1) {
//     window.location.href = "./index.html";
//   }
// });

// let nameinp = document.getElementById("name");
// let emailinp = document.getElementById("email");
// let passwordinp = document.getElementById("password");
// let cpasswordinp = document.getElementById("cpassword");
// let phoneinp = document.getElementById("phone");

// let okbtn = document.getElementById("done");

// let userls = JSON.parse(localStorage.getItem("userdata")) || [];

// let popup = document.getElementById("popup");

// okbtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Password pattern

//   if (
//     nameinp.value == "" ||
//     emailinp.value == "" ||
//     passwordinp.value == "" ||
//     cpasswordinp.value == "" ||
//     phoneinp.value == ""
//   ) {
//     displayPopup("Please fill in all the fields.");
//   } else if (!passwordPattern.test(passwordinp.value)) {
//     displayPopup("Use at least 8 characters, one uppercase letter, one lowercase letter, and one number in your password.");
//   } else {
//     if (passwordinp.value != cpasswordinp.value) {
//       displayPopup("Passwords do not match.");
//       passwordinp.value = "";
//       cpasswordinp.value = "";
//     } else {
//       let flag = false;
//       for (let i = 0; i < userls.length; i++) {
//         if (userls[i].email.toLowerCase() == emailinp.value.toLowerCase()) {
//           flag = true;
//           break;
//         }
//       }
//       if (flag === true) {
//         displayPopup("You are an existing user. Please log in.");
//         nameinp.value = "";
//         emailinp.value = "";
//         passwordinp.value = "";
//         cpasswordinp.value = "";
//         phoneinp.value = "";
//       } else {
//         let obj = {
//           name: nameinp.value,
//           email: emailinp.value,
//           password: passwordinp.value,
//           cpassword: cpasswordinp.value,
//           phone: phoneinp.value,
//           present: false,
//         };
//         userls.push(obj);
//         localStorage.setItem("userdata", JSON.stringify(userls));
//         nameinp.value = "";
//         emailinp.value = "";
//         passwordinp.value = "";
//         cpasswordinp.value = "";
//         phoneinp.value = "";
//         displayPopup("Welcome new user to Alcazar. Enjoy our website!");
//         window.location.href = "./login.html";
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




