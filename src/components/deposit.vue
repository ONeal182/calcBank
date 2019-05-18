<template>
<div class="calc__rightSide__content__st__left">
    <h2 class="calcSum" style="width: 150px">+ {{SumNormal.toLocaleString()}} Р</h2>
    <span class="persent">6.5 % годовых</span>
    <div
        class="chart-cylinder chart-cylinder-green-shadow"
        id="normalMoney"
        style="z-index: 1; border-radius:50% / 23px ;">
     </div>
    <div
        class="chart-cylinder chart-cylinder-white-shadow depozit"
        style="height: 69px; margin-top: -35px; border-radius:50% / 23px ;">
    </div>
    <p style="text-align:center; padding-bottom:90px;" class="namePersent">Депозит 
        <span class="namePersent__quest">?</span>
    </p>
</div>
</template>

<script>
export default {
    
    data(){
        return {
         SumNormal: 0,
        }
    },
    methods: {
        calcSumNormal(){
            this.SumNormal =  (Math.round(this.inputValueMoney*Math.pow(1 + 0.065/12, this.inputVaileData) - this.inputValueMoney))
            
        }
    }
}
</script>

<style lang="less">

</style>

