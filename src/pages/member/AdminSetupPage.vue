<template>
  <div align="center">
    <h2>최초관리자 등록</h2>
    <admin-setup-form @register-admin="registerAdmin"></admin-setup-form>
  </div>
</template>
<script>
import client from '/@modules/client.js'
import {router} from '/@router/router.js'
import AdminSetupForm from './AdminSetupForm.vue'

export default {
    name: 'AdminSetupPage',
    components: {AdminSetupForm},
    setup(){
        const registerAdmin = (payload) =>{
            const {userId, userName, userPw} = payload
            client.post('/users/setup', {userId, userName, userPw})
                .then(res=>{
                    alert('등록이 완료되었습니다.')
                    router.push({
                        name: 'Home'
                    })
                })
                .catch(err=>{
                    alert(err.response.data)
                })
        }

        return {
            registerAdmin
        }
    }
}
</script>