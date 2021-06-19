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
    <section class=" text-gray-200 bg-gray-900">
      <div class="max-w-6xl mx-auto px-5 py-24 ">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"> {{ t('iAboutUs') }}</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
             {{ t('iAboutUsSub') }}
          </p>
        </div>
        <div class="flex flex-wrap -m-4">


           <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>

              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpCapitalDao') }}</h2>
              <p class="leading-relaxed text-base"> {{ t('iIcpCapitalAuthor') }}</p>
              
              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
            
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#D8D8D8" d="M15.6 17.667h3.5V3h-3.5z"/>
                      <path fill="#667EEA" d="M8.2 6.583v11.08h3.5V6.583z"/>
                      <path fill="#667EEA" d="M9.2 6.583v11.08h3.5V6.583z"/>
                      <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                    </g>
                  </svg>
                    {{ t('iIcpCapitalName') }}
                </span>
              </div>

            </div>
          </div>


         
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
               
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpDropsName') }}</h2>
              <p class="leading-relaxed text-base">{{ t('iIcpDrops') }}</p>

              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <path fill="#D8D8D8" d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"/>
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                    </g>
                    </svg>
                    {{ t('iIcpDropsAuthor') }}
                </span>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpSocialName') }} </h2>
              <p class="leading-relaxed text-base">{{ t('iIcpSocial') }}</p>
              
              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
            
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#D8D8D8" d="M15.6 17.667h3.5V3h-3.5z"/>
                      <path fill="#667EEA" d="M9.2 6.583v11.08h3.5V6.583z"/>
                      <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                      <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                    </g>
                  </svg>
                    {{ t('iIcpSocialAuthor') }}
                </span>
              </div>

            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>

              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpNnsdaoName') }}</h2>
              <p class="leading-relaxed text-base"> {{ t('iIcpNnsDao') }}</p>
              
              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
            
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#D8D8D8" d="M15.6 17.667h3.5V3h-3.5z"/>
                      <path fill="#667EEA" d="M9.2 6.583v11.08h3.5V6.583z"/>
                      <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                      <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/>
                    </g>
                  </svg>
                    {{ t('iIcpNnsdaoAuthor') }}
                </span>
              </div>

            </div>
          </div>


           <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpScanName') }}</h2>
              <p class="leading-relaxed text-base"> {{ t('iIcpScan') }}</p>
              
              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <path fill="#D8D8D8" d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"/>
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/></g></svg>
                    {{ t('iIcpScanAuthor') }}
                </span>
              </div>

            </div>
          </div>


         

        </div>
        <div class="my-11">       
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            {{ t('iNnsDaoInfo') }}
          </p>

          <p class="lg:w-1/2 w-full leading-relaxed text-base my-3">
            {{ t('iNnsDaoToken') }}
          </p>
          <p class="my-3"> {{ t('iNnsDaoTokenSub') }} </p>
          <p class="hover:underline">  
            <a   target="_blank" href="https://www.icpscan.co/account/76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820?id=76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820"> 
              {{ t('iNnsDaoSponsor') }} 
            </a>
          </p>
        </div>


        <div class="flex  justify-start mt-4">
          <!-- todo api接入 -->
          <p  class="text-white mb-2">Sponsors Holders:</p>
            <div class="w-12 mr-5">
              <a href="https://twitter.com/teslack1" rel="nofollow" target="_blank">
                 <img src="https://gateway.pinata.cloud/ipfs/QmYwaYwA3HMg7n63ZnYSCMtyQu6Z6BcGyJZfd8GzQhe4XD"
                        alt="HWRD" class="object-cover w-10 h-10 mx-4 rounded-full">
              </a>
              <h3 class="font-bold text-gray-100 hover:underline ml-3 mt-3">HWRD</h3>
            </div>
            <!-- 
            <div class="w-12">
              <a href="https://twitter.com/kkdelos" rel="nofollow" target="_blank">
                 <img src="https://gateway.pinata.cloud/ipfs/QmYwaYwA3HMg7n63ZnYSCMtyQu6Z6BcGyJZfd8GzQhe4XD"
                        alt="HWRD" class="object-cover w-10 h-10 mx-4 rounded-full">
              </a>
              <h3 class="font-bold text-gray-100 hover:underline ml-3 mt-3">HWRD</h3>
            </div> -->
           
        </div>

      </div>
    </section>

</div>

  </main>
  <Footer />
</template>
