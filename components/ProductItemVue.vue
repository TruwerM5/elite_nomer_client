<script lang="ts" setup>
import type { Product } from '~/types/product';


const props = defineProps<{product: Product}>();
const purchaseStore = usePurchaseStore();

function onButtonClick() {
    purchaseStore.toggleForm();
    purchaseStore.setCurrentProduct(props.product);
}

</script>

<template>
    <div class="product-wrapper">
        <div class="product">
            <div class="product__number-id">
                <span class="product__number-id-text product__text">
                    {{ product.characters }}
                </span>
            </div>
            <div class="product__region">
                <span class="product__region-text product__text">
                    {{ product.region }}
                </span>
                <div class="product__region-bottom">
                    <span class="product__region-bottom-tex">RUS</span>
                    <img src="/russia-icon.png" alt="RUS" class="product__icon">
                </div>
            </div>
        </div>
        <div class="product-bottom">
            <span class="product-price">{{ product.price }}р.</span>
            <button @click="onButtonClick" class="primary-button product-button">Купить</button>
        </div>
        
    </div>
    
    
</template>

<style lang="sass">
.product-wrapper
    display: flex
    flex-direction: column
    align-items: center
.product
    display: grid
    grid-template-columns: 70% 30%
    border: 3px solid #000
    width: 100%
    border-radius: 8px
    max-width: 400px
    &__text
        font-family: Roboto
    &__number-id
        display: flex
        align-items: center
        justify-content: center
        font-size: 55px
    &__region
        border-left: 3px solid #000
    &__region-text
        font-size: 45px
        text-align: center
        line-height: 1
    &__region-bottom
        display: flex
        align-items: center
        justify-content: center
        gap: 10px

.product-bottom
    display: flex
    align-items: center
    gap: 20px
    margin-top: 15px

.product-price
    flex: 1
    font-size: 24px
    text-align: center
    text-decoration: underline
</style>