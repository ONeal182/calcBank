<template>
<div class="calc__rightSide__content__st__right">
    <h2 class="calcSum" style="width: 155px">+{{SumCity.toLocaleString()}} Р</h2>
    <span class="persent">25 % годовых</span>
    <div
        class="chart-cylinder chart-cylinder-green-shadow cityMoney"
        id="cityMoney"
        style="z-index: 1; border-radius:50%/23px ;"
        :style = "{ height: heightDiagramCity}"
        ></div>
    <div
        class="chart-cylinder chart-cylinder-white-shadow"
        style="height: 69px; margin-top: -35px; border-radius: 50%/23px ; "></div>
    <p style="text-align:center; padding-bottom:90px;" class="namePersent">Город Денег</p>
</div>
</template>

<script>
export default {
    props:['SumCity', 'heightDiagramCity'],
    data(){
        return{
            
            }
    }
}
</script>

<style lang="less">

</style>

