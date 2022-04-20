<template>
    <div align="center">
        <h1>welcome</h1>
        <p>{{getTime()}}</p>
    </div>
</template>
<script>
export default {
    name: 'Home',
    setup(){
        const getTime=()=>{
            return new Date().toString()
        }

        return {
            getTime
        }
    }
}
</script>