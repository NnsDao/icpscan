<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default defineComponent({
  components: { Header,Footer },

  setup() {
    return {
    };
  },
});
</script>

<template>
  <Header />
 <main>

<div>
  <div class="">
    <!-- Header Text-->
    
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-left py-6 px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-gray-900">
            All dApps 
        </h3>
        </div>
    </header> 

     <div
      class="container mx-auto mt-10 grid grid-cols-4 gap-10 md:grid-cols-3 xl:grid-cols-4"
    >
      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Social</div>
            <div class="font-bold text-lg">66</div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-green-500"
          >
           <svg t="1622010120306" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8553" width="200" height="200"><path d="M512 261.1c-138.6 0-250.9 112.3-250.9 250.9S373.4 762.9 512 762.9 762.9 650.6 762.9 512 650.6 261.1 512 261.1z m94.8 345.7H417.2V417.2h189.7v189.6z" fill="#282828" p-id="8554"></path><path d="M456.8 456.8h110.3v110.3H456.8z" fill="#282828" p-id="8555"></path><path d="M512 103.1c-225.9 0-408.9 183.1-408.9 408.9s183 408.9 408.9 408.9 408.9-183 408.9-408.9-183-408.9-408.9-408.9z m0 700.2c-160.9 0-291.3-130.4-291.3-291.3S351.1 220.7 512 220.7 803.3 351.1 803.3 512 672.9 803.3 512 803.3z" fill="#282828" p-id="8556"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">DeFi</div>
            <div class="font-bold text-lg">6</div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">dApp</div>
            <div class="font-bold text-lg">23</div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-red-500"
          >
           <svg t="1622010163453" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9365" width="200" height="200"><path d="M256 466.496V768h527.312V466.16L519.68 264.32 256 466.496z m273.392-255.2l295.632 226.352a16 16 0 0 1 6.288 12.704v349.664a16 16 0 0 1-16 16H224a16 16 0 0 1-16-16V450.72a16 16 0 0 1 6.272-12.704L509.92 211.296a16 16 0 0 1 19.472 0z m158.96 309.392v154.72c0 17.28-14.128 31.04-31.232 31.04H382.192c-17.12 0-31.232-13.76-31.232-31.04v-154.72c0-32.192 29.504-56.384 61.76-50.592 12.64 2.256 23.824 9.312 31.84 19.296l25.328 31.552h99.52l25.328-31.52a52.992 52.992 0 0 1 31.84-19.328c32.272-5.792 61.76 18.4 61.76 50.592z m-48 0c0-2.064-2.24-3.904-5.296-3.36-0.752 0.144-1.84 0.832-2.88 2.128l-39.76 49.488H446.88l-7.2-8.96-32.56-40.544c-1.024-1.28-2.128-1.968-2.88-2.096-3.04-0.56-5.28 1.28-5.28 3.344v137.76h241.392v-137.76z" p-id="9366"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Community</div>
            <div class="font-bold text-lg">6</div>
          </div>
        </div>
      </div>

      <!-- Infrastructure -->

      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-green-500"
          >
            <svg t="1622009792787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2052" width="200" height="200"><path d="M879.9 468.4L512 683 144.1 468.4c-15.3-8.9-34.9-3.7-43.8 11.5-8.9 15.3-3.7 34.9 11.5 43.8l384 224c5 2.9 10.6 4.4 16.1 4.4 5.6 0 11.1-1.5 16.1-4.4l384-224c15.3-8.9 20.4-28.5 11.5-43.8-8.8-15.3-28.4-20.4-43.6-11.5z" fill="#1875F0" p-id="2053"></path><path d="M879.9 644.4L512 859 144.1 644.4c-15.3-8.9-34.9-3.7-43.8 11.5-8.9 15.3-3.7 34.9 11.5 43.8l384 224c5 2.9 10.6 4.4 16.1 4.4 5.6 0 11.1-1.5 16.1-4.4l384-224c15.3-8.9 20.4-28.5 11.5-43.8-8.8-15.3-28.4-20.4-43.6-11.5zM111.9 347.6l384 224c5 2.9 10.6 4.4 16.1 4.4 5.6 0 11.1-1.5 16.1-4.4l384-224c9.8-5.7 15.9-16.3 15.9-27.6s-6-21.9-15.9-27.6l-384-224c-10-5.8-22.3-5.8-32.2 0l-384 224C102 298.1 96 308.6 96 320c0 11.4 6 21.9 15.9 27.6zM512 133l320.5 187L512 507 191.5 320 512 133z" fill="#1875F0" p-id="2054"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Infrastructure</div>
            <div class="font-bold text-lg">2</div>
          </div>
        </div>
      </div>


      <!-- NFT -->

      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-red-500"
          >
            <svg t="1622009900825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2619" width="200" height="200"><path d="M522.666667 149.333333C316.48 149.333333 149.333333 316.48 149.333333 522.666667S316.48 896 522.666667 896c36.096 0 60.181333-10.090667 65.002666-39.765333 1.706667-10.538667-0.085333-19.925333-4.181333-30.933334l-1.984-5.034666-6.826667-15.530667c-10.176-23.125333-10.965333-33.770667-2.048-45.290667l1.792-2.176 2.048-2.218666 1.258667-1.237334 1.173333-0.725333c3.605333-2.048 8.106667-3.093333 14.677334-3.008l4.714666 0.213333c1.685333 0.149333 3.477333 0.32 5.397334 0.576l6.186666 0.917334 6.997334 1.28 7.936 1.621333 8.938666 2.005333 10.026667 2.368 14.784 3.626667c98.133333 23.552 159.573333 7.552 204.778667-87.125333A372.864 372.864 0 0 0 896 522.666667C896 316.48 728.853333 149.333333 522.666667 149.333333z m0 64C693.504 213.333333 832 351.829333 832 522.666667c0 44.053333-9.194667 86.762667-26.752 126.058666-29.184 61.12-59.626667 69.056-131.626667 51.754667l-15.701333-3.84-12.48-2.965333-11.477333-2.538667-10.56-2.112c-40.533333-7.530667-61.098667-4.266667-85.973334 14.997333l-2.133333 1.813334a118.677333 118.677333 0 0 0-13.290667 14.464c-25.92 33.493333-24.704 65.173333-8.106666 105.152l2.816 6.464-7.466667-0.213334C344.64 824.704 213.333333 689.024 213.333333 522.666667 213.333333 351.829333 351.829333 213.333333 522.666667 213.333333z" p-id="2620"></path><path d="M725.333333 512m-53.333333 0a53.333333 53.333333 0 1 0 106.666667 0 53.333333 53.333333 0 1 0-106.666667 0Z" p-id="2621"></path><path d="M640 341.333333m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" p-id="2622"></path><path d="M426.666667 341.333333m-53.333334 0a53.333333 53.333333 0 1 0 106.666667 0 53.333333 53.333333 0 1 0-106.666667 0Z" p-id="2623"></path><path d="M341.333333 512m-53.333333 0a53.333333 53.333333 0 1 0 106.666667 0 53.333333 53.333333 0 1 0-106.666667 0Z" p-id="2624"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">NFT</div>
            <div class="font-bold text-lg">5</div>
          </div>
        </div>
      </div>


      <!-- Game -->

      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-red-500"
          >
            <svg t="1622009942071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3767" width="200" height="200"><path d="M703.21 274.98H357.19c-7.75 0-16.68-1.84-25.62-1.3-2.9 0.17-5.83-0.58-8.77-0.58C198.84 273.1 98 380.39 98 513.87s100.84 239.47 224.79 239.47c38.03 0 93.72-9.55 132.78-39.8h114.85c39.06 30.25 94.75 39.8 132.78 39.8 123.95 0 224.79-105.7 224.79-239.18S827.16 274.98 703.21 274.98z m0 413.98c-35.6 0-80.46-12.74-102.12-28.44l-9.08-7.46H433.99l-9.08 7.34c-21.66 15.7-66.51 28.75-102.12 28.75-85.81 0-155.62-77.82-155.62-173.17s69.81-173.42 155.62-173.42c4.31 0 8.6-1.25 12.85-1.49 4.64-0.28 10.06-2.59 12.61-2.11l3.09-3.48H703.2c85.81 0 155.62 81.39 155.62 176.74s-69.8 176.74-155.61 176.74z" fill="#040000" p-id="3768"></path><path d="M755.08 471.58h-37.03v-24.27c0-19.1-18.71-34.58-37.81-34.58s-37.81 15.48-37.81 34.58v24.27h-25.69c-19.1 0-35.23 15.12-34.9 35.45 0.41 25.7 15.81 40.17 34.9 40.17h25.69v38.45c0 19.1 18.71 34.58 37.81 34.58s37.81-15.48 37.81-34.58V547.2h37.03c19.1 0 34.58-21.07 34.58-40.17s-15.48-35.45-34.58-35.45z" fill="#040000" p-id="3769"></path><path d="M340.09 430.02m-34.58 0a34.58 34.58 0 1 0 69.16 0 34.58 34.58 0 1 0-69.16 0Z" fill="#040000" p-id="3770"></path><path d="M279.57 533.77m-34.58 0a34.58 34.58 0 1 0 69.16 0 34.58 34.58 0 1 0-69.16 0Z" fill="#040000" p-id="3771"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">GAME</div>
            <div class="font-bold text-lg">77</div>
          </div>
        </div>
      </div>

      <!-- DAO -->

      <div class="">
        <div class="flex flex-row bg-white shadow-sm rounded-xl p-4">
          <div
            class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-white-100 text-red-500"
          >
            <svg t="1622010026262" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6973" width="200" height="200"><path d="M527.9 546.2c-58.1 0-112.8-22.6-153.9-63.7-41.1-41.1-63.7-95.8-63.7-153.9s22.6-112.8 63.7-153.9c41.1-41.1 95.8-63.7 153.9-63.7 58.1 0 112.8 22.6 153.9 63.7s63.7 95.8 63.7 153.9-22.6 112.8-63.7 153.9c-41.1 41.1-95.8 63.7-153.9 63.7z m0-385.2c-92.4 0-167.6 75.2-167.6 167.6s75.2 167.6 167.6 167.6c92.4 0 167.6-75.2 167.6-167.6S620.3 161 527.9 161zM307.4 906.6c-100.3 0-181.9-81.6-181.9-181.9s81.6-181.9 181.9-181.9 181.9 81.6 181.9 181.9-81.6 181.9-181.9 181.9z m0-313.8c-72.7 0-131.9 59.2-131.9 131.9s59.2 131.9 131.9 131.9 131.9-59.2 131.9-131.9-59.1-131.9-131.9-131.9z" fill="#515151" p-id="6974"></path><path d="M307.4 906.6c-100.3 0-181.9-81.6-181.9-181.9s81.6-181.9 181.9-181.9 181.9 81.6 181.9 181.9-81.6 181.9-181.9 181.9z m0-313.8c-72.7 0-131.9 59.2-131.9 131.9s59.2 131.9 131.9 131.9 131.9-59.2 131.9-131.9-59.1-131.9-131.9-131.9zM761.1 817.4c-77 0-139.7-62.7-139.7-139.7S684.1 538 761.1 538s139.7 62.7 139.7 139.7-62.6 139.7-139.7 139.7z m0-229.4c-49.4 0-89.7 40.2-89.7 89.7s40.2 89.7 89.7 89.7 89.7-40.2 89.7-89.7-40.2-89.7-89.7-89.7z" fill="#515151" p-id="6975"></path><path d="M761.1 817.4c-77 0-139.7-62.7-139.7-139.7S684.1 538 761.1 538s139.7 62.7 139.7 139.7-62.6 139.7-139.7 139.7z m0-229.4c-49.4 0-89.7 40.2-89.7 89.7s40.2 89.7 89.7 89.7 89.7-40.2 89.7-89.7-40.2-89.7-89.7-89.7zM352.555 593.334l68.85-116.127 43.01 25.5-68.85 116.127z" fill="#515151" p-id="6976"></path><path d="M634.15 487.957l44.21-23.355 62.31 117.952-44.21 23.355z" fill="#515151" p-id="6977"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">DAO</div>
            <div class="font-bold text-lg">2</div>
          </div>
        </div>
      </div>
    </div>
   
    <!-- app -->

    <div
      class="container mx-auto mt-10 grid grid-cols-3 gap-4 md:grid-cols-2 xl:grid-cols-3"
    >

       <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/texas.png"
              alt="Texas Holdem"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Texas Holdem</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  >Texas DAOs </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                Built in IC Texas Hold'em Poker, it does not have a cloud server, it belongs to everyone.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/nnsdao/"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/nnsdaos"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://pbs.twimg.com/profile_banners/1376643064018526210/1620507140/1500x500"
              alt=""
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">dscvr</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  >rckprtr</a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                A completely decentralized social content platform running on the InternetComputer ... beta preview started!
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/DscvrO"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/post/5/introducing-dscvr-a-platform-that-belongs-to-its"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmRMd9jVEtChEuGNDSEju9fTfAfZXCjgwXVi2JHUG5UYJu"
              alt=""
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">capsule social</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://capsule.social/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Nadim Kobeissi </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                Capsule Social is building discourse technologies that are resistant to takedowns, censorship and mob intimidation.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/capsulesoc"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://discord.com/invite/HhVbaD2BHY"> <i class="fa fa-telegram  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://capsule.social/about/"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://capsule.social/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- second -->

       <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmZRqVpRW1VUHDoAh5onRwEMemUW9rJ3sLktchSBAG2L93"
              alt="origyn"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">origyn</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://origyn.ch/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > ORIGYN Foundation </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                For the first time in history, an object itself constitutes its own unique identity, through its own biometry.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/ORIGYNTech"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.instagram.com/origynfoundation/"> <i class="fa fa-instagram  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.linkedin.com/company/origyn-foundation/"> <i class="fa fa-linkedin  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.facebook.com/Origynfoundation/"> <i class="fa fa-facebook  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.origyn.ch/art/"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://origyn.ch/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmYSDXkS7uVEQhppGnPRJbhnwQGpYp1rMaWXgkArg8X3VF"
              alt="cancan"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">CanCan</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://github.com/dfinity/cancan"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > dfinity Foundation </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                CanCan is a decentralized video-sharing social networking service that lets people stream and share videos onto their mobile device directly from the internet. The DFINITY Foundation developed the sample dapp to demonstrate the abilities of the Internet Computer, the world’s first blockchain that runs at web speed with unbounded capacity.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/dfinity/cancan"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://medium.com/dfinity/cancan-the-internet-computers-decentralized-tiktok-is-now-open-source-5eed04547aa1"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://github.com/dfinity/cancan"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://pbs.twimg.com/profile_banners/1047915263453224966/1585629262/1500x500"
              alt="Fleek"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Fleek</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://fleek.co/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Fleek Foundation </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  Effortlessly build Open Web sites & apps. Hosting, ENS, Storage, Pinning & More. Built on IPFS, DFINITY, Ethereum & Filecoin.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/FleekHQ"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://blog.fleek.co/"> <i class="fa fa-medium  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://fleek-public.slack.com/join/shared_invite/zt-qa2ukl1i-Z5j9uzxPL2CyhND58jCDbQ#/shared-invite/email"> <i class="fa fa-slack  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.youtube.com/channel/UCBzlwYM0JjZpjDZ52-SLUmw"> <i class="fa fa-youtube  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://fleek.co/about/"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://fleek.co/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmZUw515LL4wVTAErPcxxMeK4CmFBZaRSnbFf9tjt3icSC"
              alt="cancan"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">dfinitynft</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://www.dfinitynft.org/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > dfinitynft labs </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  Anyone can easily experience blockchain through open Internet service and distributed financial system.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/DfinitynftO"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://github.com/dfinitynft"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.dfinitynft.org/market"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://dfinitynft.org/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmUB4nwfaHjeUqM4vxGVCUnufuVffqmZ8tsZXFAMRuNQXd"
              alt="canistore"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Canistore</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://canistore.io/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > canistore </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  Create. License. Play.
                  Your Content, Your Community.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://twitter.com/canistore"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://t.me/canistore"> <i class="fa fa-telegram  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.instagram.com/canistore.io/"> <i class="fa fa-instagram  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://medium.com/@canistore"> <i class="fa fa-medium  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.youtube.com/channel/UC00_KjsUGBgAc9yP4Z7_4iQ"> <i class="fa fa-youtube  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://canistore.io/technology/"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://canistore.io/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://images.ctfassets.net/ywqk17d3hsnp/7eAAoMwv7605cOKs9W3E9m/3d06af7e606ce40955e76dd6b5e6b6a6/Main_LOGO.png?w=280&q=50"
              alt="hypotenuse"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Hypotenuse</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://hypotenuse.ca/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > HYP LABS </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  Framework with weather and crypto oracle plug-ins.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/hyplabs"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://hypotenuselabs.medium.com/"> <i class="fa fa-medium  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://www.linkedin.com/company/hypotenuselabs/about/"> <i class="fa fa-linkedin  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://hypotenuse.ca/about"> <i class="fa fa-exclamation-circle  text-black-400 fa-lg"></i> </a>
                </div>
                <a
                  href="https://hypotenuse.ca/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://images.ctfassets.net/ywqk17d3hsnp/6XF59gUeMJvtQm93f93m3M/b75a00a2fa3a99b38ed51625a82e616c/Sudograph.png"
              alt="Sudograph"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Sudograph</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://sudograph.org/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > lastmjs.eth </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  GraphQL implementation on the Internet Computer.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/sudograph/sudograph"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/lastmjs"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://sudograph.org/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://pbs.twimg.com/profile_banners/1372633684411621380/1618031199/1500x500"
              alt="dfinance"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">dfinance</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://dfinance.ai/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > DFinance </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  Open financial services hub for DFINITY internet computer.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/dfinance-tech"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/DFinance_AI"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://dfinance.ai/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmWLk14YKmybtjVgMDJdPXeHGKeuYhK2L917ZgW2qE8rmX"
              alt="OpenChat"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">OpenChat</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://7e6iv-biaaa-aaaaf-aaada-cai.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > OpenChat </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                  OpenChat 的功能类似于 WhatsApp，不同之处在于它完全运行在互联网计算机上，这是世界上第一个互联网规模的区块链.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/nnsdao"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/OpenChat"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://7e6iv-biaaa-aaaaf-aaada-cai.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmV692XE1WdmHXjWULAQV2z4w95jzrZaFNDsyEEarUPnwe"
              alt="CycleDao"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">cycledao</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://cycledao.xyz/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > CycleDao </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                我们的使命是支持自主服务、应用程序和基础设施的创建，以促进全球访问 DFINITY 互联网计算机上的开放网络和去中心化金融。
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/cycledao"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/cycle_dao"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://cycledao.xyz/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://gateway.pinata.cloud/ipfs/QmPkUSiHrpLUbsHa7t56zoArxFp8fKsdbP7fch4re6TgCa"
              alt="icme_app"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">icme_app</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://sygsn-caaaa-aaaaf-qaahq-cai.raw.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > icme_app </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                Internet Computer 的第一个无代码网站构建器。
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/nnsdao"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/icme_app"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://sygsn-caaaa-aaaaf-qaahq-cai.raw.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/nnsdao-logo-1024.png"
              alt="Nnsdao"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Nnsdao Protocol</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://twitter.com/nnsdaos"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Nnsdao Labs </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                The boundaryless autonomous organization.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/nnsdao"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/nnsdaos"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://twitter.com/nnsdaos"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/ICP-logo-mark.png"
              alt="Nnsdao"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">NNS Dapp</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://nns.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Dfinity </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                The NNS front-end dapp allows anyone to interact with the Internet Computer's Network Nervous System with a user-friendly UI. 
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/dfinity"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/dfinity"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://nns.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/motoko-lab-logo.5b9112fe.png"
              alt="Nnsdao Motoko"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Motoko Playground</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Motoko School </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                The Motoko Playground is an IDE for developers to learn Motoko – the native language for the Internet Computer blockchain. 
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/dfinity/motoko-playground"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/dfinity"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/icrocks-logo.png"
              alt="IC Rocks"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">IC Rocks</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://ic.rocks/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > IC Rocks </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                IC.Rocks is a complete "block explorer" for the Internet Computer – built by the community.Tracking everything from transactions, to network upgrades, to cycles, IC.Rocks enables anyone to explore the inner-workings of the Internet Computer. 
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/ic-rocks"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/ic_rocks"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://ic.rocks/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="/img/loader.webp"
              alt="Internet Identity"
            />
          </div>
          <div class="relative bg-gray-200">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-bold">Internet Identity</h3>
              <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <p>Provided by&nbsp;</p>
                <a
                  href="https://identity.ic0.app/"
                  class="hover:text-black transition duration-300 ease-in-out"
                  > Dfinity </a
                >
              </div>
              <!--  -->
              <p class="leading-7">
                Internet Identity guarantees that your data isn’t visible, tracked, or mined. The blockchain authentication system enables users to sign in to dapps on the Internet Computer and sites across the web anonymously and securely.
              </p>
              <div class="mt-10 flex justify-between items-center">
                <div>
                  <a href="https://github.com/dfinity/internet-identity"> <i class="fa fa-github  text-black-400 fa-lg mr-5"></i> </a>
                  <a href="https://twitter.com/dfinity"> <i class="fa fa-twitter  text-black-400 fa-lg mr-5"></i> </a>
                </div>
                <a
                  href="https://identity.ic0.app/"
                  class="flex items-center"
                >
                  <p class="mr-4">Visit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    
     
    </div>
  
    <!-- 最后的项目特色介绍 -->
    <div
      class="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
     <!-- 
      <div class="rounded-xl bg-gray-800 flex flex-col p-8">
        <div
          class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-4"
        >
          <svg
            class="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
        </div>
        <div class="flex-grow text-white">
          <h2 class="text-xl title-font font-medium mb-3">Webdesign</h2>
          <p class="leading-relaxed text-sm text-justify">
            Donner du goût 😍 de la couleur aux applications, je le fais afin de
            rendre vos sites attrayants 🎨. Avant de devenir webdesigner, depuis
            tout petit j'étais déjà familier à la couleur et du dessin.
          </p>
        </div>
      </div>
     <div class="rounded-xl bg-gray-800 flex flex-col p-8">
        <div
          class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-4"
        >
          <svg
            class="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
        </div>
        <div class="flex-grow text-white">
          <h2 class="text-xl title-font font-medium mb-3">Webdesign</h2>
          <p class="leading-relaxed text-sm text-justify">
            Donner du goût 😍 de la couleur aux applications, je le fais afin de
            rendre vos sites attrayants 🎨. Avant de devenir webdesigner, depuis
            tout petit j'étais déjà familier à la couleur et du dessin.
          </p>
        </div>
      </div>
      <div class="rounded-xl bg-gray-800 flex flex-col p-8">
        <div
          class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-4"
        >
          <svg
            class="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
        </div>
        <div class="flex-grow text-white">
          <h2 class="text-xl title-font font-medium mb-3">Webdesign</h2>
          <p class="leading-relaxed text-sm text-justify">
            Donner du goût 😍 de la couleur aux applications, je le fais afin de
            rendre vos sites attrayants 🎨. Avant de devenir webdesigner, depuis
            tout petit j'étais déjà familier à la couleur et du dessin.
          </p>
        </div>
      </div> -->
    </div>
  
  </div>
</div>



</main>
  <Footer /> 

</template>
