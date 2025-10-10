<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 200)
})
</script>

<template>
  <div class="home-container">
    <div class="hero-section" :class="{ 'visible': isVisible }">
      <div class="hero-content">
        <h1 class="hero-title">
          {{ $t('home.title') }} 
          <span class="gradient-text">{{ $t('home.subtitle') }}</span>
        </h1>
        <p class="hero-description">
          {{ $t('home.description') }}
        </p>
        <div class="hero-buttons">
          <router-link to="/about" class="btn btn-primary">
            {{ $t('home.aboutButton') }}
          </router-link>
          <router-link to="/repos" class="btn btn-secondary">
            {{ $t('home.projectsButton') }}
          </router-link>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-elements">
          <div class="element element-1"></div>
          <div class="element element-2"></div>
          <div class="element element-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.hero-section {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: var(--text-primary);
}

.gradient-text {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 40px 0;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
}

.btn-primary {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px -12px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
}

.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: relative;
  width: 300px;
  height: 300px;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.element-3 {
  width: 60px;
  height: 60px;
  top: 10%;
  right: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

@media only screen and (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-visual {
    height: 200px;
  }
  
  .floating-elements {
    width: 200px;
    height: 200px;
  }
  
  .element-1 {
    width: 50px;
    height: 50px;
  }
  
  .element-2 {
    width: 80px;
    height: 80px;
  }
  
  .element-3 {
    width: 40px;
    height: 40px;
  }
}

@media only screen and (max-width: 480px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>