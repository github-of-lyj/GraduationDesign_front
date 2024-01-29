<template>
  <div id="currentNewsDetail">
    <div id="news">
      <a id="nameRouter" class="hvr-shrink" :href="currentNews.href">{{currentNews.title}}</a>
      <p id="time">{{currentNews.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:['currentNews']
};
</script>

<style scoped>
#currentNewsDetail{
  margin-top: 20px;
  margin-bottom: 20px;
}
#news {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#time {
  float: right;
  font-size: 18px;
}
#nameRouter{
   text-decoration: none;
   color: black;
   font-size: 17px;
   width: 70%;
}
</style>