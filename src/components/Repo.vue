<script setup lang="ts">
import {PinnedRepos} from './repoType.ts'

interface Props extends PinnedRepos {
    index?: number
}

const props = defineProps<Props>()
</script>

<template>
    <div class="repo">
        <div class="repo-header">
            <div class="repo-title-section">
                <a class="repoLink" :href="props.link" target="_blank" rel="noopener noreferrer">
                    {{ props.repo }}
                </a>
                <div class="repo-stats">
                    <div class="stat-item" v-if="props.stars && props.stars !== '0'">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>{{ props.stars }}</span>
                    </div>
                    <div class="stat-item" v-if="props.forks && props.forks !== '0'">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 3a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0V3zm12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M12 1a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0V3a2 2 0 0 1 2-2z"/>
                        </svg>
                        <span>{{ props.forks }}</span>
                    </div>
                </div>
            </div>
            <div class="external-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </div>
        </div>
        
        <div class="repo-description">
            <p>Bu projeyi {{ props.owner }} tarafından geliştirilmiştir.</p>
        </div>
        
        <div class="repoFooter">
            <div class="language-info">
                <div class="repoColor" :style="{ 'background-color': props.languageColor }"></div>
                <span class="language-name">{{ props.language }}</span>
            </div>
            <div class="repo-type">
                <span>Public</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.repo {
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    min-height: 160px;
    padding: 24px;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.repo::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
    transition: left 0.6s ease;
}

.repo:hover::before {
    left: 100%;
}

.repo:hover {
    transform: translateY(-5px);
    background: var(--bg-hover);
    border-color: var(--accent-primary);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.3);
}

.repo-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.repo-title-section {
    flex: 1;
}

.repoLink {
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    line-height: 1.4;
    display: block;
    margin-bottom: 8px;
}

.repoLink:hover {
    color: var(--accent-primary);
}

.repo-stats {
    display: flex;
    gap: 16px;
    align-items: center;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
}

.stat-item svg {
    color: var(--text-muted);
}

.external-link {
    color: var(--text-muted);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(10px);
}

.repo:hover .external-link {
    opacity: 1;
    transform: translateX(0);
    color: var(--accent-primary);
}

.repo-description {
    flex: 1;
    margin-bottom: 20px;
}

.repo-description p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}

.repoFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--border-color);
}

.language-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.repoColor {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    flex-shrink: 0;
}

.language-name {
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
}

.repo-type {
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    background: var(--bg-card);
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
}

@media only screen and (max-width: 480px) {
    .repo {
        padding: 20px;
        min-height: 140px;
    }
    
    .repoLink {
        font-size: 1.1rem;
    }
    
    .repo-stats {
        gap: 12px;
    }
    
    .repoFooter {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>