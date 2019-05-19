<template>
    <div class="wrapper">
      <div class="calc">
        <div class="calc__leftSide">
          <div class="calc__leftSide__content" >
              <div class="calc__leftSide__content__wrapper"   @change="calcDep" >
                <h2>Калькулятор доходности</h2>
                <div class="calc__leftSide__content__wrapper__controls">
                  <input-Money @localMoney="getMoney"></input-Money>
                  <input-data @localData="getData"></input-data> 
                  <input-Radio></input-Radio>
                 </div>
              </div>
            </div>
        </div>
        <div class="calc__rightSide">
          <div class="calc__rightSide__content">
            <div class="calc__rightSide__content__st">
                <cylinder-Deposit :heightDiagramNormal="heightDiagramNormal" :SumNormal="SumNormal"></cylinder-Deposit>
                <cylinder-City-Money :heightDiagramCity="heightDiagramCity" :SumCity="SumCity"></cylinder-City-Money>
            </div>
            <div class="calc__rightSide__content__button">
              <input type="button" value="Инвестировать">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import inputMoney from './components/inputMoney.vue'
import inputData from './components/inputData.vue'
import inputRadio from './components/radioButtons.vue'
import cylinderDeposit from './components/deposit.vue'
import cylinderCityMoney from './components/cityMoney.vue'
  export default {
    
    data () {
      return{
        inputValueMoney: 2500000,
        inputVaileData: 30,
        SumCity: 0,
        SumNormal: 0,
        heightDiagramNormal: String,
        heightDiagramCity: String,
        
        }
      
    },

    components: {
      inputMoney,
      inputData,
      inputRadio,
      cylinderDeposit,
      cylinderCityMoney
    },

    methods: {
      getMoney(inputValueMoney){
        this.inputValueMoney = inputValueMoney
        
        
      },

      getData(inputVaileData){
        this.inputVaileData = inputVaileData
        
        
      },
      
      calcDep(){
        
         const checkValue = document.querySelector('input[name="rate"]:checked').value;

         this.SumCity =  (Math.round(this.inputValueMoney*Math.pow(1 + checkValue/12, this.inputVaileData) - this.inputValueMoney))

         this.SumNormal =  (Math.round(this.inputValueMoney*Math.pow(1 + 0.065/12, this.inputVaileData) - this.inputValueMoney))
        
         this.heightDiagramCity = 140 + Math.round(((100-parseInt(this.SumNormal)/parseInt(this.SumCity)*100)/2)*2.8) + 'px'

         this.heightDiagramNormal = 140 - Math.round(((100-parseInt(this.SumNormal)/parseInt(this.SumCity)*100)/2)*2.8) + 'px'
         
         if (parseInt(this.heightDiagramNormal) < 45){

         return this.heightDiagramNormal = parseInt(this.heightDiagramCit) / 3 + 'px';

         } 
         
      },
      },
      created() {
         this.SumCity =  (Math.round(this.inputValueMoney*Math.pow(1 + 0.08/12, this.inputVaileData) - this.inputValueMoney).toLocaleString())

         this.SumNormal =  (Math.round(this.inputValueMoney*Math.pow(1 + 0.065/12, this.inputVaileData) - this.inputValueMoney).toLocaleString())
      }
   }

</script>

<style lang="less">
@import "smart-grid.less";
@font-face{

font-family: 'GothamPro';

src: url('./fonts/gotham.ttf');



font-weight: bold;

font-style: normal;

}

@font-face{

font-family: 'CircleBold';

src: url('./fonts/CircleBold.ttf');



font-weight: bold;

font-style: normal;

}

@font-face{

font-family: 'CircleRegular';

src: url('./fonts/CircleRegulfr.ttf');



font-weight: bold;

font-style: normal;

}

.calcSum{
  font-family: CircleBold;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: center;
  text-align: left;
}
.persent{
  font-family: CircleRegular;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color:#333333;
  opacity: 0.6;
 
}

.myinput{
  width: 80%;

}
.myinput {
  background: linear-gradient(to right, #4bd1a0 0%, #4bd1a0 50%, #f9f9f9 50%, #f9f9f9 100%);
  
  border-radius: 3px;
  width: 300px;
  height: 5px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}

.chart-cylinder {
  width: 137px;
  border-radius: 50% / 23px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  height: 100px;
  transition: height 1s ease;
  
  

  
}

.chart-cylinder:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 46px;
  border-radius: 0 0 50% 50%;
}


/* Цвета отдельно */
.chart-cylinder-green-shadow {
  background-color: #3ba67f;
  /* Тень писал наугад, может быть не совсем правильной */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}

.chart-cylinder-green-shadow:before {
  background-color: #4bd1a0;
}

.chart-cylinder-white-shadow {
  background-color: #f9f9f9;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chart-cylinder-white-shadow:before {
  background-color: #e8e8e8;
 
}

input[type=range]::-webkit-slider-runnable-track {
  
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  
  border-radius: 1px;
  border: 0px solid rgba(24, 213, 1, 0);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1.9px 1.9px 3.7px rgba(0, 0, 0, 0.2), 0px 0px 1.9px rgba(13, 13, 13, 0.2);
  border: 8px solid #ffffff;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #4bd1a0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3px;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f9f9f9;
  border-radius: 1px;
  border: 0px solid rgba(24, 213, 1, 0);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1.9px 1.9px 3.7px rgba(0, 0, 0, 0.2), 0px 0px 1.9px rgba(13, 13, 13, 0.2);
  border: 8px solid #ffffff;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #4bd1a0;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #f9f9f9;
  border: 0px solid rgba(24, 213, 1, 0);
  border-radius: 2px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-fill-upper {
  background: #f9f9f9;
  border: 0px solid rgba(24, 213, 1, 0);
  border-radius: 2px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-thumb {
  box-shadow: 1.9px 1.9px 3.7px rgba(0, 0, 0, 0.2), 0px 0px 1.9px rgba(13, 13, 13, 0.2);
  border: 8px solid #ffffff;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #4bd1a0;
  cursor: pointer;
  height: 3px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #f9f9f9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #f9f9f9;
}
body{
  background-color: #f9f9f9;
}
    
.reset();
.wrapper{
  .wrapper();
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.calc{
  justify-content: center;
  align-items: center;
  height: 800px;
  
  .row-flex();
  flex-wrap: nowrap;
  &__leftSide{
    background-color: #fff;
    z-index: 100;
    max-width: 407px;
    height: 557px;
    box-shadow: 0 3px 7px 0 rgba(51, 51, 51, 0.15);
    height: 557px;
    display: flex;
    border-radius: 8px;

    
      &__content{
        
        display: flex;
        
        
        &__wrapper{
          margin:50px 67px 50px 40px;
          display:flex;
          flex-direction: column;
          &__controls{
            display: flex;
            flex-direction: column;
            &__control{
              & {
                
                font-family: CircleBold;
                font-size: 20px;
                line-height: 1.45;
                letter-spacing: normal;
                text-align: left;
                color: #333333;
                
              }
              & .nameInput{
                width: 45px;
                height: 23px;
                opacity: 0.6;
                font-family: CircleRegular;
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: normal;
                text-align: left;
                color: #333333;
                
              }
            }
            
            height: 90%;
            &__radios{
              display: flex;
              flex-direction: column;
              margin-top:53px;
              &__radio{
                font-family: CircleBold;
                font-size: 16px;
                display: flex;
                align-items: center;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: normal;
                text-align: left;
                margin-bottom:18px;
                & input{
                  margin-right: 15px;
                  outline: none;
                }
                
                & input[type="radio"]:checked {
                    
                    border: 5px solid #4bd1a0;
                    width: 20px;
                    height: 20px;
                    border-radius: 23px;
                    background: #fff;
                    cursor: pointer;
                    -webkit-appearance: none;
                    
                    
                  }
                  & input[type="radio"]:not(:checked) {
                    border-radius: 23px;
                    border: solid 0.5px rgba(51, 51, 51, 0.3);
                    
                    width: 20px;
                    height: 20px;
                    border-radius: 23px;
                    background: #fff;
                    cursor: pointer;
                    -webkit-appearance: none;
                    
              }
              }
            }
          }
          & h2{
            font-family: GothamPro;
            font-size: 25px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.4;
            letter-spacing: normal;
            text-align: left;
            color: #333333;
            width: 170px;
            height: 57px;
            padding-bottom: 47px;
            

          }
        }
        
      }
  }
  &__rightSide{
    border-radius: 8px;
    width: 607px;
    background-color:#fff;
    margin-left:-20px;
    height: 517px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    
    
    border: solid 1px rgba(51, 51, 51, 0.1);
    border-radius: 8px;
    
    &__content{
      width: 100%;
      height: 100%;
      background-color: white;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      position: relative;
      &__button{
        position: absolute;
        top:94%;
        & input{
          width: 195px;
          height: 60px;
          border-radius: 30px;
          box-shadow: 0 4px 8px 0 rgba(245, 81, 81, 0.8);
          background-color: #f55151;
          outline: none;
          border:none;
          cursor: pointer;
          font-family: CircleBold;
          font-size: 18px;
          font-style: normal;
          font-stretch: normal;
          line-height: 2.67;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
          
        }
      }
      &__st{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        &__left{
          height: 100%;
          
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        &__right{
          height: 100%;
          margin-left:10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      }
    }
  }

  
}
.namePersent{
    font-family: CircleRegular;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    &__quest{
      padding:0px 8px;
      margin:5px;
      color:#4bd1a0;
      border-radius: 14px;
      border: solid 1px #4bd1a0;
      text-align: center;
    }
}

@media (max-width: 1059px) {
  .calc__leftSide{
    width: 389px;
    height: 557px;
  }
  .calc__rightSide{
    width: 633px;
    height: 517px;
  }
}
@media (max-width: 1020px) {
  .calc{
    flex-wrap: wrap;
  }
  
  .calc__leftSide{
    width: 346px;
    height: 493px;
    padding:40px 30px 38px 0px;
    &__content{
      &__wrapper{
        
        &__controls{
          &__radio{
            margin-top:40px;
          }
        }
      }
    }
  }
  .calc__rightSide{
    width: 374px;
    height: 493px;
    margin-right: -12px;
    padding-left: 34px;
  }
}
@media(max-width:500px){
  .wrapper{
   
    
  }
  .calc{
    flex-wrap:wrap;
    height: 100%;
     margin-top:46px;
     
    &__rightSide{
      margin-top: -20px;
    }
    
    &__leftSide{
      width: 252px;
      height: 386px;
      padding:20px;
      padding-bottom: 2px;
       &__content{
      
      &__wrapper{
        margin: 0px;
        & h2{
          padding-bottom: 0px;
          padding-bottom: 31px;
          width: 188px;
          height: 39px;
          font-family: GothamPro;
          font-size: 16px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
          text-align: left;
        }
        &__controls{
          &__control{
            &__title{
                  display: flex;
                  justify-content: space-between;
                  & p{
                    font-size: 16px;
                  }
                  & span{
                    font-size: 14px;
                  }
                }
          }
          &__radios{
            margin-top:40px;
          }
        }
      }
    }
    }
   
    
    &__rightSide{
      margin-right: 0px;
      padding-left: 0px;
       width: 242px;
      height: 406px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 90px;
      margin-top: -20px;
     &__content{
        width: 242px;
      height: 406px;
      &__st{
      width: 242px;
      height: 406px;
      &__right{
      align-items: flex-start;
      width: 50%;
      & p{
        font-size: 14px;
      }
      & h2{
        font-size: 18px;
        text-align: left
      }
      }
      &__left{
        align-items: flex-end;
        width: 50%;
        & p{
          font-size: 14px;
        }
        & h2{
          font-size: 18px;
          text-align: right
        }
      }
      }
     }

    }
  }
  .myinput{
    width: 232px;
  }
      .chart-cylinder {
      width: 80.9px;
      border-radius: 50% / 23px;
      position: relative;
      overflow: hidden;
      margin-top: 20px;
      height: 95px;

      transition: height .5s ease;
  
  

  
}
}

</style>
