<template>
  <div id="forumBlockPostItem">
    <div v-if="!postList.length" id="NoResultHandle">
      <p>该板块居然没有帖子呢 (°ー°〃)</p>
    </div>
    <ul v-if="postList.length">
      <li v-for="post in postList.slice(curPage*pageSize, curPage*pageSize + pageSize)" :key="post.postID">
        <postItemLeft :postData = post></postItemLeft>
        <postItemRight :postData = post></postItemRight>
      </li>
    </ul>
    <el-pagination
          layout="prev, pager, next , jumper"
          :total="postList.length"
          :page-size="pageSize"
          @current-change="pageChange"
        >
     </el-pagination>
  </div>
</template>

<script>
import postItemLeft from "./BlockPostItem/postItemLeft";
import postItemRight from "./BlockPostItem/postItemRight";
import axios from 'axios';
export default {
  data() {
    return {
      postList: [],
      pageSize: 10,
      curPage: 0,
    };
  },
  methods:{
    pageChange(page){
      this.curPage = page - 1
    }
  },
  components: { postItemLeft, postItemRight },
  watch:{
    '$route.path':{
      handler(){
        axios.get(`http://192.168.23.129/user/post/getPosts/${this.$route.params.blockid}`).then(
          (response) => {
            this.postList = response.data
          },
          (error) => {
            console.log(error)
          }
        )
      }
    }
  },
  mounted(){
    axios.get(`http://192.168.23.129/user/post/getPosts/${this.$route.params.blockid}`).then(
      (response) => {
        this.postList = response.data
      },
      (error) => {
        console.log(error)
      }
    )

  }
};
</script>

<style scoped>
#forumBlockPostItem {
  margin-left: 20px;
  width: 800px;
}
#NoResultHandle{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border: 1px black dotted;
  border-radius: 10px;
}
.el-pagination{
  text-align: center;
}
ul {
  width: 1000px;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  border: 1px black dashed;
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>