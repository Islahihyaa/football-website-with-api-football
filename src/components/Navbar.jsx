import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoSearch , IoSettingsOutline } from "react-icons/io5";
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({icon, customFunc}) => (
  <button
    type='button'
    onClick={() => customFunc()}
    className='relative text-xl rounded-full p-3 hover:bg-dark-gray'
  >
    {icon}
  </button>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu } = useStateContext();
  
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  
  return (
    <div className='flex justify-between p-2 md:mr-6 relative'>
      <NavButton customFunc={handleActiveMenu} icon={<AiOutlineMenu/>} />
      <div>
        <NavButton customFunc={() => {}} icon={<IoSearch/>}/>
        <NavButton customFunc={() => {}} icon={<IoSettingsOutline/>}/>
      </div>
    </div>
  )
}

export default Navbar