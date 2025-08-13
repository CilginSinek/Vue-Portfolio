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
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">Hakkımda</h2>
            <div class="title-decoration"></div>
        </div>
        
        <div v-if="aboutArray.length === 0" class="loading">
            <div class="loading-spinner"></div>
            <p>Yükleniyor...</p>
        </div>
        
        <div v-else class="aboutContent">
            <div class="aboutText">
                <p v-for="(about, index) in aboutArray" :key="index" class="about-paragraph">
                    {{ about }}
                </p>
            </div>
            
            <div class="skills-section">
                <h3 class="skills-title">Teknolojiler</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon">�</div>
                        <span>Python</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">⚡</div>
                        <span>JavaScript</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">⚛️</div>
                        <span>Electron</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">�🚀</div>
                        <span>Express</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">📘</div>
                        <span>TypeScript</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">⚛️</div>
                        <span>React</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">💚</div>
                        <span>Vue.js</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🔤</div>
                        <span>C</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🍃</div>
                        <span>MongoDB</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🐘</div>
                        <span>PostgreSQL</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">�</div>
                        <span>Golang</span>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🐧</div>
                        <span>Linux</span>
                    </div>
                </div>
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

.aboutContent {
    display: grid;
    gap: 40px;
}

.aboutText {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.1rem;
}

.about-paragraph {
    margin: 0 0 20px 0;
    color: var(--text-secondary);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.about-paragraph:nth-child(1) { animation-delay: 0.1s; }
.about-paragraph:nth-child(2) { animation-delay: 0.2s; }
.about-paragraph:nth-child(3) { animation-delay: 0.3s; }
.about-paragraph:nth-child(4) { animation-delay: 0.4s; }
.about-paragraph:nth-child(5) { animation-delay: 0.5s; }

.about-paragraph:last-child {
    margin-bottom: 0;
}

.skills-section {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 30px;
    position: relative;
    overflow: hidden;
}

.skills-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
}

.skills-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 24px 0;
    color: var(--text-primary);
    text-align: center;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    color: var(--text-primary);
}

.skill-item:hover {
    transform: translateY(-3px);
    border-color: var(--accent-primary);
    box-shadow: 0 15px 30px -12px rgba(139, 92, 246, 0.2);
}

.skill-icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

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
    
    .aboutText {
        font-size: 1rem;
    }
    
    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
    }
    
    .skill-item {
        padding: 12px;
        font-size: 0.9rem;
    }
    
    .skill-icon {
        font-size: 1.2rem;
    }
}

@media only screen and (max-width: 480px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .skill-item {
        flex-direction: column;
        text-align: center;
        gap: 8px;
        padding: 16px 8px;
    }
}
</style>