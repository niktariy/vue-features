/* eslint-disable max-len */
<template lang="pug">
  fixed-header(:fixed.sync="isFixed")
    header.l-header(
      id="header"
      :class="{ 'l-header--is-fixed': isFixed }"
      :threshold="300"
    )
      .l-header__wrapper.flex-grid
        router-link.l-header__logo.h4-like(exact to="/")
          img.logo(
            :src="siteLogo.path"
            :height="siteLogo.height"
            :width="siteLogo.width"
            alt="Novicode"
          )
          | novicode

        header-burger

        .l-header__actions#header-nav
          the-tabs
          c-button(
            :label="btn.text"
            :modifier="btn.type"
            :extraClass="btn.extraClass"
            containerClass="no-gap"
          )
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import FixedHeader from 'vue-fixed-header';
import BaseButton from '@/components/UI/BaseButton/BaseButton';
import TheTabs from './TheTabs';
import HeaderBurger from './Burger';
import logoPath from './siteLogo.svg';

export default {
  name: 'TheHeader',
  components: {
    FixedHeader,
    TheTabs,
    HeaderBurger,
    'c-button': BaseButton,
  },
  data() {
    return {
      visible: false,
      isFixed: false,
      siteLogo: {
        path: logoPath,
        height: '48',
        width: '28',
      },
      btn: {
        text: 'Order now',
        type: 'flat',
        extraClass: 'l-header__cta',
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.l-header
  $shadow: map-get($header__shadow, 'base')
  position: fixed
  z-index: z('header')
  top: 0
  width: 100%
  background-color: $White
  box-shadow: 0 map-get($shadow, 'offsetY') map-get($shadow, 'blur') map-get($shadow, 'spread') map-get($shadow, 'color')
  transform: translateY(0%)
  transition: all .28s ease-in

  &--is-fixed
    $shadow: map-get($header__shadow, 'fixed')
    box-shadow: 0 map-get($shadow, 'offsetY') map-get($shadow, 'blur') map-get($shadow, 'spread') map-get($shadow, 'color')

  &__wrapper
    padding: 24px 0
    display: flex
    align-items: center
    justify-content: space-between

  &__logo
    display: flex
    align-items: center
    max-height: 48px
    min-width: 28px
    img
      height: max-content
      margin-right: 12px

  &__actions
    display: flex
    align-items: center

    +breakpoint-max($large)
      justify-content: center
      flex-direction: column
      position: fixed
      z-index: z('modal')
      top: 0
      right: 0
      height: 100vh
      width: 100vw
      background-color: rgba($White, 0.96)
      +md-up
        width: 30vw
      &:not(.animated)
        visibility: hidden
    +lg-up
      animation: none

  &__cta
    margin-left: 24px

</style>
