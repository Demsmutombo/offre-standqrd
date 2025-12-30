<template>
  <div class="index-page">
    <Header />
    
    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/IMG_20240915_050452_231.jpg" alt="" data-aos="fade-in">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>En mémoire de Henock Ngandu</h2>
          <p><span class="typed" data-typed-items="Frère bien-aimé, Passionné de football,Petit Zidane, Homme au grand cœur, Toujours dans nos cœurs"></span></p>
        </div>
      </section>

      <!-- About Section -->
      <br><br><br>
      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-md-4">
              <div class="row justify-content-between gy-4">
                <div class="col-lg-5">
                  <img src="/assets/img/portfolio/IMG-20240919-WA0017.jpg" class="img-fluid" alt="">
                </div>
                <p><strong>Wazamani</strong></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="about-me">
                <h4>Témoignage pour Henock Ngandu Kabadi</h4>
                <p>
                  Henock Ngandu Kabadi était bien plus qu'un passionné de football ; il incarnait la détermination, le talent et la persévérance. Dès son plus jeune âge, Henock a su captiver son entourage par son habileté avec le ballon et son esprit d'équipe. Son talent l'a rapidement hissé au sommet du football congolais, attirant l'attention de grands noms comme Claude Le Roy. Sélectionné pour un stage de perfectionnement en France à seulement 14 ans, il a fait preuve d'un potentiel exceptionnel.
                </p>
                <p>
                  Bien que les chemins de la vie l'aient finalement éloigné du terrain de football professionnel, Henock n'a jamais abandonné sa passion pour le sport qui avait tant marqué son enfance. Sa vie, partagée entre ses responsabilités familiales et ses rêves sportifs, a été une source d'inspiration pour ceux qui l'entouraient. En tant que père aimant de sa fille Karine et frère dévoué au sein de sa famille, Henock a toujours montré l'importance de la famille, du travail acharné et de l'amour pour ce que l'on fait.
                </p>
                <p>
                  Son départ laisse un grand vide, mais son souvenir, marqué par ses accomplissements et sa personnalité chaleureuse, restera à jamais gravé dans nos cœurs. Henock, tu étais un véritable modèle, et ta mémoire continuera de briller à travers ceux que tu as touchés.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br>
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-md-4">
              <div class="row justify-content-between gy-4">
                <div class="col-lg-5">
                  <img src="/assets/img/2.jpg" class="img-fluid" alt="">
                </div>
                <p><strong>Israel Mutombo</strong></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="about-me">
                <h4>À Toi, Mon Frère</h4>
                <p>
                  Dans le doux souffle du vent, je sens ton passage,
                  Ton rire, ton cœur, résonnent au-delà des âges.
                  Ton absence est un vide, un chagrin silencieux,
                  Mais je sais que tu brilles parmi les bienheureux.
                </p>
                <p>
                  Ton amour, ton sourire, demeurent éternels,
                  Comme les étoiles qui veillent dans le ciel.
                  Chaque instant partagé, gravé dans ma mémoire,
                  Un trésor que je garde, une flamme d'espoir.
                </p>
                <p>
                  Même si nos chemins se séparent ici-bas,
                  Je sais qu'un jour, au-delà des tracas,
                  Nous nous retrouverons, dans la lumière infinie,
                  Dans les bras de Jésus, pour l'éternité réunis.
                </p>
                <p>
                  Adieu pour un temps, mon frère bien-aimé,
                  Dans l'espoir de ce jour, je reste à espérer.
                  En Christ, nous nous reverrons, dans Sa gloire,
                  Et là, sans fin, nous partagerons notre histoire.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>En mémoire de Henock Ngandu Kabadi</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-5">
              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Téléphone</h3>
                    <p><a href="tel:+243991683269" class="contact-phone" @click.prevent="callPhone('+243991683269')">+243 991 683 269</a></p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <div class="contact-icon gmail-icon flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:imdigitallabs@gmail.com" class="contact-email" @click.prevent="sendEmail('imdigitallabs@gmail.com')">imdigitallabs@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <div class="contact-icon whatsapp-icon flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/243991683269" class="contact-whatsapp" @click.prevent="openWhatsApp('243991683269')" target="_blank">+243 991 683 269</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <p><strong>Contact :</strong> Israel Mutombo</p>
            <p>Pour toute question ou souvenir à propos de Henock, n'hésitez pas à nous contacter. Merci de contribuer à sa mémoire.</p>
          </div>
        </div>
      </section>

      <!-- Credits Section -->
      <section id="credits" class="credits section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Conception</h2>
          <p>Ce site a été créé avec amour et soin pour honorer la mémoire de Henock Ngandu Kabadi.</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="text-center">
            <p class="credits-content">Conception et développement par <strong class="credits-brand">IM DIGITAL LABS</strong>.</p>
            <p>
              <strong class="credits-label">Contact direct :</strong><br>
              <a href="mailto:imdigitallabs@gmail.com" class="contact-email">Email: imdigitallabs@gmail.com</a>
            </p>
            <p>Nous espérons que ce site continuera à célébrer la vie et l'héritage de Henock, tout en permettant à ses proches de se souvenir de lui avec tendresse.</p>
            <p>Merci pour votre visite.</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center" @click.prevent="scrollToTop"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Preloader -->
    <div id="preloader"></div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Temoignage',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.initScripts()
    this.initScrolled()
  },
  methods: {
    callPhone(phoneNumber) {
      window.location.href = `tel:${phoneNumber}`
    },
    sendEmail(email) {
      window.location.href = `mailto:${email}`
    },
    openWhatsApp(phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}`, '_blank')
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async initScripts() {
      // Load vendor scripts first
      const scripts = [
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/aos/aos.js',
        '/assets/vendor/typed.js/typed.umd.js'
      ]

      try {
        await Promise.all(scripts.map(script => this.loadScript(script)))
        
        // Wait a bit for scripts to be fully available
        setTimeout(() => {
          this.initAOS()
          this.initTyped()
          this.initScrollTop()
          this.initPreloader()
        }, 100)
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    },
    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    },
    initAOS() {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      }
    },
    initTyped() {
      const selectTyped = document.querySelector('.typed')
      if (selectTyped && window.Typed) {
        const typed_strings = selectTyped.getAttribute('data-typed-items').split(',')
        new window.Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        })
      }
    },
    initScrollTop() {
      const scrollTop = document.querySelector('.scroll-top')
      if (scrollTop) {
        const toggleScrollTop = () => {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active')
        }
        window.addEventListener('load', toggleScrollTop)
        window.addEventListener('scroll', toggleScrollTop)
      }
    },
    initPreloader() {
      const preloader = document.querySelector('#preloader')
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove()
        })
        // Remove preloader if already loaded
        if (document.readyState === 'complete') {
          preloader.remove()
        }
      }
    },
    initScrolled() {
      const selectBody = document.querySelector('body')
      const selectHeader = document.querySelector('#header')
      if (!selectHeader) return
      
      const toggleScrolled = () => {
        if (!selectHeader.classList.contains('scroll-up-sticky') && 
            !selectHeader.classList.contains('sticky-top') && 
            !selectHeader.classList.contains('fixed-top')) return
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled')
      }
      
      window.addEventListener('scroll', toggleScrolled)
      toggleScrolled()
    }
  }
}
</script>

<style scoped>
.credits-content {
  color: var(--default-color) !important;
}

.credits-brand {
  color: var(--accent-color) !important;
}

.credits-label {
  color: var(--default-color) !important;
}

.contact-email,
.contact-phone,
.contact-whatsapp {
  color: var(--accent-color) !important;
  text-decoration: none;
}

.contact-email:hover,
.contact-phone:hover,
.contact-whatsapp:hover {
  color: var(--accent-color) !important;
  text-decoration: underline;
}

.contact-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border-radius: 8px;
  padding: 8px;
}

.gmail-icon {
  background: rgba(234, 67, 53, 0.1);
}

.gmail-icon svg {
  width: 24px;
  height: 24px;
}

.whatsapp-icon {
  background: rgba(37, 211, 102, 0.1);
}

.whatsapp-icon svg {
  width: 24px;
  height: 24px;
}
</style>

