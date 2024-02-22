import '../../Custom.css';
import { dataItems } from '../../dataItems';
import MenuItems from './menuItems';
import { useState } from "react";


export function Header() {

    const [dropdownActive, setDropdown] = useState(false);



    return(
        <div id='main-header'>
            <div className='xl:hidden'>
                <div className='xl:hidden z-[1000]'>
                    <div id='mobile-header' className='relative h-[60px]'>
                        <div className='grid grid-cols-3 bg-mocha-veryLight w-full h-s60 border-b border-mocha-light px-s25 lg:px-[50px] z-10 '>
                            <div className='hidden justify-center py-s10 items-center transition lg:ml-s20 w-full lg2:w-1/2 mobile-header-1'>
                                <input className='w-full transition border border-gray-300 header-search rounded-30 label-medium text-gray-1100 placeholder-gray-1100 hover:border focus:border focus:border-blacklight relative mobile-header-style-search-for'
                                       type='text'
                                       placeholder='Search for anything'
                                />
                                <div className='absolute top-s12 right-s55 lg2:right-s10 p-s5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" class="icon-scale-0-6">
                                        <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727ZM15.857 15.858 21 21.001"></path>
                                    </svg>
                                </div>
                                <button className='lg2:hidden label-small-semibold pl-s10 ml-s10 -mr-s10 p-s10 outline-none'>Back</button>
                            </div>
                            <buttom className='absolute left-0 right-0 z-10 bg-black cursor-pointer h-search top-full bg-opacity-20 backdrop-filter backdrop-blur-sm xl:left-search-dropdown xl:w-search-dropdown outline-none mobile-header-style-button'></buttom>
                            <div className='absolute left-0 right-0 h-search overflow-y-auto bg-white border-t border-gray-300 lg:h-auto lg:overflow-y-visible top-full lg:border-none hide-scrollbar pb-s100 lg:pb-0 xl:left-search-dropdown xl:w-search-dropdown false mobile-header-style-div-3'>
                                <div className='z-30 flex flex-col w-full mx-auto lg:flex-row text-blacklight px-s25 pt-s20 pb-s100 lg:px-s50 xl:px-s100 lg:py-s20 max-w-container mobile-header-style-div-4'>
                                    <div className='flex flex-col lg:mr-s30 lg:w-s23pct'>
                                        <div></div>
                                        <div>
                                            <div className='pb-s30 mb-s30 border-gray-300 lg:border-none lg:mb-0 lg:pb-0 0'>
                                                <p className='mb-s20 label-medium-semibold'>Trending Search Terms</p>
                                                <a href='/'>
                                                    <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium mobile-header-style-button-menu'>terry hoodie</button>
                                                </a>
                                                <a href='/'>
                                                    <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium mobile-header-style-button-menu'>terry hoodie</button>
                                                </a>
                                                <a href='/'>
                                                    <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium mobile-header-style-button-menu'>candle</button>
                                                </a>
                                                <a href='/'>
                                                    <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium mobile-header-style-button-menu'>cashmere</button>
                                                </a>
                                                <a href='/'>
                                                    <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium mobile-header-style-button-menu'>sun</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col flex-1'>
                                        <div className='hidden lg:block'>
                                            <p className='mb-s20 label-medium-semibold'>Recently Viewed</p>
                                            <p className='text-grayMiddle label-medium'>None found. Start browsing to build your recommendations!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center h-s60'>
                                <div className='w-s25'>
                                    <button className='pr-s10 h-s40 outline-none -ml-s15 pl-s15 text-mocha-dark'>
                                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width="24px" height="24px" stroke-width="1" class="icon-scale-0-6">
                                            <path d="M3 12h18M3 6.5h18m-18 11h18"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button className='outline-none p-s5 text-mocha-dark'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" class="icon-scale-0-6">
                                        <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727ZM15.857 15.858 21 21.001"></path>
                                    </svg>
                                </button>
                            </div>
                            <button className='flex justify-center items-center outline-none h-s60'>
                                <a className="flex justify-center items-center" href="/">
                                    <svg viewBox="0 0 81 20" xmlns="http://www.w3.org/2000/svg" width="81" height="20">
                                        <path d="M80.393 6.777S80.517 0 72.361 0c-4.82 0-8.609 3.76-8.609 10 0 7.107 4.449 10 8.815 10 6.055 0 7.62-5.744 7.62-5.744h-.741s-1.69 2.604-5.437 2.604c-3.09 0-5.85-3.017-5.85-7.521 0-5.703 2.142-7.686 4.367-7.686 4.654 0 3.872 5.124 3.872 5.124h3.995ZM38.75 7.025c0-2.562-.618-6.984-7.332-6.984-7.744 0-7.827 5.124-7.827 5.124l4.325-.041s-.782-3.595 2.966-3.595c2.595 0 3.79 2.066 3.79 6.116v1.24c-1.195-.745-2.72-1.24-4.49-1.24-4.696 0-7.662 2.562-7.662 6.198 0 3.76 2.801 6.116 6.55 6.116 3.295 0 5.23-2.314 6.26-4.215h.206c0 2.025.454 3.802.454 3.802h3.377s-.618-1.819-.618-4.918V7.025Zm-8.362 10.124c-2.225 0-3.955-1.405-3.955-3.595 0-2.232 1.69-3.885 4.408-3.885 1.936 0 3.172.62 4.201 1.612l.041 2.52c-.782 1.282-2.347 3.348-4.695 3.348ZM.607.496c.535 9.545 0 19.09 0 19.09H4.85s-.536-9.545 0-19.09H.607ZM56.626.496c.536 9.545 0 19.09 0 19.09h4.243s-.536-9.545 0-19.09h-4.243ZM21.696 2.975l-.412-2.48H7.156l-.412 2.48c1.153-.206 3.666-.33 5.437-.413.371 8.802-.082 17.025-.082 17.025h4.242s-.453-8.223-.082-17.025c1.771.083 4.284.248 5.437.413ZM46.946 17.603C46.576 8.76 47.03.496 47.03.496h-4.243s.535 9.545 0 19.09h11.327l.412-3.636h-.288c-2.39 1.57-6.302 1.653-7.29 1.653Z" fill="#171722"></path>
                                    </svg>
                                </a>
                            </button>
                            <div className='flex items-center justify-end h-s60'>
                                <div>
                                    <button className='cursor-pointer flex items-end outline-none py-s10 -mr-s10 pr-s10 pl-s10 text-mocha-dark'>
                                        <div className='py-s10'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" class="icon-scale-0-6">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 8.25A.75.75 0 0 0 3 9v10.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566V9a.75.75 0 0 0-.75-.75H3.75Z"></path>
                                                <path fill="none" d="M7.5 8.25v-1.5a4.5 4.5 0 0 1 4.5-4.5 4.5 4.5 0 0 1 4.5 4.5v1.5"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='drawer-menu-container top-s90 fixed w-full z-[1000] overflow-hidden left-0'>
                        <div className='hide-scrollbar undefined mobile-header-style-hide-scrollbar'>
                            <div className='label-small panel outline-none pb-s100 border-t border-mocha-light null'>
                                <div className='flex flex-col justify-between'>
                                    <div className='h-full'>
                                        <div className='bg-blue-dark h-s60 flex flex-col justify-center text-white'>
                                            <div className='flex justify-between items-center px-s25'>
                                                <div className='flex items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke width="24px" height="24px" className='icon-scale-0-6 text-white mr-s5'>
                                                        <path d="M21.533 9.826c-.434-.457-.844-.88-1.032-1.336-.199-.48-.222-1.125-.234-1.746-.023-.891-.047-1.817-.61-2.38-.563-.562-1.49-.586-2.38-.609-.622-.023-1.255-.035-1.748-.234-.457-.188-.879-.598-1.336-1.032-.669-.633-1.349-1.289-2.181-1.289-.845 0-1.525.656-2.181 1.277-.458.434-.88.844-1.337 1.032-.481.2-1.126.223-1.748.234-.89.035-1.817.059-2.38.621-.563.563-.586 1.489-.61 2.38-.011.62-.035 1.254-.234 1.746-.188.457-.598.879-1.032 1.336-.633.656-1.29 1.336-1.29 2.18 0 .844.657 1.524 1.278 2.18.434.457.844.879 1.032 1.336.2.48.223 1.125.235 1.746.023.89.046 1.817.61 2.38.562.562 1.489.585 2.38.609.621.023 1.254.035 1.747.234.457.188.88.598 1.337 1.032.656.632 1.337 1.277 2.18 1.277.845 0 1.525-.656 2.182-1.277.457-.434.88-.844 1.337-1.032.48-.2 1.125-.223 1.747-.234.891-.024 1.818-.047 2.38-.61.563-.562.587-1.488.61-2.379.012-.621.035-1.254.235-1.746.187-.457.598-.88 1.032-1.336.633-.656 1.278-1.336 1.278-2.18.011-.844-.633-1.524-1.267-2.18Zm-2.157 5.075c-.235.597-.845.902-1.443 1.207-.387.2-.762.387-.996.645-.258.269-.446.668-.634 1.066-.281.598-.574 1.207-1.125 1.442-.551.246-1.196.035-1.83-.165-.41-.128-.832-.257-1.207-.257-.352.011-.74.152-1.15.293-.445.164-.902.328-1.336.328-.176 0-.364-.024-.528-.094-.598-.234-.903-.844-1.208-1.442-.2-.386-.387-.761-.645-.996-.27-.258-.668-.445-1.067-.633-.598-.28-1.208-.574-1.442-1.125-.247-.55-.035-1.195.164-1.828.129-.41.27-.844.258-1.207-.012-.352-.153-.739-.293-1.149-.223-.633-.47-1.277-.235-1.863.235-.598.845-.903 1.443-1.207.387-.2.762-.387.996-.645.258-.27.446-.668.633-1.067.282-.597.575-1.207 1.126-1.441.551-.246 1.196-.035 1.83.164.41.129.832.27 1.207.258.352-.012.74-.153 1.15-.293.633-.223 1.278-.469 1.876-.235.598.235.903.844 1.208 1.442.199.387.387.762.645.996.27.258.668.446 1.067.633.598.281 1.207.574 1.442 1.125.246.551.035 1.196-.164 1.829-.13.41-.27.843-.258 1.207.012.351.152.738.293 1.148.223.621.457 1.266.223 1.864Z"></path>
                                                        <path d="M12.012 17.104a5.1 5.1 0 0 0 5.1-5.098 5.1 5.1 0 0 0-5.1-5.098 5.1 5.1 0 0 0-5.101 5.098 5.1 5.1 0 0 0 5.1 5.098Z"></path> 
                                                    </svg>
                                                </div>
                                                <button className='border border-white rounded-md px-s15 py-s10 label-small text-white outline-none'>Learn More</button>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Featured</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Home</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Women</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Jewelry</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Beauty</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                            <button className='flex items-center bg-mocha-veryLight w-full justify-between h-s56 px-s20 outline-none border-b border-mocha-light text-blue-dark'>
                                                <p className='label-medium-semibold'>Men</p>
                                                <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="6" height="9">
                                                    <path fill-rule="evenodd"  clip-rule="evenodd" d="M.396 9.854a.5.5 0 0 1 0-.708L4.543 5 .396.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0Z" fill="#171722"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='border-t border-mocha-light pt-s10 bg-mocha-light'>
                                            <div className='pb-s20 px-s25'>
                                                <button className='flex w-full body-medium-mono uppercase pt-s10 text-mocha-dark outline-none'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" className='icon-scale-0-6'>
                                                        <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5ZM12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
                                                    </svg>
                                                    <p>Login / Register</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center pt-s16 pb-s32 px-s20 w-full bg-mocha-veryLight z-50 border-t border-mocha-light'>
                                        <a className='w-full' href='/'>
                                            <button className='w-full text-white h-s48 bg-mocha-dark hover:bg-mocha-mocha label-medium-semibold rounded-sm'>Shop All Products</button>
                                        </a>
                                        <div className='flex items-center pt-s10 gap-s8 label-small'>
                                            <p>
                                                "Free shipping on orders over $"
                                                "100"
                                            </p>
                                            <div className='bg-mocha-dark h-s4 w-s4 rounded-full'></div>
                                            <p>Easy returns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='label-small panel outline-none pb-s100 border-t border-mocha-light panel-hide-right'>
                                <div className='flex justify-between px-s20 py-s15 bg-mocha-veryLight border-b border-mocha-light text-mocha-dark'>
                                    <button className='flex items-center outline-none'>
                                        <img src="/static/icons/left-arrow.svg" alt="close button"/>
                                        <p className='pl-s15 body-medium-semibold'>&nbsp</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden xl:block'>
                <div className='text-mocha-dark z-20 transition'>
                    <header>
                        <div className='relative bg-mocha-veryLight flex flex-col border-b border-mocha-light z-40'>
                            <div className='w-full mx-auto header label-small px-s50 xl:px-s100 relative max-w-container h-s60 grid grid-cols-header'>
                                <div className='hidden justify-center py-s10 items-center transition lg:ml-s20 w-full lg2:w-1/2 header-div-block-1'>
                                    <input className='w-full transition border border-gray-300 header-search rounded-30 label-medium text-gray-1100 placeholder-gray-1100 hover:border focus:border focus:border-blacklight relative header-input-block-1' type="text" placeholder="Search for products, categories, brands, and more" value/>
                                    <div className='absolute top-s12 right-s55 lg2:right-s10 p-s5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" className='icon-scale-0-6'>
                                            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727ZM15.857 15.858 21 21.001"></path>
                                        </svg>
                                    </div>
                                    <button className='lg2:hidden label-small-semibold pl-s10 ml-s10 -mr-s10 p-s10 outline-none'>Back</button>
                                </div>
                                <button className='absolute left-0 right-0 z-10 bg-black cursor-pointer h-search top-full bg-opacity-20 backdrop-filter backdrop-blur-sm xl:left-search-dropdown xl:w-search-dropdown outline-none header-button-block-1'></button>
                                <div className='absolute left-0 right-0 h-search overflow-y-auto bg-white border-t border-gray-300 lg:h-auto lg:overflow-y-visible top-full lg:border-none hide-scrollbar pb-s100 lg:pb-0 xl:left-search-dropdown xl:w-search-dropdown false header-div-block-2'>
                                    <div className='z-30 flex flex-col w-full mx-auto lg:flex-row text-blacklight px-s25 pt-s20 pb-s100 lg:px-s50 xl:px-s100 lg:py-s20 max-w-container header-div-block-3'>
                                        <div className='flex flex-col lg:mr-s30 lg:w-s23pct'>
                                            <div></div>
                                            <div>
                                                <div className='pb-s30 mb-s30 border-gray-300 lg:border-none lg:mb-0 lg:pb-0 0'>
                                                    <p className='mb-s20 label-medium-semibold'>Trending Search Terms</p>
                                                    <a href='/'>
                                                        <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium header-button-block-2'>terry hoodie</button>
                                                    </a>
                                                    <a href='/'>
                                                        <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium header-button-block-2'>candle</button>
                                                    </a>
                                                    <a href='/'>
                                                        <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium header-button-block-2'>cashmere</button>
                                                    </a>
                                                    <a href='/'>
                                                        <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium header-button-block-2'>sunglasses</button>
                                                    </a>
                                                    <a href='/'>
                                                        <button className='text-left inline-block bg-gray-50 hover:bg-gray-300 mr-s5 mb-s10 rounded-50 label-medium header-button-block-2'>gloves</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col flex-1'>
                                            <div className='hidden lg:block'>
                                                <p className='mb-s20 label-medium-semibold'>Recently Viewed</p>
                                                <p className='text-grayMiddle label-medium'>None found. Start browsing to build your recommendations!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <a className='flex justify-center outline-none' href='/'>
                                        <svg viewBox="0 0 81 20" xmlns="http://www.w3.org/2000/svg" width="81" height="20">
                                            <path d="M80.393 6.777S80.517 0 72.361 0c-4.82 0-8.609 3.76-8.609 10 0 7.107 4.449 10 8.815 10 6.055 0 7.62-5.744 7.62-5.744h-.741s-1.69 2.604-5.437 2.604c-3.09 0-5.85-3.017-5.85-7.521 0-5.703 2.142-7.686 4.367-7.686 4.654 0 3.872 5.124 3.872 5.124h3.995ZM38.75 7.025c0-2.562-.618-6.984-7.332-6.984-7.744 0-7.827 5.124-7.827 5.124l4.325-.041s-.782-3.595 2.966-3.595c2.595 0 3.79 2.066 3.79 6.116v1.24c-1.195-.745-2.72-1.24-4.49-1.24-4.696 0-7.662 2.562-7.662 6.198 0 3.76 2.801 6.116 6.55 6.116 3.295 0 5.23-2.314 6.26-4.215h.206c0 2.025.454 3.802.454 3.802h3.377s-.618-1.819-.618-4.918V7.025Zm-8.362 10.124c-2.225 0-3.955-1.405-3.955-3.595 0-2.232 1.69-3.885 4.408-3.885 1.936 0 3.172.62 4.201 1.612l.041 2.52c-.782 1.282-2.347 3.348-4.695 3.348ZM.607.496c.535 9.545 0 19.09 0 19.09H4.85s-.536-9.545 0-19.09H.607ZM56.626.496c.536 9.545 0 19.09 0 19.09h4.243s-.536-9.545 0-19.09h-4.243ZM21.696 2.975l-.412-2.48H7.156l-.412 2.48c1.153-.206 3.666-.33 5.437-.413.371 8.802-.082 17.025-.082 17.025h4.242s-.453-8.223-.082-17.025c1.771.083 4.284.248 5.437.413ZM46.946 17.603C46.576 8.76 47.03.496 47.03.496h-4.243s.535 9.545 0 19.09h11.327l.412-3.636h-.288c-2.39 1.57-6.302 1.653-7.29 1.653Z" fill="#171722"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className='flex items-center'>
                                    <div className='relative flex justify-center w-full mx-auto label-small'>
                                        <div className='flex'>
                                            <div className='cursor-pointer mr-s20 outline-none hover:underline hover:underline-offset-header hover:decoration-2  label-small-semibold text-blue-dark' 
                                            data-heatmap-id={"header-featured"}
                                            onClick={() => setDropdown((prev) => !prev)} >
                                                Featured
                                            </div>
                                            {dataItems.map((menu, index) => {
                                                
                                                return (
                                                    <MenuItems items={menu} key={index} />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-end'>
                                    <div className='flex items-center'>
                                        <button className='mx-s10 py-s10 label-small text-mocha-dark hover:text-mocha-mocha'>Sign In</button>
                                        <button className='p-s5 outline-none text-mocha-dark hover:text-mocha-mocha'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24px" height="24px" stroke-width="1" className='icon-scale-0-6'>
                                                <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727ZM15.857 15.858 21 21.001"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='flex items-center'></div>
                                </div>
                            </div>
                            <div className={dropdownActive ? "relative z-[998] top-[1px]" :" relative z-[998] top-[1px] hidden"}>
                                <div className='header-dropdown-menu flex text-mocha-dark focus border-b border-mocha-light'>
                                    <div className='flex max-w-container mx-auto w-full px-s40 xl:px-s100 pt-s24'>
                                        <div className='header-dropdown-menu-item w-full focus grid grid-cols-6 '>
                                            <div className='flex flex-col mr-s20 gap-s16'>
                                                <div className='flex flex-col px-s10 whitespace-nowrap cursor-pointer items-start '>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        New Arrivals
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        Best Sellers
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        Atelier Series
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        Most ifted
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        Mmeber Archive
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none header-7 label-small-mono-semibold text-xl' role='button' tabindex='0' href='/'>
                                                        Shop All
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mr-s20 gap-s16 '>
                                                <div className='flex flex-col px-s10 whitespace-nowrap cursor-pointer items-start'>
                                                    <div className='mb-s16 text-mocha-mocha label-small-mono-semibold uppercase whitespace-nowrap cursor-default'>
                                                        Shop by Material
                                                    </div>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Silk
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Leather
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Cashmere
                                                    </a>
                                                </div>
                                            </div> 
                                            <div className='flex flex-col mr-s20 gap-s16 '>
                                                <div className='flex flex-col px-s10 whitespace-nowrap cursor-pointer items-start'>
                                                    <div className='mb-s16 text-mocha-mocha label-small-mono-semibold uppercase whitespace-nowrap cursor-default'>
                                                        Shop by Material
                                                    </div>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Silk
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Leather
                                                    </a>
                                                    <a className='mb-s16 whitespace-nowrap hover:text-gray-700 outline-none label-small-semibold' role='button' tabindex='0' href='/'>
                                                        Cashmere
                                                    </a>
                                                </div>
                                            </div> 
                                            <div className='col-start-5 flex flex-col space-y-5 mb-s20 w-full h-full pr-10'>
                                                <div className='w-full hover:cursor-pointer group' role='button' tabindex='0' >
                                                    <span className='spanMenu'>
                                                        <img sizes='100vw' srcset='https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=640&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 640w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=768&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 768w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=992&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 992w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=1200&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 1200w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=1600&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 1600w' decoding='async' data-nimg='responsive' className='rounded-3 object-cover ' alt='xd'/>
                                                    </span>
                                                    <p className='label-small-semibold mt-s8 group-hover:underline'>
                                                    The Featherlight Collection
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-start-6 flex flex-col space-y-5 mb-s20 w-full h-full pl-10'>
                                                <div className='w-full hover:cursor-pointer group' role='button' tabindex='0' >
                                                    <span className='spanMenu'>
                                                        <img sizes='100vw' srcset='https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=640&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 640w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=768&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 768w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=992&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 992w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=1200&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 1200w, https://air-prod.imgix.net/b06c342a-2c46-4f57-8dde-932b6f5cd717.jpg?w=1600&h=800&fm=jpg&fit=max&q=80&auto=format&ixlib=react-9.5.1-beta.1 1600w' decoding='async' data-nimg='responsive' className='rounded-3 object-cover ' alt='xd'/>
                                                    </span>
                                                    <p className='label-small-semibold mt-s8 group-hover:underline'>
                                                    The Featherlight Collection
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>  
                                 
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};
