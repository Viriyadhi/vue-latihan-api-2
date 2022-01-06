<template>
  <div id="app">
    <div id="nav">
      <router-link to="/profession">Profession </router-link>
      <router-link to="/hobby">Hobby</router-link>
      <router-link to="/person">Person</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  text-decoration: none;
}
#app {
  font-size: 1.15rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav {
  display: flex;
  padding: 2em;
  justify-content: end;
}

#nav a {
  font-weight: bolder;
  color: #7e8a97;
  padding-right: 2em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
