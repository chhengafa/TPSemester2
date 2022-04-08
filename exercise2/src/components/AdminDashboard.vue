<template>
  <div class="container">
    <div class="frame">
      <div class="Admin">Admin Dashboard</div>
      <div class="Admin">Top1.com</div>
    </div>
  <div class="container-">
    <div class="container-1">
      <div class="category">Category</div>
      <div class="category">Products</div>
      <div class="category">Items</div>
      
    </div>
    <div class="container-2"></div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding: 0%;
  margin: 0%;
}
.frame {
  width: 100%;
  height: 103px;
  background-color: #021076;
  overflow: visible;
  display: flex;
  justify-content: space-between;

}
.Admin {
  width: auto; /* 360px */
  height: auto; /* 48px */
  white-space: pre;
  text-shadow: 8px 4px 3px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-style: normal;
  font-family: "JetBrains Mono", monospace;
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 0px;
  line-height: 1.2;
  margin-right:20px ;
  margin-left: 20px;
  margin-top:20px ;
}
.container-{
  display: flex;
}
.container-1{
  width: 20%;
  height: 530px;
  background-color: #ffffff;
  overflow: visible;
  display: table-row;
  border-left: 5px solid #021076;
  border-right: 5px solid #021076;
  border-bottom: 5px solid #021076;
}
.container-2{
  width: 80%;
  height: 530px;
  background-color: #ffffff;
  overflow: visible;
  border-right: 5px solid #021076;
  border-bottom: 5px solid #021076;
}
.category{
  width: 100%;
  height: 40px;
  overflow: visible;
  border-bottom: 3px solid #021076;
  color: #021076;
  padding-top: 13px;
}
</style>
