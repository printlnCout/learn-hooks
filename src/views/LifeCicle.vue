<template>
  <span>asd</span>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'

export default defineComponent({
  setup() {
    console.log('in setup');
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
  },
  beforeCreate() {
    console.log('in beforeCreate');
  },
  created() {
    console.log('in created');
  },
  beforeMount() {
    console.log('in beforeMount');
  },
  mounted() {
    console.log('in mounted');
  },
})
</script>
