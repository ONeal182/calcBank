<template>
<div class="calc__leftSide__content__wrapper__controls__radios">
     <div class="calc__leftSide__content__wrapper__controls__radios__radio" v-for="radio in radios" :key="radio.title">
        <input type="radio" name="rate" id="r1" :checked="radio.checked" :value="radio.persent"> <span>{{radio.title}}</span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            radios: [
            {title: 'Консервативный', persent: 0.08, checked: true},
            {title: 'Сбалансированный', persent: 0.18, checked: false},
            {title: 'Рискованный', persent: 0.25, checked: false},

        ]
        }
    }
}
</script>

<style lang="less">

</style>