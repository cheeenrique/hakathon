import { Card, CardContent } from '@/components/ui/card'
import { Eye, ArrowUpRight } from 'lucide-react'

import ImageInsight from '@/assets/reciclai-icon.png'

const Insight = () => {
  return (
    <Card className="w-full max-w-lg p-4 flex flex-col gap-2 mt-5 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full flex items-center justify-center">
            <img src={ImageInsight} alt="Reciclai" />
          </div>
          <div>
            <p className="text-sm font-semibold text-left">Reciclai</p>
            <p className="text-xs text-gray-500 text-left">Novo insight</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
            <Eye size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <CardContent className="p-0">
        <p className="text-sm font-semibold text-left">Você sabia que o lixo pode virar renda?</p>
        <p className="text-sm/4 text-gray-600 text-left">
          A reciclagem é uma excelente forma de transformar um material que antes parecia sem
          utilidade em matéria-prima de alto valor agregado.
        </p>
      </CardContent>
    </Card>
  )
}

export default Insight
