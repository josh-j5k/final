<script setup>
import Form from '../components/form.vue'
import { useRouter, useRoute } from 'vue-router'

</script>

<template>
   <div class="hero -mt-[100px]">
      <div class="w-[90vw] mx-auto">
        <h2 class="uppercase font-bold text-white text-5xl pb-12">
            agm container and towing trust
        </h2>
        <p class="capitalize font-bold text-white mb-8 pb-8"> need a container? we're a quote away</p>
        <button @click="$router.push('buy-container')" class="uppercase border-0 py-3 px-8 hover:bg-accent-light bg-accent rounded-md text-white">
            buy a container
        </button>
      </div>
   </div> 
   <section class=" bg-gray-100 pb-44">
    <div class="md:w-[90vw] flex md:justify-around -md:flex-col items-center mx-auto -md:pb-12 md:py-16 md:relative -top-20 bg-white z-10 rounded-lg md:shadow">
        <div class="-md:mb-4">
            <p class="text-accent font-bold">Get a quick quote</p>
            <p class="text-2xl text-dark-blue font-bold">Request a quote</p>
        </div>
        <div class="flex -md:flex-col items-center gap-3">
            <div>
                <label class="hidden " for="full-name"></label>
                <input type="text" id="full-name" placeholder="Enter full name" class="border border-gray-300 bg-gray-100 outline-none px-4 py-3 focus:border-blue-600   border-soild">
            </div>
            <div>
                <label class="hidden " for="phone"></label>
                <input type="tel"
                 id="phone"
                 placeholder="Phone number" class="border border-gray-300 bg-gray-100 focus:border-blue-600  outline-none px-4 py-3 border-soild">
            </div>
            <div>
                <button type="submit" class="uppercase border-0 py-3 px-16 bg-accent hover:bg-accent-light rounded-md text-white -md:px-24">
            send
        </button>
            </div>
        </div>
   </div>
   <div class="grid md:grid-cols-2 grid-cols-1 gap-16 w-[90vw] mx-auto">
    <div>
        <img src="../assets/images/5572aae1925ea76d60ec1c171550c9da.jpg" alt="container" class="md:w-4/5">
        <img src="../assets/images/63a296d13453ec49ad38570c9e9508ac.jpg" alt="container" class="md:w-4/5">
    </div>
    <div class="px-3 md:self-center">
       <p class="text-accent font-bold pb-2">The Right Container to Suit Your Needs</p> 
       <h4 class="text-dark-blue text-3xl font-bold pb-3">New & One Trip Shipping Containers </h4>
       <p class="text-dark-blue leading-7">
        AGM Containers has an extensive inventory of new, used, and modified shipping containers for sale. We sell all standard height and high cube shipping containers and can build any custom-sized unit. To truly make your container your own, we offer a wide range of shipping container modification services
       </p>
       <p class="text-dark-blue leading-7 pt-8">
        When it comes to providing new and used shipping containers, we pride ourselves on supplying only the highest quality products at unbeatable price points. Request a quote to discover competitive pricing on everything from shipping container modification projects to custom units, chassis, and specialty equipment. If you have any questions about our container modification services, contact us and one of our representatives will be happy to assist.

       </p>
       <div class="flex gap-3 pt-8 items-center">
        <a><i class="fas fa-award text-2xl text-accent"></i></a>
       <p>
        Mark of Quality
       </p>
       </div>
       <button @click="$router.push('contact-us')" class="border-0 rounded-md bg-accent hover:bg-accent-light uppercase px-6 py-3 text-white mt-8">
        buy a container
       </button>
    </div>
   </div>
   </section>
   <section class="py-8 bg-black text-white pb-32">
    <div class="w-[90vw] mx-auto">
    <div class="flex -md:flex-col relative -top-32">
        <div class="flex gap-2 flex-col flex-1 bg-accent py-12 justify-center items-center text-white">
            <i class="fas fa-star text-gray-400 text-4xl"></i>
            <span class="text-3xl font-bold">15+</span>
            <span>Year in business</span>
        </div>
        <div class="flex flex-col flex-1 bg-gray-100 py-12 justify-center items-center text-white">
            <i class="fas fa-people-arrows text-gray-400 text-4xl"></i>
            <span class="text-3xl font-bold text-dark-blue">1.5k</span>
            <span class="capitalize text-dark-blue">Happy Clients</span>
        </div>
        <div class="flex flex-col flex-1 bg-dark-blue py-12 justify-center items-center text-white">
            <i class="fas fa-handshake text-gray-400 text-4xl"></i>
            <span class="text-3xl font-bold">2.5k</span>
            <span class="capitalize">projects completed</span>
        </div>
        <div class="flex flex-col flex-1 bg-accent py-12 justify-center items-center text-white">
            <i class="fas fa-network-wired text-gray-400 text-4xl"></i>
            <span class="text-3xl font-bold">65+</span>
            <span class="capitalize">trained staff</span>
        </div>
    </div>
    <div class="text-center">
        <p class="text-accent font-bold capitalize mb-3 pb-4">our services</p>
        <h3 class="text-3xl font-bold mb-4 pb-12">New & Used Shipping Containers</h3>
    </div>
    <div class="grid gap-4 grid-cols-3 -md:grid-cols-1 pb-12">
        <div>
            <img src="../assets/images/port-dangerous-goods-containers-30.jpg" alt="">
            <p class="font-bold text-lg pt-4">Dangerous Goods Container </p>
            <p class="pt-4">Here at AGM, not only are we experts in dangerous goods containers, we’re experts in modifying shipping containers as well. So if you need a hazardous or dangerous goods container modified or customised, then you should definitely give us a call. Remember, all our containers are constructed to the high quality demanded by Australian Standards, and all our work is guaranteed. Plus your customisations are done right here in Australia, to ensure quality control. So if you need a specific dangerous or hazardous goods container constructed, give us a call. We will help establish what you need, and delivery it to you quickly and efficiently – at a competitive price. </p>
        </div>
        <div>
            <img src="../assets/images/40hcreefer-618x468-1.jpg" alt="">
            <p class="font-bold text-lg pt-4">Refridgerated Containers  </p>
            <p class="pt-4"> Containers has been selling refrigerated containers to businesses all across the Country for well over 15 years. We've worked with organic farmers, wineries, breweries, schools, hospitals, county fairs, meat processing plants, restaurants, and much, much more. See if AGM has the storage option you've been looking for.</p>
        </div>
        <div>
            <img src="../assets/images/1ae725620216d950c1dbca4a2c22053b.jpg" alt="">
            <p class="font-bold text-lg pt-4">Side Open & Customized Containers </p>
            <p class="pt-4">We also sell side opened containers and we can customize, containers. mobile offices and living spaces fabricated from shipping containers are becoming increasingly popular, and AGM has the experience customizing them. From 10' offices for one to 40' container homes built for a family of four, we have what it takes to bring your container dreams into reality. Check out what we can do for you.</p>
        </div>
    </div>
    <div class="grid grid-cols-2 -md:grid-cols-1 gap-4">
        <div>
            <p class="text-accent font-bold mb-2">Additional Services</p>
            <h3 class="text-3xl mb-4">
                Specialty Shipping Container Equipment 
            </h3>
            <p class="pb-4"> Containers offers an excellent selection of specialized equipment for your new or used shipping container. Choose from double door, DuoCon, open top, open side, dangerous goods, refrigerated, office, training, and water filtration containers. We also offer flat racks and chassis models. . </p>
            <div class="flex gap-3">
                <span><i class="fas fa-circle-right  text-white"></i></span>
                <span> 10 to 40 inch containers</span>
            </div>
            <div class="flex gap-3">
                <span><i class="fas fa-circle-right  text-white"></i></span>
                <span> Refridgerated containers</span>
            </div>
            <div class="flex gap-3">
                <span><i class="fas fa-circle-right  text-white"></i></span>
                <span> Insulated containers</span>
            </div>
            <div class="flex gap-3">
                <span><i class="fas fa-circle-right  text-white"></i></span>
                <span>Hazmat containers</span>
            </div>
            <div class="flex gap-3">
                <span><i class="fas fa-circle-right  text-white"></i></span>
                <span>New and One trip</span>
            </div>
            <button @click="$router.push('buy-container')" class="bg-accent border-0 py-3 px-16 rounded-md uppercase mt-8">
                see our containers
            </button>
        </div>
        <img src="../assets/images/awol-1024x454.jpg" alt="" class="self-center">
    </div>
    </div>
   </section>
   <section class="py-8 pb-32 bg-gray-200">
        <div class="w-[90vw] mx-auto">
            <p class="text-accent font-bold pb-4">   
                We guarantee our containers for upto 36 months
            </p>
            <h3 class="text-dark-blue font-bold text-3xl pb-8">
                Reasons why people choose us
            </h3>
            <div class="grid grid-cols-3 -md:grid-cols-1 gap-x-3 gap-y-6">
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-award text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        one trip
                    </p>
                    <p class="text-dark-blue">
                        "One Trip" containers are the best quality units available on the market. They are called "One Trippers" because they have been used one time in transit between Asia and the United States.
                    </p>
                </div>
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-sqaure-check  text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        CARGO WORTHY IICL
                    </p>
                    <p class="text-dark-blue">
                        Cargo Worthy IICL is the highest grade within the shipping industry for used containers. Sometimes it is referred to as Premium Grade, and it is the best option if quality is your main concern. 
                    </p>
                </div>
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-truck  text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        No Heavy Lifting 
                    </p>
                    <p class="text-dark-blue">
                        Buying a shipping container used to take hours of phone calls, depot visits, and trucker scheduling. AGM handles all the hard work for you. From sourcing and scheduling to delivery and placement, we're proud to provide a simple, stress-free experience from start to finish. 
                    </p>
                </div>
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-clock text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        Time Availability 
                    </p>
                    <p class="text-dark-blue">
                        We're always open 
                    </p>
                </div>
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-phone-volume  text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        Quick Response 
                    </p>
                    <p class="text-dark-blue">
                        Our Customer service team online 24/7, ready to respond and provide any support 
                    </p>
                </div>
                <div class="flex flex-1 flex-col justify-center items-center bg-white md:py-16 md:px-12 py-12 px-4">
                    <span>
                        <i class="fas fa-certificate  text-dark-blue text-3xl"></i>
                    </span>
                    <p class="uppercase text-accent font-bold text-xl py-3">
                        Warranty 
                    </p>
                    <p class="text-dark-blue">
                        Our Warranty covers you for upto 36 months, while having the best refund policies, making sure you are safe
                    </p>
                </div>
            </div>
        </div>
   </section>
   <section class="py-12 pb-32 bg-gray-100">
        <div class="w-[90vw] mx-auto">
            <div class="flex -md:flex-col md:justify-evenly gap-4">
                <div>
                    <h5 class="text-accent font-bold text-lg">
                        We Are Business Who Cares, And it Shows 
                    </h5>
                    <p>
                        OVER 540 “5 STARS” REVIEWS AND CLIMBING 
                    </p>
                </div>
                <hr class="md:w-20 md:h-full text-black rotate-90 self-center">
                <div class="flex -md:flex-col gap-3">
                    <img src="../assets/images/yelp.png" alt="" class="w-16">
                    <div>
                        <p class="font-bold">
                            Rate Us on Yelp
                        </p>
                        <p>
                            248 reviews
                        </p>
                    </div>
                </div>
                <hr class="md:w-20 md:h-full text-black rotate-90 self-center">
                <div class="flex -md:flex-col gap-3">
                    <img src="../assets/images/logo-google.png" alt="" class="w-16">
                    <div>
                        <p class="font-bold">
                            Rate Us on Google
                        </p>
                        <p>
                            1,248 reviews
                        </p>
                    </div>
            </div>
            </div>
            <h3 class="text-4xl text-center text-dark-blue mt-12 pt-8 pb-4">People Say The Nicest Things </h3>
            <p class="text-dark-blue text-center mb-16 pb-4">Our Satisfied Clients</p>
            <div class="grid grid-cols-3 -md:grid-cols-1 gap-3">
                <div class="py-8 px-4 bg-white">
                    <img src="../assets/images/testemonial-2-4.png" alt="" class="mx-auto mb-2">
                    <div class="flex gap-1 justify-center mb-2">
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                    </div>
                    <p class="font-bold text-dark-blue text-xl pb-4 text-center">Shelly B.</p>
                    <p class="text-dark-blue pb-4">
                        All of our outbuildings (barns, garage, and tool shed) were destroyed by A wild fire.  We needed a quick storage solution, a lockable place to secure tools. We found AGM Containers on facebook.   Our container was delivered within three days of ordering, which was fantastic!  
                    </p>
                    <p class="text-dark-blue pb-4">
                        They have professional service. The container was better than we could have hoped for (looks brand new).  The driver did an excellent job of unloading the trailer. 
                    </p>
                    <p class="text-dark-blue">
                        We highly recommend AGM Containers and would buy from them again!  
                    </p>
                </div>
                <div class="py-8 px-4 bg-white">
                    <img src="../assets/images/testimonial-13-free-img-4.png" alt="" class="mx-auto mb-2">
                    <div class="flex gap-1 justify-center mb-2">
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        
                    </div>
                    <p class="font-bold text-dark-blue text-xl pb-4 text-center">Charles U </p>
                    <p class="text-dark-blue pb-4">
                        Writing this review for my dad. “I received two top quality containers, they even set them on the concrete foundations I made to keep them off the ground, they brought out a forklift and had them set within the hour, couldn’t be happier.” They communicated timing and delivery perfectly
                    </p>
                  
                </div>
                <div class="py-8 px-4 bg-white">
                    <img src="../assets/images/testimonial-03-free-img-4.png" alt="" class="mx-auto mb-2">
                    <div class="flex gap-1 justify-center mb-2">
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        <span><i class="fas fa-star text-accent"></i></span>
                        
                    </div>
                    <p class="font-bold text-dark-blue text-xl pb-4 text-center">Pamela Duncan</p>
                    <p class="text-dark-blue pb-4">
                        Had a wonderful experience ordering a container from AGM. From my first inquiry call to the day it was dropped off, the entire process was a breeze. Excellent product and customer service!
                    </p>
                  
                </div>
            </div>
        </div>
   </section>
   <section class="py-24">
        <div class="w-[90vw] mx-auto">
            <div class="grid grid-cols-2 -md:grid-cols-1">
                <div>
                    <p class="text-accent pb-3">Offices</p>
                    <h3 class="uppercase text-dark-blue text-3xl pb-3">
                        bottom line
                    </h3>
                    <p class="text-dark-blue pb-8">
                        There's nothing Container related that we cannot handle
                    </p>
                    <hr class="w-16 h-1 text-black mb-8">
                    <p class="mb-8">
                        Email:
                    </p>
                    <p>
                        info@agmcontainers.com
                    </p>
                </div>
                <div class="p-8 pl-20 shadow md:relative -top-40 bg-white ">
                    <h4 class="text-3xl text-dark-blue mb-8">
                        Get A Free Quote
                    </h4>
                   
                        <Form />
                </div>
                
            </div>
        </div>
   </section>
</template>

<style scoped>
body {
    font-family: 'Lato', system-ui, sans-serif;
}
.hero {
    position: relative;
    min-height: 100vh;
    background-image: url(../assets/images/industrial-containers-box-logistic-import-export-business.jpg);
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