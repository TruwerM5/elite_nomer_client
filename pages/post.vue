<script lang="ts" setup>

// const CarNumberForm = useCarNumberStore();
const numberStore = useCarNumberStore();
const catalogStore = useCatalogStore();
const priceInput = ref<number>(0);


function addToCatalog() {
    catalogStore.addProduct({
        id: catalogStore.nextId,
        characters: numberStore.id_value,
        region: numberStore.region_value,
        price: priceInput.value
    });
    numberStore.clearInputs();
    priceInput.value = 0;
}

</script>


<template>
    <div class="post-page page">
        <div class="post">
            <h3 class="post__title">Добавить номер</h3>
            <form @submit.prevent class="post__form">
                <CarNumberForm />
                <label for="price" class="post__price-label">
                    <span class="post__price-text">Цена, руб: </span>
                    <input type="number" 
                    name="price" 
                    id="price" 
                    class="post__price-input"
                    v-model="priceInput">
                </label>
                <button @click="addToCatalog"
                class="primary-button post__button">Добавить</button>
            </form>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.post
    &__title
        font-size: 26px
        text-align: center
        margin-bottom: 15px
    &__form
        display: flex
        flex-direction: column
        align-items: center
    &__price-label
        display: grid
        grid-template-columns: 40% 60%
        margin-top: 15px
    &__price-text
        font-size: 24px
    &__price-input
        font-size: 24px
        border: 2px solid #000
        border-radius: 8px
        text-align: center
    &__button
        margin: 25px auto 0 auto
</style>