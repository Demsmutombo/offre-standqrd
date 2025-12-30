<template>
  <div class="theme-selector fixed">
    <!-- Bouton de basculement -->
    <button 
      class="theme-toggle-btn" 
      @click="toggleDropdown"
      :aria-label="'Changer le thème'"
    >
      <i class="bi bi-palette-fill"></i>
    </button>

    <!-- Modal de sélection de thème -->
    <transition name="fade">
      <div v-if="showDropdown" class="theme-dropdown">
        <div class="theme-dropdown-header">
          <h3>Choisir un thème</h3>
          <button class="theme-close-btn" @click="closeDropdown">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="theme-list">
          <div
            v-for="theme in themeList"
            :key="theme.id"
            class="theme-item"
            :class="{ active: currentTheme === theme.id }"
            @click="selectTheme(theme.id)"
          >
            <div class="theme-preview">
              <div 
                class="theme-color-preview"
                :style="{ backgroundColor: theme.colors['--background-color'] }"
              >
                <div 
                  class="theme-color-accent"
                  :style="{ backgroundColor: theme.colors['--accent-color'] }"
                ></div>
                <div 
                  class="theme-color-text"
                  :style="{ backgroundColor: theme.colors['--default-color'] }"
                ></div>
              </div>
            </div>
            <div class="theme-info">
              <span class="theme-name">{{ theme.name }}</span>
              <i v-if="currentTheme === theme.id" class="bi bi-check-circle-fill theme-check"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Overlay pour fermer le modal -->
    <transition name="fade">
      <div 
        v-if="showDropdown" 
        class="theme-overlay" 
        @click="closeDropdown"
      ></div>
    </transition>
  </div>
</template>

<script>
import { themes, applyTheme, saveTheme, getCurrentTheme } from '../utils/theme'

export default {
  name: 'ThemeSelector',
  data() {
    return {
      showDropdown: false,
      currentTheme: 'white',
      themeList: Object.values(themes)
    }
  },
  mounted() {
    this.currentTheme = getCurrentTheme()
    // Fermer le dropdown si on clique en dehors
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
    },
    selectTheme(themeId) {
      applyTheme(themeId)
      saveTheme(themeId)
      this.currentTheme = themeId
      // Fermer le dropdown après sélection
      setTimeout(() => {
        this.closeDropdown()
      }, 300)
    },
    handleClickOutside(event) {
      const selector = this.$el
      if (this.showDropdown && selector && !selector.contains(event.target)) {
        this.closeDropdown()
      }
    }
  }
}
</script>

<style scoped>
.theme-selector.fixed {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10000;
}

.theme-toggle-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent-color);
  border: none;
  color: var(--contrast-color);
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  position: relative;
}

.theme-toggle-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: color-mix(in srgb, var(--accent-color), black 10%);
}

.theme-toggle-btn:active {
  transform: translateY(0) scale(1);
}

.theme-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  backdrop-filter: blur(2px);
}

.theme-dropdown {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 200px;
  background: var(--surface-color);
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 10002;
  overflow: hidden;
  animation: slideUp 0.3s ease;
  transform-origin: bottom right;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.theme-dropdown-header {
  padding: 10px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-color);
}

.theme-dropdown-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--heading-color);
  font-family: var(--heading-font);
}

.theme-close-btn {
  background: none;
  border: none;
  color: var(--default-color);
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.theme-close-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}

.theme-list {
  padding: 4px;
  max-height: none;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.theme-item {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0;
  border: 1px solid transparent;
  background: transparent;
}

.theme-item:hover {
  background: rgba(0, 0, 0, 0.04);
}

.theme-item.active {
  border-color: var(--accent-color);
  background: rgba(0, 0, 0, 0.02);
}

.theme-preview {
  margin-right: 8px;
  flex-shrink: 0;
}

.theme-color-preview {
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.theme-color-accent {
  height: 20%;
  width: 100%;
}

.theme-color-text {
  height: 10%;
  width: 100%;
  margin-top: auto;
}

.theme-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.theme-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--default-color);
}

.theme-check {
  color: var(--accent-color);
  font-size: 14px;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .theme-selector.fixed {
    right: 15px;
    bottom: 80px;
  }

  .theme-dropdown {
    width: calc(100vw - 30px);
    max-width: 200px;
    right: 0;
    left: auto;
    bottom: 70px;
  }

  .theme-toggle-btn {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .theme-dropdown-header {
    padding: 14px 16px;
  }

  .theme-dropdown-header h3 {
    font-size: 16px;
  }

  .theme-list {
    padding: 6px;
  }

  .theme-item {
    padding: 8px 10px;
  }

  .theme-color-preview {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .theme-selector.fixed {
    right: 15px;
    bottom: 70px;
  }

  .theme-dropdown {
    width: calc(100vw - 30px);
    max-width: none;
    right: 0;
    left: auto;
    bottom: 65px;
  }

  .theme-toggle-btn {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }

  .theme-dropdown-header {
    padding: 12px 14px;
  }

  .theme-dropdown-header h3 {
    font-size: 15px;
  }

  .theme-list {
    padding: 6px;
  }

  .theme-item {
    padding: 8px 10px;
  }

  .theme-color-preview {
    width: 36px;
    height: 36px;
  }

  .theme-name {
    font-size: 14px;
  }

  .theme-check {
    font-size: 16px;
  }
}
</style>

