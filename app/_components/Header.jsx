import { Layout, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
              <div className="flex items-center gap-8">
        <Image src='/14456.jpg' alt='logo' width={150} height={100}/>
  
            <h2 className="flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200"> <LayoutGrid className="h-5 w-5"/>Category</h2>
        </div>
    </div>
  )
}

export default Header