<template>
  <div id="forumBlock">
    <blockHead blockTitle='华北地区'></blockHead>
    <ul>
      <li v-for="Block in HuaBei" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='东北三省'></blockHead>
    <ul>
      <li v-for="Block in Dongbei" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='华东地区'></blockHead>
    <ul>
      <li v-for="Block in HuaDong" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='西南地区'></blockHead>
    <ul>
      <li v-for="Block in XiNan" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='华南地区'></blockHead>
    <ul>
      <li v-for="Block in HuaNan" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='华中地区'></blockHead>
    <ul>
      <li v-for="Block in HuaZhong" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
    <blockHead blockTitle='西北地区'></blockHead>
    <ul>
      <li v-for="Block in XiBei" :key="Block.blockID">
        <blockItem :BlockData=Block></blockItem>
      </li>
    </ul>
  </div>
</template>

<script>
import blockHead from "./blockHead";
import blockItem from "./blockItem";
import axios from 'axios';
export default {
  components: { blockHead, blockItem },
  data() {
    return {
      HuaBei:{},
      Dongbei:{},
      HuaDong:{},
      XiNan:{},
      HuaNan:{},
      HuaZhong:{},
      XiBei:{}
    };
  },
  mounted(){
    axios.get('http://192.168.23.129/user/block/getAll').then(
      (Response) => {
        this.HuaBei = Response.data.filter((Block) => {
          return Block.zoneName === '华北地区'
        })
        this.Dongbei = Response.data.filter((Block) => {
          return Block.zoneName === '东北三省'
        })
        this.HuaDong = Response.data.filter((Block) => {
          return Block.zoneName === '华东地区'
        })
        this.XiNan = Response.data.filter((Block) => {
          return Block.zoneName === '西南地区'
        })
        this.HuaNan = Response.data.filter((Block) => {
          return Block.zoneName === '华南地区'
        })
        this.HuaZhong = Response.data.filter((Block) => {
          return Block.zoneName === '华中地区'
        })
        this.XiBei = Response.data.filter((Block) => {
          return Block.zoneName === '西北地区'
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
</script>

<style scoped>
#forumBlock {
  margin: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 1135px;
}
</style>