<template>
    <header class="header">
        <div class="header__inner">
            <NuxtLink to="/" class="header__title">ЭлитНомер</NuxtLink>
            <HeaderSearchButtonVue />
            <HeaderNavbarButtonVue />
            <HeaderNavbarVue />
        </div>
    </header>
</template>

<style lang="sass" scoped>
.header
    position: relative
    padding: 10px 25px
    background-color: #1f54cf
    &__inner
        display: flex
        justify-content: space-between
        gap: 30px
        align-items: center
    &__title
        width: fit-content
        font-size: 30px
        font-family: 'Source Serif 4'
        color: #fff
</style>