<template>
    <div id="login-container">
        <div id="login">
            <div>Given login info: </div>
            <div>Email: afachheng@gmail.com</div>
            <div>Pwd: 123</div>
            <center>     
                <img style="border-radius: 50%; width: 250px; height: 250px; margin-top: 30px;" src="../assets/profile.jpg"><br>
            </center>
            <b style="margin: 30%; ">Email</b><br>
            <center>
                <input style="width: 40%; height: 30px; margin-bottom: 20px;" type="text" id="user_email"><br>      
            </center>
            <b style="margin: 30%; ">Password</b><br>
            <center>
                <input style="width: 40%; height: 30px; margin-bottom: 20px;" type="text" id="pwd" ><br>
                <input style="width: 40%; height: 35px; margin-bottom: 20px; background-color: rgb(248, 108, 155); color: aliceblue;" onclick="btn()" type="button" value="Log in" id="btn"><br>      
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name:'LoginPage'
}
</script>
<style>
#login-container{

    width: 500px;
    margin-right: 70px;
}
</style>