<template>
 <div class="calc__leftSide__content__wrapper__controls__control">
    <div class="calc__leftSide__content__wrapper__controls__control__title">
        <span class="nameInput">Сумма</span>
        <p>{{parseInt(inputValueMoney).toLocaleString()}} ₽</p>
    </div>
        <input type="range" name="" @input="colorMonye" class="myinput" id="myinput1" min="100000" step="10000" max="5000000" v-model="inputValueMoney"  >  
</div> 
</template>

<script>
export default {
    
   data(){
        return {
            inputValueMoney: 2500000
        }
    },
    methods: {
    colorMonye() {
        
        this.$emit('localMoney', parseInt(this.inputValueMoney))
        const input = document.getElementById("myinput1") 

        return input.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+((input.value)/50000) +'%, #f9f9f9' + ((input.value)/50000) + '%, #f9f9f9 100%)'
      },
      
    }
     
}
</script>

<style lang="less">

</style>

