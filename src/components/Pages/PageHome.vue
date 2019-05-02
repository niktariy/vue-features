<template lang="pug">
  section
    <!--button(@click="showModal")-->
    template(v-if="requestSubmitted")
      training-request-accept-modal

    training-request-modal(v-else)
</template>

<script>
import TrainingRequestModal from '@/components/UI/Forms/TrainingRequest/TrainingRequestModal';
import TrainingRequestAcceptModal from "../UI/Forms/TrainingRequest/TrainingRequestAcceptModal";
import { mapGetters } from 'vuex';

export default {
  name: 'PageHome',
  components: {
    TrainingRequestAcceptModal,
    TrainingRequestModal,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  computed: mapGetters([
      'requestSubmitted'
  ]),
  methods: {
    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>

<style lang="sass" scoped></style>
