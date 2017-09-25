import Vue from 'vue'
import VueMdl from 'vue-mdl'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3020/graphql',
  }),
  connectToDevTools: true,
})



Vue.use(VueMdl)
Vue.use(VueApollo)

const app = new Vue(Object.assign({ router }, App))

app.$mount('#root')
