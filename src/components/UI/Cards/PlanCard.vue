<template lang="pug">
  base-card(
    :item-data="itemData"
    class-name="plan-card"
  )
    template(slot="card-items")
      .plan-card__list
        .plan-card__list-item(
          v-for="listItem in itemData.listItems"
          :class="{'is-disabled': listItem.disabled}"
        )
          | {{listItem.text}}
    template(slot="card-button")
      button
        | Хочу
</template>

<script>
import BaseCard from './BaseCard';

export default {
  name: 'PlanCard',
  components: {
    BaseCard,
  },
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.plan-card
  &__list-item
    @extend %card-list-item-style

</style>
