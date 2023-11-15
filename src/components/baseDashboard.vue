<template>

    <div>
        <div class="ring- rounded-md h-[400px] w-full" >
            <div class="flex flex-col gap4 w-full">
               <div class="ring-1 rounded-md px-4 ">
                <slot>

                </slot>
               </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'baseDashboard',
    data() {
        return {
            
        }
    }
 }</script>

<style></style>