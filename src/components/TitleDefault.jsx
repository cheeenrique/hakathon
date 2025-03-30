import React from 'react'

const TitleDefault = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-2 pb-3 bg-[#F4F5FC]">
      {Icon && <Icon size={20} className="text-[#374957]" />}
      <h1 className="text-md font-semibold text-[#374957]">{title}</h1>
    </div>
  )
}

export default TitleDefault
