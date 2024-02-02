<template>
  <div id="right">
    <div id="author">
      <div>
        <p><i class="el-icon-user"></i>author</p>
      </div>
      <div id="date">
        <p>date</p>
      </div>
    </div>
    <div id="latestAnswer">
      <p><i class="el-icon-news"></i>latestanswer</p>
      <p id="date">date</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#right {
  display: flex;
  padding: 20px;
}

#latestAnswer {
  margin-left: 40px;
}
#date{
  display: flex;
  justify-content: center;
}
p{
    margin: 0;
}
</style>