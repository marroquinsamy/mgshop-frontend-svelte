<script lang="ts">
  export let iconClasses: string
  export let text = 'Option'
</script>

<section on:click role="button">
  <i class={iconClasses} />
  <span>{text}</span>
</section>

<style>
  section {
    cursor: pointer;
    padding: 10px;
    border-radius: var(--border-radius);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  :global(body.dark) section:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  i {
    background: rgba(0, 0, 0, 0.1);
    padding: 7px;
    border-radius: 50%;
    font-size: 1.2em;
  }

  :global(body.dark) i {
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    font-weight: 500;
    font-size: 1.1em;
  }
</style>
