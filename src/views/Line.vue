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

        <div class="flex flex-wrap text-center justify-center">

          <div class=" sm:-m-4 -mx-4 -mb-10 -mt-4">
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

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpDayBlock') }}</div>
                    <div class="flex-grow ">
                        <div id="myEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div>

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpDayBurn') }}</div>
                    <div class="flex-grow ">
                        <div id="myBurnEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div>

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpDayMint') }}</div>
                    <div class="flex-grow ">
                        <div id="myMintEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div>

          <!-- myAmountEcharts -->

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpDayMoney') }}</div>
                    <div class="flex-grow ">
                        <div id="myAmountEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div>

          <!-- transationCount -->

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-10  md:mb-0 mb-6   ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                    <div class="mb-5">{{ t('iTrackIcpDayTransation') }}</div>
                    <div class="flex-grow ">
                        <div id="myTransationEcharts" :style="{ width: '650px', height: '300px' }"></div>
                    </div> 
                </div>
              </div>
            </div>
          </div>

          <!-- cycle mint   -->

          <div class="sm:-m-4 -mx-4 -mb-10 -mt-4">
               <div  id="mySubnetEcharts" :style="{ width: '1280px', height: '620px' }"></div>
          </div>

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

export default {
  name: "Chart",
  components: { Header, Footer },
  setup() {


    let echart = echarts;
 
    onUnmounted(() => {
      echart.dispose;
    });
	
    function initTrackChart(dates,balance) {
      let chart = echart.init(document.getElementById("myTrackEcharts"), "dark");
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
            chart.resize();
        };
    }


    function initChart(dates,balance) {
      let chart = echart.init(document.getElementById("myEcharts"), "dark");
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
            chart.resize();
        };
    }

    function myBurnEcharts(dates,balance) {
      let chart = echart.init(document.getElementById("myBurnEcharts"), "dark");
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
            chart.resize();
        };
    }

    function myMintEcharts(dates,balance) {
      let chart = echart.init(document.getElementById("myMintEcharts"), "dark");
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
            chart.resize();
        };
    }

    function myAmountEcharts(dates,balance) {
      let chart = echart.init(document.getElementById("myAmountEcharts"), "dark");
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
            chart.resize();
        };
    }
    // myTransationEcharts

    function myTransationEcharts(dates,balance) {
      let chart = echart.init(document.getElementById("myTransationEcharts"), "dark");
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
            chart.resize();
        };
    }

    // subnet 

      function mySubnetEcharts(datas,count) {
        let chart = echart.init(document.getElementById("mySubnetEcharts"), "dark");
        //config data
        let new_arr = datas.map(obj => {return obj.displayName})

        for (let i=0; i<datas.length; i++) {
          datas[i]['value'] = datas[i].canisterCount;
          datas[i].name= datas[i].displayName;
        }

        chart.setOption({
           tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
               x: 'left',
              right:'100px',
              data: new_arr
            },
            series: [
              {
                name: 'Canisters-per-subnet',
                type: 'pie',
                radius: ['40%', '55%'],
                labelLine: {
                  length: 40
                },
                label: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#F6F8FC',
                  borderColor: '#8C8D8E',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#6E7079',
                      lineHeight: 22,
                      align: 'center'
                    },
                    hr: {
                      borderColor: '#8C8D8E',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    b: {
                      color: '#4C5058',
                      fontSize: 14,
                      fontWeight: 'bold',
                      lineHeight: 33
                    },
                    per: {
                      color: '#fff',
                      backgroundColor: '#4C5058',
                      padding: [3, 4],
                      borderRadius: 4
                    }
                  }
                },
                data: datas
              }
            ]
          });
          window.onresize = function() {
              chart.resize();
          };
      }

    

    const trackAccount = ref([]);
    const tranAccount = ref([]);
    const burnAccount = ref([]);
    const mintCount = ref([]);
    const amountCount = ref([]);
    const subnetCount = ref([]);

    const getTrackAccount = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/accountDAU`
      ).then(rsp => rsp.json())
      trackAccount.value=   res && res.data;
      initTrackChart(res.data.Dt,res.data.Number);
    }
    // block create
    const getAccountOther = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/blockCount`
      ).then(rsp => rsp.json())
      tranAccount.value=   res && res.data;
      initChart(res.data.Dt,res.data.Count);
    }

    // canister data  myBurnEcharts

    const getBurnAccount = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/destroyAmount`
      ).then(rsp => rsp.json())
      burnAccount.value=   res && res.data;
      let burnCount = res.data.Count.map(val =>    new Decimal(val ? val : 1 ).div(new Decimal(100000000)).toNumber() )
      myBurnEcharts(res.data.Dt,burnCount);
    }
    // mint coin

    const getMintAccount = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/mintAmount`
      ).then(rsp => rsp.json())
      mintCount.value=   res && res.data;
      let mCount = res.data.Count.map(val =>    new Decimal(val ? val : 1 ).div(new Decimal(100000000)).toNumber() )
      myMintEcharts(res.data.Dt,mCount);
    }
    // Transation  amount

    const getTransationAccount = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/transationAmount`
      ).then(rsp => rsp.json())
      amountCount.value=   res && res.data;
      let mCount = res.data.Count.map(val =>    new Decimal(val ? val : 1 ).div(new Decimal(100000000)).toNumber() )
      myAmountEcharts(res.data.Dt,mCount);
    }

    // Transation count

    const getTransationCount = async () => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/transationCount`
      ).then(rsp => rsp.json())
      amountCount.value=   res && res.data;
      myTransationEcharts(res.data.Dt,res.data.Count);
    }

    // subnet

     const mySubnetCount = async () => {
        const res = await fetch(
          `https://ic.rocks/api/subnets`
        ).then(rsp => rsp.json())
        subnetCount.value = res ; 
        mySubnetEcharts(res,res);
      }

    return {
      trackAccount,
      tranAccount,
      mintCount,
      getTrackAccount,
      getAccountOther,
      getBurnAccount,
      getMintAccount,
      getTransationAccount,
      getTransationCount,
      initTrackChart,
      initChart,
      myBurnEcharts,
      myMintEcharts,
      myAmountEcharts,
      myTransationEcharts,
      mySubnetEcharts,
      mySubnetCount,
    };
  },
   created: function () {
    let that = this;
    that.getTrackAccount();
    that.getAccountOther();
    that.getBurnAccount();
    that.getMintAccount();
    that.getTransationAccount();
    that.getTransationCount();
    that.mySubnetCount();
    
  },
};
</script>
