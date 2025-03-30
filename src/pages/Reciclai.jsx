import React from 'react'
import LayoutDefault from '@/components/LayoutDefault.jsx'
import { CircleDashed } from 'lucide-react'
import PaymentReceived from '@/components/PaymentReceived.jsx'
import Insight from '@/components/Insight.jsx'
import Recycling from '@/components/Recycling.jsx'
import CollectionRequest from '@/components/CollectionRequest.jsx'

function Home() {
  return (
    <LayoutDefault title="ReciclAi" icon={CircleDashed}>
      <PaymentReceived />
      <Insight />
      <CollectionRequest />
      <Recycling />
    </LayoutDefault>
  )
}

export default Home
