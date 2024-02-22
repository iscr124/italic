import '../../Custom.css';

export function TheBannerHeader() {
    return(
        <div id='site-banner'>
            <div className='bg-mocha-dark text-white z-10 relative'>
                <div className='mx-auto w-auto max-w-container flex justify-between banner px-s25 lg:px-[50px] xl:px-[100px]'>
                    {/* Left */}
                    <div className='swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal'>
                        <div className='swiper-wrapper justify-center md:justify-normal lg:justify-normal xl:justify-normal duration-[0ms]'>
                            <div className='swiper-slide flex items-center justify-center md:justify-start bg-mocha-dark swiper-slide-prev w-[1086px] opacity-100 transformZero duration-[0ms]'>
                                <button className='outline-none'>
                                    <a href='/' className='flex items-center leading-[18px]'>
                                        <p className='py-s10 lg:p-0 label-small-mono uppercase leading-[18px] z-10'>
                                            Luxury without labels.
                                        </p>    
                                    </a>
                                </button>
                            </div>
                            {/* <div className='swiper-slide flex items-center justify-center md:justify-start bg-mocha-dark swiper-slide-active w-[1086px] opacity-100 transformOne duration-0'>    
                                <button className='outline-none'>
                                    <a href='/' className='flex items-center leading-[18px]'>
                                        <p className='py-s10 lg:p-0 label-small-mono uppercase leading-[18px] z-10'>
                                            There's more in store.
                                        </p>
                                        <div className='flex items-center ml-s5'>
                                            <p className='label-small-mono uppercase pr-s5 false'>Shop New Arrivals</p>
                                            <svg viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg" width="10" height="9" fill="white">
                                                <path d="M5.679.44a.563.563 0 0 0-.796.796l2.415 2.415H1.344a.563.563 0 0 0 0 1.125h5.954L4.883 7.19a.563.563 0 0 0 .796.795l3.375-3.375a.563.563 0 0 0 0-.795L5.679.44Z"></path>
                                            </svg>
                                        </div>    
                                    </a>
                                </button>
                            </div>
                            <div className='swiper-slide flex items-center justify-center md:justify-start bg-mocha-dark swiper-slide-next w-[1086px] opacity-100 transformTwo duration-0'>
                                <button className='outline-none'>
                                    <a href='/' className='flex items-center leading-[18px]'>
                                        <p className='py-s10 lg:p-0 label-small-mono uppercase leading-[18px] z-10'>
                                            Free standard shipping
                                        </p>
                                        <div className='flex items-center ml-s5'>
                                            <p className='label-small-mono uppercase pr-s5 false'>on orders over $100+</p>
                                            <svg viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg" width="10" height="9" fill="white">
                                                <path d="M5.679.44a.563.563 0 0 0-.796.796l2.415 2.415H1.344a.563.563 0 0 0 0 1.125h5.954L4.883 7.19a.563.563 0 0 0 .796.795l3.375-3.375a.563.563 0 0 0 0-.795L5.679.44Z"></path>
                                            </svg>
                                        </div>  
                                    </a>
                                </button>
                            </div>
                            <div className='swiper-slide flex items-center justify-center md:justify-start bg-mocha-dark w-[1086px] opacity-100 translate-x-[-3258px] translate-y-0 duration-0'>
                                <button className='outline-none'>
                                    <a href='/' className='flex items-center leading-[18px]'>
                                        <p className='py-s10 lg:p-0 label-small-mono uppercase leading-[18px] z-10'>
                                            Shop Last Chance deals
                                        </p>
                                        <div className='flex items-center ml-s5'>
                                            <p className='label-small-mono uppercase pr-s5 false'>while supplies last.+</p>
                                            <svg viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg" width="10" height="9" fill="white">
                                                <path d="M5.679.44a.563.563 0 0 0-.796.796l2.415 2.415H1.344a.563.563 0 0 0 0 1.125h5.954L4.883 7.19a.563.563 0 0 0 .796.795l3.375-3.375a.563.563 0 0 0 0-.795L5.679.44Z"></path>
                                            </svg>
                                        </div>  
                                    </a>
                                </button>
                            </div>
                            <div className='swiper-slide flex items-center justify-center md:justify-start bg-mocha-dark w-[1086px] opacity-100 translate-x-[-4344px] translate-y-0 duration-0'>
                                <button className='outline-none'>
                                    <a href='/' className='flex items-center leading-[18px]'>
                                        <p className='py-s10 lg:p-0 label-small-mono uppercase leading-[18px] z-10'>
                                            NEW ARRIVALS:
                                        </p>
                                        <div className='flex items-center ml-s5'>
                                            <p className='label-small-mono uppercase pr-s5 false'>FEATHERLIGHT COLLECTION</p>
                                            <svg viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg" width="10" height="9" fill="white">
                                                <path d="M5.679.44a.563.563 0 0 0-.796.796l2.415 2.415H1.344a.563.563 0 0 0 0 1.125h5.954L4.883 7.19a.563.563 0 0 0 .796.795l3.375-3.375a.563.563 0 0 0 0-.795L5.679.44Z"></path>
                                            </svg>
                                        </div>  
                                    </a>
                                </button>
                            </div> */} {/* Needs JS */}
                        </div>
                        <span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
                    </div>
                    {/* Right */}
                    <div className='hidden md:flex items-center justify-end whitespace-nowrap label-small'>
                        <div className='flex items-center gap-s32'>
                            <div>
                                <a className='label-small-mono uppercase hover:underline hover:underline-offset-2' href="/">
                                    Membership
                                </a>
                            </div>
                            <button className='flex items-center outline-none'>
                                <p className='label-small-mono uppercase hover:underline hover:underline-offset-2'>
                                    Rewards
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
