import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove )
    }

    return () => {
      window.removeEventListener('pointermove', handleMove )
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  })

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,  
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguimiento del puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
