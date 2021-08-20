<template>
  <Header />

    <div>
    <section class="text-gray-200 bg-gray-900">
        <div class="mx-auto px-5 py-20 ">

          <div class="text-center mb-10">
            <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"> {{ t('iTrackIcpData') }}</h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

        <div class="flex flex-wrap">

          <div class=" sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6  ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpWallet') }}</div>
                  <div class="flex-grow ">
                       <div id="myTrackEcharts" :style="{ width: '650px', height: '300px' }"></div>
                  </div> 
                </div>
              </div>
            </div>
          </div>

           <!-- <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpWallet') }}</div>
                    <div class="flex-grow ">
                        <div id="myEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div> -->


           <!-- <div class="  sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                  <div class="flex-grow ">
                       <div id="myEcharts" :style="{ width: '400px', height: '300px' }"></div>
                  </div> 
                </div>
              </div>
            </div>
          </div> -->

          </div>
           
        </div>
    </section>
    </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import * as echarts from "echarts";
import { Decimal } from 'decimal.js';
import { ref, onMounted,onUnmounted } from "vue";
// import { identity } from "../api/identity.js";

export default {
  name: "Chart",
  components: { Header, Footer },
  setup() {


    let echart = echarts;
    let identity = identity ;
 
    onUnmounted(() => {
      echart.dispose;
    });
	
    function initTrackChart(dates,balance) {
      let chart = echart.init(document.getElementById("myTrackEcharts"), "dark");

      // console.log(dates,balance,89898)
      //config data
      chart.setOption({
        xAxis: {
          type: "category",
          data: dates,
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: balance,
            type: "line",
            smooth: true
          }
        ]
      });
        window.onresize = function() {
            //自适应大小
            chart.resize();
        };
    }


    function initChart(dates,balance) {
      let chart = echart.init(document.getElementById("myEcharts"), "dark");

      console.log(dates,balance,89898)
      //config data
      chart.setOption({
        xAxis: {
          type: "category",
          data: dates,
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: balance,
            type: "line",
            smooth: true
          }
        ]
      });
        window.onresize = function() {
            //自适应大小
            chart.resize();
        };
    }

    const trackAccount = ref([]);
    const tranAccount = ref([]);
    const texasAccount = ref([]);

    const getTrackAccount = async () => {
      const res = await fetch(
        `https://api.baqiye.com/api/block/accountDAU`
      ).then(rsp => rsp.json())
      trackAccount.value=   res && res.data;
      initTrackChart(res.data.Dt,res.data.Number);
    }

    const getAccountOther = async () => {
      const res = await fetch(
        `https://api.baqiye.com/api/block/accountDAU`
      ).then(rsp => rsp.json())
      tranAccount.value=   res && res.data;
      initChart(res.data.Dt,res.data.Number);
    }

    // canister data 

    // const getTexasData = async () => {
    //     const canisterId = 'ery6l-taaaa-aaaah-aaeqq-cai';
    //     const resd = identity.createActor(canisterId) ; 
    //     texasAccount.value = await resd.totalUsers();
    // }

    // console.log(texasAccount,777777)

    return {
      trackAccount,
      tranAccount,
      getTrackAccount,
      getAccountOther,
      initTrackChart,
      initChart,
      // getTexasData,
    };
  },
   created: function () {
    let that = this;
    that.getTrackAccount();
    // that.getTexasData();
    
  },
};
</script>
