<script lang="ts">
  import Toastify from 'toastify-js'
  import 'toastify-js/src/toastify.css'
  const boxIconsColor: string = 'rgba(var(--black-and-white-color), 0.9)'
  const boxIconsSize: string = '40px'
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
      <a href="https://wa.me/50251892571" target="_blank" rel="noreferrer">
        <box-icon
          name="whatsapp"
          type="logo"
          size={boxIconsSize}
          color={boxIconsColor}
        />
      </a>
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
    grid-area: footer;
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
