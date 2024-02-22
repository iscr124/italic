const Dropdown = ({ submenus, dropdownActive }) => {
    return (
        <div className={/* dropdownActive ? "list-none" : */ " hidden"}>
          <div className='relative z-[998]'>
            <div className='header-dropdown-menu flex text-mocha-dark focus border-b border-mocha-light'>
                                  <div className='flex max-w-container mx-auto w-full px-s40 xl:px-s100 pt-s24'>
                                      <div className='header-dropdown-menu-item w-full focus grid grid-cols-6'>
                                          <div className='flex flex-col mr-s20 gap-s16'>
                                              <div className='flex flex-col px-s10 whitespace-nowrap cursor-pointer items-start'>
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
                                          <div className='flex flex-col mr-s20 gap-s16'>
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
                                          <div className='flex flex-col mr-s20 gap-s16'>
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
    );
  };
  
  export default Dropdown;