<template lang="pug">
  footer.l-footer
    .l-footer__wrapper.flex-grid
      .l-footer__copy
        | &copy; Veronika Novikova
      .l-footer__links
        the-footer-links(
          class-name="l-footer__links-list"
          list-title="Socials"
          :linksList="links.socials"
        )
        the-footer-links(
          class-name="l-footer__links-list"
          list-title="Code"
          :linksList="links.code"
        )
</template>

<script>
import TheFooterLinks from './TheFooterLinks';

export default {
  name: 'TheFooter',
  components: { TheFooterLinks },
  data() {
    return {
      links: {
        socials: [
          {
            name: 'Instagram',
            link: 'https://instagram.com/niktariy_dev/',
          },
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/developerstart/',
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/veronika-novikova/',
          },
        ],
        code: [
          {
            name: 'GitHub',
            link: 'https://github.com/niktariy/',
          },
          {
            name: 'Codepen',
            link: 'https://codepen.io/niktariy/',
          },
          {
            name: 'Medium',
            link: 'https://medium.com/@niktariy',
          },
        ],
      },
    };
  },
};
</script>

<style lang="sass" scoped>
  .l-footer
    font-size: 16px
    background-color: $footer__background
    color: $GhostWhite

    &__wrapper
      display: flex
      flex-direction: column
      align-items: flex-start
      padding: 48px 0 24px
      +sm-up
        flex-direction: row

    &__copy
      +xs-only
        order: 1
        margin: 48px 88px 0 0

    &__links
      display: flex

      +xs-only
        width: 100%
      +sm-up
        margin-left: auto

    &__links-list
      +xs-only
        width: 50%
      +sm-up
        margin-left: 88px
        margin-right: 24px

</style>
