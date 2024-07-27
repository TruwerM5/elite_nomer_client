<script lang="ts" setup>

const isSearchOpened = useSearchStore();
const numberStore = useCarNumberStore();
const router = useRouter();
function search() {
    toggleSearch();
    router.push({path: '/search', query: {
        characters: numberStore.id_value,
        region: numberStore.region_value,
    }});
    
}

</script>

<template>
    <Transition name="fade">
        <div v-if="isSearchOpened" :class="['search', {'opened': isSearchOpened}]">
            <h3 class="search__title">Поиск</h3>
            <CarNumberForm />
            <button @click="search"
             class="primary-button search__button">Найти</button>
            <button @click="toggleSearch" class="search__close-button">
                <span class="search__line search__line_1"></span>
                <span class="search__line search__line_2"></span>
            </button>
        </div>
    </Transition>
    
</template>

<style lang="sass" scoped>
.search
    position: fixed
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    padding-inline: 20px
    background-color: #fff
    z-index: 1
    &__title
        font-size: 30px
        text-align: center
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
    &__button
        margin-top: 15px
</style>