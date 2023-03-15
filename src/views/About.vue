<script  setup>
import Formvue from '../components/form.vue'
import { useRouter, useRoute } from 'vue-router'
</script>

<template>
    <div class="hero -mt-[100px]">
       <div class="w-[90vw] mx-auto ">
         <h2 class="uppercase font-bold text-white text-5xl pt-12 text-center">
            About Us
         </h2>
       </div>
    </div>
    <section class="py-32">
        <div class="w-[90vw] mx-auto">
            <img src="../assets/images/awol.jpg" alt="">
            <div class="grid grid-cols-2 gap-6 -md:grid-cols-1 py-16">
                <div>
                    <p class="text-accent font-bold mb-8">About Company</p>
                    <p class="mb-4">
                        AGM Containers is an industry leader in designing, engineering, and manufacturing shipping containers and modular equipment. We rent and sell our inventory of modular shipping containers to clients in North America as well as the international marketplace.
                    </p>
                    <p class="mb-8">
                        Our modular shipping container structures are completely customizable and can be branded to provide a turnkey solution for any marketing function, event, festival, tradeshow, or venue. We can create pop-up retail, concession, and event hospitality structures. Our in-house project management, production, and activation times are second to none. We pride ourselves on providing the highest quality product, meeting budgets ahead of schedule, and providing a green product that’s built to last. Further, these structures are built 30% faster than standard construction builds.
                    </p>
                    <button @click="$router.push('contact-us')" class="border-0 bg-accent hover:bg-accent-light text-white rounded-md py-3 px-12 uppercase">
                        contact us
                    </button>
                </div>
                <div>
                    <p>
                        Using shipping containers and modular equipment as building blocks, AGM custom-designs and fabricates permanent and temporary shipping container structures. These structures are used to create shipping container malls, schools, restaurants, bars, office spaces, and mobile marketing event structures. We can also create the ultimate shipping container pop-up event space or portable experiential exhibit as well as water filtration, dredge, fire, and military training shipping containers.
                    </p>
                    <div class="pt-16 flex gap-5 items-center mb-8">
                        <img src="../assets/images/founder.jpg" alt="" class="w-28 rounded-full">
                        <div>
                            <p class="text-dark-blue text-xl font-bold mb-4">
                                Max Stewart
                            </p>
                            <p class="uppercase"> 
                                Founder
                            </p>
                        </div>
                    </div>
                    <p class="text-dark-blue text-xl font-bold uppercase">
                        Need help? Contact us 
                    </p>
                    <p>
                        info@agmcontainers.com
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-dark-blue text-white py-24">
        <div class="w-[90vw] mx-auto">

      
        <h3 class="font-bold text-3xl text-center mb-8">
            THE BEST CONTAINERS
        </h3>
        <div class="flex justify-center gap-10 -md:flex-col">
            <img src="../assets/images/7d9f707b98feefbac97023b4c2a06594.jpg" alt="" class="w-[350px] h-full">
            <img src="../assets/images/02f5cd1861f748b9ff0ef02c04b0254b-1.jpg" alt="" class="w-[350px] h-full">
            <div>
                <p class="text-accent font-bold mb-3">
                    2004 and strong ever since
                </p>
                <p class="text-xl mb-16">
                    We're here for you 
                </p>
                <button @click="$router.push('home')" class="border-0 bg-accent hover:bg-accent-light text-white rounded-md py-3 px-12 uppercase">
                    see more
                </button>
            </div>
        </div>
    </div>
    </section>
    <section class="py-32 bg-gray-100">
        <div class="w-[90vw] mx-auto">
            <p class="text-accent font-bold mb-8">
                Why Choose Us
            </p>
            <h4 class="text-dark-blue font-bold text-2xl mb-8">
                Reason For Choosing Us
            </h4>
            <div class="grid grid-cols-3 gap-4 shadow -md:grid-cols-1 md:mb-16">
                <div class="md:py-10 md:px-8 p-4 text-center bg-white">
                    <span class="mb-3">
                        <i class="fas fa-truck text-3xl text-black"></i>
                    </span>
                    <p class="text-accent text-xl font-bold uppercase mb-3">
                        TRANSPORT 
                    </p>
                    <p>
                        Fast, Effecient and time saving transportation. Just buy and let us handle the rest 
                    </p>
                </div>
                <div class="md:py-10 md:px-8 p-4 text-center bg-white">
                    <span class="mb-3">
                        <i class="fas fa-user-shield text-3xl text-black"></i>
                    </span>
                    <p class="text-accent text-xl font-bold uppercase mb-3">
                        100% Guaranteed
                    </p>
                    <p>
                        Our Reputation separates us from the rest. 
                    </p>
                </div>
                <div class="md:py-10 md:px-8 p-4 text-center bg-white">
                    <span class="mb-3">
                        <i class="fas fa-certificate text-3xl text-black"></i>
                    </span>
                    <p class="text-accent text-xl font-bold uppercase mb-3">
                        Customizing & Branding 
                    </p>
                    <p>
                        Want to customize your container? we'll take care of it  
                    </p>
                </div>
            </div>
            <Formvue />
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