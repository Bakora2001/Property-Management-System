<template>
    <div class="bg-white p-6 rounded shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Property Units</h2>
        <form @submit.prevent="addPropertyUnit">
          <div class="mb-4">
            <label for="unitNumber" class="block text-sm font-medium text-gray-600">Unit Number:</label>
            <input type="text" v-model="newPropertyUnit.unitNumber" required
                   class="mt-1 p-2 rounded border border-gray-300 w-full">
          </div>
          <div class="mb-4">
            <label for="unitType" class="block text-sm font-medium text-gray-600">Unit Type:</label>
            <select v-model="newPropertyUnit.unitType"
                    class="mt-1 p-2 rounded border border-gray-300 w-full">
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
            <select v-model="newPropertyUnit.propertyId"
                    class="mt-1 p-2 rounded border border-gray-300 w-full">
              <option value="">Select Property</option>
              <option v-for="(property, index) in properties" :key="index" :value="property.id">{{ property.name }}</option>
            </select>
          </div>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add Unit</button>
        </form>
        <ul class="mt-4">
          <li v-for="(unit, index) in propertyUnits" :key="unit.id"
              class="mb-2 p-2 border rounded flex items-center justify-between">
            {{ unit.unitNumber }} - {{ unit.unitType }} - Belongs to Property: {{ unit.propertyName }}
          </li>
        </ul>
      </div>
 
</template>
<script>

  export default{
    data() {
    return {
      newPropertyUnit: {
        unitNumber: '',
        unitType: '',
        propertyId: ''
      },
      newProperty: {
      name: '',
      type: ''
    },
      properties: [],
      propertyUnits: [],
      editMode: false
    };
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
      cancelEdit() {
        this.editMode = false;
        this.editedProperty.id = null;
        this.editedProperty.name = '';
        this.editedProperty.type = '';
      }
    }
};
</script>

<style>

</style>

<!-- new Vue({
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
    } -->