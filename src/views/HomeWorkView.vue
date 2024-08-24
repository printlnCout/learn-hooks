<template>
  <div>
    <div>{{ clickValue }}</div> 
    <p>Has publish books: </p>
    <span>{{ publishBooksMessage }}</span>
    <li v-for="bookItem in author.books" :key="bookItem">
      <span>{{ bookItem }}</span>
    </li>
    <li v-for="(item, value) in author" :key="value">
      <span>{{ item }} : {{ value }}</span>
    </li>
    <button @click="modifyDeep">modifyDeep</button>
    <button @click="addOne">show box</button>
    <button @click="addX">addX</button>
    <button @click="addY">addY</button>
    <!-- <button @click="openBox">show box</button>
    <template v-if="showBox">
      <span>Hello</span>
    </template> -->
  </div>
</template>

<script lang="ts" setup>
// import { before } from 'node:test';
import { computed, onMounted, reactive, ref, watch } from 'vue'

console.log('in setup');

const x = ref(0)
const y = ref(0)

const addX = () => { x.value++ }
const addY = () => { y.value++ }

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

const author = reactive({
  name: 'John',
  books: [
    'vue 2',
    'vue 3',
    'vue 4',
  ],
});
const deepValue = reactive({
  name: {
    bigName: 'jake',
  },
  address: {
    curr: 'happy',
  },
});
const deepValueRef = ref({
  name: {
    bigName: 'jake',
  },
  address: {
    curr: 'happy',
  },
});
watch(() => deepValue.name.bigName, (newValue, oldValue) => {
  console.log(`a deepValue old is ${JSON.stringify(oldValue)} and new is ${JSON.stringify(newValue)}`);
});
watch(deepValueRef, (newValue, oldValue) => {
  console.log(`a ref deepValue old is ${JSON.stringify(oldValue)} and new is ${JSON.stringify(newValue)}`);
}, { deep: true });

watch(() => deepValue, (newValue, oldValue) => {
  console.log(`b deepValue old is ${JSON.stringify(oldValue)} and new is ${JSON.stringify(newValue)}`);
});

watch(deepValue, (newValue, oldValue) => {
  console.log(`deepValue old is ${JSON.stringify(oldValue)} and new is ${JSON.stringify(newValue)}`);
});
const modifyDeep = () => {
  deepValue.name.bigName += 'c';
  deepValueRef.value.name.bigName+='o'
}
const clickValue = reactive({ count: 0 });
const addOne = () => { ++clickValue.count; ++x.value }
// const showBox = ref(true);
// const openBox = () => {
//   showBox.value = !showBox.value;
// };
const publishBooksMessage = computed(() => {
  return author.books.length > 0 ? 'YES' : 'NO';
})

watch(() => clickValue.count, (newValue, oldValue) => {
  console.log(`old is ${oldValue} and new is ${newValue}`);
});
</script>
