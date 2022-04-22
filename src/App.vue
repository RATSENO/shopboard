<template>
  <router-view name="header"></router-view>
  <router-view name="menu"></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
import {provide} from 'vue'
import {useAuth} from '/@compositions/useAuth.js'

export default {
  name: 'App',
  setup(){
    const{
      myinfo,
      isAuthorized, 
      isAdmin, 
      isMember, 
      signin
    }=useAuth()

    provide("myinfo", myinfo)
    provide("isAuthorized", isAuthorized)
    provide("isAdmin", isAdmin)
    provide("isMember", isMember)
    provide("signin", signin)
  }
}
</script>