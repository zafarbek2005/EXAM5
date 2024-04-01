const wrapper = document.querySelector('.api-cards');

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (!Array.isArray(data.products)) {
      data.products = [data.products]; 
    }
  
    data.products.slice(0, 8).forEach(product => { 
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <div class="api-cards2">  
      <div class="product-card">
        <img src="${product.thumbnail}" alt="">
        <img id="heart" src="./img/heart small.svg" alt="">
        <img id="koz" src="./img/koz.svg" alt="">
      </div>
      <div class="star">
        <h3 id="h33">${product.brand}</h3>
        <div class="rey">
          <p id="r2">${product.price}</p>
          <img src="./img/Frame 566.svg" alt="">
        </div>
    
      </div>
    </div>
      `;
      wrapper.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Xatolik yuz berdi:', error);
  });












































// RESPONSIV  NAVBAR
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);

var myElement = document.getElementById("myDiv");

window.addEventListener("scroll", function () {
  if (window.scrollY > 45.6) {
    myElement.classList.add("fixed");
  } else {
    myElement.classList.remove("fixed");
  }
});
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}



