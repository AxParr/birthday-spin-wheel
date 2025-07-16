<script setup>
  import { Wheel } from "spin-wheel";
  import { ref, onMounted, onUpdated } from 'vue'

  const props = defineProps({
    numItems: {
      type: Number,
    }
  });

  const wheelContainer = ref(null);
  let wheel = null;

  const workshopIdeas = [
    'pottery workshop',
    'jewelry workshop',
    'cooking workshop',
    'your choice',
  ];

  const wheelProps = {
    items: [],
    itemLabelRadiusMax: 0.4,
  };

  for (let i = 0; i < props.numItems && i < workshopIdeas.length; i++) {
    wheelProps.items.push({
      label: workshopIdeas[i],
    });
  }

  onMounted(() => {
    wheel = new Wheel(wheelContainer.value, wheelProps);
  })

  onUpdated(() => {
    if (props.numItems < workshopIdeas.length) {
      wheelProps.items.push({
        label: workshopIdeas[props.numItems],
      });
      wheel.items = wheelProps.items;
    }
  })
</script>

<template>
  <div class="wheel-wrapper" ref="wheelContainer"></div>
</template>

<style scoped>
</style>