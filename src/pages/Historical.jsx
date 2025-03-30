import { CalendarDays } from 'lucide-react'
import LayoutDefault from '@/components/LayoutDefault.jsx'
import RecyclingItem from '@/components/RecyclingItem.jsx'
import RecyclingItem2 from '@/components/RecyclingItem2.jsx'
import React, { useEffect, useRef } from 'react'

function Historical() {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [])

  return (
    <LayoutDefault title="Histórico" icon={CalendarDays}>
      <RecyclingItem />
      <RecyclingItem2 />

      <div ref={messagesEndRef} />
    </LayoutDefault>
  )
}

export default Historical
