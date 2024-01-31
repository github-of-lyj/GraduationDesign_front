<template>
  <div id="hotCollege">
    <div id="classHead">
      <div id="classTitle">
        <i class="el-icon-house"></i>
        热门院校
      </div>
      <div>分页</div>
    </div>
    <div id="collegeList">
      <ul>
        <li>
          <router-link to="/forum/index" id="collegeItem">
            <img src="../../../../assets/orange.jpg" />
            <div id="collegeData">
              <p id="collegeName">collegeName</p>
              <p id="postNumber"><i class="el-icon-user"></i> postNumber</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#hotCollege {
  border: 1px solid rgba(230, 230, 230, 1);
  margin: 15px;
  padding: 16px;
}
#classHead {
  display: flex;
  justify-content: space-between;
}
#classTitle {
  font-size: 17px;
  font-weight: 700;
}
#collegeItem {
  display: flex;
}
#collegeData{
  margin-left: 10px;
}
#collegeName{
  font-size: 15px;
  color: black;
}
#postNumber{
  font-size: 12px;
  color:#949494

}
img {
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;

}
ul {
  list-style: none;
  padding: 0;
}
p{
  margin: 0;
}
</style>