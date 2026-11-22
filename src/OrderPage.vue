<script setup>
import { computed, ref } from "vue";
import ProductsMainList from "./components/products/products-main-list.vue";
import ProductsAdditionalList from "./components/products/products-additional-list.vue";
import ProductsGalleryList from "./components/products/products-gallery-list.vue";
import {
  mainProducts,
  extraProducts,
  giftProducts,
} from "./components/products/products.js";
import OrderForm from "./components/order/order-form.vue";
import styles from "./OrderPage.module.css";

const selectedMainProduct = ref(null);
const selectedExtraProducts = ref([]);
const selectedGiftProducts = ref([]);
const activeTab = ref("WithController");

const toggleExtraProduct = (productId) => {
  selectedExtraProducts.value = selectedExtraProducts.value.includes(productId)
    ? selectedExtraProducts.value.filter((id) => id !== productId)
    : [...selectedExtraProducts.value, productId];
};

const toggleGiftProduct = (productId) => {
  selectedGiftProducts.value = selectedGiftProducts.value.includes(productId)
    ? selectedGiftProducts.value.filter((id) => id !== productId)
    : [...selectedGiftProducts.value, productId];
};

const mainProduct = computed(() =>
  mainProducts.find((product) => product.id === selectedMainProduct.value),
);

const allSelectedExtraProducts = computed(() =>
  extraProducts.filter((product) =>
    selectedExtraProducts.value.includes(product.id),
  ),
);

const allSelectedProducts = computed(() => [
  ...(mainProduct.value ? [mainProduct.value] : []),
  ...allSelectedExtraProducts.value,
]);

const totalPrice = computed(() =>
  allSelectedProducts.value.reduce((total, product) => total + product.price, 0),
);

const totalDiscount = computed(() =>
  allSelectedProducts.value.reduce(
    (total, product) => total + (product.price * product.discount) / 100,
    0,
  ),
);

const totalDiscountPercent = computed(() =>
  totalPrice.value ? (totalDiscount.value / totalPrice.value) * 100 : 0,
);

const finalPrice = computed(() => totalPrice.value - totalDiscount.value);
</script>

<template>
  <div :class="styles['order-page']">
    <div :class="styles['order-page__heading']">
      <h1 :class="styles['order-page__title']">Оформление заказа</h1>
      <h3 :class="styles['order-page__subtitle']">
        Мы перезвоним Вам и уточним детали доставки
      </h3>
    </div>

    <div :class="styles['order-page__products-layout']">
      <div :class="styles['order-page__main-products']">
        <div :class="styles['order-page__tabs']">
          <button
            :class="[
              styles['order-page__tab'],
              { [styles['order-page__tab_active']]: activeTab === 'WithController' },
            ]"
            @click="activeTab = 'WithController'"
          >
            С блоком управления
          </button>

          <button
            :class="[
              styles['order-page__tab'],
              {
                [styles['order-page__tab_active']]:
                  activeTab === 'WithoutThermalHeating',
              },
            ]"
            @click="activeTab = 'WithoutThermalHeating'"
          >
            Без ТЭНа
          </button>
        </div>
        <ProductsMainList
          v-model:selected-product="selectedMainProduct"
          :active-tab="activeTab"
        />
        <OrderForm
          :final-price="finalPrice"
          :total-price="totalPrice"
          :total-discount-percent="totalDiscountPercent"
        />
      </div>

      <div :class="styles['order-page__products-gallery']">
        <ProductsGalleryList
          :main-product="mainProduct"
          :selected-extra-products="allSelectedExtraProducts"
          :active-tab="activeTab"
        />
      </div>

      <div :class="styles['order-page__additional-products']">
        <ProductsAdditionalList
          :selected-products="selectedGiftProducts"
          :products="giftProducts"
          title="Подарки"
          @toggle="toggleGiftProduct"
        />
        <ProductsAdditionalList
          :selected-products="selectedExtraProducts"
          :products="extraProducts"
          title="Дополнительные товары"
          @toggle="toggleExtraProduct"
        />
      </div>
    </div>
  </div>
</template>
