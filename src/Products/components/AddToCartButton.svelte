<script lang="ts">
  export let text: string = 'Agregar'
  export let padding: string = '7px'
  export let fontSize: string = '1em'
  export let productID: string

  // Components
  import Button from '../../components/Button.svelte'

  // Scripts
  import { cart } from '../../stores/cart'

  const addToCart = (id: string): any => {
    cart.addProduct(id)
  }
</script>

<Button
  {text}
  iconClasses="bx bxs-cart-alt"
  {padding}
  {fontSize}
  on:click={addToCart(productID)}
  title="Añadir producto al carrito"
  disabled={$cart.includes(productID)} />
