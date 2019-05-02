<template lang="pug">
  base-modal(title="Благодарю за ответ.")
    template(v-slot:body)
      p
        | Я свяжусь с вами по e-mail в течение 30 минут
</template>

<script>
  import BaseModal from '@/components/UI/BaseModal/BaseModal';

  export default {
    name: "TrainingRequestAcceptModal",
    components: {
      BaseModal,
    },
  }
</script>

<style scoped></style>