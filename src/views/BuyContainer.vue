<script setup>
import Formvue from '../components/form.vue'
import { useRouter, useRoute } from 'vue-router'
</script>

<template>
    <div class="hero -mt-[100px]">
       <div class="w-[90vw] mx-auto ">
         <h2 class="uppercase font-bold text-white text-5xl pt-12 text-center">
            Buy AGM Containers
         </h2>

       </div>
    </div> 
    <section class="py-32">
        <div class="w-[90vw] mx-auto">
            <p class="font-bold text-accent mb-4 text-center">
                Our containers come new, one trip, used and refurbished with many custom modifications available. Sizes range from 10'-45' in length.
            </p>
            <h3 class="text-3xl text-dark-blue font-bold text-center mb-8 pb-4">
                See our Containers
            </h3>
            <div class="grid grid-cols-3 -md:grid-cols-1 gap-x-3 gap-y-6 text-dark-blue text-center">
                <div>
                    <img src="../assets/images/20ft-os-5.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        20 FT SIDE OPEN CONTAINER​
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $3,999
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/13.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        40 FT SIDE OPEN CONTAINER​
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $4,999
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/40ft-hc-dd-2-1536x1152-1-1024x768.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        40 FT DOUBLE DOOR CONTAINER
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $4,500
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/Right-45-degree-from-rear.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        20 FT STANDARD CONTAINER
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $3,000
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/20ft-dd-1536x1152-1-1024x768.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        20 FT DOUBLE DOOR CONTAINER
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $3,500
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/40ft-dv-3.jpg" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        40 FT STANDARD CONTAINER
                    </p>
                    <p class="mb-4">
                        20% DISCOUNT
                    </p>
                    <p class="mb-4 font-bold">
                        $4,200
                    </p>
                    <p class="mb-4">
                        Condition: Like New/One Trip
                    </p>
                    <p class="mb-4">
                        Weather Proof
                    </p>
                    <p class="mb-4">
                        Vermin Proof
                    </p>
                    <p class="mb-4">
                        Rust Free
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md bg-accent hover:bg-accent-light uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/20FT-REFRIGERATED-CONTAINER-1-1024x768.webp" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        20 FT Refridgerated Container
                    </p>
                    <p class="mb-4">
                        PLUG & PLAY Refrigerated Container
                    </p>
                    <p class="mb-4 font-bold">
                        $6,000
                    </p>
                    <p class="mb-4">
                        Condition: Like New
                    </p>
                    <p class="mb-4">
                        Fully Functional
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/IMG20190509145121-1024x768.webp" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        40 FT Refrigerated Container
                    </p>
                    <p class="mb-4">
                        PLUG & PLAY Refrigerated Container
                    </p>
                    <p class="mb-4 font-bold">
                        $9,000
                    </p>
                    <p class="mb-4">
                        Condition: Like New
                    </p>
                    <p class="mb-4">
                        Fully Functional
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/40-HC-Dangerous-Goods-Container-Roll-Up-Doors-4-min-scaled-1-1024x1024.webp" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        40 FT Dangerous Goods Container
                    </p>
                    <p class="mb-4 font-bold">
                        $15,000
                    </p>
                    <p class="mb-2">
                        These units come with a grated spill tray with a capacity of 1,350L and 63,000lb in weight evenly distributed. They can hold up to eighty 55gl drums.
                    </p>
                    
                    <p class="mb-2">
                        Ventilation consists of four 24” x 24” louvers in high and low configurations.
                    </p>
                    <p class="mb-2">
                        Each unit has four 8’0” wide x 7’4” high-quality spring assisted roll up doors with slide locks
                    </p>
                    <p class="mb-4">
                        They come with 1” closed cell spray foam to the ceiling
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
                <div>
                    <img src="../assets/images/20-ft-HC-Openside-Dangerous-Goods-Container-7-min-1024x1024.webp" alt="" class="mb-4">
                    <p class=" text-center text-2xl font-bold mb-4 pb-5">
                        20 FT Dangerous Goods Container
                    </p>
                    <p class="mb-4 font-bold">
                        $13,000
                    </p>
                    <p class="mb-2">
                        These units come with a grated spill tray with a capacity of 2,200L and 22,000lb in weight evenly distributed. They can hold up to thirty 55gl drums.
                    </p>
                    
                    <p class="mb-2">
                        It comes with three 1” ball valve drain for ease of fluid removal.
                    </p>
                    <p class="mb-2">
                        Ventilation consists of eighteen 36” x 12” louvers in high and low configurations.
                    </p>
                    <p class="mb-2">
                        Each unit has an easy open exterior handle as well as safety exit interior handle on the end doors, as well as center side doors.
                    </p>
                    <p class="mb-1">
                        Units are painted safety yellow and boast fork 
                    </p>
                    <p class="mb-1">
                        pockets on all four sides.
                    </p>
                    <p class="mb-4">
                        This construction complies with the 1940-2017 standard of safe storage and handling of flammable and combustible liquids
                    </p>
                    <button @click="$router.push('contact-us')" class="text-white border-0 py-3 px-8 rounded-md hover:bg-accent-light bg-accent uppercase mt-12">
                        purchase this unit
                    </button>
                </div>
            </div>
            <p class="mb-8">
                FOUND YOUR CONTAINER? FILL THE FORM TO PURCHASE OR GET A QUOTE. OUR CATALOGUE ISNT LIMITED TO THIS LIST. NEED SOMETHING SPECIFIC? JUST ASK. 
            </p>
            <Formvue />
        </div>
        
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    min-height: 60vh;
    background-image: url(../assets/images/container-freight-cargo-port-489933.jpg);
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
    background-color: rgba(19, 29, 60, 0.6);
    z-index: -1;
}
@media (max-width: 760px) {
    .hero { 
        min-height: 100vh;
    }
}
</style>