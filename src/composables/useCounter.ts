import { ref, computed } from 'vue';

// si declaramos la variable aqui esto sería un gestor de estado y el valor se actualiza en todos los lugares donde se utiliza
//const counter = ref(4);

export const useCounter = (value: number) => {
  const counter = ref(value);
  const square = computed(() => counter.value * counter.value);

  const incrementOne = () => {
    counter.value += 1;
  };

  const decrementOne = () => {
    counter.value -= 1;
  };

  return { counter, square, incrementOne, decrementOne } as const;
};
