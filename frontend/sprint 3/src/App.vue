<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md bg-light navbar-light">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/"
          >Sprint 3 Group 23</router-link
        >
        <div class="navbar-nav mr-auto">
          <router-link class="nav-item nav-link" to="/signup"
            >SIGN UP</router-link
          >
          <router-link class="nav-item nav-link" to="/clients"
            >CLIENTS</router-link
          >
          <router-link class="nav-item nav-link" to="/events"
            >EVENTS</router-link
          >
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
