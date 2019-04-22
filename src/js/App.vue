<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="">
    <header class="o-header">
      <nav>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/404">Go to 404</router-link>
        <router-link to="/page/1">Go to Page #1</router-link>
        <router-link to="/page/2">Go to Page #2</router-link>
      </nav>
    </header>

    <main class="o-main">
      <transition name="fade" :duration="1000">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import '../scss/app.scss';

  export default {
    name: 'app',
    data: () => ({
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
    }),
  };
</script>
