<template>
  <figure v-lazyload class="image__wrapper">
    <img
      class="c-image__item"
      :data-url="source"
      :alt="alt"
    >
  </figure>
</template>

<script type="text/javascript">
export default {
  name: "LazyLoadImage",
  props: {
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  }
};
</script>
