<!-- This example requires Tailwind CSS v2.0+ -->
<script>
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import { fetchList, fetchSearch } from '../api/index.js';
import { Decimal } from 'decimal.js';
import { reactive, onMounted, watchEffect } from 'vue';
import { toThousands, MDate, mydate, divisionBigInt } from '../utils/tool.js';
import { useRouter } from 'vue-router';
import * as identitys from '../api/identity';
import * as gameidentity from '../api/texasidl';
import * as dfidentity from '../api/financeidl';
import * as useridentity from '../api/useridl';
import * as icdripidentity from '../api/icdrip';

export default defineComponent({
  components: { Header, Footer },

  setup() {
    const router = useRouter();
    function goJump(mblockheight) {
      router.push({
        path: '/detail/' + mblockheight,
        query: { id: mblockheight }
      });
    }
    function goAccount(maccount) {
      router.push({ path: '/account/' + maccount, query: { id: maccount } });
    }

    console.log('setup');

    const list = ref([]);

    // 单个请求 TODO CORS
    const getList = async () => {
      const res = await fetch(`https://dapi.nnsdao.com/api/block/newList`).then(
        (rsp) => rsp.json()
      );
      list.value = res && res.data;
    };

    // icp数据

    const blockData = reactive({
      block: []
    });

    const nodeData = reactive({
      nodes: []
    });

    const canData = reactive({
      candid: []
    });

    const rateData = reactive({
      blockrate: []
    });

    const messageData = reactive({
      mrate: []
    });
    const messageCountData = reactive({
      mcrate: []
    });

    const totalData = reactive({
      total: []
    });

    const proposalslData = reactive({
      proposals: []
    });

    const priceData = reactive({
      ticker: []
    });

    const texasAccount = reactive({
      user: []
    });

    const texasGameTotal = reactive({
      game: []
    });

    const getTokenListTotal = reactive({
      token: []
    });

    const getDripUserTotal = reactive({
      user: []
    });

    const fetchBlock = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/block`
      ).then((rsp) => rsp.json());
      blockData.block = data.block[0];
    };

    const fetchNode = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/ic-nodes-count`
      ).then((rsp) => rsp.json());
      nodeData.nodes = data.ic_nodes_count[0];
    };

    const fetchCandid = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/registered-canisters`
      ).then((rsp) => rsp.json());
      canData.candid = data.running_canisters[0];
    };

    const fetchBlockRate = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/block-rate`
      ).then((rsp) => rsp.json());
      rateData.blockrate = data.block_rate[0];
    };

    const fetchMessageRate = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/message-execution-rate`
      ).then((rsp) => rsp.json());
      messageData.mrate = data.message_execution_rate[0];
    };

    const fetchMessageCount = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/metrics/messages-count`
      ).then((rsp) => rsp.json());
      messageCountData.mcrate = data.messages_count[0];
    };

    const fetchIcpTotal = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/nns/total-supply-icp`
      ).then((rsp) => rsp.json());
      totalData.total = data.total_supply_icp;
    };

    const fetchProposals = async () => {
      const data = await fetch(
        `https://ic-api.internetcomputer.org/api/nns/proposals-count`
      ).then((rsp) => rsp.json());
      proposalslData.proposals = data.proposals_count;
    };

    // price  交易总量
    const fetchPrice = async () => {
      const data = await fetch(
        `https://data.messari.io/api/v1/assets/icp/metrics/market-data`
      ).then((rsp) => rsp.json());
      console.log(data.data.market_data, 82828282828);
      priceData.ticker = data.data.market_data;
    };

    // const queryData = reactive({
    //   query: '',
    // });

    // 搜索

    const searchList = ref([]);

    function goSearch() {
      let that = this;
      if (!that.account || that.account == null || that.account == undefined) {
        this.$toast.warning(`请输入账户地址或转账哈希值`);
        return false;
      }

      that.getDetail(that, that.account);

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

    function testTime() {
      let that = this;
      that.getList();
      that.fetchProposals();
      that.fetchNode();
      that.fetchBlockRate();
      that.fetchMessageRate();
      that.fetchMessageCount();
      that.fetchBlock();
      that.fetchPrice();
    }

    const getDetail = async (that, id) => {
      const res = await fetch(
        `https://dapi.nnsdao.com/api/block/search?recorde_addr=` + id
      ).then((rsp) => rsp.json());

      searchList.value = res && res.data;
      if (res.data.Account == '' && res.data.Tranidentifier == '') {
        that.$toast.warning(`Please enter the correct transfer hash value`);
        return false;
      } else if (
        res.data.Type == '2' &&
        res.data.Account != '' &&
        res.data.Balance != ''
      ) {
        // account detail
        that.goAccount(that.account);
        return false;
      } else if (res.data.Type == '1' && res.data.Tranidentifier != '') {
        that.goJump(that.account);
      } else {
        that.$toast.warning(
          `Did not find any information, please try another address`
        );
        return false;
      }
    };

    //texas  data
    const getTexasData = async () => {
      const canisterId = 'ery6l-taaaa-aaaah-aaeqq-cai';
      const resd = identitys.createActor(canisterId);
      const tuser = await resd.totalUsers();
      texasAccount.user[0] = Number(tuser);
    };

    const getTexasGame = async () => {
      const canisterId = 'll4dt-naaaa-aaaah-aafuq-cai';
      const resdddd = gameidentity.createActor(canisterId);
      const tuser = await resdddd.gameAmount();
      texasAccount.user[1] = Number(tuser);
    };

    // dfinance vgqnj-miaaa-aaaal-qaapa-cai lf23w-ciaaa-aaaah-qaeya-cai

    const getDfinanceUser = async () => {
      const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
      const resdddd = dfidentity.createActor(canisterId);
      const ttoken = await resdddd.allBalances();
      console.log(ttoken.length, 232323);
      getTokenListTotal.token[0] = ttoken.length;
    };

    const getDfinanceGame = async () => {
      const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
      const resdddd = dfidentity.createActor(canisterId);
      const ttoken = await resdddd.transactionRecord();
      console.log(ttoken.length, 232323);
      getTokenListTotal.token[1] = ttoken.length;
    };

    // transactionRecord

    // const getDfinanceUser = async () => {
    //   const canisterId = 'lf23w-ciaaa-aaaah-qaeya-cai';
    //   const resdddd = useridentity.createActor(canisterId);
    //   const ttoken = await resdddd.getHolderNumber();
    //   getTokenListTotal.token[0] = ttoken;
    // };

    // icdripidentity

    const getUserDrip = async () => {
      const canisterId = '3db6u-aiaaa-aaaah-qbjbq-cai';
      const resdddd = icdripidentity.createActor(canisterId);
      const ttoken = await resdddd.getRegistry();
      getDripUserTotal.user[0] = Number(ttoken.length);
    };
    // transactions
    const getUserTranDrip = async () => {
      const canisterId = '3db6u-aiaaa-aaaah-qbjbq-cai';
      const resdddd = icdripidentity.createActor(canisterId);
      const ttoken = await resdddd.transactions();
      getDripUserTotal.user[1] = Number(ttoken.length);
    };
    //listings
    const getListenDrip = async () => {
      const canisterId = '3db6u-aiaaa-aaaah-qbjbq-cai';
      const resdddd = icdripidentity.createActor(canisterId);
      const ttoken = await resdddd.listings();
      getDripUserTotal.user[2] = Number(ttoken.length);
    };
    //

    onMounted(() => {
      watchEffect(() => {
        fetchPrice();
        fetchBlock();
        fetchNode();
        fetchCandid();
        fetchBlockRate();
        fetchMessageRate();
        fetchMessageCount();
        fetchIcpTotal();
        fetchProposals();
        getList();
      });
    });

    return {
      list,
      getList,
      getDetail,
      fetchProposals,
      fetchNode,
      fetchBlock,
      fetchBlockRate,
      fetchMessageRate,
      fetchMessageCount,
      fetchIcpTotal,
      fetchPrice,
      searchList,
      timer: '',
      // onClear,
      MDate,
      Decimal,
      goJump,
      testTime,
      goAccount,
      goSearch,
      blockData,
      texasAccount,
      texasGameTotal,
      getTokenListTotal,
      getDripUserTotal,
      nodeData,
      canData,
      rateData,
      messageData,
      messageCountData,
      totalData,
      proposalslData,
      priceData,
      mydate,
      account: '',
      timer: null,
      toThousands,
      getTexasData,
      getTexasGame,
      getDfinanceGame,
      getDfinanceUser,
      getUserDrip,
      getUserTranDrip,
      getListenDrip
    };
  },
  created() {
    let that = this;
    that.getTexasData();
    that.getTexasGame();
    that.getDfinanceGame();
    that.getDfinanceUser();
    that.getUserDrip();
    that.getUserTranDrip();
    that.getListenDrip();
  },
  methods: {},
  mounted() {
    // clear timer 20 times die
    let that = this;
    let num = 0;
    this.timer = setInterval(() => {
      if (num == 20) {
        clearInterval(that.timer);
      }
      that.testTime();
    }, 3000);
  },
  beforeUnmount() {
    //clear timer
    clearInterval(this.timer);
  },
  unmounted() {
    //clear timer
    clearInterval(this.timer);
  }
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
  <main>
    <div class="py-3 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- 搜索 -->
        <div class="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-6/12 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 mr-20"
            v-model="account"
            type="text"
            aria-label=" Search by Account / Transaction "
            placeholder=" Search by Account / Transaction "
          />
          <button
            @click="goSearch()"
            class="bg-indigo-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-indigo-100 rounded-full hover:shadow-lg hover:bg-indigo-400"
          >
            {{ t('iSearch') }}
          </button>
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
          <dl class="flex flex-wrap gap-20 md:space-y-3 md:grid md:grid-cols-4">
            <div class="relative" v-for="b in blockData" :key="b.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/dfinity-logo.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-green-500">
                  {{ t('iBlockCount') }} {{ toThousands(b[1]) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iBlockDate') }} {{ MDate(b[0]) }}
              </dd>
            </div>

            <div class="relative" v-for="n in rateData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <img
                    src="/img/speed.jpeg"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(Math.floor(n[1] * 10000) / 10000) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iBlockSpeed') }}
              </dd>
            </div>

            <div class="relative" v-for="n in proposalslData" :key="n">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/canister.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(n) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iProposals') }}
              </dd>
            </div>

            <div class="relative" v-for="n in totalData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-700 text-white"
                >
                  <img
                    src="/img/total.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(n / 100000000) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iTotal') }}
              </dd>
            </div>

            <div class="relative" v-for="n in messageCountData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/cmessage.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(Math.floor(n[1] * 10000) / 10000) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('icountMessage') }}
              </dd>
            </div>

            <div class="relative" v-for="n in messageData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/message.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(Math.floor(n[1] * 10000) / 10000) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iMessageSpeed') }}
              </dd>
            </div>

            <div class="relative" v-for="n in canData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/motoko.jpeg"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(n[1]) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iDappCandid') }}
              </dd>
            </div>

            <div class="relative" v-for="n in nodeData" :key="n.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/node.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ toThousands(n[1]) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iNodeCount') }}
              </dd>
            </div>

            <!-- price -->

            <div class="relative" v-for="i in priceData" :key="i.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/dfinity-logo.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-red-500">
                  {{ toThousands(i['price_usd']) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iPriceName') }}
              </dd>
            </div>

            <div class="relative" v-for="i in priceData" :key="i.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/dfinity-logo.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-red-500">
                  {{ toThousands(i['volume_last_24_hours']) }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iIcpRank') }}
              </dd>
            </div>

            <div class="relative" v-for="i in texasAccount" :key="i.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/texas-logo.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-red-500">
                  {{ i.toString().replace(/,/g, ' / ') }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iTexasTotalUser') }} / {{ t('iTexasGameAmount') }}
              </dd>
            </div>

            <div class="relative" v-for="i in getDripUserTotal" :key="i.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/dscvr-one-drip.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-red-500">
                  <!-- {{ i }} -->
                  {{ i.toString().replace(/,/g, ' / ') }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ t('iDscvrDrip') }}
              </dd>
            </div>

            <div class="relative" v-for="i in getTokenListTotal" :key="i.key">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-white"
                >
                  <img
                    src="/img/nnsdao-logo-1024.png"
                    alt="nnsdao dfinity logo"
                    title="nnsdao dfinity logo"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-red-500">
                  {{ i.toString().replace(/,/g, ' / ') }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ 'Hodl / Transaction' }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- content  latest-->

        <div class="mt-10 py-my-2 overflow-x-auto">
          <div class="py-2 align-middle inline-block min-w-full">
            <h3 class="text-3xl font-bold text-gray-900">{{ t('iLatest') }}</h3>

            <div class="mt-3 shadow overflow-hidden border-b sm:rounded-lg">
              <table class="min-w-full">
                <!-- 表头 -->
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider"
                    >
                      {{ t('iTransferHash') }}
                    </th>
                    <th
                      class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"
                    >
                      {{ t('iBlockHeight') }}
                    </th>
                    <th
                      class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"
                    >
                      {{ t('iTransferStatus') }}
                    </th>
                    <th
                      class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"
                    >
                      {{ t('iTransferToken') }}
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
                     {{ t('iFee') }}
                    </th> -->
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">
                  <tr v-for="person in list" :key="person.Id">
                    <td
                      class="py-4 whitespace-nowrap cursor-pointer hover:underline"
                      @click="goJump(person.Tranidentifier)"
                    >
                      <div class="flex items-center">
                        <!-- <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="person.Mblockheight"
                              alt=""
                            />
                          </div> -->
                        <!-- 转账hash -->
                        <div class="ml-4">
                          <div class="w-28 text-sm font-medium text-purple-700">
                            <p class="truncate ...">
                              {{ person.Tranidentifier }}
                            </p>
                          </div>

                          <!-- 时间格式化 -->
                          <div class="text-sm text-gray-500">
                            {{ MDate(person.Blocktimestamp) }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ toThousands(person.Mblockheight) }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                        v-if="person.Ostatus == 'COMPLETED'"
                      >
                        {{ t('iOstatusSuccess') }}
                      </span>
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-red-800"
                        v-else
                      >
                        {{ t('iOstatusFail') }}</span
                      >
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium"
                    >
                      <a class="text-indigo-600 hover:text-indigo-900">{{
                        new Decimal(person.Osum)
                          .div(new Decimal(100000000))
                          .toNumber()
                      }}</a>
                    </td>

                    <!-- <td
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
                    </td> -->
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
