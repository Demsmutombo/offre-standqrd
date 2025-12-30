// Système de gestion des thèmes pour le site mémorial

export const themes = {
  white: {
    id: 'white',
    name: 'Blanc',
    colors: {
      '--background-color': '#ffffff',
      '--default-color': '#212529',
      '--heading-color': '#1a1a1a',
      '--accent-color': '#8b7355',
      '--surface-color': '#f5f5f5',
      '--contrast-color': '#ffffff',
      '--nav-color': '#1a1a1a',
      '--nav-hover-color': '#8b7355'
    }
  },
  dark: {
    id: 'dark',
    name: 'Sombre',
    colors: {
      '--background-color': '#1a1a1a',
      '--default-color': '#e0e0e0',
      '--heading-color': '#ffffff',
      '--accent-color': '#d4af37',
      '--surface-color': '#2c2c2c',
      '--contrast-color': '#ffffff',
      '--nav-color': '#ffffff',
      '--nav-hover-color': '#d4af37'
    }
  },
  gray: {
    id: 'gray',
    name: 'Gris',
    colors: {
      '--background-color': '#f5f5f5',
      '--default-color': '#333333',
      '--heading-color': '#1a1a1a',
      '--accent-color': '#6c757d',
      '--surface-color': '#ffffff',
      '--contrast-color': '#ffffff',
      '--nav-color': '#1a1a1a',
      '--nav-hover-color': '#6c757d'
    }
  },
  blue: {
    id: 'blue',
    name: 'Bleu',
    colors: {
      '--background-color': '#e8f4f8',
      '--default-color': '#1a1a1a',
      '--heading-color': '#0d47a1',
      '--accent-color': '#1976d2',
      '--surface-color': '#ffffff',
      '--contrast-color': '#ffffff',
      '--nav-color': '#1a1a1a',
      '--nav-hover-color': '#1976d2'
    }
  },
  brown: {
    id: 'brown',
    name: 'Brun',
    colors: {
      '--background-color': '#f5f1eb',
      '--default-color': '#3e2723',
      '--heading-color': '#1a1a1a',
      '--accent-color': '#8b7355',
      '--surface-color': '#ffffff',
      '--contrast-color': '#ffffff',
      '--nav-color': '#1a1a1a',
      '--nav-hover-color': '#8b7355'
    }
  }
}

/**
 * Applique un thème au document
 * @param {string} themeId - L'identifiant du thème à appliquer
 */
export function applyTheme(themeId) {
  const theme = themes[themeId]
  if (!theme) {
    console.warn(`Thème "${themeId}" non trouvé. Utilisation du thème par défaut.`)
    return
  }

  const root = document.documentElement
  
  // Appliquer toutes les variables CSS du thème avec !important via style inline
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value, 'important')
  })

  // Ajouter une classe au body pour le thème
  document.body.className = document.body.className.replace(/theme-\w+/g, '')
  document.body.classList.add(`theme-${themeId}`)

  // Forcer l'application du thème sur toutes les sections
  // En ajoutant un style global qui écrase les classes spécifiques
  const styleId = 'theme-override-style'
  let styleElement = document.getElementById(styleId)
  
  if (!styleElement) {
    styleElement = document.createElement('style')
    styleElement.id = styleId
    document.head.appendChild(styleElement)
  }

  // Créer les règles CSS pour écraser les classes spécifiques
  const cssRules = `
    /* Override des classes de background pour appliquer le thème */
    .light-background,
    .dark-background,
    .accent-background {
      --background-color: ${theme.colors['--background-color']} !important;
      --default-color: ${theme.colors['--default-color']} !important;
      --heading-color: ${theme.colors['--heading-color']} !important;
      --accent-color: ${theme.colors['--accent-color']} !important;
      --surface-color: ${theme.colors['--surface-color']} !important;
      --contrast-color: ${theme.colors['--contrast-color']} !important;
    }

    /* Application du thème sur tous les éléments */
    body,
    .main,
    section,
    .section {
      background-color: var(--background-color) !important;
      color: var(--default-color) !important;
    }

    h1, h2, h3, h4, h5, h6 {
      color: var(--heading-color) !important;
    }
  `

  styleElement.textContent = cssRules
}

/**
 * Sauvegarde le thème sélectionné dans localStorage
 * @param {string} themeId - L'identifiant du thème à sauvegarder
 */
export function saveTheme(themeId) {
  try {
    localStorage.setItem('memorial-theme', themeId)
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du thème:', error)
  }
}

/**
 * Charge le thème sauvegardé depuis localStorage
 * @returns {string|null} L'identifiant du thème sauvegardé ou null
 */
export function loadTheme() {
  try {
    const savedTheme = localStorage.getItem('memorial-theme')
    if (savedTheme && themes[savedTheme]) {
      applyTheme(savedTheme)
      return savedTheme
    }
  } catch (error) {
    console.error('Erreur lors du chargement du thème:', error)
  }
  return null
}

/**
 * Obtient le thème actuel
 * @returns {string} L'identifiant du thème actuel
 */
export function getCurrentTheme() {
  try {
    const savedTheme = localStorage.getItem('memorial-theme')
    if (savedTheme && themes[savedTheme]) {
      return savedTheme
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du thème:', error)
  }
  return 'white' // Thème par défaut
}

