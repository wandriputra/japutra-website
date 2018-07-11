<template>
  <div class="title-page">
    <slot></slot>
  </div>
</template>

<style scoped>
.title-page {
  position: absolute;
  bottom: 250px;
  font-size: 6em;
  z-index: -1;
  color: #c9c9ca;
  letter-spacing: 50px;
  font-family: 'trajan', serif;
  opacity: 0.3;
}
</style>