<template lang="pug">
  .component(:class="containerClass")
    template(v-if="isButtonLink")
      router-link.btn(
        tag="button"
        type="button"
        :to="linkTo"
        :class="[extraClass, 'btn--'+modifier]"
      ) {{label}}
    template(v-else)
      button.btn(
        :type="type"
        :class="[extraClass, 'btn--'+modifier]"
        :disabled="isDisabled"
      ) {{label}}
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    containerClass: {
      type: String,
      default: '',
    },
    extraClass: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    modifier: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      default: '',
    },
    isDisabled: Boolean,
    isButtonLink: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@import "src/assets/styles/utils"
.component
  &:not(.no-gap)
    margin-top: 48px
    & + &
      +xs-only
        margin-top: 16px
.btn
  $base-color:  map_get($button-states, 'base')
  $hover-color: map_get($button-states, 'hover')
  $focus-color: map_get($button-states, 'focus')

  display: flex
  justify-content: center
  padding: 11px 24px 13px
  appearance: none
  border: none
  border-radius: 4px
  outline: none
  font:
    family: 'Avenir Next', sans-serif
    size: 16px
    weight: 600

  width: 100%
  +sm-up
    width: auto

  &:disabled
    cursor: not-allowed
    pointer-events: none

  &--primary:not(.btn--outline)
    color: $White
    background-color: $base-color
    &:hover
      background-color: $hover-color
      box-shadow: 0 4px 16px 0 rgba($hover-color, .16)
    &:focus
      background-color: $focus-color
      box-shadow: 0 4px 8px 0 rgba($focus-color, .16)
    &:active
      box-shadow: 0 0 0 0 transparent
    &:disabled
      background: $disabled-color !important

  &--outline, &--flat
    background-color: transparent
    color: darken($base-color, 2%)

  &--outline
    box-shadow: 0 0 0 0 transparent, inset 0 0 0 2px $base-color
    &:hover
      color: $hover-color
      border-color: $hover-color
      box-shadow: 0 2px 16px 0 rgba($hover-color, .32), inset 0 0 0 0
    &:focus
      color: $focus-color
      background-color: rgba($focus-color, 0.08)
      border-color: $focus-color
      box-shadow: 0 2px 8px 0 rgba($focus-color, .16), inset 0 0 0 2px $focus-color
    &:disabled
      color: hsl(hue($base-color), $saturation: 24%, $lightness: 56%)
      background-color: rgba($disabled-color, 0.08)
      box-shadow: 0 0 0 0 transparent, inset 0 0 0 2px $disabled-color

  &--flat
    &:hover
      background-color: rgba($hover-color, 0.08)
    &:focus
      color: $focus-color
      background-color: rgba($focus-color, 0.16)
      box-shadow: 0 2px 8px 0 rgba($focus-color, .16), inset 0 0 0 2px $focus-color

</style>
