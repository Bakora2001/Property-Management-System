// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default createStore({
  state: {
    properties: [],
    propertyUnits: [],
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
    editMode: false
  },
  mutations: {
    addProperty(state) {
      if (state.newProperty.type === '') {
        alert('Please select a property type.');
        return;
      }
      const newProperty = {
        id: Date.now(),
        name: state.newProperty.name,
        type: state.newProperty.type
      };
      state.properties.push(newProperty);
      state.newProperty.name = '';
      state.newProperty.type = '';
    },
    editProperty(state, index) {
      state.editMode = true;
      state.editedProperty.id = state.properties[index].id;
      state.editedProperty.name = state.properties[index].name;
      state.editedProperty.type = state.properties[index].type;
    },
    updateProperty(state) {
      const index = state.properties.findIndex(property => property.id === state.editedProperty.id);
      if (index !== -1) {
        state.properties[index].name = state.editedProperty.name;
        state.properties[index].type = state.editedProperty.type;
        state.editMode = false;
        state.editedProperty.id = null;
        state.editedProperty.name = '';
        state.editedProperty.type = '';
      }
    },
    deleteProperty(state, index) {
      state.properties.splice(index, 1);
    },
    cancelEdit(state) {
      state.editMode = false;
      state.editedProperty.id = null;
      state.editedProperty.name = '';
      state.editedProperty.type = '';
    },
    addPropertyUnit(state) {
      if (state.newPropertyUnit.unitNumber === '' || state.newPropertyUnit.unitType === '' ||
        state.newPropertyUnit.propertyId === '') {
        alert('Please fill out all fields.');
        return;
      }
      const property = state.properties.find(property => property.id === state.newPropertyUnit.propertyId);
      if (!property) {
        alert('Invalid property selection for the unit.');
        return;
      }
      const newPropertyUnit = {
        id: Date.now(),
        unitNumber: state.newPropertyUnit.unitNumber,
        unitType: state.newPropertyUnit.unitType,
        propertyId: state.newPropertyUnit.propertyId,
        propertyName: property.name
      };
      state.propertyUnits.push(newPropertyUnit);
      state.newPropertyUnit.unitNumber = '';
      state.newPropertyUnit.unitType = '';
      state.newPropertyUnit.propertyId = '';
    },
  },
  actions: {
    async addProperty({ commit, state }) {
      try {
        const response = await api.post('/properties', state.newProperty);
        commit('addProperty', response.data);
        // ... other logic
      } catch (error) {
        console.error('Error adding property:', error);
      }
    },
    async addPropertyUnit({ commit, state }) {
      try {
        const response = await api.post('/propertyUnits', state.newPropertyUnit);
        commit('addPropertyUnit', response.data);
        // ... other logic
      } catch (error) {
        console.error('Error adding property unit:', error);
      }
    },
    async fetchProperties({ commit }) {
      try {
        const response = await api.get('/properties');
        commit('setProperties', response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    },
    async fetchPropertyUnits({ commit }) {
      try {
        const response = await api.get('/propertyUnits');
        commit('setPropertyUnits', response.data);
      } catch (error) {
        console.error('Error fetching property units:', error);
      }
    },
    addProperty({ commit }) {
      commit('addProperty');
    },
    editProperty({ commit }, index) {
      commit('editProperty', index);
    },
    updateProperty({ commit }) {
      commit('updateProperty');
    },
    deleteProperty({ commit }, index) {
      commit('deleteProperty', index);
    },
    cancelEdit({ commit }) {
      commit('cancelEdit');
    },
    addPropertyUnit({ commit }) {
      commit('addPropertyUnit');
    },
  },
  getters: {
    getProperties: state => state.properties,
    getPropertyUnits: state => state.propertyUnits,
    getEditMode: state => state.editMode,
    getEditedProperty: state => state.editedProperty,
    getNewProperty: state => state.newProperty,
    getNewPropertyUnit: state => state.newPropertyUnit,
  },
});


