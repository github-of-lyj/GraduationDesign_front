<template>
  <div id="userData">
    <ul>
      <li>
        <div id="userName">
          <p class="el-icon-user">userName</p>
        </div>
      </li>
      <li><img src="../../../../assets/orange.jpg" id="userIcon" /></li>
      <li>
        <div id="userInformation">
          <table>
            <tbody>
              <th>
                <p>1</p>
                <p>等级</p>
              </th>
              <th>
                <p>15</p>
                <p>经验</p>
              </th>
              <th>
                <p>10</p>
                <p>帖子</p>
              </th>
            </tbody>
          </table>
        </div>
      </li>
      <li id="demo">
        <div id="progress">
          <el-progress :text-inside="true" :stroke-width="20" :percentage="70">
          </el-progress>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#userData {
  background-color: #fafbfc;
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px #c2d5e3 solid;
}
#userName {
  border-bottom: 1px dashed #cdcdcd;
}
#userIcon {
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 10px;
}
#userInformation {
  display: flex;
  justify-content: center;
  padding: 0 10px 10px 10px;
}
#demo{
  display: flex;
  justify-content: center;
}
#progress{
  width: 120px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
th {
  border-right: 1px solid #ccc;
  text-align: center;
  font-size: 12px;
  width: 40px;
}
p{
  margin: 0;
}
</style>