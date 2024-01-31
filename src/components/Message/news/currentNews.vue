<template>
<div id="demo">
    <h3>政策与资讯</h3>
    <div id="currentNews">
        <currentNewsList type="国家政策"></currentNewsList>
        <currentNewsList type="考研资讯"></currentNewsList>
        <currentNewsList type="专硕巡展"></currentNewsList>
    </div>
    
</div>
</template>

<script>
import currentNewsList from './currentNewsList.vue'
export default {
    components:{currentNewsList}

}
</script>

<style scoped>
#demo{
    margin: 15px;
}
#currentNews{
    display: flex;
}



</style>