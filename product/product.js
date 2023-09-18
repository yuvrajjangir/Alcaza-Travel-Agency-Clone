// let totalPages;
// async function gettingPageNumber() {
//   // https://api-wvaq.onrender.com/
//   try {
//     let result=await fetch(`https://api-wvaq.onrender.com/hotels`)
//     // let result = await fetch(`https://database-sr9b.onrender.com/hotels`);
//     let res = await result.json();
//     totalPages = res.length / 6;
//     console.log(totalPages);
//     creatingButton(totalPages);
//   } catch (error) {
//     console.log(error);
//   }
// }
// gettingPageNumber();

// let page = 1;
// let query='';
// let fetchingData = async (page) => {
//   try {
//     console.log(`https://api-wvaq.onrender.com/hotels?_limit=6&_page=${page}&${query}`)
//     let result = await fetch(
//       `https://api-wvaq.onrender.com/hotels?_limit=6&_page=${page}&${query}`
//     );
//     let res = await result.json();
//     displayData(res);
//     gettingPageNumber()
//   } catch (error) {
//     console.log(error);
//   }
// };
// // fetchingData(page);

// function creatingButton(totalPages) {
//   document.getElementById("pages").innerHTML = "";
//   // let buttons=document.createElement('div')
//   for (let i = 1; i <= totalPages; i++) {
//     let btn = document.createElement("button");
//     btn.textContent = i;
//     btn.classList = "pg";
//     console.log("btn" + i);
//     btn.addEventListener("click", () => {
//       fetchingData(btn.textContent);
//       document.querySelectorAll(".pg").forEach((ele)=>{
//         ele.classList = "pg"
//       })
//       btn.classList = "pg active";
//     });
//     document.getElementById("page-list").append(btn);
//   }
// }

// let container = document.getElementById("content");

// function displayData(data) {
//   container.innerHTML = "";
//   data.forEach((elem, i) => {
//     let div = document.createElement("div");
//     div.setAttribute("class","con");
// let aa=document.createElement("a");

//     var image = document.createElement("img");
//     image.setAttribute("src", elem.url);
//     image.id = "image";
//     image.addEventListener("click", function () {
//       addfun(elem);
//     });
//     aa.href="../product_details/product_details.html"
//     aa.append(image);


//     var innerdiv = document.createElement("div");
//     innerdiv.id = "innerdiv";

// var pr=document.createElement("div");
// pr.setAttribute("id","pr");
//     var name = document.createElement("h4");
//     name.textContent = elem.name;

//     var price = document.createElement("h4");
//     price.textContent = "₹" + Math.round(elem.cost/3) + "/Night";
//     pr.append(name,price);
//   let hr=document.createElement("hr");
//   hr.setAttribute("id","hr")

//     // innerdiv.append(pr,hr);

//     var truncatedText = document.createElement("p");
//     truncatedText.textContent = elem.description;
//     truncatedText.class="truncated-text";
// const fullText=document.createElement("p");
// fullText.setAttribute("class","full-text");
// fullText.textContent=elem.description;
// // const fullText = document.querySelector('.full-text');
// const readMoreLink=document.createElement("button");
// readMoreLink.setAttribute("class","read-more");
// readMoreLink.textContent="Read -more";
// const wordsToShowInitially = 4;
// let isExpanded = false;

// // Function to truncate text to a certain number of words
// function truncateText(text, numWords) {
//   const words = text.split(' ');
//   if (words.length > numWords) {
//     return words.slice(0, numWords).join(' ') + '...';
//   }
//   return text;
// }


// // Initial truncation
// const originalContent = fullText.textContent;
// fullText.textContent = truncateText(originalContent, wordsToShowInitially);

// // Click event handler for the "Read more" link
// readMoreLink.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (isExpanded) {
//     // If content is expanded, truncate it again
//     fullText.textContent = truncateText(originalContent, wordsToShowInitially);
//     readMoreLink.textContent = 'Read more';
//   } else {
//     // If content is not expanded, show the full content
//     fullText.textContent = originalContent;
//     readMoreLink.textContent = 'Read less';
//   }
//   isExpanded = !isExpanded;
// });
//  div.append(aa, pr,hr,fullText,readMoreLink);
//     container.append(div);
//   });
// }
// function addfun(elem) {
//   localStorage.setItem("ID", JSON.stringify(elem));
//   window.content.href = "product_details.html";
// }
// const searchfun = () => {
//   // event.preventDefault()
//   let searchData1 = document.getElementById("searchInput").value;
//   // console.log(searchData)
//   // localStorage.setItem("value",JSON.stringify(searchData))
//   searchdata(searchData1);
// };
// // document.getElementById("searchButton").addEventListener("click", searchfun);
// let searchdata = async (searchedData) => {
//   try {
//     let link = `https://api-wvaq.onrender.com/hotels?Country_like=${searchedData}`;
//     let data = await fetch(link);
//     data = await data.json();
//     totalPages = data.length / 6;
//     console.log(data)
//     displayData(data);
//     creatingButton(totalPages);
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log("x");
// document.getElementById("btn1").addEventListener("click", () => {
//   gettingPageNumber();
//   fetchingData(page);
// });
// document.getElementById("btn2").addEventListener("click", () => {
//   // gettingPageNumber();
//   console.log("here")
//   query = "_sort=ratings&_order=asc"
//   fetchingData(page)
// });
// document.getElementById("btn3").addEventListener("click", () => {
//   // gettingPageNumber();
//   query = "_sort=ratings&_order=desc"
//   fetchingData(page)
// });
// document.getElementById("btn4").addEventListener("click", () => {
//   query = "_sort=name&_order=asc"
//   fetchingData(page)
// });
// document.getElementById("btn5").addEventListener("click", () => {
//   query = "_sort=cost&_order=desc"
//   fetchingData(page)
// });
// document.getElementById("btn6").addEventListener("click", () => {
//   query = "_sort=cost&_order=asc"
//   fetchingData(page)
// });



// //pagination
