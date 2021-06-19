<!-- This example requires Tailwind CSS v2.0+ -->
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import { fetchList,fetchSearch }  from "../api/index.js";
import { Decimal } from 'decimal.js';
import { reactive, onMounted, watchEffect } from 'vue'

import { useRouter } from "vue-router";




export default defineComponent({
  components: { Header,Footer },

  setup() {

    const router = useRouter();
    function goJump(mblockheight) {
      router.push({path:'/detail/'+mblockheight,query:{id:mblockheight}})
    }
    function goAccount(maccount) {
      router.push({path:'/account/'+maccount,query:{id:maccount}})
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

    function MDate(dval) {
      
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
         return this.mydate(dval);
      }
    }

    function mydate(time_stamp ) {
        var date = new Date(parseInt(time_stamp ) * 1000).toLocaleString('zh',{hour12:false});
        return date;
    }

    console.log("setup");
    const list = ref([]);
    // let _clearCache = () => {}
    // let onClear = () => {
    //   _clearCache();
    // };
    // let time = 0
    // const getList = () => {
    //   time++
    //   var num = Math.floor(Math.random() * 100 + 1);
    //   const data = {
    //     // page: 1,
    //     // pageSize: 10,
    //     // loading 回调函数
    //     _loadingCallback: (l) => {
    //       console.log("loading:::", l);
    //     },
    //     // 是否使用缓存
    //     _cache: true,
    //     // 清除缓存方法 
    //     _clearCache: (clear) => {
    //       _clearCache = clear;
    //     },
    //   };
    //   fetchList(data).then((res) => {
    //     console.log("APP:::", res.data);
    //     list.value = res && res.data;
    //     if (time < 3) {
    //       getList()
    //     }
    //   });
    // };
    // 单个请求 TODO CORS 
    const getList = async () => {
      const res = await fetch(
        `https://api.baqiye.com/api/block/newList`
      ).then(rsp => rsp.json())
      list.value=   res && res.data;
    }

      
    // icp数据

    const blockData = reactive({
      block: [],
    });

    const nodeData = reactive({
      nodes: [],
    });

    const canData = reactive({
      candid: [],
    });

    const rateData = reactive({
      blockrate: [],
    });

    const messageData = reactive({
      mrate: [],
    });
    const messageCountData = reactive({
      mcrate: [],
    });

    const totalData = reactive({
      total: [],
    });

    const proposalslData = reactive({
      proposals: [],
    });

    
    const fetchBlock = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/block`
      ).then(rsp => rsp.json())
      blockData.block =   data.block[0]
    }

    const fetchNode = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/ic-nodes-count`
      ).then(rsp => rsp.json())
      nodeData.nodes =   data.ic_nodes_count[0]
    }

    const fetchCandid = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/registered-canisters`
      ).then(rsp => rsp.json())
      canData.candid =   data.running_canisters[0]
    }

    const fetchBlockRate = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/block-rate`
      ).then(rsp => rsp.json())
      rateData.blockrate =   data.block_rate[0]
    }

    const fetchMessageRate = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/message-execution-rate`
      ).then(rsp => rsp.json())
      messageData.mrate =   data.message_execution_rate[0]
    }

    const fetchMessageCount = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/messages-count`
      ).then(rsp => rsp.json())
      messageCountData.mcrate =   data.messages_count[0]
    }

     const fetchIcpTotal = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/nns/total-supply-icp`
      ).then(rsp => rsp.json())
      totalData.total =   data.total_supply_icp
    }

    // 提案数量

     const fetchProposals = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/nns/proposals-count`
      ).then(rsp => rsp.json())
      proposalslData.proposals =   data.proposals_count
    }




    onMounted(() => {
      watchEffect(() => {
        fetchBlock()
        fetchNode()
        fetchCandid()
        fetchBlockRate()
        fetchMessageRate()
        fetchMessageCount()
        fetchIcpTotal()
        fetchProposals()
        getList()
      })
    })

    const queryData = reactive({
      query: '',
    });

    // 搜索

     const searchList = ref([]);

    function goSearch() {
      let that = this;
      if( !that.account || that.account == null || that.account == undefined ){
        this.$toast.warning(`请输入账户地址或转账哈希值`);
        return false ;
      }
     
      that.getDetail(that,that.account)

      // const data = {
      //   recorde_addr: this.account,
      // };
      // fetchSearch(data).then((res) => {
      //   console.log("APP:::", res.data);
      //   searchList.value = res && res.data;
      //   if(res.data.Account == '' && res.data.Tranidentifier == ''){
      //     this.$toast.warning(`请输入正确的转账哈希值`);
      //     return false ;
      //   }else if(res.data.Type == "2" && res.data.Account != '' && res.data.Balance != ''){
      //     // 跳转到账户地址列表页
      //     this.goAccount(this.account) ; 
      //     return false ;
      //   }else if(res.data.Type == "1" && res.data.Tranidentifier != ''){
      //     this.goJump(this.account) ; 
      //   }else{
      //     this.$toast.warning(`未找到任何信息,请换个地址试试`);
      //     return false ;
      //   }
      // });

    }

    const getDetail = async (that,id) => {
        const res = await fetch(
          `https://api.baqiye.com/api/block/search?recorde_addr=`+id
        ).then(rsp => rsp.json())

        searchList.value = res && res.data;
        if(res.data.Account == '' && res.data.Tranidentifier == ''){
          that.$toast.warning(`请输入正确的转账哈希值`);
          return false ;
        }else if(res.data.Type == "2" && res.data.Account != '' && res.data.Balance != ''){
          // 跳转到账户地址列表页
          that.goAccount(that.account) ; 
          return false ;
        }else if(res.data.Type == "1" && res.data.Tranidentifier != ''){
          that.goJump(that.account) ; 
        }else{
          that.$toast.warning(`未找到任何信息,请换个地址试试`);
          return false ;
        }
      }

    return {
      list,
      getList,
      getDetail,
      searchList,
      // onClear,
      MDate,
      getTodayUnix,
      Decimal,
      goJump,
      goAccount,
      goSearch,
      blockData,
      nodeData,
      canData,
      rateData,
      messageData,
      messageCountData,
      totalData,
      proposalslData,
      mydate,
      account:'',
    };
  },
  methods: {
  },
  mounted(){
  	// TODO轮循
    
  },
});
</script>

<template>
  <!-- header -->
  <Header />

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-gray-900">
        {{ t('iName') }}
      </h3>
    </div>
  </header>
  <main >
    <div class="py-3 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 ">
        <!-- 搜索 -->
        <div class="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="
              absolute
              left-3
              top-1/2
              transform
              -translate-y-1/2
              text-gray-400
            "
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            class="
              focus:border-light-blue-500
              focus:ring-1 focus:ring-light-blue-500
              focus:outline-none
              w-6/12
              text-sm text-black
              placeholder-gray-500
              border border-gray-200
              rounded-md
              py-2
              pl-10
              mr-20
            "
            v-model="account"
            type="text"
            aria-label=" Search by Account / Transaction "
            placeholder=" Search by Account / Transaction "
          />
          <button  @click="goSearch()" class="bg-indigo-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-indigo-100 rounded-full  hover:shadow-lg hover:bg-indigo-400">{{ t('iSearch') }}</button>
            
        </div>
        <!-- <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div> -->

        <div class="m-10">
          <dl class="flex flex-wrap  gap-20 md:space-y-3 md:grid md:grid-cols-4">
             <div
              class="relative"
              v-for="b in blockData" :key="b.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmQ5FvUMYUNuU5mRYocqtxMjgAgRHGw5zyEwnFqT2Xadtp" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                    {{ t('iBlockCount') }} {{ b[1] }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                    {{ t('iBlockDate') }} {{   this.MDate(b[0]) }}
              </dd>
            </div>




            <div
              class="relative"
              v-for="n in rateData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-500
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmQPLGXKYJyWibn3GbZNEYKpG2Lp3XP77kJ4mhg6DP2uvY" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{     Math.floor(n[1] * 10000) / 10000   }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                   {{ t('iBlockSpeed') }}
              </dd>
            </div>

             <div
              class="relative"
              v-for="n in proposalslData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmVf4fnL8CbQszVcrK1Mhn4GUus7J38BV93iE1mFYhpetF" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{     n   }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                    {{ t('iProposals') }}
              </dd>
            </div>


             <div
              class="relative"
              v-for="n in totalData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-700
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmVHQugXWXtUHdmFqQWX8NNiNVmZTq5FYQ3beTpCweLFPw" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{     n / 100000000   }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                     {{ t('iTotal') }}
              </dd>
            </div>

            

            <div
              class="relative"
              v-for="n in messageCountData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmWVW7H5zirP83wNXLRrZvcvH8eWgdawfUpUdzJue9ph88" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{     Math.floor(n[1] * 10000) / 10000   }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                    {{ t('icountMessage') }}
              </dd>
            </div>


            <div
              class="relative"
              v-for="n in messageData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmaAbFqf1ZXZ4vpKLCMM7qwyKyJMqf3PTHCPCgCBq6EWB9" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{     Math.floor(n[1] * 10000) / 10000   }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                     {{ t('iMessageSpeed') }}
              </dd>
            </div>




             <div
              class="relative"
              v-for="n in canData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmdAMDPpo82WHPz9jAcgLMuEGq4pNdVmPVzbnRu43a3diA" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{ n[1] }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                    {{ t('iDappCandid') }}
              </dd>
            </div>


            <div
              class="relative"
              v-for="n in nodeData" :key="n.key"
            >
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-indigo-50
                    text-white
                  "
                >
                  <img src="https://gateway.pinata.cloud/ipfs/QmSY1FY8CjDSiPtmvPQvPRAy39RHpWQq33vcequmNv1YKf" alt="Contact with Customer support" title="Contact with Customer support">
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900" >
                     {{ n[1] }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                    {{ t('iNodeCount') }}
              </dd>
            </div>
           
            
          </dl>
        </div>

        <!-- content  latest-->

        <div class="mt-10 py-my-2 overflow-x-auto ">
          <div
            class="py-2 align-middle inline-block min-w-full "
          >
            <h3 class="text-3xl font-bold text-gray-900"> {{ t('iLatest') }}</h3>

            <div class="mt-3 shadow overflow-hidden border-b sm:rounded-lg">
            
              <table class="min-w-full">
                  <!-- 表头 -->
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
                     {{ t('iTransferHash') }}
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
                      {{ t('iBlockHeight') }}
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
                      {{ t('iTransferStatus') }}
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
                      {{ t('iTransferToken') }}
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
                     {{ t('iFee') }}
                    </th>
                    <!-- <th class="px-6 py-3 border-b-2 border-gray-300"></th> -->
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">
                  <tr v-for="person in list" :key="person.Id">
                    <td class="py-4 whitespace-nowrap cursor-pointer" @click="goJump(person.Tranidentifier)">
                        <div class="flex items-center">
                          <!-- <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="person.Mblockheight"
                              alt=""
                            />
                          </div> -->
                          <!-- 转账hash -->
                          <div class="ml-4 ">
                            <div class="w-28 text-sm font-medium text-gray-900">
                              <p class="truncate  ...">{{ person.Tranidentifier }} </p>
                            </div>

                            <!-- 时间格式化 -->
                            <div class="text-sm text-gray-500">
                              {{   this.MDate(person.Blocktimestamp ) }}
                            </div>
                          </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                         {{ person.Mblockheight }}
                      </div>
                     
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                        v-if="person.Ostatus == 'COMPLETED'"
                      >
                          {{ t('iOstatusSuccess') }}
                      </span>
                      <span   class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-red-800
                        " v-else>  {{ t('iOstatusFail') }}</span>
                    </td>
                     <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-left text-sm
                        font-medium
                      "
                    >
                      <a class="text-indigo-600 hover:text-indigo-900"
                        >{{    new Decimal(person.Osum).div(new Decimal(100000000)).toNumber() }}</a
                      >
                    </td>

                     <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-left text-sm
                        font-medium
                      "
                    >
                      <a class="text-indigo-600 hover:text-indigo-900"
                        >0.0001 ICP</a
                      >
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

    <Footer /> 
  

</template>
