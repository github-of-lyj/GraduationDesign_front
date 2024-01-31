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
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.key"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          key: "001",
          value: "选项一",
          label: "帖子",
        },
        {
          key: "002",
          value: "选项二",
          label: "用户",
        },
      ],
      value: "帖子",
      inputWords: "",
    };
  },
  methods: {
    querySearch(inputWords, callback) {
      callback([{ value: "战士鸽" }, { value: "猎宝" }, { value: "鸡煲" }]);
    },
    handleSelect() {},
  },
};
</script>

<style>
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