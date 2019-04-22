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
  <div id="app">
    <app-header />

    <main class="o-main">
      <transition name="fade" :duration="1000">
        <router-view :key="$route.params.id"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import '../scss/app.scss';

  import AppHeader from './components/AppHeader.vue';

  export default {
    name: 'app',
    data: () => ({
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
    }),
    components: {
      AppHeader
    }
  };
</script>
