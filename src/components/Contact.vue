<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface ContactObj {
    name: string,
    link: string,
    nick: string,
    imageUrl: string,
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
        contactArr.value = res;
    } catch (err) {
        console.log(err)
    }
})

</script>

<template>
    <div class="card">
        <h3 v-if="contactArr.length === 0">Loading...</h3>
        <div v-else class="contactDiv">
            <div class="contactCard" v-for="contact in contactArr">
                <a :href="contact.link">
                    <img class="contactImage" :src="contact.imageUrl" :alt="contact.name" />
                </a>
                <p>{{ contact.nick }}</p>
            </div>
        </div>
    </div>
</template>