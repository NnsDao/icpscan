<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { fetchRank }  from "../api/index.js";
import { Decimal } from 'decimal.js';
import moment from "moment";
import { toThousands } from "../utils/tool.js";
import { reactive, onMounted, watchEffect } from 'vue';
import { useRouter } from "vue-router";

 
export default defineComponent({
  components: { Header, Footer },

  setup() {

    const router = useRouter();

    function goJump(id) {
     const url = 'https://' + id + '.raw.ic0.app/'; 
      window.open(url) ;
    }

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

    function goJumpAccount(raccount) {
      router.push({path:'/account/'+raccount,query:{id:raccount}})
    }

    console.log("setup");
    const list = ref([]);
    let _clearCache = () => {}
    let onClear = () => {
      _clearCache();
    };
    // canisters
    const goCanisters = async (pageSize,page) => {

      const res = await fetch(
        `https://ic.rocks/api/canisters?orderBy=latestVersionDate&order=desc&pageSize=`+pageSize+`&page=`+page
      ).then(rsp => rsp.json())
      list.value=   res && res.rows;
    }

    onMounted(() => {
      watchEffect(() => {
        goCanisters(25,0)
      })
    })


    return {
      list,
      onClear,
      MDate,
      getTodayUnix,
      Decimal,
      moment,
      toThousands,
      goJumpAccount,
      goCanisters,
      account:'',
      goJump,
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
            <h3 class="text-3xl font-bold text-gray-900"> {{ t('iCanistersName') }}</h3>
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
                {{ t('iCanistersName') }}
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
                {{ t('iController') }}
              </th>
              <!-- <th
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
                {{ t('iModule') }}
              </th> -->
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
                {{ t('iSubnet') }}
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
                {{ t('iLastUpdated') }}
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
                {{ t('iUrl') }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr  v-for="(ranks) in list" :key="ranks.Id" >
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center ml-3">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{{ ranks.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-600 "   >
                <div class="text-sm leading-5 text-blue-900 cursor-pointer ">
                  {{ ranks.controllerId }}
                </div>
              </td>
              <!-- <td
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
                {{   ranks.module  }}
              </td> -->

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
                 {{ ranks.subnet['displayName'] ? ranks.subnet['displayName'] : '' }}
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
                  {{  this.moment(ranks.latestVersionDate).format('YYYY-MM-DD')      }} 
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
                    <a class="cursor-pointer hover:underline " @click="goJump(ranks.id)"  >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </a>
                  </span>
              </td>
               <!-- <td
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
                  this.MDate( ranks.latestVersionDate )   
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
                <button
                  class="
                    px-5
                    py-2
                    border-blue-500 border
                    text-blue-500
                    rounded-full
                    transition
                    duration-300
                    focus:outline-none
                    hover:underline
                  "
                   @click="goJumpAccount(ranks.Oaccountaddress)"
                >
                  
                   {{ t('iRankTransDetail') }}
                </button>
         
              </td> -->
            </tr>
          
          </tbody>
        </table>
      </div>


    </div>
  </main>
  <Footer />
</template>
