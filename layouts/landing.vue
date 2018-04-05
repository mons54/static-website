<template>
  <div>
    <app-nav/>
    <div class="page-header header-filter" data-parallax="true">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="h1 title text-center">Landing Page</h1>
            <p>
              Build a beautiful landing page with Vue.js, Nuxt.js, Material Kit and Bootstrap 4.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
      <div class="container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/nav.vue'

export default {
  components: {
    AppNav
  },
}
</script>

<style>
  .page-header p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-top: 40px;
  }

  .section {
    padding: 70px;
  }
</style>
