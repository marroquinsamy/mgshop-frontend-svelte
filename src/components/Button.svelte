<script lang="ts">
  export let text: string = 'Haz click'
  export let classes: string = ''
</script>

<button on:click><i class={classes} /><span>{text}</span></button>

<style>
  button {
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 15px;
    background: var(--pink);
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
    transform: scale(1);
    transition: var(--preferred-transition);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    transform: scale(1.02);
    box-shadow: var(--surface-shadow-deep);
  }

  button:active {
    transform: scale(1);
  }

  i {
    font-size: 28px;
    margin-right: 5px;
  }
</style>
