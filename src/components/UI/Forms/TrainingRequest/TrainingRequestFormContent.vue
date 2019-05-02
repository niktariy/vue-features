<template lang="pug">
  div
    template(v-if="step === 1")
      // step 1
      p
        | То, как быстро ты будешь обучаться, зависит от того, какой пакет ты выберешь
      br
      c-input(
        input-label="Выбранный курс"
        id="selected_course"
        :is-required="true"
        v-auto-focus
        placeholder-text="Выбранный курс"
        v-model="selectedCourse"
      )
    template(v-else)
      // step 2
      p
        | Осталось заполнить свои данные чтобы отправить заявку
      br
      c-input(
        input-label="имя"
        id="name"
        :is-required="true"
        :has-auto-focus="true"
        placeholder-text="имя"
        v-model="name"
      )
</template>

<script>
import BaseButton from '@/components/UI/BaseButton/BaseButton';
import { mapGetters } from 'vuex';

export default {
  name: 'TrainingRequestFormContent',
  components: {
    'c-button': BaseButton,
  },
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: '',
    };
  },
  computed: {
    availableCourses() {
      return this.$store.getters.getAvailableCourses;
    },
    selectedCourse() {
      return this.$store.getters.getSelectedCourse
    },
    courseById() {
      return this.$store.getters.getCourseById(this.selectedCourse.id)
    }
  }

};
</script>

<style lang="sass" scoped></style>
