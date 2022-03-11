<template>
    <div id="Register-container">
        <div>
            <div id="sign">
                <h2>Sign Up</h2>
                <p>Please fill in this from to create an account</p>
            </div>
            
            <b>Email</b><br>

                <input style="width: 40%; height: 30px; margin-bottom: 20px;" placeholder="Email" type="text" ><br>      

            <b >Username</b><br>

                <input style="width: 40%; height: 30px; margin-bottom: 20px;" placeholder="Username" type="text" ><br>      

            <b >First Name</b><br>

                <input style="width: 40%; height: 30px; margin-bottom: 20px;" placeholder="First Name" type="text" ><br>      

            <b >Last Name</b><br>

                <input style="width: 40%; height: 30px; margin-bottom: 20px;" placeholder="Last Name" type="text"><br>      

            <b >Password</b><br>

                <input style="width: 40%; height: 30px; margin-bottom: 20px;" placeholder="created your Password" type="text" ><br>
                <input style="width: 40%; height: 35px; margin-bottom: 20px; background-color: rgb(93, 155, 93); color: aliceblue;" onclick="btn()" type="button" value="Sign up" id="btn"><br>      

        </div>
    </div>
</template>
<script>
export default {
    name:'RegisterPage'
}
</script>
<style>
b{
    color: rgb(93, 155, 93);
    margin: 10px;
    
}
h2{
    color: rgb(93, 155, 93);
    margin: 0;
    padding: 0;
}
#Register-container{
    
    border: 2px solid rgb(93, 155, 93) ;
    width: 1000px;
    margin-right: 150px;
}
#sign{
    background-color: rgb(136, 194, 136) ;;
    padding-top: 20px;
    width:100%;
    border-bottom:1px solid black;
}
</style>