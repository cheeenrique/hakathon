import { Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'

import ImageRecycling from '@/assets/recycle-icon.png'
import { useNavigate } from 'react-router-dom'

const Recycling = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Card className="w-full max-w-lg p-4 flex flex-col gap-4 mt-5 rounded-3xl shadow-lg">
      <div className="flex items-start gap-3">
        <div className="rounded-full flex items-center justify-center w-24 overflow-hidden">
          <img src={ImageRecycling} alt="Reciclagem" />
        </div>
        <div>
          <p className="text-sm font-semibold text-left">Hora da reciclagem!</p>
          <p className="text-sm/3.5 text-gray-600 text-left">
            Leve os recicláveis diretamente para as cooperativas ou conte com nossos parceiros.
          </p>
        </div>
      </div>

      <button
        className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold py-2 rounded-full hover:bg-indigo-700 transition"
        onClick={() => handleNavigation('/chat')}
      >
        <Plus size={18} />
        Solicitar um catador
      </button>
    </Card>
  )
}

export default Recycling
