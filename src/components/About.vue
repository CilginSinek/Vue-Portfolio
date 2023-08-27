<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VueMarkdown from 'markdown-vue';

const about = ref<string>("");
onMounted(async () => {
    await fetch(`/api/about`,{
        method:"GET",
        mode:"same-origin",
        credentials: "same-origin"
    }).then(response => response.json()).then(res => {
        about.value = res
    }).catch(err => about.value = err.message)
})

</script>

<template>
    <div class="card">
        <VueMarkdown :source="about ? about : '#Loading...'" />
    </div>
</template>