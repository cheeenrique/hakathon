import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(20)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-2">
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={decrement}
          className="w-10 h-10 bg-white border rounded-full text-xl text-blue-500"
        >
          -
        </Button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full h-10 text-center border rounded-md text-lg focus:outline-none bg-white"
        />
        <Button
          onClick={increment}
          className="w-10 h-10 bg-white border rounded-full text-xl text-blue-500"
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default QuantityInput
