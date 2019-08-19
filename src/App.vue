<template>
  <div id="app">
    <div id="app-header">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item href="/">
            <img
              src="./assets/giv.png"
              alt=""
            >
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item
            tag="router-link"
            to="/"
          >
            Home
          </b-navbar-item>
          <b-navbar-item
            tag="router-link"
            to="/preview"
          >
            Preview
          </b-navbar-item>
          <a
            class="navbar-item"
            href="https://github.com/idnesdotlink/giv-frontend-test"
          >
            <b-icon
              pack="fab"
              icon="github"
            ></b-icon>
          </a>
        </template>
      </b-navbar>
    </div>
    <div id="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navigation: 'home'
    }
  }
}
</script>

<style lang="scss">
html,
body {
  overflow: hidden !important;
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
#app-logo {
  margin: 10px;
}
#app-header {
  width: 100vw;
}
#app-content {
  flex: 1;
  overflow-y: auto;
}
#nav {
  flex: 1;
  display: flex;
  flex-direction: row;
  a {
    flex: 1;
    justify-self: stretch;
    text-align: center;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    line-height: 50px;
  }
}
</style>
