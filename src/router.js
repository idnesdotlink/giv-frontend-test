import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/preview',
      name: 'preview',
      component: () =>
        import(/* webpackChunkName: "preview" */ './views/Preview.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () =>
        import(/* webpackChunkName: "todo" */ './views/Todo.vue')
    }
  ]
})
