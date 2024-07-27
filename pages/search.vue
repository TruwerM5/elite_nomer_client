<script lang="ts" setup>
import type { Product } from '~/types/product';


const route = useRoute();
const router = useRouter();
const catalogStore = useCatalogStore();
const filteredProducts = ref<Product[]>();

if(!route.query.characters && !route.query.region) {
    router.push({path: '/'});
}

filteredProducts.value = catalogStore.products.filter(product => {
    //тут переделать, при создании товара разделять число от букв
    if(route.query.characters) {
        return product.characters == route.query.characters ||
        (product.characters[0] == route.query.characters[0] &&
        product.characters[4] == route.query.characters[4] &&
        product.characters[5] == route.query.characters[5]
        ) ||
        (product.characters[1] == route.query.characters[1] &&
        product.characters[2] == route.query.characters[2] &&
        product.characters[3] == route.query.characters[3]
        )
    }
   
})

</script>

<template>
    <div class="search-page page search">
        <div class="search__inner">
            <template v-if="filteredProducts">
                <h3 class="search__title">Результаты поиска: </h3>
                <ProductListVue :products="filteredProducts" />
            </template>
            <span v-else class="search__message">По вашему запросу ничего не найдено</span>
            
        </div>
    </div>
</template>

<style lang="sass" scoped>
.search
    &__title
        font-size: 25px
        margin-bottom: 15px
</style>