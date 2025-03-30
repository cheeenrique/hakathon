import React from 'react'
import LayoutDefault from '@/components/LayoutDefault.jsx'
import { CircleDashed } from 'lucide-react'

function Home() {
  return (
    <LayoutDefault title="App" icon={CircleDashed}>
      <div>Home</div>
    </LayoutDefault>
  )
}

export default Home
