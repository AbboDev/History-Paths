<template>
  <div
    v-lazyload="'js-lazyload'"
    :class="[
      'o-box',
      ratio ? `o-box--ratio o-box--ratio-${ratio}` : ''
    ]">
    <div
      class="o-box__image o-box__image--fill js-lazyload"
      :data-url="source"
    >
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'LazyLoadImage',
  props: {
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    ratio: {
      type: String,
      required: false
    }
  }
};
</script>
