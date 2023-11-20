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

<script>
import topNavigationBar from './components/topNavigationBar.vue';
import baseDashboard from './components/baseDashboard.vue';
import properties from './components/properties.vue';
import propertyUnits from './components/propertyUnits.vue';
import store from 'store.js';

export default{

}

</script>


<style scoped>
</style>




