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
        contactArr.value = res;
    } catch (err) {
        console.log(err)
    }
})

</script>

<template>
    <div class="card">
        <div class="contactCard" v-for="contact in contactArr">
            <a :href="contact.url">
                <image class="contactImage" :src="'../Icons/' + contact.name + '.png'" :alt="contact.name" />
            </a>
            <p>{{ contact.nick }}</p>
        </div>
    </div>
</template>