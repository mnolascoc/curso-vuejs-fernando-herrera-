<template>
  <h1 class="text-3xl font-bold underline">Mi Primera App</h1>
  <hr />
  <CounterDemo :value="1" />
  <CounterScript :value="2" />
  <CounterScript2 :value="3" />
</template>

<script lang="ts" setup>
import CounterDemo from './components/CounterDemo.vue';
import CounterScript from './components/CounterScript.vue';
import CounterScript2 from './components/counter-script/CounterScript2.vue';
</script>
