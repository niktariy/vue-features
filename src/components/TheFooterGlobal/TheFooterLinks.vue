<template lang="pug">
  .footer-links(:class="className")
    .footer-links__title
      | {{listTitle}}
    ul.footer-links__list
      li(v-for="(item, index) in linksList" :key="index")
        a.footer-links__item.link.link--grey(:href="item.link" target="_blank")
          | {{item.name}}

</template>

<script>
export default {
  name: 'TheFooterLinks',
  props: {
    className: {
      type: String,
      default: '',
    },
    listTitle: {
      type: String,
      required: true,
    },
    linksList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
  .footer-links
    &, &__list
      display: flex
      flex-direction: column

    &__title
      margin-bottom: 16px
      font-weight: 800
      color: $footer__heading-color

    &__list li
      display: flex

    &__item
      padding: 2px 0 3px
      margin-bottom: 9px
      outline: none

</style>
