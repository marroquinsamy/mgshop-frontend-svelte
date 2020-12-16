<script lang="ts">
  import Toastify from 'toastify-js'
  import 'toastify-js/src/toastify.css'

  const showWhatsAppNumber = () => {
    Toastify({
      text: 'Nuestro WhatsApp: +502 4269 5893',
      duration: 5000,
      close: true,
      gravity: 'bottom',
      position: 'right',
      avatar: '/images/whatsapp-logo.png',
      backgroundColor: 'var(--green)',
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
        avatar: '/images/info.png',
        backgroundColor: '#3498db',
        stopOnFocus: true,
      }).showToast()
    } catch (error) {
      console.log(error)
    }
  }
</script>

<footer>
  <section>
    <img src="/images/logowbweco.png" alt="MGShop logo" />
    <div>
      <a href="https://facebook.com/mgshopgt" target="_blank" rel="noreferrer">
        <i class="bx bxl-facebook-circle" />
      </a>
      <i class="bx bxl-whatsapp" role="button" on:click={showWhatsAppNumber} />
    </div>
  </section>

  <div class="separator" />

  <section class="developer-credits">
    <a href="https://github.com/marroquinsamy" target="_blank" rel="noreferrer">
      <i class="bx bxl-github" />
    </a>
    Escrito y desarrollado por
    <a
      href="https://github.com/marroquinsamy"
      target="_blank"
      rel="noreferrer"
      class="developer-name">
      Samuel Marroquín G.
    </a>
  </section>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 150px;
    background: var(--pink);
    padding: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    font-weight: 500;
  }

  section {
    width: 40%;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    opacity: 0.7;
  }

  .developer-credits {
    font-size: 0.9em;
  }

  div {
    margin: auto;
  }

  img {
    width: 100px;
    margin: auto;
  }

  a {
    color: inherit;
    width: fit-content;
    margin: auto;
    text-decoration: none;
  }

  .developer-name:hover {
    text-decoration: underline;
  }

  i {
    cursor: pointer;
    font-size: 40px;
    margin: 10px auto;
  }

  .separator {
    height: 90%;
    width: 3px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0;
  }
</style>
