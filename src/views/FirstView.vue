<script lang="ts" setup>
import { inject } from 'vue';
import { useMouse } from '../components/MouseMove';

const { x, y } = useMouse();
const i18n  = inject('i18n')
</script>

<template>
  First Mouse position is: {{ x }}, {{ y }}
  <div>{{ $translate('greetings.hello') }}</div>
  <div>{{ i18n.greetings.hello }}</div>
</template>