<template>
  <div id="blockHead">
    <div>
      <i class="el-icon-document-copy"></i>
      <span>{{ blockTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blockTitle']
};
</script>

<style scoped>
#blockHead {
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  border-bottom: 1px #C2D5E3 solid;
}
span {
  margin-left: 10px;
}
</style>