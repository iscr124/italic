import Dropdown from './Dropdown';
/* import { useState } from "react"; */

const MenuItems = ({ items }) => {

  /* const [dropdownActive, setDropdown] = useState(false); */

  return (
    <div>
      {items.submenu ? (
        <>
          <button  /* aria-expanded={dropdownActive ? "true" : "false"} */
                /* onClick={() => setDropdown((prev) => !prev)}   */
                className=' cursor-pointer mr-s20 outline-none hover:underline hover:underline-offset-header hover:decoration-2 label-small hover:label-small-semibold undefined' 
                data-heatmap-id={"header-featured" + items.title} 
                tabindex="0" 
                type="button"
          >
            {items.title}
          </button>
          <Dropdown /* dropdownActive={dropdownActive} *//>
        </>
      ) : (
        <div /* aria-haspopup="menu" */ className='cursor-pointer mr-s20 outline-none hover:underline hover:underline-offset-header hover:decoration-2 label-small hover:label-small-semibold undefined' data-heatmap-id={"header-featured" + items.title} tabindex="0" role="button">
          {items.title}
        </div>
      )}
    </div>
  );
};

export default MenuItems;