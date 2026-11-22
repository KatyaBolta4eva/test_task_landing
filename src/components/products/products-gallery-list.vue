<script setup>
import { computed } from "vue";
import styles from "./products-gallery-list.module.css";

const props = defineProps({
  mainProduct: { type: Object, default: undefined },
  selectedExtraProducts: { type: Array, required: true },
  activeTab: { type: String, required: true },
});

const extraProductClasses = {
  1: styles["products-gallery__extra-product_type_clamps-for-lids"],
  2: styles["products-gallery__extra-product_type_vacuum-lids"],
  3: styles["products-gallery__extra-product_type_colored-lids"],
  4: styles["products-gallery__extra-product_type_lids-with-sko"],
  5: styles["products-gallery__extra-product_type_retort-bags"],
  6: styles["products-gallery__extra-product_type_gasket-for-autoclave"],
};

const imageKey = computed(() =>
  props.activeTab === "WithController"
    ? "imgWithControllerCenter"
    : "imgWithoutThermalHeatingCenter",
);
</script>

<template>
  <section :class="styles['products-gallery']" aria-label="Выбранные товары">
    <div v-if="mainProduct" :class="styles['products-gallery__main-product-frame']">
      <img
        :class="styles['products-gallery__main-product']"
        :src="mainProduct.images[imageKey]"
        :alt="mainProduct.description"
      />
    </div>

    <img
      v-for="product in selectedExtraProducts"
      :key="product.id"
      :class="[
        styles['products-gallery__extra-product'],
        extraProductClasses[product.id] || '',
      ]"
      :src="product.images.imgCenter"
      :alt="product.description"
    />
  </section>
</template>
