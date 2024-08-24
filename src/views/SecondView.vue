<script lang="ts" setup>
import { useMouse } from '../components/MouseMove';

const { x, y } = useMouse();
</script>

<template>
  Second Mouse position is: {{ x }}, {{ y }}
</template>