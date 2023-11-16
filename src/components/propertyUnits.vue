<!-- PropertyUnits.vue -->
<template>
  <div class="bg-white p-6 rounded shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Property Units</h2>
    <form @submit.prevent="addPropertyUnit">
      <div class="mb-4">
        <label for="unitNumber" class="block text-sm font-medium text-gray-600">Unit Number:</label>
        <input type="text" v-model="newPropertyUnit.unitNumber" required class="mt-1 p-2 rounded border border-gray-300 w-full">
      </div>
      <div class="mb-4">
        <label for="unitType" class="block text-sm font-medium text-gray-600">Unit Type:</label>
        <select v-model="newPropertyUnit.unitType" class="mt-1 p-2 rounded border border-gray-300 w-full">
          <option value="">Select Unit Type</option>
          <option value="A1">A1</option>
          <option value="B3">B3</option>
          <option value="B6">B6</option>
          <option value="C7">C7</option>
          <option value="E8">E8</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="unitProperty" class="block text-sm font-medium text-gray-600">Belongs to Property:</label>
        <select v-model="newPropertyUnit.propertyId" class="mt-1 p-2 rounded border border-gray-300 w-full">
          <option value="">Select Property</option>
          <option v-for="(property, index) in properties" :key="index" :value="property.id">{{ property.name }}</option>
        </select>
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add Unit</button>
    </form>

    <ul class="mt-4">
      <li v-for="(unit, index) in propertyUnits" :key="unit.id" class="mb-2 p-2 border rounded flex items-center justify-between">
        {{ unit.unitNumber }} - {{ unit.unitType }} - Belongs to Property: {{ unit.propertyName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    propertyUnits() {
      return this.$store.getters.getPropertyUnits;
    },
    properties() {
      return this.$store.getters.getProperties;
    },
    newPropertyUnit() {
      return this.$store.getters.getNewPropertyUnit;
    },
  },
  methods: {
    addPropertyUnit() {
      this.$store.dispatch('addPropertyUnit');
    },
  },
};
</script>
