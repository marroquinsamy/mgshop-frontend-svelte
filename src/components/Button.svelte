<script lang="ts">
  export let text: string = 'Haz click'
  export let iconClasses: string = ''
  export let buttonStyle: string = 'products-primary'
  export let title: string = 'Haz click'
  export let disabled: boolean = false
  export let isBig: boolean = false
</script>

<button on:click class={`${buttonStyle} ${isBig && 'big'}`} {disabled} {title}>
  <i class={`${iconClasses}`} />
  <span>{text}</span>
</button>

<style>
  .products-primary {
    background: rgba(var(--pink), 0.1);
    color: rgba(var(--pink));
  }

  .products-secondary {
    background: var(--green);
  }

  .big {
    font-size: 1.1em;
    padding: 15px;
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
    transition: 0.05s ease all;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    transform: scale(0.95);
  }

  i {
    font-size: 28px;
    margin-right: 5px;
    background: transparent;
  }
</style>
