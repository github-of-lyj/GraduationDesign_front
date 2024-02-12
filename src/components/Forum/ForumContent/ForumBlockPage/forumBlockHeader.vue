<template>
  <div id="forumBlockHeader">
    <div id="blockTitle">
      <blockIcon></blockIcon>
      <blockHeaderInformation :blockInformation=blockData></blockHeaderInformation>
    </div>
    <div id="blockIntroduce">
      <p>{{blockData.blockIntroduce}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import blockHeaderInformation from "./BlockHeader/blockHeaderInformation";
import blockIcon from "./BlockHeader/blockIcon";
export default {
  components: { blockHeaderInformation, blockIcon },
  data() {
    return {
      blockData: {},
    };
  },
  watch:{
    //利用导航菜单跳转时调用
    "$route.path":{
      handler(){
        console.log('调用了')
        axios.get(`http://localhost:8080/user/block/get/${this.$route.params.blockid}`).then(
          (response) => {
            this.blockData = response.data
          },
          (error) => {
            console.log(error)
          }
        ) 
      }
    }
  },
  //在首页进入 Block 页面时调用
  mounted(){
    axios.get(`http://localhost:8080/user/block/get/${this.$route.params.blockid}`).then(
      (response) => {
        this.blockData = response.data
      },
      (error) => {
        console.log(error)
      }
    )

  }
};
</script>

<style scoped>
#forumBlockHeader {
  display: flex;
  margin-left: 20px;
  padding: 20px;
  height: 120px;
  border-bottom: 0;
  border-radius: 10px 10px 0px 0px;
}
#blockTitle {
  display: flex;
}
#blockIntroduce{
  margin-left: 10px;
}
#blockIntroduce p {
  font-weight: bold;
  margin-left: 40px;
  margin: 0;
  font-size: 14px;
}
</style>