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
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>
<script>
import {inject} from 'vue'

export default {
    name:"MainHeader",
    setup(){
        const isAuthorized = inject("isAuthorized")
        const myinfo = inject("myinfo")

        return {
            isAuthorized,
            myinfo
        }
    }
}
</script>