<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PinnedRepos } from './api';
import Repo from './Repo.vue'

const repos = ref<PinnedRepos[]>([])
onMounted(async () => {
    try {
        await fetch("/api").then(response=>response.json()).then((res)=>repos.value = res)
    } catch (err) {
        console.log(err)
    }
})
</script>

<template>
    <div class="card">
        <div class="repos" v-for="repon in repos" :key="repon.repo">
            <Repo 
                :owner="repon.owner" 
                :repo="repon.repo" 
                :link="repon.link" 
                :image="repon.image" 
                :language="repon.language"
                :languageColor="repon.languageColor" 
                :stars="repon.stars" 
                :forks="repon.forks" 
            />
        </div>
    </div>
</template>