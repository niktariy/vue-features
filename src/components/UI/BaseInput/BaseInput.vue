<template lang="pug">
  .c-input(:class="[{ 'is-filled' : isFilled }, { 'is-focused' : isFocused }, { 'is-invalid' : !!isInvalid}]")

    input.c-input__field(
      :value="value"
      :id="id"
      :type="inputType"
      :placeholder="placeholderText"
      :required="isRequired ? true : false"
      @input="$emit('input', $event.target.value)"
      @keyup="toggleFilledClass()"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @change="(event) => this.$emit('onChange', event)"
    )

    label.c-input__label(:for="id")
      span.c-input__label-text
        | {{ inputLabel }}

    span.msg-validation
      | {{ validationText }}

</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    inputLabel: {
      type: String,
      required: true,
    },
    placeholderText: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
      required: false,
    },
    inputModifier: {
      type: String,
      default: '',
      required: false,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    validationText: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      isFilled: false,
      isFocused: false,
      focusedClass: 'is-focused',
      filledClass: 'is-filled',
      errorClass: 'is-invalid',
    };
  },
  methods: {
    toggleFilledClass() {
      // eslint-disable-next-line no-restricted-globals
      if (event.target.value.length > 0) {
        this.isFilled = true;
      } else {
        this.isFilled = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
$margin-b: 24px
$validation__font-size: 12px
$validation__offset: 4px

.c-input
  display: flex
  flex-direction: column
  position: relative
  height: 48px
  width: 100%
  max-width: 736px
  margin-bottom: $margin-b
  font-size: 16px
  background-color: $White
  will-change: box-shadow
  transition: box-shadow 0.18s $v--ease-in, margin 0.16s linear

  &__label, &__field
    display: flex
    align-items: center
    font-size: inherit

  &__label
    position: absolute
    top: 0
    left: 0
    height: inherit
    z-index: z('default') + 2
    padding: 4px 16px
    width: 100%
    font-weight: 500
    opacity: 0
    will-change: transform, font-size
    transition-property: transform, font-size, opacity, color
    transition-duration: 0.18s
    transition-timing-function: $v--standard-easing

  &__field
    z-index: z('default') + 3
    padding: 8px 16px
    height: 100%
    color: $input__text-color
    border: none
    border-radius: 4px
    background-color: transparent
    &:required ~ .c-input__label
      span
        position: relative
        &::after
          content: '*'
          display: inline-block
          margin-left: 2px
          font-size: 0.9rem
          color: $input--required__text-color
    &:focus
      +placeholder
        color: transparent

  &::after
    content: ''
    display: block
    height: 0
    width: 100%
    position: absolute
    bottom: 0
    left: 0
    right: 0
    background-color: $input--filled__shadow-color
    transition: height 0.18s linear, background-color 0.18s $v--standard-easing

  &:hover, &.is-focused
    box-shadow: 0 4px 16px $input__shadow-color

  &.is-filled, &.is-focused

    .c-input__label
      opacity: 1
      font-size: 0.8em
      color: $input__label-color
      transform: translateY(-75%)

    &::after
      height: 2px

  &.is-invalid
    margin-bottom: $margin-b + $validation__font-size + $validation__offset
    &::after
      background-color: $input--invalid__shadow-color
    .msg-validation
      top: calc(100% + #{$validation__offset})
      color: $input--invalid__shadow-color

.msg-validation
  position: absolute
  top: 100%
  left: 16px
  font-size: $validation__font-size
  font-weight: 600
  transition: all 0.18s $v--ease-in

</style>
