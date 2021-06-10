<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { fetchRank }  from "../api/index.js";
import { Decimal } from 'decimal.js';

 import * as moment from "moment";

 
export default defineComponent({
  components: { Header, Footer },

  setup() {
        //获取今日 0 点 0 分 0 秒的 Unix 时间戳
    function getTodayUnix() {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    }

    function MDate(val) {

      var dval = parseInt(val / 1000000) ; // 转换纳秒
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

    console.log("setup");
    const list = ref([]);
    let _clearCache = () => {}
    let onClear = () => {
      _clearCache();
    };
    let time = 0
    const getList = () => {
      time++
      var num = Math.floor(Math.random() * 100 + 1);
      const data = {
        // page: 1,
        // pageSize: 10,
        // loading 回调函数
        _loadingCallback: (l) => {
          console.log("loading:::", l);
        },
        // 是否使用缓存
        _cache: true,
        // 清除缓存方法 
        _clearCache: (clear) => {
          _clearCache = clear;
        },
      };
      fetchRank(data).then((res) => {
        console.log("APP:::", res.data);
        list.value = res && res.data;
        if (time < 3) {
          getList()
        }
      });
    };
    getList();
    return {
      list,
      getList,
      onClear,
      MDate,
      getTodayUnix,
      Decimal,
      moment,
    };
  },
});
</script>

<template>
  <Header />
  <main>
    <div>
      <div class="mt-5  mx-auto relative items-center justify-center">
        <header class="bg-white">
          <div class="max-w-7xl mx-left py-6 px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-gray-900">All 地址排名</h3>
          </div>
        </header>
      </div>

      <div
        class="
          mx-auto
          sm:px-6
          lg:px-8
          mb-10
          shadow
          overflow-hidden
          bg-white
          shadow-dashboard
          px-8
          pt-3
          rounded-bl-lg rounded-br-lg
        "
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left
                  leading-4
                  text-blue-500
                  tracking-wider
                "
              >
                名次
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left text-sm
                  leading-4
                  text-blue-500
                  tracking-wider
                  w-1/6 ...
                "
              >
                地址
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left text-sm
                  leading-4
                  text-blue-500
                  tracking-wider
                  
                "
              >
                余额(ICP)
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left text-sm
                  leading-4
                  text-blue-500
                  tracking-wider
                  
                "
              >
                转账次数
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left text-sm
                  leading-4
                  text-blue-500
                  tracking-wider
                "
              >
                活跃度
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b-2 border-gray-300
                  text-left text-sm
                  leading-4
                  text-blue-500
                  tracking-wider
                  
                "
              >
                最后转账时间
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr  v-for="(ranks,index) in list" :key="ranks.Id" >
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center ml-3">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{{ index+1 }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  {{ ranks.Oaccountaddress }}
                </div>
              </td>
              <td
                class="
                  px-6
                  py-4
                  whitespace-no-wrap
                  border-b
                  text-blue-900
                  border-gray-500
                  text-sm
                  leading-5
                "
              >
                {{   new Decimal(ranks.Total ).div(new Decimal(10000000)).toNumber()  }}
              </td>
              <td
                class="
                  px-6
                  py-4
                  whitespace-no-wrap
                  border-b
                  text-blue-900
                  border-gray-500
                  text-sm
                  leading-5
                "
              >
                 {{ ranks.Times }}
              </td>
              <td
                class="
                  px-6
                  py-4
                  whitespace-no-wrap
                  border-b
                  text-blue-900
                  border-gray-500
                  text-sm
                  leading-5
                "
              >
                  <span class="relative text-xs w-24 flex">
                    <svg v-for="(tss,i) in ranks.Times > 3 ? 5 : ranks.Times" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
              </td>
              <td
                class="
                  px-6
                  py-4
                  whitespace-no-wrap
                  border-b border-gray-500
                  text-blue-900 text-sm
                  leading-5
                "
              >
               
                {{ 
                  this.MDate( ranks.Mtime )   
                }}
              </td>
              <td
                class="
                  px-6
                  py-4
                  whitespace-no-wrap
                  text-right
                  border-b border-gray-500
                  text-sm
                  leading-5
                "
              >
                <!-- <button
                  class="
                    px-5
                    py-2
                    border-blue-500 border
                    text-blue-500
                    rounded
                    transition
                    duration-300
                    focus:outline-none
                    disabled
                  "
                  
                >
                  交易详情
                </button> -->
         
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>


    </div>
  </main>
  <Footer />
</template>
