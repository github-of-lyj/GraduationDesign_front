<template>
  <div id="forumBlockSide">
    <el-col :span="12" >
      <el-menu
        class="el-menu-vertical-demo"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>华北地区</span>
          </template>
            <el-menu-item v-for="block in HuaBei" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>东北三省</span>
          </template>
            <el-menu-item v-for="block in Dongbei" :key="block.blockID" :index="block.blockID.toString()"
                :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>华东地区</span>
          </template>
            <el-menu-item v-for="block in HuaDong" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>西南地区</span>
          </template>
            <el-menu-item v-for="block in XiNan" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>华南地区</span>
          </template>
            <el-menu-item v-for="block in HuaNan" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>华中地区</span>
          </template>
            <el-menu-item v-for="block in HuaZhong" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>西北地区</span>
          </template>
            <el-menu-item v-for="block in XiBei" :key="block.blockID" :index="block.blockID.toString()"
              :route="{
                name: 'ForumBlockPage',
                params: {
                  blockid: block.blockID,
                },
              }"
            >
              {{block.blockName}}
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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
  methods: {

  },
  mounted(){
    axios.get('http://localhost:8080/user/block/getAll').then(
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
#forumBlockSide {
  margin-top: 60px;
  margin-bottom: 15px;
  display: flex;
}
.el-menu {
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.el-col-12{
  width: 200px;
}
</style>