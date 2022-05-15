<script >
import categoryApi from "@/libs/apis/category";
import productApi from "@/libs/apis/product";
import priceApi from "@/libs/apis/price";
export default {
  components: {},
  data() {
    return {
      categories: [],
      name: "",
      items:[],
      products: [],

    };
  },
  async mounted() {
    this.categories = await categoryApi.categorizeditems();
    this.products = await productApi.all();
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
    }
  });
  }
  
  },
  methods: {},
};
</script>

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <div class="container" v-for="cate in categories" :key="cate.name">
        <div class="sidenav" >
        <button class="dropdown-btn">{{ cate.name }} 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container" >
          <a href="#" v-for="item in cate.items" :key="item.name">{{item.name}}</a>
        </div>

      </div>

      <div class="main"  v-for="pro in products" :key="pro.name" >
        <div>{{pro.name}}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.container{
  display: flex;
}
/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 200px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:rgb(182, 182, 182);
  overflow-x: hidden;
  padding-top: 20px;
}

/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #000000;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

/* On mouse-over */
.sidenav a:hover, .dropdown-btn:hover {
  color: #f1f1f1;
}

/* Main content */
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: rgb(129, 129, 129);
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  background-color: #e3e3e3;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>