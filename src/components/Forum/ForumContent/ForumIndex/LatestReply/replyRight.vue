<template>
  <div id="right">
    <div>
      <div id="author">
        <router-link :to="{
          name:'User',
          params:{
            userid:3
          }
        }">
          <i class="el-icon-user"></i> author
        </router-link>
      </div>
      <div id="date"><i class="el-icon-time"></i> date</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#right {
  display: flex;
  align-items: center;
  font-size: 10px;
}
a {
  text-decoration: none;
}
</style>