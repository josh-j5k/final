<template>
    <div class="hero -mt-[100px]">
       <div class="w-[90vw] mx-auto ">
         <h2 class="uppercase font-bold text-white text-5xl pt-12 text-center">
            careers
         </h2>

       </div>
    </div> 
    <section class="py-32">
        <div class="w-[90vw] mx-auto">
            <p class="font-bold text-accent mb-4 text-center"> 
                At AGM, we're more than a team, we're family. below are a open vacancies. send us an email info@agmcontainers.com
            </p>
            <h3 class="text-3xl text-dark-blue font-bold text-center mb-8 pb-4">
                Join the team 
            </h3>
            <div class="grid grid-cols-3 -md:grid-cols-1 gap-x-4 gap-y-6">
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/warehouse-manager-talking-worker-about-logistics_63253-8287.webp" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        Warehouse Assistants
                    </h4>
                    <p> We're hiring warehouse assistants</p>
                </div>
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/63123c26023509001aecb859.webp" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        Sales
                    </h4>
                    <p> We're expanding our sales team</p>
                </div>
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/63123c26023509001aecb859.webp" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        Customer Service
                    </h4>
                    <p> Apply for customer service positions</p>
                </div>
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/Logistics-top-right-image-man-in-front-of-containers.jpeg" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        Quality Control
                    </h4>
                    <p>We're hiring inspectors</p>
                </div>
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/notes-clerking-writing-4784912.jpg" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        We're hiring inspectors
                    </h4>
                    <p>We're hiring assistants</p>
                </div>
                <div class="p-4 border border-solid border-gray-400">
                    <img src="../assets/images/usa-california-driver-1061843.jpg" alt="">
                    <h4 class="text-dark-blue font-bold text-xl py-5">
                        Driver
                    </h4>
                    <p>We're hiring drivers</p>
                </div>
            </div>
        </div>
     </section>
     <section class="text-center pb-24">
        <p class="text-accent mb-4">
            Join Our Team
        </p>
        <h3 class="text-dark-blue font-bold text-3xl mb-4 pb-4">Send Us an Application </h3>
        <p>info@agmcontainers.com</p>
     </section>
</template>    

<style scoped>
.hero {
    position: relative;
    min-height: 60vh;
    background-image: url(../assets/images/Logistics-top-right-image-man-in-front-of-containers.jpeg);
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