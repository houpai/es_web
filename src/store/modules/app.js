import { constantRoutes, asyncRoutes } from '@/router'

const state = {
  routes: [],
  addRoutes: [],
  title:''
}

const mutations = {
  SET_ROUTES: (state, routes) => {
  state.addRoutes = routes
  // state.routes = constantRoutes.concat(routes)
  state.routes = routes
}
}

const actions = {
  generateRoutes({ commit }, routes) {
    return new Promise(resolve => {
      let accessedRoutes = routes;
    commit('SET_ROUTES', accessedRoutes)
    resolve(accessedRoutes)
  })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
