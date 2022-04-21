<template>
    <div align="right">
        <tr>
            <td>
                <router-link :to="{name: 'Home'}">로그인</router-link>
            </td>
        </tr>
    </div>
</template>
<script>
export default {
    name:"MainHeader"
}
</script>