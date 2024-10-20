<script setup lang="ts">
</script>

<template>
<router-view />
</template>
<script lang="ts">
import { setToken } from './services/api/config';
export default {
  created() {
    const token = localStorage.getItem('token');
    token && setToken(token);
  },
};
</script>
