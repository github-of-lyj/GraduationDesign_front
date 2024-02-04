<template>
  <div id="goBack">
    <el-page-header @back="goBack"> </el-page-header>
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(this.pos)
        }
    },
    props:['pos']
};
</script>

<style>
#goBack{
    display: flex;
    align-items: center;
}
</style>