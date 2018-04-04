<template>
  <div v-bind:class="{ 'nav-open': navOpen }">
    <app-nav @nav:toggle="navToggle" />
    <nuxt/>
    <div v-on:click="navClose" id="bodyClick"></div>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav
  },
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    navToggle () {
      this.navOpen = !this.navOpen;
    },
    navClose () {
      this.navOpen = false;
    }
  },
}
</script>

<style>
#bodyClick {
  display: none;
}

.nav-open #bodyClick {
  display: block;
}
</style>
