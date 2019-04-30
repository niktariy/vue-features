<template>
  <div
    id="app"
    class="page-content"
  >
    <l-header />
    <main class="l-main">
      <router-view />
    </main>
    <l-footer />
  </div>
</template>

<script>
import events from '@/events/index';
import LHeader from '@/components/TheHeaderGlobal/TheHeader';
import LFooter from '@/components/TheFooterGlobal/TheFooter';

export default {
  name: 'App',
  mixins: [events],
  components: {
    LFooter,
    LHeader,
  },
};
</script>

<style lang="sass">
@import "assets/styles/global"
main
  margin-top: 108px
.page-content
  min-height: 100vh
  height: auto
  display: flex
  flex-direction: column
  .l-main
    flex: 1 0 auto
  .l-footer
    flex-shrink: 0

</style>
