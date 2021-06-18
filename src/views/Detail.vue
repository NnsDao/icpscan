<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { fetchSearch }  from "../api/index.js";
import { useRoute } from "vue-router";
import * as moment from "moment";
import { Decimal } from 'decimal.js';
import { reactive, onMounted, watchEffect } from 'vue'


export default defineComponent({
  components: { Header,Footer },

  setup() {

    function getTodayUnix() {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    }

    function MDate(dval) {
        var dval = parseInt(dval / 1000000) ; // 转换纳秒
        var interval = (new Date().getTime() - dval) / 1000;
            if (Math.floor(interval / 60) <= 0) {//1 分钟之前
            return 'just now';
        } else if (interval < 3600) {//1 分钟到 1 小时之间
            return Math.floor(interval / 60) + ' minutes ago';
        } else if (interval >= 3600 && (dval - this.getTodayUnix() >= 0)) {//1 小时到 1 天之间
            return Math.floor(interval / 3600) + ' hours ago';
        } else if (interval / (3600 * 24) <= 31) {//1 天到 1 个月（假设固定为 31 天）之间
            return Math.ceil(interval / (3600 * 24)) + ' days ago';
        } else {
            return this.moment(dval).format("YYYY-MM-DD hh:mm:ss");
        }
    }



    const route = useRoute();
    const getParams = () => {
      return route.params;
    };

    const list = ref([]);
    // const getDetail = (id) => {
    //   const data = {
    //     recorde_addr: id,
    //   };
    //   fetchSearch(data).then((res) => {
    //     console.log("APP:::", res.data);
    //     list.value = res && res.data;
    //   });
    // };

    const getDetail = async (id) => {
        console.log(id,34324)
      const res = await fetch(
        `https://api.baqiye.com/api/block/search?recorde_addr=`+id
      ).then(rsp => rsp.json())
      list.value=   res && res.data;
    }

    // onMounted(() => {
    //   watchEffect(() => {
    //     getDetail()
    //   })
    // })

    return {
      list,
      getParams,
      getDetail,
      MDate,
      moment,
      getTodayUnix,
      Decimal,
    };
  },
  data() {
    return {};
  },
  methods: {},
  created: function () {
    const { id } = this.getParams() ; 
     this.getDetail(id);
  },
  mounted: function () {
    console.log("mounted:" + this.getParams().id);
  },
});
</script>

<template>
  <Header />
 <main>
<div class="min-h-screen  m-10">
    
    <div class="max-w-7xl  bg-white  rounded-lg ">
        <!-- 二级面包导航 -->
         <ul class="flex">
            <li><a href="/" class="underline font-semibold"> {{ t('iHome') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="/rank" class="underline font-semibold"> {{ t('iList') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li> {{ t('iTransferDetail') }}</li>
        </ul>

        <div class="p-4 border-b mt-5">
            <h2 class="text-2xl ">
                {{ t('iTransactionInfo') }}
            </h2>
            <!-- <p class="text-sm text-gray-500">
                Personal details and application. 
            </p> -->
        </div>
        <div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                   {{ t('iTransferHash') }}
                </p>
                <p>
                    {{ list.Tranidentifier }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                   {{ t('iType') }}
                </p>
                <p v-if="list.Otype == 'MINT'">
                     {{ t('iMint') }}
                </p>
                 <p v-else>
                     {{ t('iTransfer') }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iSymbol') }}
                </p>
                <p>
                     {{ list.Symbol }}
                </p>
            </div>

            
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iTransferStatus') }}
                </p>
                <p v-if="list.Status == 'COMPLETED'">
                     {{ t('iOstatusSuccess') }}
                </p>
                <p v-else> {{ t('iOstatusFail') }}</p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                      {{ t('iBlockHeight') }}
                </p>
                <p>
                     {{ list.BlockHeight }}
                </p>
            </div>

            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                     {{ t('iTimestamp') }}
                </p>
                <p>
                     {{   this.MDate(list.Timestamp ) }}
                </p>
            </div>

            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iFromAddress') }}
                </p>
                <p>
                     {{ list.From }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iToAddress') }}
                </p>
                <p>
                     {{ list.To }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iAmount') }}
                </p>
                <p>
                    {{     new Decimal(list.Amount ? list.Amount : 0.001 ).div(new Decimal(100000000)).toNumber()  }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iFee') }}
                </p>
                <p>
                    {{  new Decimal(list.Fee  ? list.Fee  : 0.0001 ).abs().div(new Decimal(100000000)).toNumber()  }} ICP
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                   {{ t('iMemo') }}
                </p>
                <p>
                    {{ list.Memo }}
                </p>
            </div>
            <!-- <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                <p class="text-gray-600">
                    Attachments
                </p>
                <div class="space-y-2">
                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                resume_for_manager.pdf
                            </span>
                        </div>
                        <a href="#" class="text-purple-700 hover:underline">
                            Download
                        </a>
                    </div>

                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                resume_for_manager.pdf
                            </span>
                        </div>
                        <a href="#" class="text-purple-700 hover:underline">
                            Download
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- join daos -->
    <!-- <a href="https://t.me/NnsDaos" target="_blank" class="bg-purple-600 p-2 rounded-lg text-white fixed right-0 bottom-0">
        加入定投群
    </a> -->
</div>

</main>
  <Footer /> 

</template>
