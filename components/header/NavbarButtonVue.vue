<script lang="ts" setup>

const isNavbarOpened = useNavbarStore();

</script>

<template>
    <button @click="toggleNavbar" 
    class="navbar-button">
        <span v-for="line,i in 3" :key="i"
         :class="[`navbar-button__line navbar-button__line_${line}`,
            {'opened': isNavbarOpened}
         ]"></span>
    </button>
</template>

<style lang="sass" scoped>
.navbar-button
    position: relative
    width: 25px
    height: 20px
    background-color: transparent
    &__line
        position: absolute
        left: 0
        height: 3px
        width: 100%
        background-color: #fff
        transition: all .3s
        &_1
            top: 0
            transform-origin: center center
            &.opened
                top: 50%
                transform: rotate(45deg) translateY(-50%)
        &_2
            top: 50%
            transform: translateY(-50%)
            &.opened
                transform: translateX(15px)
                opacity: 0
        &_3
            bottom: 0
            transform-origin: center center
            &.opened
                bottom: 50%
                transform: rotate(-45deg) translateY(50%)
</style>