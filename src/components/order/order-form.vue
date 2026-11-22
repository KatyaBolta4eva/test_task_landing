<script setup>
import { ref } from "vue";
import { validateName, validatePhone } from "./utils/validation.js";
import styles from "./order-form.module.css";

defineProps({
  finalPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  totalDiscountPercent: { type: Number, required: true },
});

const name = ref("");
const phone = ref("");
const errors = ref({});
const showCoupon = ref(false);
const coupon = ref("");
const installment = ref(false);
const isAgreed = ref(false);
const isLoading = ref(false);
const isModalOpen = ref(false);

const handleNameInput = (event) => {
  name.value = event.target.value;

  if (errors.value.name) {
    errors.value.name = validateName(name.value);
  }
};

const handlePhoneInput = (event) => {
  phone.value = event.target.value;

  if (errors.value.phone) {
    errors.value.phone = validatePhone(phone.value);
  }
};

const handleSubmit = () => {
  const newErrors = {
    name: validateName(name.value),
    phone: validatePhone(phone.value),
  };

  errors.value = newErrors;

  if (newErrors.name || newErrors.phone) return;

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    isModalOpen.value = true;

    name.value = "";
    phone.value = "";
    coupon.value = "";
    showCoupon.value = false;
    installment.value = false;
    isAgreed.value = false;
    errors.value = {};
  }, 1500);
};
</script>

<template>
  <form :class="styles['order-form']" @submit.prevent="handleSubmit">
    <div :class="styles['order-form__field']">
      <input
        type="text"
        :class="styles['order-form__input']"
        placeholder="Имя"
        autocomplete="name"
        :value="name"
        @input="handleNameInput"
      />

      <p v-if="errors.name" :class="styles['order-form__error']">
        {{ errors.name }}
      </p>
    </div>

    <div :class="styles['order-form__field']">
      <input
        type="tel"
        :class="styles['order-form__input']"
        placeholder="Телефон"
        autocomplete="tel"
        :value="phone"
        @input="handlePhoneInput"
      />

      <p v-if="errors.phone" :class="styles['order-form__error']">
        {{ errors.phone }}
      </p>
    </div>

    <button
      type="button"
      :class="styles['order-form__coupon-link']"
      @click="showCoupon = true"
    >
      Есть купон?
    </button>

    <input
      v-if="showCoupon"
      v-model="coupon"
      type="text"
      :class="styles['order-form__input']"
      placeholder="Введите купон"
    />

    <div :class="styles['order-form__summary']">
      <div :class="styles['order-form__total-price']">
        <strong :class="styles['order-form__final-price']">
          {{ finalPrice.toLocaleString("ru-RU") }} ₽
        </strong>

        <span :class="styles['order-form__old-price']">
          {{ totalPrice.toLocaleString("ru-RU") }} ₽
        </span>

        <span :class="styles['order-form__total-discount']">
          -{{ totalDiscountPercent.toFixed(0) }}%
        </span>
      </div>

      <label
        :class="[
          styles['order-form__checkbox'],
          styles['order-form__checkbox_installment'],
        ]"
      >
        <input v-model="installment" type="checkbox" />
        Хочу купить в рассрочку
      </label>

      <input
        type="hidden"
        name="comment"
        :value="installment ? 'Купить в рассрочку' : ''"
        readonly
      />

      <button
        type="submit"
        :disabled="!isAgreed || isLoading"
        :class="styles['order-form__submit-button']"
      >
        {{ isLoading ? "Отправка..." : "Заказать" }}
      </button>

      <label
        :class="[
          styles['order-form__checkbox'],
          styles['order-form__checkbox_agreement'],
        ]"
      >
        <input v-model="isAgreed" type="checkbox" />
        <span>
          Даю согласие на обработку персональных данных в соответствии с
          условиями политики конфиденциальности. Подтверждаю ознакомление и
          согласие с условиями Публичной оферты.
        </span>
      </label>
    </div>
  </form>

  <div v-if="isModalOpen" :class="styles['order-modal']">
    <div :class="styles['order-modal__content']">
      <button
        type="button"
        :class="styles['order-modal__close-button']"
        @click="isModalOpen = false"
      >
        ×
      </button>

      <h2>Благодарим за заказ!</h2>

      <p>
        Менеджер уже получил Ваше обращение, он свяжется с Вами в течение
        10 минут.
      </p>
    </div>
  </div>
</template>
