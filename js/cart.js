// Cart related logic
const prodId = url.searchParams.get("id")
cart = document.getElementById('cart');
// finds product from allproducts declared in products.js 
var cartDetails = allproducts.find(obj => obj.id == prodId);
var summ = 0;
let prodcount;

if(!!cartDetails) {
  prodcount = 1;
} else {
  prodcount = 0;
}

// shows empty cart if url does not contain product ID else shows product details
if(!url.searchParams.get("id") && prodcount == 0){
  cart.innerHTML = `
  <h2 class="display-6 text-center">Cart Empty! <br/> <span class="text-secondary">Please add a product to the cart.</span></h2>
  `
} else {
cart.innerHTML = `
<div class="col-md-8">
<div class="card mb-3">
  <div class="card-header">Items in Cart</div>
  <div class="row g-0 align-items-center">
    <div class="col-md-4">
      <img src="${cartDetails.pic}" class="img-fluid rounded-start cart-img"   alt="Prod img" />
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title">${cartDetails.title}</h5>
        <p class="card-text">Rs. ${cartDetails.price}</p>
   
        <button class="btn btn-outline-secondary" type="button" onclick="deleteProd()">
        <i class="fa fa-trash"></i>
      </button>
        <!-- <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p> -->
      </div>
    </div>
    <div class="col-md-3">
      <div class="input-group mb-3 px-2">
        <button class="btn btn-outline-secondary" type="button" onclick="subtract()">
          -
        </button>

        <input
          type="number"
          class="form-control"
          name="count"
          id = "count"
          value="${prodcount}"
          placeholder=""
          aria-label="Example text with two button addons"
          
        />
        <button class="btn btn-outline-secondary" type="button" onclick="add()">
          +
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-md-4">
<div class="card" >
  <div class="card-header">Summary</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
      <div>Cost</div>
      <div id = "cost" ></div>
      </div>
    </li>
    <li class="list-group-item">      <div class="d-flex justify-content-between">
    <div>Shipping</div>
    <div>Rs. 50</div>
    </div></li>
    <li class="list-group-item">      <div class="d-flex justify-content-between">
    <div>Total</div>
    <div id = "total" >Rs. ${(cartDetails.price * prodcount) + 50}</div>
    </div></li>
    <button class="btn btn-outline-secondary w-50 my-2 align-self-center" type="button" onclick="checkout()">
          Checkout
        </button>
  </ul>
</div>
</div>
`
}

document.getElementById("cost").innerHTML = `${cartDetails.price}`
document.getElementById("total").innerHTML = `${(cartDetails.price * prodcount) + 50}`

//delete product and shows empty cart
function deleteProd()  {
  if(confirm("Delete Product?")) {
    cartDetails = null;
    prodcount = 0;
    window.location.href = "cart.html";
    cart.innerHTML = `
    <h2 class="display-6 text-center">Cart Empty! <br/> <span class="text-secondary">Please add a product to the cart.</span></h2>
    `
  }
}

function checkout()  {
    cart.innerHTML = `
    <h2 class="display-6 text-center">You are now checked out<br/> <span class="text-secondary">Thanks for shopping with us!</span></h2>
    `
}

//increase product quantity and calculate price
function add()  {
  
  prodcount += 1;

  console.log(prodcount);
  document.getElementById("count").value = prodcount;
  document.getElementById("cost").innerHTML = `${cartDetails.price * prodcount} `
  document.getElementById("total").innerHTML = `${(cartDetails.price * prodcount) + 50}`
}
//decrease product quantity and calculate price
function subtract()  {
  if (prodcount - 1 <= 0) {
    prodcount = 0;
   
  } else {

    prodcount -= 1;
    document.getElementById("count").value = prodcount;
    document.getElementById("cost").innerHTML = `${cartDetails.price  * prodcount}`
    document.getElementById("total").innerHTML = `${(cartDetails.price * prodcount) + 50}`
  }

}
