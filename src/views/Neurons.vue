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
    const listKnow = ref([]);
    const allIcp = ref([]);
    const currentPage = ref(0)
    
    
    // neurons
    const goNeurons= async (pageSize,page) => {

      const res = await fetch(
        `https://ic.rocks/api/neurons?orderBy=id&order=desc&pageSize=`+pageSize+`&page=`+page
      ).then(rsp => rsp.json())
      list.value=   res && res.rows;
    }

    const goKnowNeurons = async () => {

      const res = await fetch(
        `https://ic.rocks/api/neurons/stats`
      ).then(rsp => rsp.json())
      listKnow.value=   res;
    }

     const getAllICP = async () => {

      const res = await fetch(
        `https://ic.rocks/api/stats`
      ).then(rsp => rsp.json())
      allIcp.value=   res;
    }

    onMounted(() => {
      watchEffect(() => {
        goNeurons(25,0)
        goKnowNeurons()
        getAllICP()
      })
    })


    return {
      list,
      listKnow,
      allIcp,
      MDate,
      getTodayUnix,
      Decimal,
      moment,
      toThousands,
      goKnowNeurons,
      goNeurons,
      getAllICP,
    };
  },
});
</script>

<template>
  <Header />
  <main>
    <div>
      <div class="mt-5  mx-auto relative items-center justify-center mb-20">
        <header class="bg-white">
          <div class="max-w-7xl mx-left py-6 px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-gray-900"> {{ t('iKnowNeurons') }}</h3>
          </div>
          <div class="container  max-lg ml-10 ">
            <table class="min-w-full table-auto">
                <thead class="justify-between">
                <tr class="bg-gray-900">
                    <th class="px-16 py-2">
                    <span class="text-gray-300">{{ t('iNeuronStatus') }}</span>
                    </th>
                    <th class="px-16 py-2">
                    <span class="text-gray-300">{{ t('iNeuronCount') }}</span>
                    </th>
                    <th class="px-16 py-2">
                    <span class="text-gray-300">{{ t('iNeuronController') }}</span>
                    </th>
                    <th class="px-16 py-2">
                    <span class="text-gray-300">{{ t('iNeuronLockIcp') }}</span>
                    </th>

                    <th class="px-16 py-2">
                    <span class="text-gray-300">{{ t('iNeuronSupplyIcp') }}</span>
                    </th>
                  
                </tr>
                </thead>
                <tbody class="bg-gray-200">
                <tr class="bg-white border-4 text-center border-gray-200" v-for="(knownNer) in listKnow" :key="knownNer.id" >
                     
                        <td class="px-16 py-2" v-if="knownNer.state == 1">
                            {{ t('iNeuronLock') }}
                        </td>
                        <td class="px-16 py-2"  v-else >
                           {{ t('iNeuronDissolving') }}
                        </td>

                        <td>
                            <span class="text-center ml-2 font-semibold"> {{ knownNer.count }}</span>
                        </td>


                        <td class="px-16 py-2">
                        <span>{{ knownNer.controllers }}</span>
                        </td>
                        <td class="px-16 py-2">
                        <span> {{     new Decimal(knownNer.stake ).div(new Decimal(100000000)).toNumber().toFixed(4)   }} </span>
                        </td>

                        <td class="px-16 py-2">
                            {{ ((new Decimal(knownNer.stake ) / allIcp.supply).toFixed(5) ) *100 }} % 
                        </td>
                </tr>
             
                </tbody>
            </table>
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
                {{ t('iNeuronId') }}
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
                {{ t('iNeuronState') }}
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
                {{ t('iNeuronProposals') }}
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
                {{ t('iNeuronWhoAccount') }}
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
                {{ t('iNeuronStacked') }}
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
                {{ t('iNeuronDissolveDate') }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr  v-for="(neuron) in list" :key="neuron.id" >
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center ml-3">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{{ neuron.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-600 "   >
                <div class="text-sm leading-5 text-blue-900 cursor-pointer "  v-if="neuron.state ==1 ">
                     {{ t('iNeuronLock') }}
                </div>
                <div class="text-sm leading-5 text-blue-900 cursor-pointer "  v-else>
                     {{ t('iNeuronDissolving') }}
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
                {{   neuron.proposalCount  }}
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
                 {{ neuron.accountId ? neuron.accountId: 'Unknown' }}
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
                  {{     new Decimal(neuron.stake ).div(new Decimal(100000000)).toNumber().toFixed(4)    }} ICP
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
                   {{  neuron.dissolveDate ? this.moment(neuron.dissolveDate).fromNow()  : 'Unknown'    }} 

              </td>
              
            </tr>
          
          </tbody>
        </table>

      </div>

    </div>
  </main>
  <Footer />
</template>
