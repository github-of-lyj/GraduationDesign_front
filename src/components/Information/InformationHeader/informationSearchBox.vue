<template>
  <div id="search">
    <img id="logo" src="../../../assets/feather.png" />
    <div id="searchBox">
      <el-autocomplete
        class="inline-input"
        v-model="inputWords"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button type="primary" @click="startSearch">搜索</el-button>
    </div>
  </div>
</template>

<script>
// import pubsub from "pubsub-js";
export default {
  data() {
    return {
      inputWords: "",
    };
  },
  methods: {
    querySearch(inputWords, callback) {
      callback([{ value: "战士鸽" }, { value: "猎宝" }, { value: "鸡煲" }]);
    },
    handleSelect() {},
    startSearch() {
      // console.log("this.inputWords === kong",this.inputWords === "")
      // console.log("typeof(this.inputWords) === undefined",typeof(this.inputWords) === "undefined")
      if (this.inputWords === "") {
        //这里输入为空可以视为查所有，到时候考虑一下
        this.$message("输入不可为空");
      } else {
        //此处通过axios请求获取到数据之后，发布消息修改相应的数据即可即可
  
        // this.$router.push({
        //   name: "Search",
        //   query: {
        //     value: 'SearchInformation',
        //     initialInputWords: this.inputWords,
        //   },
        // });
        // this.$nextTick(function () {
        //   pubsub.publish("search");
        // });
      }
    },
  },
  mounted() {
    this.inputWords = this.initialInputWords;
  },
};
</script>

<style scoped>
#search {
  display: flex;
  margin: 15px;
  justify-content: center;
}
#searchBox {
  display: flex;
  align-items: center;
}
img {
  height: 60px;
  margin-right: 5px;
}
.el-autocomplete {
  font-size: 20px;
  width: 600px;
}
.el-input {
  display: flex;
  align-items: center;
}
.el-select {
  margin-right: 20px;
  width: 75px;
}
</style>