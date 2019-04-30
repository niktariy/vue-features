<template lang="pug">
  section.hero-section(:class="sectionExtraClass")
    .flex-grid
      .hero-section__content.flex-grid__row
        header.col-12.col-md-6
          h1.hero-section__title
            | {{ title }}
          p.hero-section__text(
            :class="{'heading-text': isHeadingText}"
            v-html="description"
          )
          .hero-section__cta-actions.btn-group
            slot(name="hero-buttons")
        .hero-section__image-container.col-12.col-md-6
          img.hero-section__image(:src="imagePath")

</template>

<script>
export default {
  name: 'PageHeroSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      default: '',
      required: true,
    },
    isHeadingText: {
      type: Boolean,
      default: true,
    },
    sectionExtraClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass" scoped>
  .hero-section
    display: flex
    align-items: center
    min-height: 75vh
    &__content
      align-items: center
    &__title
      max-width: 700px
    &__text
      margin-top: 24px
      font-weight: 500
      max-width: 660px
      &:not(.heading-text)
        font-size: $font--14-18
    &__image-container
      +breakpoint-max($medium)
        margin-top: 48px

</style>
