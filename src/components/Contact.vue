<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface ContactObj {
    name: string,
    url: string,
    nick: string,
};

const contactArr = ref<ContactObj[]>([]);

onMounted(async () => {
    try {
        const response = await fetch("/api/contact", {
            method: "GET",
            mode: "same-origin",
            credentials: "same-origin"
        });
        const res = await response.json();
        contactArr.value = JSON.parse(res);
    } catch (err) {
        console.log(err)
    }
})

</script>

<template>
    <div class="card">
        <div class="ContentCard" v-for="content in contactArr">
            <a :href="content.url">
                <image :src="'../Icons/' + content.name" :alt="content.name" />
            </a>
            <p>{{ content.nick }}</p>
        </div>
    </div>
</template>