<template lang="pug">
  section.section(:id="sectionId" :class="sectionClass")
    .flex-grid
      header.section__header(:class="{'is-centered': isCentered}")
        h2.section__title
          | {{ title }}
      slot(name="section-content")

</template>
<script>
export default {
  name: 'BaseSectionTemplate',
  props: {
    title: {
      type: String,
      required: true,
    },
    sectionClass: {
      type: String,
      default: '',
    },
    sectionId: {
      type: String,
      default: '',
    },
    isCentered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="sass" scoped>
  .section__header.is-centered
    text-align: center

</style>
