<template>
  <div class="container">
    <div class="frame">
      <div class="Admin">Admin Dashboard</div>
      <div class="Admin">Top1.com</div>
    </div>
    <div class="AdminHeader">Admin</div>
    <div class="input-container">
      <label>Email</label>
      <input  type="text" /><br>
      <label>Password</label>
      <input  type="password" />
      
    </div>
    <button type="button" class="btn">Login</button>

    
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
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
.AdminHeader{
  margin-top: 100px;
  width: auto; /* 119px */
  height: auto; /* 48px */
  white-space: pre;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-style: normal;
  font-family: "Istok Web", serif;
  color: #021076;
  font-size: 40px;
  letter-spacing: 0px;
  line-height: 1.2;
}
.input-container{
	position:relative;
	margin-bottom:25px;
}
.input-container label{
	position:absolute;
	font-size:16px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-style: normal;
  font-family: "Istok Web", serif;
  letter-spacing: 0px;
  line-height: 1.2;
	color:#021076;	
  margin-top: 30px;
	transition: all 0.5s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:3px solid #021076;  
  background:transparent;
  width:30%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#021076;
  margin-top: 60px;
}
.input-container input:focus{ 
 border:none;	
 outline:none;
 border-bottom:3px solid #060c39;	
}
.btn{
	color:#fff;
	background-color:#021076;
	outline: none;
  border: 0;
  color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
}
.btn:focus{
  color:#f1f1f1;
  background-color:#060c39;
}
</style>
