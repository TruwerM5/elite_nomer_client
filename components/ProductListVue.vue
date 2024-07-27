<script lang="ts" setup>
import type { Product } from '~/types/product';


const props = defineProps<{products: Product[];}>();

</script>

<template>
    <div class="product-list">
        <ProductItemVue v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style lang="sass" scoped>

.product-list
    display: grid
    grid-template-columns: 1fr
    gap: 60px

</style>