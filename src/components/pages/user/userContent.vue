<template>
  <div id="userContent">
    <userInformation></userInformation>
    <userHistory></userHistory>
  </div>
</template>

<script>
import userInformation from '../../User/userInformation'
import userHistory from '../../User/userHistory'
export default {
    components:{userInformation,userHistory}
}
</script>

<style>

#userContent{
    display: flex;
    margin: 15px;
}

</style>