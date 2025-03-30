import React from 'react'
import { House, CalendarDays, BotMessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MenuFixed = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="flex justify-center gap-4 bg-white p-2">
      <div
        className="group flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#D5D5FC] transition-colors duration-300"
        onClick={() => handleNavigation('/')}
      >
        <House
          size={26}
          className="text-[#374957] group-hover:text-[#5A56FC] transition-colors duration-300"
        />
      </div>

      <div
        className="group flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#D5D5FC] transition-colors duration-300"
        onClick={() => handleNavigation('/historical')}
      >
        <CalendarDays
          size={26}
          className="text-[#374957] group-hover:text-[#5A56FC] transition-colors duration-300"
        />
      </div>

      <div
        className="group flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#D5D5FC] transition-colors duration-300"
        onClick={() => handleNavigation('/chat')}
      >
        <BotMessageSquare
          size={26}
          className="text-[#374957] group-hover:text-[#5A56FC] transition-colors duration-300"
        />
      </div>
    </div>
  )
}

export default MenuFixed
