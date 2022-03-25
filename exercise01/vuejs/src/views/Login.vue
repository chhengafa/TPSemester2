<template>
    <div id="Register-container">
        <div id="login">
            <center>     
                <img style="border-radius: 50%; width: 250px; height: 250px; margin-top: 30px;" src="../assets/profile.jpg"><br>
            </center>
            <b style="margin: 30%; ">Email</b><br>
            <center>
                <input style="width: 40%; height: 30px; margin-bottom: 20px;" type="text" name="email" id="user_email"><br>      
            </center>
            <b style="margin: 30%; " @keyup.enter="created()">Password</b><br>
            <center>
                <input style="width: 40%; height: 30px; margin-bottom: 20px;" type="text" name="password" id="pwd" ><br>
                <input style="width: 40%; height: 35px; margin-bottom: 20px; background-color: rgb(93, 155, 93); color: aliceblue;" @click="created()" type="button" value="Log in" id="btn"><br>      
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name:'RegisterPage',
    data() {
    return {
      email: "",
      password: "",
      firstname:"",
      lastname:"",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/login",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "true") {
        location.href = "./home";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(240,0,0,.8)";
      }
    },
  },
};

</script>
<style>
#Register-container{

    width: 1000px;
    margin-right: 150px;
}
</style>