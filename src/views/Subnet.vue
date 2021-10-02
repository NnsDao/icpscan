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
    // subnet
    const goSubnet = async () => {

      const res = await fetch(
        `https://ic-api.internetcomputer.org/api/subnet-list`
      ).then(rsp => rsp.json())
      list.value=   res && res.subnets;
    }

    onMounted(() => {
      watchEffect(() => {
        goSubnet()
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
      goSubnet,
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
            <h3 class="text-3xl font-bold text-gray-900"> {{ t('iSubnetName') }}</h3>
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
                {{ t('iSubnetType') }}
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
                {{ t('iSubnetId') }}
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
                {{ t('iSubnetNode') }}
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
                {{ t('iSubnetCanister') }}
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
                {{ t('iSubnetRunning') }}
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
                {{ t('iSubnetStopped') }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr  v-for="(ranks) in list" :key="ranks.Id" >
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center ml-3">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{{ ranks.subnet_type }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-600 "   >
                <div class="text-sm leading-5 text-blue-900 cursor-pointer ">
                  {{ ranks.subnet_id }}
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
                {{   ranks.total_nodes  }}
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
                 {{ ranks.running_canisters ? ranks.running_canisters[1] : '' }}
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
                  {{ ranks.running_canisters ? ranks.running_canisters[1] : '' }}
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
                 {{ ranks.stopped_canisters ? ranks.stopped_canisters[1] : '' }}
              </td>
            
            </tr>
          
          </tbody>
        </table>
      </div>


    </div>
  </main>
  <Footer />
</template>
