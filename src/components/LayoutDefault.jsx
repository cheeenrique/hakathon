import React from 'react'
import MenuFixed from '@/components/MenuFixed.jsx'
import TitleDefault from '@/components/TitleDefault.jsx'

const LayoutDefault = ({ children, title, icon }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F5FC]">
      <div className="sticky top-0 w-full z-9999">
        <TitleDefault title={title} icon={icon} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto">{children}</div>

      <div className="sticky bottom-0 w-full">
        <MenuFixed />
      </div>
    </div>
  )
}

export default LayoutDefault
