import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'

import ImagePayment from '@/assets/payment-image.png'

const PaymentCard = () => {
  return (
    <Card className="w-full max-w-md p-0 rounded-3xl shadow-lg">
      <CardContent className="p-4 flex justify-between items-end">
        <div className="w-full">
          <div className="flex gap-1 items-center mb-4">
            <p className="text-md font-semibold">Você já reciclou</p>
          </div>
          <div className="flex gap-1 items-center mt-1">
            <h2 className="text-xl font-bold">14 kg</h2>
          </div>

          <div className="flex gap-1 items-center mt-1">
            <p className="text-sm text-gray-500">Este mês</p>
            <div className="flex items-center bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md">
              <ArrowUpRight size={16} className="mr-1" />
              <span className="font-semibold">+ 18.00%</span>
            </div>
          </div>
        </div>

        <div className="text-green-600">
          <img src={ImagePayment} alt="" />
        </div>
      </CardContent>
    </Card>
  )
}

export default PaymentCard
