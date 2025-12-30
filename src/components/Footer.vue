<template>
  <footer id="footer" class="footer accent-background">
    <div class="container">
      <div class="copyright text-center footer-content">
        <img src="/assets/img/log.png" alt="IM DIGITAL LABS" class="footer-logo">
        <p class="footer-brand"><strong>IM DIGITAL LABS</strong></p>
        <p class="footer-copyright">© <span>Copyright</span> <strong>IM DIGITAL LABS</strong> <span>All Rights Reserved</span></p>
      </div>
      <div class="credits text-center footer-content">
        <p class="footer-credits">Conçu par <strong>IM DIGITAL LABS</strong> | 
          <a href="https://wa.me/243991683269" target="_blank" class="footer-link whatsapp-link" @click.prevent="openWhatsApp('243991683269')">
            <svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle; margin-right: 4px;">
              <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            +243 991 683 269
          </a> | 
          <a href="mailto:imdigitallabs@gmail.com" class="footer-link gmail-link" @click.prevent="sendEmail('imdigitallabs@gmail.com')">
            <svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle; margin-right: 4px;">
              <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            imdigitallabs@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    sendEmail(email) {
      window.location.href = `mailto:${email}`
    },
    openWhatsApp(phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}`, '_blank')
    }
  }
}
</script>

<style scoped>
.footer-logo {
  max-width: 45px;
  height: auto;
  margin-bottom: 5px;
}

.footer-brand {
  margin: 0 0 3px 0;
  font-size: 13px;
}

.footer-brand strong {
  color: #d4af37;
}

.footer-copyright {
  margin: 0 0 6px 0;
  font-size: 11px;
}

.footer-copyright strong {
  color: #d4af37;
}

.footer-credits {
  margin: 0;
  font-size: 11px;
  line-height: 1.5;
}

.footer-credits strong {
  color: #d4af37;
}

.footer-content {
  margin-bottom: 0;
}

.copyright {
  margin-bottom: 5px;
}

.credits {
  margin-top: 0;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s ease;
  font-size: 11px;
}

.footer-link:hover {
  opacity: 0.8;
  text-decoration: none;
}

.whatsapp-link svg {
  margin-right: 4px;
}

.gmail-link svg {
  margin-right: 4px;
}

@media (max-width: 768px) {
  .footer-logo {
    max-width: 40px;
    margin-bottom: 6px;
  }

  .footer-brand {
    font-size: 13px;
  }

  .footer-copyright,
  .footer-credits {
    font-size: 11px;
  }

  .footer-link {
    font-size: 11px;
  }
}
</style>

