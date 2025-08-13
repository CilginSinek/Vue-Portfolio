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
        <div class="card-header">
            <h2 class="card-title">İletişim</h2>
            <p class="card-subtitle">Benimle iletişime geçmek için aşağıdaki platformları kullanabilirsiniz</p>
        </div>
        
        <div v-if="contactArr.length === 0" class="loading">
            <div class="loading-spinner"></div>
            <p>Yükleniyor...</p>
        </div>
        
        <div v-else class="contactDiv">
            <a 
                v-for="contact in contactArr" 
                :key="contact.name"
                :href="contact.link" 
                class="contactCard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="contact-avatar">
                    <img class="contactImage" :src="contact.imageUrl" :alt="contact.name" />
                    <div class="contact-overlay">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </svg>
                    </div>
                </div>
                <div class="contact-info">
                    <h3 class="contact-name">{{ contact.name }}</h3>
                    <p class="contact-nick">{{ contact.nick }}</p>
                </div>
            </a>
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
    margin: 0;
    max-width: 600px;
    margin: 0 auto;
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

.contactDiv {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    width: 100%;
}

.contactCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: var(--text-primary);
    position: relative;
    overflow: hidden;
}

.contactCard::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
    transition: left 0.6s ease;
}

.contactCard:hover::before {
    left: 100%;
}

.contactCard:hover {
    transform: translateY(-8px);
    background: var(--bg-hover);
    border-color: var(--accent-primary);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.3);
}

.contact-avatar {
    position: relative;
    margin-bottom: 20px;
}

.contactImage {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border-color);
    transition: all 0.3s ease;
}

.contactCard:hover .contactImage {
    border-color: var(--accent-primary);
    transform: scale(1.1);
}

.contact-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(139, 92, 246, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    color: white;
}

.contactCard:hover .contact-overlay {
    opacity: 1;
}

.contact-info {
    text-align: center;
}

.contact-name {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: var(--text-primary);
    transition: color 0.3s ease;
}

.contact-nick {
    margin: 0;
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--text-muted);
    transition: all 0.3s ease;
}

.contactCard:hover .contact-name {
    color: var(--accent-primary);
}

.contactCard:hover .contact-nick {
    color: var(--text-secondary);
}

@media only screen and (max-width: 768px) {
    .card-title {
        font-size: 2rem;
    }
    
    .contactDiv {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
    
    .contactCard {
        padding: 24px 20px;
    }
    
    .contactImage {
        height: 64px;
        width: 64px;
    }
}

@media only screen and (max-width: 480px) {
    .contactDiv {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    
    .contactCard {
        padding: 20px 16px;
    }
    
    .contactImage {
        height: 56px;
        width: 56px;
    }
    
    .contact-name {
        font-size: 1rem;
    }
    
    .contact-nick {
        font-size: 0.85rem;
    }
}
</style>