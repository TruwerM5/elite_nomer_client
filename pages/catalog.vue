<script lang="ts" setup>
const catalogStore = useCatalogStore();


</script>

<template>
    <div class="page catalog-page">
        <h1 class="page__title">Каталог</h1>
        <div class="catalog">
            <ProductListVue :products="catalogStore.products" />
        </div>
    </div>
</template>