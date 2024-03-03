import React from 'react'

const Header = ({ category, title, img}) => {
    return (
      <div className='mb-10 flex'>
        {img && <img src={img} alt="Logo Header" className='w-32 h-20' />}
        <div className='ml-2'>
          <p className='text-lg text-gray-400'>{category}</p>
          <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
        </div>
      </div>
    )
  }

export default Header