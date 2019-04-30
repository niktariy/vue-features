<template lang="pug">
  .card(:class="className" tabindex="0")
    .card__container()
      .card__img-container(v-if="itemData.imagePath")
        img(:src="itemData.imagePath" :alt="itemData.name")
      .card__content
        h3.card__title(:class="className + '__title'")
          | {{itemData.name}}
        slot(name="card-items")
          ul.card__list
            li.card__list-item(v-for="listItem in listItems")
              | {{listItem}}
        slot(name="card-button")
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    itemData: {
      type: Object,
      required: true,
    },
    listItems: {
      type: Array,
      default() {
        return [];
      },
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass" scoped>
.card
  &__container
    display: flex
    +breakpoint-max($medium)
      flex-direction: column

  &--column &__container
    flex-direction: column

  &__img-container
    display: flex
    flex: 1
    max-height: 408px
    max-width: 100%
    height: 100%
    margin: 24px auto

    +breakpoint-max($medium)
      max-height: 240px

    +md-up
      align-items: flex-start
      max-width: 50%
      margin: auto auto auto 0

    img
      max-height: inherit
      +breakpoint-max($medium)
        width: auto
        height: 100vw

  &:nth-child(even)
    +md-up
      [class*="__content"]
        order: -1
      [class*="__img-container"]
        margin: auto 0 auto auto

  &__content

    +sm-only
      max-width: 392px
      margin: auto
      text-align: center

    +md-up
      max-width: 38%
      align-self: center
      padding-top: 24px

  &__title
    text-align: center
    +md-up
      text-align: left
      margin-bottom: 8px

  &__list
    display: flex
    flex-direction: column
    +xs-only
      padding-left: 24px

  &__list-item
    @extend %card-list-item-style

</style>
