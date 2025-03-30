import { Card } from '@/components/ui/card'

import { FileMinus2, AlertCircle } from 'lucide-react'

import ImageRecyclingItem from '@/assets/check-circle-image.png'
import ImageHistory01 from '@/assets/history-01.png'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const RecyclingItem = () => {
  return (
    <Card className="w-full max-w-lg p-4 flex flex-col gap-2 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ImageRecyclingItem} alt="Reciclagem" className="w-8 h-8" />
          <div className="text-lg font-semibold text-gray-800">Reciclagem</div>
        </div>
        <div className="text-sm text-white bg-blue-500 px-2 py-1 rounded-lg">Em aberto</div>
      </div>

      <div className="flex items-center">
        <Alert variant="warning" className="bg-yellow-100 border border-yellow-500 text-yellow-700">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="font-semibold text-left">Atenção</AlertTitle>
          <AlertDescription className="text-left text-yellow-600">
            Nunca permita a entrada de desconhecidos em sua casa.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Material:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">Garrafa de plástico</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Peso aproximado:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">3kg</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Responsável pela entrega:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">José Alves</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Entrega em:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">14/04/2025</div>
      </div>

      <div className="mt-4">
        <img src={ImageHistory01} alt="Produto reciclado" className="w-full h-auto rounded-lg" />
      </div>
    </Card>
  )
}

export default RecyclingItem
