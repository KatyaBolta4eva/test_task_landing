<script setup>
import { computed } from "vue";
import styles from "./product-item.module.css";

const props = defineProps({
  product: { type: Object, required: true },
  type: { type: String, default: "checkbox" },
  name: { type: String, default: undefined },
  isGift: { type: Boolean, default: false },
  isSelected: { type: Boolean, required: true },
  imageKey: { type: String, default: "img" },
});

const emit = defineEmits(["select"]);

const finalPrice = computed(
  () => props.product.price - (props.product.price * props.product.discount) / 100,
);
</script>

<template>
  <div :class="styles['product-item']">
    <input
      :type="type"
      :name="name"
      :checked="isSelected"
      @change="emit('select')"
    />

    <img
      :src="
        product.images[imageKey] ||
        product.images.img ||
        product.images.imgWithouThermalHeating
      "
      :alt="product.description"
    />

    <div :class="styles['product-item__info']">
      <a
        v-if="isGift"
        :href="product.link"
        :class="styles['product-item__gift-link']"
      >
        {{ product.description }}
      </a>
      <p v-else>{{ product.description }}</p>
    </div>

    <div :class="styles['product-item__price']">
      <span :class="styles['product-item__old-price']">
        {{ product.price.toLocaleString("ru-RU") }} ₽
      </span>

      <span :class="styles['product-item__final-price']">
        {{ finalPrice.toLocaleString("ru-RU") }} ₽
      </span>
    </div>
  </div>
</template>
