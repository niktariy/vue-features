<template lang="pug">
  base-modal(title="Оформление заявки")

    template(v-slot:body)
      form(@submit.prevent="goToNextStep")
        training-request-form-content(:step="requestStep")

    template(v-slot:footer)
      .btn-group
        template(v-if="requestStep > 1")
          c-button(
            label="Назад"
            modifier="outline"
            @onClick="goBack"
          )
        c-button(
          type="submit"
          label="Далее"
          @onClick="goToNextStep"
        )
</template>

<script>
  import BaseButton from '@/components/UI/BaseButton/BaseButton';
  import BaseModal from '@/components/UI/BaseModal/BaseModal';
  import TrainingRequestFormContent from "./TrainingRequestFormContent";

  export default {
    name: "TrainingRequestModal",
    components: {
      'c-button': BaseButton,
      BaseModal,
      TrainingRequestFormContent
    },
    computed: {
      requestStep() {
        return this.$store.state.trainingRequest.requestStep;
      }
    },
    methods: {
      goBack() {
        this.$store.commit('DECREMENT_STEP');
      },
      goToNextStep() {
        this.$store.commit('INCREMENT_STEP');
      },
    },
  }
</script>

<style scoped></style>