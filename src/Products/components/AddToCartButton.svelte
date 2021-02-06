<script lang="ts">
  export let text: string = 'Agregar'
  export let productID: string
  export let isBig: boolean

  // External libraries
  import 'boxicons'

  // Scripts
  import { cart } from '../../stores/cart'

  const addToCart = (id: string): any => {
    cart.addProduct(id)
  }
</script>

<button
  on:click={addToCart(productID)}
  title="Añadir producto al carrito"
  disabled={false}
  class="primary"
>
  <box-icon name="cart-alt" type="solid" />
  {text}</button
>
