<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { Header, Footer },

  setup() {
    return {};
  },
});
</script>

<template>
  <Header />
  <main>
    <div>
      <div class="mt-10 max-w-7xl mx-auto relative items-center justify-center">
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-left py-6 px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-gray-900">All 地址排名</h3>
          </div>
        </header>
      </div>

      <div
        class="
          max-w-7xl
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
                ID
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
                Fullname
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
                Email
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
                Phone
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
                Status
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
                Created At
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
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
                damilareanjorin1@gmail.com
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
                +2348106420637
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
                <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    font-semibold
                    text-green-900
                    leading-tight
                  "
                >
                  <span
                    aria-hidden
                    class="
                      absolute
                      inset-0
                      bg-green-200
                      opacity-50
                      rounded-full
                    "
                  ></span>
                  <span class="relative text-xs">active</span>
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
                September 12
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
                    rounded
                    transition
                    duration-300
                    hover:bg-blue-700
                    hover:text-white
                    focus:outline-none
                  "
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
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
                damilareanjorin1@gmail.com
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
                +2348106420637
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
                <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    font-semibold
                    text-green-900
                    leading-tight
                  "
                >
                  <span
                    aria-hidden
                    class="
                      absolute
                      inset-0
                      bg-green-200
                      opacity-50
                      rounded-full
                    "
                  ></span>
                  <span class="relative text-xs">active</span>
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
                September 12
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
                    rounded
                    transition
                    duration-300
                    hover:bg-blue-700
                    hover:text-white
                    focus:outline-none
                  "
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
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
                damilareanjorin1@gmail.com
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
                +2348106420637
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
                <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    font-semibold
                    text-red-900
                    leading-tight
                  "
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative text-xs">not active</span>
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
                September 12
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
                    rounded
                    transition
                    duration-300
                    hover:bg-blue-700
                    hover:text-white
                    focus:outline-none
                  "
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
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
                damilareanjorin1@gmail.com
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
                +2348106420637
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
                <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    font-semibold
                    text-green-900
                    leading-tight
                  "
                >
                  <span
                    aria-hidden
                    class="
                      absolute
                      inset-0
                      bg-green-200
                      opacity-50
                      rounded-full
                    "
                  ></span>
                  <span class="relative text-xs">active</span>
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
                September 12
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
                    rounded
                    transition
                    duration-300
                    hover:bg-blue-700
                    hover:text-white
                    focus:outline-none
                  "
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
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
                damilareanjorin1@gmail.com
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
                +2348106420637
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
                <span
                  class="
                    relative
                    inline-block
                    px-3
                    py-1
                    font-semibold
                    text-orange-900
                    leading-tight
                  "
                >
                  <span
                    aria-hidden
                    class="
                      absolute
                      inset-0
                      bg-orange-200
                      opacity-50
                      rounded-full
                    "
                  ></span>
                  <span class="relative text-xs">disabled</span>
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
                September 12
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
                    rounded
                    transition
                    duration-300
                    hover:bg-blue-700
                    hover:text-white
                    focus:outline-none
                  "
                >
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </main>
  <Footer />
</template>
