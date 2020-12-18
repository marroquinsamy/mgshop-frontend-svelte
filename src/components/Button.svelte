<script lang="ts">
  export let text: string = 'Haz click'
  export let padding: string = '15px'
  export let fontSize: string = '1em'
  export let iconClasses: string = ''
  export let buttonStyle: string = 'products-primary'
  export let title: string = 'Haz click'
</script>

<button
  on:click
  style="padding: {padding}; font-size: {fontSize};"
  class={buttonStyle}
  {title}>
  <i class={`${iconClasses} ${buttonStyle}`} />
  <span>{text}</span>
</button>

<style>
  .products-primary {
    background: var(--pink);
  }

  .products-secondary {
    background: var(--green);
  }

  button {
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    color: #fff;
    font-weight: 500;

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
