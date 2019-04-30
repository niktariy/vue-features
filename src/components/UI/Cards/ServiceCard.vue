<template lang="pug">
  .service-card
    .service-card__content
      .service-card__label(v-if="label")
        | {{ label }}
      h2.service-card__title
        | {{ title }}
      .service-card__descr
        | {{ descr }}
      .service-card__button
        slot(name="service-button")
    .service-card__bg-image(:style="{ backgroundImage: setServiceIcon }")

</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    setServiceIcon() {
      return `url(${this.imageUrl})`;
    },
  },
};
</script>

<style lang="sass" scoped>
.service-card
  flex: 1
  position: relative
  padding: 72px 24px
  +sm-up
    padding: automatic-spacing(72, 160) automatic-spacing(24, 96)

  &:nth-of-type(odd)
    background-color: $Magnolia
  &:nth-of-type(even)
    background-color: $secondaryLight

  +sm-only
    margin-bottom: 32px

  &__content
    height: 100%
    display: flex
    flex-direction: column
    position: relative
    z-index: z('default') + 1

  &__label
    margin-bottom: 32px
    font-size: $font--14-16
    font-weight: bold
    color: $Liliac

  &__descr
    margin-top: 24px
    max-width: 67%
    white-space: pre-line

  &__button
    margin-top: auto

  &__bg-image
    position: absolute
    top: 0
    right: 0
    width: 100%
    height: 100%
    background-repeat: no-repeat
    background-position: right
    +xs-only
      display: none
    +md-up
      bottom: 0
      background-size: auto 100%

</style>
