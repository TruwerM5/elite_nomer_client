<script lang="ts" setup>

const isNavbarOpened = useNavbarStore();

const navbar_list = [
    {
        id: 1,
        path: '/',
        title: 'Главная'
    },{
        id: 2,
        path: '/catalog',
        title: 'Каталог'
    },{
        id: 3,
        path: '/post',
        title: 'Добавить'
    },
]

</script>

<template>
    <nav :class="['navbar', {'opened': isNavbarOpened }]">
        <ul class="navbar__list">
            <li v-for="link in navbar_list" :key="link.id" 
            class="navbar__item" >
                <NuxtLink @click="closeNavbar"
                :to="{path: link.path}" class="navbar__link">
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="sass" scoped>
.navbar
    position: absolute
    top: 100%
    left: 0
    width: 100%
    z-index: 1
    max-height: 0
    overflow: hidden
    background-color: #fff
    transition: max-height .2s
    color: #000
    &.opened
        max-height: 400px
        border-bottom: 1px solid #ccc
    &__list
        padding-block: 20px
        display: flex
        flex-direction: column
        gap: 15px
        align-items: center
    &__item
        font-size: 22px
    &__link
        padding-inline: 60px
        font-family: Roboto
        color: #222224
        
</style>