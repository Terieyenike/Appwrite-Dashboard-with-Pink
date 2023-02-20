<template>
  <user-info />
  <medical-details />
  <patient-info />
</template>

<script setup>
import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';

useHead({
  title: 'Medications Dashboard',
});
</script>
