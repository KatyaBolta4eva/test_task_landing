<script setup>
import ProductItem from "./components/product-item.vue";
import { mainProducts } from "./products.js";
import styles from "./products-main-list.module.css";

defineProps({
  selectedProduct: { type: Number, default: null },
  activeTab: { type: String, required: true },
});

const emit = defineEmits(["update:selectedProduct"]);
</script>

<template>
  <section :class="styles['products-main-list']">
    <ProductItem
      v-for="product in mainProducts"
      :key="product.id"
      :product="product"
      type="radio"
      name="mainProduct"
      :is-selected="selectedProduct === product.id"
      :image-key="
        activeTab === 'WithController'
          ? 'imgWithController'
          : 'imgWithouThermalHeating'
      "
      @select="emit('update:selectedProduct', product.id)"
    />
  </section>
</template>
