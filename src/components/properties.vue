<template>
    <div class="bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Properties</h2>
      <form @submit.prevent="addProperty">
          <div class="mb-4">
            <label for="propertyName" class="block text-sm font-medium text-gray-600">Property Name:</label>
            <input type="text" v-model="newProperty.name" required
                   class="mt-1 p-2 rounded border border-gray-300 w-full">
          </div>
          <div class="mb-4">
            <label for="propertyType" class="block text-sm font-medium text-gray-600">Property Type:</label>
            <select v-model="newProperty.type"
                    class="mt-1 p-2 rounded border border-gray-300 w-full">
              <option value="">Select Property Type</option>
              <option value="2-bedroom house">2-bedroom house</option>
              <option value="1-bedroom house">1-bedroom house</option>
              <option value="Single room">Single room</option>
              <option value="Bed-Sitter">Bed-Sitter</option>
            </select>
          </div>
          <button type="submit" @click="addProperty"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add Property</button>
        </form>

        <ul class="mt-4">
          <li v-for="(property, index) in properties" :key="property.id"
              class="mb-2 p-2 border rounded flex items-center justify-between">
            {{ property.name }} - {{ property.type }}
            <div>
              <button @click="editProperty(index)" class="text-blue-500 mr-2">Edit</button>
              <button @click="deleteProperty(index)" class="text-red-500">Delete</button>
            </div>
          </li>
        </ul>
        <div v-if="editMode" class="mt-4">
          <h2 class="text-2xl font-bold mb-2">Edit Property</h2>
          <form @submit.prevent="updateProperty">
            <div class="mb-4">
              <label for="editPropertyName" class="block text-sm font-medium text-gray-600">Property Name:</label>
              <input type="text" v-model="editedProperty.name" required
                     class="mt-1 p-2 rounded border border-gray-300 w-full">
            </div>
            <div class="mb-4">
              <label for="editPropertyType" class="block text-sm font-medium text-gray-600">Property Type:</label>
              <input type="text" v-model="editedProperty.type" required
                     class="mt-1 p-2 rounded border border-gray-300 w-full">
            </div>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Update</button>
            <button type="button" @click="cancelEdit" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">Cancel</button>
          </form>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProperty: {
          name: '',
          type: ''
        },
        editedProperty: {
          id: null,
          name: '',
          type: ''
        },
        properties: [],
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
  };
  </script>
  