<script>
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { fetchRank } from '../api/index.js';
import { Decimal } from 'decimal.js';
import moment from 'moment';
import { toThousands } from '../utils/tool.js';
import { reactive, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import * as icpuzzleIdl from '../api/nft/icpuzzleIdl';
import axios from 'axios';

export default defineComponent({
  components: { Header, Footer },

  setup() {
    const router = useRouter();

    function goJump(id) {
      const url = 'https://' + id + '.raw.ic0.app/';
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
        return 'just now';
      } else if (interval < 3600) {
        //1 分钟到 1 小时之间
        return Math.floor(interval / 60) + ' minutes ago';
      } else if (interval >= 3600 && dval - this.getTodayUnix() >= 0) {
        //1 小时到 1 天之间
        return Math.floor(interval / 3600) + ' hours ago';
      } else if (interval / (3600 * 24) <= 31) {
        //1 天到 1 个月（假设固定为 31 天）之间
        return Math.ceil(interval / (3600 * 24)) + ' days ago';
      } else {
        return this.moment(dval).format('YYYY-MM-DD hh:mm:ss');
      }
    }

    const getIcpuzzleTotal = reactive([]);

    function goJumpAccount(raccount) {
      router.push({ path: '/account/' + raccount, query: { id: raccount } });
    }

    // get data https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/

    function getPuzzle() {
      var api = 'https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrPop = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrPop['icon'] =
            'https://owuqd-dyaaa-aaaah-qapxq-cai.raw.ic0.app/?tokenid=uew4n-3akor-uwiaa-aaaaa-b4ad5-4aqca-aabas-a';
          arrPop['name'] = 'Icpuzzle';
          arrPop['score'] = '65';
          arrPop['minted'] = popl[1].trim().replace('_', '');
          arrPop['listings'] = popp[1].trim().replace('_', '');
          arrPop['totalSales'] = popk[1].trim().replace('_', '');
          arrPop['salesIcp'] = popm[1].trim().replace('_', '');
          arrPop['averagePrice'] = popn[1].trim().replace('_', '');

          getIcpuzzleTotal.push(arrPop);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // wings
    function getWings() {
      var api = 'https://73xld-saaaa-aaaah-qbjya-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://73xld-saaaa-aaaah-qbjya-cai.raw.ic0.app/?tokenid=eq7yk-xikor-uwiaa-aaaaa-b4ako-aaqca-aaaaa-q';
          arrOp['name'] = 'Wing';
          arrOp['score'] = '89';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Ictuts

    function goIctuts() {
      var api = 'https://ahl3d-xqaaa-aaaaj-qacca-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[4].split(':');
          let popk = arrs[5].split(':');
          let popm = arrs[6].split(':');
          let popn = arrs[7].split(':');
          arrOp['icon'] =
            'https://nnsdao.s3.ap-southeast-1.amazonaws.com/nnsdao/tW7romVf_400x400.jpg';
          arrOp['name'] = 'Ictuts';
          arrOp['score'] = '55';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // goStarverse
    function goStarverse() {
      var api = 'https://nbg4r-saaaa-aaaah-qap7a-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://nbg4r-saaaa-aaaah-qap7a-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=pjif4-yykor-uwiaa-aaaaa-b4ad7-yaqca-aaaab-a';
          arrOp['name'] = 'Starverse';
          arrOp['score'] = '77';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //interastrosc

    function goInterastrosc() {
      var api = 'https://sr4qi-vaaaa-aaaah-qcaaq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://sr4qi-vaaaa-aaaah-qcaaq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=6roeh-nykor-uwiaa-aaaaa-b4aqa-eaqca-aaaaa-a';
          arrOp['name'] = 'Interastrosc';
          arrOp['score'] = '72';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icpuppies

    function goIcpuppies() {
      var api = 'https://njgly-uaaaa-aaaah-qb6pa-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://njgly-uaaaa-aaaah-qb6pa-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=g33bu-wakor-uwiaa-aaaaa-b4apt-yaqca-aaaag-q';
          arrOp['name'] = 'Icpuppies';
          arrOp['score'] = '81';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icelebrity

    function goIcelebrity() {
      var api = 'https://kss7i-hqaaa-aaaah-qbvmq-cai.raw.ic0.app';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://kss7i-hqaaa-aaaah-qbvmq-cai.raw.ic0.app/?tokenid=apmmb-hikor-uwiaa-aaaaa-b4anl-eaqca-aaaaa-a';
          arrOp['name'] = 'Icelebrity';
          arrOp['score'] = '81';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // faceted-meninas

    function goFacetedMeninas() {
      var api = 'https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=4x3fi-pikor-uwiaa-aaaaa-b4anl-maqca-aaabc-a';
          arrOp['name'] = 'FacetedMeninas';
          arrOp['score'] = '66';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icp-news

    function goIcpnews() {
      var api = 'https://uzhxd-ziaaa-aaaah-qanaq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://uzhxd-ziaaa-aaaah-qanaq-cai.raw.ic0.app/?tokenid=ijrqa-bqkor-uwiaa-aaaaa-b4adi-eaqca-aaaaa-a';
          arrOp['name'] = 'Icpnews';
          arrOp['score'] = '40';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // goIcmojis

    function goIcmojis() {
      var api = 'https://gevsk-tqaaa-aaaah-qaoca-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://gevsk-tqaaa-aaaah-qaoca-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=3rdla-kqkor-uwiaa-aaaaa-b4adq-qaqca-aaaaa-a';
          arrOp['name'] = 'Icmojis';
          arrOp['score'] = '66.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // goWearables

    function goWearables() {
      var api = 'https://tde7l-3qaaa-aaaah-qansa-cai.raw.ic0.app';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://tde7l-3qaaa-aaaah-qansa-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=exusw-xqkor-uwiaa-aaaaa-b4adm-qaqca-aaaap-a';
          arrOp['name'] = 'Wearables';
          arrOp['score'] = '79.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // motoko

    function goMotoko() {
      var api = 'https://oeee4-qaaaa-aaaak-qaaeq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[8].split(':');
          let popp = arrs[10].split(':');
          let popk = arrs[11].split(':');
          let popm = arrs[12].split(':');
          let popn = arrs[13].split(':');
          arrOp['icon'] =
            'https://oeee4-qaaaa-aaaak-qaaeq-cai.raw.ic0.app/?tokenid=ceujj-dqkor-uwiaa-aaaaa-cuaab-eaqca-aabmu-q';
          arrOp['name'] = 'Motoko';
          arrOp['score'] = '86.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // wildwest

    function goWildwest() {
      var api = 'https://b5el6-hqaaa-aaaah-qcdhq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[6].split(':');
          let popk = arrs[7].split(':');
          let popm = arrs[8].split(':');
          let popn = arrs[9].split(':');
          arrOp['icon'] =
            'https://b5el6-hqaaa-aaaah-qcdhq-cai.raw.ic0.app/?tokenid=dthxl-6ykor-uwiaa-aaaaa-b4aqz-4aqca-aaacb-q';
          arrOp['name'] = 'Wildwest';
          arrOp['score'] = '76.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //icpumpkins

    function goIcpumpkins() {
      var api = 'https://btggw-4aaaa-aaaah-qcdgq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://btggw-4aaaa-aaaah-qcdgq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=ttt5v-eikor-uwiaa-aaaaa-b4aqz-uaqca-aaaao-q';
          arrOp['name'] = 'Icpumpkins';
          arrOp['score'] = '68.9';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //iconic2021

    function goIconic2021() {
      var api = 'https://eb7r3-myaaa-aaaah-qcdya-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[7].split(':');
          let popp = arrs[9].split(':');
          let popk = arrs[10].split(':');
          let popm = arrs[11].split(':');
          let popn = arrs[12].split(':');
          arrOp['icon'] =
            'https://eb7r3-myaaa-aaaah-qcdya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=zcawt-lakor-uwiaa-aaaaa-b4aq6-aaqca-aaacm-a';
          arrOp['name'] = 'Iconic2021';
          arrOp['score'] = '48.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //  tylerdakota

    function goTylerdakota() {
      var api = 'https://dv6u3-vqaaa-aaaah-qcdlq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://dv6u3-vqaaa-aaaah-qcdlq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=jneek-xqkor-uwiaa-aaaaa-b4aq2-4aqca-aaaaa-q';
          arrOp['name'] = 'tylerdakota';
          arrOp['score'] = '59.7';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // patternbased

    function goPatternbased() {
      var api = 'https://ckwhm-wiaaa-aaaah-qcdpa-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://ckwhm-wiaaa-aaaah-qcdpa-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=7aeta-iikor-uwiaa-aaaaa-b4aq3-yaqca-aaaay-q';
          arrOp['name'] = 'Patternbased';
          arrOp['score'] = '59.7';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // selaykarasu

    function goSelaykarasu() {
      var api = 'https://ckwhm-wiaaa-aaaah-qcdpa-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://cdvmq-aaaaa-aaaah-qcdoq-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=544bu-eakor-uwiaa-aaaaa-b4aq3-uaqca-aaaaa-q';
          arrOp['name'] = 'Selaykarasu';
          arrOp['score'] = '79.1';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Heroes

    function goHeros() {
      var api = 'https://poyn6-dyaaa-aaaah-qcfzq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[11].split(':');
          let popk = arrs[12].split(':');
          let popm = arrs[13].split(':');
          let popn = arrs[14].split(':');
          arrOp['icon'] =
            'https://poyn6-dyaaa-aaaah-qcfzq-cai.raw.ic0.app/?asset=22R&type=thumbnail';
          arrOp['name'] = 'Heroes';
          arrOp['score'] = '86.4';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Dfinity Bulls

    function goBulls() {
      var api = 'https://dknxi-2iaaa-aaaah-qceuq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[13].split(':');
          let popk = arrs[14].split(':');
          let popm = arrs[15].split(':');
          let popn = arrs[16].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/bulls/avatar.jpg';
          arrOp['name'] = 'Dfinity Bulls';
          arrOp['score'] = '66.7';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // IC3D

    function goBulls() {
      var api = 'https://nfvlz-jaaaa-aaaah-qcciq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[10].split(':');
          let popk = arrs[11].split(':');
          let popm = arrs[12].split(':');
          let popn = arrs[13].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/nfvlz-jaaaa-aaaah-qcciq-cai.jpg';
          arrOp['name'] = 'IC3D';
          arrOp['score'] = '77.12';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // IC Flight

    function goFlight() {
      var api = 'https://dylar-wyaaa-aaaah-qcexq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/flight/avatar.jpg';
          arrOp['name'] = 'Flight';
          arrOp['score'] = '72.7';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //ic art

    function goArt() {
      var api = 'https://vj752-6iaaa-aaaah-qcm6a-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/eq/avatar.jpg';
          arrOp['name'] = 'Equanimity';
          arrOp['score'] = '64.2';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // ickitties
    function goIckitties() {
      var api = 'https://v3zkd-syaaa-aaaah-qcm5a-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[13].split(':');
          let popk = arrs[11].split(':');
          let popm = arrs[15].split(':');
          let popn = arrs[16].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/ickitties/avatar.jpg';
          arrOp['name'] = 'Ickitties';
          arrOp['score'] = '73.9';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // icircle

    function goIcircle() {
      var api = 'https://z7mqv-liaaa-aaaah-qcnqa-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[13].split(':');
          let popk = arrs[10].split(':');
          let popm = arrs[14].split(':');
          let popn = arrs[15].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/icircle/avatar.jpg';
          arrOp['name'] = 'Icircle';
          arrOp['score'] = '83.2';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //cyman
    function goCyman() {
      var api = 'https://xphpx-xyaaa-aaaah-qcmta-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[12].split(':');
          let popk = arrs[10].split(':');
          let popm = arrs[14].split(':');
          let popn = arrs[15].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/cyman/avatar.jpg';
          arrOp['name'] = 'Cyman';
          arrOp['score'] = '83.2';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // spaceapes

    function goSpaceapes() {
      var api = 'https://3mttv-dqaaa-aaaah-qcn6q-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[13].split(':');
          let popk = arrs[11].split(':');
          let popm = arrs[15].split(':');
          let popn = arrs[16].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/spaceapes/avatar.jpg';
          arrOp['name'] = 'Spaceapes';
          arrOp['score'] = '89.6';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // frog2d

    function goFrog2d() {
      var api = 'https://bkvll-jiaaa-aaaah-qcqnq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/frog2d/2dAvatar.png';
          arrOp['name'] = 'Frog2d';
          arrOp['score'] = '59.6';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //btcflower
    function goBtcflower() {
      var api = 'https://pk6rk-6aaaa-aaaae-qaazq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[4].split(':');
          let popk = arrs[5].split(':');
          let popm = arrs[6].split(':');
          let popn = arrs[7].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/btcflower/avatar.jpg';
          arrOp['name'] = 'Btcflower';
          arrOp['score'] = '79.2';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //memecake
    function goMemecake() {
      var api = 'https://txr2a-fqaaa-aaaah-qcmkq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[11].split(':');
          let popk = arrs[12].split(':');
          let popm = arrs[13].split(':');
          let popn = arrs[14].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/mc/avatar.png';
          arrOp['name'] = 'Memecake';
          arrOp['score'] = '65.9';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //ogmedals
    function goOgmedals() {
      var api = 'https://rw623-hyaaa-aaaah-qctcq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[1].split(':');
          let popp = arrs[2].split(':');
          let popk = arrs[3].split(':');
          let popm = arrs[4].split(':');
          let popn = arrs[5].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/ogmedals/avatar.jpg';
          arrOp['name'] = 'Ogmedals';
          arrOp['score'] = '88.21';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //dfinitydeck
    function goDfinitydeck() {
      var api = 'https://mk3kn-pyaaa-aaaah-qcoda-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[10].split(':');
          let popk = arrs[11].split(':');
          let popm = arrs[12].split(':');
          let popn = arrs[13].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/dd/avatar.jpg';
          arrOp['name'] = 'Dfinitydeck';
          arrOp['score'] = '78.44';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //frogvoxel
    function goFrogvoxel() {
      var api = 'https://erpx2-pyaaa-aaaah-qcqsq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[12].split(':');
          let popk = arrs[13].split(':');
          let popm = arrs[14].split(':');
          let popn = arrs[15].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/frog2d/VoxelAvatar.png';
          arrOp['name'] = 'Frogvoxel';
          arrOp['score'] = '65.78';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // frog3d
    function goFrog3d() {
      var api = 'https://xcep7-sqaaa-aaaah-qcukq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[3].split(':');
          let popp = arrs[12].split(':');
          let popk = arrs[13].split(':');
          let popm = arrs[14].split(':');
          let popn = arrs[15].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/frog3d/avatar.png';
          arrOp['name'] = 'Frog3d';
          arrOp['score'] = '89.72';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // saga
    function goSaga() {
      var api = 'https://nges7-giaaa-aaaaj-qaiya-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[2].split(':');
          let popp = arrs[5].split(':');
          let popk = arrs[6].split(':');
          let popm = arrs[7].split(':');
          let popn = arrs[10].split(':');
          arrOp['icon'] = 'https://entrepot.app/collections/saga/avatar.jpg';
          arrOp['name'] = 'Saga Legends';
          arrOp['score'] = '92.12';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '') / 10000000;
          arrOp['averagePrice'] = popn[1].trim().replace('_', '') / 100000000;
          getIcpuzzleTotal.push(arrOp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //tranquillity

    function goTranquillity() {
      var api = 'https://t2eok-gyaaa-aaaah-qclwq-cai.raw.ic0.app/';
      axios
        .get(api)
        .then((res) => {
          let arrOp = [];
          let arrs = res.data.split(/\r?\n/);
          let popl = arrs[4].split(':');
          let popp = arrs[11].split(':');
          let popk = arrs[12].split(':');
          let popm = arrs[13].split(':');
          let popn = arrs[14].split(':');
          arrOp['icon'] =
            'https://entrepot.app/collections/tranquillity/avatar.jpg';
          arrOp['name'] = 'Tranquillity';
          arrOp['score'] = '97.7';
          arrOp['minted'] = popl[1].trim().replace('_', '');
          arrOp['listings'] = popp[1].trim().replace('_', '');
          arrOp['totalSales'] = popk[1].trim().replace('_', '');
          arrOp['salesIcp'] = popm[1].trim().replace('_', '');
          arrOp['averagePrice'] = popn[1].trim().replace('_', '');
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
        goIcpumpkins();
        goWildwest();
        goIconic2021();
        goSelaykarasu();
        goHeros();
        goBulls();
        goFlight();
        goArt();
        goIckitties();
        goIcircle();
        goCyman();
        goSpaceapes();
        goFrog2d();
        goBtcflower();
        goMemecake();
        goOgmedals();
        goDfinitydeck();
        goFrogvoxel();
        goFrog3d();
        goSaga();
        goTranquillity();
        goPatternbased();
        goTylerdakota();
        goMotoko();
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
      goIcpumpkins,
      goWildwest,
      goMotoko,
      goTylerdakota,
      goPatternbased,
      goSelaykarasu,
      goHeros,
      goBulls,
      goFlight,
      goArt,
      goIckitties,
      goIcircle,
      goCyman,
      goSpaceapes,
      goFrog2d,
      goMemecake,
      goOgmedals,
      goDfinitydeck,
      goFrogvoxel,
      goFrog3d,
      goSaga,
      goTranquillity,
      goBtcflower,
      goIconic2021,
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
      account: '',
      goJump
    };
  }
});
</script>

<template>
  <Header />
  <main>
    <div>
      <div
        class="w-full md:container md:mx-auto mx-auto relative items-center justify-center bg-gray-600"
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
              class="bg-grey-light flex flex-col items-center justify-between w-full text-white divide-y divide-gray-400 divide-opacity-65 h-auto"
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
