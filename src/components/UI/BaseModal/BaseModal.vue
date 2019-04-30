<template lang="pug">
  .modal(
    role="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription"
  )
    //- https://habr.com/ru/post/350232/ прочитать подробнее
    .modal__content
      header.modal__heading
        slot(name="heading")
          h2 {{title}}
        button.modal__close(
          type="button"
          aria-label="Close modal"
          @click="closeModal"
        )
          | &times;
      div.modal__body
        slot(name="body")
          | Body text
      footer.modal__actions
        slot(name="footer")
          button.modal__button(
            type="button"
            aria-label="Close modal"
            @click="closeModal"
          )
            | OK
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Modal title',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="sass" scoped>
.modal
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  width: 100vw
  height: 100vh
  top: 0
  left: 0
  &::after
    content: ''
    width: 100vw
    height: 100vh
    position: fixed
    z-index: z('modal')
    top: 0
    left: 0
    background-color: rgba($MineShaft, 0.24)
  &__content
    padding: 24px 16px
    background-color: $White
    border-radius: 8px
    z-index: z('modal') + 10
  &__heading
    display: flex
    justify-content: space-between
    margin-bottom: 32px
  &__close
    width: 32px
    height: 32px
    border-radius: 2px
    background: $White
    &:hover
      background: $Gallery

</style>
