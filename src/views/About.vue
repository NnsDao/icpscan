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
                <!-- icpdrops -->
                <img src="/img/icpdrops.png" alt="icpdrops nnsdao" title="icpdrops dfinity nnsdao">
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
                <img src="/img/nnsdao-logo-1024.png" alt="nnsdao labs" title="dfinity nnsdao">
              </div>
              <a href="https://nnsdao.org/">
                <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcpNnsdaoName') }}</h2>
              </a>
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

          <!-- texas -->

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                 <img src="/img/texas-logo.png" alt="texas holdem" title="holdem dfinity nnsdao">
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">{{ t('iIcTexasName') }}</h2>
              <p class="leading-relaxed text-base"> {{ t('iIcTexas') }}</p>
              
              <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                </span>
                <span class=" inline-flex items-center leading-none text-sm">
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <path fill="#D8D8D8" d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"/>
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/></g></svg>
                    {{ t('iIcTexasAuthor') }}
                </span>
              </div>

            </div>
          </div>
        </div>
        <div class="my-5">       
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            {{ t('iNnsDaoInfo') }}
          </p>

          <p class="lg:w-1/2 w-full leading-relaxed text-base my-3">
            {{ t('iNnsDaoToken') }}
          </p>
          <p class="my-3"> {{ t('iNnsDaoTokenSub') }} </p>
          <p class="my-3"> {{ t('iNnsDaoSponsorIcpdrops') }} </p>
          <p class="my-5">  
              {{ t('iNnsDaoSponsor') }} 
          </p>
        </div>

        <div class="my-5"> 
            <p class="lg:w-1/2 w-full leading-relaxed text-base">
               NnsDAO Protocol: <a href="https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf" class="text-blue-800 hover:text-blue-500">  White Paper 1.0 </a>
            </p>
        </div>

      </div>
    </section>

</div>

  </main>
  <Footer />
</template>
