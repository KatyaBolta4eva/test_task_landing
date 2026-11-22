<script setup>
import ProductItem from "./components/product-item.vue";
import styles from "./products-additional-list.module.css";

defineProps({
  selectedProducts: { type: Array, required: true },
  products: { type: Array, required: true },
  title: { type: String, required: true },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <section :class="styles['products-additional-list']">
    <h3 :class="styles['products-additional-list__title']">{{ title }}</h3>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      :is-gift="title === 'Подарки'"
      :is-selected="selectedProducts.includes(product.id)"
      @select="emit('toggle', product.id)"
    />
  </section>
</template>
