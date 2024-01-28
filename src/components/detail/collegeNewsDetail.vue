<template>
  <div id="collegeNewsDetail">
    <div id="news">
      <a id="nameRouter" :href="collegeNews.policyUrl" class="hvr-shrink">{{collegeNews.policyName}}</a>
      <p id="time">{{collegeNews.policyDate}}</p>
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
  props:['collegeNews']
};
</script>

<style scoped>
#collegeNewsDetail{
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