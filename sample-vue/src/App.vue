<template>
  <div id="app">
    
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img alt="Vue logo" src="./assets/logo.png">
         <h1>Welcome</h1>
          <p>Authentication App~</p>
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/Login">Login</router-link> |
            <router-link to="/Register">Register</router-link>
          </nav>
          
      </div>
      <router-view/>
    </div>
  </div>
   
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
