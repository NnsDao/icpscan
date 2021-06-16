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
    const getDetail = (id) => {
      const data = {
        recorde_addr: id,
      };
      fetchSearch(data).then((res) => {
        console.log("APP:::", res.data);
        list.value = res && res.data;
      });
    };
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
    
    <div class="w-2/4  bg-white  rounded-lg shadow-xl ml-40 h-screen">
        <!-- 二级面包导航 -->
         <ul class="flex">
            <li><a href="/" class="underline font-semibold">首页</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="/rank" class="underline font-semibold">排行榜</a></li>
            <li><span class="mx-2">/</span></li>
            <li>账户详情</li>
        </ul>
        <div class="mt-5">
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Address(账户地址)
                </p>
                <p>
                    {{ list.Account }}
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                   Value(余额)
                </p>
                <p >
                    {{     new Decimal(list.Balance ).div(new Decimal(100000000)).toNumber()  }}
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Token(通证类型)
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
                    Memo(备注)
                </p>
                <p>
                    {{ list.Memo }}
                </p>
            </div>
         
        </div>
    </div>
</div>
<!-- tab -->
<!-- <div class="flex justify-center items-center h-screen">

    <div class="w-1/2 mx-auto mt-4  rounded">
        <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
            <li class="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50"><a id="default-tab" href="#first">All</a></li>
            <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#second">Clothes</a></li>
            <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#third">Electronics</a></li>
            <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#fourth">Others</a></li>
        </ul>

        <div id="tab-contents">
            <div id="first" class="p-4">
            First tab
            </div>
            <div id="second" class="hidden p-4">
            Second tab
            </div>
            <div id="third" class="hidden p-4">
            Third tab
            </div>
            <div id="fourth" class="hidden p-4">
            Fourth tab
            </div>
        </div>
    </div>

</div> -->

</main>
  <Footer /> 

</template>
