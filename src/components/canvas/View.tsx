import { forwardRef, useImperativeHandle, useRef } from 'react'
import { OrbitControls, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'


const View = forwardRef<HTMLDivElement, any>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => localRef.current!)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef as any}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export default View;
