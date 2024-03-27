const products = [
    {
        prodName: "Headphone",
        prodDesc: "Headphone Some quick example text to build on the card title and make up the bulk of the card's content.",
        prodImage: "headphone.jpg"
    },
    {
        prodName: "LCD",
        prodDesc: "LCD Some quick example text to build on the card title and make up the bulk of the card's content.",
        prodImage: "lcd.jpg"
    },
    {
        prodName: "Mouse",
        prodDesc: "Mouse Some quick example text to build on the card title and make up the bulk of the card's content.",
        prodImage: "mouse.jpg"
    },
    {
        prodName: "Keyboard",
        prodDesc: "Keyboard Some quick example text to build on the card title and make up the bulk of the card's content.",
        prodImage: "keyboard.jpg"
    },
];




console.log(products[0].prodName)



let cn = document.getElementById('cn');




for(let i = 0; i < products.length; i++){
    cn.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${products[i].prodImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[i].prodName}</h5>
        <p class="card-text">${products[i].prodDesc}</p>
        <a href="#" class="btn btn-primary">View</a>
      </div>
    </div>
    `
}





