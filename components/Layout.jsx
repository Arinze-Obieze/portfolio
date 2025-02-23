import React from 'react'
import Sidebar from './Sidebar'

function Layout({children}) {

  return (
    <div className='flex '>

<div className='max-md:hidden w-[400px] static  bg-black '>
<Sidebar  className='max-md:hidden'/>
</div>

     <div className='w-full '>
     {children}
     </div>

    </div>
  )
}

export default Layout
