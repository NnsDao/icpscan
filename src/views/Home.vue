<!-- This example requires Tailwind CSS v2.0+ -->
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import { fetchList }  from "../api/index.js";


import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "12,740,164",
    description: "Blocks High",
    icon: GlobeAltIcon,
  },
  {
    name: "12.12",
    description: "Blocks/second",
    icon: ScaleIcon,
  },
  {
    name: "105",
    description: "Node Machines",
    icon: LightningBoltIcon,
  },
  {
    name: "233",
    description: "Canisters",
    icon: AnnotationIcon,
  },
  {
    name: "38.15",
    description: "Messages/second",
    icon: AnnotationIcon,
  },
  {
    name: "472786",
    description: "Messages",
    icon: AnnotationIcon,
  },
  {
    name: "160",
    description: "Price",
    icon: AnnotationIcon,
  },
  {
    name: "1.333B",
    description: "Marketcap",
    icon: AnnotationIcon,
  },
];

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default defineComponent({
  components: { Header,Footer },

  setup() {


    // const { t } = useI18n();
    console.log("setup");
    const list = ref([]);
    let _clearCache = () => {}
    let onClear = () => {
      _clearCache();
    };
    let time = 0
    const getList = () => {
      time++
      // var num = Math.floor(Math.random() * 100 + 1);
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
      fetchList(data).then((res) => {
        console.log("APP:::", res);
        list.value = res && res.data && res.data.list;
        // if (time < 3) {
        //   getList()
        // }
      });
    };
    getList();

    return {
      features,
      people,
      list,
      getList,
      onClear,
    };
  },
});
</script>

<template>
  <!-- header -->
  <Header />

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-gray-900">
        {{t('iname')}}
      </h3>
    </div>
  </header>
  <main>
    <div class="py-3 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 搜索 -->
        <form class="relative">
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
              w-full
              text-sm text-black
              placeholder-gray-500
              border border-gray-200
              rounded-md
              py-2
              pl-10
            "
            type="text"
            aria-label="Search by Account / Transaction"
            placeholder="Search by Account / Transaction"
          />
        </form>
        <!-- <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div> -->

        <div class="mt-10">
          <dl class="md:space-y-3 md:grid md:grid-cols-4">
            <div
              v-for="feature in features"
              :key="feature.name"
              class="relative"
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
                  <component
                    :is="feature.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ feature.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- content -->

        <div class="mt-10 py-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <h3 class="text-3xl font-bold text-gray-900">latest</h3>

            <div class="mt-3 shadow overflow-hidden border-b sm:rounded-lg">
              <table class="min-w-full">
                <tbody class="bg-white divide-y divide-gray-100">
                  <tr v-for="person in people" :key="person.email">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="person.image"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ person.name }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ person.email }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ person.title }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person.department }}
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
                      >
                        Active
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ person.role }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                      "
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
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
