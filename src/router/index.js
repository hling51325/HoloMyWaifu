import Vue from 'vue'
import Router from 'vue-router'

// routes
import entry from './entry'
import user from './user'
import chatRoom from './chatRoom'

Vue.use(Router)

let routes = [].concat(
  entry,
  user,
  chatRoom
)

let router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let noSignedAuth = entry.map(item => item.path)
  if (noSignedAuth.indexOf(to.path) !== -1) {
    next()
  } else {
    console.log('need Sign in')
    next('/')
  }
})

export default router
