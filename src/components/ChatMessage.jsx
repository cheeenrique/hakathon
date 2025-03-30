import React, { useState } from 'react'
import { Image, Bot, Send, ChevronRight, User, LogOut } from 'lucide-react'
import AudioPlayer from '@/components/AudioPlayer.jsx'
import QuantityInput from '@/components/QuantityInput.jsx'

import audio2 from '@/audio/audio-2.mp3'
import audio3 from '@/audio/audio-3.mp3'
import audio4 from '@/audio/audio-4.mp3'
import audio5 from '@/audio/audio-5.mp3'
import audio6 from '@/audio/audio-6.mp3'
import deliveryMan from '@/assets/delivery-man.png'
import { useNavigate } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

import { toast } from 'react-toastify'

import { GoogleGenAI, createUserContent, createPartFromUri } from '@google/genai'
import { Backdrop, CircularProgress } from '@mui/material'

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyDbKxnUlCzpYg-_SmEYjshrF51O48WZB4M',
})

var responseIA = ''

const ChatMessage = ({ message, setChatMessages, chatMessages }) => {
  const [photo, setPhoto] = useState(null)
  const [photoIA, setPhotoIA] = useState(null)
  const [loadingIA, setLoadingIA] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setPhotoIA(file)

    const reader = new FileReader()
    reader.onload = () => {
      setPhoto(reader.result)
    }
    reader.readAsDataURL(file)

    e.target.value = ''

    setChatMessages((prevMessages) => prevMessages.filter((message) => message.order !== 2))
  }

  const processImage = async () => {
    if (!photo) return

    responseIA = ''

    const textPrompt =
      'Diga apenas o principal objeto reciclável na imagem, em português. Se não encontrar nenhum objeto reciclável, retorne "0".'

    setLoadingIA(true)

    try {
      const image = await ai.files.upload({
        file: photoIA,
      })
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [createUserContent([textPrompt, createPartFromUri(image.uri, image.mimeType)])],
      })

      if (response.text === '0' || response.text === '0\n') {
        toast.warning(
          'Não foi possível identificar o material reciclável na imagem, favor tente novamente com outra imagem!'
        )
        return
      } else {
        responseIA = response.text
      }

      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          order: 2,
          audio: audio2,
          text: `Ótimo, parece que você quer reciclar ${response.text}. Estou certo?`,
          agent: true,
        },
      ])
    } catch (error) {
      console.error('Erro ao processar a imagem:', error)
    } finally {
      setLoadingIA(false)
    }
  }

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  const handleConfirmPhoto = async () => {
    await processImage()
  }

  const handleConfirmRecycling = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        order: 3,
        text: 'Sim, próximo passo.',
        agent: false,
      },
      {
        order: 4,
        audio: audio3,
        text: `Agora me conte, quantos(as) ${responseIA} você deseja reciclar?`,
        agent: true,
      },
    ])
  }

  const handleConfirmQuantity = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        order: 5,
        text: '20.',
        agent: false,
      },
      {
        order: 6,
        audio: audio4,
        text: 'Perfeito! Coletei todos os dados necessários 😉. Ah, e não se esqueça: Para que a coleta ocorra e seja efetiva, os materiais devem estar devidamente separados, higienizados e sem os rótulos. ',
        agent: true,
      },
    ])
  }

  const handleConfirmUndestand = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        order: 7,
        text: 'Entendido.',
        agent: false,
      },
      {
        order: 8,
        audio: audio5,
        text: 'Esse é o entregador mais próximo de você. Deseja agendar a retirada?',
        agent: true,
        deliveryMan: true,
      },
    ])
  }

  const handleConfirmSchedule = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        order: 9,
        text: 'Agendar retirada para o próximo dia útil.',
        agent: false,
      },
      {
        order: 10,
        audio: audio6,
        text: 'Coleta agendada! José passará em seu endereço no próximo dia útil para buscar seus produtos.',
        agent: true,
      },
    ])
  }

  return (
    <div className="flex flex-col mb-4">
      {loadingIA && (
        <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <div className="text-md font-semibold mb-2 text-left flex items-center gap-2">
        {message.agent ? (
          <>
            <div className="flex bg-[#5A56FC] p-2 rounded-3xl">
              <Bot className="text-white" />
            </div>
            ReciclAi
          </>
        ) : (
          <>
            <div className="flex bg-[#D5D5FC] p-2 rounded-3xl">
              <User className="text-[#5A56FC]" />
            </div>
            Você
          </>
        )}
      </div>
      {message.audio && (
        <div className="text-md font-semibold mb-2 text-left">
          <AudioPlayer audioFile={message.audio} />
        </div>
      )}
      {!message.agent ? (
        <div className="text-md font-semibold mb-2 text-left italic">{message.text}</div>
      ) : (
        <div className="text-md font-semibold mb-2 text-left">{message.text}</div>
      )}
      {message.deliveryMan && (
        <div className="text-md font-semibold mb-2 text-center flex flex-col items-center gap-2 mt-4">
          <img src={deliveryMan} />
          <span>José Alves • 48 anos</span>
        </div>
      )}

      <Separator className="my-2" />

      {message.preview && (
        <div className="flex flex-col items-center mt-4">
          {photo ? (
            <div className="relative">
              <img src={photo} alt="Preview" className="max-w-full h-auto rounded-3xl" />
              <div className="absolute bottom-4 flex items-center flex-col justify-between mt-4 w-full max-w-sm px-4">
                <button
                  className="bg-blue-600 text-white p-5 rounded-full flex justify-center gap-2"
                  onClick={handleConfirmPhoto}
                  disabled={loadingIA}
                >
                  <Send size={50} />
                </button>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="mt-4 bg-white text-blue-500 py-2 px-4 cursor-pointer flex justify-center gap-2 rounded-3xl"
                >
                  <Image />
                  Enviar nova foto
                </label>
              </div>
            </div>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                id="file-input"
              />
              <label
                htmlFor="file-input"
                className="mt-4 bg-blue-500 text-white py-2 px-4 cursor-pointer flex justify-center gap-2 w-full rounded-3xl"
              >
                <Image />
                Escolher Foto
              </label>
            </>
          )}
        </div>
      )}
      {message.order === 2 && chatMessages.length < 3 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg bg-white border p-2"
            onClick={() => handleFileChange()}
          >
            <Image />
            Enviar nova foto
          </label>

          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={handleConfirmRecycling}
          >
            Próximo passo
            <ChevronRight />
          </div>
        </div>
      )}
      {message.order === 4 && chatMessages.length < 4 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg bg-white border p-2"
            onClick={() => handleFileChange()}
          >
            <Image />
            Enviar nova foto
          </label>

          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={handleConfirmRecycling}
          >
            Próximo passo
            <ChevronRight />
          </div>
        </div>
      )}

      {message.order === 4 && chatMessages.length < 5 && <QuantityInput />}

      {message.order === 4 && chatMessages.length < 5 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={handleConfirmQuantity}
          >
            Enviar resposta
            <ChevronRight />
          </div>
        </div>
      )}

      {message.order === 6 && chatMessages.length < 7 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={handleConfirmUndestand}
          >
            Entendido
            <ChevronRight />
          </div>
        </div>
      )}

      {message.order === 8 && chatMessages.length < 9 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={handleConfirmSchedule}
          >
            Agendar retirada para o próximo dia útil
            <ChevronRight />
          </div>
        </div>
      )}

      {message.order === 10 && chatMessages.length < 11 && (
        <div className="flex justify-center gap-2 w-full mt-5">
          <div
            className="group flex gap-1 flex-1 items-center justify-center rounded-lg text-white bg-blue-500 border p-2"
            onClick={() => handleNavigation('/historical')}
          >
            Finalizar
            <LogOut />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatMessage
