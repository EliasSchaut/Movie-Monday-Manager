<template>
  <nav>
    <div class="nav nav-tabs" role="tablist">
      <button  v-for="tab in tabs" class="nav-link" :id="'nav-tab-' + tab.id" data-bs-toggle="tab" :data-bs-target="'#tab-' + tab.id" type="button" role="tab" :aria-controls="'tab-' + tab.id" aria-selected="true">{{ tab.name }}</button>
    </div>
  </nav>
  <div class="tab-content">
    <div v-for="tab in tabs" class="tab-pane fade" :id="'tab-' + tab.id" role="tabpanel" :aria-labelledby="'nav-tab-' + tab.id" tabindex="0">
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
  }
};
</script>

<style scoped>

</style>