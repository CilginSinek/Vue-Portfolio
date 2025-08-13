<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PinnedRepos } from './repoType.ts';
import Repo from './Repo.vue'

const repos = ref<PinnedRepos[]>([])
onMounted(async () => {
    try {
        await fetch("/api/repos", {
            method: "GET",
            mode: "same-origin",
            credentials: "same-origin"
        }).then(response => response.json()).then((res) => repos.value = res)
    } catch (err) {
        console.log(err)
    }
})
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">Projelerim</h2>
            <p class="card-subtitle">Geliştirdiğim ve üzerinde çalıştığım açık kaynak projeler</p>
            <div class="title-decoration"></div>
        </div>
        
        <div v-if="repos.length === 0" class="loading">
            <div class="loading-spinner"></div>
            <p>Projeler yükleniyor...</p>
        </div>
        
        <div v-else class="reposDiv">
            <div v-for="(repo, index) in repos" :key="repo.repo" class="repo-wrapper">
                <Repo 
                    :owner="repo.owner" 
                    :repo="repo.repo" 
                    :link="repo.link" 
                    :image="repo.image" 
                    :language="repo.language"
                    :languageColor="repo.languageColor" 
                    :stars="repo.stars" 
                    :forks="repo.forks"
                    :index="index"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-header {
    text-align: center;
    margin-bottom: 40px;
}

.card-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 16px 0;
    background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin: 0 0 24px 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.title-decoration {
    width: 60px;
    height: 4px;
    background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
    margin: 0 auto;
    border-radius: 2px;
}

.loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: var(--text-secondary);
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-top: 3px solid var(--accent-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.reposDiv {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    width: 100%;
}

.repo-wrapper {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.repo-wrapper:nth-child(1) { animation-delay: 0.1s; }
.repo-wrapper:nth-child(2) { animation-delay: 0.2s; }
.repo-wrapper:nth-child(3) { animation-delay: 0.3s; }
.repo-wrapper:nth-child(4) { animation-delay: 0.4s; }
.repo-wrapper:nth-child(5) { animation-delay: 0.5s; }
.repo-wrapper:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media only screen and (max-width: 768px) {
    .card-title {
        font-size: 2rem;
    }
    
    .reposDiv {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }
}

@media only screen and (max-width: 480px) {
    .reposDiv {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
</style>