<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { fetchSearch }  from "../api/index.js";
import { useRoute } from "vue-router";
import * as moment from "moment";
import { Decimal } from 'decimal.js';



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
            return '刚刚';
        } else if (interval < 3600) {//1 分钟到 1 小时之间
            return Math.floor(interval / 60) + ' 分钟前';
        } else if (interval >= 3600 && (dval - this.getTodayUnix() >= 0)) {//1 小时到 1 天之间
            return Math.floor(interval / 3600) + ' 小时前';
        } else if (interval / (3600 * 24) <= 31) {//1 天到 1 个月（假设固定为 31 天）之间
            return Math.ceil(interval / (3600 * 24)) + ' 天前';
        } else {
            return this.moment(dval).format("YYYY-MM-DD hh:mm:ss");
        }
    }



    const route = useRoute();
    const getParams = () => {
      return route.params;
    };

    const list = ref([]);
    const listAccount = ref([]);
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
      const res = await fetch(
        `https://api.baqiye.com/api/block/search?recorde_addr=`+id
      ).then(rsp => rsp.json())
      list.value=   res && res.data;
    }

     const getAccountDetail = async (id) => {
      const res = await fetch(
        `https://api.baqiye.com/api/block/searchDetail?account=`+id
      ).then(rsp => rsp.json())
      listAccount.value=   res && res.data;
    }

    console.log(listAccount,232323)

    return {
      list,
      listAccount,
      getParams,
      getDetail,
      getAccountDetail,
      MDate,
      moment,
      getTodayUnix,
      Decimal,
      activeTab: 0,
      pagination:'',
      current_page:'',
      last_page:'',
    };
  },
  data() {
    return {};
  },
  methods: {},
  created: function () {
    const { id } = this.getParams() ; 
    let that = this;
    that.getDetail(id);
    that.getAccountDetail(id)
    
  },
  mounted: function () {
    console.log("mounted:" + this.getParams().id);
  },
});

</script>

<template>
  <Header />
 <main>
<div class="flex flex-col md:flex-row container mx-auto">
    
    <div class="flex-col mt-5  bg-white  rounded-lg shadow-xl">
        <!-- 二级面包导航 -->
         <ul class="flex">
            <li><a href="/" class="underline font-semibold">{{ t('iHome') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="/rank" class="underline font-semibold">{{ t('iRank') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li>{{ t('iAccountDetail') }}</li>
        </ul>
        <div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iAccountAddress') }}
                </p>
                <p class="flex">
                     <span class="mr-3"> {{ list.Account }} </span>
                    
                    <span class="cursor-pointer "  
                            v-clipboard:copy="list.Account"
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg> 
                    </span>
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                   {{ t('iAccountValue') }}
                </p>
                <p >
                    {{     new Decimal(list.Balance ? list.Balance : 1 ).div(new Decimal(100000000)).toNumber()  }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iSymbol') }}
                </p>
                <p>
                     <!-- {{ list.Symbol }} -->
                     ICP
                </p>
            </div>
          

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Fee(总消耗手续费)
                </p>
                <p>
                    {{     listAccount.Total*10000 / 100000000  }} ICP
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Transactions(转账次数)
                </p>
                <p>
                    {{  listAccount.Total  }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iMemo') }}
                </p>
                <p>
                    {{ list.Memo ?  list.Memo : 'none' }}
                </p>
            </div>
         
        </div>
    </div>


    <!-- tab -->

    <div class="mt-5 space-y-1 p-3 border-b">
      <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
        <span class="inline-flex bg-purple-400 text-white rounded-full h-6 px-3 justify-center items-center text-">{{ t("iTransactions")}}</span>
        <span class="inline-flex px-2">{{ t("iTransactionsDesc")}}</span>
      </div>
    </div>

    <div class="flex">
      <table class="text-left w-full">
        <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
         
          <tr class="flex w-full space-y-1 p-2 border-b mb-2"  v-for="a in listAccount.Detail" :key="a.Amount" >
            <td class="p-4 w-40 truncate cursor-pointer hover:underline ... "   @click="goJump(a.Tranidentifier)">
                {{a.Tranidentifier}}  
               </td>
            <td class="p-4 ">
              <div class=" pr-3">
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> From #</span> {{a.From}} </div>
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> To #</span>  {{a.To}}</div>
                <div class="text-sm leading-5 font-semibold">   {{ this.MDate(a.Timestamp )}} </div>
              </div>
            </td>
            <td class="p-4 ">  {{    new Decimal(a.Amount).div(new Decimal(100000000)).toNumber() }} </td>
            <td class="p-4 " v-if="a.Account =='d3e13d4777e22367532053190b6c6ccf57444a61337e996242b1abfb52cf92c8' ">  {{ '币安/Binance' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='4dfa940def17f1427ae47378c440f10185867677109a02bc8374fc25b9dee8af' ">  {{ 'Coinbase' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='449ce7ad1298e2ed2781ed379aba25efc2748d14c60ede190ad7621724b9e8b2' ">  {{ 'Coinbase 2' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='e7a879ea563d273c46dd28c1584eaa132fad6f3e316615b3eb657d067f3519b5' ">  {{ 'OKEX' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='a6ed987d89796f921c8a49d275ec7c9aa04e75a8fc8cd2dbaa5da799f0215ab0' ">  {{ 'Coinlist' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='660b1680dafeedaa68c1f1f4cf8af42ed1dfb8564646efe935a2b9a48528b605' ">  {{ 'Coinbase 3' }}  </td>
            <td class="p-4 " v-else-if="a.Account =='76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820' ">  {{ 'NnsDaos' }}  </td>
            <td class="p-4 " v-else>  {{ t('iKnowUser')  }}  </td>
          </tr>
        
             
        </tbody>
      </table>
      <!-- page -->


    </div>

    </div>

</main>
  <Footer /> 

</template>
