<template>
  <footer>
    <div>
      <h4 style="margin: 0; margin-bottom: 10px">
        研墨 created by lyj who from sicau
      </h4>
      <div id="beian">
        <img id="beianimg" src="./备案图标.png" />
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=35012102000658"
          rel="noreferrer"
          target="_blank"
          >闽公网安备35012102000658</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  margin-top: 20px;
  padding: 16px;
  text-align: center;
  border: 2px black solid;
  border-radius: 10px;
}
#beian {
  display: flex;
  justify-content: center;
}
#beianimg{
  height: 21px;
  margin-right: 5px;
}
</style>