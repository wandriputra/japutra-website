<template>
  <div class="title-page">
    <slot></slot>
  </div>
</template>

<style scoped>

@media (min-width: 768px) {
  .title-page {
    position: absolute;
    bottom: 100px;
    font-size: 6em;
    z-index: -1;
    color: #c9c9ca;
    letter-spacing: 50px;
    font-family: 'trajan', serif;
    opacity: 0.2;
  }
}
@media (max-width: 768px) {
  .title-page {
   display: none;
  }
}
</style>