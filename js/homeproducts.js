
// featured products card logic

class HomeappCard extends HTMLElement {

    connectedCallback() {
        // get random element from allproducts  and display in home page
        let index = Math.floor(Math.random()*allproducts.length)    
        selectedCategory = allproducts[index];
        this.innerHTML+= `
  
        <div class="card text-center">
        <img
          src=${selectedCategory['pic']}
          class="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div class="card-body">
          <h5 class="card-title">${selectedCategory['title']}</h5>
          <h6 class="card-subtitle mb-2 text-muted">$ ${selectedCategory['price']}</h6>
          <p class="card-text">
          ${selectedCategory['description']}
          </p>
          <a  onclick="location.href='cart.html?id=${selectedCategory['id']}'" class="btn btn-primary cart"
            ><i class="fa fa-cart-plus"></i> Add to Cart</a
          >
        </div>
      </div>
  
        `
    }
  }
  window.customElements.define('home-app-card', HomeappCard)