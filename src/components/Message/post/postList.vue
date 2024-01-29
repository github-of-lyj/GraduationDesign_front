<template>
  <div id="postList">
    <div class="title">
        <h3 class='hotTalk'>xxx</h3>
    </div>
    <div class="content">
        <postDetail></postDetail>
        <a href=""><i class="el-icon-more"></i></a>
    </div>
  </div>
</template>

<script>
import postDetail from '../detail/postDetail.vue'
export default {
    data() {
        return {
            property: 'value',
        };
    },
    components:{postDetail}

}
</script>

<style>
#postList{
    display: flex;
    width: 50%;
    margin: 15px;

}
.title{
    width: 20%;
    display: flex;
    align-items: center;
}
.hotTalk{
    writing-mode: vertical-rl;
}
.content{
    width: 80%;
}
.el-icon-more{
    margin-left: 45%;
    font-size: 30px;
}

</style>