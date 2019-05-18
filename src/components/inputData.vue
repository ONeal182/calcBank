<template>
<div class="calc__leftSide__content__wrapper__controls__control">
    <div class="calc__leftSide__content__wrapper__controls__control__title">
        <span class="nameInput">Срок</span>
        <p>{{parseInt(inputVaileData).toLocaleString()}} мес.</p>
    </div>

    <input type="range" name="" @input="colorData" class="myinput" id="myinput2"  min="6" max="60" step="6" v-model="inputVaileData">

</div>
</template>

<script>
export default {
    data(){
        return {
            inputVaileData: 30
        }
    },
    methods: {
    colorData() {
        const input = document.getElementById("myinput2");
        this.$emit('localData', parseInt(this.inputVaileData))
        return input.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+((input.value)/0.54-10) +'%, #f9f9f9 ' + ((input.value)/0.54-10) + '%, #f9f9f9 100%)'
       }
    }
}
</script>

<style lang="less">

</style>