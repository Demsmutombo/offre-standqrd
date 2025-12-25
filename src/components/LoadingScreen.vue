<template>
  <div v-if="loading" class="loading-screen">
    <div class="loading-content">
      <img src="/assets/img/log.png" alt="Logo" class="loading-logo">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    // Afficher le loading pendant au moins 3 secondes
    setTimeout(() => {
      this.loading = false
      document.body.classList.remove('loading-active')
    }, 3000)
  },
  created() {
    document.body.classList.add('loading-active')
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #060606;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-out 2.5s forwards;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-logo {
  max-width: 600px;
  width: 100%;
  height: auto;
  margin-bottom: 40px;
  animation: fadeIn 0.8s ease-in;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(139, 115, 85, 0.3);
  border-top-color: #8b7355;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@media (max-width: 768px) {
  .loading-logo {
    max-width: 350px;
    margin-bottom: 30px;
  }
  
  .loading-spinner {
    width: 40px;
    height: 40px;
    border-width: 3px;
  }
}
</style>

