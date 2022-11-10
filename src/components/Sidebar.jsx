import React from 'react'
import { links } from '../data/dummy';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { itemsToOrder } from '@syncfusion/ej2/treemap';

const Sidebar = () => {
  const activeMenue = true;
  const currentColor = "red"
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-neutral-600 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen
     md:overflow-hiddlen overflow-auto
     md:hover:overflow-auto pb-10">
      {activeMenue &&
        (
          <>
            <div className='flex justify-between items-center'>
              <Link className="items-center
               gap-3 nl-3 mt-4 flex text-xl 
               font-extrasbolad tracking-tight
               dark:text-white text-s;ate-900"
                to="/" onClick={() => { }}>
                <SiShopware /> Shoppy
              </Link>

              <TooltipComponent
                content="Menu"
                position="BottomCenter"
              >
                <button
                  type="button"
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
                >
                  <MdOutlineCancel />
                </button>

              </TooltipComponent>
            </div>

            <div className='mt-10'>
              {links.map((item) => (
                <div key={item.title}>
                  <p className='text-neutral-400 m-3 mt-4 uppercase'>{item.title}</p>
                  {item.links.map(link => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={() => { }}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>)}
    </div>
  );
};

export default Sidebar