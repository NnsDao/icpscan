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

    return {
      list,
      getParams,
      getDetail,
      MDate,
      moment,
      getTodayUnix,
      Decimal,
      activeTab: 0,
      tabs: [
          "Tab No.1",
          "Tab No.2",
          "Tab No.3",
          "Tab No.4",
      ]
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
<div class="flex flex-row  mt-10">
    
    <div class="w-2/4  bg-white  rounded-lg shadow-xl ml-40 h-auto mb-10">
        <!-- 二级面包导航 -->
         <ul class="flex">
            <li><a href="/" class="underline font-semibold">{{ t('iHome') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="/rank" class="underline font-semibold">{{ t('iRank') }}</a></li>
            <li><span class="mx-2">/</span></li>
            <li>{{ t('iAccountDetail') }}</li>
        </ul>
        <div class="mt-5">
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iAccountAddress') }}
                </p>
                <p>
                    {{ list.Account }}
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
          

             <!-- <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Fee(总消耗手续费)
                </p>
                <p>
                    {{     new Decimal(list.Amount ? list.Amount : 0.001 ).div(new Decimal(100000000)).toNumber()  }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Transactions(转账次数)
                </p>
                <p>
                    {{  new Decimal(list.Fee  ? list.Fee  : 0.0001 ).abs().div(new Decimal(100000000)).toNumber()  }} ICP
                </p>
            </div> -->

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    {{ t('iMemo') }}
                </p>
                <p>
                    {{ list.Memo }}
                </p>
            </div>
         
        </div>
    </div>
</div>

<!-- tab -->

<!-- <div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">{{ t("iTransactions")}}</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">

      <tr>
        <td class="w-1/3 text-left py-3 px-4">Lian</td>
        <td class="w-1/3 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
     
    </tbody>
    </table>
  </div>
</div> -->


</main>
  <Footer /> 

</template>
