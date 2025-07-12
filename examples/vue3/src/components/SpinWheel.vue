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

  const dateIdeas = [
    'Dinner & Movie',
    'Coffee Date',
    'Walk in the Park',
    'Museum Visit',
    'Cooking Together',
    'Game Night',
    'Concert',
    'Beach Day',
    'Wine Tasting',
    'Escape Room',
    'Dancing',
    'Hiking',
    'Bowling',
    'Karaoke',
    'Art Class',
    'Spa Day',
    'Mini Golf',
    'Arcade',
    'Bookstore Date',
    'Farmers Market',
  ];

  const wheelProps = {
    items: [],
    itemLabelRadiusMax: 0.4,
  };

  for (let i = 0; i < props.numItems && i < dateIdeas.length; i++) {
    wheelProps.items.push({
      label: dateIdeas[i],
    });
  }

  onMounted(() => {
    wheel = new Wheel(wheelContainer.value, wheelProps);
  })

  onUpdated(() => {
    if (props.numItems < dateIdeas.length) {
      wheelProps.items.push({
        label: dateIdeas[props.numItems],
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