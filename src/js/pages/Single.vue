<template>
  <div class="o-page">
    <div class="o-page__face o-page__face--front">
      <div class="o-container">
        <div class="o-container__row o-container__row--gap-of-15px o-container__row--vertical-align">
          <div class="o-container__row__column o-container__row__column--5@md">
            <h1>{{ title }} #{{ $route.params.id }}</h1>
            <lazy-load-image
              :source="'https://via.placeholder.com/500x700.png/acbdba/1b2021?text=' + title + ' ' + $route.params.id"
              :alt="title"
              :width="500"
            />
          </div>
          <div class="o-container__row__column o-container__row__column--7@md o-page__content">
            <h3>{{ subtitle }}</h3>
            <div class="u-container--columns-2 u-text--spaced">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, ante ac dignissim efficitur, diam lorem pretium erat, id placerat nisl turpis eu ante. Maecenas eu aliquet nulla, at suscipit lacus. Integer dapibus massa sed libero dignissim aliquet at sed enim. Nulla facilisi. Nulla convallis fringilla nisl, et commodo purus tempus id. Quisque et venenatis eros, euismod semper lorem. Curabitur ac euismod purus. Mauris fringilla massa at felis pretium interdum. Suspendisse dui odio, malesuada ut aliquet hendrerit, molestie ut dui. Cras tellus arcu, congue at nibh eu, tristique ultrices libero.
              </p>
              <p>Nulla facilisi. Integer dolor felis, dignissim quis porttitor sed, aliquam ac purus. Vivamus volutpat ultricies lectus, in auctor arcu commodo in. Cras et tellus ut quam tempor vehicula sit amet sit amet est. Ut elit tortor, maximus gravida porta vel, molestie eu tellus. In justo nisi, iaculis id malesuada et, vulputate vitae metus. Proin vehicula suscipit erat, non accumsan nulla hendrerit pellentesque. Ut vitae suscipit eros. Donec luctus ex at magna molestie facilisis. Donec sit amet mi augue. Sed accumsan blandit risus, in pharetra lacus bibendum viverra. Maecenas sed turpis consectetur, lobortis elit ut, pellentesque turpis. Nunc semper congue posuere. Maecenas ornare metus nec ultrices eleifend. Sed orci elit, blandit a rhoncus id, posuere sed magna. Nam quis volutpat arcu.
              </p>
            </div>
            <h3>{{ subtitle }}</h3>
            <div class="u-container--columns-2 u-text--spaced">
              <p>Ut eget magna placerat purus feugiat laoreet. Ut sed felis nisl. Vestibulum vitae consequat nisl. Integer quis commodo purus, sit amet condimentum turpis. Integer commodo laoreet fermentum. Aenean ut odio ut libero faucibus congue ac quis massa. Donec ac nisi ornare, euismod ligula vulputate, vestibulum orci. Nunc laoreet lectus vel mauris scelerisque hendrerit. Nunc tincidunt orci ex, vitae egestas ante bibendum sit amet. Duis vitae ipsum massa. In lacinia varius lobortis. Quisque vel sapien vitae sem maximus malesuada sit amet sed est. Nulla pulvinar convallis tortor vitae mattis. Cras tincidunt consequat tempor. Integer malesuada justo a congue convallis. Suspendisse dui mi, malesuada eget nunc sit amet, elementum lobortis eros.
              </p>
              <p>Etiam condimentum elit quis velit commodo, in egestas odio facilisis. Duis aliquet ac metus eget ornare. Ut lorem est, malesuada a lacus ut, lobortis vehicula sapien. Nunc purus arcu, aliquet sed elit in, vulputate finibus sapien. Quisque vehicula turpis eget consequat auctor. Curabitur risus risus, vulputate quis lacinia luctus, gravida in mi. Fusce tortor urna, convallis vitae ultrices ut, aliquet sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec commodo lacus ante, quis sagittis massa sollicitudin et. Sed condimentum bibendum mauris, eu dapibus nisi sollicitudin ac. Sed ultricies, nibh vitae rutrum faucibus, elit augue ullamcorper justo, at congue orci purus eget dui. Vestibulum interdum neque erat, id porta dolor suscipit viverra. Aliquam iaculis nulla sed ante lacinia, eu facilisis arcu convallis. Praesent ornare rutrum sapien in mattis. Duis condimentum, magna in tempor vehicula, urna quam semper metus, ut fringilla turpis ligula a enim. Duis vel bibendum augue.
              </p>
              <p>Donec gravida congue tellus vitae cursus. Sed dolor ligula, pellentesque ullamcorper efficitur eu, congue quis quam. Integer efficitur, sapien rhoncus blandit gravida, orci leo mollis lorem, lobortis rutrum diam elit vel sapien. Sed et purus pellentesque, molestie nisl at, commodo turpis. Vestibulum at tellus dapibus quam posuere hendrerit. Cras turpis sem, eleifend nec velit viverra, egestas condimentum odio. Integer at ullamcorper tortor. Nulla lobortis a nisl ut sagittis. Donec consequat leo eget magna sagittis faucibus.
              </p>
            </div>
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
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
    }),
    components: {
      LazyLoadImage
    },
    watch: {
      '$route' (to, from) {
        console.log(to);
        console.log(from);
      }
    }
  };
</script>
