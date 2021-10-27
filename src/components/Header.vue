 
 <template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white
              hover:bg-gray-700
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-show="open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-show="open" class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            sm:items-stretch
            sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex  mr-7">
            <a href="/">
              <p class="text-3xl text-white">Icpscan</p>
            </a>
          </div>
          <div  class="lg:hidden sm:block sm:ml-6">
            <div class="flex flex-wrap space-x-4">
              <a
                v-for="(item, i) in navigation"
                :key="i"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static
            sm:inset-auto
            sm:ml-6
            sm:pr-0
          "
        >
          <div class="relative inline-flex">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              v-model="locale"
              @change="getTypeSelected"
              class="
                border border-gray-300
                rounded-full
                text-gray-600
                h-10
                pl-5
                pr-10
                bg-white
                hover:border-gray-400
                focus:outline-none
                appearance-none
              "
            >
              <option
                v-for="items in localeSelect"
                v-bind:value="items.label"
                :key="items.label"
              >
                {{ items.value }}
              </option>
            </select>
          </div>
          <!-- <button
            class="
              bg-gray-800
              p-1
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button> -->
          <!-- login -->
           
          <div class="w-32 mr-10 ...">
            <Login
              class="
                text-gray-300
                hover:bg-gray-700
                hover:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                truncate
              "
            />
          </div>
        
        </div>
      </div>
    </div>
    <!-- open after -->
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
        <Login
          class="
            text-gray-300
            hover:bg-gray-700
            hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
        />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

import Login from "@/components/Login.vue";

// i18n

import defaultData from "../config/default-data";
import { SETLOCALE } from "@/language";

let locale = "";

if (defaultData.locale === "zh-TW") {
  locale = "zh-TW";
} else if (defaultData.locale === "ja-JP") {
  locale = "ja-JP";
} else if (defaultData.locale === "ko-KR") {
  locale = "ko-KR";
} else if (defaultData.locale === "en-US") {
  locale = "en-US";
} else if (defaultData.locale === "tl-SW") {
  locale = "tl-SW";
}

let navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Rank", href: "/rank", current: false },
  { name: "Canisters", href: "/canisters", current: false },
  { name: "Subnet", href: "/subnet", current: false },
  { name: "Principal", href: "/principals", current: false },
  { name: "NFTs", href: "/nfts", current: false },
  { name: "Project", href: "/project", current: false },
  { name: "Node Map", href: "/chart", current: false },
  { name: "Chart", href: "/line", current: false },
];

if (locale == "zh-TW") {
  navigation = [
    { name: "首頁", href: "/", current: false },
    { name: "排行", href: "/rank", current: false },
    { name: "罐", href: "/canisters", current: false },
    { name: "子網", href: "/subnet", current: false },
    { name: "校長", href: "/principals", current: false },
    { name: "治理", href: "/neurons", current: false },
    { name: "NFTs", href: "/nfts", current: false },
    { name: "應用", href: "/project", current: false },
    { name: "節點地圖", href: "/chart", current: false },
    {
      name: "圖表",
      href: "/line",
      current: false,
    },
  ];
}

if (locale == "tl-SW") {
  navigation = [
    { name: "Nyumbani", href: "/", current: false },
    { name: "Cheo", href: "/rank", current: false },
    { name: "Canister", href: "/canisters", current: false },
    { name: "Subnet", href: "/subnet", current: false },
    { name: "wakuu", href: "/principals", current: false },
    { name: "Neva", href: "/neurons", current: false },
    { name: "NFTs", href: "/nfts", current: false },
    { name: "Mradi", href: "/project", current: false },
    { name: "Chati", href: "/chart", current: false },
    {
      name: "Mstari",
      href: "/line",
      current: false,
    },
  ];
}

if (locale == "ko-KR") {
  navigation = [
    { name: "홈페이지", href: "/", current: false },
    { name: "순위", href: "/rank", current: false },
    { name: "탱크", href: "/canisters", current: false },
    { name: "서브넷", href: "/subnet", current: false },
    { name: "교장", href: "/principals", current: false },
    { name: "뉴런", href: "/neurons", current: false },
    { name: "NFTs", href: "/nfts", current: false },
    { name: "계획", href: "/project", current: false },
    { name: "노드 맵", href: "/chart", current: false },
    {
      name: "차트",
      href: "/line",
      current: false,
    },
  ];
}

if (locale == "ja-JP") {
  navigation = [
    { name: "フロントページ", href: "/", current: false },
    { name: "ランキング", href: "/rank", current: false },
    { name: "タンク", href: "/canisters", current: false },
    { name: "サブネット", href: "/subnet", current: false },
    { name: "主要な", href: "/principals", current: false },
    { name: "ニューロン", href: "/neurons", current: false },
    { name: "NFTs", href: "/nfts", current: false },
    { name: "応用", href: "/project", current: false },
    { name: "ノードマップ", href: "/chart", current: false },
    {
      name: "チャート",
      href: "/line",
      current: false,
    },
  ];
}

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    Login,
  },
  setup() {
    const open = ref(true);

    // const store = useStore();
    // let locale = defaultData.locale;
    const localeSelect = defaultData.localeSelect;

    console.log(open,989898)

    return {
      navigation,
      open,
      localeSelect,
      locale,
    };
  },
  methods: {
    getTypeSelected() {
      //获取选中的违规类型
      SETLOCALE(this.locale);
    },
  },
};
</script>

