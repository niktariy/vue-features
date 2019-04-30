<template lang="pug">
  .tab
    nav.tab__list(id="header-nav" :data-count="getItemsLength")
      router-link.tab__item(
        v-for="item in menuItems"
        :to="item.linkTo"
        :key="item.id"
      ) {{ item.name }}
</template>

<script>
export default {
  name: 'TheTabs',
  data() {
    return {
      linksCountVarCSS: '--items-count',
      menuItems: [
        {
          name: 'About',
          linkTo: '/about',
        },
      ],
    };
  },
  computed: {
    getItemsLength() {
      return this.menuItems.length;
    },
  },
};
</script>

<style scoped lang="sass">

.tab
  &__list
    display: flex
    flex-direction: column
    +lg-up
      flex-direction: row

  &__item
    $spacing: 8px

    margin: $spacing ($spacing * 2)
    padding: $spacing
    align-self: center
    font-size: 20px
    font-weight: 500
    color: $text-color--regular
    +lg-up
      margin: 0 ($spacing * 2)
      font-size: 16px

    +cont
      // mixin for after content
      bottom: 0
      width: calc(100% - #{$spacing * 2})
      height: 0
      transition: all 0.2s linear

    &:hover, &.is-current
      &::after
        height: 2px
        background-color: $primaryDark

    &:focus:not(.is-current)
      &::after
        height: 4px
        background-color: $secondaryDark

</style>
