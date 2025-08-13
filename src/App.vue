<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <div id="app">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">
          <div class="logo-circle"></div>
          <div class="logo-text">Portfolio</div>
        </div>
        <div class="loading-bar">
          <div class="loading-progress"></div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="main-content">
      <nav>
        <div class="navbarLinks">
          <router-link class="navlink" to="/">Anasayfa</router-link>
          <router-link class="navlink" to="/About">Hakkımda</router-link>
          <router-link class="navlink" to="/Repos">Projeler</router-link>
          <router-link class="navlink" to="/Contact">İletişim</router-link>
        </div>
      </nav>
      
      <div class="container">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      
      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2025 İsmail Han. Modern web teknolojileri ile geliştirilmiştir.</p>
          <div class="footer-links">
            <span>Vue.js</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  margin-bottom: 40px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px auto;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: var(--border-color);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loading-progress {
  width: 0%;
  height: 100%;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 2px;
  animation: loadingProgress 1s ease-in-out;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loadingProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.main-content {
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 40px 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links span {
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 6px 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.footer-links span:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media only screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .footer-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
}
</style>

