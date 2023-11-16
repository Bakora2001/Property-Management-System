<<<<<<< HEAD
<template>
    <topNavigationBar/>
    <baseDashboard>
    <div class="flex flex-col md:flex md:flex-row gap-8">
        <div class="w-[400px]">
            <properties/>
        </div>
        <div class=" w-[400px]">
            <propertyUnits/>
        </div>
    </div>
    </baseDashboard>
</template>

<script setup>
import topNavigationBar from './components/topNavigationBar.vue';
import baseDashboard from './components/baseDashboard.vue';
import properties from './components/properties.vue';
import propertyUnits from './components/propertyUnits.vue';

</script>


<style scoped>
</style>
=======
<!-- <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Property Management System</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-400">

  <p class="text-4xl text-center pb-8 pt-4">Property Management System</p>
  <div id="app" class="pl-12">
    <div>
      <h2>Properties</h2>
      <form @submit.prevent="addProperty">
        <label for="propertyName">Property Name:</label>
        <input type="text" v-model="newProperty.name" required>
        <label for="propertyType">Property Type:</label>
        <select v-model="newProperty.type">
          <option value="">Select Property Type</option>
          <option value="2-bedroom house">2-bedroom house</option>
          <option value="1-bathroom house">1-bathroom house</option>
        </select>
        <button type="submit">Add Property</button>
      </form>
      <ul>
        <li v-for="(property, index) in properties" :key="property.id">
          {{ property.name }} - {{ property.type }}
          <button @click="editProperty(index)">Edit</button>
          <button @click="deleteProperty(index)">Delete</button>
        </li>
      </ul>
      <div v-if="editMode">
        <h2>Edit Property</h2>
        <form @submit.prevent="updateProperty">
          <label for="editPropertyName">Property Name:</label>
          <input type="text" v-model="editedProperty.name" required>
          <label for="editPropertyType">Property Type:</label>
          <input type="text" v-model="editedProperty.type" required>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>

    <div>
      <h2>Property Units</h2>
      <form @submit.prevent="addPropertyUnit">
        <label for="unitNumber">Unit Number:</label>
        <input type="text" v-model="newPropertyUnit.unitNumber" required>
        <label for="unitType">Unit Type:</label>
        <select v-model="newPropertyUnit.unitType">
          <option value="">Select Unit Type</option>
          <option value="2br">2 Bedrooms</option>
          <option value="1br">1 Bedroom</option>
        </select>
        <label for="unitProperty">Belongs to Property:</label>
        <select v-model="newPropertyUnit.propertyId">
          <option value="">Select Property</option>
          <option v-for="(property, index) in properties" :key="index" :value="property.id">{{ property.name }}</option>
        </select>
        <button type="submit">Add Unit</button>
      </form>
      <ul>
        <li v-for="(unit, index) in propertyUnits" :key="unit.id">
          {{ unit.unitNumber }} - {{ unit.unitType }} - Belongs to Property: {{ unit.propertyName }}
        </li>
      </ul>
    </div>

    <div>
      <h2>List of Houses and Properties</h2>
      <ul>
        <li v-for="(property, index) in properties" :key="property.id">
          <strong>{{ property.name }} - {{ property.type }}</strong>
          <ul>
            <li v-for="(unit, unitIndex) in propertyUnits" :key="unit.id">
              <span v-if="unit.propertyId === property.id">{{ unit.unitNumber }} - {{ unit.unitType }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script src="app.js"></script>
</body>
</html>

<script>
  new Vue({
  el: '#app',
  data: {
    newProperty: {
      name: '',
      type: ''
    },
    editedProperty: {
      id: null,
      name: '',
      type: ''
    },
    newPropertyUnit: {
      unitNumber: '',
      unitType: '',
      propertyId: ''
    },
    properties: [],
    propertyUnits: [],
    editMode: false
  },
  methods: {
    addProperty() {
      if (this.newProperty.type === '') {
        alert('Please select a property type.');
        return;
      }

      const newProperty = {
        id: Date.now(),
        name: this.newProperty.name,
        type: this.newProperty.type
      };
      this.properties.push(newProperty);
      this.newProperty.name = '';
      this.newProperty.type = ''; 
    },
    addPropertyUnit() {
      if (this.newPropertyUnit.unitNumber === '' || this.newPropertyUnit.unitType === '' || 
      this.newPropertyUnit.propertyId === '') {
        alert('Please fill out all fields.');
        return;
      }
      const property = this.properties.find(property => property.id === this.newPropertyUnit.propertyId);
      if (!property) {
        alert('Invalid property selection for the unit.');
        return;
      }

      const newPropertyUnit = {
        id: Date.now(),
        unitNumber: this.newPropertyUnit.unitNumber,
        unitType: this.newPropertyUnit.unitType,
        propertyId: this.newPropertyUnit.propertyId,
        propertyName: property.name
      };
      this.propertyUnits.push(newPropertyUnit);
      this.newPropertyUnit.unitNumber = '';
      this.newPropertyUnit.unitType = '';
      this.newPropertyUnit.propertyId = '';
    },
    editProperty(index) {
      this.editMode = true;
      this.editedProperty.id = this.properties[index].id;
      this.editedProperty.name = this.properties[index].name;
      this.editedProperty.type = this.properties[index].type;
    },
    updateProperty() {
      const index = this.properties.findIndex(property => property.id === this.editedProperty.id);
      if (index !== -1) {
        this.properties[index].name = this.editedProperty.name;
        this.properties[index].type = this.editedProperty.type;
        this.cancelEdit();
      }
    },
    deleteProperty(index) {
      this.properties.splice(index, 1);
    },
    cancelEdit() {
      this.editMode = false;
      this.editedProperty.id = null;
      this.editedProperty.name = '';
      this.editedProperty.type = '';
    }
  }
});
</script> -->
>>>>>>> bf7c23c1d99f058b0a225b42aa76fc200782b862
