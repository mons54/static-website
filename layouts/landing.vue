<template>
  <div>
    <app-nav></app-nav>
    <div class="page-header header-filter" data-parallax="true">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="h1 title">Landing Page</h1>
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

<style lang="scss">

  $linear-gradient: 135deg,rgba(3, 169, 244, 0.9),rgba(33, 150, 243, 0.45);

  .page-header {
    background-image: url('/bg.jpg');
  }

  .page-header p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-top: 40px;
  }

  .page-header:after {
    background: rgba(33, 150, 243, 0.6);
    background: linear-gradient($linear-gradient);
    background: -moz-linear-gradient($linear-gradient);
    background: -webkit-linear-gradient($linear-gradient);
  }

  .section {
    position: relative;
    top: -40px;
    padding: 40px 0 0;
    margin: 0;
  }
</style>
