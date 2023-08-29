<script setup lang="ts">
import {PinnedRepos} from './repoType.ts'
const props = defineProps<PinnedRepos>()
</script>

<template>
    <div class="repo">
        <div>
            <a class="repoLink" :href="props.link">{{props.repo}}</a>
        </div>
        <div class="repoFooter" >
            <div class="repoColor" :style="{ 'background-color':props.languageColor }"></div>
            <p>{{ props.language }}</p>
        </div>
    </div>
</template>