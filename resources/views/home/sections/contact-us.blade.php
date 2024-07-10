<section id="contact-us">
    <div class="flex flex-col relative overflow-x-clip">

        {{-- <div class="bg-slate-300 backdrop-blur-sm bg-opacity-80 rounded-3xl mt-5 mb-2 px-0 overflow-hidden shadow-lg  "> --}}
            <x-card class="!px-0 !pt-0 !pb-0 overflow-hidden">
                <form>
                    <div class="flex flex-col-reverse lg:flex-row" >
                        {{-- First Column --}}
                        <div class="grow first-line:mt-4 lg:mt-0 bg-center bg-cover ">
                                {{-- Placeholder for Image or Art --}}
                                <img src="{{asset('Art/06.png')}}" class="object-cover w-auto h-full  "alt="" >


                        </div>
                        {{-- Second Column --}}
                        <div class="grow flex flex-col lg:flex-row justify-center  md:ml-5 px-2 py-4 lg:px-0">
                            <div
                                class="hidden xl:inline-block h-full min-h-[1em] w-0.5 self-stretch mx-5 bg-neutral-100 opacity-100 dark:opacity-50"></div>

                                <div class=" space-y-3 px-5 ">
                                    <div class="flex flex-col">
                                        <h2 class="text-3xl font-bold tracking-widest">CONTACT US</h2>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="text-stone-800 font-medium tracking-wider   mb-5"  for="fName">Name</label>
                                        <input class="transition focus:ring-3 outline-none pl-0 focus:ring-white focus:border-white border-white hover:border-amber-300 border-t-0 border-l-0 border-r-0 border-b-4 duration-300 px-5 bg-transparent placeholder-slate-600" required type="text" id="fName" placeholder="Enter your Name">
                                    </div>

                                    <div class="flex flex-col">
                                        <label class="text-stone-800 font-medium tracking-wider mb-5"  for="fEmail">Email</label>
                                        <input class="transition focus:ring-3 outline-none pl-0 focus:ring-white focus:border-white border-white hover:border-amber-300 border-t-0 border-l-0 border-r-0 border-b-4 duration-300 px-5 bg-transparent placeholder-slate-600"  required type="email" id="fEmail" placeholder="Enter your Email Address">
                                    </div>

                                    <div class="flex flex-col">
                                        <label class="text-stone-800 font-medium tracking-wider mb-5"  for="fPhone">Phone</label>
                                        <input class="transition focus:ring-3 outline-none pl-0 focus:ring-white focus:border-white border-white hover:border-amber-300 border-t-0 border-l-0 border-r-0 border-b-4 duration-300 px-5 bg-transparent placeholder-slate-600"  required type="tel" id="fPhone" placeholder="Enter your Phone Number">
                                    </div>

                                    <div class="flex flex-col ">
                                        <label class="text-stone-800 font-medium tracking-wider"  for="fInquiry">Select Inquiry</label>
                                        <select
                                                class="transition focus:ring-3 outline-none pl-0 focus:ring-white focus:border-white border-white hover:border-amber-300 border-t-0 border-l-0 border-r-0 border-b-4 duration-300 px-5 bg-transparent placeholder-slate-600"
                                                id="fInquiry" name="fInquiry" required >
                                                    <option value="" hidden selected></option>
                                                    <option value="Inquiry">Inquiry</option>
                                                    <option value="Partnership">Partnership</option>
                                                    <option value="Mentorship">Mentorship</option>
                                                    <option value="Collaboration">Collaboration</option>
                                                    <option value="Business">Business</option>
                                        </select>

                                    </div>

                                    <div class="flex flex-col ">
                                        <label class="text-stone-800 font-medium tracking-wider mb-5" for="fMessage">Message</label>
                                        <textarea class="transition focus:ring-3 outline-none pl-0 focus:ring-white focus:border-white border-white hover:border-amber-300 border-t-0 border-l-0 border-r-0 border-b-4 duration-300 px-5 bg-transparent placeholder-slate-600" name="fMessage" id="fMessage" cols="30" rows="8" required placeholder="Write your Message Here"></textarea>
                                    </div>

                                    <div class="flex flex-col relative lg:flex-row gap-y-10 gap-x-24 px-5 mt-5 justify-center md:justify-between items-center">
                                        <div class=""  >
                                            <input
                                            class="
                                            file:outline-none
                                            file:bg-transparent
                                            file:text-stone-800
                                            file:mr-5
                                            md:file:mr-0
                                            file:px-5
                                            file:border-none
                                            file:cursor-pointer
                                            file:font-medium
                                            file:tracking-wider

                                            rounded-sm
                                            cursor-pointer
                                            text-white/80
                                            hover:bg-amber-300 duration-300 transition
                                            py-2

                                            "
                                            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.documen.pdf" type="file"
                                            id="fAttachment"
                                            multiple />
                                        </div>

                                        <div class="">
                                            <input class="transition hover:bg-amber-400 active:bg-amber-800 duration-300 rounded-lg border-none w-28 py-2  bg-amber-300 font-medium text-white"  type="submit" id="fSubmit">
                                        </div>
                                    </div>

                                </div>

                        </div>


                    </div>
                    </form>
            </x-card>




    </div>


</section>
