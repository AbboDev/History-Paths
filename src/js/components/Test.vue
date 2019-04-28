<template>
  <div>
    <p>{{ webpack }} <a href="#">tes</a></p>
  </div>
</template>
<script>
export default {
  name: 'main-content',
  data: () => ({
    // reactive data property of the component.
    webpack: 'Powered by webpack!',
  })
};
</script>
