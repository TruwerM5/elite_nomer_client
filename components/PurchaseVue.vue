<script lang="ts" setup>

const purchaseStore = usePurchaseStore();
const catalogStore = useCatalogStore();
const buyer_name = ref('');
const user_email = ref('');
const phone_number = ref('');
</script>

<template>
    <Transition name="fade">
        <div v-if="purchaseStore.isOpened" class="purchase">
            <button @click="purchaseStore.toggleForm" class="purchase__close-button">
                <span class="purchase__line purchase__line_1"></span>
                <span class="purchase__line purchase__line_2"></span>
            </button>
            <div class="purchase__inner">
                <h3 class="purchase__title">Заказ гос.номера</h3>
                <div v-if="purchaseStore.currentProduct" class="current-product product">
                    <div class="product__number-id">
                        <span class="product__number-id-text product__text">
                            {{ purchaseStore.currentProduct.characters }}
                        </span>
                    </div>
                    <div class="product__region">
                        <span class="product__region-text product__text">
                            {{ purchaseStore.currentProduct.region }}
                        </span>
                        <div class="product__region-bottom">
                            <span class="product__region-bottom-tex">RUS</span>
                            <img src="/russia-icon.png" alt="RUS" class="product__icon">
                        </div>
                    </div>
                </div>
                <form @submit.prevent class="purchase__form">
                    <label for="buyername" class="purchase__label">
                        <span class="purchase__text">Ваше имя: </span>
                        <input type="text" 
                        name="buyername" 
                        id="buyername"
                        class="purchase__input"
                        v-model="buyer_name">
                    </label>
                    <label for="email" class="purchase__label">
                        <span class="purchase__text">Адрес эл. почты: </span>
                        <input type="text" 
                        name="email" 
                        id="email"
                        class="purchase__input"
                        v-model="user_email"
                        placeholder="username3000@mail.ru">
                    </label>
                    <label for="phone_number">
                        <span class="purchase__text">Номер телефона: </span>
                        <input type="text" 
                        name="phone_number" 
                        id="phone_number"
                        class="purchase__input"
                        v-model="phone_number"
                        placeholder="+7 (999) 999 99 99">
                    </label>
                    <button class="purchase__button primary-button">Заказать</button>
                </form>
            </div>
        </div>
    </Transition>
</template>

<style lang="sass" scoped>
.purchase
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #fff
    padding: 80px 20px 0 20px
    &__inner
        display: flex
        flex-direction: column
        align-items: center
    &__title
        font-size: 30px
        font-family: Roboto
        margin-bottom: 15px
    &__close-button
        position: absolute
        top: 20px
        right: 20px
        width: 30px
        height: 25px
        background-color: transparent
        z-index: 1
    &__line
        position: absolute
        left: 0
        height: 3px
        width: 100%
        background-color: #000
        transform-origin: center center
        &_1
            transform: rotate(45deg)
        &_2
            transform: rotate(-45deg)
    &__form
        margin-top: 20px
        display: flex
        flex-direction: column
        align-items: center
        gap: 15px
    &__text
        font-size: 24px
    &__input
        padding: 5px
        font-size: 22px
        border: 1px solid #000
    &__button
        margin-top: 50px
</style>