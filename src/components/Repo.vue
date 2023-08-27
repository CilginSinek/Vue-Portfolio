<script setup lang="ts">
import {PinnedRepos} from './api'
const props = defineProps<PinnedRepos>()
</script>

<template>
    <div class="Repo">
        <div>
            <h4><a :href="props.link">{{props.repo}}</a></h4>
        </div>
        <div>
            <div>
                <p>{{ props.languageColor }}</p>
                <p>{{ props.language }}</p>
            </div>
        </div>
    </div>
</template>