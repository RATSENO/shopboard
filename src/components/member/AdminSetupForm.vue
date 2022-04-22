<template>
  <form @submit.prevent="fireRegisterAdmin">
    <table>
      <tr>
        <td>관리자아이디</td>
        <td><input type="text" v-model="userId" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="userPw" /></td>
      </tr>
      <tr>
        <td>관리자명</td>
        <td><input type="text" v-model="userName" /></td>
      </tr>
    </table>
    <div>
      <button type="submit">등록</button>
    </div>
  </form>
</template>
<script>
import {ref} from 'vue'

export default {
    name: 'AdminSetupPage',
    emits: ['register-admin'],
    setup(props, context){
        const userId = ref('')
        const userName = ref('')
        const userPw = ref('')

        const fireRegisterAdmin=(payload)=>{
            context.emit('register-admin', {
                userId: userId.value,
                userName: userName.value,
                userPw: userPw.value
            })
        }

        return {
            userId,
            userName,
            userPw,
            fireRegisterAdmin
        }
    }
}
</script>