<template>
  <div align="right">
    <!-- 
    <tr>
      <td>
        <router-link :to="{ name: 'Signin' }">로그인</router-link>
      </td>
    </tr>
     -->
    <div v-if="isAuthorized">
      <span>{{ myinfo.userName }}님 환영합니다</span>
      <button @click="logout">로그아웃</button>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>
<script>
import {inject} from 'vue'
import {router} from '/@router/router.js'

export default {
    name:"MainHeader",
    setup(){
        const isAuthorized = inject("isAuthorized")
        const myinfo = inject("myinfo")
        const signout = inject("signout")

        const  logout = () =>{
          signout()
          alert('로그아웃 되었습니다.')
          router.push({
            name:'Home' 
          })
        }
        return {
            isAuthorized,
            myinfo,
            logout
        }
    }
}
</script>