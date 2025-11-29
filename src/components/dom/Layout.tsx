import { useRef } from 'react'
import type { ParentComponent } from '@/types/general.ts';
import Scene from '@/components/canvas/Scene.tsx';


export const Layout: ParentComponent = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}
