<template>
  <div id="postDetail">
    <div id="post">
      <h3 id="nameRouter">{{title}}——{{linkhref}}</h3>
      <h3 id="time">{{date}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'title',
      date: 'date',
      linkhref: 'linkhref',
    };
  },
};
</script>

<style scoped>
#post {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#time {
  float: right;
}
</style>