import { EventBus } from '@/services/EventBus';

const ANIMATED_CLASS = 'animated';
const TABS_CLASS_OPENED = 'slideInRight';
const TABS_CLASS_CLOSED = 'slideOutRight';
const BURGER_CLASS_OPENED = 'is-opened';

export default {
  mounted() {
    EventBus.$on('toggle_menu', () => {
      const tabList = document.getElementById('header-nav');
      const tabListClasses = tabList.classList;
      const burger = document.querySelectorAll('.burger')[0];

      if (!tabListClasses.contains(TABS_CLASS_OPENED)) {
        document.documentElement.style.overflow = 'hidden';
        burger.classList.add(BURGER_CLASS_OPENED);
        tabListClasses.remove(TABS_CLASS_CLOSED);
        tabListClasses.add(ANIMATED_CLASS, TABS_CLASS_OPENED);
        return;
      }

      document.documentElement.style.overflow = 'auto';
      burger.classList.remove(BURGER_CLASS_OPENED);
      tabListClasses.add(TABS_CLASS_CLOSED);
      tabListClasses.remove(TABS_CLASS_OPENED);
    });
  },
};
