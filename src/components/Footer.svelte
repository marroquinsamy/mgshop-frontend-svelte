<script lang="ts">
  import Toastify from 'toastify-js'
  import 'toastify-js/src/toastify.css'
  const boxIconsColor: string = 'rgba(var(--black-and-white-color), 0.9)'
  const boxIconsSize: string = '40px'

  const showWhatsAppNumber = () => {
    Toastify({
      text: 'Nuestro WhatsApp: +502 4269 5893',
      duration: 5000,
      close: true,
      gravity: 'bottom',
      position: 'right',
      className: 'toastify-information',
      stopOnFocus: true,
    }).showToast()

    setTimeout(copyWhatsAppNumber, 500)
  }

  const copyWhatsAppNumber = () => {
    try {
      navigator.clipboard.writeText('+502 4269 5893')

      Toastify({
        text: 'WhatsApp copiado exitosamente',
        duration: 5000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        className: 'toastify-success',
        stopOnFocus: true,
      }).showToast()
    } catch (error) {
      console.log(error)
    }
  }
</script>

<footer>
  <section>
    <img
      src="/images/MG Shop logo color.svg"
      class="company-logo"
      alt="MGShop logo"
    />
    <div class="social-media-icons-container">
      <a href="https://facebook.com/mgshopgt" target="_blank" rel="noreferrer">
        <box-icon
          type="logo"
          name="facebook"
          size={boxIconsSize}
          color={boxIconsColor}
        />
      </a>
      <button class="whatsapp-logo-button" on:click={showWhatsAppNumber}>
        <box-icon
          name="whatsapp"
          type="logo"
          size={boxIconsSize}
          color={boxIconsColor}
        />
      </button>
    </div>
  </section>

  <div class="separator" />

  <section class="developer-credits">
    <a href="https://github.com/marroquinsamy" target="_blank" rel="noreferrer">
      <box-icon
        name="github"
        type="logo"
        color={boxIconsColor}
        size={boxIconsSize}
      />
    </a>
    <p class="developer-name">
      Escrito y desarrollado por
      <a
        href="https://github.com/marroquinsamy"
        target="_blank"
        rel="noreferrer"
        class="developer-name"
      >
        Samuel Marroquín G.
      </a>
    </p>
  </section>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 150px;
    background: var(--surface-color);
    padding: 10px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    font-weight: 500;
    border-top: 1px solid rgba(var(--black-and-white-color), 0.2);
  }

  section {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .developer-credits {
    font-size: 0.9em;
  }

  .developer-name {
    margin: 0;
  }
  .company-logo {
    width: 100px;
    fill: red !important;
    margin-bottom: 15px;
  }

  .whatsapp-logo-button {
    padding: 0;
    margin: 0;
    background: none;
    box-shadow: none;
  }

  .whatsapp-logo-button:focus {
    outline: 2px solid;
  }

  a {
    color: inherit;
    width: fit-content;
  }

  box-icon {
    cursor: pointer;
  }

  .separator {
    height: 70%;
    width: 2px;
    background: rgba(var(--black-and-white-color), 0.3);
    margin: 0;
  }
</style>
