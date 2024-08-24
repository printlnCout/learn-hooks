<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <div>{{ state.count }}</div>
    <div>{{ books[0] }}</div>
    <div>{{ map.get('count') }}</div>
    <div>{{ object.id + 1 }}</div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const count = ref(0)
const state = reactive({ count })
console.log(state.count)
state.count++
console.log(state.count)
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1

const books = reactive([ref('Vue 3 Guide')])
const map = reactive(new Map([['count', ref(0)]]))

const object = { id: ref(1) }
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
