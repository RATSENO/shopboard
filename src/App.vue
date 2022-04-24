<template>
  <router-view name="header"></router-view>
  <router-view name="menu"></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
import {provide, onMounted} from 'vue'
import {useAuth} from '/@compositions/useAuth.js'
import Cookies from 'js-cookie'


export default {
  name: 'App',
  setup(){
    const{
      myinfo,
      isAuthorized, 
      isAdmin, 
      isMember, 
      signin,
      signinByToken
    }=useAuth()

    provide("myinfo", myinfo)
    provide("isAuthorized", isAuthorized)
    provide("isAdmin", isAdmin)
    provide("isMember", isMember)
    provide("signin", signin)

    onMounted(()=>{
      const savedToken =Cookies.get('accessToken')
      if(savedToken){
        signinByToken(savedToken)
          .then(res=>{
            console.log('Logined By Token')
          })
      }
    })
  }
}
</script>