export function Buy(){
    return `<main class="px-[5%] pb-14 bg-tertiary bg-opacity-5 w-full">
        <section class="xl:flex xl:gap-6 xl:pt-20">

            <!-- FILTER -->
            <aside class="filter-container transition-all duration-300 z-50 bg-white w-full h-[100vh] overflow-y-scroll fixed inset-0 -translate-x-[500px] md:w-96 xl:translate-x-0 xl:relative xl:overflow-hidden xl:h-[140vh] xl:shadow-multiple xl:z-0 xl:mt-0 xl:rounded-md xl:w-[25%]">
                <div class="w-full px-[5%] fixed flex shadow-soft justify-between bg-white z-10 border-b-2 items-center py-4 md:py-8 md:px-8 xl:px-[5%] xl:relative xl:py-4">
                    <h1 class="font-bold text-lg xl:text-xl">Filter</h1>
                    <div onclick="hideFilter()" class="block xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>                          
                    </div>
                    <div onclick="clearFilter()" class="hidden xl:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>                          
                    </div>
                    
                </div>

                <div class="w-full px-[5%] flex flex-col gap-3 mt-20 h-max xl:mt-7">
                    <div class="make-filter-input w-full flex flex-col gap-1 relative">
                        <label for="carModel" class="text-sm font-medium">MAKE</label>
                        <input type="text" placeholder="select car" name="carModel" class="make-input w-full rounded-md px-2 py-2 border-2"> 
                        <div class="make-filter z-10 absolute top-16 border-2 bg-white w-[70%] h-64 flex-col hidden items-start overflow-y-scroll">
                            <!-- <button class="w-full text-start py-4 px-4 hover:bg-slate-100">Honda</button> -->
                        </div>
                    </div>

                    <div class="model-filter-wrapper w-full flex flex-col gap-1 relative">
                        <label for="carModel" class="text-sm font-medium">MODEL</label>
                        <input type="text" placeholder="select car model" name="carModel" class="model-input w-full rounded-md px-2 py-2 border-2"> 
                        <div class="model-filter absolute top-16 border-2 bg-white w-[70%] h-64 flex-col hidden items-start overflow-y-scroll">
                            <!-- <button class="w-full text-start py-4 px-4 hover:bg-slate-100">Honda</button> -->
                        </div>
                    </div>

                    <div class="transmission-wrapper flex flex-col gap-1">
                        <h1 class="text-sm font-medium">TRANSMISSION</h1>
                        <div class="transmission-filter flex w-full gap-2">
                        
                        </div>
                    </div>

                    <div class="fuel-wrapper flex flex-col gap-1">
                        <h1 class="text-sm font-medium">FUEL TYPE</h1>
                        <div class="fuel-filter flex w-full gap-2">
                        
                        </div>
                    </div>

                    <div class="color-wrapper flex flex-col gap-1">
                        <h1 class="text-sm font-medium">EXTERIOR COLOR</h1>
                        <div class="color-filter flex flex-wrap w-full gap-2">
                        
                        </div>
                    </div>

                    <div class="feature-wrapper flex flex-col gap-1">
                        <h1 class="text-sm font-medium">FEATURES</h1>
                        <div class="feature-filter flex flex-wrap w-full gap-2">
                        
                        </div>
                    </div>
                </div>

                <!-- VIDEO -->
                <!-- <div class="relative my-10 w-full h-44 px-[5%] flex justify-center md:h-44">
                    <div class="w-full h-44 rounded-md overflow-hidden relative shadow-xl md:w-full md:h-44 md:mt-4 xl:w-[600px] xl:h-80">
                        <video muted class="carsell-video w-full absolute">
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
                </div> -->
                <!-- VIDEO -->

                <div class="fixed bottom-0 flex justify-center px-[5%] shadow-soft w-full border-t-2 py-4 bg-white">
                    <button class="w-72 py-3 bg-gradient-to-l from-primary to-tertiary rounded-md font-medium text-white px-4 xl:w-full">
                        1 234 56 offers
                    </button>
                </div>

            </aside>
            <!-- FILTER -->

            <section class="w-full pt-32 xl:w-[75%] xl:pt-0">
                <div class="flex flex-col gap-2 w-full">

                    <!-- TUTORIAL -->
                    <div class="w-full bg-white rounded-md shadow-multiple relative h-max flex flex-col px-4 overflow-hidden transition-all duration-300 ">
                        <div class="w-full flex justify-between h-16 items-center z-10 bg-white">
                            <h1 class="font-semibold">How to buy a car online</h1>
                            <div class="flex gap-3 items-center text-secondary">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>                                  
                                </div>
                                <div onclick="showTutorial()" class="border-[1px] cursor-pointer rounded-md p-1 border-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tutor-down block w-5 h-5">
                                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>   
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tutor-up hidden w-5 h-5">
                                        <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                                    </svg>                                                                     
                                </div>
                            </div>
                        </div>
                        <div class="tutorial w-full h-44 -mt-44 bg-slate-200 transition-all duration-300">

                        </div>
                    </div>
                    <!-- TUTORIAL -->

                    <!-- CAR LIST -->
                    <div class="mt-6 md">

                        <!-- TITLE -->
                        <div class="space-y-3">
                            <h1 class="font-bold text-2xl">Verified Cars</h1>
                            <div class="flex w-full justify-between">
                                <p><span class="total-cars font-semibold">1 193 252</span> results</p>
                                <div class="flex gap-2 items-center">
                                    <p class="font-semibold">Newest ad</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>                                      
                                </div>
                            </div>
                        </div>
                        <!-- TITLE -->

                        <!-- CARD WRAPPER -->
                        <div class="card-wrapper flex flex-col gap-4 mt-6 md:flex-row md:flex-wrap md:justify-between md:gap-0 xl:gap-y-4">
                            
                        </div>
                        
                        <!-- CARD WRAPPER -->

                    </div>
                    <!-- CAR LIST -->

                    <div class="flex justify-between mt-8">
                        <div onclick="backToTop()" class="flex gap-2 cursor-pointer items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-secondary">
                                <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                            </svg>    
                            <p class="font-semibold text-secondary">Back to top</p>                         
                        </div>

                        <div class="flex gap-4 items-center">
                            <button class="py-2 px-2 bg-secondary text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                </svg>                                  
                            </button>
                            <button class="py-2 px-2 bg-secondary text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>                                  
                            </button>
                        </div>
                    </div>                    
                </div>


            </section>
        </section>
        <!-- Utility -->
        <div class="w-full mt-10 bg-white h-max relative flex flex-col shadow-md gap-2 rounded-md md:py-2 md:mt-20 md:flex-row md:h-20 xl:h-max xl:mt-16 xl:items-center z-10">
                    
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
    </main>`
}