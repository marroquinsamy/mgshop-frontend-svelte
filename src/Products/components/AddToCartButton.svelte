<script lang="ts">
  export let text: string = 'Agregar'
  export let productID: string

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
  <box-icon name="cart-alt" color="#fff" />
  {text}</button
>

<style>
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  box-icon {
    margin-right: 5px;
  }
</style>
