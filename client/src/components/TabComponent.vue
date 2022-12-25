<template>
  <nav>
    <div class="nav nav-tabs" role="tablist">
      <router-link v-for="tab in tabs" :to="tab.id" :class="(active === tab.id) ? 'nav-link active' : 'nav-link'" :id="'nav-tab-' + tab.id" data-bs-toggle="tab" :data-bs-target="'#tab-' + tab.id" type="button" role="tab" :aria-controls="'tab-' + tab.id" :aria-selected="active === tab.id">{{ tab.name }}</router-link>
    </div>
  </nav>
  <div class="tab-content">
    <div v-for="tab in tabs" :class="(active === tab.id) ? 'tab-pane fade show active' : 'tab-pane fade'" :id="'tab-' + tab.id" role="tabpanel" :aria-labelledby="'nav-tab-' + tab.id" tabindex="0">
      <component :is="tab.component" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabComponent",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      required: false
    }
  },
};
</script>

<style scoped>

</style>