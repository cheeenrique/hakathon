import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

import { Play, Pause } from 'lucide-react'

const AudioPlayer = ({ audioFile }) => {
  const waveformRef = useRef(null)
  const [waveSurfer, setWaveSurfer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#A0A0A0',
      progressColor: '#5A56FC',
      barWidth: 3,
      barHeight: 2,
      cursorWidth: 2,
      height: 30,
      responsive: true,
      hideScrollbar: true,
    })

    ws.load(audioFile)
    setWaveSurfer(ws)

    return () => {
      ws.destroy()
    }
  }, [audioFile])

  const togglePlay = () => {
    if (waveSurfer) {
      if (isPlaying) {
        waveSurfer.pause()
      } else {
        waveSurfer.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex gap-2 items-center justify-center p-2 bg-white rounded-3xl border">
      <div
        className="controls"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <button
          onClick={togglePlay}
          style={{
            backgroundColor: '#5A56FC',
            border: 'none',
            borderRadius: '50%',
            padding: '6px',
            color: 'white',
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>

      <div ref={waveformRef} style={{ width: '100%' }}></div>
    </div>
  )
}

export default AudioPlayer
