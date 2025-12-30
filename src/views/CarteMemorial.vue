<template>
  <div class="carte-memorial-page">
    <Header />
    
    <main class="main">
      <section class="carte-section">
        <div class="container">
          <div class="carte-container" ref="carteElement">
            <!-- Décorations florales en haut -->
            <div class="carte-decoration-top">
              <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,20 Q80,40 60,30 T40,50 Q50,60 60,55 T80,65 Q90,70 100,65 T120,65 Q130,60 140,55 T160,50 Q150,40 140,30 T120,20 Q110,20 100,20 Z" 
                      fill="#D4AF37" opacity="0.6"/>
                <path d="M50,40 Q45,50 50,60 Q55,50 50,40 Z" fill="#D4AF37" opacity="0.8"/>
                <path d="M150,40 Q145,50 150,60 Q155,50 150,40 Z" fill="#D4AF37" opacity="0.8"/>
              </svg>
            </div>

            <div class="carte-content">
              <h2 class="carte-title">En Mémoire De</h2>
              
              <div class="carte-image-frame">
                <img 
                  :src="photoUrl" 
                  alt="Henock Ngandu Kabadi"
                  class="carte-photo"
                  @load="imageLoaded = true"
                />
              </div>
              
              <h1 class="carte-name">{{ nom }}</h1>
              
              <p class="carte-dates">{{ dates }}</p>
              
              <p class="carte-message">{{ message }}</p>
              
              <div class="carte-separator"></div>
              
              <div class="carte-service-info">
                <p class="service-date">{{ dateService }}</p>
                <p class="service-location">{{ lieuService }}</p>
              </div>
            </div>

            <!-- Décorations florales en bas -->
            <div class="carte-decoration-bottom">
              <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,80 Q80,60 60,70 T40,50 Q50,40 60,45 T80,35 Q90,30 100,35 T120,35 Q130,40 140,45 T160,50 Q150,60 140,70 T120,80 Q110,80 100,80 Z" 
                      fill="#D4AF37" opacity="0.6"/>
                <path d="M50,60 Q45,50 50,40 Q55,50 50,60 Z" fill="#D4AF37" opacity="0.8"/>
                <path d="M150,60 Q145,50 150,40 Q155,50 150,60 Z" fill="#D4AF37" opacity="0.8"/>
              </svg>
            </div>
          </div>

          <!-- Bouton de téléchargement -->
          <div class="carte-download-container">
            <button @click="downloadCarte" class="btn-download" :disabled="!imageLoaded">
              <i class="bi bi-download me-2"></i>
              <span v-if="!downloading">Télécharger la carte</span>
              <span v-else>Téléchargement...</span>
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import html2canvas from 'html2canvas'

export default {
  name: 'CarteMemorial',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      nom: 'Henock Ngandu Kabadi',
      dates: '15 Mai 1992 - 2 Septembre 2024',
      message: 'Que ton âme trouve la paix éternelle et le réconfort. Repose en paix, cher Henock. Tu nous manqueras profondément.',
      dateService: 'Cérémonie funéraire : Lundi 9 Septembre 2024 à 10h00',
      lieuService: 'Lieu de sépulture : Nécropole de l\'Eternité',
      photoUrl: '/assets/img/FB_IMG_1726419737492.jpg',
      imageLoaded: false,
      downloading: false
    }
  },
  methods: {
    async waitForImages(element) {
      const images = element.querySelectorAll('img')
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve()
        return new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = resolve // Continue même si une image échoue
          setTimeout(resolve, 3000) // Timeout après 3 secondes
        })
      })
      await Promise.all(imagePromises)
    },
    async downloadCarte() {
      const carteElement = this.$refs.carteElement
      
      if (!carteElement) {
        alert('Erreur: Impossible de trouver la carte')
        return
      }

      if (this.downloading) return

      try {
        this.downloading = true

        // Attendre le chargement des images
        await this.waitForImages(carteElement)

        // Créer le canvas avec html2canvas
        const canvas = await html2canvas(carteElement, {
          backgroundColor: '#000000',
          scale: 3,
          logging: false,
          useCORS: true,
          allowTaint: true,
          width: carteElement.offsetWidth,
          height: carteElement.offsetHeight,
          windowWidth: carteElement.offsetWidth,
          windowHeight: carteElement.offsetHeight
        })

        // Convertir en blob et télécharger
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `Carte_Memoriale_${this.nom.replace(/\s+/g, '_')}_${new Date().getTime()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)

          this.downloading = false
        }, 'image/png', 1.0)
      } catch (error) {
        console.error('Erreur lors du téléchargement:', error)
        alert('Une erreur est survenue lors du téléchargement de la carte.')
        this.downloading = false
      }
    }
  },
  mounted() {
    // Précharger l'image
    const img = new Image()
    img.src = this.photoUrl
    img.onload = () => {
      this.imageLoaded = true
    }
  }
}
</script>

<style scoped>
.carte-memorial-page {
  min-height: 100vh;
  background: #000000;
}

.carte-section {
  padding: 80px 20px;
  background: #000000;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carte-container {
  background: #000000;
  border: 3px solid #D4AF37;
  border-radius: 0;
  padding: 60px 50px;
  max-width: 700px;
  margin: 0 auto 40px;
  position: relative;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
}

.carte-decoration-top,
.carte-decoration-bottom {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 80px;
  opacity: 0.7;
}

.carte-decoration-top {
  top: -40px;
}

.carte-decoration-bottom {
  bottom: -40px;
  transform: translateX(-50%) rotate(180deg);
}

.carte-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.carte-title {
  font-family: 'Times New Roman', 'Georgia', serif;
  font-size: 24px;
  font-weight: 400;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 40px 0;
}

.carte-image-frame {
  margin: 30px auto 40px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 4px solid #D4AF37;
  padding: 4px;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carte-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.carte-name {
  font-family: 'Dancing Script', 'Times New Roman', cursive;
  font-size: 42px;
  font-weight: 600;
  color: #D4AF37;
  margin: 0 0 25px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.carte-dates {
  font-family: 'Times New Roman', 'Georgia', serif;
  font-size: 18px;
  color: #D4AF37;
  margin: 0 0 35px 0;
  letter-spacing: 1px;
}

.carte-message {
  font-family: 'Times New Roman', 'Georgia', serif;
  font-size: 16px;
  color: #D4AF37;
  line-height: 1.8;
  margin: 0 0 35px 0;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.carte-separator {
  width: 150px;
  height: 2px;
  background: #D4AF37;
  margin: 30px auto;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.carte-service-info {
  margin-top: 30px;
}

.service-date,
.service-location {
  font-family: 'Times New Roman', 'Georgia', serif;
  font-size: 15px;
  color: #D4AF37;
  margin: 8px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.carte-download-container {
  text-align: center;
  margin-top: 40px;
}

.btn-download {
  background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
  color: #000000;
  border: none;
  padding: 14px 35px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
  display: inline-flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.btn-download:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
  background: linear-gradient(135deg, #FFD700 0%, #D4AF37 100%);
}

.btn-download:active:not(:disabled) {
  transform: translateY(0);
}

.btn-download:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .carte-section {
    padding: 60px 15px;
  }

  .carte-container {
    padding: 50px 35px;
    margin: 0 15px 30px;
  }

  .carte-name {
    font-size: 36px;
  }

  .carte-image-frame {
    width: 180px;
    height: 180px;
  }

  .carte-title {
    font-size: 20px;
  }

  .carte-dates {
    font-size: 16px;
  }

  .carte-message {
    font-size: 15px;
  }

  .carte-decoration-top,
  .carte-decoration-bottom {
    width: 150px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .carte-container {
    padding: 40px 25px;
  }

  .carte-name {
    font-size: 30px;
  }

  .carte-image-frame {
    width: 150px;
    height: 150px;
  }

  .carte-title {
    font-size: 18px;
    letter-spacing: 2px;
  }

  .carte-decoration-top,
  .carte-decoration-bottom {
    display: none; /* Masquer les décorations sur très petit écran */
  }
}
</style>

