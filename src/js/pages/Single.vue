<template>
  <div class="o-page">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="post" class="o-page__face o-page__face--front">
      <div class="o-container">
        <div class="o-container__row o-container__row--gap-of-15px o-container__row--vertical-align">
          <div class="o-container__row__column o-container__row__column--5@md">
            <h1>{{ post.title }}</h1>
            <lazy-load-image
              :source="'https://via.placeholder.com/500x700.png/acbdba/1b2021?text=' + post.title"
              :alt="post.title"
              :width="500"
            />
          </div>
          <div class="o-container__row__column o-container__row__column--7@md o-page__content">
            <h2>{{ post.subtitle }}</h2>
            <section class="u-container--columns-2">
              <p v-for="row in post.content" :key="row.id">
                {{ row }}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyLoadImage from '../components/LazyLoadImage.vue';

export default {
  name: 'single-page',
  data: () => ({
    loading: false,
    post: null,
    error: null
  }),
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  components: {
    LazyLoadImage
  },
  methods: {
    fetchData () {
      this.error = this.post = null;
      this.loading = true;

      this.$http.get('page.php', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.post = response.data;
        })
        .catch((error) => {
          this.error = error.toString();
        })
        .then(() => {
          this.loading = false;
        });
    }
  }
};
</script>
