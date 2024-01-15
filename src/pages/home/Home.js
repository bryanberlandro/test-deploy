export function Home(){
    return ` <main class="">

    <!-- HERO SECTION -->
    <section class="w-full relative h-[100vh] bg-gradient-to-t from-tertiary bg-opacity-20  flex flex-col md:h-[90vh] md:justify-end xl:bg-opacity-45 xl:h-[100vh]">
        <img src="/assets/images/car-3.jpg" alt="" class="w-full h-full object-cover mix-blend-multiply absolute top-10 xl:top-0 xl:mix-blend-multiply xl:hidden">
        <img src="/assets/images/car-2.jpg" alt="" class="hidden w-full h-full object-cover mix-blend-multiply absolute top-10 xl:top-0 xl:mix-blend-multiply xl:block">
        <div class="px-[5%] translate-y-44 flex justify-center flex-col items-center gap-6 w-full h-[100vh] relative z-10 md:justify-end md:gap-10 md:translate-y-0 xl:flex xl:items-start xl:justify-between xl:gap-10 xl:pt-44 ">

            <!-- Choose Your Car -->
            <div class="w-full relative flex flex-col justify-between bg-white rounded-md xl:w-[60%]">
                <div class="py-4 px-4 md:py-6 md:px-6 xl:px-8 xl:py-8">
                    <h1 class="font-semibold text-dark text-xl md:font-bold md:text-2xl xl:text-4xl xl:font-bold">Choose Your Car</h1>
                    <p class="text-sm md:text-base xl:text-lg ">We inspect it and deliver it</p>

                <!-- FORM -->
                    <div class="w-full mt-4 flex flex-wrap justify-between gap-2 md:justify-start md:mt-8 md:gap-3 xl:items-start xl:justify-start">
                        
                        <div class="w-[48%] h-10 border-2 flex items-center px-2 rounded-md md:w-[32%]  ">
                            <input type="text" placeholder="Type" class="w-full h-full focus:outline-none text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>                                  
                            </div>
                        </div>
                        <div class="w-[48%] h-10 border-2 flex items-center px-2 rounded-md md:w-[32%] ">
                            <input type="text" placeholder="Choose model" class="w-full h-full focus:outline-none text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>                                  
                            </div>
                        </div>
                        <div class="w-[48%] h-10 border-2 flex items-center px-2 rounded-md md:w-[32%] ">
                            <input type="text" placeholder="Mileage" class="w-full h-full focus:outline-none text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>                                  
                            </div>
                        </div>
                        <div class="w-[48%] h-10 border-2 flex items-center px-2 rounded-md md:w-[32%] ">
                            <input type="text" placeholder="Registration from" class="w-full h-full focus:outline-none text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>                                  
                            </div>
                        </div>
                        <div class="w-[48%] h-10 border-2 flex items-center px-2 rounded-md md:w-[32%] ">
                            <input type="text" placeholder="Price up to" class="w-full h-full focus:outline-none text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>                                  
                            </div>
                        </div>
                        
                        <!-- BUTTON -->
                        <div class="w-full mt-4 flex flex-col gap-2 md:flex-row md:mt-8">
                            <button class="bg-gradient-to-r w-full py-2 text-white rounded-md from-tertiary to-primary font-semibold md:py-4">
                                1 459 000 Offers
                            </button>
                            <button class="advanced-search w-full py-2 flex items-center gap-4 justify-center font-semibold text-secondary md:py-4">
                                Advanced Search
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>                                      
                            </button>
                        </div>
                        <!-- BUTTON -->

                    </div>
                <!-- FORM -->
                    
                </div>
                
            </div>
            <!-- Choose Your Car -->

            <!-- Reviews -->
            <div class="flex text-white items-center gap-3 xl:text-white xl:justify-start xl:w-full">
                <h1 class="font-semibold text-2xl text-white">4.8</h1>
                <div class="flex gap-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400 ">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400 ">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400 ">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400 ">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-sm">1.648 Reviews</p>
            </div>
            <!-- Reviews -->

            <!-- Utility -->
            <div class="w-full bg-white h-max relative flex flex-col shadow-md gap-2 rounded-md md:py-2 md:mt-20 md:flex-row md:h-20 xl:h-max xl:mt-16 xl:items-center z-10">
                
                <!-- 1 -->
                <div class="utility cursor-pointer w-full h-max border-b-2 overflow-hidden text-sm flex items-center flex-col px-4 md:border-r-2 md:border-b-0 md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>                              
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">Money Back Guarantee</h1>
                                <p class="hidden xl:block">If you don't fall in love with the vehicle, simply return it to us</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 top-0 md:w-96 md:bg-white md:border-t-0 md:absolute md:left-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">Can I really return the car?</h1>
                        <p><b class="font-semibold">Of course, you can.</b> We trust our service and know that <b class="font-semibold">we only sell inspected vehicles in excellent technical condition.</b> together with our customers we are fighting for better vehicles on Depok Roads</p>
                        <p><b class="font-semibold">Carsell, therefore, always assumes all risks connected with the vehicle.</b> and if you simply don't like the car, <b class="font-semibold">you can return it to us up to 14 days after receiving it</b></p>
                    </div>
                </div>
                <!-- 1 -->

                <!-- 2 -->
                <div class="utility w-full cursor-pointer overflow-hidden relative h-max border-b-2 text-sm flex items-center flex-col px-4 justify-between md:border-r-2 md:border-b-0 md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">Safe Purchase</h1>
                                <p class="hidden xl:block">We guarantee the technical condition of every vehicle sold</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 relative md:w-96 md:bg-white md:border-t-0 md:absolute md:left-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">You don't risk anything buying</h1>
                        <p><b class="font-semibold">Carsell is the safest way of buying a used car</b> first of all carefully examine the chosen car and <b class="font-semibold">you then decide on the basis of its currennt condition</b> and our recommendation</p>
                        <p>You always sign the contract with Carsell, so<b class="font-semibold"> all guarantees are provided by us</b> wherever the car is from, you always make the payment to a local account in your local currency</p>
                    </div>
                </div>
                <!-- 2 -->
                
                <!-- 3 -->
                <div class="utility w-full relative h-max text-sm flex flex-col overflow-hidden cursor-pointer items-center px-4 justify-between md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">6-Month Warranty</h1>
                                <p class="hidden xl:block">In addition, with every car you receive an extended warranty</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 relative md:w-96 md:bg-white md:border-t-0 md:absolute md:right-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">You receive an extended warranty on the car</h1>
                        <p>For even greater peace of mind, aside from the warranty for hidden defects, you also have from us<b class="font-semibold"> an extended 6-month warranty on the essentials</b> - the engine, gearbox and differential</p>
                        <p>If you want even more, you can choose a longer period of coverage for other parts of the vehicle in the order</p>
                    </div>
                </div>
                <!-- 3 -->
                
            </div>

            <!-- Utility -->
        
        </div>
        

    </section>
    <!-- HERO SECTION -->


    <!-- POPULAR SECTION -->
    <section class="w-full my-24 pt-24 flex px-[5%] flex-col md:flex-row md:items-start md:gap-10">
        <h1 class="font-semibold text-2x md:text-4xl md:font-bold">Popular At Carsell</h1>

        <!-- CAR SLIDER -->
        <div class="flex flex-col gap-4 w-full overflow-hidden mt-4 md:mt-0">

            <!-- CAR WRAPPER -->
            <div class="popular-slider w-full overflow-x-scroll ">
                <div class="w-max flex gap-4">
                    <div class="w-64 h-28 bg-gradient-to-tl from-secondary to-primary bg-opacity-10 rounded-md shadow-md relative overflow-hidden md:w-80 md:h-36 xl:w-96 xl:h-40">
                        <img src="/assets/images/car-2.jpg" alt="" class=" absolute w-full">
                        <div class="relative w-full h-full text-white flex flex-col px-4 py-2 justify-between">
                            <div class="w-full font-semibold">
                                <h1 class="text-white md:text-xl">Discounted Cars</h1>
                                <h1 class="text-white text-2xl md:text-4xl">35%</h1>
                            </div>
                            <div class="w-full justify-end flex">
                                <button class="flex gap-2 font-semibold text-sm items-center md:text-lg">
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>                                      
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-64 h-28 bg-gradient-to-tl from-secondary to-primary bg-opacity-10 rounded-md shadow-md relative overflow-hidden md:w-80 md:h-36 xl:w-96 xl:h-40">
                        <img src="/assets/images/car-2.jpg" alt="" class=" absolute w-full">
                        <div class="relative w-full h-full text-white flex flex-col px-4 py-2 justify-between">
                            <div class="w-full font-semibold">
                                <h1 class="text-white md:text-xl">Discounted Cars</h1>
                                <h1 class="text-white text-2xl md:text-4xl">35%</h1>
                            </div>
                            <div class="w-full justify-end flex">
                                <button class="flex gap-2 font-semibold text-sm items-center md:text-lg">
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>                                      
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-64 h-28 bg-gradient-to-tl from-secondary to-primary bg-opacity-10 rounded-md shadow-md relative overflow-hidden md:w-80 md:h-36 xl:w-96 xl:h-40">
                        <img src="/assets/images/car-2.jpg" alt="" class=" absolute w-full">
                        <div class="relative w-full h-full text-white flex flex-col px-4 py-2 justify-between">
                            <div class="w-full font-semibold">
                                <h1 class="text-white md:text-xl">Discounted Cars</h1>
                                <h1 class="text-white text-2xl md:text-4xl">35%</h1>
                            </div>
                            <div class="w-full justify-end flex">
                                <button class="flex gap-2 font-semibold text-sm items-center md:text-lg">
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>                                      
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-64 h-28 bg-gradient-to-tl from-secondary to-primary bg-opacity-10 rounded-md shadow-md relative overflow-hidden md:w-80 md:h-36 xl:w-96 xl:h-40">
                        <img src="/assets/images/car-2.jpg" alt="" class=" absolute w-full">
                        <div class="relative w-full h-full text-white flex flex-col px-4 py-2 justify-between">
                            <div class="w-full font-semibold">
                                <h1 class="text-white md:text-xl">Discounted Cars</h1>
                                <h1 class="text-white text-2xl md:text-4xl">35%</h1>
                            </div>
                            <div class="w-full justify-end flex">
                                <button class="flex gap-2 font-semibold text-sm items-center md:text-lg">
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>                                      
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-64 h-28 bg-gradient-to-tl from-secondary to-primary bg-opacity-10 rounded-md shadow-md relative overflow-hidden md:w-80 md:h-36 xl:w-96 xl:h-40">
                        <img src="/assets/images/car-2.jpg" alt="" class=" absolute w-full">
                        <div class="relative w-full h-full text-white flex flex-col px-4 py-2 justify-between ">
                            <div class="w-full font-semibold">
                                <h1 class="md:text-xl">Discounted Cars</h1>
                                <h1 class="text-2xl md:text-4xl">35%</h1>
                            </div>
                            <div class="w-full justify-end flex">
                                <button class="flex gap-2 font-semibold text-sm items-center md:text-lg">
                                    More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>                                      
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CAR WRAPPER -->

            <!-- SLIDER BUTTON -->
            <div class="w-full flex justify-end">
                <div class="flex gap-4">
                    <button class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-secondary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>                              
                    </button>
                    <button class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-secondary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>                              
                    </button>
                </div>
            </div>
            <!-- SLIDER BUTTON -->
            
        </div>
        <!-- CAR SLIDER -->
    </section>
    <!-- POPULAR SECTION -->

    <!-- HOW DOES IT WORK SECTION -->
    <section class="w-full h-[120vh] bg-white overflow-hidden md:h-[100vh] xl:h-[150vh]">
        <!-- background -->
        <div class="absolute w-[250%] rotate-6 h-[80%] bg-tertiary bg-opacity-5 -left-full xl:h-[90%]"></div>
        <!-- background -->

        <!-- EXPLANATION -->
        <div class="relative w-full my-8 flex flex-col pt-14 items-center gap-8 xl:gap-12">
            <h1 class="text-2xl font-bold md:text-3xl">How does it work?</h1>

            <!-- SLIDER -->
            <div class="w-full overflow-hidden">
                <div class="how-card w-[300%] transition-all duration-300 flex xl:w-full">
                    
                    <!-- Card -->
                    <div class="w-[100%] h-[50%] flex flex-col gap-4 items-center mt-8 justify-center">
                        <div class="w-44 h-36 relative md:w-64 md:h-44 ">
                            <img src="/assets/images/car-anim-1.png" alt="" class="absolute w-full h-full object-cover">
                        </div>
                        <div class="flex gap-2 w-[80%] justify-center md:w-[60%] md:gap-3 xl:flex-col ">
                            <h1 class="text-primary font-bold text-2xl">01.</h1>
                            <div class="space-y-2">
                                <h1 class="font-bold text-base md:text-2xl">Choose anywhere in Indonesia</h1>
                                <p class="text-sm md:text-base">No more compromises! With us, you have an unrivaled selection of cars in one place.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] h-[50%] flex flex-col items-center mt-8 justify-center">
                        <div class="w-44 h-36 relative md:w-64 md:h-44 ">
                            <img src="/assets/images/car-anim-2.png" alt="" class="absolute w-full h-full object-cover">
                        </div>
                        <div class="flex gap-2 w-[80%] justify-center md:w-[60%] md:gap-3 xl:flex-col ">
                            <h1 class="text-primary font-bold text-2xl">02.</h1>
                            <div class="space-y-2">
                                <h1 class="font-bold text-base md:text-2xl">We'll inspect the car closely</h1>
                                <p class="text-sm md:text-base">A certified mechanic will throughly inspect your car. You will decide according to the result after</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-[100%] h-[50%] flex flex-col items-center mt-8 justify-center">
                        <div class="w-44 h-36 relative md:w-64 md:h-44 ">
                            <img src="/assets/images/car-anim-3.png" alt="" class="absolute w-full h-full object-cover">
                        </div>
                        <div class="flex gap-2 w-[80%] justify-center md:w-[60%] md:gap-3 xl:flex-col ">
                            <h1 class="text-primary font-bold text-2xl">03.</h1>
                            <div class="space-y-2">
                                <h1 class="font-bold text-base md:text-2xl">We'll deliver it to your home</h1>
                                <p class="text-sm md:text-base">We arrange all the paperwork, registration and delivery. all you need to do is enjoy your new car.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Card -->

                </div>
            </div>
            <!-- SLIDER -->

            <!-- NAVIGATION -->
            <div class="w-full relative flex justify-center gap-4 xl:hidden">
                <button class="slide-btn-how rounded-full w-3 h-3 border-2 border-primary md:w-4 md:h-4 bg-secondary"></button>
                <button class="slide-btn-how rounded-full w-3 h-3 border-2 border-primary md:w-4 md:h-4"></button>
                <button class="slide-btn-how rounded-full w-3 h-3 border-2 border-primary md:w-4 md:h-4"></button>
            </div>
            <!-- NAVIGATION -->

            <button class="bg-gradient-to-l from-primary to-tertiary py-3 px-7 rounded-md text-white font-medium"><a href="/pages/How/how.html">Want to know more?</a></button>
        </div>
        <!-- EXPLANATION -->

        <!-- VIDEO -->
        <div class="relative w-full h-64 px-[5%] flex justify-center md:h-80">
            <div class="w-96 h-48 rounded-md overflow-hidden relative shadow-xl md:w-full md:h-96 md:mt-4 xl:w-[600px] xl:h-80">
                <video autoplay muted loop class="carsell-video w-full absolute">
                    <source src="/assets/videos/carsell.mp4" type="video/mp4" class="absolute w-full">
                </video>
                <div class="w-full h-full relative flex justify-center items-center z-10">
                        <div class="play-btn rounded-full bg-tertiary px-3 py-3 scale-0 animate-pulse hover:animate-none transition-all duration-300 ease-in-out hover:bg-secondary hover:text-neutral-100 hover:scale-95  cursor-pointer md:px-6 md:py-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-secondary bg-white rounded-full md:w-14 md:h-14">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                            </svg>    
                        </div>
                </div>
            </div>
        </div>
        <!-- VIDEO -->

    </section>
    <!-- HOW DOES IT WORK SECTION -->

    <!-- CAR AUDIT SECTION -->
    <section class="w-full h-[125vh] overflow-hidden relative md:my-0 md:h-[100vh] xl:my-10">
        <div class="absolute w-96 bg-slate-200 h-[200%] -left-32 top-0 -rotate-12 xl:w-[700px] xl:-top-20"></div>
        <div class="hidden xl:flex absolute w-[400px] h-[200%] -rotate-45 bg-slate-300 left-0 top-32"></div>

        <!-- WRAPPER -->
        <div class="relative w-full h-full flex flex-col gap-6 md:gap-10 xl:flex-row-reverse xl:gap-0 xl:items-center">
            
            <!-- DESC -->
            <div class="w-full bg-white px-[7%] pb-6 flex flex-col gap-10 md:w-[80%] md:py-5 xl:py-0 xl:px-14 xl:w-[40%]">
                <div class="space-y-2 md:space-y-3">
                    <h1 class="font-bold text-2xl md:text-3xl">A thorough car inspection - CarAudit&trade;</h1>
                    <p class="text-sm font-normal ">A qualified mechanic will thoroughly inspect your chosen car. You will receive a detailed report about the technical condition of the car, photo documentation, and our advice. You just take your time and decide</p>
                </div>
                <button class="bg-gradient-to-l from-primary to-tertiary py-4 px-6 rounded-md text-white font-medium md:w-72">More about CarAudit</button>
                <div class="hidden xl:block border-t-2 text-sm py-6 pr-8">
                    <q class="italic"> I've no idea what is my purpose to selling this sh*t, JK : D </q>
                    <div class="text-sm flex gap-2 items-center mt-6">
                        <div class="w-10 h-10 rounded-full overflow-hidden">
                            <img src="/assets/images/profile-pic-2.jpg" alt="">
                        </div>
                        <div>
                            <h1 class="font-semibold">Bryan Berlandro</h1>
                            <p class="text-xs">Carsell Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- DESC -->

            <!-- REVIEW -->
            <div class="w-full flex flex-col gap-4 md:gap-10 xl:w-[60%] xl:h-full xl:gap-4 xl:justify-center">

                <!-- CARD SLIDER -->
                <div class="audit-slider-wrapper w-full h-[470px] overflow-x-hidden md:h-[500px] ">
                    <div class="audit-slider w-[300%] h-full flex transition-all duration-300">

                        <!-- CARD -->

                        <!-- 1 -->
                        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4">

                            <!-- PROFILE -->
                            <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                                    <div class="w-full flex px-4 py-2 gap-2">
                                        <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                            <img src="/assets/images/profile-pic-1.jpg" alt="" class="absolute w-full">
                                        </div>
                                        <div>
                                            <h1 class="text-sm font-semibold">Depi Depoy</h1>
                                            <p class="text-xs">Carsell Mechanic</p>
                                        </div>
                                    </div>
                                    <div class="w-full text-xs px-4 text-balance">
                                        <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                                    </div>
                            </div>
                            <!-- PROFILE -->

                            <!-- RESULT -->
                            <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                                    <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                                        <div class="w-32 h-full overflow-hidden md:w-44">
                                            <img src="/assets/images/civic-1.jpg" alt="">
                                        </div>
                                        <h1 class="font-semibold md:text-lg">Honda Civic 2.0 Plat B ORI</h1>
                                    </div>

                                    <!-- PERFORMANCE -->
                                    <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Exterior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[87%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-seat-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Interior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[78%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-engine-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Engine</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[92%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-wheel-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Wheel</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-road-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Testdrive</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[95%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- PERFORMANCE -->

                                    <!-- POINT -->
                                    <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>   
                                        <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>                                       
                                    </div>
                                    <!-- POINT -->

                            </div>
                            <!-- RESULT -->

                        </div>
                        <!-- 1 -->

                        <!-- 2 -->
                        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4">

                            <!-- PROFILE -->
                            <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                                    <div class="w-full flex px-4 py-2 gap-2">
                                        <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                            <img src="/assets/images/profile-pic-1.jpg" alt="" class="absolute w-full">
                                        </div>
                                        <div>
                                            <h1 class="text-sm font-semibold">Depi Depoy</h1>
                                            <p class="text-xs">Carsell Mechanic</p>
                                        </div>
                                    </div>
                                    <div class="w-full text-xs px-4 text-balance">
                                        <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                                    </div>
                            </div>
                            <!-- PROFILE -->

                            <!-- RESULT -->
                            <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                                    <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                                        <div class="w-32 h-full overflow-hidden md:w-44">
                                            <img src="/assets/images/nissan-1.jpg" alt="">
                                        </div>
                                        <h1 class="font-semibold md:text-lg">Nissan GT-R KM < 100</h1>
                                    </div>

                                    <!-- PERFORMANCE -->
                                    <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Exterior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[70%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-seat-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Interior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[90%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-engine-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Engine</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[85%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-wheel-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Wheel</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-road-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Testdrive</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[95%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- PERFORMANCE -->

                                    <!-- POINT -->
                                    <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>   
                                        <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>                                       
                                    </div>
                                    <!-- POINT -->

                            </div>
                            <!-- RESULT -->

                        </div>
                        <!-- 2 -->

                        <!-- 3 -->
                        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4">

                            <!-- PROFILE -->
                            <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                                    <div class="w-full flex px-4 py-2 gap-2">
                                        <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                            <img src="/assets/images/profile-pic-1.jpg" alt="" class="absolute w-full">
                                        </div>
                                        <div>
                                            <h1 class="text-sm font-semibold">Depi Depoy</h1>
                                            <p class="text-xs">Carsell Mechanic</p>
                                        </div>
                                    </div>
                                    <div class="w-full text-xs px-4 text-balance">
                                        <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                                    </div>
                            </div>
                            <!-- PROFILE -->

                            <!-- RESULT -->
                            <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                                    <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                                        <div class="w-32 h-full overflow-hidden md:w-44">
                                            <img src="/assets/images/mercy-1.jpg" alt="">
                                        </div>
                                        <h1 class="font-semibold md:text-lg">Mercedes e53 AMG Plat F</h1>
                                    </div>

                                    <!-- PERFORMANCE -->
                                    <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Exterior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[85%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-car-seat-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Interior</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[78%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-engine-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Engine</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[87%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-wheel-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Wheel</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[90%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                        <div class="flex justify-between w-full items-center md:px-4">
                                            <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                                <div class="w-3 h-3 xl:w-4 xl:h-4">
                                                    <img src="/assets/images/icons8-road-50.png" alt="">
                                                </div>
                                                <p class="text-sm md:text-base">Testdrive</p>
                                            </div>
                                            <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                                <div class="w-[92%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- PERFORMANCE -->

                                    <!-- POINT -->
                                    <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>   
                                        <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>                                       
                                    </div>
                                    <!-- POINT -->

                            </div>
                            <!-- RESULT -->

                        </div>
                        <!-- 3 -->

                        
                        <!-- CARD -->

                    </div>
                </div>
                <!-- CARD SLIDER -->

                <div class="w-full flex justify-center gap-3 md:gap-5">
                    <button class="audit-btn w-3 h-3 border-2 border-secondary rounded-full bg-secondary md:w-5 md:h-5"></button>
                    <button class="audit-btn w-3 h-3 border-2 border-secondary rounded-full md:w-5 md:h-5"></button>
                    <button class="audit-btn w-3 h-3 border-2 border-secondary rounded-full md:w-5 md:h-5"></button>
                </div>
                <div class="text-center w-full mt-3">
                    <h1 class="text-xs tracking-wide font-semibold">IN COOPERATION WITH</h1>
                    <div class="flex w-full justify-center gap-8 mt-3 md:mt-6 md:gap-14">
                        <div class="w-8 h-8 md:w-14 md:h-14">
                            <svg role="img" fill="#334155" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>BMW</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 .78C18.196.78 23.219 5.803 23.219 12c0 6.196-5.022 11.219-11.219 11.219C5.803 23.219.781 18.196.781 12S5.804.78 12 .78zm-.678.63c-.33.014-.66.042-.992.078l-.107 2.944a9.95 9.95 0 0 1 .71-.094l.07-1.988-.013-.137.043.13.664 1.489h.606l.664-1.488.04-.131-.01.137.07 1.988c.232.022.473.054.71.094l-.109-2.944a14.746 14.746 0 0 0-.992-.078l-.653 1.625-.023.12-.023-.12-.655-1.625zm6.696 1.824l-1.543 2.428c.195.15.452.371.617.522l1.453-.754.092-.069-.069.094-.752 1.453c.163.175.398.458.53.63l2.43-1.544a16.135 16.135 0 0 0-.46-.568L18.777 6.44l-.105.092.078-.115.68-1.356-.48-.48-1.356.68-.115.078.091-.106 1.018-1.539c-.18-.152-.351-.291-.57-.46zM5.5 3.785c-.36.037-.638.283-1.393 1.125a18.97 18.97 0 0 0-.757.914l2.074 1.967c.687-.76.966-1.042 1.508-1.613.383-.405.6-.87.216-1.317-.208-.242-.558-.295-.85-.175l-.028.01.01-.026a.7.7 0 0 0-.243-.734.724.724 0 0 0-.537-.15zm.006.615c.136-.037.277.06.308.2.032.14-.056.272-.154.382-.22.25-1.031 1.098-1.031 1.098l-.402-.383c.417-.51.861-.974 1.062-1.158a.55.55 0 0 1 .217-.139zM12 4.883a7.114 7.114 0 0 0-7.08 6.388v.002a7.122 7.122 0 0 0 8.516 7.697 7.112 7.112 0 0 0 5.68-6.97A7.122 7.122 0 0 0 12 4.885v-.002zm-5.537.242c.047 0 .096.013.14.043.088.059.128.16.106.26-.026.119-.125.231-.205.318l-1.045 1.12-.42-.4s.787-.832 1.045-1.099c.102-.106.168-.17.238-.205a.331.331 0 0 1 .14-.037zM12 5.818A6.175 6.175 0 0 1 18.182 12H12v6.182A6.175 6.175 0 0 1 5.818 12H12V5.818Z"/></svg>
                        </div>
                        
                        <div class="w-8 h-8 md:w-14 md:h-14">
                            <svg role="img" fill="#334155" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Honda</title><path d="M23.902 6.87c-.33-3.218-2.47-3.895-4.354-4.204-.946-.16-2.63-.3-3.716-.34-.946-.06-3.168-.09-3.835-.09-.657 0-2.89.03-3.835.09-1.076.04-2.77.18-3.716.34C2.563 2.985.42 3.66.092 6.87c-.08.877-.1 2.023-.09 3.248.03 2.031.2 3.406.3 4.363.07.657.338 2.62.687 3.636.478 1.395.916 1.803 1.424 2.222.937.757 2.471.996 2.79 1.056 1.733.31 5.24.368 6.784.368 1.544 0 5.05-.05 6.784-.368.329-.06 1.863-.29 2.79-1.056.508-.419.946-.827 1.424-2.222.35-1.016.628-2.979.698-3.636.1-.957.279-2.332.299-4.363.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.19 2.57-.418 4.104-.747 5.22-.29.976-.637 1.623-1.165 2.092-.867.787-2.063.956-2.76 1.056-1.514.23-4.055.3-6.057.3-2.002 0-4.543-.08-6.057-.3-.697-.1-1.893-.269-2.76-1.056-.518-.469-.876-1.126-1.155-2.093-.329-1.105-.558-2.65-.747-5.22-.11-1.543-.09-4.054.08-5.4.258-2.011 1.255-3.018 3.387-3.396.996-.18 2.34-.31 3.606-.37 1.016-.07 2.7-.1 3.636-.09.936-.01 2.62.03 3.636.09 1.275.06 2.61.19 3.606.37 2.142.378 3.139 1.395 3.388 3.397.199 1.345.229 3.856.11 5.4m-5.202-8.39c-.548 2.462-.767 3.588-1.216 5.37-.428 1.715-.767 3.298-1.335 4.065-.587.777-1.365.947-1.893 1.006-.279.03-.478.04-1.066.05-.596 0-.796-.02-1.075-.05-.528-.06-1.315-.229-1.892-1.006-.578-.767-.907-2.35-1.335-4.064-.47-1.773-.678-2.91-1.236-5.37 0 0-.548.02-.797.04-.329.02-.588.05-.867.09.343 5.372.692 11.079 1.126 16.13a21.983 21.983 0 002.39.169c.33-1.266.748-3.02 1.207-3.767.378-.608.966-.677 1.295-.717.518-.07.956-.08 1.165-.08.2-.01.637 0 1.165.08.33.05.917.11 1.295.717.47.747.877 2.5 1.206 3.766 0 0 .358-.01 1.165-.05.41-.018.82-.058 1.226-.12.458-5.39.785-10.728 1.126-16.128-.28-.04-.538-.07-.867-.09-.23-.02-.787-.04-.787-.04z"/></svg>
                        </div>

                        <div class="w-8 h-8 md:w-14 md:h-14">
                            <svg role="img" fill="#334155" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>F1</title><path d="M9.6 11.24h7.91L19.75 9H9.39c-2.85 0-3.62.34-5.17 1.81C2.71 12.3 0 15 0 15h3.38c.77-.75 2.2-2.13 2.85-2.75.92-.87 1.37-1.01 3.37-1.01zM20.39 9l-6 6H18l6-6h-3.61zm-3.25 2.61H9.88c-2.22 0-2.6.12-3.55 1.07C5.44 13.57 4 15 4 15h3.15l.75-.75c.49-.49.75-.55 1.78-.55h5.37l2.09-2.09z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- REVIEW -->

        </div>
        <!-- WRAPPER -->

    </section>
    <!-- CAR AUDIT SECTION -->


    <!-- OLD FOR NEW -->
    <section class="w-full h-[115vh] overflow-hidden flex items-center my-10 md:h-[80vh] md:my-10 xl:h-[80vh]">
        <div class="flex-col flex w-full h-full justify-center px-[5%] md:px-0 xl:flex-row xl:items-center">
            <div class="px-[5%] flex flex-col gap-4 space-y-3 md:w-[600px] xl:w-[60%] xl:space-y-5">
                <div class="space-y-3 xl:space-y-5">
                    <div class="font-bold text-2xl md:w-72 xl:text-4xl">
                        <h1>Old for new? No problem!</h1>
                    </div>
                    <p class="text-sm ">Sell your existing car - effortlessly, quickly and at the best price - in our online auction and buy a new one just as easily from the comfort of your couch. Just leave us basic details of your car and wait for the best offer. In the meantime, choose a new car on our website and leave everything else to us.</p>
                </div>
                <div class="w-44 h-1 rounded-lg bg-gradient-to-r from-tertiary  "></div>
            </div>
            <div class="w-full h-[450px] flex justify-center items-end relative mt-8 md:w-full md:h-[900px] xl:h-full ">
                <img src="/assets/images/car-trans-2.png" alt="" class="w-full h-full object-cover absolute xl:-top-24">
                
                <div class="relative translate-y-14 bg-white w-[90%] h-40 rounded-md p-5 flex flex-row gap-4 shadow-md md:translate-y-0 md:w-[80%] xl:w-[500px] xl:flex-row xl:items-start xl:h-40 xl:gap-6 xl:-translate-y-14">
                    <div class="flex flex-col gap-2 items-center pt-2">
                        <div class="w-2 h-2 bg-tertiary outline outline-blue-200 outline-offset-2 outline-4 rounded-full"></div>
                        <div class="w-1 h-28 rounded-lg bg-gradient-to-b from-blue-100"></div>
                    </div>
                    <div class="w-full h-full flex flex-col justify-between">
                        <h1 class="font-semibold text-slate-500">Sell your car from your sofa</h1>
                        <div class="w-full">
                            <label for="plat-num" class="text-slate-400 font-medium text-sm">Vehicle Num</label>
                            <input type="text" placeholder="enter the num" name="plat-num" class="placeholder:text-sm placeholder:normal-case uppercase border-2 rounded-sm py-2 px-3 w-full mt-2 xl:w-full">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- OLD FOR NEW -->


    <!-- FINANCING -->
    <section class="w-full relative h-[120vh] overflow-hidden my-14 md:h-[80vh] xl:h-[100vh]">
        <div class="absolute w-96 bg-slate-200 h-[200%] -left-32 top-0 -rotate-12 xl:w-[700px] xl:-top-20"></div>
        
        <!-- DESC -->
        <div class="relative w-full h-full flex flex-col gap-10 items-center md:gap-14 xl:flex-row-reverse">
            <div class="w-full px-[5%] bg-white h-max py-6 flex flex-col gap-10  xl:w-[40%]">
                <div class="space-y-2 md:w-[80%] xl:w-[90%]">
                    <h1 class="text-2xl font-bold xl:text-3xl">Financing of cars even from abroad</h1>
                    <p class="text-sm">Carsell will even finance cars from abroad, which is rare. Furthermore, we are able to do so purely online and within few hours. Try out our financing calculator - there is no hidden fine print!</p>
                </div>
                <button class="py-3 w-full text-white rounded-md bg-gradient-to-l from-primary to-tertiary flex justify-center items-center gap-4 md:w-80">
                    More about financing
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>                          
                </button>
                <div class="hidden xl:block border-t-2 w-[80%] pt-4 space-y-4">
                    <q class="text-xs italic"> Everything went smoothly - my financing got approved within minutes. </q>
                    <div class="flex gap-3 items-center">
                        <div class="w-9 h-9 rounded-full overflow-hidden relative">
                            <img src="/assets/images/profile-pic-1.jpg" alt="">
                        </div>
                        <div>
                            <h1 class="text-sm font-semibold">Depi Depoy</h1>
                            <p class="text-xs">Carsell accounting</p>
                        </div>
                    </div>
                </div>
            </div>


            <!-- IMAGE -->
            <div class="w-full relative px-[5%] md:w-[90%] xl:w-[60%]">
            <div class="w-40 h-40 rounded-full bg-gradient-to-tl from-tertiary opacity-75 absolute -bottom-10 right-0"></div>
            <div class="w-20 h-20 bg-gradient-to-r from-tertiary bg-opacity-35 rounded-full opacity-75 absolute left-[5%] bottom-0 md:left-4"></div>
                
            <div class="w-full shadow-multiple relative h-[500px] z-10 rounded-md overflow-hidden bg-white bg-opacity-50 md:h-[600px]">
                    <img src="/assets/images/payment-pict-1.png" alt="" class="absolute w-full h-full object-cover opacity-15">
                    <div class="relative w-full flex justify-center items-center h-full bg-neutral-100 backdrop-blur-md bg-opacity-25 px-[5%]">
                        <div class="text-center flex flex-col items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#337CCF" class="w-12 h-12">
                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                            </svg>     
                            <h1 class="font-bold text-tertiary md:text-xl">We are already preparing financing in $</h1>
                            <p class="text-sm">if you can't wait, call us and we will find a solution for you.</p>
                            <div class="flex gap-2 mt-6 md:mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#337CCF" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg> 
                                <h1 class="font-bold">+62 844 3232 86</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- IMAGE -->
        </div>
        <!-- DESC -->

    </section>
    <!-- FINANCING -->

    <!-- SERVICES -->
    <section id="services" class="h-[100vh] overflow-hidden transition-all duration-300 my-14 relative py-20 md:py-8 md:h-max">
        <div class="px-[5%] text-center space-y-2">
            <h1 class="text-2xl font-bold md:text-3xl">Comprehensive services just a few clicks away</h1>
            <p class="text-sm md:text-base">One-stop solution for all your needs, from the comfort of your home.</p>
        </div>
        <div class="flex flex-col gap-4 px-[5%] mt-8 md:flex-row md:flex-wrap md:w-full md:items-center md:mt-12 md:gap-y-6">
            <!-- CARD -->
            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">Financing</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2">
                    <div class="flex items-start gap-2 justify-start2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Completely online within few hours</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Transparent, no fine print</p>
                    </div>
                </div>
            </div>

            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">CarAudit Inspection</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2">
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Thorough vehicle check</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Qualified mechanics and technicians</p>
                    </div>
                </div>
            </div>

            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">Delivery</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2">
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">To your doorstep or a Pick-up point</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Unbeatable price</p>
                    </div>
                </div>
            </div>

            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">Warranty</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2">
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Up to 36 months</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">For all vehicles</p>
                    </div>
                </div>
            </div>

            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">Insurance</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2 w-full">
                    <div class="flex items-start gap-2 justify-start ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:w-56 xl:text-base">Both third-party and comprehensive insurance</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Great rates for everyone</p>
                    </div>
                </div>
            </div>

            <div class="rounded-md w-full h-40 hover:scale-[.98] transition duration-300 hover:shadow-md focus:scale-[.98] shadow-multiple flex justify-center items-start px-8 flex-col gap-4 md:w-[48%]  md:gap-6 md:h-44 xl:w-[32%] xl:h-80 ">
                <div class="flex gap-4 items-center xl:flex-col xl:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-secondary xl:w-10 xl:h-10">
                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                        </svg>                              
                    </div>
                    <h1 class="text-secondary font-semibold text-xl xl:text-2xl xl:font-bold">Vehicle Registration</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary block xl:hidden">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="space-y-2">
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base xl:w-52">Everything from emission-test to MOT</p>
                    </div>
                    <div class="flex items-start gap-2 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 xl:w-6 xl:h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>                              
                        <p class="text-sm xl:text-base">Car registered in your name</p>
                    </div>
                </div>
            </div>
            <!-- CARD -->
        </div>
        <div class="w-full h-24 absolute bottom-0 bg-gradient-to-t from-white from-[60%] flex justify-center items-end md:hidden">
            <div class="flex items-center w-full justify-center gap-2">
                <div class="w-[20%] h-1 rounded-md bg-gradient-to-l from-neutral-300"></div>
                <div onclick="showMoreServices()" class="rounded-md w-[40%] bg-white shadow-soft py-2 flex justify-center border-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 block down-review">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                    </svg>   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hidden up-review">
                        <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                    </svg>                                             
                </div>
                <div class="w-[20%] h-1 rounded-md bg-gradient-to-r from-neutral-300"></div>
            </div>
        </div>
    </section>
    <!-- SERVICES -->

    <!-- REVIEW -->
    <section class="h-[115vh] w-full relative px-[5%] my-24 overflow-hidden flex flex-col gap-10 md:flex-row md:h-[70vh] md:items-center xl:h-[90vh] xl:items-center xl:justify-between">
        <div class="absolute w-96 -z-10 bg-slate-200 h-[200%] -right-32 top-0 rotate-12 xl:w-[700px] xl:-top-20"></div>
        <div class="hidden xl:flex -z-10 absolute w-[400px] h-[200%] rotate-45 bg-slate-300 right-0 top-32"></div>
        <!-- title -->
        <div class="xl:w-[60%]">
            <h1 class="text-2xl font-bold md:text-3xl">What do our customers think?</h1>
            <div class="flex gap-3 mt-4 md:mt-8">
                <h1 class="text-2xl font-bold xl:text-4xl">4.8</h1>
                <div class="flex flex-col gap-1">
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 text-yellow-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 text-yellow-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 text-yellow-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 text-yellow-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>                              
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 text-yellow-400">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg> 
                    </div>
                    <p class="text-xs md:text-sm">1.648 reviews</p>
                </div>
            </div>
        </div>
        <!-- title -->

        <div class="w-full gap-4 overflow-hidden flex flex-col">
            <div class="review-wrapper w-[300%] flex gap-6 transition duration-300">
                
            </div>
            <div class="w-full flex justify-center gap-4 py-2">
                <button class="review-slide-btn rounded-full w-4 h-4 border-2 border-secondary bg-secondary"></button>
                <button class="review-slide-btn rounded-full w-4 h-4 border-2 border-secondary"></button>
                <button class="review-slide-btn rounded-full w-4 h-4 border-2 border-secondary"></button>
            </div>
        </div>
    </section>
    <!-- REVIEW -->

    <!-- ADS -->
    <section class="w-full flex flex-col overflow-x-hidden gap-8 items-center relative px-[5%]">
        <div class="absolute w-[250%] rotate-6 h-[80%] bg-slate-200 -left-full xl:h-[90%] -z-10"></div>

        <div class="w-full h-[500px] rounded-md shadow-soft bg-white md:h-80 xl:w-[800px] xl:h-[500px]">
            <div class=" py-4 px-10 flex flex-col gap-8 border-b-2 h-[60%] justify-center items-center relative overflow-hidden md:items-start xl:h-[70%]">
                <div class="md:w-80 flex flex-col gap-8 xl:gap-12">
                    <h1 class="text-2xl font-bold xl:text-4xl">Your next car is waiting for you here...</h1>
                    <button class="text-white font-semibold bg-gradient-to-l from-primary to-tertiary rounded-md w-full py-3 xl:py-4 ">1 207 551 Offers</button>
                </div>
                <div class="absolute bg-gradient-to-bl from-slate-200 to-slate-100 rotate-12 w-44 h-[400px] -right-10 -bottom-10 hidden md:block"></div>
                <img src="/assets/images/car-anim-4.png" alt="" class="hidden absolute right-0 w-72 md:block xl:w-96">
            </div>
            <div class="w-full flex flex-col bg-tertiary bg-opacity-5 items-start gap-4 justify-center py-4 px-14 h-[40%] md:flex-row md:items-center md:gap-14 xl:h-[30%]">
                <div class="flex gap-4 items-center">
                    <div class="rounded-full bg-white w-10 h-10 flex items-center justify-center text-secondary md:w-14 md:h-14">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>                              
                    </div>
                    <div class="">
                        <p class="text-sm">Call us</p>
                        <h1 class="font-semibold">+62 833 456 32</h1>
                        <p class="text-xs">Mo-Su 8 am - 8 pm</p>
                    </div>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="rounded-full bg-white w-10 h-10 flex items-center justify-center text-secondary md:w-14 md:h-14">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>                                                            
                    </div>
                    <div class="">
                        <p class="text-sm">E-mail</p>
                        <h1 class="font-semibold text-tertiary underline underline-offset-3">carsellID@gmail.com</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full bg-transparent text-center">
            <h1 class="text-xl font-bold ">You're not risking anything when you buy a vehicle on Carsell</h1>

            <div class="w-full items-start top-0 text-start bg-white h-max mt-10 relative flex flex-col shadow-md gap-2 rounded-md md:py-2 md:mt-20 md:flex-row md:h-20 xl:h-max xl:mt-16 xl:items-center z-10">
                
                <!-- 1 -->
                <div class="utility-ads cursor-pointer w-full h-max border-b-2 overflow-hidden  text-sm flex items-center flex-col px-4 md:border-r-2 md:border-b-0 md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>                              
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">Money Back Guarantee</h1>
                                <p class="hidden xl:block">If you don't fall in love with the vehicle, simply return it to us</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-ads-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 top-0 md:w-96 md:bg-white md:border-t-0 md:absolute md:left-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">Can I really return the car?</h1>
                        <p><b class="font-semibold">Of course, you can.</b> We trust our service and know that <b class="font-semibold">we only sell inspected vehicles in excellent technical condition.</b> together with our customers we are fighting for better vehicles on Depok Roads</p>
                        <p><b class="font-semibold">Carsell, therefore, always assumes all risks connected with the vehicle.</b> and if you simply don't like the car, <b class="font-semibold">you can return it to us up to 14 days after receiving it</b></p>
                    </div>
                </div>
                <!-- 1 -->

                <!-- 2 -->
                <div class="utility-ads w-full cursor-pointer overflow-hidden relative h-max border-b-2 text-sm flex items-center flex-col px-4 justify-between md:border-r-2 md:border-b-0 md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">Safe Purchase</h1>
                                <p class="hidden xl:block">We guarantee the technical condition of every vehicle sold</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-ads-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 relative md:w-96 md:bg-white md:border-t-0 md:absolute md:left-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">You don't risk anything buying</h1>
                        <p><b class="font-semibold">Carsell is the safest way of buying a used car</b> first of all carefully examine the chosen car and <b class="font-semibold">you then decide on the basis of its currennt condition</b> and our recommendation</p>
                        <p>You always sign the contract with Carsell, so<b class="font-semibold"> all guarantees are provided by us</b> wherever the car is from, you always make the payment to a local account in your local currency</p>
                    </div>
                </div>
                <!-- 2 -->
                
                <!-- 3 -->
                <div class="utility-ads w-full relative h-max text-sm flex flex-col overflow-x-hidden cursor-pointer items-center px-4 justify-between md:overflow-visible xl:h-24 xl:justify-center">
                    <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                        <div class="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="font-semibold text-base text-primary">6-Month Warranty</h1>
                                <p class="hidden xl:block">In addition, with every car you receive an extended warranty</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>                              
                        </div>
                    </div>
                    <div class="utility-ads-desc border-t-2 w-full px-4 py-4 space-y-2 text-sm hidden transition-all duration-300 relative md:w-96 md:bg-white md:border-t-0 md:absolute md:right-0 md:top-24 md:shadow-md md:rounded-md xl:top-32 xl:space-y-4">
                        <h1 class="font-bold text-base">You receive an extended warranty on the car</h1>
                        <p>For even greater peace of mind, aside from the warranty for hidden defects, you also have from us<b class="font-semibold"> an extended 6-month warranty on the essentials</b> - the engine, gearbox and differential</p>
                        <p>If you want even more, you can choose a longer period of coverage for other parts of the vehicle in the order</p>
                    </div>
                </div>
                <!-- 3 -->
                
            </div>
        </div>
    </section>
    <!-- ADS -->
</main>`
}