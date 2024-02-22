<template>
  <div id="demo">
    <div id="colluagueNews">
      <div id="titleHead">
        <div id="head">
          <h3>直击院校—当前显示的是:</h3>
          <h3 v-show="!isEdit" style="margin-left: 5px;">{{ collegeName }}</h3>
          <el-input 
          ref="elInput"
          v-model="inputWords" 
          @blur="finishEdit(inputWords)"
          placeholder="请输入内容" 
          v-show="isEdit"
          size="medium"
          :autofocus='true'
          >
          </el-input>
          <i class="el-icon-edit hvr-wobble-horizontal" @click="startEdit" ></i>
        </div>
        <collegeNewsList :errMsg="errMsg"></collegeNewsList>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import axios from "axios";
import collegeNewsList from "./collegeNewsList.vue";
export default {
  data() {
    return {
      collegeName: "",
      errMsg: "",
      isEdit: false,
      inputWords: ""
    };
  },
  components: { collegeNewsList },
  methods:{
    startEdit(){
      this.isEdit = true
      this.$nextTick(function () {
        this.$refs.elInput.focus()
      });
    },
    finishEdit(college){
      this.collegeName = college
      this.isEdit = false
    }
  },
  watch: {
    collegeName(newValue) {
      axios
        .get(`http://localhost:8080/user/university/name/${newValue}/0`)
        .then(
          (response) => {
            pubsub.publish("universityData", response.data)
            this.errMsg = ""
          },
          (error) => {
            this.errMsg = error.message
          }
        );
    },
  },
  mounted() {
    axios.get("http://localhost:8080/user/college/random").then(
      (response) => {
        this.collegeName = response.data.collegeName;
        this.inputWords = response.data.collegeName;
        axios
          .get(
            `http://localhost:8080/user/university/${response.data.collegeCode}/5`
          )
          .then(
            (response) => {
              pubsub.publish("universityData", response.data);
            },
            (error) => {
              this.errMsg = error.message;
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style scoped>
#demo {
  margin: 15px;
}
#head{
  display: flex;
  align-items: center;
  letter-spacing: 1px;
}
#colluagueNews {
  display: flex;
  height: max-content;
}
#titleHead {
  align-items: center;
  width: 33%;
}
#contentList {
  display: flex;
  width: 66%;
  border: 1px solid;
  border-radius: 20px;
}
#newsList {
  width: 100%;
}
.el-icon-edit{
  margin-left: 5px;
}
.el-input{
  width: 200px;
}
.el-input--medium{
  font-size: 17px;
}
.el-icon-arrow-right {
  margin-left: 20px;
  font-size: 30px;
}

.el-divider--vertical {
  margin-top: 15px;
  height: 90%;
}
</style>