<template>
  <div>
    <app-nav/>
    <nuxt/>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav
  },
}
if (process.browser) {
  const stylesheet = document.createElement('link');
  stylesheet.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons';
  stylesheet.rel  = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
}
</script>

<style lang="scss">
@import "assets/scss/material-kit.scss";
</style>
