<template>
  <div class="container">
    <div>
      <h2 class="eyebrow-heading-2">Medication History</h2>
      <ul class="list" v-for="medication in medications" :key="medication.$id">
        <li
          class="list-item"
          v-for="item in medication.medicationHistory"
          :key="item.$id">
          <span class="icon-arrow-circle-right" aria-hidden="true"></span>
          <span class="text">{{ item }}</span>
        </li>
        <li class="list-item"></li>
      </ul>
    </div>

    <div>
      <h2 class="eyebrow-heading-2">Upcoming Doses</h2>
      <ul class="list" v-for="item in medications" :key="item.$id">
        <li class="list-item">
          <span class="text u-bold">Check in:</span>
          {{ item.date.slice(0, 10) }}
        </li>
        <li class="list-item">
          <span class="text u-bold">Doctor to see:</span>
          {{ item.nameOfDoctor }}
        </li>
        <li class="list-item">
          <span class="text u-bold">Shot:</span>
          {{ item.typeOfDose }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getList } from '@/utils';

const medications = ref(null);

onMounted(() => {
  getList.then(
    function (response) {
      medications.value = response.documents;
      console.log(medications.value);
      // console.log(response.documents);
    },
    function (error) {
      console.log(error); // Failure
    }
  );
});
</script>
