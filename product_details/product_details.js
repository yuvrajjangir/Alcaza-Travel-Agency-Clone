let INFORMATION=JSON.parse(localStorage.getItem("ID"));
let arr=[];
arr.push(INFORMATION);
console.log(arr);
cool_fun(arr);
function cool_fun(arr) {
  document.getElementById("title").textContent = "";
  document.getElementById("images").textContent = "";
  document.getElementById("discription").textContent = "";
  arr.map((ele) => {
    let title = document.createElement("div");
    title.id = "title";
    let subtitle = document.createElement("div");
    subtitle.id = "subtitle";
    
    let p1 = document.createElement("p");
    p1.innerText = ele.title;
    p1.id = "headline";

    let i1 = document.createElement("i");
    i1.className = "fa-solid fa-star";
    i1.id='starPrem'
    let p2 = document.createElement("p");
    
    p2.textContent = "4.92 . 597 reviews " + ele.name;
    subtitle.append(i1,p2);
    title.append(p1,subtitle);
    document.getElementById("title").append(title);
    
    // ==============================title=================================
    
    let d3 = document.createElement("div");
    d3.className = "first";
    let img = document.createElement("img");
    img.setAttribute("src", ele.url);
    img.setAttribute("class","imm");
    d3.append(img);
    
    let d4 = document.createElement("div");
    d4.className = "second";
    let img1 = document.createElement("img");
    img1.setAttribute("src", ele.url1);
    img1.setAttribute("class","im");
    let img2 = document.createElement("img");
    img2.setAttribute("src", ele.url2);
    img2.setAttribute("class","im");
    let img3 = document.createElement("img");
    img3.setAttribute("src", ele.url3);
    img3.setAttribute("class","im");
    let img4 = document.createElement("img");
    img4.setAttribute("src", ele.url4);
    img4.setAttribute("class","im");
    d4.append(img1, img2, img3, img4);
    
    document.getElementById("images").append(d3);
    let info=document.createElement("div");
    let h3=document.createElement("h3")
    h3.textContent="! INFORMATION";
    let h1=document.createElement("pre");
    h1.textContent=`Destination             ${ele.title}`;
    let h2=document.createElement("pre");
    h2.textContent=`Deaparture              ${ele.name}`;
    let h4=document.createElement("pre");
    h4.textContent=`Deaparture Time         approx 7:30AM`;
    let h5=document.createElement("pre");
    h5.textContent=`Deaparture Time         approx 9:30PM`;
    
    
    
    info.append(h3,h1,h2,h4,h5);
    let h33=document.createElement("h3");
    h33.textContent="GALLERY"
    
    let p6 = document.createElement("p");
    p6.textContent = ele.description1.slice(0,1000);
    let abc=document.createElement("div");
    let left=document.createElement("div")
    left.append(p6,info,h33,d4)
    let img11=document.createElement("img");
    img11.src="https://www.shutterstock.com/shutterstock/photos/2006512574/display_1500/stock-vector-sale-banner-template-design-with-geometric-background-big-sale-special-offer-up-to-off-super-2006512574.jpg";
    img11.setAttribute("class","img11");
    let img12=document.createElement("img");
    img12.setAttribute("class","img11");
    img12.src="https://www.shutterstock.com/shutterstock/photos/771507109/display_1500/stock-vector--off-special-offer-discount-big-sale-promotion-vector-poster-price-discount-offer-design-771507109.jpg";
    let right=document.createElement("div");
    right.append(img11,img12)
    abc.append(left,right);
    abc.setAttribute("class","abc")
    document.getElementById("discription").append(abc);
    // ========================proceed to payment ===========================
    let pay_btn = document.createElement('button');
    pay_btn.textContent = 'BOOK NOW';
    pay_btn.classList = 'pg'
    pay_btn.addEventListener('click',()=>{
      navTobooking(ele);
    })
    document.getElementById("payment").append(pay_btn);
  });
}
