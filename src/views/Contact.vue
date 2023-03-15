<script lang="ts" setup>
import Formvue from '../components/form.vue'
</script>

<template>
    <div class="hero -mt-[100px]">
       <div class="w-[90vw] mx-auto ">
         <h2 class="uppercase font-bold text-white text-5xl pt-12 text-center">
            Contact AGM Containers
         </h2>

       </div>
    </div>
    <section class="py-32">
        <div class="w-[90vw] mx-auto">
            <div class="grid grid-cols-2 gap-4 -md:grid-cols-1">
                <img src="../assets/images/istockphoto-1124695331-612x612-1.jpg" alt="">
                <div>
                    <h4 class="font-bold text-dark-blue mb-7 text-2xl">
                        Buy  Container(S). Fill The Form Below & We'll Get Back To You ASAP
                    </h4>
                    <Formvue />
                </div>
            </div>
            <div class="mt-16 grid grid-cols-3 -md:grid-cols-1 gap-6">
                <div class="shadow p-4">
                    <div class="flex gap-2 mb-8">
                        <hr class="w-8 h-1 text-accent self-center">
                        <h4 class="text-dark-blue font-bold text-2xl">
                            Our Depots
                        </h4>
                    </div>
                    <div class="flex gap-2">
                        <span>
                            <i class="fas fa-location text-accent"></i>
                        </span>
                        <p>
                            41 Malcomson St, North Mackay, QLD 4740, Asutralia
                        </p>
                        <p>
                            With Depots All over AU, NZ
                        </p>
                    </div>
                </div>
                <div class="shadow p-4">
                    <div class="flex gap-2 mb-8">
                        <hr class="w-8 h-1 text-accent self-center">
                        <h4 class="text-dark-blue font-bold text-2xl">
                            Call Us 
                        </h4>
                    </div>
                    <div class="flex gap-2">
                        <span>
                            <i class="fas fa-phone text-accent "></i>
                        </span>
                        <div>
                            <p>
                                +61 7 4428 7156  
                            </p>
                        <p>
                            Mon - Sat: 09am - 08pm
                        </p>
                        </div>
                    </div>
                </div>
                <div class="shadow p-4">
                    <div class="flex gap-2 mb-8">
                        <hr class="w-8 h-1 text-accent self-center">
                        <h4 class="text-dark-blue font-bold text-2xl">
                            Send a Mail  
                        </h4>
                    </div>
                    <div class="flex gap-2">
                        <span>
                            <i class="fas fa-envelop text-accent"></i>
                        </span>
                        <div>
                            <p>
                            info@agmcontainers.com  
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.hero {
    position: relative;
    min-height: 60vh;
    background-image: url(../assets/images/port-pier-cargo-containers-1845350.jpg);
    isolation: isolate;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(19, 29, 60, 0.5);
    z-index: -1;
}
@media (max-width: 760px) {
    .hero { 
        min-height: 100vh;
    }
}
</style>