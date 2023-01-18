
// insert header and footer based on element with id content
mainContent = document.getElementById('content');
mainContent.insertAdjacentHTML(
    "afterend",
    `        <footer>
    <div class="container-fluid bg-dark text-white p-5">
      <div class="row text-center">
        <div class="col-md-3">
          <h6  onclick="location.href='products.html?category=women/all'">Women</h6>
          <ul>
            <li  onclick="location.href='products.html?category=women/dress'">Dresses</li>
            <li  onclick="location.href='products.html?category=women/pants'">Pants</li>
            <li  onclick="location.href='products.html?category=women/skirts'">Skirts</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6  onclick="location.href='products.html?category=men/all'">Men</h6>
          <ul>
            <li  onclick="location.href='products.html?category=men/shirts'">Shirts</li>
            <li  onclick="location.href='products.html?category=men/pants'">Pants</li>
            <li  onclick="location.href='products.html?category=men/hoodies'">Hoodies</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6  onclick="location.href='products.html?category=kids/all'">Kids</h6>
          <ul>
          <li  onclick="location.href='products.html?category=kids/girls'">Girls</li>
          <li  onclick="location.href='products.html?category=kids/boys'">Boys</li>
        </ul>
        </div>
        <div class="col-md-3">
          <h6 >Links</h6>
          <ul>
            <li  onclick="location.href='home.html'">Home</li>
            <li  onclick="location.href='login.html'">Login</li>
            <li  onclick="location.href='contact.html'">Contact</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="text-center">Copyright @shopattire 2022</div>
    </div>
  </footer>`
  );
  mainContent.insertAdjacentHTML(
    "beforebegin",
    `                   <header>
    <!-- Top Nav start-->
    <div class="container-fluid bg-dark">
      <div class="row align-items-center">
        <div class="col-md-2 d-flex">
          <h3 class="my-3 " id="heading"> SHOP ATTIRE</h3>
        </div>
        <div class="col-md-6">
          <form class="form-inline mb-2">
            <div class="input-group">
              <input
              id="myInput"
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-secondary">
                Search
              </button>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </form>
        </div>
        <div
          class="col-md-3 d-flex justify-content-center justify-content-md-end"
        >
          <div style="height: 40px">
            <button type="button" class="btn btn-primary cart" onclick="location.href='login.html'">Login</button>
          </div>
        </div>
        <div
          class="col-md-1 d-flex justify-content-center justify-content-md-end"
        >
          <a class="me-2 btn btn-outline-secondary my-2" href="cart.html" >
            <i class="cart fa fa-shopping-cart" style="font-size: 26px"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Category Nav start -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light "
    >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a
              class="nav-link"   
              href="home.html"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home
            </a>
          </li>
          <li class="nav-item" style="cursor:pointer">
            <a
              class="nav-link "
              onclick="location.href='products.html?category=all'"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Products
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Women
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item cursor"   onclick="location.href='products.html?category=women/all'">All</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=women/dress'">Dresses</a>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=women/pants'">Pants</a>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=women/skirts'">Skirts</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Men
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=men/all'">All</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=men/shirts'">Shirts</a>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=men/pants'">Pants</a>
              <a class="dropdown-item cursor" onclick="location.href='products.html?category=men/hoodies'"">Hoodies</a>
            </div>
          </li>
          <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Kids
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item cursor" onclick="location.href='products.html?category=kids/all'">All</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item cursor" onclick="location.href='products.html?category=kids/girls'">Girls</a>
            <a class="dropdown-item cursor" onclick="location.href='products.html?category=kids/boys'">Boys</a>
          </div>
        </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="contact.html"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>`
  );