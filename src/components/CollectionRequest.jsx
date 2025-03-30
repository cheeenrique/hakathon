import React from 'react'
import { Card } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { CalendarDays } from 'lucide-react'

import ImageCollectionRequest from '@/assets/collectionRequest-icon.png'
import { useNavigate } from 'react-router-dom'

const CollectionRequest = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Card className="bg-white p-4 rounded-3xl shadow-lg gap-3 mt-5">
      <div className="flex items-center space-x-3">
        <img src={ImageCollectionRequest} alt="Check Circle" className="w-12" />
        <div className="text-xl font-semibold text-gray-800">Solicitação de Coleta</div>
      </div>
      <div>
        <div className="text-sm/4 text-gray-600 text-left">
          Você possui 1 solicitação de coleta para o dia 14/04/2025 em aberto.
        </div>
      </div>
      <Button
        className="w-full rounded-3xl"
        variant="outline"
        onClick={() => handleNavigation('/historical')}
      >
        <CalendarDays />
        Visualizar agendamento
      </Button>
    </Card>
  )
}

export default CollectionRequest
