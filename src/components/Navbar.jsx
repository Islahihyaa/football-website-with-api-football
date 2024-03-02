import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoSearch , IoSettingsOutline } from "react-icons/io5";

const NavButton = ({dotColor, icon}) => (
  <button
    type='button'
    onClick={()=> {}}
    className='relative text-xl rounded-full p-3 hover:bg-dark-gray'
  >
    <span
      style={{background: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
    />
    {icon}
  </button>
)

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 md:mr-6 relative'>
      <NavButton customFunc={() => {}} icon={<AiOutlineMenu/>} />
      <div>
        <NavButton customFunc={() => {}} icon={<IoSearch/>}/>
        <NavButton customFunc={() => {}} icon={<IoSettingsOutline/>}/>
      </div>
    </div>
  )
}

export default Navbar