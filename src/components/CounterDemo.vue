<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <div>
      <button class="btn" @click="incrementOne()">+1</button>
      <button class="btn" @click="decrementOne()">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props{
  value:number,
}

const props = defineProps<Props>();

// invoca a un composable
const {counter, square, incrementOne, decrementOne  } = useCounter(20);
//import { computed, ref } from 'vue';

// const props = defineProps({
//   value: {
//     type: Number,
//     required:true
//   }
// });

// const counter = ref(props.value);
// const square = computed(() => counter.value * counter.value);

// const incrementOne = () => {
//   counter.value += 1;
// };

// const decrementOne = () => {
//   counter.value -= 1;
// };
</script>

<style scoped>
  .btn {
    @apply p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2
  }
</style>