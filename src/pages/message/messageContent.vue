<template>
  <div>
    <currentNews></currentNews>
    <el-divider></el-divider>
    <collegeNews></collegeNews>
  </div>
</template>

<script>
import currentNews from "../../components/Message/news/currentNews.vue"
import collegeNews from "../../components/Message/college/collegeNews.vue"
export default {
    components:{currentNews,collegeNews}
}
</script>

<style>

</style>