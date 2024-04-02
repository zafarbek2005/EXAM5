const wrapper = document.querySelector('.api-cards');
const loading = document.querySelector('.loading');

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (!Array.isArray(data.products)) {
      data.products = [data.products]; 
    }
  
    data.products.slice(1, 9).forEach(product => { 
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <div class="api-cards2">  
      <div data-id="${product.id}" class="product-card">
        <img name='product-image' src="${product.thumbnail}" alt="">
        <img id="heart" src="./img/heart small.svg" alt="">
        <img name = "product-wish" id="koz" src="./img/koz.svg" alt="">
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
  })
  .finally(() => {
    loading.style.display = 'none';
  });


  const setWish = async (id) =>{
    let  getData = await fetch(`${API_URL}/${id}`)
    getData
    .json()
    .then((res) => {
        let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
        let index = wishes.findIndex(el => el.id === +id);
        if (index < 0) {
         localStorage.setItem('wishes',JSON.stringify([...wishes,res]))
        } 
    })
    .catch((err) => {
        console.log(err);
    })
}


wrapper.addEventListener('click', (e) => {
  const productCard = e.target.closest('.product-card');
  if (!productCard) return; 

  const productId = productCard.dataset.id;
  window.location.href = `pages/single.html?id=${productId}`; 
});
















































// RESPONSIVE NAVBAR
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

const backtop = document.querySelector(".backtop");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    backtop.style.bottom = "40px";
  } else {
    backtop.style.bottom = "-40px";
  }
});
