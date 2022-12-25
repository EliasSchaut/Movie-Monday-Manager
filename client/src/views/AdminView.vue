<template>
  <CardComponent id="card_admin" header="Admin Panel">
    <TabComponent
      :tabs="[
      {
        id: 'settings',
        name: 'Settings',
        component: NotImplementedComponent
      },
      {
        id: 'users',
        name: 'Users',
        component: NotImplementedComponent
      },
      {
        id: 'movies',
        name: 'Movies',
        component: NotImplementedComponent
      },
      {
        id: 'history',
        name: 'History',
        component: NotImplementedComponent
      }]" />
  </CardComponent>
</template>

<script lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import TabComponent from "@/components/TabComponent.vue";
import NotImplementedComponent from "@/components/err/NotImplementedComponent.vue";

export default {
  name: "AdminView",
  computed: {
    NotImplementedComponent() {
      return NotImplementedComponent
    }
  },
  components: { NotImplementedComponent, TabComponent, CardComponent }
};
</script>

<style scoped>
#card_admin {
  width: min(1200px, 90vw);
  margin: 20px auto
}
</style>