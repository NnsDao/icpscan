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
<!-- This is an example component -->
<div class="min-h-screen flex  justify-center mt-10">
    <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
        <div class="p-4 border-b">
            <h2 class="text-2xl ">
                Transaction Information
            </h2>
            <!-- <p class="text-sm text-gray-500">
                Personal details and application. 
            </p> -->
        </div>
        <div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Hash
                </p>
                <p>
                    9d77d34f905b2b258a84d441234d57abe89f7656b512854d77574024d03ea056
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Type
                </p>
                <p>
                    Transaction
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Status
                </p>
                <p>
                    Completed
                </p>
            </div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Index
                </p>
                <p>
                    43,004
                </p>
            </div>

            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Timestamp
                </p>
                <p>
                    2021/5/12下午7:36:12 UTC
                </p>
            </div>

            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    From
                </p>
                <p>
                    449ce7ad1298e2ed2781ed379aba25efc2748d14c60ede190ad7621724b9e8b2
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    To
                </p>
                <p>
                    6cecb998aadd1a77722076449deef5c7ec19a7708eea0c30d454b1588aa2a9ca
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Amount
                </p>
                <p>
                    2.333 ICP
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Fee
                </p>
                <p>
                    0.0001 ICP
                </p>
            </div>

             <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600">
                    Memo
                </p>
                <p>
                    14814253273985613165
                </p>
            </div>
            <!-- <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                <p class="text-gray-600">
                    Attachments
                </p>
                <div class="space-y-2">
                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                resume_for_manager.pdf
                            </span>
                        </div>
                        <a href="#" class="text-purple-700 hover:underline">
                            Download
                        </a>
                    </div>

                    <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                        <div class="space-x-2 truncate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"/></svg>
                            <span>
                                resume_for_manager.pdf
                            </span>
                        </div>
                        <a href="#" class="text-purple-700 hover:underline">
                            Download
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- support me by buying a coffee -->
    <!-- <a href="https://www.buymeacoffee.com/danimai" target="_blank" class="bg-purple-600 p-2 rounded-lg text-white fixed right-0 bottom-0">
        Support me
    </a> -->
</div>

</main>
  <Footer /> 

</template>
