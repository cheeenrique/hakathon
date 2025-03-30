import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Switch } from '@/components/ui/switch.jsx'
import { Label } from '@/components/ui/label.jsx'

const LayoutChat = ({ children }) => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F5FC]">
      <div className="sticky top-0 w-full p-3 bg-white flex items-center justify-between z-99">
        <div onClick={() => handleNavigation('/')}>
          <ArrowLeft />
        </div>

        <div className="flex items-center space-x-2">
          <Label htmlFor="guided-recycling-mode">Reciclagem guiada</Label>
          <Switch id="guided-recycling-mode" checked disabled />
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  )
}

export default LayoutChat
