<script setup lang="ts">
import { onMounted, ref } from 'vue';

const aboutArray = ref<string[]>([]);
onMounted(async () => {
    await fetch(`/api/about`,{
        method:"GET",
        mode:"same-origin",
        credentials: "same-origin"
    }).then(response => response.json()).then(res => {
        aboutArray.value = res.split("\n");
    }).catch(err => aboutArray.value = [err.message])
})

</script>

<template>
    <div class="card aboutCard">
        <div v-if="aboutArray.length" class="aboutText">
            <p v-for="about in aboutArray">
                {{ about }}
            </p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>