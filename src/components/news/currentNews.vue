<template>
<div id="demo">
    <h2>政策与资讯</h2>
    <div id="currentNews">
        <newsList></newsList>
        <newsList></newsList>
        <newsList></newsList>
    </div>
    
</div>
</template>

<script>
import newsList from './newsList.vue'
export default {
    components:{newsList}

}
</script>

<style>
#demo{
    margin: 15px;
}
#currentNews{
    display: flex;
}



</style>