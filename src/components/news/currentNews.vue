<template>
    <div id="currentNews">
        <h2>政策与资讯</h2>
        <newsList></newsList>
        <newsList></newsList>
        <newsList></newsList>
    </div>
    
  
</template>

<script>
import newsList from './newsList.vue'
export default {
    components:{newsList}

}
</script>

<style>
#currentNews{
    margin: 15px;
}


</style>