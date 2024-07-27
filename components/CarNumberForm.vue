
<script lang="ts" setup>


const numberStore = useCarNumberStore();
const region_input = ref<any>();
function uppercaseNumberId() {
    numberStore.id_value = numberStore.id_value.toUpperCase(); 
}

function onKeyUp() {
    uppercaseNumberId();
    if(numberStore.id_value.length == 6) {
        region_input.value.focus();
    }
}


</script>
<template>
    <div class="car-number-form">
        
        <div class="car-number-form__id">
            <input type="text" name="number_id" id="number_id" 
            maxlength="6" minlength="6"
            placeholder="М707РН"
            class="car-number-form__input car-number-form__id-input"
            v-model="numberStore.id_value"
            @keyup="onKeyUp">
        </div>
        <div class="car-number-form__region">
            <input type="text" name="number_region" id="number_region" 
            minlength="2" maxlength="3"
            placeholder="716"
            v-model="numberStore.region_value"
            ref="region_input"
            class="car-number-form__input car-number-form__region-input">
            <div class="car-number-form__region-bottom">
                <span class="car-number-form__region-text">
                    RUS
                </span>
                <img src="/russia-icon.png" alt="rus" class="car-number-form__region-icon">
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

.car-number-form
    display: grid
    grid-template-columns: 70% 30%
    border: 3px solid #000
    width: 100%
    border-radius: 8px
    max-width: 400px
    &__input
        border-radius: 8px
        text-align: center
        letter-spacing: 2px
    &__id-input
        height: 100%
        padding-block: 5px
        padding-left: 10px
        font-size: 50px
    &__region
        padding-top: 10px
        border-left: 2px solid #000
    &__region-input
        height: 50%
        font-size: 40px
    &__region-bottom
        display: flex
        align-items: center
        justify-content: center
        font-family: sans-serif
        font-weight: 600
        gap: 10px
    &__region-icon
        width: 30px
</style>