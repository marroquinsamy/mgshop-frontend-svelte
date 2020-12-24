<script lang="ts">
  export let product: IProduct
  export let klass: string

  // Scripts
  import type { IProduct } from '../models/Product'
</script>

<div class={klass}>
  <p class="id">{product._id}</p>
  <h4>{product.title}</h4>
  <p>{product.description}</p>
  <p>{product.price}</p>
</div>

<style>
  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 7px 0;
  }

  :global(body.dark) div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  h4 {
    margin: 7px 0;
  }

  p {
    margin: 5px 0;
  }

  .id {
    opacity: 0.7;
  }
</style>
