<template lang="pug">
  base-card(
    :item-data="itemData"
    :list-items="itemData.skills"
    class-name="learn-card"
  )
</template>

<script>
import BaseCard from './BaseCard';

export default {
  name: 'LearnCard',
  components: {
    BaseCard,
  },
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass">
.learn-card
  margin-top: 48px
  +md-up
    margin-top: automatic-spacing(32, 136)

</style>
