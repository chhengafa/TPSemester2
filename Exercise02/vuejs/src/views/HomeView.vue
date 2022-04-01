<template>

        <div class="container">
        <form autocomplete="off" onsubmit="onFormSubmit()">
            <div class="add">
                <div class="header-add">Menu</div>

                <h3 for="name">Name</h3>
              
                <h3 for="price">Price</h3>
               
                <h3 for="category">Category</h3>
               
            </div>
        </form>
        <div class="home" id="add_items">
            <div class="book-info">Top.com</div>
        </div>
        </div>

</template>
<script>

export default {
    name: 'HomePage',

}
//error


</script>



<style>
body {
            background-color: rgb(255, 255, 255);
        }
        
        .container {
            display: flex;
            justify-content: center;
        }
        
        .add {
            height: 93vh;
            width: 300px;
            background-color: rgb(250, 250, 250);
            position: fixed;
            padding: 15px;
            border-radius: 10px;
        }
        
        .add>div {
            text-align: center;
            color: #ffffff;
            background-color: rgb(243, 191, 230);
            margin-bottom: 20px;
            font-size: large;
            padding-top: 10px;
            height: 30px;
            border-radius: 5px;
        }
        
        .add input[type=text] {
            width: 100%;
            border: 2px solid #aaa;
            border-radius: 4px;
            margin: 8px 0;
            outline: none;
            padding: 8px;
            box-sizing: border-box;
            transition: .3s;
        }
        
        .add input[type=text]:focus {
            border-color: dodgerBlue;
            box-shadow: 0 0 8px 0 dodgerBlue;
        }
        
        .add .edit_book {
            visibility: hidden;
        }
        
        .add_book,
        .edit_book {
            background-color: rgb(243, 191, 230);
            color: white;
            border-style: outset;
            border-color: white;
            height: 25px;
            width: 50px;
            font: bold15px arial, sans-serif;
            text-shadow: none;
            height: 30px;
            margin-top: 10px;
            border-radius: 5px;
        }
        
        .edit_book {
            background-color: rgb(61, 133, 198);
        }
        
        .home {
            height: auto;
            width: 800px;
            top: 0px;
            display: flex;
            flex-wrap: wrap;
            margin-left: 350px;
            border-radius: 10px;
            background-color: #ffffff;
        }
        
        .home .book-info {
            background-color: rgb(243, 191, 230);
            text-align: center;
            height: 35px;
            font-size: large;
            color: #ffffff;
            position: sticky;
            width: 780px;
            margin: 10px 0 10px 10px;
            border-radius: 5px;
        }
        
        .home .items {
            text-align: center;
            width: 23%;
            margin: 1%;
            margin-left: 1%;
            background-color: rgb(243, 191, 230);
            border-radius: 15px;
        }
        
        .items>img {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        
        .items .name,
        .price,
        .category {
            text-align: start;
            margin-left: 10px;
            padding-top: 10px;
        }
        
        .button {
            margin-top: 10px;
            margin-bottom: 5px;
        }
        
        .button .editBtn,
        .deletBtn {
            border-radius: 5px;
            background-color: rgb(103, 126, 146);
            color: white;
            border-style: outset;
            border-color: #0066A2;
            text-shadow: none;
            height: 30px;
        }
        
        .deletBtn {
            margin-left: 4px;
            background-color: rgba(239, 54, 54);
        }
        
        .edit_book {
            margin-left: -55px;
            text-align: center;
            width: 60px;
        }
        
        .items>img {
            height: 90px;
        }

</style>