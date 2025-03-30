import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reciclai from './pages/Reciclai'
import Chat from './pages/Chat'
import Historical from '@/pages/Historical'

import { ToastContainer } from 'react-toastify'

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" theme="colored" />
      <Routes>
        <Route path="/" element={<Reciclai />} />
        <Route path="/historical" element={<Historical />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
