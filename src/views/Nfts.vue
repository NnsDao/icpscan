<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { fetchRank } from "../api/index.js";
import { Decimal } from "decimal.js";
import moment from "moment";
import { toThousands } from "../utils/tool.js";
import { reactive, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as icpuzzleIdl from "../api/nft/icpuzzleIdl";
import axios from "axios";

export default defineComponent({
  components: { Header, Footer },

  setup() {
    const router = useRouter();

    function goJump(id) {
      const url = "https://" + id + ".raw.ic0.app/";
      window.open(url);
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
      var dval = parseInt(val / 1000000); // 转换纳秒
      var interval = (new Date().getTime() - dval) / 1000;
      if (Math.floor(interval / 60) <= 0) {
        //1 分钟之前
        return "just now";
      } else if (interval < 3600) {
        //1 分钟到 1 小时之间
        return Math.floor(interval / 60) + " minutes ago";
      } else if (interval >= 3600 && dval - this.getTodayUnix() >= 0) {
        //1 小时到 1 天之间
        return Math.floor(interval / 3600) + " hours ago";
      } else if (interval / (3600 * 24) <= 31) {
        //1 天到 1 个月（假设固定为 31 天）之间
        return Math.ceil(interval / (3600 * 24)) + " days ago";
      } else {
        return this.moment(dval).format("YYYY-MM-DD hh:mm:ss");
      }
    }

    const getIcpuzzleTotal = reactive([]);

    function goJumpAccount(raccount) {
      router.push({ path: "/account/" + raccount, query: { id: raccount } });
    }

    // get data https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/

    function getPuzzle() {
      var api = "https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrPop = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrPop["icon"] =
            "https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/?tokenid=uew4n-3akor-uwiaa-aaaaa-b4ad5-4aqca-aabas-a";
          arrPop["name"] = "Icpuzzle";
          arrPop["score"] = "65";
          arrPop["minted"] = popl[1].trim().replace("_", "");
          arrPop["listings"] = popp[1].trim().replace("_", "");
          arrPop["totalSales"] = popk[1].trim().replace("_", "");
          arrPop["salesIcp"] = popm[1].trim().replace("_", "");
          arrPop["averagePrice"] = popn[1].trim().replace("_", "");

          getIcpuzzleTotal.push(arrPop);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // wings
    function getWings() {
      var api = "https://73xld-saaaa-aaaah-qbjya-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://73xld-saaaa-aaaah-qbjya-cai.raw.ic0.app/?tokenid=eq7yk-xikor-uwiaa-aaaaa-b4ako-aaqca-aaaaa-q";
          arrOp["name"] = "Wing";
          arrOp["score"] = "89";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Ictuts

    function goIctuts() {
      var api = "https://ahl3d-xqaaa-aaaaj-qacca-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://nnsdao.s3.ap-southeast-1.amazonaws.com/nnsdao/tW7romVf_400x400.jpg";
          arrOp["name"] = "Ictuts";
          arrOp["score"] = "55";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // goStarverse
    function goStarverse() {
      var api = "https://nbg4r-saaaa-aaaah-qap7a-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://nbg4r-saaaa-aaaah-qap7a-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=pjif4-yykor-uwiaa-aaaaa-b4ad7-yaqca-aaaab-a";
          arrOp["name"] = "Starverse";
          arrOp["score"] = "77";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //interastrosc

    function goInterastrosc() {
      var api = "https://sr4qi-vaaaa-aaaah-qcaaq-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://sr4qi-vaaaa-aaaah-qcaaq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=6roeh-nykor-uwiaa-aaaaa-b4aqa-eaqca-aaaaa-a";
          arrOp["name"] = "Interastrosc";
          arrOp["score"] = "72";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icpuppies

    function goIcpuppies() {
      var api = "https://njgly-uaaaa-aaaah-qb6pa-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://njgly-uaaaa-aaaah-qb6pa-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=g33bu-wakor-uwiaa-aaaaa-b4apt-yaqca-aaaag-q";
          arrOp["name"] = "Icpuppies";
          arrOp["score"] = "81";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icelebrity

    function goIcelebrity() {
      var api = "https://kss7i-hqaaa-aaaah-qbvmq-cai.raw.ic0.app";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://kss7i-hqaaa-aaaah-qbvmq-cai.raw.ic0.app/?tokenid=apmmb-hikor-uwiaa-aaaaa-b4anl-eaqca-aaaaa-a";
          arrOp["name"] = "Icelebrity";
          arrOp["score"] = "81";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // faceted-meninas

    function goFacetedMeninas() {
      var api = "https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=srd5d-nakor-uwiaa-aaaaa-b4anl-maqca-aaaaa-a";
          arrOp["name"] = "FacetedMeninas";
          arrOp["score"] = "66";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icp-news

    function goIcpnews() {
      var api = "https://uzhxd-ziaaa-aaaah-qanaq-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://uzhxd-ziaaa-aaaah-qanaq-cai.raw.ic0.app/?tokenid=ijrqa-bqkor-uwiaa-aaaaa-b4adi-eaqca-aaaaa-a";
          arrOp["name"] = "Icpnews";
          arrOp["score"] = "40";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // goIcmojis

    function goIcmojis() {
      
       var api = "https://gevsk-tqaaa-aaaah-qaoca-cai.raw.ic0.app/";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://gevsk-tqaaa-aaaah-qaoca-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=3rdla-kqkor-uwiaa-aaaaa-b4adq-qaqca-aaaaa-a";
          arrOp["name"] = "Icmojis";
          arrOp["score"] = "66.4";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // goWearables

    function goWearables() {
      var api = "https://tde7l-3qaaa-aaaah-qansa-cai.raw.ic0.app";
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(":");
          let popp = arrs[2].split(":");
          let popk = arrs[3].split(":");
          let popm = arrs[4].split(":");
          let popn = arrs[5].split(":");
          arrOp["icon"] =
            "https://tde7l-3qaaa-aaaah-qansa-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=exusw-xqkor-uwiaa-aaaaa-b4adm-qaqca-aaaap-a";
          arrOp["name"] = "Wearables";
          arrOp["score"] = "79.4";
          arrOp["minted"] = popl[1].trim().replace("_", "");
          arrOp["listings"] = popp[1].trim().replace("_", "");
          arrOp["totalSales"] = popk[1].trim().replace("_", "");
          arrOp["salesIcp"] = popm[1].trim().replace("_", "");
          arrOp["averagePrice"] = popn[1].trim().replace("_", "");
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }


    onMounted(() => {
      watchEffect(() => {
        goStarverse();
        goIctuts();
        getPuzzle();
        getWings();
        goInterastrosc();
        goIcpuppies();
        goIcpnews();
        goFacetedMeninas();
        goIcelebrity();
        goIcmojis();
        goWearables();
      });
    });

    return {
      getIcpuzzleTotal,
      MDate,
      getPuzzle,
      getWings,
      getTodayUnix,
      goInterastrosc,
      goFacetedMeninas,
      goWearables,
      goIcelebrity,
      goIcmojis,
      goIcpuppies,
      goIcpnews,
      goIcpnews,
      Decimal,
      moment,
      toThousands,
      goJumpAccount,
      goIctuts,
      goStarverse,
      account: "",
      goJump,
    };
  },
});
</script>

<template>
  <Header />
  <main>
    <div>
      <div
        class="
          w-full
          md:container md:mx-auto
          mx-auto
          relative
          items-center
          justify-center
          bg-gray-600
        "
      >
        <header class="bg-gray-600">
          <div class="max-w-7xl mx-left py-6 px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-white pl-20">NFTs Market</h3>
          </div>
        </header>

        <div class="container flex mx-auto min-h-screen">
          <table class="text-center w-full">
            <thead class="bg-gray-900 opacity-80 flex text-white w-full">
              <tr class="flex w-full mb-1">
                <!-- <th class="p-4 w-1/4">Rank</th> -->
                <th class="p-4 w-1/4">Name</th>
                <th class="p-4 w-1/4">Sales in ICP</th>
                <th class="p-4 w-1/4">Transition Vols</th>
                <th class="p-4 w-1/4">Listings</th>
                <th class="p-4 w-1/4">Total Assets</th>
                <th class="p-4 w-1/4">DAOScore</th>
                <th class="p-4 w-1/4">Avg.Price</th>
              </tr>
            </thead>
            <tbody
              class="
                bg-grey-light
                flex flex-col
                items-center
                justify-between
                w-full
                text-white
                divide-y divide-gray-400 divide-opacity-65
                h-auto
              "
            >
              <tr
                class="flex w-full pt-3 pb-3 text-center"
                v-for="ranks in getIcpuzzleTotal"
                :key="ranks.Id"
              >
                <!-- <td class="w-1/4">{{ ranks.listings }}</td> -->
                <td class="w-1/4 pl-10">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        :src="ranks.icon"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-white whitespace-no-wrap">
                        {{ ranks.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="w-1/4">{{ ranks.salesIcp }}</td>
                <td class="w-1/4">{{ ranks.totalSales }}</td>
                <td class="w-1/4">{{ ranks.listings }}</td>
                <td class="w-1/4">{{ ranks.minted }}</td>
                <td class="w-1/4">{{ ranks.score }}</td>
                <td class="w-1/4">{{ ranks.averagePrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
