<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <!-- <div>
      <button @click="incrementOne()">+1</button>
      <button @click="decrementOne()">-1</button>
    </div> -->
  </section>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(props){
    const counter = ref(props.value);
    const square = computed(() => counter.value * counter.value);

    return {counter, square}
  }
})

// interface Props{
//   value:number,
// }

// const props = defineProps<Props>();

// const incrementOne = () => {
//   counter.value += 1;
// };

// const decrementOne = () => {
//   counter.value -= 1;
// };
</script>
