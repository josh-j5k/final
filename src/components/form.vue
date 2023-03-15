<template>
    <div class="flex flex-col gap-4">
                    <div>
                        <input type="text" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="fullName" placeholder="Enter your full name">
                    </div>
                    <div>
                        <input type="tel" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="phone" placeholder="Please enter your phone number">
                    </div>
                    <div>
                        <input type="email" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="email" placeholder="Please enter your email">
                    </div>
                    <div>
                        <input type="text" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="container" placeholder="What type of container do you need">
                    </div>
                    <div>
                        <input type="text" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="container-two" placeholder="How many containers do you need?">
                    </div>
                    <div>
                        <input type="text" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" name="container-three" placeholder="Where are you located?">
                    </div>
                    <div>
                        <textarea name="message"  cols="4" class="md:w-[90%] w-full outline-none py-2 px-4 border border-solid border-gray-400" placeholder="Message"></textarea>
                    </div>
                    <div>
                         <button type="submit" class="border-0 bg-accent hover:bg-accent-light text-white rounded-md py-3 px-12 uppercase">
                             get quote
                        </button>
                    </div>
                </div>
</template>