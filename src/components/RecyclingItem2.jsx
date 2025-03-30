import { Card } from '@/components/ui/card'

import { FileMinus2 } from 'lucide-react'

import ImageRecyclingItem from '@/assets/check-circle-image-final.png'
import ImageHistory02 from '@/assets/history-02.png'

const RecyclingItem2 = () => {
  return (
    <Card className="w-full max-w-lg p-4 flex flex-col gap-2 rounded-3xl shadow-lg mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ImageRecyclingItem} alt="Reciclagem" className="w-8 h-8" />
          <div className="text-lg font-semibold text-gray-800">Reciclagem</div>
        </div>
        <div className="text-sm text-white bg-green-500 px-2 py-1 rounded-lg">Finalizado</div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Material:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">Latinha</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Peso aproximado:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">45kg</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Responsável pela entrega:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">Miguel Alencar</div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 text-sm font-semibold text-gray-600">
          <FileMinus2 size={18} className="text-gray-600" />
          <span>Entrega em:</span>
        </div>
        <div className="text-sm text-gray-800 font-bold">10/02/2025</div>
      </div>

      <div className="mt-4">
        <img src={ImageHistory02} alt="Produto reciclado" className="w-full h-auto rounded-lg" />
      </div>
    </Card>
  )
}

export default RecyclingItem2
