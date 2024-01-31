<template>
  <div id="classHead">
    <div id="classTitle">
      <i :class="className"></i>
      {{classTitle}}
    </div>
    <div v-show="isPage">分页</div>
  </div>
</template>

<script>
export default {
    props:['classTitle','isPage','className']
};
</script>

<style scoped>
#classHead {
  display: flex;
  justify-content: space-between;
}
#classTitle {
  font-size: 17px;
  font-weight: 700;
}
</style>