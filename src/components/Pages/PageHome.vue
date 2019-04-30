<template lang="pug">
  section
    button(@click="showModal")
    base-modal(title="Welcome")

</template>

<script>
import BaseModal from '../UI/BaseModal/BaseModal';

export default {
  name: 'PageHome',
  components: {
    BaseModal,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>

<style lang="sass" scoped></style>
