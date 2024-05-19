// footer-component.js

class FooterComponent extends HTMLElement {
  constructor() {
    super();

    try {
      // Atașăm Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });

      // Creăm un container pentru stiluri și conținut
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');

      // Stiluri pentru componentă
      const style = document.createElement('style');
      style.textContent = `
        .footer {
          padding: var(--padding-md);
        }
        @media(max-width:767px) { 
          .footer {
            display: flex;
            flex-direction: column;
          }
          .secondary-menu {
            display: flex;
            justify-content: center;
            gap: var(--font-size-mobile);
            padding: var(--padding-md);
          }
          .social-ctn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--margin-md);
          }
          .social-links {
            width: 50%;
            display: flex;
            justify-content: space-evenly;
          }
          .social-ctn .social-links .bi {
            color: var(--accent-dark-color);
          }
          .closure {
            display: flex;
            flex-direction: column;
            padding: var(--padding-md);
            align-items: center;
          }
          .legal,
          .signature {
            display: flex;
            margin-bottom: var(--margin-xl);
          }
        }
        @media (min-width: 768px) { 
          .secondary-menu,
          .social-ctn h2,
          .social-links,
          .closure {
            color: var(--background-color);
          }
          .secondary-menu {
            display: flex;
            width: 50%;
            justify-content: center;
            gap: var(--margin-xxl);
            font-size: var(--font-size-sm);
          }
          .social-ctn H2 {
            font-size: var(--font-size-xl);
          }
          .social-ctn {
            display: flex;
            flex-direction: column;
            gap: var(--margin-xxl);
          }
          .social-links {
            display: flex;
            width: auto;
            justify-content: space-between;
            text-align: center;
            font-size: var(--font-size-xl);
          }
          .closure {
            display: flex;
            flex-direction: column;
          }
          .legal {
            display: flex;
            gap: var(--margin-lg);
            margin-bottom: var(--margin-xl);
            text-align: center;
            font-size: var(--font-size-sm);
          }
        }
      `;

      // Conținutul pentru componentă
      wrapper.innerHTML = `
        <footer class="footer">
          <nav class="secondary-menu">
            <a id="priceLink" href="#goodPrice">Pret</a>
            <a href="#">Contact</a>
            <a href="#" class="login-btn">Login</a>
          </nav>
          <div class="social-ctn">
            <h2 id="followUs">Urmareste-ne</h2>
            <div class="social-links">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-whatsapp"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
          <div class="closure">
            <div class="legal">
              <p id="terms">Termeni</p>
              <p id="cookies">Cookies</p>
            </div>
            <div id="signature">
              <p>buildCV ©️ 2024</p>
            </div>
          </div>
        </footer>
      `;

      // Adăugăm stilurile și conținutul la Shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    } catch (error) {
      console.error('Error initializing FooterComponent:', error);
      this.innerHTML = `<p style="color: red;">An error occurred while loading the footer component.</p>`;
    }
  }
}

// Înregistrăm componenta
customElements.define('footer-component', FooterComponent);
