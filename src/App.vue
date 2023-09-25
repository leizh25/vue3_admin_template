<template>
  <div class="box">
    <h1>我是app根组件</h1>
  </div>
</template>
<script setup lang="ts">
for (let i = 0; i < 100; i++) {
  console.log(i)
  
}
</script>
<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: #000;
}
</style>
